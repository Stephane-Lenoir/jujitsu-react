export const routes = {
    home: '/',
    info: '/info',
    ecole: '/ecole',
    oclub: '/oclub',  // Mis à jour
    inscription: '/inscription',
    lesactivites: '/lesactivites',  // Mis à jour
    technique: '/technique',
    contact: '/contact'
  } as const
  
  export type AppRoutes = typeof routes[keyof typeof routes]