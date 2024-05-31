"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var l = s("735250");
s("470079");
var a = s("481060"),
  i = s("493683"),
  n = s("239091"),
  r = s("194359"),
  o = s("906732"),
  u = s("726521"),
  d = s("621113"),
  c = s("705556"),
  f = s("30556"),
  S = s("496206"),
  E = s("981631"),
  m = s("590106");

function I(e) {
  let {
    user: t,
    isCurrentUser: I,
    guildId: _,
    friendToken: v,
    canDM: g,
    relationshipType: T,
    originalFriendingEnabled: A = !1,
    trackUserProfileAction: x,
    onClose: U
  } = e, {
    newestAnalyticsLocation: p
  } = (0, o.default)();

  function N(e) {
    x({
      action: "SEND_MESSAGE"
    }), i.default.openPrivateChannel(t.id, !1, !1, e), U()
  }

  function C(e) {
    x({
      action: "PRESS_OPTIONS"
    }), (0, n.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await s.e("29136").then(s.bind(s, "193646"));
      return s => (0, l.jsx)(e, {
        ...s,
        originalFriendingEnabled: A,
        relationshipType: T,
        onRemoveFriend: h,
        onBlock: M,
        onReport: j,
        onCopyId: () => x({
          action: "COPY_USER_ID"
        }),
        onMessage: () => N("User Profile Modal Header Buttons - Context Menu"),
        user: t,
        guildId: _
      })
    })
  }

  function h() {
    x({
      action: "REMOVE_FRIEND"
    }), r.default.removeFriend(t.id, {
      location: p
    })
  }

  function R() {
    try {
      x({
        action: "SEND_FRIEND_REQUEST"
      }), r.default.addRelationship({
        userId: t.id,
        context: {
          location: p
        },
        type: void 0,
        friendToken: v
      })
    } catch (e) {
      U()
    }
  }

  function P() {
    x({
      action: "IGNORE_FRIEND_REQUEST"
    }), r.default.cancelFriendRequest(t.id, {
      location: p
    })
  }

  function M() {
    try {
      x({
        action: "BLOCK"
      }), r.default.addRelationship({
        userId: t.id,
        context: {
          location: p
        },
        type: E.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      U()
    }
  }

  function j() {
    x({
      action: "REPORT"
    }), (0, u.showReportModalForUser)(t, "@me" === _ ? void 0 : _)
  }
  return (0, l.jsx)("div", {
    className: m.buttons,
    children: A ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.default, {
        user: t,
        isCurrentUser: I,
        relationshipType: T,
        onAddFriend: R,
        onIgnoreFriend: P,
        onSendMessage: () => N("User Profile Modal Header Buttons - Send Message Button")
      }), I && (0, l.jsx)(c.default, {
        user: t,
        guildId: _,
        onClose: U
      }), I || t.isNonUserBot() ? null : (0, l.jsx)(a.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: C,
        children: (0, l.jsx)(d.default, {
          className: m.additionalActionsIcon
        })
      })]
    }) : g ? (0, l.jsx)(f.default, {
      user: t,
      onClose: U
    }) : (0, l.jsx)(c.default, {
      user: t,
      guildId: _,
      onClose: U
    })
  })
}