import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                Thank You for Visit!
            </h2>
            {/* <footer>
                <Link href="/">← Back to home</Link>
            </footer> */}
        </Layout>
    );
}