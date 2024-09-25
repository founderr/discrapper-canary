n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(536091);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(77866),
    l = n(373793),
    u = n(243814),
    c = n(260034),
    d = n(993365),
    _ = n(481060),
    E = n(713938),
    f = n(689938),
    h = n(341772);
function p(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)('div', {
        className: h.scope,
        children: [
            r
                ? (0, i.jsx)(_.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(h.icon, h.fakeScopeIcon)
                  })
                : (0, i.jsx)(_.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(h.icon, h.scopeIcon)
                  }),
            (0, i.jsxs)('div', {
                className: h.scopeInner,
                children: [
                    (0, i.jsx)(d.x, {
                        variant: 'text-md/normal',
                        color: r ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, i.jsx)(d.x, {
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: n
                          })
                        : null
                ]
            })
        ]
    });
}
function m(e) {
    var t;
    let { application: n, accountScopes: r, requestedScopes: a, integrationType: o, errors: d, isTrustedName: _ = !1 } = e,
        m = (0, s.Z)(() => E.ZW[Math.floor(Math.random() * E.ZW.length)]);
    if (0 === r.length) return null;
    let I = m(),
        T = _ ? f.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : f.Z.Messages.OAUTH2_SCOPES_LABEL,
        g = o === l.Y.USER_INSTALL && a.includes(u.x.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)('div', {
        className: h.scopes,
        children: [
            (0, i.jsx)(c.X, {
                variant: 'heading-sm/normal',
                className: h.sectionLabel,
                children: T.format({ application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            r
                .map((e) =>
                    (0, E.CI)(e, r).map((t, n) => {
                        var r;
                        return (0, i.jsx)(
                            p,
                            {
                                text: t,
                                error: 0 === n ? (null == d ? void 0 : null === (r = d[e]) || void 0 === r ? void 0 : r[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            g && (0, i.jsx)(p, { text: f.Z.Messages.SCOPE_DM_YOU }),
            (0, i.jsx)(p, {
                text: I,
                isFake: !0
            })
        ]
    });
}
