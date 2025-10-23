# Grandprod

## Setup

1. `npm install`
1. `npm run setup`

## Development

1. ` npm start`

## Tools Used

- [Angular](https://angular.io/) (for the frontend framework)
- [ngxstension](https://ngxtension.netlify.app/) (for extending angular in impactful ways)
- [ng-event-plugins](https://github.com/taiga-family/ng-event-plugins) (for extending angular event handling)
- [TailwindCSS](https://tailwindcss.com/docs) (for styling)
- [DaisyUI](https://daisyui.com/components/) (for the UI components)
- [Helipopper](https://ngneat.github.io/helipopper/) (for tooltips)
- [ngx-toastr](https://ngx-toastr.vercel.app/) (for notifications)
- [SweetAlert2](https://github.com/sweetalert2/ngx-sweetalert2) (for alerts)

## Good-To-Knows

### Useful Commands

- `npm start` - starts the app and the content watcher (content will automatically be compiled on save)
- `npm run gamedata:build` - regenerate all game content
- `npm run schemas:generate` - regenerate the JSON schemas for the content YAML files
- `npm run gamedata:art:spritesheets` - regenerate the spritesheets
- `npm run build` - do a prod build of the application (mostly unneeded during development)
- `npm run bump:<major|minor|patch>` - bump the version in package.json, generate changelogs, create a git tag, commit and push the changes (which spawns the release creation process to automatically build an electron release)

### Adding New Content

1. Create a new file in the `gamedata/{type}` directory for your content (or use an existing file).
1. Create new content, ensuring each entry has a unique id (Ctrl+Shift+U will generate one if you have the UUID plugin installed).
1. Names are also required to be unique across the entire application.

### Adding New Content Types

1. Create a new directory in `gamedata/` for your content type.
1. Create a new directory in `gameassets/` for your content type (if applicable).
1. Create a new interface in `interfaces/` for your content type (following the `content-{type}` pattern).
1. Add the content type to the `ContentType` type in `identifiable.ts`.
1. Add a new initializer for the content type in `content-initializers.ts`.
1. Optionally, update `schema-generate` to add the new typings and update `.vscode/settings.json` to map them for IDE support.

### Linking Content

When a property name is `<contenttype>Id`, it is assumed to be a link to another content item of type `<contenttype>`. For example, a property named `weaponId` is assumed to link to a content item of type `weapon`.
When adding something to such a property, ensure that the value is the `name` of an existing content item of the appropriate type. It will be rewritten to an `id` automatically during the build process.

Additionally, if the property name is `<contenttype>Ids` (plural), it is assumed to be an array of links to content items of type `<contenttype>`.

### Debug Commands

Every exported function in `@helpers` is available on the `window.api` object. Some useful functions include:

- `api.debugToggle()`
- `api.getEntry('ContentNameOrId')`
- `api.getEntriesByType('contenttype')`
