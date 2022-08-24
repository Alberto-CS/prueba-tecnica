import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          characters: 'Characters',
          episodes: 'Episodes',
          goback: 'Go Back',
          name: 'Name',
          nickname: 'Nickname',
          birthday: 'Birthday',
          status: 'Status',
          seasons: 'Seasons',
          actor: 'Portrayed By',
          pagenotfound: 'Page not found',
          spoiler: 'Spoiler! Click to reveal it!',
          quote: 'Click for random quote',
          error: 'Oh no, there was an error'
        }
      },
      es: {
        translation: {
          characters: 'Personajes',
          episodes: 'Episodios',
          english: 'Inglés',
          spanish: 'Español',
          goback: 'Volver atrás',
          name: 'Nombre',
          nickname: 'Apodo',
          birthday: 'Nacimiento',
          status: 'Estado',
          seasons: 'Temporadas',
          actor: 'Interpretado por',
          pagenotfound: 'Página no encontrada',
          spoiler: '¡Spoiler! Click para revelar',
          quote: 'Haz click para una cita aleatoria',
          error: 'Oh no, debe haber algún error'
        }
      }
    }
  })

export default i18n
