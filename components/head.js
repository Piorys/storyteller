import React from "react";
import Head from "next/head";

export default () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <link
          rel="Shortcut icon"
          href="https://cdn2.iconfinder.com/data/icons/free-basic-icon-set-2/300/1-512.png"
        />
        <title> Storyteller - the Web 3.0 Story Board </title>
      </Head>
      <style jsx global>{`
        body {
          background: #4e79bf;
        }
      `}</style>
    </div>
  );
};
