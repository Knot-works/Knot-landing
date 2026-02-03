import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faPenNib, faCode, faWrench } from '@fortawesome/free-solid-svg-icons'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './Services.module.css'

export function Services() {
  const { t } = useTranslation()

  const services = [
    {
      titleKey: 'services.items.web',
      icon: faLaptopCode,
    },
    {
      titleKey: 'services.items.design',
      icon: faPenNib,
    },
    {
      titleKey: 'services.items.frontend',
      icon: faCode,
    },
    {
      titleKey: 'services.items.prototype',
      icon: faWrench,
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('services.label')}</span>
            <p className={styles.description}>
              {t('services.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3 className={styles.cardTitle}>{t(service.titleKey)}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
