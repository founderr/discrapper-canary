"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenu: function() {
    return S
  },
  QuestsEntryContextMenuPopout: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var o = n("821455"),
  i = n("923748"),
  u = n("551042"),
  a = n("77078"),
  l = n("272030"),
  r = n("545158"),
  c = n("306160"),
  d = n("448881"),
  E = n("588025"),
  f = n("227231"),
  M = n("843455"),
  C = n("782340");

function S(e) {
  var t;
  let S = (0, f.isDismissible)(e.questContent);
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, l.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": C.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : M.NOOP,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [(0, s.jsx)(a.MenuItem, {
        id: "get-game",
        label: C.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, r.default)(e.quest.config.getGameLink)
        },
        icon: i.LinkExternalMediumIcon
      }), e.questContent === E.QuestContent.QUESTS_EMBED && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: C.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, c.copy)((0, f.getQuestUrl)(e.quest.id))
        },
        icon: o.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(a.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: C.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, u.openModalLazy)(async () => {
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
      }), S && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: C.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, f.isDismissible)(e.questContent) && (0, d.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: C.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function p(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    ...i
  } = e;
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: n,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, s.jsx)(S, {
        ...i,
        onClose: t
      })
    },
    animation: a.Popout.Animation.NONE,
    children: e => t(e)
  })
}