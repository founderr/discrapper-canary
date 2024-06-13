"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var s = l("735250");
l("470079");
var i = l("481060"),
  a = l("239091"),
  n = l("621113"),
  o = l("785717"),
  r = l("705556"),
  u = l("30556"),
  d = l("225714"),
  c = l("228168"),
  f = l("590106");

function S(e) {
  let {
    user: t,
    isCurrentUser: S,
    guildId: E,
    friendToken: I,
    canDM: m,
    relationshipType: _,
    originalFriendingEnabled: v = !1,
    improvedFriendingEnabled: p = !1,
    viewProfileItem: T,
    onClose: g
  } = e, {
    trackUserProfileAction: A
  } = (0, o.useUserProfileAnalyticsContext)();

  function C(e) {
    A({
      action: "PRESS_OPTIONS"
    }), (0, a.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: v,
        relationshipType: _,
        viewProfileItem: T,
        user: t,
        isCurrentUser: S,
        guildId: E,
        trackUserProfileAction: A,
        onClose: g
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: f.buttons,
    children: [(v || p) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.default, {
        user: t,
        isCurrentUser: S,
        relationshipType: _,
        originalFriendingEnabled: v,
        improvedFriendingEnabled: p,
        friendToken: I,
        onClose: g
      }), S && (0, s.jsx)(r.default, {
        user: t,
        guildId: E,
        profileType: c.UserProfileTypes.FULL_SIZE,
        onClose: g
      }), !t.isNonUserBot() && v ? (0, s.jsx)(i.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: C,
        children: (0, s.jsx)(n.default, {
          className: f.additionalActionsIcon
        })
      }) : null]
    }), !v && !p && (m ? (0, s.jsx)(u.default, {
      user: t,
      onClose: g
    }) : (0, s.jsx)(r.default, {
      user: t,
      guildId: E,
      profileType: c.UserProfileTypes.FULL_SIZE,
      onClose: g
    }))]
  })
}