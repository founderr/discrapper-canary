n.d(t, {
  l: function() {
    return h
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  r = n(484459),
  u = n(103575),
  c = n(592125),
  d = n(91047);

function h(e) {
  var t, n;
  let {
    user: h,
    channelId: m,
    guildId: p,
    messageId: g,
    stopPropagation: T = !1,
    ariaLabel: f
  } = e, {
    analyticsLocations: v
  } = (0, o.ZP)(l.Z.USERNAME);
  let E = (t = h, n = m, s.useCallback(e => {
    let i = c.Z.getChannel(n);
    null != i && null != t && (0, d.Pv)(e, t, i)
  }, [t, n]));
  return s.useCallback(e => (t, n) => {
    let l = (n, i) => (0, s.createElement)(a.NameWithRoleAnchor, {
        ...null != n ? n : {},
        key: i,
        onContextMenu: E,
        name: t,
        color: null == e ? void 0 : e.colorString,
        roleName: null == e ? void 0 : e.colorRoleName,
        "aria-label": f
      }),
      c = e => t => {
        T && t.stopPropagation(), e(t)
      };
    return (0, i.jsx)(o.Gt, {
      value: v,
      children: null != h ? (0, i.jsx)(a.Popout, {
        position: "right",
        preload: () => (0, r.W)(h.id, h.getAvatarURL(p, 80), {
          guildId: p,
          channelId: m
        }),
        renderPopout: t => (0, i.jsx)(u.Z, {
          ...t,
          location: "useUsernameHook",
          userId: h.id,
          guildId: p,
          channelId: m,
          messageId: g,
          roleId: null == e ? void 0 : e.colorRoleId
        }),
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return l({
            onClick: c(t),
            ...n
          })
        }
      }, n) : l(void 0, n)
    })
  }, [v, h, m, p, g, E, T, f])
}