import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import 电子邮件图标 from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const 豆 = () => {
  return <span className={contactStyles.dou}>豆</span>
}

const 联系方式 = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/yaofur',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/kebot',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/keithyao/',
  },
  {
    Comp: 豆,
    alt: '豆瓣',
    link: 'https://www.douban.com/hearlisten'
  },
  {
    Comp: 电子邮件图标,
    alt: 'envelope icon',
    link: 'mailto:i@yaofur.com',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.name}>
        Keith Yao - 听临
      </div>

      <div className={contactStyles.links}>
        {联系方式.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
