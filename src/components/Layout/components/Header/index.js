import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faCloud, faEarthAfrica, faEllipsisVertical, faLongArrowAltLeft, faLongArrowAltRight, faMagnifyingGlass, faMessage, faQuestion, faQuestionCircle, faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react'; 
import HeadlessTippy from '@tippyjs/react/headless'; 
import 'tippy.js/dist/tippy.css';


import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import Menu from '~/components/Popper/Menu/Menu.js';
import AcountItem from '~/components/AcountItem';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon } from '~/components/icon';
import Image from '~/components/img';



const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon = {faEarthAfrica}/>,
        title : 'English',
        children:{
            title :' Language',
            data :[
                {
                    type :'language',
                    code :'en',
                    title :'English'
                },
                {
                    type :'language',
                    code :'vi',
                    title :'Viet'
                }
            ]
        }
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
    let currentUser = true

    useEffect(()=>{
        setTimeout(()=>{
            setRearchInput([1,2,3])
        },3000)

    },[])
    const handleMenuChange=(menuItem)=>{
        switch (menuItem.type) {
            case  'language' :
                break;
            default :
        }
        
        
        console.log(menuItem)
    }

    const userMenu =[
        {
            icon : <FontAwesomeIcon icon = {faQuestionCircle}/>,
            title : 'View Profile',
        
        },
        {
            icon : <FontAwesomeIcon icon = {faQuestionCircle}/>,
            title : 'Get Coin',
        
        },
        {
            icon : <FontAwesomeIcon icon = {faQuestionCircle}/>,
            title : 'About',
        
        },
        ...MENU_ITEMS,
        {
            icon : <FontAwesomeIcon icon = {faLongArrowAltRight}/>,
            title : 'log out',
            to : '/feedback',
            saperate :true
        },
    ]


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                   <img src={images.logo.default} alt='tiktok'/>
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                    <div className={cx('actions')}>
                            {currentUser ?(
                                <>
                                    <Tippy delay = {[0,200]} content = 'Upload Video' placement='bottom'>
                                        <button className={cx('action-btn')}>
                                            <UploadIcon/>

                                        </button>
                                    </Tippy>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon ={faMessage}/>
                                    </button>
                                </>
                            ):
                        <>
                            {/* <Button outline large iconRight={<FontAwesomeIcon icon={faMagnifyingGlass}/>}>Register</Button> */}
                            <Button text >Up Load</Button>
                            <Button  primary >Log In</Button>
                            {/* <Button ouline round className={cx('test')}>uu</Button> */}
                            {/* <Button disabled primary large >Text</Button> */}
                        </>
                            }
                                <Menu
                                    items = {currentUser? userMenu  : MENU_ITEMS}
                                    onChange = {handleMenuChange}
                                
                                >
                                    { (currentUser)?(
                                        <Image
                                            className={cx('user-avatar')}
                                            src = 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg' 
                                            alt = 'img'
                                            //cai nay dung de chuyen anh mac dinh vao
                                            fallBack = 'https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                                        />
                                    ):
                                    <button className={cx('btn-bars')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                    }
                                </Menu>
                    </div>




            </div>
        </header>
    );
}

export default Header;
