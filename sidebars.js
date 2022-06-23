module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['introduction','getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: ['core-concepts/how-it-works','core-concepts/architecture'],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: ['developer-guide/go','developer-guide/rust','developer-guide/typescript'],
    },
    'faq',
    'rest-api',
    'roadmap',
  ],
};