t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var o = t(481060),
    i = t(626135),
    a = t(695346),
    l = t(981631),
    c = t(388032);
function u() {
    let e = a.dN.useSetting(),
        n = a.R$.useSetting();
    return e
        ? null
        : (0, r.jsx)(o.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                  let e = !n;
                  i.default.track(l.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: l.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      a.R$.updateSetting(e);
              },
              checked: n
          });
}
