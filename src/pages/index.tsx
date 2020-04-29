import Header from '../components/header'
import Link from 'next/link'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => {
  return <>
    <Header titlePre="Home" />

    <div className='explanation'>
      <h3>Projects:</h3>
      <ExtLink href="https://civey.com">Civey.com</ExtLink> #vote #charts #react
      <br />
      <ExtLink href="https://douban.fm">Douban FM</ExtLink> #music #radio #react
      <br />
      <ExtLink href="https://douban.com">Douban.com</ExtLink> #social-network #review #misc

      <h3>Podcasts:</h3>
      <ExtLink href="http://www.1khamlets.com/640720/2594398-5-startup">一千个哈姆雷特: #5 听临的软件工程师经历 - 柏林startup和北京豆瓣 (主持人: bubbler and 穿堂风)</ExtLink>
    </div>
  </>
}
