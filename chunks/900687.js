i.d(n, {
  Z: function() {
    return I
  }
});
var t = i(735250);
i(470079);
var s = i(481060),
  o = i(239091),
  l = i(785717),
  a = i(705556),
  r = i(30556),
  d = i(225714),
  c = i(228168),
  u = i(26912);

function I(e) {
  let {
    user: n,
    isCurrentUser: I,
    guildId: f,
    friendToken: E,
    canDM: _,
    relationshipType: S,
    originalFriendingEnabled: Z = !1,
    improvedFriendingEnabled: m = !1,
    viewProfileItem: v,
    onClose: x
  } = e, {
    trackUserProfileAction: h
  } = (0, l.KZ)();

  function g(e) {
    h({
      action: "PRESS_OPTIONS"
    }), (0, o.jW)(e, async () => {
      let {
        default: e
      } = await i.e("29136").then(i.bind(i, 193646));
      return i => (0, t.jsx)(e, {
        ...i,
        originalFriendingEnabled: Z,
        relationshipType: S,
        viewProfileItem: v,
        user: n,
        isCurrentUser: I,
        guildId: f,
        trackUserProfileAction: h,
        onClose: x
      })
    })
  }
  return (0, t.jsxs)("div", {
    className: u.buttons,
    children: [(Z || m) && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(d.Z, {
        user: n,
        isCurrentUser: I,
        relationshipType: S,
        originalFriendingEnabled: Z,
        improvedFriendingEnabled: m,
        friendToken: E,
        onClose: x
      }), I && (0, t.jsx)(a.Z, {
        user: n,
        guildId: f,
        profileType: c.y0.FULL_SIZE,
        onClose: x
      }), !n.isNonUserBot() && Z ? (0, t.jsx)(s.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: g,
        children: (0, t.jsx)(s.MoreVerticalIcon, {
          size: "md",
          color: "currentColor",
          className: u.additionalActionsIcon
        })
      }) : null]
    }), !Z && !m && (_ ? (0, t.jsx)(r.Z, {
      user: n,
      onClose: x
    }) : (0, t.jsx)(a.Z, {
      user: n,
      guildId: f,
      profileType: c.y0.FULL_SIZE,
      onClose: x
    }))]
  })
}