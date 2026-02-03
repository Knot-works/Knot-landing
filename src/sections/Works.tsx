import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ScrollReveal } from '../components/ScrollReveal'
import styles from './Works.module.css'

const projects = [
  {
    id: 'dear',
    role: ['iOS', 'Design', 'Dev'],
    year: '2026',
    url: 'https://dear.knotwith.com',
    image: '/works/dear-thumbnail.png',
  },
]

export function Works() {
  const { t } = useTranslation()

  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className={styles.label}>{t('works.label')}</span>
            <p className={styles.description}>
              {t('works.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.thumbnail}>
                  <img
                    src={project.image}
                    alt={t(`works.projects.${project.id}.name`)}
                    className={styles.thumbnailImage}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.year}>{project.year}</span>
                    <div className={styles.tags}>
                      {project.role.map((tag, i) => (
                        <span key={i} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className={styles.name}>{t(`works.projects.${project.id}.name`)}</h3>
                  <p className={styles.projectDescription}>{t(`works.projects.${project.id}.description`)}</p>
                  <span className={styles.link}>
                    {t('works.viewMore')}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
