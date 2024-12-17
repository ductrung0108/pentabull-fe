"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useEffect, useRef, memo } from "react";

export default function TradeApp() {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
        "height": 680, 
          "symbol": "BINANCE:BTCUSDT",
          "interval": "1",
          "timezone": "Asia/Ho_Chi_Minh",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "hide_legend": true,
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <body className="bg-[#080023]">
      <div className="flex my-16 mx-16 space-x-5 text-white">
        <div className="text-3xl font-extrabold">BTC/USDT</div>
        <div className="text-3xl font-extrabold">95,138.00</div>
      </div>

      <div className="ml-12 flex px-12">
        <div className="tradingview-widget-container w-full px-4" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>

        <Card className="bg-[#080023] border border-[#8D8D8D] lg:md:w-2/5 overflow-hidden">
          <Tabs defaultValue="market" className="w-full bg-[#080023] [&>*]:m-0 [&>*]:p-0">
            <TabsList className="grid w-full grid-cols-2 bg-[#080023] m-0 rounded-none border-b border-gray-800">
              <TabsTrigger
                value="market"
                className="relative font-bold text-white data-[state=active]:bg-[#080023] data-[state=active]:text-white after:absolute after:bottom-[-3px] after:left-0 after:h-[4px] after:w-[100%] data-[state=active]:after:bg-purple-600 rounded-none px-0 py-2"
              >
                Market
              </TabsTrigger>
              <TabsTrigger
                value="limit"
                className="relative font-bold text-white data-[state=active]:bg-[#080023] data-[state=active]:text-white after:absolute after:bottom-[-3px] after:left-0 after:h-[4px] after:w-[100%] data-[state=active]:after:bg-purple-600 rounded-none px-0 py-2"
              >
                Limit
              </TabsTrigger>
            </TabsList>

            <TabsContent value="market">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid grid-cols-2 mx-4 my-6 p-[1px] bg-transparent rounded-lg border-2 border-gray-700">
                  <TabsTrigger
                    value="buy"
                    className="w-full rounded-lg data-[state=active]:bg-transparent text-white font-semibold data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#361D66] data-[state=active]:to-[#00321F] data-[state=active]:text-white"
                  >
                    Buy
                  </TabsTrigger>
                  <TabsTrigger
                    value="sell"
                    className="w-full rounded-lg data-[state=active]:bg-transparent text-white font-semibold data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#361D66] data-[state=active]:to-[#00321F] data-[state=active]:text-white"
                  >

                    Sell
                  </TabsTrigger>
                </TabsList>






                {/* Buy Tab */}
                <TabsContent value="buy">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Price
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Market Price"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Amount
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="0                                                                        BTC"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="text-white w-full text-md">
                      <div className="flex justify-between">
                        <div>Available</div>
                        <div>100,000.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Max Buy</div>
                        <div>1 BTC</div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <div>Fee</div>
                        <div>0.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Total</div>
                        <div>0.00 USDT</div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-[#7931FF] text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Buy
                    </button>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="sell">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Price
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Market Price"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg ">
                        Amount
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="0                                                                        BTC"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <div className="text-white w-full text-md">
                      <div className="flex justify-between">
                        <div>Available</div>
                        <div>1 BTC</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Total</div>
                        <div>0.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Max Sell</div>
                        <div>1 BTC</div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-[#7931FF] text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Sell
                    </button>
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </TabsContent>






            {/* Limit Tabs */}
            <TabsContent value="limit">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid grid-cols-2 mx-4 my-6 p-[1px] bg-transparent rounded-lg border-2 border-gray-700">
                  <TabsTrigger
                    value="buy"
                    className="w-full rounded-lg data-[state=active]:bg-transparent text-white font-semibold data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#361D66] data-[state=active]:to-[#00321F] data-[state=active]:text-white"
                  >
                    Buy
                  </TabsTrigger>
                  <TabsTrigger
                    value="sell"
                    className="w-full rounded-lg data-[state=active]:bg-transparent text-white font-semibold data-[state=active]:bg-gradient-to-b data-[state=active]:from-[#361D66] data-[state=active]:to-[#00321F] data-[state=active]:text-white"
                  >

                    Sell
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="buy">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Price
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Market Price"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Amount
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="0                                                                        BTC"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-white w-full text-md">
                      <div className="flex justify-between">
                        <div>Available</div>
                        <div>100,000.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Max Buy</div>
                        <div>1 BTC</div>
                      </div>

                      <div className="flex justify-between mt-4">
                        <div>Fee</div>
                        <div>0.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Total</div>
                        <div>0.00 USDT</div>
                      </div>

                      <button className="w-full py-3 mt-4 bg-[#7931FF] text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Buy
                      </button>
                    </div>
                  </CardFooter>
                </TabsContent>

                <TabsContent value="sell">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Price
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Market Price"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-lg">
                        Amount
                      </Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="0                                                                        BTC"
                        className="bg-[#080023] border border-[#8D8D8D] text-white placeholder:text-lg placeholder:text-white  focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-white w-full text-md">
                      <div className="flex justify-between">
                        <div>Available</div>
                        <div>1 BTC</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Total</div>
                        <div>0.00 USDT</div>
                      </div>

                      <div className="flex justify-between">
                        <div>Max Sell</div>
                        <div>1 BTC</div>
                      </div>


                      <button className="w-full py-3 mt-4 bg-[#7931FF] text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Sell
                      </button>
                    </div>
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </body>
  );
}
