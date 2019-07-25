export default (action, label) => {
  const payload = { event: 'generic', category: 'RogerRamos.me Site', action, label }
  /* eslint-disable no-undef, no-console */
  if (window.dataLayer) {
    dataLayer.push(payload)
  } else {
    console.error('DataLayer is not defined', payload)
  }
}
