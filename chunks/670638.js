"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return N
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("204097"),
  i = n("80181"),
  r = n("481060"),
  o = n("239091"),
  u = n("230711"),
  d = n("390322"),
  c = n("572004"),
  f = n("617136"),
  E = n("272008"),
  _ = n("918701"),
  m = n("341907"),
  T = n("981631"),
  I = n("231338"),
  p = n("689938");

function h(e) {
  var t;
  let n = (0, _.isDismissible)(e.questContent),
    d = a.useCallback(() => {
      (0, m.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: f.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]);
  return (0, s.jsxs)(r.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, o.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": p.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : I.NOOP,
    children: [(0, s.jsxs)(r.MenuGroup, {
      children: [(0, s.jsx)(r.MenuItem, {
        id: "play-game",
        label: p.default.Messages.QUESTS_PLAY_GAME,
        action: d,
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(r.MenuItem, {
        id: "share-link",
        label: p.default.Messages.COPY_LINK,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_COPY_LINK
          }), (0, c.copy)((0, _.getQuestUrl)(e.quest.id))
        },
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(r.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(r.MenuItem, {
        id: "learn-more",
        label: p.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), u.default.open(T.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(r.MenuItem, {
        id: "display-disclosure",
        label: p.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, m.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: f.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), n && (0, s.jsx)(r.MenuItem, {
        id: "hide-entrypoint",
        label: p.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, _.isDismissible)(e.questContent) && (0, E.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: p.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(r.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(r.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: () => {
          (0, E.resetQuestDismissibilityStatus)(e.quest.id)
        }
      }), (0, s.jsx)(r.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          (0, E.resetQuestPreviewStatus)(e.quest.id)
        }
      }), (0, s.jsx)(r.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: () => {
          (0, E.completeQuestPreview)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function N(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: o,
    questContent: u,
    questContentPosition: c,
    ...E
  } = e, _ = a.useCallback(() => {
    (0, f.trackQuestContentClicked)({
      questId: o.id,
      questContent: u,
      questContentCTA: f.QuestContentCTA.OPEN_CONTEXT_MENU,
      questContentPosition: c
    }), null != n && n()
  }, [n, o.id, u, c]);
  return (0, s.jsx)(r.Popout, {
    onRequestOpen: _,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(d.default, {
        children: (0, s.jsx)(h, {
          ...E,
          quest: o,
          questContent: u,
          questContentPosition: c,
          onClose: t
        })
      }) : (0, s.jsx)(h, {
        ...E,
        quest: o,
        questContent: u,
        questContentPosition: c,
        onClose: t
      })
    },
    animation: r.Popout.Animation.NONE,
    children: e => t(e)
  })
}