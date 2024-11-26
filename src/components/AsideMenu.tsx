import React from 'react'
import useAsideAction from '../Hooks/useAsideAction';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { LuPackageOpen } from 'react-icons/lu';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { VscFeedback } from 'react-icons/vsc';
import { IoNewspaperOutline } from 'react-icons/io5';

const AsideMenu: React.FunctionComponent = () => {
  const { asideState, setAsideState } = useAsideAction();

  const [asideLink, SetAsideLink] = React.useState<number>(1);

  const handleAsideLink = (index: number) => {
    SetAsideLink(index)
  }

  return (
    <div className={`Aside-menu ${asideState ? 'active' : ''}`}>

        <div className="aside-head">
            <div className="aside-title">
                Menu
            </div>
            <div
                className="aside-exit-btn"
                onClick={setAsideState}
            >
                <IoMdClose />
            </div>
        </div>

        <hr />

        <div className="aside-menu-list">
            <ul>
                <li>
                    <a
                        onClick={() => handleAsideLink(1)}
                        className={`${asideLink === 1 ? 'active' : ''}`}
                        href="#">
                            <AiOutlineHome /> Home
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleAsideLink(2)}
                        className={`${asideLink === 2 ? 'active' : ''}`}
                        href="#">
                            <LuPackageOpen /> Products
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleAsideLink(3)}
                        className={`${asideLink === 3 ? 'active' : ''}`}
                        href="#">
                            <MdOutlineShoppingBag /> Shop
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleAsideLink(4)}
                        className={`${asideLink === 4 ? 'active' : ''}`}
                        href="#">
                            <GiTakeMyMoney /> Pricing
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleAsideLink(5)}
                        className={`${asideLink === 5 ? 'active' : ''}`}
                        href="#">
                            <VscFeedback /> Contact Us
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => handleAsideLink(6)}
                        className={`${asideLink === 6 ? 'active' : ''}`}
                        href="#">
                            <IoNewspaperOutline /> Blog
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default AsideMenu