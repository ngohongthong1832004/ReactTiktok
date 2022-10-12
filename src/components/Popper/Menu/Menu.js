import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from './Header';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);


const defaultFc = ()=>{}
function Menu({children , items = [],hideOnClick = "true", onChange={defaultFc}}) {
    const [history,setHistory] = useState([{data : items}])
    const current = history[history.length - 1]
    

    const renderItem = ()=>{
        return current.data.map((item,index)=>{
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={
               ()=>{
                if (isParent){
                   setHistory((pre)=>[...pre,item.children])
                } else{
                    onChange(item)
                }
               }
            } />
        })
    }
    return ( 
        <Tippy
                    //this is the logic click input
                    // visible ={resultInput.length > 0}
                    // this is the logic selecter whole
                    hideOnClick = {hideOnClick = "false"}
                    delay={[0,500]}
                    offset={[18,10]}
                    placement= 'bottom-end'
                    interactive = {true}
                    render={attrs => (
                            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                               <PopperWrapper className={cx('menu-popper')}>

                                   {history.length>1 && <Header title={current.title} onBack={()=>{
                                    setHistory(pre=>pre.slice(0,pre.length-1))
                                   }}/>}
                                    <div className={cx('body')}>{renderItem()}</div>
                                </PopperWrapper>  
                            </div>
                       
                    )}
                    onHide  ={()=> setHistory(pre => pre.slice(0,1))}
                >
                    {children}
                </Tippy>
     );
}
Menu.propTypes = {
    items : PropTypes.array,
    hideOnClick : PropTypes.bool,
    children : PropTypes.node.isRequired,
    onChange : PropTypes.func,

}
export default Menu;