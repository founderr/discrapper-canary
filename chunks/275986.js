"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return h
  }
});
var a = n("37983");
n("884691");
var s = n("923748"),
  i = n("551042"),
  l = n("77078"),
  r = n("272030"),
  o = n("545158"),
  u = n("448881"),
  d = n("227231"),
  c = n("843455"),
  f = n("782340");

function E(e) {
  var t;
  let E = (0, d.isDismissible)(e.questContent);
  return (0, a.jsxs)(l.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": f.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : c.NOOP,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "get-game",
        label: f.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, o.default)(e.quest.config.getGameLink)
        },
        icon: s.LinkExternalMediumIcon
      })
    }, "major-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, a.jsx)(l.MenuItem, {
        id: "display-disclosure",
        label: f.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, i.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("970143").then(n.bind(n, "970143"));
            return n => (0, a.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.quest.config
            })
          })
        }
      }), E && (0, a.jsx)(l.MenuItem, {
        id: "hide-entrypoint",
        label: f.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, d.isDismissible)(e.questContent) && (0, u.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: f.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function h(e) {
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
      return (0, a.jsx)(E, {
        ...i,
        onClose: t
      })
    },
    animation: l.Popout.Animation.NONE,
    children: e => t(e)
  })
}