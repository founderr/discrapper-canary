r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(626135),
    o = r(596401),
    l = r(981631),
    u = r(388032);
let c = () => {
    s.default.track(l.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: 'profile_bio',
        target: o.D2
    });
};
function d() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('span', { children: u.intl.string(u.t.OJmNR0) }),
            (0, i.jsx)('br', {}),
            (0, i.jsx)('br', {}),
            (0, i.jsx)('span', {
                children: u.intl.format(u.t.RCYeBA, {
                    blogHook: (e, n) =>
                        (0, i.jsx)(
                            a.Anchor,
                            {
                                onClick: c,
                                target: '_blank',
                                rel: 'noreferrer noopener',
                                href: o.D2,
                                children: e
                            },
                            n
                        )
                })
            })
        ]
    });
}
