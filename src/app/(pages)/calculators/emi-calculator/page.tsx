"use client"
import Wrapper from '@/app/Wrapper'
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Page = () => {

    const [amount, setAmount] = useState(2500000)
    const [tenure, setTenure] = useState(30)
    const [rate, setRate] = useState(7.9)

    const EMI = useMemo(() => {
        const principal = amount
        const r = rate / (12 * 100)
        const n = tenure * 12
        const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        return Math.round(emi)
    }, [amount, rate, tenure])

    const totalPayment = EMI * tenure * 12
    const interestPayable = totalPayment - amount

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-12 md:my-16 my-6 p-5 max-w-6xl mx-auto">
                {/* Left Side */}
                <div className="space-y-8">
                    {/* Loan Amount */}
                    <div>
                        <label className="block font-semibold mb-2">Loan Amount</label>
                        <Slider
                            min={100000}
                            max={100000000}
                            step={10000}
                            value={[amount]}
                            onValueChange={([val]) => setAmount(val)}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>₹1 Lac</span>
                            <span>₹10 Cr</span>
                        </div>
                        <Input
                            type="text"
                            value={`₹ ${amount.toLocaleString()}`}
                            readOnly
                            className="mt-2"
                        />
                    </div>

                    {/* Tenure */}
                    <div>
                        <label className="block font-semibold mb-2">Tenure (Years)</label>
                        <Slider
                            min={1}
                            max={30}
                            step={1}
                            value={[tenure]}
                            onValueChange={([val]) => setTenure(val)}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>1</span>
                            <span>30</span>
                        </div>
                        <Input type="text" value={tenure} readOnly className="mt-2 w-24" />
                    </div>

                    {/* Interest Rate */}
                    <div>
                        <label className="block font-semibold mb-2">Interest Rate (% P.A.)</label>
                        <Slider
                            min={0.5}
                            max={15}
                            step={0.1}
                            value={[rate]}
                            onValueChange={([val]) => setRate(parseFloat(val.toFixed(1)))}
                        />
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                            <span>0.5</span>
                            <span>15</span>
                        </div>
                        <Input type="text" value={`${rate}%`} readOnly className="mt-2 w-24" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="space-y-6">
                    <div>
                        <p className="text-muted-foreground text-sm">Monthly Home Loan EMI</p>
                        <h2 className="text-3xl font-bold text-primary">₹{EMI.toLocaleString()}</h2>
                        <Button variant="link" className="text-sm p-0">View Details</Button>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Principal Amount</span>
                            <span>₹{amount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Interest Amount</span>
                            <span>₹{interestPayable.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Total Amount Payable</span>
                            <span>₹{totalPayment.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <p className="text-sm text-muted-foreground mb-2">Need more information?</p>
                        <Link href={"/contact"}>
                            <Button>Talk To Our Loan Expert</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Page