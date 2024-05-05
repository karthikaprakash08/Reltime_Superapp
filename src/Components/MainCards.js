import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/Context';

function MainCards() {

  const context = useContext(Context);
    const [buttonStates, setButtonStates] = useState([
        [true, true, true, true, true, true], // Accounts
        [true, true, true, true, true, true], // Loans
        [true, true, true, true, true, true], // DEX
      ]);
    
      useEffect(() => {
        // Initialize all button states to true when component mounts
        setButtonStates([
          [true, true, true, true, true, true], // Accounts
          [true, true, true, true, true, true], // Loans
          [true, true, true, true, true, true], // DEX
        ]);
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    
      const handleButtonClick = (categoryIndex) => {
        const newButtonStates = [...buttonStates];
        const categoryButtonStates = newButtonStates[categoryIndex];
        const newState = !categoryButtonStates[0]; // Toggle the state of the first button
        for (let i = 0; i < categoryButtonStates.length; i++) {
          categoryButtonStates[i] = newState;
        }
        setButtonStates(newButtonStates);
      };
    
      const handleIndividualButtonClick = (categoryIndex, buttonIndex) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[categoryIndex][buttonIndex] = !newButtonStates[categoryIndex][buttonIndex];
        setButtonStates(newButtonStates);
      };
    
      const renderButtonIcon = (categoryIndex) => {
        return buttonStates[categoryIndex][0] ? <i className="fas fa-plus"></i> : <i className="fas fa-times"></i>;
      };
    
      const renderButtonIcons = (categoryIndex, buttonIndex) => {
        return buttonStates[categoryIndex][buttonIndex] ? <i className="fas fa-plus"></i> : <i className="fas fa-times"></i>;
      };


  return (
    <div className="cards">
    {/* Accounts Card */}
    <div className="m-2">
      <div className="card card1" style={{ width: '20rem', borderRadius:"15px" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <span>Accounts</span>
              <button className="btn btn-dark rounded-circle  btn1" onClick={() => {
                handleButtonClick(0);
                context.HandleAccountscard()
              }}>{renderButtonIcon(0)}</button>
            </div>
          </h5>
          <div className="d-flex justify-content-between pl-1">
            <span>Deposit <button className="btn btn-dark  rounded-circle btn-sm" onClick={() => {
              handleIndividualButtonClick(0, 1)
              context.HandleAccountscarditems(0);
              }}>{renderButtonIcons(0, 1)}</button></span>
            <span>Transfer <button className="btn btn-dark  rounded-circle  btn-sm  pl-1s" onClick={() => {
              handleIndividualButtonClick(0, 2)
              context.HandleAccountscarditems(1);
              }}>{renderButtonIcons(0, 2)}</button></span> 
            <span>Wallet <button className="btn btn-dark   rounded-circle btn-sm" onClick={() => {
              handleIndividualButtonClick(0, 3)
              context.HandleAccountscarditems(2);
              }}>{renderButtonIcons(0, 3)}</button></span> 
          </div>
          <div className="d-flex justify-content-center pl-1 mt-2">
            <span className='pad'>Contract <button className="btn btn-dark rounded-circle btn-sm" onClick={() => {
              handleIndividualButtonClick(0, 4)
              context.HandleAccountscarditems(3);
              }}>{renderButtonIcons(0, 4)}</button></span>
            <span className='pad'>Transaction <button className="btn btn-dark rounded-circle btn-sm" onClick={() => {
              handleIndividualButtonClick(0, 5)
              context.HandleAccountscarditems(4);
              }}>{renderButtonIcons(0, 5)}</button></span>
          </div>
        </div>
      </div>
    </div>

    {/* Loans Card */}
    <div className="m-2">
      <div className="card card2" style={{ width: '20rem', borderRadius:"15px" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <span>Loans</span>
              <button className="btn btn-dark rounded-circle btn1" onClick={() => {
                handleButtonClick(1);
                context.HandleLoanscard();
                }}>{renderButtonIcon(1)}</button>
            </div>
          </h5>
          <div className="d-flex justify-content-between pl-1">
            <span>Lend <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(1, 1)
              context.HandleLoanscarditems(0);
              }}>{renderButtonIcons(1, 1)}</button></span>
            <span>Borrow <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(1, 2)
              context.HandleLoanscarditems(1);
              }}>{renderButtonIcons(1, 2)}</button></span> 
            <span>Earning <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(1, 3)
              context.HandleLoanscarditems(2);
              }}>{renderButtonIcons(1, 3)}</button></span> 
          </div>
          <div className="d-flex justify-content-center  pl-1 mt-2">
            <span className='pad'>Contract <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(1, 4)
              context.HandleLoanscarditems(3);
              }}>{renderButtonIcons(1, 4)}</button></span>
            <span className='pad'>Transaction <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(1, 5)
              context.HandleLoanscarditems(4);
              }}>{renderButtonIcons(1, 5)}</button></span>
          </div>
        </div>
      </div>
    </div>

    {/* DEX Card */}
    <div className="m-2">
      <div className="card card3" style={{ width: '20rem', borderRadius:"15px" }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <span>DEX</span>
              <button className="btn btn-dark rounded-circle  btn1" onClick={() => {
                handleButtonClick(2);
                context.HandleDEXcard();
                }}>{renderButtonIcon(2)}</button>
            </div>
          </h5>
          <div className="d-flex justify-content-between pl-1">
            <span>List <button className="btn btn-dark  rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(2, 1)
              context.HandleDEXcarditems(0);
              }}>{renderButtonIcons(2, 1)}</button></span>
            <span>Exchange <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(2, 2)
              context.HandleDEXcarditems(1);
              }}>{renderButtonIcons(2, 2)}</button></span> 
            <span>Earning <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(2, 3)
              context.HandleDEXcarditems(2);
              }}>{renderButtonIcons(2, 3)}</button></span> 
          </div>
          <div className="d-flex justify-content-center  pl-1 mt-2">
            <span className='pad'>Contract <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(2, 4)
              context.HandleDEXcarditems(3);
              }}>{renderButtonIcons(2, 4)}</button></span>
            <span className='pad'>Transaction <button className="btn btn-dark rounded-circle  btn-sm" onClick={() => {
              handleIndividualButtonClick(2, 5)
              context.HandleDEXcarditems(4);
              }}>{renderButtonIcons(2, 5)}</button></span>
          </div>
        </div>
      </div>
    </div> 
      </div>
  )
}

export default MainCards