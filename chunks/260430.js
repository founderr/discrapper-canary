r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(536091);
var a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(75124),
    u = r(373793),
    c = r(243814),
    d = r(993365),
    f = r(481060),
    _ = r(713938),
    h = r(388032),
    p = r(436741);
function m(e) {
    let { text: n, error: r, isFake: i } = e;
    return (0, a.jsxs)('div', {
        className: p.scope,
        children: [
            i
                ? (0, a.jsx)(f.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(p.icon, p.fakeScopeIcon)
                  })
                : (0, a.jsx)(f.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(p.icon, p.scopeIcon)
                  }),
            (0, a.jsxs)('div', {
                className: p.scopeInner,
                children: [
                    (0, a.jsx)(d.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: n
                    }),
                    null != r
                        ? (0, a.jsx)(d.x, {
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: r
                          })
                        : null
                ]
            })
        ]
    });
}
function g(e) {
    var n;
    let { application: r, accountScopes: i, requestedScopes: s, integrationType: o, errors: d, isTrustedName: g = !1 } = e,
        E = (0, l.Z)(() => _.ZW[Math.floor(Math.random() * _.ZW.length)]);
    if (0 === i.length) return null;
    let v = E(),
        I = g ? h.t.PZpY9f : h.t['1Hz+Sk'],
        T = o === u.Y.USER_INSTALL && s.includes(c.x.APPLICATIONS_COMMANDS);
    return (0, a.jsxs)('div', {
        className: p.scopes,
        children: [
            (0, a.jsx)(f.Heading, {
                variant: 'heading-sm/normal',
                className: p.sectionLabel,
                children: h.intl.format(I, { application: null !== (n = null == r ? void 0 : r.name) && void 0 !== n ? n : '' })
            }),
            i
                .map((e) =>
                    (0, _.CI)(e, i).map((n, r) => {
                        var i;
                        return (0, a.jsx)(
                            m,
                            {
                                text: n,
                                error: 0 === r ? (null == d ? void 0 : null === (i = d[e]) || void 0 === i ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(r)
                        );
                    })
                )
                .flat(),
            T && (0, a.jsx)(m, { text: h.intl.string(h.t.Ls2XRk) }),
            (0, a.jsx)(m, {
                text: v,
                isFake: !0
            })
        ]
    });
}
