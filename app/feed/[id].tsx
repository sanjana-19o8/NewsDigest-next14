import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image'

export const Feed = ({ articles, pageNumber }: any) => {
    const router = useRouter();
    return (
        <>
            <div className={styles.main}>
                {articles.map((article: { url: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; urlToImage: string | undefined; }, index: Key | null | undefined) => (
                    <div key={index} className={styles.post}>
                        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && <Image src={article.urlToImage} alt={'image'} />}
                    </div>
                ))}
            </div>
            <div className={styles.paginator}>
                <div
                    className={pageNumber === 1 ? styles.disabled : styles.active}
                    onClick={() => {
                        if (pageNumber > 1) {
                            router.push(`/feed/${pageNumber - 1}`)
                        }
                    }}
                >
                    Previous Page
                </div>
                <div>#{pageNumber}</div>
                <div
                    className={pageNumber === 5 ? styles.disabled : styles.active}
                    onClick={() => {
                        if (pageNumber < 5) {
                            router.push(`/feed/${pageNumber + 1}`)
                        }
                    }}
                >
                    Next Page
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async (pageContext: { query: { id: any; }; }) => {
    const pageNumber = pageContext.query.id;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
    
    const json = await apiResponse.json();
    const { articles } = json;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber),
        },
    };
};

export default Feed;