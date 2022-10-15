import classNames from "classnames/bind";
import styles from './suggestAcount.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AcountPreview from "./AcountItempreview";


const cx = classNames.bind(styles)

const renderPreview = (props)=>{
    return (
        <div className={cx('preview')} tabIndex = '-1' {...props}>
            <PopperWrapper>
                <AcountPreview></AcountPreview>
            </PopperWrapper>
        </div>
    )
}

function AcountItem({}) {
    return ( 
        <div>
            <Tippy
                interactive
                delay={[800,0]}
                placement = {'bottom'}
                render = {renderPreview}
                offset = {[-70,0]}
            >
                <div className={cx('acount-item')}>
                    <img className={cx('avartar')} alt="" src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg"></img>
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong >baphongpine</strong>
                            <FontAwesomeIcon className={cx('icon-tick')} icon = {faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Ngo Hong Thong</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

export default AcountItem;