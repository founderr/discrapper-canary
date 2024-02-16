"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("923748"),
  l = n("551042"),
  i = n("77078"),
  r = n("272030"),
  o = n("545158"),
  u = n("843455"),
  d = n("782340");

function c(e) {
  var t;
  return (0, a.jsxs)(i.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, r.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : u.NOOP,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: (0, a.jsx)(i.MenuItem, {
        id: "get-game",
        label: d.default.Messages.QUESTS_GET_THIS_GAME,
        action: () => {
          (0, o.default)(e.questConfig.getGameLink)
        },
        icon: s.LinkExternalMediumIcon
      })
    }, "major-actions"), (0, a.jsxs)(i.MenuGroup, {
      children: [e.shouldShowDisclosure && (0, a.jsx)(i.MenuItem, {
        id: "display-disclosure",
        label: d.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, l.openModalLazy)(async () => {
            let {
              default: t
            } = await n.el("970143").then(n.bind(n, "970143"));
            return n => (0, a.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.questConfig
            })
          })
        }
      }), null != e.onHide && (0, a.jsx)(i.MenuItem, {
        id: "hide-entrypoint",
        label: d.default.Messages.QUESTS_HIDE_THIS,
        action: e.onHide,
        subtext: d.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function f(e) {
  let {
    children: t,
    onOpen: n,
    onClose: s,
    ...l
  } = e;
  return (0, a.jsx)(i.Popout, {
    onRequestOpen: n,
    onRequestClose: s,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(c, {
        ...l,
        onClose: t
      })
    },
    animation: i.Popout.Animation.NONE,
    children: e => t(e)
  })
}