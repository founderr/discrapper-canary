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
  c = l("785717"),
  f = l("532776"),
  S = l("648067"),
  E = l("588822"),
  I = l("900927"),
  m = l("678738"),
  _ = l("652853"),
  p = l("335191"),
  v = l("351707"),
  T = l("228168"),
  g = l("689938"),
  x = l("363175");

function A(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: i,
    autoFocusNote: A,
    className: C
  } = e, {
    theme: N
  } = (0, _.useUserProfileThemeContext)(), {
    trackUserProfileAction: U
  } = (0, c.useUserProfileAnalyticsContext)(), R = null == i ? void 0 : i.guildId, h = (0, n.useStateFromStores)([d.default], () => null != R ? d.default.getGuild(R) : null), P = (0, n.useStateFromStores)([u.default], () => u.default.locale), M = (0, S.default)(t.id), y = (0, f.default)(t.id);
  return (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: a()(x.scroller, C),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsx)(E.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != h && (0, s.jsx)(v.default, {
      user: t,
      currentUser: l,
      guild: h
    }), (0, s.jsx)(m.default, {
      title: g.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(I.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: T.USER_PROFILE_TOOLTIP_DELAY
      })
    }), M.length > 0 && (0, s.jsx)(m.default, {
      title: g.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(p.ConnectedUserAccounts, {
        connectedAccounts: M,
        className: x.connections,
        userId: t.id,
        theme: N,
        locale: P
      })
    }), y.length > 0 && (0, s.jsx)(m.default, {
      title: g.default.Messages.APPS,
      children: y.map(e => (0, s.jsx)(p.ConnectedApplicationUserRoleAccount, {
        applicationRoleConnection: e,
        locale: P
      }, e.application.id))
    }), (0, s.jsx)(m.default, {
      title: g.default.Messages.NOTE,
      children: (0, s.jsx)(r.default, {
        userId: t.id,
        className: x.note,
        autoFocus: A,
        onUpdate: () => U({
          action: "SET_NOTE"
        })
      })
    })]
  })
}