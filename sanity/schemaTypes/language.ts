import { defineField, defineType } from "sanity";

export const languageType = defineType({
    name: 'language',
    title: 'Sprog',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Navn',
            type: 'string',
            description: 'Navnet på sproget, f.eks. Dansk, Engelsk, Tysk osv.',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'code',
            title: 'Sprogkode',
            type: 'string',
            description: 'Sprogkoden for sproget, f.eks. da, en, de osv.',
            validation: (Rule) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'code'
        }
    }
})