import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu from '~/layouts/components/SideBar/Menu/Menu';
import MenuItem from '~/layouts/components/SideBar/Menu/MenuItem';
import { HomeIcon, LiveIcon, Usericon,  } from '~/components/icon';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem  title = "For You" to = {config.routes.home} icon= {<HomeIcon/>}/>
                <MenuItem title = "Following" to = {config.routes.following} icon= {<Usericon/>}/>
                <MenuItem title = "Live" to = {config.routes.live} icon= {<LiveIcon/>}/>
            </Menu>
        </aside>
    );
}

export default SideBar;
