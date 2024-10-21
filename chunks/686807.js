t.d(n, {
    Z: function () {
        return E;
    }
});
var r = t(200651);
t(192379);
var i = t(481060),
    l = t(201895),
    o = t(471445),
    u = t(823379),
    s = t(303737),
    a = t(293810),
    c = t(689938),
    d = t(681027);
function _(e) {
    let { channelId: n } = e,
        t = (0, s.m7)(n);
    if (null == t) return (0, r.jsx)(r.Fragment, { children: '['.concat(c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, ']') });
    let u = t.isMediaChannel() ? i.ImageIcon : (0, o.Th)(t.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.HiddenVisually, { children: (0, l.ZP)({ channel: t }) }),
            (0, r.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != u &&
                        (0, r.jsx)(u, {
                            className: d.icon,
                            'aria-hidden': !0
                        }),
                    t.name
                ]
            })
        ]
    });
}
function E(e) {
    switch (e.ref_type) {
        case a.Qs.CHANNEL:
            return (0, r.jsx)(_, { channelId: e.ref_id });
        case a.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, u.vE)(e);
    }
}
