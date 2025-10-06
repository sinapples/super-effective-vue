<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-6">
          <h1 class="text-h4 mb-4">Privacy Policy</h1>
          <div class="text-caption grey--text mb-6">
            Last updated: {{ lastUpdated }}
          </div>

          <div class="privacy-content">
            <section class="mb-6">
              <h2 class="text-h5 mb-3">Introduction</h2>
              <p>
                Welcome to Super Effective ("we", "our", or "us"). We respect
                your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard
                your information when you use our Pokemon type effectiveness
                calculator.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Data We Collect</h2>
              <p class="mb-2">
                We collect minimal data to provide and improve our service:
              </p>

              <h3 class="text-h6 mt-4 mb-2">
                Essential Data (Always Collected)
              </h3>
              <ul class="ml-6">
                <li>
                  <strong>Local Storage:</strong> Your app preferences and
                  cookie consent choices are stored locally in your browser
                </li>
                <li>
                  <strong>Service Worker Cache:</strong> Pokemon data and app
                  files cached for offline functionality
                </li>
              </ul>

              <h3 class="text-h6 mt-4 mb-2">
                Analytics Data (Only with Your Consent)
              </h3>
              <ul class="ml-6">
                <li>Page views and navigation patterns</li>
                <li>Pokemon searches and type selections</li>
                <li>Button clicks and user interactions</li>
                <li>
                  Device type, browser type, and approximate location (country
                  level)
                </li>
                <li>Session duration and bounce rate</li>
              </ul>

              <p class="mt-3">
                <strong>Note:</strong> We use Google Analytics with IP
                anonymization enabled. No personally identifiable information
                (PII) is collected. We do not track individual users across
                sessions.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">How We Use Your Data</h2>
              <ul class="ml-6">
                <li>
                  <strong>Essential cookies:</strong> To remember your
                  preferences and enable PWA functionality
                </li>
                <li>
                  <strong>Analytics cookies:</strong> To understand how users
                  interact with our app and identify areas for improvement
                </li>
                <li>
                  <strong>Performance:</strong> To optimize app speed and fix
                  bugs
                </li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Third-Party Services</h2>
              <p class="mb-2">We use the following third-party services:</p>
              <ul class="ml-6">
                <li>
                  <strong>Google Analytics:</strong> For usage analytics (only
                  with your consent)
                </li>
                <li>
                  <strong>Firebase Storage:</strong> For hosting static assets
                  (images)
                </li>
              </ul>
              <p class="mt-3">
                These services have their own privacy policies. We recommend
                reviewing them:
              </p>
              <ul class="ml-6">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener"
                    >Google Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener"
                    >Firebase Privacy Policy</a
                  >
                </li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Your Rights (GDPR)</h2>
              <p class="mb-2">
                Under GDPR, you have the following rights regarding your data:
              </p>
              <ul class="ml-6">
                <li>
                  <strong>Right to Access:</strong> Request a copy of data we
                  hold about you
                </li>
                <li>
                  <strong>Right to Rectification:</strong> Correct inaccurate
                  data
                </li>
                <li>
                  <strong>Right to Erasure:</strong> Request deletion of your
                  data
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> Limit how we
                  use your data
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> Receive your data
                  in a structured format
                </li>
                <li>
                  <strong>Right to Object:</strong> Opt-out of data processing
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Change your cookie
                  preferences at any time
                </li>
              </ul>

              <p class="mt-4">
                Since we collect minimal analytics data and no personal
                accounts, you can exercise most rights by clearing your browser
                data or adjusting cookie preferences below.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Data Retention</h2>
              <ul class="ml-6">
                <li>
                  <strong>Local Storage:</strong> Stored indefinitely until you
                  clear browser data
                </li>
                <li>
                  <strong>Analytics Data:</strong> Retained by Google Analytics
                  for 14 months
                </li>
                <li>
                  <strong>Service Worker Cache:</strong> Updated automatically
                  when app updates
                </li>
              </ul>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Cookies We Use</h2>
              <v-simple-table class="my-3">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Type</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>cookie_consent</td>
                      <td>Stores your cookie preferences</td>
                      <td>Essential</td>
                      <td>Permanent</td>
                    </tr>
                    <tr>
                      <td>_ga</td>
                      <td>Google Analytics user identifier</td>
                      <td>Analytics</td>
                      <td>2 years</td>
                    </tr>
                    <tr>
                      <td>_ga_*</td>
                      <td>Google Analytics session data</td>
                      <td>Analytics</td>
                      <td>2 years</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Children's Privacy</h2>
              <p>
                Our service does not specifically target children under 13. We
                do not knowingly collect personal information from children. If
                you are a parent and believe your child has provided us with
                personal data, please contact us.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Changes
                will be posted on this page with an updated "Last updated" date.
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-h5 mb-3">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or want to
                exercise your rights, please contact:
              </p>
              <ul class="ml-6">
                <li>
                  Email:
                  <a
                    href="mailto:josh@supereffective.tips"
                    >josh@supereffective.tips</a
                  >
                </li>
              </ul>
            </section>

            <v-divider class="my-6"></v-divider>

            <section>
              <h2 class="text-h5 mb-4">Manage Your Cookie Preferences</h2>
              <CookiePreferences />
            </section>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CookiePreferences from '@/components/CookiePreferences.vue'

export default {
  name: 'Privacy',

  components: {
    CookiePreferences
  },

  head() {
    return {
      title: {
        inner: 'Privacy Policy',
        separator: '-',
        complement: 'Super Effective'
      },
      meta: [
        {
          name: 'description',
          content:
            'Privacy policy for Super Effective. Learn how we collect, use, and protect your data. GDPR compliant with cookie consent management.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://supereffective.tips/privacy' }]
    }
  },

  data() {
    return {
      lastUpdated: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.privacy-content {
  line-height: 1.7;
}

.privacy-content h2 {
  color: #f74d5e;
}

.privacy-content h3 {
  color: #424242;
}

.privacy-content p,
.privacy-content li {
  color: #424242;
}

.privacy-content ul {
  margin-bottom: 16px;
}

.privacy-content li {
  margin-bottom: 8px;
}

.privacy-content a {
  color: #f74d5e;
  text-decoration: underline;
}

.privacy-content a:hover {
  color: #d93d4e;
}
</style>
