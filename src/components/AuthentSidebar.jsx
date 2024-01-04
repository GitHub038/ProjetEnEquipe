import React from 'react'

const AuthentSidebar = () => {
  return (
    <div>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6 )]"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Urgence Défibrillateur
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;
              <p>
                Ce site permet de trouver des défibrillateurs à proximité.
              </p>{' '}
              <p>
                A peine 1 citoyen sur 10 survit à un arrêt cardiaque faute
                d'avoir bénéficié au bon moment de l'intervention d'une
                personne.
              </p>{' '}
              <p>
                Le plan national de santé publique prévoit de former 80% de la
                population aux gestes de premiers secours et d'améliorer l'accès
                aux défibrillateurs automatisés externes sur le territoire
                national, en favorisant leur géolocalisation et leur
                maintenance.
              </p>{' '}
              La création d'une base de données nationale, disposition de la loi
              du 28 juin 2018 relative au défibrillateur cardiaque, s'inscrit
              dans cette ambition. Nous exploitons cette base de données dans le
              cadre d'un projet académique.&rdquo;
            </p>
            <footer className="text-sm font-style: italic">
              Ce projet est un projet test. Se référer au{' '}
              <span className="underline decoration-pink-50 text-slate-500 hover:text-blue-600 ">
                <a href="https://www.data.gouv.fr/fr/datasets/geodae-base-nationale-des-defibrillateurs/">
                  site de l'état
                </a>
              </span>{' '}
              pour de plus amples informations
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default AuthentSidebar
