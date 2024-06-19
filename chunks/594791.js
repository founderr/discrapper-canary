n.d(t, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var u = n(481060),
  s = n(626135),
  a = n(695346),
  o = n(981631),
  i = n(689938);

function l() {
  let e = a.dN.useSetting(),
    t = a.R$.useSetting();
  return e ? null : (0, r.jsx)(u.MenuCheckboxItem, {
    id: "preview-markdown-toggle",
    label: i.Z.Messages.PREVIEW_MARKDOWN,
    action: () => {
      let e = !t;
      s.default.track(o.rMx.PREVIEW_MARKDOWN_TOGGLED, {
        enabled: e,
        location: {
          section: o.jXE.SETTINGS_CONTEXT_MENU
        }
      }), a.R$.updateSetting(e)
    },
    checked: t
  })
}