export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6b32ded52ed3300b92ef23',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qnvoswda',
                  apiId: 'fe162755-2568-4f45-8d1f-cd6289b6d99d'
                },
                {
                  buildHookId: '5f6b32dee17efa17d073a49d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o7a144ij',
                  apiId: 'f972dd9c-38e9-4511-9a9e-94d60ad1c6d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rommelmamedov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o7a144ij.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
