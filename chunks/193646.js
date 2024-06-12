"use strict";
a.r(n), a("653041");
var t = a("735250");
a("470079");
var s = a("481060"),
  l = a("493683"),
  o = a("239091"),
  u = a("108843"),
  i = a("100527"),
  c = a("299206"),
  r = a("87620"),
  d = a("505737"),
  E = a("389052"),
  _ = a("822972"),
  p = a("622724"),
  N = a("981631"),
  f = a("689938");
n.default = (0, u.default)(function(e) {
  let {
    user: n,
    isCurrentUser: a,
    guildId: u,
    relationshipType: O,
    originalFriendingEnabled: R = !1,
    viewProfileItem: I,
    trackUserProfileAction: h,
    onClose: S,
    onSelect: U
  } = e, M = n.isNonUserBot(), C = (0, r.useIsIarUserReportingEnabled)(i.default.USER_PROFILE_ACTIONS_MENU), T = (0, d.default)(n.id, u), P = (0, E.default)({
    user: n,
    color: "danger",
    location: i.default.USER_PROFILE_ACTIONS_MENU,
    onBlock: () => h({
      action: "BLOCK"
    }),
    onUnblock: () => h({
      action: "UNBLOCK"
    })
  }), A = (0, _.default)({
    user: n,
    color: "danger",
    location: i.default.USER_PROFILE_ACTIONS_MENU,
    onAction: () => h({
      action: "REMOVE_FRIEND"
    })
  }), L = (0, p.default)({
    user: n,
    guildId: u,
    color: "danger",
    location: i.default.USER_PROFILE_ACTIONS_MENU,
    onAction: () => h({
      action: "REPORT"
    })
  }), G = (0, c.default)({
    id: n.id,
    label: f.default.Messages.COPY_ID_USER,
    onSuccess: () => {
      h({
        action: "COPY_USER_ID"
      }), (0, o.closeContextMenu)()
    }
  }), b = (0, t.jsx)(s.MenuItem, {
    id: "user-message",
    label: f.default.Messages.USER_POPOUT_MESSAGE,
    action: () => {
      h({
        action: "SEND_MESSAGE"
      }), l.default.openPrivateChannel(n.id, !1, !1, i.default.USER_PROFILE_ACTIONS_MENU), S()
    }
  }), x = [];
  if (!M && !a) switch (O) {
    case N.RelationshipTypes.BLOCKED:
      x.push(P);
      break;
    case N.RelationshipTypes.FRIEND:
      x.push(A), x.push(P), C && x.push(L);
      break;
    case N.RelationshipTypes.NONE:
    case N.RelationshipTypes.PENDING_INCOMING:
    default:
      x.push(P), C && x.push(L)
  }!R && T && x.push(b);
  let g = T && (O === N.RelationshipTypes.NONE || O === N.RelationshipTypes.PENDING_OUTGOING);
  return (0, t.jsxs)(s.Menu, {
    navId: "user-profile-actions",
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: o.closeContextMenu,
    onSelect: U,
    children: [R && (0, t.jsxs)(s.MenuGroup, {
      children: [I, g ? b : null]
    }), (0, t.jsx)(s.MenuGroup, {
      children: x
    }), null != G ? (0, t.jsx)(s.MenuGroup, {
      children: G
    }) : null]
  })
}, [i.default.CONTEXT_MENU, i.default.USER_PROFILE_ACTIONS_MENU])