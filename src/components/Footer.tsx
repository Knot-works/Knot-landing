import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useTranslation()

  const navItems = [
    { href: '#greeting', labelKey: 'nav.greeting' },
    { href: '#services', labelKey: 'nav.services' },
    { href: '#works', labelKey: 'nav.works' },
    { href: '#company', labelKey: 'nav.company' },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <a href="#" className={styles.logo}>
            <img src="/knot-logo.webp" alt="Knot" className={styles.logoImage} />
          </a>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {t(item.labelKey)}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
