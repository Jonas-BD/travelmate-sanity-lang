import { defineField, defineType } from "sanity";

export const cityType = defineType({
    name: 'city',
    title: 'Byer',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Titel',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Billede',
            type: 'image'
        }),
        defineField({
            name: 'country',
            title: 'Land',
            type: 'reference',
            to: [{ type: 'country' }],
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'info',
            title: 'Sprog',
            type: 'array',
            of: [{ type: 'cityInfo' }],
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'country.name'
        }
    }
})