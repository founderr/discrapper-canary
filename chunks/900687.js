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
    guildId: I,
    friendToken: E,
    canDM: m,
    relationshipType: v,
    originalFriendingEnabled: _ = !1,
    improvedFriendingEnabled: p = !1,
    viewProfileItem: x,
    onClose: T
  } = e, {
    trackUserProfileAction: g
  } = (0, o.useUserProfileAnalyticsContext)();

  function N(e) {
    g({
      action: "PRESS_OPTIONS"
    }), (0, a.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: _,
        relationshipType: v,
        viewProfileItem: x,
        user: t,
        isCurrentUser: S,
        guildId: I,
        trackUserProfileAction: g,
        onClose: T
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: f.buttons,
    children: [(_ || p) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.default, {
        user: t,
        isCurrentUser: S,
        relationshipType: v,
        originalFriendingEnabled: _,
        improvedFriendingEnabled: p,
        friendToken: E,
        onClose: T
      }), S && (0, s.jsx)(r.default, {
        user: t,
        guildId: I,
        profileType: c.UserProfileTypes.FULL_SIZE,
        onClose: T
      }), !t.isNonUserBot() && _ ? (0, s.jsx)(i.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: N,
        children: (0, s.jsx)(n.default, {
          className: f.additionalActionsIcon
        })
      }) : null]
    }), !_ && !p && (m ? (0, s.jsx)(u.default, {
      user: t,
      onClose: T
    }) : (0, s.jsx)(r.default, {
      user: t,
      guildId: I,
      profileType: c.UserProfileTypes.FULL_SIZE,
      onClose: T
    }))]
  })
}