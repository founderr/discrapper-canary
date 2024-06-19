n.d(t, {
  Z: function() {
    return C
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(475179),
  r = n(287734),
  o = n(933557),
  c = n(124072),
  u = n(703656),
  d = n(131704),
  E = n(592125),
  _ = n(430824),
  I = n(699516),
  T = n(594174),
  N = n(934415),
  m = n(900849),
  h = n(981631);

function C(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: C,
    className: S,
    openChatWithoutConnecting: A
  } = e, p = (0, i.e7)([T.default, I.Z], () => null == t ? "" : (0, o.F6)(t, T.default, I.Z), [t]);
  return (0, s.jsx)(l.Tooltip, {
    text: p,
    position: "top",
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: o
      } = e;
      return (0, s.jsx)(c.Z, {
        role: "link",
        className: S,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != C && C(), (0, l.closeAllModals)(), ! function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let s = _.Z.getGuild(e);
            if ((null == s ? void 0 : s.joinedAt) == null) {
              m.Ub(e, {}, {
                channelId: t
              });
              return
            }
            let i = E.Z.getChannel(t);
            if (null != i && (0, d.bw)(i.type)) {
              if (n) {
                a.Z.updateChatOpen(i.id, !0), (0, u.uL)(h.Z5c.CHANNEL(e, t));
                return
              }
              r.default.selectVoiceChannel(i.id);
              return
            }(0, u.uL)(h.Z5c.CHANNEL(e, t))
          }(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, A))
        },
        onMouseEnter: i,
        onMouseLeave: o,
        iconType: (0, N.wl)(t),
        children: p
      })
    }
  })
}