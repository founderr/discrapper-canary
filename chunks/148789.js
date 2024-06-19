n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(194359),
  r = n(689938),
  o = n(749967);

function c(e) {
  let {
    userId: t
  } = e, n = i.useCallback(e => {
    e.stopPropagation(), a.Z.cancelFriendRequest(t)
  }, [t]), c = i.useCallback(e => {
    e.stopPropagation(), a.Z.addRelationship({
      userId: t
    })
  }, [t]);
  return (0, s.jsxs)("div", {
    className: o.friendRequestContainer,
    children: [(0, s.jsx)(l.Button, {
      className: o.acceptButton,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.GREEN,
      size: l.Button.Sizes.NONE,
      onClick: c,
      children: (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.Z.Messages.FRIEND_REQUEST_ACCEPT
      })
    }), (0, s.jsx)(l.Button, {
      className: o.ignoreButton,
      look: l.Button.Looks.FILLED,
      color: l.Button.Colors.PRIMARY,
      size: l.Button.Sizes.NONE,
      onClick: n,
      children: (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.Z.Messages.FRIEND_REQUEST_IGNORE
      })
    })]
  })
}