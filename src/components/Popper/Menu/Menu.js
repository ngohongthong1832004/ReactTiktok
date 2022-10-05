import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);


function Menu({children , items = []}) {
    const renderItem = ()=>{
        return items.map((item,index)=>{
            return <MenuItem key={index} data={item} />
        })
    }

    return ( 
        <Tippy
                    //this is the logic click input
                    // visible ={resultInput.length > 0}
                    // this is the logic selecter whole
                    delay={[0,500]}
                    placement= 'bottom-end'
                    interactive = {true}
                    render={attrs => (
                            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                               <PopperWrapper className={cx('menu-popper')}>
                                    {renderItem()}
                                </PopperWrapper>  
                            </div>
                       
                    )}
                >
                    {children}
                </Tippy>
     );
}

export default Menu;