import { Container, Heading } from "@chakra-ui/react"
import { gql } from "graphql-request"
import { GetStaticProps } from "next"
import { graphcms } from "../services/graphcms"
import styles from "../styles/BasicPage.module.scss"
import { BasicPageProps } from "../types/BasicPageProps"

const Coc = ({ title, content }: BasicPageProps) => {
  return (
    <Container maxW={1180} my="2rem">
      <Heading as="h1" textTransform="uppercase" my="2rem">{title}</Heading>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      basicPage(where: { slug: "coc" }) {
        title,
        content {
          html
        }
      }
    }
  `
  const { basicPage } = await graphcms.request(query)
  const { title, content } = basicPage
  return {
    props: {
      title,
      content: content.html,
    },
  }
}


export default Coc