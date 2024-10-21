t.d(n, {
    Z: function () {
        return u;
    }
});
var o = t(200651);
t(192379);
var r = t(481060),
    a = t(626135),
    i = t(695346),
    l = t(981631),
    c = t(689938);
function u() {
    let e = i.dN.useSetting(),
        n = i.R$.useSetting();
    return e
        ? null
        : (0, o.jsx)(r.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: c.Z.Messages.PREVIEW_MARKDOWN,
              action: () => {
                  let e = !n;
                  a.default.track(l.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: l.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      i.R$.updateSetting(e);
              },
              checked: n
          });
}
