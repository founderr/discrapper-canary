n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(990547),
    l = n(481060),
    a = n(301938),
    o = n(806701),
    c = n(808993),
    u = n(720196);
function d(e) {
    let { transitionTo: t, token: n, width: d } = e,
        [h, g] = r.useState(u.n.START),
        [m, p] = r.useState(null),
        [f, _] = r.useState(''),
        x = { impression_group: s.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, i.jsx)('div', {
        style: { margin: '8px' },
        children: (0, i.jsxs)(l.Slides, {
            activeSlide: h,
            width: d,
            onSlideReady: p,
            children: [
                (0, i.jsx)(l.Slide, {
                    id: u.n.START,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, i.jsx)(o.Z, {
                        setSlide: g,
                        transitionTo: t
                    })
                }),
                (0, i.jsx)(l.Slide, {
                    id: u.n.PASSWORD,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, i.jsx)(a.Z, {
                        setOriginalEmail: _,
                        setSlide: g,
                        transitionTo: t,
                        ready: m === u.n.PASSWORD,
                        token: n
                    })
                }),
                (0, i.jsx)(l.Slide, {
                    id: u.n.SUCCESS,
                    impressionProperties: x,
                    impressionName: s.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, i.jsx)(c.Z, { email: f })
                })
            ]
        })
    });
}
