var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(942951),
    l = n(456269),
    u = n(689938),
    c = n(921428);
let d = (e) => {
    var t, n;
    let { message: i, channel: d, renderColon: _, hasUnreads: E } = e,
        { user: f, author: h } = (0, l.AJ)(d),
        p = null !== (n = null !== (t = null == h ? void 0 : h.nick) && void 0 !== t ? t : null == f ? void 0 : f.username) && void 0 !== n ? n : '',
        m = (0, s.l)({
            user: null == i ? void 0 : i.author,
            channelId: d.id,
            guildId: d.guild_id,
            messageId: null == i ? void 0 : i.id,
            stopPropagation: !0,
            ariaLabel: u.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({ name: p })
        })(null != h ? h : void 0)((0, r.jsx)(r.Fragment, { children: p }), d.id);
    return (0, r.jsxs)(o.Text, {
        tag: 'span',
        className: a()(c.author, { [c.hasUnreads]: E }),
        variant: 'text-sm/semibold',
        children: [m, !0 === _ ? ': ' : null]
    });
};
t.Z = d;
