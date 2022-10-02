import { faL } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'


const cx = classNames.bind(styles)


function Button( {to, href, primary = false, outline = false, small = false,medium =false,large =false, text = false, onClick, children, ...passProps} ) {
    let Component = 'button'
    const classes = cx('wrapper' ,{
        //enhance oject literal
        primary,
        outline,
        small,
        medium,
        large,
        text,
    })
    const props = {onClick, ...passProps}
    if(to){
        props.to =to
        Component = Link
    } else if(href){
        props.href = href
        Component = "a"
    }
    return ( 
         <Component className= {classes} {...props}>
            <span>{children}</span>
         </Component>
     );
}
 
export default Button;