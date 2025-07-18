// components/PostCard.tsx
import Link from 'next/link'
import { Post } from '@/types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="border rounded-lg p-4 mb-4 shadow hover:shadow-md transition cursor-pointer">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600 mt-1">{post.summary}</p>
        <p className="text-sm text-gray-400 mt-2">{new Date(post.created_at).toLocaleDateString()}</p>
      </div>
    </Link>
  )
}
