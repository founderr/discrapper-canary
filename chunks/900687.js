s.d(i, {
  Z: function() {
    return I
  }
});
var n = s(735250);
s(470079);
var l = s(481060),
  t = s(239091),
  o = s(785717),
  r = s(705556),
  a = s(30556),
  d = s(225714),
  c = s(228168),
  u = s(26912);

function I(e) {
  let {
    user: i,
    isCurrentUser: I,
    guildId: E,
    friendToken: Z,
    canDM: f,
    relationshipType: _,
    originalFriendingEnabled: S = !1,
    improvedFriendingEnabled: v = !1,
    viewProfileItem: m,
    onClose: x
  } = e, {
    trackUserProfileAction: h
  } = (0, o.KZ)();

  function N(e) {
    h({
      action: "PRESS_OPTIONS"
    }), (0, t.jW)(e, async () => {
      let {
        default: e
      } = await s.e("29136").then(s.bind(s, 193646));
      return s => (0, n.jsx)(e, {
        ...s,
        originalFriendingEnabled: S,
        relationshipType: _,
        viewProfileItem: m,
        user: i,
        isCurrentUser: I,
        guildId: E,
        trackUserProfileAction: h,
        onClose: x
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: u.buttons,
    children: [(S || v) && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.Z, {
        user: i,
        isCurrentUser: I,
        relationshipType: _,
        originalFriendingEnabled: S,
        improvedFriendingEnabled: v,
        friendToken: Z,
        onClose: x
      }), I && (0, n.jsx)(r.Z, {
        user: i,
        guildId: E,
        profileType: c.y0.FULL_SIZE,
        onClose: x
      }), !i.isNonUserBot() && S ? (0, n.jsx)(l.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: N,
        children: (0, n.jsx)(l.MoreVerticalIcon, {
          size: "md",
          color: "currentColor",
          className: u.additionalActionsIcon
        })
      }) : null]
    }), !S && !v && (f ? (0, n.jsx)(a.Z, {
      user: i,
      onClose: x
    }) : (0, n.jsx)(r.Z, {
      user: i,
      guildId: E,
      profileType: c.y0.FULL_SIZE,
      onClose: x
    }))]
  })
}