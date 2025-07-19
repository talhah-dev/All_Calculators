"use client"
import Wrapper from '@/app/Wrapper'
import { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ["#000", "#808080"];

const Page = () => {

    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(10);
    const [loanTerm, setLoanTerm] = useState(10);
    const [emi, setEmi] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [interestComponent, setInterestComponent] = useState(0);

    useEffect(() => {
        const r = interestRate / 12 / 100;
        const n = loanTerm * 12;
        const emiCalc = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayable = emiCalc * n;
        const interest = totalPayable - loanAmount;

        setEmi(Math.round(emiCalc));
        setTotalAmount(Math.round(totalPayable));
        setInterestComponent(Math.round(interest));
    }, [loanAmount, interestRate, loanTerm]);

    const data = [
        { name: "Principal", value: loanAmount },
        { name: "Interest", value: interestComponent },
    ];

    return (
        <Wrapper>

            <div className="mx-auto md:mt-16 p-5 mt-8 max-w-3xl text-center">
                <h1 className="text-2xl font-semibold lg:text-4xl">
                    Mortgage Calculator
                </h1>
                <p className="text-muted-foreground mt-4 text-xl">
                    Explore our comprehensive range of calculators designed to assist you with various financial, health, lifestyle, and mathematical needs.
                </p>
            </div>

            <div className="grid md:mb-16 my-6 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 p-4">
                <Card className="p-6 space-y-6">
                    <div>
                        <Label>What Is The Amount Of Loan You Want To Borrow?</Label>
                        <div className="flex items-center mt-3">
                            <div className="bg-gray-100 px-4 py-2 rounded-l">₹</div>
                            <Input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className="rounded-l-none"
                            />
                        </div>
                    </div>

                    <div>
                        <Label>Rate Of Interest (P.A)</Label>
                        <div className="flex items-center gap-4">
                            <Slider
                                min={1}
                                max={20}
                                step={0.1}
                                value={[interestRate]}
                                onValueChange={([v]) => setInterestRate(v)}
                                className="w-full"
                            />
                            <Input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-20"
                            />
                            <span>%</span>
                        </div>
                    </div>

                    <div>
                        <Label>Duration Of The Loan</Label>
                        <div className="flex items-center gap-4">
                            <Slider
                                min={1}
                                max={30}
                                value={[loanTerm]}
                                onValueChange={([v]) => setLoanTerm(v)}
                                className="w-full"
                            />
                            <Input
                                type="number"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-20"
                            />
                            <span>Years</span>
                        </div>
                    </div>

                    <p>
                        Your monthly EMI is <strong>₹{emi.toLocaleString()}</strong>, total amount payable is <strong>₹{totalAmount.toLocaleString()}</strong>, and interest component is <strong>₹{interestComponent.toLocaleString()}</strong>.
                    </p>
                </Card>

                <Card className="p-6 space-y-6 flex  justify-center items-center">
                    <div className="">
                        <PieChart width={300} height={200}>
                            <Pie
                                data={data}
                                dataKey="value"
                                startAngle={360}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={3}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="grid gap-2">
                        <div className='grid grid-cols-2 gap-5 p-2 border-b'>
                            <strong className=''>Monthly EMI Is</strong>
                            <p className='lg:pl-10'>₹{emi.toLocaleString()}</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5 p-2 border-b'>
                            <strong className=''>Total Amount Payable Is</strong>
                            <p className='lg:pl-10'>₹{totalAmount.toLocaleString()}</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5 p-2 border-b'>
                            <strong className=''>Interest Component</strong>
                            <p className='lg:pl-10'>₹{interestComponent.toLocaleString()}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </Wrapper>
    )
}

export default Page