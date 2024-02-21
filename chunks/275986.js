"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenu: function() {
    return E
  },
  QuestsEntryContextMenuPopout: function() {
    return M
  }
});
var s = n("37983");
n("884691");
var o = n("923748"),
  i = n("551042"),
  u = n("77078"),
  a = n("272030"),
  l = n("545158"),
  r = n("448881"),
  c = n("227231"),
  d = n("843455"),
  f = n("782340");

function E(e) {
  var t;
  let E = (0, c.isDismissible)(e.questContent);
  return (0, s.jsxs)(u.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, a.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": f.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : d.NOOP,
    children: [(0, s.jsx)(u.MenuGroup, {
      children: (0, s.jsx)(u.MenuItem, {
        id: "get-game",
        label: f.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, l.default)(e.quest.config.getGameLink)
        },
        icon: o.LinkExternalMediumIcon
      })
    }, "major-actions"), (0, s.jsxs)(u.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, s.jsx)(u.MenuItem, {
        id: "display-disclosure",
        label: f.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, i.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("970143").then(n.bind(n, "970143"));
            return n => (0, s.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.quest.config
            })
          })
        }
      }), E && (0, s.jsx)(u.MenuItem, {
        id: "hide-entrypoint",
        label: f.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, c.isDismissible)(e.questContent) && (0, r.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: f.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function M(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    ...i
  } = e;
  return (0, s.jsx)(u.Popout, {
    onRequestOpen: n,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(E, {
        ...i,
        onClose: t
      })
    },
    animation: u.Popout.Animation.NONE,
    children: e => t(e)
  })
}