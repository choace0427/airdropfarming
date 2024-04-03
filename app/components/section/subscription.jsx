'use client';

import { IconEdit } from '@tabler/icons-react';
import { useState } from 'react';

export default function Subscription() {
  const [subscription, setSubscription] = useState([
    {
      title: 'Basic Farming Access',
      price: 1300,
      content:
        'Enables you to farm 50 wallets on all supported airdrops for a duration of 6 months. You have the flexibility to upgrade your subscription whenever you choose.',
    },
    {
      title: 'Middle Farming Access',
      price: 2000,
      content:
        'Enables you to farm 50 wallets on all supported airdrops for a duration of 6 months. You have the flexibility to upgrade your subscription whenever you choose.',
    },
    {
      title: 'Enterprise Farming Access',
      price: 2600,
      content:
        'Enables you to farm 50 wallets on all supported airdrops for a duration of 6 months. You have the flexibility to upgrade your subscription whenever you choose.',
    },
  ]);
  return (
    <div className='flex flex-col gap-6 items-center mt-36 px-5'>
      <p className='text-white font-extrabold text-[32px] text-center'>Simple, transparant pricing.</p>
      <p className='text-[#AECBEB] text-[16px] text-center'>
        Unlock access to Automated Airdrop Farming by choosing one out of three
        <br /> of our subscription offers.
      </p>
      <p className='text-[#AECBEB] text-[16px] text-center'>
        Enjoy all the features and benefits of our airdrop farming software. <br />
        Farming is supported for zkSync, Scroll, Base and Linea.
      </p>
      <div className='grid lg:grid-cols-3 grid-cols-1 md:gap-20 gap-10 mt-4 px-5'>
        {subscription?.map((item, index) => {
          return (
            <div key={index} className='bg-[#131217]/85 flex-col border-2 border-[#2b2c34] max-w-[420px] py-10 px-14 text-white rounded-lg flex gap-4'>
              <p className='text-white font-semibold'>{item?.title}</p>
              <p className='text-[#AECBEB] font-semibold text-[30px]'>${item?.price}</p>
              <p className='text-white'>{item?.content}</p>
              <div className='flex items-center justify-between mt-2'>
                <button className='flex items-center gap-3 bg-[#192647] px-4 py-3 rounded-lg'>
                  <IconEdit /> Subscribe
                </button>
                <p className='text-white underline'>Learn More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
