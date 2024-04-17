"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
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
  return (0, a.jsxs)("div", {
    className: o.friendRequestContainer,
    children: [(0, a.jsx)(s.Button, {
      className: o.acceptButton,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.GREEN,
      size: s.Button.Sizes.NONE,
      onClick: u,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_ACCEPT
      })
    }), (0, a.jsx)(s.Button, {
      className: o.ignoreButton,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.PRIMARY,
      size: s.Button.Sizes.NONE,
      onClick: n,
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: r.default.Messages.FRIEND_REQUEST_IGNORE
      })
    })]
  })
}