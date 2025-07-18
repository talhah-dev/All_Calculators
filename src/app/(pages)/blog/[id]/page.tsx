import Wrapper from '@/app/Wrapper'
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const page = () => {

    // Sample blog posts data
    const featuredPost = {
        id: "1",
        title: "Creating Accessible Web Applications with React and ARIA",
        excerpt:
            "Learn how to build web applications that are accessible to everyone using React best practices and ARIA attributes. This comprehensive guide covers everything from basic accessibility principles to advanced techniques for creating inclusive user experiences.",
        date: "Apr 15, 2023",
        category: "Development",
        imageUrl:
            "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "creating-accessible-web-applications",
    };

    const posts = [
        {
            id: "2",
            title: "The Future of Design Systems in 2023",
            excerpt:
                "Explore the trends and innovations shaping design systems and component libraries this year.",
            date: "Mar 28, 2023",
            category: "Design",
            imageUrl:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slug: "future-of-design-systems",
        },
        {
            id: "3",
            title: "Optimizing Performance in Next.js Applications",
            excerpt:
                "Practical strategies to improve loading times and overall performance in your Next.js web applications.",
            date: "Mar 12, 2023",
            category: "Performance",
            imageUrl:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slug: "optimizing-nextjs-performance",
        },
        {
            id: "4",
            title: "Crafting Effective User Onboarding Experiences",
            excerpt:
                "How to design user onboarding that reduces friction and increases conversion rates for your product.",
            date: "Feb 24, 2023",
            category: "UX Design",
            imageUrl:
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            slug: "effective-user-onboarding",
        },
    ];

    const title = "From the Blog";
    const description =
        "Insights, thoughts, and deep dives into my work and expertise";

    return (
        <Wrapper>
            <section className="w-full py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-start gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
                            <p className="text-muted-foreground max-w-[700px]">{description}</p>
                        </div>

                        <div className="grid w-full gap-8 pt-4 lg:grid-cols-3">
                            {/* Featured Article */}
                            <Card className="col-span-full flex flex-col overflow-hidden pt-0 lg:col-span-2">
                                <div className="relative aspect-[16/9] w-full overflow-hidden">
                                    <Image
                                        src={featuredPost.imageUrl}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                                        priority
                                    />
                                </div>
                                <CardHeader className="flex-1">
                                    <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                                        <span className="flex items-center gap-1">
                                            <CalendarIcon className="h-3 w-3" />
                                            {featuredPost.date}
                                        </span>
                                        <span>•</span>
                                        <span>{featuredPost.category}</span>
                                    </div>
                                    <CardTitle className="mb-2 text-2xl">
                                        {featuredPost.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {featuredPost.excerpt} <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio voluptatem consectetur excepturi eveniet beatae praesentium? Eaque quasi doloremque dolores earum fugiat iure aliquid sunt sed. Sapiente ducimus laborum necessitatibus. <br /><br />
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Article List */}
                            <div className="col-span-full space-y-4 lg:col-span-1">
                                <h3 className="border-b pb-2 text-lg font-medium">
                                    Recent Articles
                                </h3>
                                <div className="space-y-6">
                                    {posts.map((post) => (
                                        <div key={post.id} className="group">
                                            <div className="flex items-start gap-4">
                                                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                                    <Image
                                                        src={post.imageUrl}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                        sizes="64px"
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="group-hover:text-primary line-clamp-2 font-medium transition-colors">
                                                        <Link href="#" className="hover:underline">
                                                            {post.title}
                                                        </Link>
                                                    </h4>
                                                    <div className="text-muted-foreground flex items-center text-xs">
                                                        <span>{post.date}</span>
                                                        <span className="mx-1">•</span>
                                                        <span>{post.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/blog">View All Blogs</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </Wrapper>
    )
}

export default page