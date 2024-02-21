"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("736964"),
  i = n("390790"),
  r = n("401642"),
  o = n("36694"),
  u = n("945330"),
  d = n("599110"),
  c = n("371449"),
  f = n("224978"),
  E = n("559541"),
  h = n("49111"),
  _ = n("782340"),
  C = n("708046");

function I(e) {
  let {
    user: t,
    nickname: n,
    status: I,
    isFocused: S
  } = e, m = s.useContext(d.AnalyticsContext), p = e => {
    null == e || e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: void 0,
      friendToken: void 0,
      fromFriendSuggestion: !0
    })
  }, T = e => {
    null == e || e.stopPropagation(), i.default.ignore(t.id)
  }, g = I === h.StatusTypes.OFFLINE ? h.StatusTypes.UNKNOWN : I;
  return (0, a.jsx)(f.default, {
    isFocused: S,
    user: t,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      analyticsLocation: m.location
    }),
    children: e => {
      let s = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.default, {
          icon: o.default,
          actionType: c.default.ActionTypes.ACCEPT,
          tooltip: _.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: p,
          shouldHighlight: e
        }), (0, a.jsx)(c.default, {
          icon: u.default,
          actionType: c.default.ActionTypes.DENY,
          tooltip: _.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: T,
          shouldHighlight: e
        })]
      });
      return (0, a.jsxs)("div", {
        className: C.listItemContents,
        children: [(0, a.jsx)(E.default, {
          user: t,
          hovered: e,
          status: g,
          subText: n,
          className: C.userInfo
        }), (0, a.jsx)("div", {
          className: C.actions,
          children: s
        })]
      })
    }
  })
}