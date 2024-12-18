n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(201895),
    l = n(471445),
    u = n(823379),
    a = n(303737),
    s = n(293810),
    c = n(388032),
    d = n(507641);
function f(e) {
    let { channelId: t } = e,
        n = (0, a.m7)(t);
    if (null == n) return (0, i.jsx)(i.Fragment, { children: '['.concat(c.intl.string(c.t.bz1PZW), ']') });
    let u = n.isMediaChannel() ? r.ImageIcon : (0, l.Th)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: (0, o.ZP)({ channel: n }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != u &&
                        (0, i.jsx)(u, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    n.name
                ]
            })
        ]
    });
}
function _(e) {
    switch (e.ref_type) {
        case s.Qs.CHANNEL:
            return (0, i.jsx)(f, { channelId: e.ref_id });
        case s.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, u.vE)(e);
    }
}
