"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var s = l("735250");
l("470079");
var i = l("481060"),
  a = l("493683"),
  n = l("239091"),
  o = l("194359"),
  r = l("906732"),
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
    canDM: p,
    relationshipType: T,
    originalFriendingEnabled: g = !1,
    improvedFriendingEnabled: x = !1,
    trackUserProfileAction: A,
    viewProfileItem: C,
    onClose: N
  } = e, {
    newestAnalyticsLocation: U
  } = (0, r.default)();

  function R(e) {
    A({
      action: "SEND_MESSAGE"
    }), a.default.openPrivateChannel(t.id, !1, !1, e), N()
  }

  function h(e) {
    A({
      action: "PRESS_OPTIONS"
    }), (0, n.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: g,
        relationshipType: T,
        onRemoveFriend: P,
        onBlock: y,
        onReport: F,
        onCopyId: () => A({
          action: "COPY_USER_ID"
        }),
        onMessage: () => R("User Profile Modal Header Buttons - Context Menu"),
        viewProfileItem: C,
        user: t,
        isCurrentUser: m,
        guildId: _
      })
    })
  }

  function P() {
    A({
      action: "REMOVE_FRIEND"
    }), o.default.removeFriend(t.id, {
      location: U
    })
  }

  function M() {
    try {
      A({
        action: "SEND_FRIEND_REQUEST"
      }), o.default.addRelationship({
        userId: t.id,
        context: {
          location: U
        },
        type: void 0,
        friendToken: v
      })
    } catch (e) {
      N()
    }
  }

  function j() {
    A({
      action: "IGNORE_FRIEND_REQUEST"
    }), o.default.cancelFriendRequest(t.id, {
      location: U
    })
  }

  function y() {
    try {
      A({
        action: "BLOCK"
      }), o.default.addRelationship({
        userId: t.id,
        context: {
          location: U
        },
        type: E.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      N()
    }
  }

  function F() {
    A({
      action: "REPORT"
    }), (0, u.showReportModalForUser)(t, "@me" === _ ? void 0 : _)
  }
  return (0, s.jsxs)("div", {
    className: I.buttons,
    children: [(g || x) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(S.default, {
        user: t,
        isCurrentUser: m,
        relationshipType: T,
        onAddFriend: M,
        onIgnoreFriend: j,
        onSendMessage: () => R("User Profile Modal Header Buttons - Send Message Button"),
        originalFriendingEnabled: g,
        improvedFriendingEnabled: x
      }), m && (0, s.jsx)(c.default, {
        user: t,
        guildId: _,
        onClose: N
      }), !t.isNonUserBot() && g ? (0, s.jsx)(i.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: h,
        children: (0, s.jsx)(d.default, {
          className: I.additionalActionsIcon
        })
      }) : null]
    }), !g && !x && (p ? (0, s.jsx)(f.default, {
      user: t,
      onClose: N
    }) : (0, s.jsx)(c.default, {
      user: t,
      guildId: _,
      onClose: N
    }))]
  })
}