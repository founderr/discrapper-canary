var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(942951),
  r = n(456269),
  u = n(689938),
  c = n(164675);
t.Z = e => {
  var t, n;
  let {
    message: s,
    channel: d,
    renderColon: h,
    hasUnreads: m
  } = e, {
    user: p,
    author: g
  } = (0, r.AJ)(d), T = null !== (n = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == p ? void 0 : p.username) && void 0 !== n ? n : "", f = (0, o.l)({
    user: null == s ? void 0 : s.author,
    channelId: d.id,
    guildId: d.guild_id,
    messageId: null == s ? void 0 : s.id,
    stopPropagation: !0,
    ariaLabel: u.Z.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
      name: T
    })
  })(null != g ? g : void 0)((0, i.jsx)(i.Fragment, {
    children: T
  }), d.id);
  return (0, i.jsxs)(l.Text, {
    tag: "span",
    className: a()(c.author, {
      [c.hasUnreads]: m
    }),
    variant: "text-sm/semibold",
    children: [f, !0 === h ? ": " : null]
  })
}