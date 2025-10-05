# Quick Implementation Examples

## 1. Update Router for Page View Tracking

**File: `src/router/index.js`**

Add these lines:

```javascript
import { trackPageView } from '@/utils/analytics'

// ... existing router setup ...

// Add AFTER router creation, BEFORE export default router
router.afterEach((to) => {
  // Track page views on route change
  trackPageView(to)
})

export default router
```

---

## 2. Track Pokemon Searches

**File: `src/components/SearchPokemon.vue`**

```javascript
import { trackPokemonSearch } from '@/utils/analytics'

// In the watch section, update the selection watcher:
watch: {
  selection(selection) {
    if (selection) {
      const types = pokedex.getTypes(selection)
      this.$emit('pokemonTypes', types, selection)

      // Add this line:
      trackPokemonSearch(selection, types)
    }
  }
}
```

---

## 3. Track Type Selections

**File: `src/components/SuperEffective.vue`**

```javascript
import { trackTypeSelection } from '@/utils/analytics'

// In the updateSelection method:
updateSelection(type) {
  // ... existing code for managing selection ...

  this.findEffectiveness()

  // Add this line AFTER findEffectiveness():
  trackTypeSelection(type, this.selected)

  this.$emit('SelectedTypes', this.selected)
}
```

---

## 4. Track Donation Clicks

**File: `src/components/Support.vue`**

```vue
<template>
  <!-- Update buttons to track clicks -->
  <v-btn
    @click="trackDonation('venmo')"
    href="https://venmo.com/code?user_id=2003272562900992908"
    target="_blank"
  >
    Venmo
  </v-btn>

  <v-btn
    @click="trackDonation('paypal')"
    href="https://www.paypal.me/sinapples?locale.x=en_US"
    target="_blank"
  >
    PayPal
  </v-btn>

  <v-btn
    @click="trackDonation('buymeacoffee')"
    href="https://www.buymeacoffee.com/sinapples"
    target="_blank"
  >
    Buy Me Boba
  </v-btn>
</template>

<script>
import { trackDonation } from '@/utils/analytics'

export default {
  methods: {
    trackDonation(platform) {
      trackDonation(platform)
    }
  }
}
</script>
```

---

## 5. Update index.html Meta Tags

**File: `public/index.html`**

Replace the `<head>` section with:

```html
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />

  <!-- Primary Meta Tags -->
  <title>Super Effective - Pokemon Type Weakness Calculator</title>
  <meta name="title" content="Super Effective - Pokemon Type Weakness Calculator">
  <meta name="description" content="Find Pokemon type weaknesses and resistances instantly. Search 1000+ Pokemon or select type combinations to discover super effective counters.">
  <meta name="keywords" content="pokemon, type effectiveness, pokemon weakness, pokemon counter, pokemon types, super effective">
  <meta name="author" content="Josh Lopez">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://super-effective.app/">
  <meta property="og:title" content="Super Effective - Pokemon Type Weakness Calculator">
  <meta property="og:description" content="Find Pokemon type weaknesses and resistances instantly. Search by Pokemon name or select types.">
  <meta property="og:image" content="https://super-effective.app/img/og-image.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://super-effective.app/">
  <meta property="twitter:title" content="Super Effective - Pokemon Type Weakness Calculator">
  <meta property="twitter:description" content="Find Pokemon type weaknesses and resistances instantly.">
  <meta property="twitter:image" content="https://super-effective.app/img/twitter-card.png">

  <!-- Favicon -->
  <link rel="icon" href="<%= BASE_URL %>favicon.ico" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://super-effective.app/">

  <!-- Preconnect -->
  <link rel="preconnect" href="https://www.google-analytics.com">
  <link rel="preconnect" href="https://firebasestorage.googleapis.com">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Super Effective",
    "description": "Pokemon type effectiveness and weakness calculator",
    "url": "https://super-effective.app",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Josh Lopez"
    }
  }
  </script>

  <!-- Google Analytics (keep existing) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZ6Y37QFYM"></script>
  <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-NZ6Y37QFYM')
  </script>
</head>
```

---

## 6. Update robots.txt

**File: `public/robots.txt`**

```txt
User-agent: *
Allow: /

Sitemap: https://super-effective.app/sitemap.xml
```

---

## 7. Improve Home Page Meta

**File: `src/views/Home.vue`**

```javascript
head() {
  return {
    title: {
      inner: 'Pokemon Type Weakness Calculator',
      separator: '-',
      complement: 'Super Effective'
    },
    meta: [
      {
        name: 'description',
        content: 'Instantly find what types are super effective against any Pokemon. Search 1000+ Pokemon or select type combinations to discover weaknesses, resistances, and immunities.',
        id: 'desc'
      },
      {
        property: 'og:title',
        content: 'Super Effective - Pokemon Type Weakness Calculator'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://super-effective.app/'
      }
    ]
  }
}
```

---

## Testing Your Changes

### 1. Test Analytics (Development)

Open browser console and run:
```javascript
// After making changes, search for a Pokemon and check:
dataLayer // Should show events
```

### 2. Test SEO

Use these tools:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Schema.org Validator](https://validator.schema.org/)

### 3. Check Sitemap

Visit: `http://localhost:8080/sitemap.xml`

---

## Next Steps

1. ✅ Implement analytics tracking (15 min)
2. ✅ Update meta tags (10 min)
3. ✅ Update robots.txt (2 min)
4. 📸 Create OG/Twitter images (30 min)
5. 🚀 Deploy and test
6. 📊 Submit sitemap to Google Search Console

---

## Google Search Console Setup

After deploying:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `super-effective.app`
4. Verify ownership (DNS or HTML file method)
5. Submit sitemap: `https://super-effective.app/sitemap.xml`
6. Wait 3-7 days for indexing

---

## Monitoring

### Google Analytics 4 Reports to Watch

- **Engagement > Events** - See Pokemon searches, type selections
- **Engagement > Pages** - See most viewed pages
- **User Attributes** - Understand your audience
- **Conversions** - Track donation clicks

### Search Console Reports

- **Performance** - Clicks, impressions, CTR
- **Coverage** - Indexed pages, errors
- **Core Web Vitals** - Performance metrics
- **Mobile Usability** - Mobile issues

---

## Expected Timeline

- **Week 1:** Implement changes, deploy
- **Week 2:** Submit to search engines
- **Month 1:** Start seeing data in GA4
- **Month 2-3:** SEO improvements visible
- **Month 6:** Significant organic traffic growth

---

*These changes should take ~1-2 hours total to implement.*
