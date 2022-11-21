module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting-started/introduction', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: ['core-concepts/how-it-works', 'core-concepts/architecture'],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [{
        type: 'category',
        label: 'ProofService',
        collapsed: true,
        items: ['proof-service/ps-intro']
      }, {
        type: 'category',
        label: 'KVService',
        collapsed: true,
        items: ['kv-service/kv-intro', 'kv-service/kv-faq', 'kv-service/kv-use-cases', 'kv-service/kv-api']
      }, {
        type: 'category',
        label: 'RelationService',
        collapsed: true,
        items: [
          'relation-service/rs-intro',
          'relation-service/rs-system',
          'relation-service/rs-graphql',
          'relation-service/rs-faq',
        ]
      }, {
        type: 'category',
        label: 'AuthService',
        collapsed: true,
        items: [
          'auth-service/as-intro',
          'auth-service/as-workflow',
        ]
      }]
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: ['developer-guide/go', 'developer-guide/rust', 'developer-guide/typescript'],
    },
    'glossary',
    'faq',
    {
      type: 'category',
      label: 'Rest API',
      items: ['rest-api/proofservice-api', 'rest-api/kvserivce-api', 'rest-api/platforms'],
    },
    'roadmap',
  ],
};
