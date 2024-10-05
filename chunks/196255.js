var i = n(735250);
n(470079);
var s = n(120356),
    o = n.n(s),
    a = n(481060),
    l = n(942951),
    r = n(456269),
    c = n(689938),
    d = n(921428);
t.Z = (e) => {
    var t, n;
    let { message: s, channel: u, renderColon: h, hasUnreads: m } = e,
        { user: p, author: f } = (0, r.AJ)(u),
        g = null !== (n = null !== (t = null == f ? void 0 : f.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) && void 0 !== n ? n : '',
        _ = (0, l.l)({
            user: null == s ? void 0 : s.author,
            channelId: u.id,
            guildId: u.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
            ariaLabel: c.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({ name: g })
        })(null != f ? f : void 0)((0, i.jsx)(i.Fragment, { children: g }), u.id);
    return (0, i.jsxs)(a.Text, {
        tag: 'span',
        className: o()(d.author, { [d.hasUnreads]: m }),
        variant: 'text-sm/semibold',
        children: [_, !0 === h ? ': ' : null]
    });
};
