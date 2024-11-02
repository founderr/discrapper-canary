n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(739566),
    o = n(492593),
    s = n(930282),
    c = n(464891),
    u = n(831557);
function d(e) {
    let { message: t, channel: n, content: r, className: d, compact: m, popoutProps: f, hideTimestamp: h = !1, withFooter: p = !1, ...g } = e,
        _ = (0, a.ZP)(t);
    return (0, i.jsx)('div', {
        className: l()({ [u.withFooter]: p }, u.embedCard, { [u.compact]: m }, d),
        children: (0, i.jsx)(o.Z, {
            ...g,
            className: l()(u.messageContainer, { [u.compact]: m }),
            childrenMessageContent: (0, i.jsx)(s.ZP, {
                className: l()(u.__invalid_messageContent, { [u.compact]: m }),
                message: t,
                content: r
            }),
            childrenHeader: (0, i.jsx)(c.ZP, {
                message: t,
                channel: n,
                author: _,
                guildId: null == n ? void 0 : n.guild_id,
                compact: m,
                hideTimestamp: h,
                className: l()(u.header, { [u.compact]: m }),
                ...(null != f ? f : {})
            }),
            compact: m
        })
    });
}
