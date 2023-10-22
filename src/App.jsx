import React, { useState, useEffect } from 'react';
import LeftSideBar from './components/LeftSideBar';
import AllExpenses from './components/AllExpenses';
import QuickInvoice from './components/QuickInvoice';
import MyCard from './components/MyCard';
import TransactionHistory from './components/TransactionHistory';
import { createServer, Server } from 'miragejs';
import data from '../data.json';

let mirageServer;

if (!mirageServer) {
  mirageServer = new Server({
    routes() {
      this.get('api/users', () => {
        return data;
      });
    },
  });
}

export default function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch('api/users')
      .then((r) => r.json())
      .then((data) => setUsers(data[0]));
  }, []);

  let totalIncome = 0;
  let totalExpense = 0;

  for (let k = 0; k < users?.latest_transaction?.length; k++) {
    const transaction = users?.latest_transaction[k].amount;
    const [totalCash, type] = transaction;

    if (type === 'in') {
      totalIncome += totalCash;
    } else if (type === 'out') {
      totalExpense += totalCash;
    }
  }

  console.log('Total Income:', totalIncome);
  console.log('Total Expense:', totalExpense);

  return (
    <div className="container mx-auto bg-[#F7F9FA]">
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 bg-white">
          <LeftSideBar name={users?.username} email={users?.email} />
        </div>
        <div className="col-span-3 px-5 lg:ps-10 lg:pe-5">
          <div className="bg-white rounded-lg mt-10">
            <AllExpenses balance={users?.balance} income={totalIncome} expenses={totalExpense}/>
          </div>
          <div className="bg-white rounded-lg mt-5 mb-10">
            <QuickInvoice invoice={users?.latest_transaction}/>
          </div>
        </div>
        <div className="col-span-2 px-5 lg:ps-5 lg:pe-10 mt-10">
          <div className="bg-white rounded-lg">
            <MyCard card={users?.card} />
            <hr className="border mx-2 my-5" />
            <TransactionHistory history={users?.latest_transaction}/>
          </div>
        </div>
      </div>
    </div>
  );
}
