import styles from './feature.module.css'

export default function Feature(locate: string) {
  return (
    <div className={styles.container}>
      <div className={`${styles.panel} ${styles['feature-table']}`}>
        <div className={styles['feature-plan']}>
          <a href={`https://gh.librechat.ai`} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
            <h2 className={styles['feature-header']}>LibreChat</h2>
          </a>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>Awesome Features</li>
            <li key='2' className={styles['feature-desc-item']}>Awesome Features</li>
            <li key='3' className={styles['feature-desc-item']}>Awesome Features</li>
            <li key='4' className={styles['feature-desc-item']}>Awesome Features</li>
          </ul>
        </div>
        <div className={styles['feature-plan']}>
          <a href={`https://librechat.ai/blog`} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>
            <h2 className={styles['feature-header']}>Blog</h2>
          </a>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>More Awesome Features</li>
            <li key='2' className={styles['feature-desc-item']}>More Awesome Features</li>
            <li key='3' className={styles['feature-desc-item']}>More Awesome Features</li>
            <li key='4' className={styles['feature-desc-item']}>More Awesome Features</li>
          </ul>
        </div>
        <div className={styles['feature-plan']}>
          <a href={`https://docs.librechat.ai`} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/></svg>
            <h2 className={styles['feature-header']}>Docs</h2>
          </a>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>Even More Awesome Features</li>
            <li key='2' className={styles['feature-desc-item']}>Even More Awesome Features</li>
            <li key='3' className={styles['feature-desc-item']}>Even More Awesome Features</li>
            <li key='4' className={styles['feature-desc-item']}>Even More Awesome Features</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
