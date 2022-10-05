import { faL } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'


const cx = classNames.bind(styles)


function Button( {
     to,
     href,
     primary = false,
     outline = false,
     small = false,
     medium =false,
     large =false,
     text = false,
     disabled =false,
     round = false,
     className,
     iconLeft,
     iconRight,
     onClick,
     children, ...passProps
    } ) {
    let Component = 'button'
    const classes = cx('wrapper' ,{
        //enhance oject literal
        primary,
        outline,
        small,
        medium,
        large,
        text,
        disabled,
        round,
        [className]:className
    })
    const props = {onClick, ...passProps}
    if(to){
        props.to =to
        Component = Link
    } else if(href){
        props.href = href
        Component = "a"
    }
    if(disabled){
        delete props.onClick
    }
    return ( 
         <Component className= {classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
         </Component>
     );
}
 
export default Button;