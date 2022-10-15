
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import Button from "~/components/Button";
import PropTypes from 'prop-types'

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
MenuItem.propTypes = {
    onclick : PropTypes.func,
}
export default MenuItem;