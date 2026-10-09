import { defineField, defineType } from "sanity";

export const attractionInfo = defineType({
  name: "attractionInfo",
  title: "Oversættelse",
  type: "object",

  fields: [
    defineField({
      name: "language",
      title: "Sprog",
      type: "reference",
      to: [{ type: "language" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "name",
      title: "Titel",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),

    defineField({
      name: "description",
      title: "Kort beskrivelse",
      type: "text",
      rows: 3,
      description: "Bruges på kort og oversigter.",
    }),

    defineField({
      name: "content",
      title: "Uddybende tekst",
      type: "text",
      rows: 12,
      description:
        "Beskriv seværdigheden, dens historie og hvad man kan opleve under et besøg.",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "language.name",
    },
  },
});