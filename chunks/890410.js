n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(739566),
    r = n(492593),
    o = n(930282),
    c = n(464891),
    d = n(831557);
function u(e) {
    let { message: t, channel: n, content: a, className: u, compact: _, popoutProps: E, hideTimestamp: I = !1, withFooter: m = !1, ...T } = e,
        N = (0, l.ZP)(t);
    return (0, i.jsx)('div', {
        className: s()({ [d.withFooter]: m }, d.embedCard, { [d.compact]: _ }, u),
        children: (0, i.jsx)(r.Z, {
            ...T,
            className: s()(d.messageContainer, { [d.compact]: _ }),
            childrenMessageContent: (0, i.jsx)(o.ZP, {
                className: s()(d.__invalid_messageContent, { [d.compact]: _ }),
                message: t,
                content: a
            }),
            childrenHeader: (0, i.jsx)(c.ZP, {
                message: t,
                channel: n,
                author: N,
                guildId: null == n ? void 0 : n.guild_id,
                compact: _,
                hideTimestamp: I,
                className: s()(d.header, { [d.compact]: _ }),
                ...(null != E ? E : {})
            }),
            compact: _
        })
    });
}
