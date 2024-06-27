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
    relationshipType: Z,
    originalFriendingEnabled: m = !1,
    improvedFriendingEnabled: S = !1,
    persistentCallCtaEnabled: v = !1,
    viewProfileItem: x,
    onClose: h
  } = e, {
    trackUserProfileAction: g
  } = (0, l.KZ)();

  function N(e) {
    g({
      action: "PRESS_OPTIONS"
    }), (0, o.jW)(e, async () => {
      let {
        default: e
      } = await i.e("29136").then(i.bind(i, 193646));
      return i => (0, t.jsx)(e, {
        ...i,
        originalFriendingEnabled: m,
        relationshipType: Z,
        viewProfileItem: x,
        user: n,
        isCurrentUser: I,
        guildId: f,
        trackUserProfileAction: g,
        onClose: h
      })
    })
  }
  return (0, t.jsxs)("div", {
    className: u.buttons,
    children: [(m || S) && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(d.Z, {
        user: n,
        isCurrentUser: I,
        relationshipType: Z,
        originalFriendingEnabled: m,
        improvedFriendingEnabled: S,
        persistentCallCtaEnabled: v,
        friendToken: E,
        onClose: h
      }), I && (0, t.jsx)(a.Z, {
        user: n,
        guildId: f,
        profileType: c.y0.FULL_SIZE,
        onClose: h
      }), !n.isNonUserBot() && m ? (0, t.jsx)(s.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: N,
        children: (0, t.jsx)(s.MoreVerticalIcon, {
          size: "md",
          color: "currentColor",
          className: u.additionalActionsIcon
        })
      }) : null]
    }), !m && !S && (_ ? (0, t.jsx)(r.Z, {
      user: n,
      onClose: h
    }) : (0, t.jsx)(a.Z, {
      user: n,
      guildId: f,
      profileType: c.y0.FULL_SIZE,
      onClose: h
    }))]
  })
}