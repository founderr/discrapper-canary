n.d(t, {
    O: function () {
        return o;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(307375),
    a = n(388032);
function o() {
    let [e, t] = r.useState(s.A.INVITE);
    return (0, i.jsxs)(l.Stack, {
        gap: 32,
        children: [
            (0, i.jsx)(l.Heading, {
                color: 'header-primary',
                variant: 'heading-lg/semibold',
                children: a.intl.string(a.t.oGaVGx)
            }),
            (0, i.jsx)(s.h, {
                onTypePicked: t,
                activeType: e
            })
        ]
    });
}
