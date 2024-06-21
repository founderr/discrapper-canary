n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250),
  i = n(470079),
  s = n(901461),
  a = n(453687),
  r = n(464891),
  o = n(318713),
  c = n(507418),
  u = n(348238),
  d = n(981631);
let h = i.memo(function(e) {
    let {
      message: t,
      channel: n,
      compact: s = !1,
      groupId: a,
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
    return (0, l.jsx)(r.ZP, {
      guildId: n.guild_id,
      message: t,
      channel: n,
      repliedMessage: g,
      author: E,
      compact: s,
      subscribeToGroupId: a,
      showTimestampOnHover: !o && s && t.type !== d.uaV.REPLY,
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
  m = i.memo(o.Z);

function p(e) {
  let {
    messageProps: t,
    setPopout: n,
    messagePopouts: i,
    replyReference: r,
    author: o,
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
  if ((0, s.Z)(d)) return null;
  let _ = d.id === g;
  return _ || p || null != r ? (0, l.jsx)(h, {
    message: d,
    channel: E,
    compact: p,
    subscribeToGroupId: g,
    isGroupStart: _,
    groupId: g,
    setPopout: n,
    usernameProfile: f,
    avatarProfile: C,
    author: o,
    repliedMessage: c,
    roleIcon: u
  }) : (0, l.jsx)(m, {
    compact: !0,
    timestamp: d.timestamp,
    isInline: !1,
    id: (0, a.Dv)(d),
    isVisibleOnlyOnHover: !0,
    cozyAlt: !0
  })
}