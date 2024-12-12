n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(626135),
    l = n(695346),
    a = n(981631),
    c = n(388032);
function u() {
    let e = l.dN.useSetting(),
        t = l.R$.useSetting();
    return e
        ? null
        : (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'preview-markdown-toggle',
              label: c.intl.string(c.t.sHJ9wc),
              action: () => {
                  let e = !t;
                  o.default.track(a.rMx.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: a.jXE.SETTINGS_CONTEXT_MENU }
                  }),
                      l.R$.updateSetting(e);
              },
              checked: t
          });
}
