import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AcountPreview.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AcountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avartar')} src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"  alt="pine"/>
                <div><Button primary small>Following</Button></div>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-infor')}>
                    <p className={cx('nickname')}>
                        <strong >baphongpine</strong>
                        <FontAwesomeIcon className={cx('icon-tick')} icon = {faCheckCircle}/>
                    </p>
                    <p className={cx('name')}>Ngo Hong Thong</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('count')}>8.2M</strong>
                        <span className={cx('lable')}>Follower</span>
                        <strong className={cx('count')}>8.2M</strong>
                        <span className={cx('lable')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default AcountPreview;