import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <span>
        Build with{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          Notion-Blog
        </ExtLink>
      </span>
    </footer>
  </>
)
