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
      label: 'Components',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'ProofService',
          collapsed: true,
          items: [
            'core-concepts-v2/proof-service/ps-intro',
            'core-concepts-v2/proof-service/kv-service',
            'core-concepts-v2/proof-service/auth-service'
          ],
        }, 
        {
          type: 'category',
          label: 'RelationService',
          collapsed: true,
          items: [
            'core-concepts-v2/relation-service/rs-intro',
          ]
        }]
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: ['developer-guide/go', 'developer-guide/rust', 'developer-guide/typescript'],
    },
    {
      type: 'category',
      label: 'Rest API',
      items: ['rest-api/proofservice-api', 'rest-api/kvservice-api'],
    },
    {
      type: 'category',
      label: 'API PlayGround',
      items: ['example/proofservice-api'],
    },
    'roadmap',
  ],
};
