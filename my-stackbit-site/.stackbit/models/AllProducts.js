module.exports = {
    label: 'All Products',
    groups: ['SectionComponents'],
    fields: [
        { type: 'string', name: 'heading', default: 'All Products' },
        {
            name: 'products',
            type: 'list',
            items: {
                type: 'object',
                fields: [
                    { type: 'string', name: 'name' },
                    { type: 'string', name: 'id' },
                    { type: 'string', name: 'description' },
                    { type: 'string', name: 'price' },
                ],
            },
        },
    ],
}