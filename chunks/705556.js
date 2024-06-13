"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("481060"),
  a = n("300284"),
  o = n("314897"),
  l = n("430824"),
  u = n("185403"),
  d = n("877485"),
  _ = n("785717"),
  c = n("841040"),
  E = n("993409"),
  I = n("228168"),
  T = n("689938");

function f(e) {
  let {
    user: t,
    guildId: n,
    profileType: f,
    onClose: S
  } = e, h = (0, r.useStateFromStores)([o.default], () => o.default.getId() === t.id), A = (0, r.useStateFromStores)([l.default], () => null != n ? l.default.getGuild(n) : null), {
    originalFriendingEnabled: m
  } = (0, d.useSimplifiedProfileFriendingExperiment)({
    location: "UserProfileEditMenuButton"
  }), {
    trackUserProfileAction: N
  } = (0, _.useUserProfileAnalyticsContext)(), p = (0, a.default)(), O = m && f === I.UserProfileTypes.FULL_SIZE ? void 0 : u.default;
  return h ? null == A ? (0, i.jsx)(E.default, {
    variant: "text",
    icon: O,
    text: T.default.Messages.EDIT_PROFILE,
    autoFocus: !0,
    fullWidth: !0,
    onClick: () => {
      N({
        action: "EDIT_PROFILE"
      }), null == S || S(), p()
    }
  }) : (0, i.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(c.default, {
        guild: A,
        onClose: () => {
          t(), null == S || S()
        }
      })
    },
    children: e => (0, i.jsx)(E.default, {
      variant: "text",
      icon: O,
      text: T.default.Messages.EDIT_PROFILE,
      autoFocus: !0,
      fullWidth: !0,
      ...e
    })
  }) : null
}