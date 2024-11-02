t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(481060),
    a = t(932776),
    o = t(680298),
    s = t(289465),
    d = t(388032),
    c = t(701468);
function u(e) {
    let { applicationIcon: n, applicationName: t, canNavigate: u, guildId: m } = e,
        { results: h, query: p, setQuery: g, unfilteredCount: f } = (0, a.O)(),
        x = null != h && f > 0;
    return (0, i.jsx)(l.Fragment, {
        children: x
            ? (0, i.jsx)(s.Z, {
                  bar: (0, i.jsx)(r.SearchBar, {
                      query: p,
                      onChange: g,
                      onClear: () => g('')
                  }),
                  inModal: !1,
                  title: d.intl.string(d.t['0hKkS0']),
                  children: h.map((e, a) =>
                      (0, i.jsxs)(
                          l.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(o.Z, {
                                      applicationIcon: n,
                                      applicationName: t,
                                      canNavigate: u,
                                      command: e,
                                      guildId: m
                                  }),
                                  a < h.length - 1 ? (0, i.jsx)(r.FormDivider, {}) : null
                              ]
                          },
                          e.id
                      )
                  )
              })
            : (0, i.jsx)(r.Card, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, i.jsx)(r.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: d.intl.string(d.t['x78c+P'])
                  })
              })
    });
}
