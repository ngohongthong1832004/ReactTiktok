
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import Button from "~/components/Button";
import PropTypes from 'prop-types'
import Menu from './Menu';

const cx = classNames.bind(styles);

function MenuItem( {data, onClick}) {
    const classes =cx('menu-item',{
        saperate : data.saperate
    })

    return ( 
        <Button className={classes} iconLeft={data.icon} to ={data.to} onClick= {onClick}>
            {data.title}
        </Button>
     );
}
Menu.propTypes = {
    data : PropTypes.object.isRequired,
    data : PropTypes.func,
}
export default MenuItem;