"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(906732),
  a = n(189432),
  l = n(189357),
  u = n(434404),
  _ = n(314897),
  c = n(944486),
  d = n(785717),
  E = n(993409),
  I = n(176505),
  T = n(50493),
  h = n(689938);

function S(e) {
  let {
    user: t,
    guildId: n,
    channelId: S,
    onClose: f
  } = e, {
    trackUserProfileAction: N
  } = (0, d.KZ)(), {
    newestAnalyticsLocation: A
  } = (0, o.ZP)(), m = (0, r.e7)([_.default], () => _.default.getId() === (null == t ? void 0 : t.id)), O = (0, l.ms)(null != n ? n : null, !0), R = (0, r.e7)([c.Z], () => null != S ? S : c.Z.getChannelId(n, !0), [S, n]);
  return null == n || !O || m ? null : (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.ModerationIcon,
    text: h.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
    onClick: () => {
      u.Z.close(), N({
        action: "PRESS_MOD_VIEW"
      }), (0, a.r)(n, t.id, null != R ? R : I.oC.MEMBER_SAFETY, {
        modViewPanel: T.k.INFO,
        sourceLocation: A
      }), null == f || f()
    }
  })
}