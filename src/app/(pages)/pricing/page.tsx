import Wrapper from '@/app/Wrapper'
import PricingSectionCards from '@/components/Home/PricingSectionCards'
import React from 'react'

const Page = () => {
    return (
        <Wrapper>
            <div className=" md:my-16 my-10">
                <PricingSectionCards />
            </div>
        </Wrapper>
    )
}

export default Page