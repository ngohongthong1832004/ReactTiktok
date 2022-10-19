import { useState,useEffect } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu from '~/layouts/components/SideBar/Menu/Menu';
import MenuItem from '~/layouts/components/SideBar/Menu/MenuItem';
import { HomeIcon, LiveIcon, Usericon,  } from '~/components/icon';
import SuggestedAcount from '../SuggestAcounts';
import * as userSevices from '~/services/userServices'

const cx = classNames.bind(styles);

const INIT_PAGE = 1
const PER_PAGE = 3
function SideBar({}) {
    const [page,setPage] = useState(INIT_PAGE)
    const [isSeeAlL,setIsSeeAll] = useState(false)
    const [suggestedUser,setSuggestedUser] = useState([])

    useEffect(()=>{
        userSevices
            .getSuggest({page,perPage :PER_PAGE})
            .then(data =>{
                setSuggestedUser(prev =>[...prev,...data] )
            })
            .catch(error => console.log(error))
    },[page])

    const handleOnViewChange = (isSeeAlL)=>{
        setIsSeeAll((prev)=>!prev)
        if(isSeeAlL) { 
            setPage(page+1)
        }else{

        }
    }


    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem  title = "For You" to = {config.routes.home} icon= {<HomeIcon/>}/>
                <MenuItem title = "Following" to = {config.routes.following} icon= {<Usericon/>}/>
                <MenuItem title = "Live" to = {config.routes.live} icon= {<LiveIcon/>}/>
            </Menu>
            <SuggestedAcount data = {suggestedUser} isSeeAll = {isSeeAlL} onViewChange = {handleOnViewChange} lable="Suggested Account"/>
        </aside>
    );
}

export default SideBar;
