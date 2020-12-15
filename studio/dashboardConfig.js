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
                  buildHookId: '5fd803113b8a5f13ef8ff126',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ppp4889h',
                  apiId: '8aa24751-5372-41b0-ad53-c2de6fc16c8d'
                },
                {
                  buildHookId: '5fd80311d5036816c436ec05',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y4sb6t4o',
                  apiId: '8772d80f-ee49-433b-979c-6be185ac890e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/antonovsashka/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y4sb6t4o.netlify.app', category: 'apps'}
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
