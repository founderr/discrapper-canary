"use strict";
a.r(s), a("653041");
var l = a("735250");
a("470079");
var n = a("481060"),
  u = a("239091"),
  t = a("108843"),
  r = a("100527"),
  i = a("299206"),
  o = a("87620"),
  c = a("505737"),
  d = a("981631"),
  p = a("689938");
s.default = (0, t.default)(function(e) {
  let {
    user: s,
    isCurrentUser: a,
    guildId: t,
    relationshipType: r,
    originalFriendingEnabled: M = !1,
    onRemoveFriend: E,
    onBlock: f,
    onReport: h,
    onMessage: I,
    viewProfileItem: N,
    onCopyId: T,
    onSelect: _
  } = e, O = s.isNonUserBot(), R = (0, o.useIsIarUserReportingEnabled)("User Profile Actions Menu"), b = (0, c.default)(s.id, t), U = () => (0, l.jsx)(n.MenuItem, {
    id: "user-message",
    label: p.default.Messages.USER_POPOUT_MESSAGE,
    action: I
  }), g = [];
  if (!O && !a) switch (r) {
    case d.RelationshipTypes.BLOCKED:
      g.push((0, l.jsx)(n.MenuItem, {
        id: "user-unblock",
        label: p.default.Messages.UNBLOCK,
        action: E
      }));
      break;
    case d.RelationshipTypes.FRIEND:
      g.push((0, l.jsx)(n.MenuItem, {
        id: "user-remove",
        label: p.default.Messages.REMOVE_FRIEND,
        action: E,
        color: "danger"
      })), g.push((0, l.jsx)(n.MenuItem, {
        id: "user-block",
        label: p.default.Messages.BLOCK,
        action: f,
        color: "danger"
      })), R && g.push((0, l.jsx)(n.MenuItem, {
        id: "user-report",
        label: p.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: h,
        color: "danger"
      }));
      break;
    case d.RelationshipTypes.NONE:
    case d.RelationshipTypes.PENDING_INCOMING:
    default:
      g.push((0, l.jsx)(n.MenuItem, {
        id: "user-block",
        label: p.default.Messages.BLOCK,
        action: f,
        color: "danger"
      })), R && g.push((0, l.jsx)(n.MenuItem, {
        id: "user-report",
        label: p.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: h,
        color: "danger"
      }))
  }!M && b && g.push(U());
  let x = (0, i.default)({
      id: s.id,
      label: p.default.Messages.COPY_ID_USER,
      onSuccess: () => {
        T(), (0, u.closeContextMenu)()
      }
    }),
    C = b && (r === d.RelationshipTypes.NONE || r === d.RelationshipTypes.PENDING_OUTGOING);
  return (0, l.jsxs)(n.Menu, {
    navId: "user-profile-actions",
    "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: u.closeContextMenu,
    onSelect: _,
    children: [M && (0, l.jsxs)(n.MenuGroup, {
      children: [N, C ? U() : null]
    }), (0, l.jsx)(n.MenuGroup, {
      children: g
    }), null != x ? (0, l.jsx)(n.MenuGroup, {
      children: x
    }) : null]
  })
}, [r.default.CONTEXT_MENU, r.default.USER_PROFILE_ACTIONS_MENU])