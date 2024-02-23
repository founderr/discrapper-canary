"use strict";
n.r(e), n.d(e, {
  QuestsEntryContextMenu: function() {
    return M
  },
  QuestsEntryContextMenuPopout: function() {
    return O
  }
});
var s = n("37983");
n("884691");
var u = n("821455"),
  o = n("923748"),
  i = n("551042"),
  a = n("77078"),
  l = n("272030"),
  r = n("545158"),
  E = n("124824"),
  c = n("306160"),
  C = n("815496"),
  d = n("448881"),
  _ = n("588025"),
  N = n("227231"),
  T = n("843455"),
  f = n("782340");

function M(t) {
  var e;
  let E = (0, N.isDismissible)(t.questContent);
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != t.onSelect ? t.onSelect() : (0, l.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": f.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (e = null == t ? void 0 : t.onClose) && void 0 !== e ? e : T.NOOP,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [(0, s.jsx)(a.MenuItem, {
        id: "get-game",
        label: f.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, C.trackQuestContentClicked)(t.quest.id, t.questContent, C.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK), (0, r.default)(t.quest.config.getGameLink)
        },
        icon: o.LinkExternalMediumIcon
      }), t.questContent === _.QuestContent.QUESTS_EMBED && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: f.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, C.trackQuestContentClicked)(t.quest.id, t.questContent, C.QuestContentCTA.CONTEXT_MENU_COPY_LINK), (0, c.copy)((0, N.getQuestUrl)(t.quest.id))
        },
        icon: u.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(a.MenuGroup, {
      children: [t.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: f.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, C.trackQuestContentClicked)(t.quest.id, t.questContent, C.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE), (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("970143").then(n.bind(n, "970143"));
            return n => (0, s.jsx)(e, {
              ...n,
              questContent: t.questContent,
              questConfig: t.quest.config
            })
          })
        }
      }), E && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: f.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, C.trackQuestContentClicked)(t.quest.id, t.questContent, C.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT), (0, N.isDismissible)(t.questContent) && (0, d.dismissQuestContent)(t.quest.id, t.questContent)
        },
        subtext: f.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function O(t) {
  let {
    children: e,
    onOpen: n,
    onClose: u,
    preventIdle: o,
    ...i
  } = t;
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: n,
    onRequestClose: u,
    renderPopout: t => {
      let {
        closePopout: e
      } = t;
      return o ? (0, s.jsx)(E.default, {
        children: (0, s.jsx)(M, {
          ...i,
          onClose: e
        })
      }) : (0, s.jsx)(M, {
        ...i,
        onClose: e
      })
    },
    animation: a.Popout.Animation.NONE,
    children: t => e(t)
  })
}