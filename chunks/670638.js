"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return A
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("204097"),
  i = n("80181"),
  r = n("952265"),
  o = n("481060"),
  u = n("239091"),
  d = n("230711"),
  c = n("782568"),
  E = n("390322"),
  f = n("572004"),
  _ = n("49012"),
  T = n("617136"),
  I = n("272008"),
  m = n("918701"),
  p = n("981631"),
  N = n("231338"),
  S = n("689938");

function C(e) {
  var t;
  let a = (0, m.isDismissible)(e.questContent);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": S.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : N.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: S.default.Messages.QUESTS_PLAY_GAME,
        action: () => {
          (0, _.handleClick)({
            href: e.quest.config.getGameLink,
            onConfirm: () => {
              (0, T.trackQuestContentClicked)({
                questId: e.quest.id,
                questContent: e.questContent,
                questContentCTA: T.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
              }), (0, c.default)(e.quest.config.getGameLink)
            }
          })
        },
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: S.default.Messages.COPY_LINK,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_COPY_LINK
          }), (0, f.copy)((0, m.getQuestUrl)(e.quest.id))
        },
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: S.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(p.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: S.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          }), (0, r.openModalLazy)(async () => {
            let {
              default: t
            } = await Promise.all([n.e("99387"), n.e("4266")]).then(n.bind(n, "316210"));
            return n => (0, s.jsx)(t, {
              ...n,
              questContent: e.questContent,
              questConfig: e.quest.config
            })
          })
        }
      }), a && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: S.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, T.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentCTA: T.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.isDismissible)(e.questContent) && (0, I.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: S.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions")]
  })
}

function A(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: r,
    questContent: u,
    ...d
  } = e, c = a.useCallback(() => {
    (0, T.trackQuestContentClicked)({
      questId: r.id,
      questContent: u,
      questContentCTA: T.QuestContentCTA.OPEN_CONTEXT_MENU
    }), null != n && n()
  }, [n, r, u]);
  return (0, s.jsx)(o.Popout, {
    onRequestOpen: c,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(E.default, {
        children: (0, s.jsx)(C, {
          ...d,
          quest: r,
          questContent: u,
          onClose: t
        })
      }) : (0, s.jsx)(C, {
        ...d,
        quest: r,
        questContent: u,
        onClose: t
      })
    },
    animation: o.Popout.Animation.NONE,
    children: e => t(e)
  })
}