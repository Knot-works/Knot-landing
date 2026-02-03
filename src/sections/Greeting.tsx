import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import { TextGenerate } from '../components/TextGenerate'
import styles from './Greeting.module.css'

export function Greeting() {
  const { t } = useTranslation()

  return (
    <section id="greeting" className={styles.greeting}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal delay={0}>
            <span className={styles.label}>{t('greeting.label')}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className={styles.subtitle}>{t('greeting.subtitle')}</h2>
          </ScrollReveal>
          <div className={styles.text}>
            <TextGenerate
              text={t('greeting.text1')}
              delay={200}
            />
            <TextGenerate
              text={t('greeting.text2')}
              delay={400}
            />
            <TextGenerate
              text={t('greeting.text3')}
              delay={600}
            />
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.shape} />
          <div className={styles.shapeAccent} />
        </div>
      </div>
    </section>
  )
}
