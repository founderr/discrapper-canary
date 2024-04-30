"use strict";
a.r(t), a.d(t, {
  openGuildSettingsPickerModal: function() {
    return l
  }
});
var n = a("735250");
a("470079");
var s = a("481060");

function l(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([a.e("99387"), a.e("8102")]).then(a.bind(a, "674189"));
    return a => (0, n.jsx)(t, {
      ...a,
      ...e
    })
  }, {
    modalKey: "Guild Settings Picker Modal"
  })
}