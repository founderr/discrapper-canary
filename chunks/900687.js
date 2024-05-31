"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
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
  m = l("590106");

function I(e) {
  let {
    user: t,
    isCurrentUser: I,
    guildId: _,
    friendToken: v,
    canDM: g,
    relationshipType: T,
    originalFriendingEnabled: A = !1,
    trackUserProfileAction: U,
    onClose: p
  } = e, {
    newestAnalyticsLocation: x
  } = (0, o.default)();

  function N(e) {
    U({
      action: "SEND_MESSAGE"
    }), i.default.openPrivateChannel(t.id, !1, !1, e), p()
  }

  function C(e) {
    U({
      action: "PRESS_OPTIONS"
    }), (0, n.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await l.e("29136").then(l.bind(l, "193646"));
      return l => (0, s.jsx)(e, {
        ...l,
        originalFriendingEnabled: A,
        relationshipType: T,
        onRemoveFriend: h,
        onBlock: M,
        onReport: j,
        onCopyId: () => U({
          action: "COPY_USER_ID"
        }),
        onMessage: () => N("User Profile Modal Header Buttons - Context Menu"),
        user: t,
        guildId: _
      })
    })
  }

  function h() {
    U({
      action: "REMOVE_FRIEND"
    }), r.default.removeFriend(t.id, {
      location: x
    })
  }

  function R() {
    try {
      U({
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
      p()
    }
  }

  function P() {
    U({
      action: "IGNORE_FRIEND_REQUEST"
    }), r.default.cancelFriendRequest(t.id, {
      location: x
    })
  }

  function M() {
    try {
      U({
        action: "BLOCK"
      }), r.default.addRelationship({
        userId: t.id,
        context: {
          location: x
        },
        type: E.RelationshipTypes.BLOCKED
      })
    } catch (e) {
      p()
    }
  }

  function j() {
    U({
      action: "REPORT"
    }), (0, u.showReportModalForUser)(t, "@me" === _ ? void 0 : _)
  }
  return (0, s.jsx)("div", {
    className: m.buttons,
    children: A ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(S.default, {
        user: t,
        isCurrentUser: I,
        relationshipType: T,
        onAddFriend: R,
        onIgnoreFriend: P,
        onSendMessage: () => N("User Profile Modal Header Buttons - Send Message Button")
      }), I && (0, s.jsx)(c.default, {
        user: t,
        guildId: _,
        onClose: p
      }), I || t.isNonUserBot() ? null : (0, s.jsx)(a.Clickable, {
        focusProps: {
          offset: {
            left: 8
          }
        },
        onClick: C,
        children: (0, s.jsx)(d.default, {
          className: m.additionalActionsIcon
        })
      })]
    }) : g ? (0, s.jsx)(f.default, {
      user: t,
      onClose: p
    }) : (0, s.jsx)(c.default, {
      user: t,
      guildId: _,
      onClose: p
    })
  })
}