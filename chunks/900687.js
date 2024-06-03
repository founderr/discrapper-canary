"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var s = l("735250");
l("470079");
var a = l("481060"),
  i = l("493683"),
  n = l("239091"),
  r = l("194359"),
  o = l("906732"),
  u = l("726521"),
  d = l("621113"),
  c = l("705556"),
  f = l("30556"),
  S = l("496206"),
  E = l("981631"),
  I = l("590106");

function m(e) {
  let {
    user: t,
    isCurrentUser: m,
    guildId: _,
    friendToken: v,
    canDM: T,
    relationshipType: g,
    originalFriendingEnabled: A = !1,
    trackUserProfileAction: p,
    onClose: U
  } = e, {
    newestAnalyticsLocation: x
  } = (0, o.default)();

  function C(e) {
    p({
      action: "SEND_MESSAGE"
    }), i.default.openPrivateChannel(t.id, !1, !1, e), U()
  }

  function N(e) {
    p({
      action: "PRESS_OPTIONS"
    }), (0, n.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: A,
        relationshipType: g,
        onRemoveFriend: h,
        onBlock: M,
        onReport: j,
        onCopyId: () => p({
          action: "COPY_USER_ID"
        }),
        onMessage: () => C("User Profile Modal Header Buttons - Context Menu"),
        user: t,
        guildId: _
      })
    })
  }

  function h() {
    p({
      action: "REMOVE_FRIEND"
    }), r.default.removeFriend(t.id, {
      location: x
    })
  }

  function R() {
    try {
      p({
        action: "SEND_FRIEND_REQUEST"
      }), r.default.addRelationship({
        userId: t.id,
        context: {
          location: x
        },
        type: void 0,
        friendToken: v
      })
    } catch (e) {
      U()
    }
  }

  function P() {
    p({
      action: "IGNORE_FRIEND_REQUEST"
    }), r.default.cancelFriendRequest(t.id, {
      location: x
    })
  }

  function M() {
    try {
      p({
        action: "BLOCK"
      }), r.default.addRelationship({
        userId: t.id,
        context: {
          location: x
        },
        type: E.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      U()
    }
  }

  function j() {
    p({
      action: "REPORT"
    }), (0, u.showReportModalForUser)(t, "@me" === _ ? void 0 : _)
  }
  return (0, s.jsx)("div", {
    className: I.buttons,
    children: A ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(S.default, {
        user: t,
        isCurrentUser: m,
        relationshipType: g,
        onAddFriend: R,
        onIgnoreFriend: P,
        onSendMessage: () => C("User Profile Modal Header Buttons - Send Message Button")
      }), m && (0, s.jsx)(c.default, {
        user: t,
        guildId: _,
        onClose: U
      }), m || t.isNonUserBot() ? null : (0, s.jsx)(a.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: N,
        children: (0, s.jsx)(d.default, {
          className: I.additionalActionsIcon
        })
      })]
    }) : T ? (0, s.jsx)(f.default, {
      user: t,
      onClose: U
    }) : (0, s.jsx)(c.default, {
      user: t,
      guildId: _,
      onClose: U
    })
  })
}