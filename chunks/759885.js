"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("446674"),
  l = n("77078"),
  s = n("255397"),
  u = n("987317"),
  o = n("679653"),
  a = n("393414"),
  d = n("233069"),
  c = n("42203"),
  f = n("305961"),
  S = n("27618"),
  E = n("697218"),
  h = n("666897"),
  g = n("404008"),
  _ = n("794818"),
  p = n("49111");

function C(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: C,
    className: I,
    openChatWithoutConnecting: m
  } = e, T = (0, r.useStateFromStores)([E.default, S.default], () => null == t ? "" : (0, o.computeChannelName)(t, E.default, S.default), [t]);
  return (0, i.jsx)(l.Tooltip, {
    text: T,
    position: "top",
    children: e => {
      let {
        onMouseEnter: r,
        onMouseLeave: o
      } = e;
      return (0, i.jsx)(h.default, {
        role: "link",
        className: I,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != C && C(), (0, l.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let i = f.default.getGuild(e);
            if ((null == i ? void 0 : i.joinedAt) == null) {
              _.startLurking(e, {}, {
                channelId: t
              });
              return
            }
            let r = c.default.getChannel(t);
            if (null != r && (0, d.isGuildVocalChannelType)(r.type)) {
              if (n) {
                s.default.updateChatOpen(r.id, !0), (0, a.transitionTo)(p.Routes.CHANNEL(e, t));
                return
              }
              u.default.selectVoiceChannel(r.id);
              return
            }(0, a.transitionTo)(p.Routes.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, m))
        },
        onMouseEnter: r,
        onMouseLeave: o,
        iconType: (0, g.getMentionIconType)(t),
        children: T
      })
    }
  })
}