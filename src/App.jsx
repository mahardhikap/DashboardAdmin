import React, { useState, useEffect } from 'react';
import LeftSideBar from './components/LeftSideBar';
import AllExpenses from './components/AllExpenses';
import QuickInvoice from './components/QuickInvoice';
import MyCard from './components/MyCard';
import TransactionHistory from './components/TransactionHistory';
import { Server } from 'miragejs';

let mirageServer;

if (!mirageServer) {
  mirageServer = new Server({
    routes() {
      this.get('api/users', () => {
        return [
          {
            uniqId: 'ed123-09123-1asdas-12msdna',
            username: 'Lekan Okeowo',
            email: 'demo@gmail.com',
          },
        ];
      }),
        this.get('api/cards/:id', (schema, request) => {
          const cardId = request.params.id;
          const cards = [
            {
              id: 1,
              fullname: 'Syah Bandi A',
              idcard: '0918 8124 0042 8129',
              logocard: 'https://i.ibb.co/bP8pK49/paypal-removebg-preview.png',
              expired: '2024-12-01 12:30:45+07',
              userCard: 'ed123-09123-1asdas-12msdna',
              latest_transaction: [
                {
                  id: 1,
                  name: 'Madrani Andi',
                  email: 'madraniadi20@gmail.com',
                  description: 'Buy domain',
                  amount: [2150, 'out'],
                },
                {
                  id: 2,
                  name: 'Josua Nunito',
                  email: 'joshnunito@gmail.com',
                  description: 'Buy hosting',
                  amount: [3521, 'out'],
                },
                {
                  id: 3,
                  name: 'Google Adsense',
                  email: 'adsense@google.com',
                  description: 'Appreciation fee',
                  amount: [1000, 'in'],
                },
              ],
            },
            {
              id: 2,
              fullname: 'Syah Bandi B',
              idcard: '8124 0918 8129 0042',
              logocard: 'https://i.ibb.co/kQgFMv1/Master-Card-Logo.png',
              expired: '2025-12-01 12:30:45+07',
              userCard: 'ed123-09123-1asdas-12msdna',
              latest_transaction: [
                {
                  id: 1,
                  name: 'Web Hosting Services',
                  email: 'service@hosting.com',
                  description: 'Buy package server',
                  amount: [5000, 'out'],
                },
                {
                  id: 2,
                  name: 'PT. Someone',
                  email: 'admin@someone.com',
                  description: 'Web creation services',
                  amount: [10000, 'in'],
                },
                {
                  id: 3,
                  name: 'Google Adsense',
                  email: 'adsense@google.com',
                  description: 'Appreciation fee',
                  amount: [500, 'in'],
                },
              ],
            },
          ];
          const foundCard = cards.find((c) => c.id === parseInt(cardId));
          if (foundCard) {
            return foundCard;
          } else {
            return new Response(404, {}, { error: 'Card not found' });
          }
        });
    },
  });
}

export default function App() {
  const [users, setUsers] = useState({});
  const [card, setCard] = useState(null);
  const [cardId, setcardId] = useState(1);
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);
  const handleOnClick = () => {
    setSelect1(!select1);
    setSelect2(!select2);
  };

  useEffect(() => {
    fetch(`/api/cards/${cardId}`)
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, [cardId]);

  useEffect(() => {
    fetch('api/users')
      .then((r) => r.json())
      .then((data) => setUsers(data[0]));
  }, []);

  let totalIncome = 0;
  let totalExpense = 0;

  for (let k = 0; k < card?.latest_transaction?.length; k++) {
    const transaction = card?.latest_transaction[k].amount;
    const [totalCash, type] = transaction;

    if (type === 'in') {
      totalIncome += totalCash;
    } else if (type === 'out') {
      totalExpense += totalCash;
    }
  }

  return (
    <div className="container mx-auto bg-[#F7F9FA]">
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 bg-white">
          <LeftSideBar name={users?.username} email={users?.email} />
        </div>
        <div className="col-span-3 px-5 lg:ps-10 lg:pe-5">
          <div className="bg-white rounded-lg mt-10">
            <AllExpenses
              balance={totalIncome - totalExpense}
              income={totalIncome}
              expenses={totalExpense}
            />
          </div>
          <div className="bg-white rounded-lg mt-5 mb-10">
            <QuickInvoice invoice={card?.latest_transaction} />
          </div>
        </div>
        <div className="col-span-2 px-5 lg:ps-5 lg:pe-10 mt-10">
          <div className="bg-white rounded-lg">
            <MyCard
              fullname={card?.fullname}
              idcard={card?.idcard}
              expired={card?.expired}
              logocard={card?.logocard}
            />
            <div className="flex p-2 gap-2">
              <div
                className={`${
                  select1 === true ? 'px-5 w-10' : 'px-2 w-1'
                } py-2  bg-blue-200 rounded-full cursor-pointer`}
                onClick={() => {
                  handleOnClick();
                  setcardId(1)
                }}
              ></div>
              <div
                className={`${
                  select2 === true ? 'px-5 w-10' : 'px-2 w-1'
                } py-2  bg-blue-200 rounded-full cursor-pointer`}
                onClick={() => {
                  handleOnClick();
                  setcardId(2)
                }}
              ></div>
            </div>
            <hr className="border mx-2 my-5" />
            <TransactionHistory history={card?.latest_transaction} />
          </div>
        </div>
      </div>
    </div>
  );
}
