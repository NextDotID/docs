module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['introduction/overall-intro', 'introduction/how-it-works'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: ['getting-started/twitter-wallet-binding', 'getting-started/importing-universal-profiles'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        {
              type: 'category',
              label: 'ProofService',
              collapsed: true,
              items: [
                'core-concepts/proof-service/ps-intro',
                'core-concepts/proof-service/as-intro',
                'core-concepts/proof-service/ks-intro',
              ],
        },
        {
          type: 'category',
          label: 'RelationService',
          collapsed: true,
          items: [
            'core-concepts/relation-service/rs-intro',
            'core-concepts/relation-service/rs-graphdb',
            'core-concepts/relation-service/rs-example',
          ],
        },
        {
          type: 'category',
          label: 'Concept Stage: CoreService',
          collapsed: true,
          items: [
            'core-concepts/core-service/cs-intro'
          ],
        },
      ],
    },
    
    // {
    //   type: 'category',
    //   label: 'Project Showcase',
    //   collapsed: false,
    //   items: ['project-showcase/show-case'],
    // },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'rest-api/proofservice-api',
        'rest-api/proofservice-platforms-supported',
        'rest-api/kvservice-api',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'Change and Release Notes',
      items: ['change-and-release-logs/change-log', 'change-and-release-logs/release-note'],
    },
    'community-governance',
    'roadmap',
  ],
};
