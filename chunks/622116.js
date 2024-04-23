"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  i = n("475179"),
  r = n("287734"),
  o = n("933557"),
  u = n("703656"),
  d = n("131704"),
  c = n("592125"),
  f = n("430824"),
  E = n("699516"),
  _ = n("594174"),
  m = n("797053"),
  T = n("934415"),
  I = n("900849"),
  p = n("981631");

function h(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: h,
    className: N,
    openChatWithoutConnecting: S
  } = e, C = (0, l.useStateFromStores)([_.default, E.default], () => null == t ? "" : (0, o.computeChannelName)(t, _.default, E.default), [t]);
  return (0, s.jsx)(a.Tooltip, {
    text: C,
    position: "top",
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(m.default, {
        role: "link",
        className: N,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != h && h(), (0, a.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = f.default.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              I.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let l = c.default.getChannel(t);
            if (null != l && (0, d.isGuildVocalChannelType)(l.type)) {
              if (n) {
                i.default.updateChatOpen(l.id, !0), (0, u.transitionTo)(p.Routes.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(l.id);
              return
            }(0, u.transitionTo)(p.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, S))
        },
        onMouseEnter: l,
        onMouseLeave: o,
        iconType: (0, T.getMentionIconType)(t),
        children: C
      })
    }
  })
}