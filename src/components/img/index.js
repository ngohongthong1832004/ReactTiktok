import classNames from 'classnames';
import {useState,forwardRef} from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';
import PropTypes from 'prop-types'
const  Image = forwardRef(({
     src,
     alt,
     className,
     fallBack:customFallback = images.noImaga,
    ...progs},
     ref) => {

    const [fallBack , setFallback] = useState('')
    const handleError = ()=>{
        setFallback(customFallback)
    }

    return ( 
        <img className={classNames(styles.wrapper ,className)} ref={ref} src= {fallBack || src } alt={alt} {...progs}  onError={handleError}/>
     );
});

Image.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    className : PropTypes.string,
}
export default Image;