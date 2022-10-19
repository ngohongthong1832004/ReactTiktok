import classNames from "classnames/bind";
import styles from './suggestAcount.module.scss'
import AcountItem from "./AcountItem";

const cx = classNames.bind(styles)



function SuggestedAcount({data = [],isSeeAll,lable,onViewChange}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {data.map((acount)=><AcountItem key={acount.id} data = {acount} />)}

            <p className={cx('see-all')} onClick = {()=>onViewChange(!isSeeAll)}>
            { isSeeAll ?'See Less' :'See all'}
            </p>
        </div>
     );
}

export default SuggestedAcount;