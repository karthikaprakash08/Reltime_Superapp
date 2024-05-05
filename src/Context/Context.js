import React, { createContext, useState } from 'react'

const Context = createContext({Accountscard:false, Loanscard:false, DEXcard:false,Accountscarditems:[true, true, true, true, true],Loanscarditems:[true, true, true, true, true],DEXcarditems:[true, true, true, true, true], HandleAccountscard:undefined, HandleLoanscard:undefined, HandleDEXcard:undefined, HandleAccountscarditems:undefined, HandleLoanscarditems:undefined, HandleDEXcarditems:undefined});

export function ContextProvider(props) {

    let [Accountscard, setAccountscard] = useState(false);
    let [Accountscarditems, setAccountscardsitems] = useState([true, true, true, true, true]);
    let [Loanscarditems, setLoanscardsitems] = useState([true, true, true, true, true]);
    let [DEXcarditems, setDEXcardsitems] = useState([true, true, true, true, true]);
    let [Loanscard, setLoanscard] = useState(false);
    let [DEXcard, setDEXcard] = useState(false);

    function HandleAccountscard(){
        setAccountscardsitems([true, true, true, true, true]);
        if(Accountscard){
            setAccountscard(false);
        }
        else{
            setAccountscard(true);
        }
    }

    function HandleAccountscarditems(index){
        const newitemstate = [...Accountscarditems];
        newitemstate[index] = !newitemstate[index];
        setAccountscardsitems(newitemstate);
    }

    function HandleLoanscard(){
        setLoanscardsitems([true, true, true, true, true]);
        if(Loanscard){
            setLoanscard(false);
        }
        else{
            setLoanscard(true);
        }
    }

    function HandleLoanscarditems(index){
        const newitemstate = [...Loanscarditems];
        newitemstate[index] = !newitemstate[index];
        setLoanscardsitems(newitemstate);
    }

    function HandleDEXcard(){
        setDEXcardsitems([true, true, true, true, true]);
        if(DEXcard){
            setDEXcard(false);
        }
        else{
            setDEXcard(true);
        }
    }

    function HandleDEXcarditems(index){
        const newitemstate = [...DEXcarditems];
        newitemstate[index] = !newitemstate[index];
        setDEXcardsitems(newitemstate);
    }

  return (
    <Context.Provider value={{Accountscard:Accountscard, Loanscard:Loanscard, DEXcard:DEXcard,Accountscarditems:Accountscarditems,Loanscarditems:Loanscarditems,DEXcarditems:DEXcarditems, HandleAccountscard:HandleAccountscard, HandleDEXcard:HandleDEXcard, HandleLoanscard:HandleLoanscard,HandleAccountscarditems:HandleAccountscarditems,HandleLoanscarditems:HandleLoanscarditems,HandleDEXcarditems:HandleDEXcarditems}}>
        {props.children}
    </Context.Provider>
  )
}

export default Context