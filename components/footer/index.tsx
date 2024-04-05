import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faXTwitter, faLinkedin, faYoutube, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './style.module.css'


export default function Footer(locale: string) {

  const listMap = [
    {
      name: locale === '/en' ? 'Resources' : 'Resources',
      list: [
        {
          name: 'Blog',
          url: `https://librechat.ai/blog`
        },
        {
          name: 'Docs',
          url: `${locale}/docs/start`
        },
        {
          name: 'Github',
          url: `https://gh.librechat.ai`
        },
        {
          name: 'Changelog',
          url: 'https://github.com/danny-avila/LibreChat/releases',
          newWindow: true
        }
      ]
    },
    {
      name: locale === '/en' ? 'Legal' : 'Legal',
      list: [
        {
          name: 'Terms of services',
          url: `https://librechat.ai/tos`
        },
        {
          name: 'Privacy policy',
          url: `https://librechat.ai/privacy-policy`
        }
      ]
    },
    {
      name: locale === '/en' ? 'Support' : 'Support',
      list: [
        {
          name: 'GitHub ↗',
          url: `https://github.com/danny-avila/LibreChat/issues`
        },
        {
          name: 'Discord ↗',
          url: `https://discord.librechat.ai`
        }
      ]
    },
    {
      name: locale === '/en' ? 'Socials' : 'Socials',
      items: (
        <div className="socialIconList">
          <ul>
          {[
  {
    name: <FontAwesomeIcon icon={faXTwitter} />,
    url: 'https://x.com/LibreChatAI',
    newWindow: true
  },
  {
    name: <FontAwesomeIcon icon={faLinkedin} />,
    url: 'https://linkedin.librechat.ai/',
    newWindow: true
  },
  {
    name: <FontAwesomeIcon icon={faYoutube} />,
    url: 'https://www.youtube.com/@LibreChat',
    newWindow: true
  },
  {
    name: <FontAwesomeIcon icon={faDiscord} />,
    url: 'https://discord.librechat.ai',
    newWindow: true
  },
  {
    name: <FontAwesomeIcon icon={faGithub} />,
    url: 'https://github.librechat.ai',
    newWindow: true
  },
].map((item, index) => (
  <a
    key={index}
    href={item.url}
    target={item.newWindow ? "_blank" : "_self"}
    className={`_text-gray-500 hover:_text-gray-900 dark:_text-neutral-400 dark:hover:_text-gray-50 ${styles.socialIconLink}`}
  >
    {item.name}
  </a>
))}
          </ul>
        </div>
      )
    }
  ]

  return (
    <>
    <div className={`${styles.root} _flex _text-sm`}>
    <div className={`${styles['w-1-4']}`} style={{ display: 'block', paddingRight: '100px' }}>
      Enhanced ChatGPT Clone, featuring OpenAI, Azure, Mistral, Anthropic, Google, Ollama, DALL-E-3 models and more.
      An Open-source, versatile Web UI, with seamless self-hosting and active developments.<br/><br/>
      © {new Date().getFullYear()} LibreChat.
    </div>
      <div className={`${styles.columns} ${styles['w-3-4']}`}>
      {listMap.map((list, index) => {
  return (
    <section key={index}>
      <h3 className="_text-sm _font-semibold _text-gray-900 first:_mt-0 dark:_text-gray-100">
        {list.name}
            </h3>
            {list.items ? (
              list.items
            ) : list.list ? (
              <ul>
                {list.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.url}
                        target={item.newWindow ? "_blank" : "_self"}
                        className="_text-gray-500 hover:_text-gray-900 dark:_text-neutral-400 dark:hover:_text-gray-50"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </section>
        );
      })}
      </div>
    </div>
    </>
  )
}