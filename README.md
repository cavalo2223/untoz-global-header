# Untoz Global Header

Global navigation component for the Untoz ecosystem.

## Quick install

Add a mount point and load the hosted component:

```html
<div id="untoz-global-header"></div>
<link rel="stylesheet" href="https://cavalo2223.github.io/untoz-global-header/src/untoz-global-header.css">
<script src="https://cavalo2223.github.io/untoz-global-header/src/untoz-global-header.js"></script>
<script>
  UntozGlobalHeader.render(
    document.getElementById('untoz-global-header'),
    { active: 'plus' }
  );
</script>
```

## Active site

Set `active` to the current Untoz property:

- `untoz`
- `plus`
- `news`
- `sports`
- `gaming`

Example for Untoz Sports:

```html
<script>
  UntozGlobalHeader.render(
    document.getElementById('untoz-global-header'),
    { active: 'sports' }
  );
</script>
```

The header configuration and destination links live in `src/untoz-global-header.js`, so updates can be made centrally and then consumed by sites using the hosted files.
