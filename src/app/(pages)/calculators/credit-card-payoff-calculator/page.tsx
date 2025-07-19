"use client"
import Wrapper from '@/app/Wrapper'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#000", "#808080"];

const page = () => {

    const [loanAmount, setLoanAmount] = useState(500);
    const [monthlyPayment, setMonthlyPayment] = useState(100);
    const [interestRate, setInterestRate] = useState(1.8);
    const [months, setMonths] = useState<number | null>(null);
    const [totalPayment, setTotalPayment] = useState<number | null>(null);
    const [interestAmount, setInterestAmount] = useState<number>(0);

    const handleCalculate = () => {
        let balance = loanAmount;
        let totalPaid = 0;
        let month = 0;

        while (balance > 0) {
            const interest = (balance * interestRate) / 100;
            balance = balance + interest - monthlyPayment;
            totalPaid += monthlyPayment;
            month++;
            if (month > 1000) break; // prevent infinite loop
        }

        const finalInterest = totalPaid - loanAmount;
        setMonths(month);
        setTotalPayment(totalPaid);
        setInterestAmount(finalInterest);
    };

    const handleReset = () => {
        setLoanAmount(500);
        setMonthlyPayment(100);
        setInterestRate(1.8);
        setMonths(null);
        setTotalPayment(null);
        setInterestAmount(0);
    };

    const data = [
        { name: "Principal", value: loanAmount },
        { name: "Interest & Charges", value: interestAmount },
    ];

    return (
        <Wrapper>

            <div className="mx-auto md:mt-16 p-5 mt-8 max-w-3xl text-center">
                <h1 className="text-2xl font-semibold lg:text-4xl">
                    Monthly Home Loan EMI Calculators
                </h1>
                <p className="text-muted-foreground mt-4 text-xl">
                    Explore our comprehensive range of calculators designed to assist you with various financial, health, lifestyle, and mathematical needs.
                </p>
            </div>

            <div className="">
                <div className="max-w-5xl mx-auto p-4 md:mb-16 my-6  space-y-6">
                    <Card>
                        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                            <div>
                                <Label>Outstanding Loan Amount</Label>
                                <Input
                                    type="number"
                                    value={loanAmount}
                                    className='mt-2'
                                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                                />
                            </div>
                            <div>
                                <Label>Monthly Payment</Label>
                                <Input
                                    type="number"
                                    value={monthlyPayment}
                                    className='mt-2'
                                    onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                                />
                            </div>
                            <div>
                                <Label>Monthly Interest Rate (%)</Label>
                                <Input
                                    type="number"
                                    value={interestRate}
                                    className='mt-2'
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                />
                            </div>
                            <div className="md:col-span-3 flex gap-4">
                                <Button onClick={handleCalculate}>Submit</Button>
                                <Button variant="outline" onClick={handleReset}>Reset</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <div className="text-lg space-y-2">
                                    <div>
                                        <strong>No of months required to Payoff Loan:</strong> {months} months
                                    </div>
                                    <div>
                                        <strong>Total Payment:</strong> ₹{totalPayment?.toFixed(2)}
                                    </div>
                                </div>
                                <PieChart width={250} height={250}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={2}
                                        dataKey="value"
                                        label
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Wrapper>
    )
}

export default page