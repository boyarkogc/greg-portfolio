import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <div className="flex items-start gap-6 mb-8">
        <Image
          src="/greg.jpg"
          alt="Greg Boyarko"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
        <p className="mb-4">
          {`Hey! I'm Greg Boyarko, a full stack software engineer 
          who loves to connect the internet to reality. 
          This portfolio showcases my projects, blog posts, 
          and professional journey. 
          Feel free to explore and connect with me!`}
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
