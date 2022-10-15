import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function MenuItem({title, to, icon}) {
    return ( 
        <NavLink to = {to} className={(nav)=>cx('menu-item',{active:nav.isActive})} end>
            {icon} <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title : PropTypes.string.isRequired,
    to : PropTypes.string.isRequired,
    icon : PropTypes.node,
}
export default MenuItem;