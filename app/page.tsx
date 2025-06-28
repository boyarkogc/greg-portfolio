import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portfolio
      </h1>
      <p className="mb-4">
        {`Hey! I'm Greg Boyarko, a full stack software engineer 
        who loves to connect the internet to reality. 
        This portfolio showcases my projects, blog posts, 
        and professional journey. 
        Feel free to explore and connect with me!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
