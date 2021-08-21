import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';
import { sharedThemePalette } from '../../theme';


const Page = ({
    children,
    date,
    description,
    image,
    title = 'My Next.js App',
    keywords,
    router
}) => {
    const domain = 'https://mywebsitedomain.com';
    //   const formattedTitle = titleStyle(title);
    const formattedTitle = title;
    const url = router && router.asPath ? router.asPath : undefined;
    const canonical = url && url === '/' ? domain : domain + url;
    const featuredImage = domain + image;

    return (
        <>
            <Head>
                <title>{formattedTitle}</title>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                {keywords && <meta content={keywords} name="keywords" />}
                <meta content="follow, index" name="robots" />
                <meta content="#ffffff" name="theme-color" />
                <meta content="#ffffff" name="msapplication-TileColor" />
                <meta
                    content="/favicons/browserconfig.xml"
                    name="msapplication-config"
                />
                <link
                    href="/favicons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/favicons/site.webmanifest" rel="manifest" />
                <link
                    color={sharedThemePalette.primary.main}
                    href="/favicons/safari-pinned-tab.svg"
                    rel="mask-icon"
                />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                <link
                    crossOrigin=""
                    href="https://fonts.gstatic.com/"
                    rel="preconnect"
                />

                {/* ========================================= */}
                {/* CHECK https://usefathom.com/ FOR MORE INFO*/}
                {/* ========================================= */}
                {/* <link
          crossOrigin=""
          href="https://cdn.usefathom.com"
          rel="preconnect"
        /> */}
                {url && <link href={canonical} rel="canonical" />}
                <meta content="en_US" property="og:locale" />
                <meta content={formattedTitle} property="og:title" />
                <meta content={description} property="og:description" />
                <meta content={canonical} property="og:url" />

                {/* =================== */}
                {/* FOR GOOGLE & YANDEX */}
                {/* =================== */}
                {/* <meta content="5e41b2275db646a5" name="yandex-verification" />
        <meta
          content="t28Kl2fGmZjIEgh6q3mGsf-7gGb8115VMQm1qbMMIKc"
          name="google-site-verification"
        /> */}
                {featuredImage && (
                    <>
                        <meta content={featuredImage} property="og:image" />
                        <meta content={description} property="og:image:alt" />
                    </>
                )}


                {/* ================== */}
                {/* FOR TWITTER CARDS */}
                {/* ================== */}
                {/* <meta content="summary_large_image" name="twitter:card" />
        <meta content="@leeerob" name="twitter:site" />
        <meta content="@leeerob" name="twitter:creator" /> */}
            </Head>
            {children}
        </>
    );
};

export default withRouter(Page);
