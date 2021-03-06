import '../styles/Main.css'
import '../styles/Modules.css'
import '../styles/Elements.css'

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no" />
        <meta name="description" content="Learn to code with Stack Hack! We combine the personalized and flexible aspect of tutoring services
                    with the structure and organization of a full computer science course." />
        <meta name="keywords" content="Coding, Tutoring, School, Philadelphia" />
        <meta property="og:url" content="https://www.stackhacktutoring.com" />
        <meta property="og:title" content="Stack Hack Tutoring" />
        <meta property="og:description" content="Learn Python programming and web development with Stack Hack!" />
        <meta property="og:image" content="http://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7-web2.png" />
        <meta property="og:image:secure_url" content="https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7-web2.png" />
        <meta property="fb:app_id" content="410175129426746"/>
        <meta property="og:type" content="website" />
        <meta name="image" content="http://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7-web2.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#fff" />
        <title>Stack Hack Tutoring</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/sh-favicon-logo.png" />
        <link rel="mask-icon" href="/stack-hack-logo-7.svg" color="#212121" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Montserrat|Roboto" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}