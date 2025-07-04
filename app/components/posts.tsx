import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug}>
            <hr className="border-slate-200 dark:border-slate-700 mb-4" />
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-slate-600 dark:text-slate-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-teal-900 dark:text-teal-100 tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
