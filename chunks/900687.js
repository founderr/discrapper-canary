"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
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
  S = l("225714"),
  E = l("228168"),
  I = l("981631"),
  m = l("590106");

function _(e) {
  let {
    user: t,
    isCurrentUser: _,
    guildId: p,
    friendToken: v,
    canDM: T,
    relationshipType: g,
    originalFriendingEnabled: x = !1,
    improvedFriendingEnabled: A = !1,
    trackUserProfileAction: C,
    viewProfileItem: N,
    onClose: U
  } = e, {
    newestAnalyticsLocation: R
  } = (0, r.default)();

  function h(e) {
    C({
      action: "SEND_MESSAGE"
    }), a.default.openPrivateChannel(t.id, !1, !1, e), U()
  }

  function P(e) {
    C({
      action: "PRESS_OPTIONS"
    }), (0, n.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: x,
        relationshipType: g,
        onRemoveFriend: M,
        onBlock: F,
        onReport: O,
        onCopyId: () => C({
          action: "COPY_USER_ID"
        }),
        onMessage: () => h("User Profile Modal Header Buttons - Context Menu"),
        viewProfileItem: N,
        user: t,
        isCurrentUser: _,
        guildId: p
      })
    })
  }

  function M() {
    C({
      action: "REMOVE_FRIEND"
    }), o.default.removeFriend(t.id, {
      location: R
    })
  }

  function y() {
    try {
      C({
        action: "SEND_FRIEND_REQUEST"
      }), o.default.addRelationship({
        userId: t.id,
        context: {
          location: R
        },
        type: void 0,
        friendToken: v
      })
    } catch (e) {
      U()
    }
  }

  function j() {
    C({
      action: "IGNORE_FRIEND_REQUEST"
    }), o.default.cancelFriendRequest(t.id, {
      location: R
    })
  }

  function F() {
    try {
      C({
        action: "BLOCK"
      }), o.default.addRelationship({
        userId: t.id,
        context: {
          location: R
        },
        type: I.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      U()
    }
  }

  function O() {
    C({
      action: "REPORT"
    }), (0, u.showReportModalForUser)(t, "@me" === p ? void 0 : p)
  }
  return (0, s.jsxs)("div", {
    className: m.buttons,
    children: [(x || A) && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(S.default, {
        user: t,
        isCurrentUser: _,
        relationshipType: g,
        onAddFriend: y,
        onIgnoreFriend: j,
        onSendMessage: () => h("User Profile Modal Header Buttons - Send Message Button"),
        originalFriendingEnabled: x,
        improvedFriendingEnabled: A
      }), _ && (0, s.jsx)(c.default, {
        user: t,
        guildId: p,
        profileType: E.UserProfileTypes.FULL_SIZE,
        onClose: U
      }), !t.isNonUserBot() && x ? (0, s.jsx)(i.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: P,
        children: (0, s.jsx)(d.default, {
          className: m.additionalActionsIcon
        })
      }) : null]
    }), !x && !A && (T ? (0, s.jsx)(f.default, {
      user: t,
      onClose: U
    }) : (0, s.jsx)(c.default, {
      user: t,
      guildId: p,
      profileType: E.UserProfileTypes.FULL_SIZE,
      onClose: U
    }))]
  })
}