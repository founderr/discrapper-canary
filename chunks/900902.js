n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250),
  i = n(470079),
  s = n(778947),
  a = n(534761),
  r = n(901461),
  o = n(453687),
  c = n(507418),
  u = n(348238),
  d = n(981631);
let h = i.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: a = !1,
      groupId: r,
      isGroupStart: o,
      usernameProfile: h,
      avatarProfile: m,
      setPopout: p,
      author: E,
      repliedMessage: g,
      roleIcon: f
    } = e, C = (0, u.wq)(t.author.id, n.id), _ = (0, u.XO)(t, n, h, p), I = (0, u.R9)(m, p), x = i.useCallback(() => p({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [p]);
    return (0, l.jsx)(s.ZP, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: g,
      author: E,
      compact: a,
      subscribeToGroupId: r,
      showTimestampOnHover: !o && a && t.type !== d.uaV.REPLY,
      renderPopout: c.Z,
      showAvatarPopout: m,
      showUsernamePopout: h,
      onClickAvatar: I,
      onClickUsername: _,
      onContextMenu: C,
      onPopoutRequestClose: x,
      roleIcon: f
    })
  }),
  m = i.memo(a.Z);

function p(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: i,
    replyReference: s,
    author: a,
    repliedMessage: c,
    roleIcon: u
  } = e, {
    message: d,
    compact: p,
    channel: E,
    groupId: g
  } = t, {
    usernameProfile: f,
    avatarProfile: C
  } = i;
  if ((0, r.Z)(d)) return null;
  let _ = d.id === g;
  return _ || p || null != s ? (0, l.jsx)(h, {
    message: d,
    channel: E,
    compact: p,
    subscribeToGroupId: g,
    isGroupStart: _,
    groupId: g,
    setPopout: n,
    usernameProfile: f,
    avatarProfile: C,
    author: a,
    repliedMessage: c,
    roleIcon: u
  }) : (0, l.jsx)(m, {
    compact: !0,
    timestamp: d.timestamp,
    isInline: !1,
    id: (0, o.Dv)(d),
    isVisibleOnlyOnHover: !0,
    cozyAlt: !0
  })
}