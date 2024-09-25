n.d(t, {
    Z: function () {
        return p;
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
    c = n(993365),
    d = n(481060),
    _ = n(713938),
    E = n(689938),
    f = n(341772);
function h(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)('div', {
        className: f.scope,
        children: [
            r
                ? (0, i.jsx)(d.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(f.icon, f.fakeScopeIcon)
                  })
                : (0, i.jsx)(d.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: o()(f.icon, f.scopeIcon)
                  }),
            (0, i.jsxs)('div', {
                className: f.scopeInner,
                children: [
                    (0, i.jsx)(c.x, {
                        variant: 'text-md/normal',
                        color: r ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, i.jsx)(c.x, {
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
function p(e) {
    var t;
    let { application: n, accountScopes: r, requestedScopes: a, integrationType: o, errors: c, isTrustedName: p = !1 } = e,
        m = (0, s.Z)(() => _.ZW[Math.floor(Math.random() * _.ZW.length)]);
    if (0 === r.length) return null;
    let I = m(),
        T = p ? E.Z.Messages.OAUTH2_SCOPES_LABEL_TRUSTED_NAME : E.Z.Messages.OAUTH2_SCOPES_LABEL,
        g = o === l.Y.USER_INSTALL && a.includes(u.x.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)('div', {
        className: f.scopes,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-sm/normal',
                className: f.sectionLabel,
                children: T.format({ application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            r
                .map((e) =>
                    (0, _.CI)(e, r).map((t, n) => {
                        var r;
                        return (0, i.jsx)(
                            h,
                            {
                                text: t,
                                error: 0 === n ? (null == c ? void 0 : null === (r = c[e]) || void 0 === r ? void 0 : r[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            g && (0, i.jsx)(h, { text: E.Z.Messages.SCOPE_DM_YOU }),
            (0, i.jsx)(h, {
                text: I,
                isFake: !0
            })
        ]
    });
}
