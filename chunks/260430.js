n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(536091);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(75124),
    o = n(373793),
    l = n(243814),
    u = n(993365),
    c = n(481060),
    d = n(713938),
    f = n(388032),
    _ = n(381298);
function h(e) {
    let { text: t, error: n, isFake: i } = e;
    return (0, r.jsxs)('div', {
        className: _.scope,
        children: [
            i
                ? (0, r.jsx)(c.CircleXIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.fakeScopeIcon)
                  })
                : (0, r.jsx)(c.CircleCheckIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: a()(_.icon, _.scopeIcon)
                  }),
            (0, r.jsxs)('div', {
                className: _.scopeInner,
                children: [
                    (0, r.jsx)(u.x, {
                        variant: 'text-md/normal',
                        color: i ? 'text-muted' : void 0,
                        children: t
                    }),
                    null != n
                        ? (0, r.jsx)(u.x, {
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
    let { application: n, accountScopes: i, requestedScopes: a, integrationType: u, errors: p, isTrustedName: m = !1 } = e,
        g = (0, s.Z)(() => d.ZW[Math.floor(Math.random() * d.ZW.length)]);
    if (0 === i.length) return null;
    let E = g(),
        v = m ? f.t.PZpY9f : f.t['1Hz+Sk'],
        I = u === o.Y.USER_INSTALL && a.includes(l.x.APPLICATIONS_COMMANDS);
    return (0, r.jsxs)('div', {
        className: _.scopes,
        children: [
            (0, r.jsx)(c.Heading, {
                variant: 'heading-sm/normal',
                className: _.sectionLabel,
                children: f.intl.format(v, { application: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : '' })
            }),
            i
                .map((e) =>
                    (0, d.CI)(e, i).map((t, n) => {
                        var i;
                        return (0, r.jsx)(
                            h,
                            {
                                text: t,
                                error: 0 === n ? (null == p ? void 0 : null === (i = p[e]) || void 0 === i ? void 0 : i[0]) : void 0
                            },
                            ''.concat(e, '-').concat(n)
                        );
                    })
                )
                .flat(),
            I && (0, r.jsx)(h, { text: f.intl.string(f.t.Ls2XRk) }),
            (0, r.jsx)(h, {
                text: E,
                isFake: !0
            })
        ]
    });
}
