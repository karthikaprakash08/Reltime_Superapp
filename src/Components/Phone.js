import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'


function Phone() {

    const [selectedIcon, setSelectedIcon] = useState(null);

    const change = (icon) => {
        setSelectedIcon(icon);
    }

    const context = useContext(Context);
    const [date, setdate] = useState(new Date());

    const showTime = date.getHours().toString().padStart(2, '0') 
        + ':' + date.getMinutes().toString().padStart(2, '0');

        useEffect(() => {
            const interval = setInterval(() => {
              setdate(new Date());
            }, 500);
        
            return () => clearInterval(interval);
          }, []);
        
  return (
    <div className='design_head'>
        <div className="iphoneFront ">
          <div className="frame"></div>
            <div className="antenas">
                <div className="tt"></div>
                <div className="tr"></div>
                <div className="tl"></div>
                <div className="bb"></div>
                <div className="br"></div>
                <div className="bl"></div>
            </div>
            <div className="keys">
                <div className="silent"></div>
                <div className="volt"></div>
                <div className="volb"></div>
                <div className="lock"></div>
            </div>

            <div className="screen">

                <div className='top_screen'>
                    <div className='time' style={{color:"white", fontWeight:"600"}}>{showTime}</div> 

                    <div className="island">
                        <div className="camera"></div>   
                    </div>

                    <div className='battery' style={{width:"10px",height:"10px", background:"none"}}></div> 
                </div>     

                <div className='span_div'>
                    <p className='span_top_screen'>HU</p>
                    <span className='hello' >Hello User</span>
                    <FontAwesomeIcon icon={faBell} className='icon_bell' /> 
                </div>
                <div className='center_screen'>
                    {!context.Accountscard && !context.Loanscard && ! context.DEXcard && <img className='phone_logo' src="https://reltime-super-app.netlify.app/images/phone_logo.png" alt="new"  style={{width:"85%", position:"relative", top:"120px", left:"20px"}}></img>}
                    {context.Accountscard && <div className='card-container accounts'>
                    <div className='card-header'>
                        <h3>Accounts</h3>
                    </div>
                    <div className='card-body phone-card-body'>
                        {context.Accountscarditems[0] && <div className='card-items'>
                            <FontAwesomeIcon icon={faHandHoldingDollar} />
                            <span>Deposit</span>
                        </div>}
                        {context.Accountscarditems[1] && <div className='card-items'>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            <span>Transfer</span>
                        </div>}
                        {context.Accountscarditems[2] && <div className='card-items'>
                            <FontAwesomeIcon icon={faWallet} />
                            <span>Wallet</span>
                        </div>}
                        {context.Accountscarditems[3] && <div className='card-items'>
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>Contact</span>
                        </div>}
                        {context.Accountscarditems[4] && <div className='card-items'>
                            <FontAwesomeIcon icon={faCommentDollar} />
                            <span>Transaction</span>
                        </div>}
                    </div>
                    </div>}

                    {context.Loanscard && <div className='card-container Loans'>
                    <div className='card-header'>
                        <h3>Loans</h3>
                    </div>
                    <div className='card-body phone-card-body'>
                            {context.Loanscarditems[0] && <div className='card-items'>
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                                <span>Lend</span>
                            </div>}
                            {context.Loanscarditems[1] && <div className='card-items'>
                                <FontAwesomeIcon icon={faLandmark} />
                                <span>Borrow</span>
                            </div>}
                            {context.Loanscarditems[2] && <div className='card-items'>
                                <FontAwesomeIcon icon={faSackDollar} />
                                <span>Earning</span>
                            </div>}
                            {context.Loanscarditems[3] && <div className='card-items'>
                                <FontAwesomeIcon icon={faAddressBook} />
                                <span>Contact</span>
                            </div>}
                            {context.Loanscarditems[4] && <div className='card-items'>
                                <FontAwesomeIcon icon={faCommentDollar} />
                                <span>Transaction</span>
                            </div>}</div>
                        </div>}
                       {context.DEXcard && <div className='card-container DEX'>
                        <div className='card-header'>
                            <h3>DEX</h3>
                        </div>
                        <div className='card-body phone-card-body'>
                                {context.DEXcarditems[0] && <div className='card-items'>
                                    <FontAwesomeIcon icon={faListCheck} />
                                    <span>List</span>
                                </div>}
                                {context.DEXcarditems[1] && <div className='card-items'>
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                                    <span>Exchange</span>
                                </div>}
                                {context.DEXcarditems[2] && <div className='card-items'>
                                    <FontAwesomeIcon icon={faWallet} />
                                    <span>Earning</span>
                                </div>}
                                {context.DEXcarditems[3] && <div className='card-items'>
                                    <FontAwesomeIcon icon={faAddressBook} />
                                    <span>Contact</span>
                                </div>}
                                {context.DEXcarditems[4] && <div className='card-items'>
                                    <FontAwesomeIcon icon={faCommentDollar} />
                                    <span>Transaction</span>
                                </div>}
                            </div>
                        </div>}
                    </div>
                    <div className='bottom_screen'>
                        <div className='inside_screen'>
                            <FontAwesomeIcon icon={faHouse} className={selectedIcon === faHouse ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faHouse)} /> 
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={selectedIcon === faMagnifyingGlass ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faMagnifyingGlass)} />
                            <FontAwesomeIcon icon={faQrcode} className={selectedIcon === faQrcode ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faQrcode)} /> 
                            <FontAwesomeIcon icon={faImage} className={selectedIcon === faImage ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faImage)} /> 
                            <FontAwesomeIcon icon={faGear} className={selectedIcon === faGear ? 'fa-sharp' : 'fa-solid'} onClick={() => change(faGear)} />
                        </div>
                    </div>
                </div>
            </div>
          </div>
  )
}

export default Phone