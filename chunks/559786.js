n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(990547),
    a = n(481060),
    l = n(301938),
    o = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [_, h] = r.useState(u.n.START),
        [E, g] = r.useState(null),
        [p, m] = r.useState(''),
        f = { impression_group: i.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, s.jsx)('div', {
        style: { margin: '8px' },
        children: (0, s.jsxs)(a.Slides, {
            activeSlide: _,
            width: d,
            onSlideReady: g,
            children: [
                (0, s.jsx)(a.Slide, {
                    id: u.n.START,
                    impressionProperties: f,
                    impressionName: i.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, s.jsx)(o.Z, {
                        setSlide: h,
                        transitionTo: t
                    })
                }),
                (0, s.jsx)(a.Slide, {
                    id: u.n.PASSWORD,
                    impressionProperties: f,
                    impressionName: i.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, s.jsx)(l.Z, {
                        setOriginalEmail: m,
                        setSlide: h,
                        transitionTo: t,
                        ready: E === u.n.PASSWORD,
                        token: n
                    })
                }),
                (0, s.jsx)(a.Slide, {
                    id: u.n.SUCCESS,
                    impressionProperties: f,
                    impressionName: i.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, s.jsx)(c.Z, { email: p })
                })
            ]
        })
    });
}
