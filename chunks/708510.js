n.d(t, {
    O: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(202905),
    a = n(307375),
    o = n(388032),
    c = n(322825);
function d(e) {
    let { joinType: t } = e;
    switch (t) {
        case a.A.INVITE:
            return null;
        case a.A.APPLY:
            return (0, i.jsx)(s.r, {});
        case a.A.DISCOVERABLE:
            return null;
    }
}
function u() {
    let [e, t] = r.useState(a.A.INVITE),
        n = e !== a.A.INVITE;
    return (0, i.jsxs)(l.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(l.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: o.intl.string(o.t.oGaVGx)
            }),
            (0, i.jsx)(a.h, {
                onTypePicked: t,
                activeType: e
            }),
            n && (0, i.jsx)('div', { className: c.divider }),
            (0, i.jsx)(d, { joinType: e })
        ]
    });
}
