const CONSENT_KEY = 'cookie_consent'

/**
 * Get the current consent status from localStorage
 * @returns {Object|null} Consent object or null if not set
 */
export const getConsentStatus = () => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

/**
 * Save consent preferences to localStorage
 * @param {Object} consent - Consent object with essential, analytics, etc.
 */
export const setConsent = consent => {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

/**
 * Check if analytics cookies are allowed
 * @returns {boolean}
 */
export const hasAnalyticsConsent = () => {
  const consent = getConsentStatus()
  return consent && consent.analytics === true
}

/**
 * Check if user has made any consent choice
 * @returns {boolean}
 */
export const hasConsentChoice = () => {
  return getConsentStatus() !== null
}

/**
 * Clear all consent preferences
 */
export const clearConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch (error) {
    console.error('Error clearing cookie consent:', error)
  }
}
