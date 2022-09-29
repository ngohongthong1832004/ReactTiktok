import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AcountItem.module.scss'

const cx = classNames.bind(styles)


function AcountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://hinhgaixinh.com/wp-content/uploads/2022/03/anh-gai-xinh-hoc-sinh-tuyet-dep.jpg" alt="Pine" />
            <div className={cx('info')}> 
                <h4 className={cx('name')}>
                    <span>Bap Hong Pine</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <div className={cx('username')}>Thong</div>
            </div>
        </div>
     );
}

export default AcountItem;