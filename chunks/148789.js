"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("481060"),
  i = n("194359"),
  r = n("689938"),
  o = n("533342");

function u(e) {
  let {
    userId: t
  } = e, n = l.useCallback(e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t)
  }, [t]), u = l.useCallback(e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t
    })
  }, [t]);
  return (0, s.jsxs)("div", {
    className: o.friendRequestContainer,
    children: [(0, s.jsx)(a.Button, {
      className: o.acceptButton,
      look: a.Button.Looks.FILLED,
      color: a.Button.Colors.GREEN,
      size: a.Button.Sizes.NONE,
      onClick: u,
      children: (0, s.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_ACCEPT
      })
    }), (0, s.jsx)(a.Button, {
      className: o.ignoreButton,
      look: a.Button.Looks.FILLED,
      color: a.Button.Colors.PRIMARY,
      size: a.Button.Sizes.NONE,
      onClick: n,
      children: (0, s.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_IGNORE
      })
    })]
  })
}