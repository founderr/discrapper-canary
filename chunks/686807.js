t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(735250);
t(470079);
var r = t(481060),
    l = t(201895),
    s = t(471445),
    o = t(823379),
    u = t(303737),
    a = t(293810),
    c = t(689938),
    _ = t(681027);
function d(e) {
    let { channelId: n } = e,
        t = (0, u.m7)(n);
    if (null == t) return (0, i.jsx)(i.Fragment, { children: '['.concat(c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_DELETED_CHANNEL_LABEL, ']') });
    let o = t.isMediaChannel() ? r.ImageIcon : (0, s.Th)(t.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.HiddenVisually, { children: (0, l.ZP)({ channel: t }) }),
            (0, i.jsxs)('div', {
                'aria-hidden': !0,
                children: [
                    null != o &&
                        (0, i.jsx)(o, {
                            className: _.icon,
                            'aria-hidden': !0
                        }),
                    t.name
                ]
            })
        ]
    });
}
function f(e) {
    switch (e.ref_type) {
        case a.Qs.CHANNEL:
            return (0, i.jsx)(d, { channelId: e.ref_id });
        case a.Qs.INTANGIBLE:
            return e.name;
        default:
            (0, o.vE)(e);
    }
}
