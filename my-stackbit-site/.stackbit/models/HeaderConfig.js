module.exports = {
    label: 'Header Config',
    labelField: 'title',
    fields: [
        { type: 'string', name: 'title', label: 'Title', default: 'Your Brand' },
        {
            type: 'list',
            name: 'navLinks',
            label: 'Navigation Links',
            items: {
                type: 'object',
                fields: [
                    { type: 'string', name: 'label', label: 'Label' },
                    { type: 'string', name: 'url', label: 'URL' },
                ],
            },
        },
    ],
  };