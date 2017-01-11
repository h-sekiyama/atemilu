module.exports = {
  hidpi: function (path) {
      return {
          '&': {
              background: 'url(' + path + ')'
          },
          '@media (min-resolution: 120dpi)': {
              '&': {
                  background: 'url(' + path + '@2x)'
              }
          }
      }
  }
}