"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250),
  r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(493683),
  u = n(447543),
  _ = n(904245),
  c = n(314897),
  d = n(592125),
  E = n(496675),
  I = n(979651),
  T = n(785717),
  h = n(993409),
  f = n(981631),
  S = n(689938),
  A = n(717633),
  N = n(682583);

function m(e) {
  let {
    user: t,
    onClose: n
  } = e, {
    trackUserProfileAction: r
  } = (0, T.KZ)(), m = (0, o.e7)([c.default], () => c.default.getId()), O = (0, o.e7)([d.Z, I.Z], () => {
    var e;
    return d.Z.getChannel(null === (e = I.Z.getVoiceStateForUser(m)) || void 0 === e ? void 0 : e.channelId)
  }), R = null == O ? void 0 : O.isPrivate(), p = (0, o.e7)([E.Z], () => E.Z.can(f.Plq.CREATE_INSTANT_INVITE, O));
  if (null == O || R || !p) return null;
  let g = async () => {
    r({
      action: "PRESS_INVITE_TO_CALL"
    }), await u.Z.createInvite(null == O ? void 0 : O.id, {
      max_uses: 1,
      unique: !0
    }, "useActiveInviteToCallButton").then(e => (function(e, t) {
      l.Z.ensurePrivateChannel(e).then(e => {
        null != d.Z.getChannel(e) && _.Z.sendInvite(e, t, "useActiveInviteToCallButton", null)
      })
    })(t.id, e.code)), null == n || n()
  };
  return (0, i.jsx)(h.Z, {
    fullWidth: !0,
    variant: "text",
    color: s()(a.Button.Colors.BRAND, A.color),
    onClick: g,
    icon: a.GroupPlusIcon,
    text: S.Z.Messages.USER_PROFILE_INVITE_TO_CALL,
    tooltipContainerClassName: N.ctaTooltipContainer
  })
}