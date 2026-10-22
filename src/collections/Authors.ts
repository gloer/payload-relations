import { CollectionConfig, slugField } from "payload";

export const Authors: CollectionConfig = {
    slug: "authors",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
        },
        slugField({
            useAsSlug: "name",
        }),
        {
            name: "bio",
            label: "Biography",
            type: "textarea",
        }
    ],
};