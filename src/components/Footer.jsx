import React from 'react'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <article className='text-white flex flex-col-2 pb-4 justify-center items-center'>{t('AllReserved')} 
     <div className='text-[10px] -translate-y-[4px]' >® </div>
    </article>
    
  )
}

export default Footer