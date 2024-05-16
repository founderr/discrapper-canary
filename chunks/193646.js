"use strict";
a.r(s), a("653041");
var t = a("735250");
a("470079");
var l = a("481060"),
  n = a("239091"),
  u = a("108843"),
  r = a("100527"),
  o = a("299206"),
  i = a("87620"),
  c = a("981631"),
  d = a("689938");
s.default = (0, u.default)(function(e) {
  let {
    user: s,
    relationshipType: a,
    onRemoveFriend: u,
    onBlock: r,
    onReport: p,
    onMessage: M,
    onCopyId: E,
    onSelect: f
  } = e, h = s.isNonUserBot(), I = [], _ = (0, i.useIsIarUserReportingEnabled)("User Profile Actions Menu");
  if (!h) switch (a) {
    case c.RelationshipTypes.BLOCKED:
      I.push((0, t.jsx)(l.MenuItem, {
        id: "user-unblock",
        label: d.default.Messages.UNBLOCK,
        action: u
      }));
      break;
    case c.RelationshipTypes.FRIEND:
      I.push((0, t.jsx)(l.MenuItem, {
        id: "user-remove",
        label: d.default.Messages.REMOVE_FRIEND,
        action: u,
        color: "danger"
      })), I.push((0, t.jsx)(l.MenuItem, {
        id: "user-block",
        label: d.default.Messages.BLOCK,
        action: r,
        color: "danger"
      })), _ && I.push((0, t.jsx)(l.MenuItem, {
        id: "user-report",
        label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: p,
        color: "danger"
      }));
      break;
    case c.RelationshipTypes.NONE:
    case c.RelationshipTypes.PENDING_INCOMING:
    default:
      I.push((0, t.jsx)(l.MenuItem, {
        id: "user-block",
        label: d.default.Messages.BLOCK,
        action: r,
        color: "danger"
      })), _ && I.push((0, t.jsx)(l.MenuItem, {
        id: "user-report",
        label: d.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: p,
        color: "danger"
      }))
  }!h && a !== c.RelationshipTypes.BLOCKED && I.push((0, t.jsx)(l.MenuItem, {
    id: "user-message",
    label: d.default.Messages.USER_POPOUT_MESSAGE,
    action: M
  }));
  let R = (0, o.default)({
    id: s.id,
    label: d.default.Messages.COPY_ID_USER,
    onSuccess: () => {
      E(), (0, n.closeContextMenu)()
    }
  });
  return (0, t.jsxs)(l.Menu, {
    navId: "user-profile-actions",
    "aria-label": d.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: n.closeContextMenu,
    onSelect: f,
    children: [(0, t.jsx)(l.MenuGroup, {
      children: I
    }), null != R ? (0, t.jsx)(l.MenuGroup, {
      children: R
    }) : null]
  })
}, [r.default.CONTEXT_MENU, r.default.USER_PROFILE_ACTIONS_MENU])