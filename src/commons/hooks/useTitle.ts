import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const useTitle = (title: string) => {
  const { t } = useTranslation()
  useEffect(() => {
    const prevTitle = document.title
    document.title = t(title)
    return () => {
      document.title = prevTitle
    }
  }, [title, t])
}

export default useTitle
