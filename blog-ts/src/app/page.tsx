import { supabase } from '@/lib/supabase'
import PostCard from '@/components/PostCard'

export default async function HomePage() {
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">我的博客</h1>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  )
}
