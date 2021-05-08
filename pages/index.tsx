import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Details from "../components/Details";
export default function Home() {
    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | Stats preview card component</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.image_wrap}>
                    <picture>
                        <source
                            srcSet="/images/image-header-desktop.jpg"
                            media="(min-width:978px)"
                        />

                        <img
                            src="/images/image-header-mobile.jpg"
                            alt="image"
                        />
                    </picture>
                </div>
                <div className={styles.intro_wrap}>
                    <h1>
                        Get <span>insights</span> that help your business grow.
                    </h1>
                    <p>
                        Discover the benefits of data analytics and make better
                        decisions regarding revenue, customer experience, and
                        overall efficiency.
                    </p>
                    <div className={styles.details_wrap}>
                        <Details number="10k+" detail="COMPANIES" />

                        <Details number="314" detail="TEMPLATES" />

                        <Details number="12M+" detail="QUERIES" />
                    </div>
                </div>
            </div>

            <div className={styles.attribution}>
                Challenge by
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Andro87</a>.
            </div>
        </div>
    );
}
