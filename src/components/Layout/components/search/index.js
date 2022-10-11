import HeadlessTippy from '@tippyjs/react/headless'; 
import {Wrapper as PopperWrapper} from '~/components/Popper';
import AcountItem from '~/components/AcountItem';
import {faCircleXmark, faMagnifyingGlass,  faSpinner, } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useDebounce} from '~/hooks'
import axios from 'axios';
import * as searchServices from '~/apiServices/searchServices';


const cx = classNames.bind(styles)




function Search() {

    const [sreachResult,setSearchResult] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)
    const inputRef = useRef()
    
    const debounce = useDebounce(searchValue,500)
    useEffect(()=>{

        if(!debounce.trim()){
            setSearchResult([])
            return;
         }
        
       const fetchApi = async()=>{
        setLoading(true)
        const result = await searchServices.search(debounce,"less")
        setSearchResult(result)
        setLoading(false)
       }
       fetchApi()


    },[debounce])
    const handleHideResult=()=>{
        setShowResult(false)
    }
    return ( 
        <HeadlessTippy
                    //this is the logic click input
                    visible ={showResult && sreachResult.length > 0}
                    // this is the logic selecter whole
                    interactive = {true}
                    onClickOutside = {handleHideResult}
                    render={attrs => (
                       
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                               <PopperWrapper >
                                    <h4 className={cx('search-title')}>
                                        Acount
                                    </h4>
                                {sreachResult.map((result)=>{
                                    return <AcountItem key={result.id} data ={result}/>
                                })}
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
                        {!!searchValue && !loading && (
                        <button 
                            className={cx('clear')} 
                            onClick = {()=>{
                                setSearchValue('')
                                setSearchResult([])
                                 inputRef.current.focus() 
                                }
                            }
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>)}
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </HeadlessTippy>
     );
}

export default Search;