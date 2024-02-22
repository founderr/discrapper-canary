"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenu: function() {
    return M
  },
  QuestsEntryContextMenuPopout: function() {
    return h
  }
});
var s = n("37983");
n("884691");
var u = n("821455"),
  o = n("923748"),
  i = n("551042"),
  l = n("77078"),
  a = n("272030"),
  r = n("545158"),
  c = n("124824"),
  d = n("306160"),
  f = n("448881"),
  E = n("588025"),
  p = n("227231"),
  x = n("843455"),
  C = n("782340");

function M(e) {
  var t;
  let c = (0, p.isDismissible)(e.questContent);
  return (0, s.jsxs)(l.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, a.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": C.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : x.NOOP,
    children: [(0, s.jsxs)(l.MenuGroup, {
      children: [(0, s.jsx)(l.MenuItem, {
        id: "get-game",
        label: C.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, r.default)(e.quest.config.getGameLink)
        },
        icon: o.LinkExternalMediumIcon
      }), e.questContent === E.QuestContent.QUESTS_EMBED && (0, s.jsx)(l.MenuItem, {
        id: "share-link",
        label: C.default.Messages.QUESTS_SHARE_LINK,
        action: () => {
          (0, d.copy)((0, p.getQuestUrl)(e.quest.id))
        },
        icon: u.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(l.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, s.jsx)(l.MenuItem, {
        id: "display-disclosure",
        label: C.default.Messages.QUESTS_DISCLOSURE_LABEL,
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
      }), c && (0, s.jsx)(l.MenuItem, {
        id: "hide-entrypoint",
        label: C.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, p.isDismissible)(e.questContent) && (0, f.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: C.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function h(e) {
  let {
    children: t,
    onOpen: n,
    onClose: u,
    preventIdle: o,
    ...i
  } = e;
  return (0, s.jsx)(l.Popout, {
    onRequestOpen: n,
    onRequestClose: u,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return o ? (0, s.jsx)(c.default, {
        children: (0, s.jsx)(M, {
          ...i,
          onClose: t
        })
      }) : (0, s.jsx)(M, {
        ...i,
        onClose: t
      })
    },
    animation: l.Popout.Animation.NONE,
    children: e => t(e)
  })
}