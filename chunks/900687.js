i.d(n, {
  Z: function() {
    return I
  }
});
var l = i(735250);
i(470079);
var s = i(481060),
  t = i(239091),
  o = i(785717),
  a = i(705556),
  r = i(30556),
  d = i(225714),
  u = i(228168),
  c = i(26912);

function I(e) {
  let {
    user: n,
    isCurrentUser: I,
    guildId: E,
    friendToken: f,
    canDM: Z,
    relationshipType: _,
    originalFriendingEnabled: S = !1,
    improvedFriendingEnabled: m = !1,
    viewProfileItem: v,
    onClose: N
  } = e, {
    trackUserProfileAction: x
  } = (0, o.KZ)();

  function h(e) {
    x({
      action: "PRESS_OPTIONS"
    }), (0, t.jW)(e, async () => {
      let {
        default: e
      } = await i.e("29136").then(i.bind(i, 193646));
      return i => (0, l.jsx)(e, {
        ...i,
        originalFriendingEnabled: S,
        relationshipType: _,
        viewProfileItem: v,
        user: n,
        isCurrentUser: I,
        guildId: E,
        trackUserProfileAction: x,
        onClose: N
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: c.buttons,
    children: [(S || m) && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.Z, {
        user: n,
        isCurrentUser: I,
        relationshipType: _,
        originalFriendingEnabled: S,
        improvedFriendingEnabled: m,
        friendToken: f,
        onClose: N
      }), I && (0, l.jsx)(a.Z, {
        user: n,
        guildId: E,
        profileType: u.y0.FULL_SIZE,
        onClose: N
      }), !n.isNonUserBot() && S ? (0, l.jsx)(s.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: h,
        children: (0, l.jsx)(s.MoreVerticalIcon, {
          size: "md",
          color: "currentColor",
          className: c.additionalActionsIcon
        })
      }) : null]
    }), !S && !m && (Z ? (0, l.jsx)(r.Z, {
      user: n,
      onClose: N
    }) : (0, l.jsx)(a.Z, {
      user: n,
      guildId: E,
      profileType: u.y0.FULL_SIZE,
      onClose: N
    }))]
  })
}