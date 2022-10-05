import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faEarthAfrica, faEllipsisVertical, faMagnifyingGlass, faQuestion, faQuestionCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!


import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import Menu from '~/components/Popper/Menu/Menu.js';
import AcountItem from '~/components/AcountItem';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';




const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon = {faEarthAfrica}/>,
        title : 'English',
    },
    {
        icon : <FontAwesomeIcon icon = {faQuestionCircle}/>,
        title : 'Feedback',
        to : '/feedback'
    },
    {
        icon : <FontAwesomeIcon icon = {faKeyboard}/>,
        title : 'Keyboard',
    }
]

const cx = classNames.bind(styles);
function Header() {
    const [resultInput,setRearchInput] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setRearchInput([1,2,3])
        },3000)
    },[])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                   <img src={images.logo.default} alt='tiktok'/>
                </div>
                <Tippy
                    //this is the logic click input
                    // visible ={resultInput.length > 0}
                    // this is the logic selecter whole
                    interactive = {true}
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
                        <input placeholder='Search here' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {/* <Button outline large iconRight={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Register</Button> */}
                    <Button text >Up Load</Button>
                    <Button  primary >Log In</Button>
                    {/* <Button ouline round className={cx('test')}>uu</Button> */}
                    {/* <Button disabled primary large >Text</Button> */}
                        <Menu
                            items = {MENU_ITEMS}
                        
                        >
                            <button className={cx('btn-bars')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
