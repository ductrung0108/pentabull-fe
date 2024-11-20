This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Routes
Current routes include:
- ```/```:                      Landing page
- ```/classroom```:             Classroom page
- ```/classroom/[student]```:   Page to see a student's info and orders
- ```/classroom/[post]```:      Page to see a post's subcomponents
- ```/dashboard```:             Dashboard page to see general profile, wallet info, assets, etc.
- ```/login```:                 Login page for email filling
- ```/login/password```:        Login page for password
- ```/market```:                Market page to see the list of available cryptos
- ```/orders```:                Orders page to see the order history
- ```/settings```:              Settings page
- ```/trade```:                 Trading page, automatically leads to a ```/trade/[pair]```
- ```/trade/[pair]```:          Trading page of a pair of spots, defaulted as BTC_USDT

Feel free to revise, give feedbacks on this, and adjust when needed.
