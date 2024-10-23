t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(481060),
    s = t(932776),
    o = t(680298),
    r = t(289465),
    d = t(689938),
    c = t(701468);
function u(e) {
    let { applicationIcon: n, applicationName: t, canNavigate: u, guildId: I } = e,
        { results: m, query: _, setQuery: N, unfilteredCount: E } = (0, s.O)(),
        T = null != m && E > 0;
    return (0, i.jsx)(a.Fragment, {
        children: T
            ? (0, i.jsx)(r.Z, {
                  bar: (0, i.jsx)(l.SearchBar, {
                      query: _,
                      onChange: N,
                      onClear: () => N('')
                  }),
                  inModal: !1,
                  title: d.Z.Messages.COMMANDS,
                  children: m.map((e, s) =>
                      (0, i.jsxs)(
                          a.Fragment,
                          {
                              children: [
                                  (0, i.jsx)(o.Z, {
                                      applicationIcon: n,
                                      applicationName: t,
                                      canNavigate: u,
                                      command: e,
                                      guildId: I
                                  }),
                                  s < m.length - 1 ? (0, i.jsx)(l.FormDivider, {}) : null
                              ]
                          },
                          e.id
                      )
                  )
              })
            : (0, i.jsx)(l.Card, {
                  className: c.emptyCard,
                  editable: !0,
                  children: (0, i.jsx)(l.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: d.Z.Messages.INTEGRATIONS_APPLICATION_NO_COMMANDS
                  })
              })
    });
}
