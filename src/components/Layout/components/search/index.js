import HeadlessTippy from '@tippyjs/react/headless'; 
import {Wrapper as PopperWrapper} from '~/components/Popper';
import AcountItem from '~/components/AcountItem';
import {faCircleXmark, faMagnifyingGlass,  faSpinner, } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const cx = classNames.bind(styles)




function Search() {

    const [resultInput,setResultInput] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [showResult,setShowResult] = useState(true)
    const inputRef = useRef()
    
    useEffect(()=>{
        setTimeout(()=>{
            setResultInput([1,2,3])
        },1000)

    },[])
    const handleHideResult=()=>{
        setShowResult(false)
    }
    return ( 
        <HeadlessTippy
                    //this is the logic click input
                    visible ={showResult && resultInput.length > 0}
                    // this is the logic selecter whole
                    interactive = {true}
                    onClickOutside = {handleHideResult}
                    render={attrs => (
                       
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                               <PopperWrapper >
                                    <h4 className={cx('search-title')}>
                                        Acount
                                    </h4>
                                    <AcountItem/>
                                    <AcountItem/>
                                    <AcountItem/>
                                    <AcountItem/>
                                </PopperWrapper>  
                            </div>
                       
                    )}
                >
                    <div className={cx('search')}>
                        <input 
                            ref = {inputRef}
                            value={searchValue}
                            placeholder='Search here' 
                            spellCheck={false} 
                            onChange = {e=>setSearchValue(e.target.value)}
                            onFocus = {()=> setShowResult(true)}
                        />
                        {!!searchValue && (
                        <button 
                            className={cx('clear')} 
                            onClick = {()=>{
                                setSearchValue('')
                                setResultInput([])
                                 inputRef.current.focus() 
                                }
                            }
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)}
                            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </HeadlessTippy>
     );
}

export default Search;