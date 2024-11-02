t.d(n, {
    Z: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var o = t(481060),
    i = t(626135),
    l = t(695346),
    a = t(981631),
    c = t(388032);
function u() {
    let e = l.dN.useSetting(),
        n = l.R$.useSetting();
    return e
        ? null
        : (0, r.jsx)(o.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                  let e = !n;
                  i.default.track(a.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: a.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      l.R$.updateSetting(e);
              },
              checked: n
          });
}
