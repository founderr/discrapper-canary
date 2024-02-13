"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("923748"),
  l = n("77078"),
  i = n("272030"),
  r = n("545158"),
  o = n("843455"),
  u = n("782340");

function d(e) {
  var t;
  return (0, a.jsxs)(l.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, i.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": u.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : o.NOOP,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "get-game",
        label: u.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, r.default)(e.getGameLink)
        },
        icon: s.LinkExternalMediumIcon
      })
    }, "major-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, a.jsx)(l.MenuItem, {
        id: "display-disclosure",
        label: u.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {}
      }), null != e.onHide && (0, a.jsx)(l.MenuItem, {
        id: "hide-entrypoint",
        label: u.default.Messages.QUESTS_HIDE_THIS,
        action: e.onHide,
        subtext: u.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function c(e) {
  let {
    children: t,
    onOpen: n,
    onClose: s,
    ...i
  } = e;
  return (0, a.jsx)(l.Popout, {
    onRequestOpen: n,
    onRequestClose: s,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(d, {
        ...i,
        onClose: t
      })
    },
    animation: l.Popout.Animation.NONE,
    children: e => t(e)
  })
}