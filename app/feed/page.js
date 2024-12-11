import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';


// export async function generateMetadata({queryparams}) {
//   const posts = await getPosts();

// return {
//   title : 'Latest Posts',
//   description:'Browse all our Posts'
// }
// }
 

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
