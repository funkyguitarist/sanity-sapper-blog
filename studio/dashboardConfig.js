export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60944a13e7cc1f00b2c7c058',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-2wffbso1',
                  apiId: 'fe685c88-303b-4d06-be43-426e78d05fff'
                },
                {
                  buildHookId: '60944a13aa0a040088857498',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-k5h6pp87',
                  apiId: 'aa370a53-6c58-40dc-b628-ed998f7ea1e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/funkyguitarist/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-k5h6pp87.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
