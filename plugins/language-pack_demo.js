/**
 * @name InPageEdit_plugin_demo
 * @description This is a language pack demo
 */
/** Let's define a custom language pack */
mw.hook('InPageEdit.init.before').add(() => {
  // Get InPageEdit variable
  var ipe = window.InPageEdit || {}
  ipe.i18n = ipe.i18n || {}

  // Set language pack
  const myLanguagePack = {
    'zh-hans': {
      mypack_editCount: '你编辑了$1次'
    },
    en: {
      mypack_editCount: 'You have $1 {{PLURAL:$1|edit|edits}}'
    }
  }

  // Extend data
  ipe.i18n = $.extend({}, ipe.i18n, myLanguagePack)

  // Save variable
  window.InPageEdit = ipe
})

// We can test it
mw.hook('InPageEdit').add(({ _msg }) => {
  console.log(_msg('mypack_editCount', 1), _msg('mypack_editCount', 10)) // => en: You have 1 edit, You have 10 edits
})