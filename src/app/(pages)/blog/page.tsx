"use client";
import Wrapper from '@/app/Wrapper'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    CalendarIcon,
    ArrowRightIcon,
} from "lucide-react";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    imageUrl: string;
    excerpt: string;
}

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    BriefcaseIcon,
    FlowerIcon,
    HeartIcon,
    LightbulbIcon,
    MountainSnow,
    SearchIcon,
    SettingsIcon,
} from "lucide-react";

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How Marketing Analytics is Reshaping Business Strategies",
        category: "Analytics",
        date: "April 18, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        excerpt:
            "Data-driven marketing is changing how companies make decisions. Learn how to leverage analytics for better results.",
    },
    {
        id: 2,
        title: "The Rise of Video Marketing: Why You Can't Ignore It",
        category: "Video",
        date: "April 12, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        excerpt:
            "Video content has become an essential part of modern marketing strategies. Find out why and how to get started.",
    },
    {
        id: 3,
        title: "Building Customer Loyalty Through Content Marketing",
        category: "Content",
        date: "April 5, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        excerpt:
            "Create content that not only attracts but retains customers. Strategies for building long-term relationships through your content.",
    },
    {
        id: 4,
        title: "Social Media Trends That Will Dominate in 2023",
        category: "Social Media",
        date: "March 29, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
        excerpt:
            "Stay ahead of the curve with these emerging social media trends that will shape the digital landscape this year.",
    },
    {
        id: 5,
        title: "Email Marketing Personalization: Going Beyond First Name",
        category: "Email",
        date: "March 22, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        excerpt:
            "Advanced techniques for personalizing your email campaigns that go well beyond simply using a subscriber's name.",
    },
    {
        id: 6,
        title: "Sustainable Marketing: Building Eco-Friendly Campaigns",
        category: "Sustainability",
        date: "March 15, 2023",
        imageUrl:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        excerpt:
            "How to integrate sustainability into your marketing strategy and connect with environmentally conscious consumers.",
    },
];

const page = () => {

    return (
        <Wrapper>

            <div className="relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 md:mt-16 mt-10 2xl:max-w-[1400px]">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                            Blogs
                        </h1>
                        <p className="text-muted-foreground mt-3 text-xl">
                            Stay in the know with insights from industry experts.
                        </p>
                        <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
                            {/* Form */}
                            <form>
                                <div className="bg-background relative z-10 flex space-x-3 rounded-lg border p-3 shadow-lg">
                                    <div className="flex-[1_0_0%]">
                                        <Label htmlFor="article" className="sr-only">
                                            Search article
                                        </Label>
                                        <Input
                                            name="article"
                                            className="h-full"
                                            id="article"
                                            placeholder="Search article"
                                        />
                                    </div>
                                    <div className="flex-[0_0_auto]">
                                        <Button size={"icon"}>
                                            <SearchIcon />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                            {/* End Form */}
                            {/* SVG Element */}
                            <div className="absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block">
                                <svg
                                    className="h-auto w-16 text-orange-500"
                                    width={121}
                                    height={135}
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            {/* End SVG Element */}
                            {/* SVG Element */}
                            <div className="absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block">
                                <svg
                                    className="h-auto w-40 text-cyan-500"
                                    width={347}
                                    height={188}
                                    viewBox="0 0 347 188"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            {/* End SVG Element */}
                        </div>
                        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-20">
                            <Button variant={"outline"}>
                                <BriefcaseIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                                Business
                            </Button>
                            <Button variant={"outline"}>
                                <SettingsIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                                Strategy
                            </Button>
                            <Button variant={"outline"}>
                                <HeartIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                                Health
                            </Button>
                            <Button variant={"outline"}>
                                <LightbulbIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                                Creative
                            </Button>
                            <Button variant={"outline"}>
                                <FlowerIcon className="mr-2 h-auto w-3 flex-shrink-0" />
                                Environment
                            </Button>
                            <Button variant={"outline"}>
                                <MountainSnow className="mr-2 h-auto w-3 flex-shrink-0" />
                                Adventure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-7xl w-full mx-auto overflow-hidden">
                <div
                    className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-4 lg:px-12 grid-cols-1 md:my-16 my-8"
                >
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="w-full sm:px-2 px-4"
                        >
                            <Card className="flex h-full flex-col overflow-hidden p-0 shadow-sm transition-shadow hover:shadow-md">
                                <div className="relative h-40 overflow-hidden sm:h-48 md:h-52">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <Badge className="bg-primary hover:bg-primary/90">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="flex-grow">
                                    <div className="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
                                        <CalendarIcon className="mr-1 h-3 w-3" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="mb-2 line-clamp-2 text-base font-semibold sm:text-lg">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter className="pb-6">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="w-full text-sm"
                                        asChild
                                    >
                                        <Link
                                            href="/blog/1"
                                            className="flex items-center justify-center"
                                        >
                                            Read Article
                                            <ArrowRightIcon className="ml-1 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default page