n.d(t, {
  Z: function() {
    return o
  }
});
var r = n(735250);
n(470079);
var u = n(481060),
  l = n(626135),
  a = n(695346),
  i = n(981631),
  s = n(689938);

function o() {
  let e = a.dN.useSetting(),
    t = a.R$.useSetting();
  return e ? null : (0, r.jsx)(u.MenuCheckboxItem, {
    id: "preview-markdown-toggle",
    label: s.Z.Messages.PREVIEW_MARKDOWN,
    action: () => {
      let e = !t;
      l.default.track(i.rMx.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: i.jXE.SETTINGS_CONTEXT_MENU
        }
      }), a.R$.updateSetting(e)
    },
    checked: t
  })
}