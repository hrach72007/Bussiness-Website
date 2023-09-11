import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
   
    const switcher = (lng) => {
        i18n.changeLanguage(lng)
    }

    return(
        <>


     <div class="relative inline-flex bottom-[24rem] left-[25rem]">
  <button onClick={() => switcher('en')} className="bg-gray-300 hover:bg-gray-400 text-p font-bold py-2 px-4 rounded-l">
    English
  </button>
  <button onClick={() => switcher('ru')} className="bg-gray-300 hover:bg-gray-400 text-p font-bold py-2 px-4 rounded-r">
    Russian
  </button>
</div>
        
        </>
    )
}