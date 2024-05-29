"use strict";
a.r(s), a("653041");
var u = a("735250");
a("470079");
var l = a("481060"),
  n = a("239091"),
  t = a("108843"),
  r = a("100527"),
  o = a("299206"),
  i = a("87620"),
  c = a("505737"),
  d = a("981631"),
  p = a("689938");
s.default = (0, t.default)(function(e) {
  let {
    user: s,
    guildId: a,
    relationshipType: t,
    originalFriendingEnabled: r,
    onRemoveFriend: M,
    onBlock: f,
    onReport: E,
    onMessage: h,
    onCopyId: I,
    onSelect: _
  } = e, R = s.isNonUserBot(), T = [], N = (0, i.useIsIarUserReportingEnabled)("User Profile Actions Menu"), O = (0, c.default)(s.id, a), b = () => (0, u.jsx)(l.MenuItem, {
    id: "user-message",
    label: p.default.Messages.USER_POPOUT_MESSAGE,
    action: h
  });
  if (!R) switch (t) {
    case d.RelationshipTypes.BLOCKED:
      T.push((0, u.jsx)(l.MenuItem, {
        id: "user-unblock",
        label: p.default.Messages.UNBLOCK,
        action: M
      }));
      break;
    case d.RelationshipTypes.FRIEND:
      T.push((0, u.jsx)(l.MenuItem, {
        id: "user-remove",
        label: p.default.Messages.REMOVE_FRIEND,
        action: M,
        color: "danger"
      })), T.push((0, u.jsx)(l.MenuItem, {
        id: "user-block",
        label: p.default.Messages.BLOCK,
        action: f,
        color: "danger"
      })), N && T.push((0, u.jsx)(l.MenuItem, {
        id: "user-report",
        label: p.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: E,
        color: "danger"
      }));
      break;
    case d.RelationshipTypes.NONE:
    case d.RelationshipTypes.PENDING_INCOMING:
    default:
      T.push((0, u.jsx)(l.MenuItem, {
        id: "user-block",
        label: p.default.Messages.BLOCK,
        action: f,
        color: "danger"
      })), N && T.push((0, u.jsx)(l.MenuItem, {
        id: "user-report",
        label: p.default.Messages.REPORTS_USER_BUTTON_TITLE,
        action: E,
        color: "danger"
      }))
  }!r && O && T.push(b());
  let g = (0, o.default)({
    id: s.id,
    label: p.default.Messages.COPY_ID_USER,
    onSuccess: () => {
      I(), (0, n.closeContextMenu)()
    }
  });
  return (0, u.jsxs)(l.Menu, {
    navId: "user-profile-actions",
    "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
    onClose: n.closeContextMenu,
    onSelect: _,
    children: [r && O ? (0, u.jsx)(l.MenuGroup, {
      children: b()
    }) : null, (0, u.jsx)(l.MenuGroup, {
      children: T
    }), null != g ? (0, u.jsx)(l.MenuGroup, {
      children: g
    }) : null]
  })
}, [r.default.CONTEXT_MENU, r.default.USER_PROFILE_ACTIONS_MENU])