import classNames from "classnames/bind";
import styles from './suggestAcount.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AcountPreview from "./AcountItempreview";


const cx = classNames.bind(styles)


function AcountItem({data}) {
    
    
    const renderPreview = (props)=>{
        return (
            <div className={cx('preview')} tabIndex = '-1' {...props}>
                <PopperWrapper>
                    <AcountPreview data = {data}></AcountPreview>
                </PopperWrapper>
            </div>
        )
    }
    
    
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
                    <img className={cx('avartar')} alt={data.nickname} src={data.avatar}></img>
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong >{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('icon-tick')} icon = {faCheckCircle}/>}
                        </p>
                        <p className={cx('name')}>{`${data.first_name}${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

export default AcountItem;