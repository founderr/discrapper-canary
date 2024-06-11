"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
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
  v = l("335191"),
  p = l("351707"),
  T = l("228168"),
  g = l("689938"),
  A = l("363175");

function x(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: i,
    autoFocusNote: x,
    className: N
  } = e, {
    theme: C
  } = (0, _.useUserProfileThemeContext)(), {
    trackUserProfileAction: U
  } = (0, c.useUserProfileAnalyticsContext)(), h = null == i ? void 0 : i.guildId, P = (0, n.useStateFromStores)([d.default], () => null != h ? d.default.getGuild(h) : null), R = (0, n.useStateFromStores)([u.default], () => u.default.locale), M = (0, S.default)(t.id), j = (0, f.default)(t.id);
  return (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: a()(A.scroller, N),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsx)(E.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != P && (0, s.jsx)(p.default, {
      user: t,
      currentUser: l,
      guild: P
    }), (0, s.jsx)(m.default, {
      title: g.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(I.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: T.USER_PROFILE_TOOLTIP_DELAY
      })
    }), M.length > 0 && (0, s.jsx)(m.default, {
      title: g.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(v.ConnectedUserAccounts, {
        connectedAccounts: M,
        className: A.connections,
        userId: t.id,
        theme: C,
        locale: R
      })
    }), j.length > 0 && (0, s.jsx)(m.default, {
      title: g.default.Messages.APPS,
      children: j.map(e => (0, s.jsx)(v.ConnectedApplicationUserRoleAccount, {
        applicationRoleConnection: e,
        locale: R
      }, e.application.id))
    }), (0, s.jsx)(m.default, {
      title: g.default.Messages.NOTE,
      children: (0, s.jsx)(r.default, {
        userId: t.id,
        className: A.note,
        autoFocus: x,
        onUpdate: () => U({
          action: "SET_NOTE"
        })
      })
    })]
  })
}