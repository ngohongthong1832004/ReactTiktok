import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AcountPreview.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AcountPreview({data}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avartar')} src={data.avatar} alt={data.nickname}/>
                <div><Button primary small>Following</Button></div>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-infor')}>
                    <p className={cx('nickname')}>
                        <strong >{data.nickname}</strong>
                        {data && <FontAwesomeIcon className={cx('icon-tick')} icon = {faCheckCircle}/>}
                    </p>
                    <p className={cx('name')}>{`${data.first_name}${data.first_name}`}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('count')}>{data.followers_count}</strong>
                        <span className={cx('lable')}>Follower</span>
                        <strong className={cx('count')}>{data.likes_count}</strong>
                        <span className={cx('lable')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default AcountPreview;