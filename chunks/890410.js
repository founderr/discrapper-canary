n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(739566),
    s = n(492593),
    l = n(930282),
    u = n(464891),
    c = n(831557);
function d(e) {
    let { message: t, channel: n, content: i, className: d, compact: _, popoutProps: E, hideTimestamp: f = !1, withFooter: h = !1, ...p } = e,
        m = (0, o.ZP)(t);
    return (0, r.jsx)('div', {
        className: a()({ [c.withFooter]: h }, c.embedCard, { [c.compact]: _ }, d),
        children: (0, r.jsx)(s.Z, {
            ...p,
            className: a()(c.messageContainer, { [c.compact]: _ }),
            childrenMessageContent: (0, r.jsx)(l.ZP, {
                className: a()(c.__invalid_messageContent, { [c.compact]: _ }),
                message: t,
                content: i
            }),
            childrenHeader: (0, r.jsx)(u.ZP, {
                message: t,
                channel: n,
                author: m,
                guildId: null == n ? void 0 : n.guild_id,
                compact: _,
                hideTimestamp: f,
                className: a()(c.header, { [c.compact]: _ }),
                ...(null != E ? E : {})
            }),
            compact: _
        })
    });
}
