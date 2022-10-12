import PropTypes from 'prop-types'

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './AcountItem.module.scss'

const cx = classNames.bind(styles)


function AcountItem ( {data}) {
    return ( 
        <Link to = {`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}> 
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                
                 {data.tick &&   <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />}
                </h4>
                <div className={cx('username')}>{data.first_name}</div>
            </div>
        </Link>
     );
}
AcountItem.propTypes = {
    data: PropTypes.object.isRequired
}
export default AcountItem;