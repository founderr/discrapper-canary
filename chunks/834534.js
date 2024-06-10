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
  f = l("648067"),
  S = l("588822"),
  E = l("900927"),
  I = l("678738"),
  m = l("652853"),
  _ = l("335191"),
  v = l("351707"),
  p = l("228168"),
  T = l("689938"),
  g = l("363175");

function x(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: i,
    autoFocusNote: x,
    className: A
  } = e, {
    theme: N
  } = (0, m.useUserProfileThemeContext)(), {
    trackUserProfileAction: C
  } = (0, c.useUserProfileAnalyticsContext)(), U = null == i ? void 0 : i.guildId, R = (0, n.useStateFromStores)([d.default], () => null != U ? d.default.getGuild(U) : null), h = (0, n.useStateFromStores)([u.default], () => u.default.locale), P = (0, f.default)(t.id);
  return (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: a()(g.scroller, A),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsx)(S.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != R && (0, s.jsx)(v.default, {
      user: t,
      currentUser: l,
      guild: R
    }), (0, s.jsx)(I.default, {
      title: T.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(E.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: p.USER_PROFILE_TOOLTIP_DELAY
      })
    }), P.length > 0 && (0, s.jsx)(I.default, {
      title: T.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(_.ConnectedUserAccounts, {
        connectedAccounts: P,
        className: g.connections,
        userId: t.id,
        theme: N,
        locale: h
      })
    }), (0, s.jsx)(I.default, {
      title: T.default.Messages.NOTE,
      children: (0, s.jsx)(r.default, {
        userId: t.id,
        className: g.note,
        autoFocus: x,
        onUpdate: () => C({
          action: "SET_NOTE"
        })
      })
    })]
  })
}