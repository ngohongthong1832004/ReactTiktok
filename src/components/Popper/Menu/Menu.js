import Tippy from '@tippyjs/react/headless'; // different import path!
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Header from './Header';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);


const defaultFc = ()=>{}
function Menu({children , items = [], onChange=defaultFc}) {
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
                    delay={[0,500]}
                    offset={[18,10]}
                    placement= 'bottom-end'
                    interactive = {true}
                    render={attrs => (
                            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                               <PopperWrapper className={cx('menu-popper')}>

                                   {history.length>1 && <Header title="langues" onBack={()=>{
                                    setHistory(pre=>pre.slice(0,pre.length-1))
                                   }}/>}
                                    {renderItem()}
                                </PopperWrapper>  
                            </div>
                       
                    )}
                    onHide  ={()=> setHistory(pre => pre.slice(0,1))}
                >
                    {children}
                </Tippy>
     );
}

export default Menu;