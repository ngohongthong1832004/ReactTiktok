import classNames from "classnames/bind";
import styles from './suggestAcount.module.scss'
import PropTypes from 'prop-types';
import AcountItem from "./AcountItem";

const cx = classNames.bind(styles)



function SuggestedAcount({lable}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AcountItem/>
            <AcountItem/>
            <AcountItem/>
            <p className={cx('see-all')}>See all</p>
        </div>
     );
}

export default SuggestedAcount;