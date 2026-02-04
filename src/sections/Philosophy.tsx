import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/ScrollReveal'
import { TextGenerate } from '../components/TextGenerate'
import styles from './Philosophy.module.css'

export function Philosophy() {
  const { t } = useTranslation()

  return (
    <section id="philosophy" className={styles.philosophy}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('philosophy.label')}</span>
            <h2 className={styles.title}>{t('philosophy.title')}</h2>
          </div>
        </ScrollReveal>
        <div className={styles.content}>
          <TextGenerate text={t('philosophy.text1')} delay={100} />
          <TextGenerate text={t('philosophy.text2')} delay={200} />
          <TextGenerate text={t('philosophy.text3')} delay={300} />
        </div>
      </div>
    </section>
  )
}
