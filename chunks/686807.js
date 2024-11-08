t.d(n, {
    Z: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(201895),
    o = t(471445),
    u = t(823379),
    a = t(303737),
    s = t(293810),
    c = t(388032),
    d = t(695087);
function f(e) {
    let { channelId: n } = e,
        t = (0, a.m7)(n);
    if (null == t) return (0, i.jsx)(i.Fragment, { children: '['.concat(c.intl.string(c.t.bz1PZW), ']') });
    let u = t.isMediaChannel() ? r.ImageIcon : (0, o.Th)(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: (0, l.ZP)({ channel: t }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != u &&
                        (0, i.jsx)(u, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    t.name
                ]
            })
        ]
    });
}
function p(e) {
    switch (e.ref_type) {
        case s.Qs.CHANNEL:
            return (0, i.jsx)(f, { channelId: e.ref_id });
        case s.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, u.vE)(e);
    }
}
