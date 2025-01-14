import { auth } from '@/auth';
import BookList from '@/components/BookList';
import BookOverview from '@/components/BookOverview';
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';
import { desc } from 'drizzle-orm';
import { sampleBooks } from '@/constants';

const Home = async () => {
  const session = await auth();

  // const latestBooks = (await db
  //   .select()
  //   .from(books)
  //   .limit(10)
  //   .orderBy(desc(books.createdAt))) as Book[];

  return (
    <>
      <BookOverview {...sampleBooks[0]} userId={session?.user?.id as string} />

      <BookList
        title="Latest Books"
        books={sampleBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;