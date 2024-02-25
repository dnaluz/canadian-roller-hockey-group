import { GetServerSideProps } from 'next'
import Head from 'next/head'

const LeaguePage = () => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} }
}

export default LeaguePage
