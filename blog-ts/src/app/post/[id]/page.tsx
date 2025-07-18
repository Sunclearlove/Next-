// app/post/[id]/page.tsx
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import DeleteButton from '@/components/DeleteButton'

interface Props {
  params: { id: string }
}

export default async function PostDetailPage({ params }: Props) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) {
    return <div className="text-center py-20">文章不存在</div>
  }

  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{new Date(post.created_at).toLocaleString()}</p>
      <p className="mb-6">{post.content}</p>

      <div className="flex gap-4">
        <Link
          href={`/edit/${post.id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          编辑
        </Link>
        <DeleteButton postId={post.id} />
      </div>
    </main>
  )
}
