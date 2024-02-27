"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenu: function() {
    return q
  },
  QuestsEntryContextMenuPopout: function() {
    return p
  }
});
var s = n("37983"),
  u = n("884691"),
  o = n("821455"),
  i = n("923748"),
  l = n("551042"),
  a = n("77078"),
  r = n("272030"),
  c = n("545158"),
  d = n("124824"),
  C = n("306160"),
  E = n("815496"),
  _ = n("448881"),
  f = n("588025"),
  M = n("227231"),
  T = n("843455"),
  N = n("782340");

function q(e) {
  var t;
  let u = (0, M.isDismissible)(e.questContent);
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": N.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : T.NOOP,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [(0, s.jsx)(a.MenuItem, {
        id: "get-game",
        label: N.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, E.trackQuestContentClicked)(e.quest.id, e.questContent, E.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK), (0, c.default)(e.quest.config.getGameLink)
        },
        icon: i.LinkExternalMediumIcon
      }), e.questContent === f.QuestContent.QUESTS_EMBED && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: N.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, E.trackQuestContentClicked)(e.quest.id, e.questContent, E.QuestContentCTA.CONTEXT_MENU_COPY_LINK), (0, C.copy)((0, M.getQuestUrl)(e.quest.id))
        },
        icon: o.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(a.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: N.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, E.trackQuestContentClicked)(e.quest.id, e.questContent, E.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE), (0, l.openModalLazy)(async () => {
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
      }), u && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: N.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, E.trackQuestContentClicked)(e.quest.id, e.questContent, E.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT), (0, M.isDismissible)(e.questContent) && (0, _.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: N.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function p(e) {
  let {
    children: t,
    onOpen: n,
    onClose: o,
    preventIdle: i,
    quest: l,
    questContent: r,
    ...c
  } = e, C = u.useCallback(() => {
    (0, E.trackQuestContentClicked)(l.id, r, E.QuestContentCTA.OPEN_CONTEXT_MENU), null != n && n()
  }, [n, l, r]);
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: C,
    onRequestClose: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(d.default, {
        children: (0, s.jsx)(q, {
          ...c,
          quest: l,
          questContent: r,
          onClose: t
        })
      }) : (0, s.jsx)(q, {
        ...c,
        quest: l,
        questContent: r,
        onClose: t
      })
    },
    animation: a.Popout.Animation.NONE,
    children: e => t(e)
  })
}