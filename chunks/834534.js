"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var s = l("735250");
l("470079");
var i = l("120356"),
  a = l.n(i),
  n = l("442837"),
  o = l("481060"),
  r = l("666520"),
  u = l("706454"),
  d = l("430824"),
  c = l("914010"),
  f = l("785717"),
  S = l("532776"),
  I = l("648067"),
  E = l("588822"),
  m = l("900927"),
  v = l("678738"),
  _ = l("652853"),
  p = l("335191"),
  x = l("351707"),
  T = l("228168"),
  g = l("689938"),
  N = l("363175");

function A(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: i,
    subsection: A,
    className: C,
    onClose: U
  } = e, {
    theme: P
  } = (0, _.useUserProfileThemeContext)(), {
    trackUserProfileAction: h
  } = (0, f.useUserProfileAnalyticsContext)(), R = null == i ? void 0 : i.guildId, M = (0, n.useStateFromStores)([d.default], () => null != R ? d.default.getGuild(R) : null), j = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId()), y = (0, n.useStateFromStores)([u.default], () => u.default.locale), O = (0, I.default)(t.id), L = (0, S.default)(t.id);
  return (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: a()(N.scroller, C),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsx)(E.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != M && (0, s.jsx)(x.default, {
      user: t,
      currentUser: l,
      guild: M,
      scrollIntoView: A === T.UserProfileSubsections.ROLES
    }), (0, s.jsx)(v.default, {
      title: g.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(m.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: T.USER_PROFILE_TOOLTIP_DELAY
      })
    }), O.length > 0 && (0, s.jsx)(v.default, {
      title: g.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(p.ConnectedUserAccounts, {
        connectedAccounts: O,
        className: N.connections,
        userId: t.id,
        theme: P,
        locale: y
      })
    }), L.length > 0 && (0, s.jsx)(v.default, {
      title: g.default.Messages.APPS,
      children: L.map(e => (0, s.jsx)(p.ConnectedApplicationUserRoleAccount, {
        className: N.appsConnections,
        applicationRoleConnection: e,
        locale: y,
        onApplicationClicked: () => {
          h({
            action: "PRESS_APP_CONNECTION"
          }), U()
        },
        selectedGuildId: null != j ? j : void 0
      }, e.application.id))
    }), (0, s.jsx)(v.default, {
      title: g.default.Messages.NOTE,
      scrollIntoView: A === T.UserProfileSubsections.NOTE,
      children: (0, s.jsx)(r.default, {
        userId: t.id,
        className: N.note,
        autoFocus: A === T.UserProfileSubsections.NOTE,
        onUpdate: () => h({
          action: "SET_NOTE"
        })
      })
    })]
  })
}