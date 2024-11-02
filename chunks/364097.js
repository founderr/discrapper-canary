n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(955415),
    o = n(846587),
    s = n(409059),
    c = n(58346),
    u = n(388032),
    d = n(312731),
    m = n(691784);
function f(e) {
    var t;
    let { code: f } = e,
        h = (0, r.e7)([s.Z], () => s.Z.getGuildTemplate(f));
    if (null == h || h.state === c.Rj.RESOLVING)
        return (0, i.jsxs)(a.Z, {
            children: [(0, i.jsx)(a.Z.Header, { text: u.intl.string(u.t.Xj87YW) }), (0, i.jsx)(a.Z.Body, { resolving: !0 })]
        });
    if (h.state === c.Rj.EXPIRED)
        return (0, i.jsxs)(a.Z, {
            children: [
                (0, i.jsx)(a.Z.Header, { text: u.intl.string(u.t.C7ZRNz) }),
                (0, i.jsxs)(a.Z.Body, {
                    children: [
                        (0, i.jsx)(a.Z.Icon, { expired: !0 }),
                        (0, i.jsx)(a.Z.Info, {
                            expired: !0,
                            title: u.intl.string(u.t.A6MwXF)
                        })
                    ]
                })
            ]
        });
    let p = __OVERLAY__
        ? (0, i.jsx)(a.Z.Button, {
              isDisabled: !0,
              color: a.Z.Button.Colors.PRIMARY,
              children: u.intl.string(u.t.W7NTWl)
          })
        : (0, i.jsx)(a.Z.Button, {
              onClick: () => {
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([n.e('10778'), n.e('93474')]).then(n.bind(n, 766775));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              guildTemplate: h
                          });
                  });
              },
              submitting: h.state === c.Rj.ACCEPTING,
              color: a.Z.Button.Colors.GREEN,
              children: u.intl.string(u.t['a3Gl+f'])
          });
    return (0, i.jsxs)(a.Z, {
        children: [
            (0, i.jsx)(a.Z.Header, { text: u.intl.string(u.t.kAvFkJ) }),
            (0, i.jsxs)(a.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: m.headerLine,
                        children: [
                            (0, i.jsx)(o.Z, { className: d.icon }),
                            (0, i.jsx)(a.Z.Info, {
                                title: h.name,
                                children: u.intl.format(u.t.cGXXHB, { usageCount: String(null !== (t = h.usageCount) && void 0 !== t ? t : 0) })
                            })
                        ]
                    }),
                    p
                ]
            })
        ]
    });
}
