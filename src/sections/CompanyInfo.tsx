import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './CompanyInfo.module.css'

const companyItems = ['name', 'type', 'representative', 'business']

export function CompanyInfo() {
  const { t } = useTranslation()

  return (
    <section id="company" className={styles.company}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.label}>{t('company.label')}</span>
        </ScrollReveal>

        <dl className={styles.list}>
          {companyItems.map((item, index) => (
            <ScrollReveal key={item} delay={index * 80}>
              <div className={styles.item}>
                <dt className={styles.term}>{t(`company.items.${item}.label`)}</dt>
                <dd className={styles.definition}>{t(`company.items.${item}.value`)}</dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
