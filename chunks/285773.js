n.r(t),
    n.d(t, {
        default: function () {
            return u;
        }
    });
var i = n(200651);
n(192379);
var s = n(765717),
    r = n(384666),
    l = n(69580),
    o = n(397394),
    c = n(449934),
    a = n(721751),
    d = n(981631);
function u() {
    return (0, i.jsxs)(a.Z, {
        splash: (0, c.gK)(),
        children: [
            (0, i.jsx)(s.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZED,
                component: o.Xg
            }),
            (0, i.jsx)(s.Z, {
                path: d.Z5c.OAUTH2_AUTHORIZE,
                component: l.OAuth2AuthorizePage
            }),
            (0, i.jsx)(s.Z, {
                path: d.Z5c.OAUTH2_ERROR,
                component: o.j3
            }),
            (0, i.jsx)(s.Z, {
                path: [d.Z5c.OAUTH2_WHITELIST_ACCEPT, '/oauth2/whitelist/accept'],
                component: r.Z
            })
        ]
    });
}
