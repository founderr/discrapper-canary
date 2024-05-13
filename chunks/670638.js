"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return C
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
  c = n("390322"),
  E = n("572004"),
  f = n("617136"),
  _ = n("272008"),
  T = n("918701"),
  I = n("341907"),
  m = n("981631"),
  N = n("231338"),
  p = n("689938");

function S(e) {
  var t;
  let c = (0, T.isDismissible)(e.questContent),
    S = a.useCallback(() => {
      (0, I.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: f.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": p.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : N.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: p.default.Messages.QUESTS_PLAY_GAME,
        action: S,
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: p.default.Messages.COPY_LINK,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_COPY_LINK
          }), (0, E.copy)((0, T.getQuestUrl)(e.quest.id))
        },
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: p.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(m.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: p.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
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
      }), c && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: p.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, T.isDismissible)(e.questContent) && (0, _.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: p.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(o.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: () => {
          (0, _.resetQuestDismissibilityStatus)(e.quest.id)
        }
      }), (0, s.jsx)(o.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          (0, _.resetQuestPreviewStatus)(e.quest.id)
        }
      }), (0, s.jsx)(o.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: () => {
          (0, _.completeQuestPreview)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function C(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: r,
    questContent: u,
    questContentPosition: d,
    ...E
  } = e, _ = a.useCallback(() => {
    (0, f.trackQuestContentClicked)({
      questId: r.id,
      questContent: u,
      questContentCTA: f.QuestContentCTA.OPEN_CONTEXT_MENU,
      questContentPosition: d
    }), null != n && n()
  }, [n, r.id, u, d]);
  return (0, s.jsx)(o.Popout, {
    onRequestOpen: _,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(c.default, {
        children: (0, s.jsx)(S, {
          ...E,
          quest: r,
          questContent: u,
          questContentPosition: d,
          onClose: t
        })
      }) : (0, s.jsx)(S, {
        ...E,
        quest: r,
        questContent: u,
        questContentPosition: d,
        onClose: t
      })
    },
    animation: o.Popout.Animation.NONE,
    children: e => t(e)
  })
}