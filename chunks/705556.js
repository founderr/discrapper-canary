"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(300284),
  a = n(314897),
  l = n(430824),
  u = n(877485),
  _ = n(785717),
  c = n(841040),
  d = n(993409),
  E = n(228168),
  I = n(689938);

function T(e) {
  let {
    user: t,
    guildId: n,
    profileType: T,
    onClose: h
  } = e, f = (0, r.e7)([a.default], () => a.default.getId() === t.id), S = (0, r.e7)([l.Z], () => null != n ? l.Z.getGuild(n) : null), {
    originalFriendingEnabled: N
  } = (0, u.V)({
    location: "UserProfileEditMenuButton"
  }), {
    trackUserProfileAction: A
  } = (0, _.KZ)(), m = (0, o.Z)(), O = N && T === E.y0.FULL_SIZE ? void 0 : s.PencilIcon;
  return f ? null == S ? (0, i.jsx)(d.Z, {
    variant: "text",
    icon: O,
    text: I.Z.Messages.EDIT_PROFILE,
    autoFocus: !0,
    fullWidth: !0,
    onClick: () => {
      A({
        action: "EDIT_PROFILE"
      }), null == h || h(), m()
    }
  }) : (0, i.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(c.Z, {
        guild: S,
        onClose: () => {
          t(), null == h || h()
        }
      })
    },
    children: e => (0, i.jsx)(d.Z, {
      variant: "text",
      icon: O,
      text: I.Z.Messages.EDIT_PROFILE,
      autoFocus: !0,
      fullWidth: !0,
      ...e
    })
  }) : null
}