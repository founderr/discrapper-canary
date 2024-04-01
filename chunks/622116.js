"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
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
  E = n("430824"),
  f = n("699516"),
  _ = n("594174"),
  T = n("797053"),
  I = n("934415"),
  m = n("900849"),
  N = n("981631");

function p(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: p,
    className: S,
    openChatWithoutConnecting: C
  } = e, A = (0, l.useStateFromStores)([_.default, f.default], () => null == t ? "" : (0, o.computeChannelName)(t, _.default, f.default), [t]);
  return (0, s.jsx)(a.Tooltip, {
    text: A,
    position: "top",
    children: e => {
      let {
        onMouseEnter: l,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(T.default, {
        role: "link",
        className: S,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != p && p(), (0, a.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = E.default.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              m.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let l = c.default.getChannel(t);
            if (null != l && (0, d.isGuildVocalChannelType)(l.type)) {
              if (n) {
                i.default.updateChatOpen(l.id, !0), (0, u.transitionTo)(N.Routes.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(l.id);
              return
            }(0, u.transitionTo)(N.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, C))
        },
        onMouseEnter: l,
        onMouseLeave: o,
        iconType: (0, I.getMentionIconType)(t),
        children: A
      })
    }
  })
}