"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return h
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
  c = n("617136"),
  f = n("272008"),
  E = n("918701"),
  _ = n("341907"),
  m = n("981631"),
  T = n("231338"),
  I = n("689938");

function p(e) {
  var t;
  let n = (0, E.isDismissible)(e.questContent),
    d = a.useCallback(() => {
      (0, _.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: c.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    p = a.useCallback(() => {
      (0, _.copyShareLink)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: c.QuestContentCTA.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]);
  return (0, s.jsxs)(r.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, o.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": I.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : T.NOOP,
    children: [(0, s.jsxs)(r.MenuGroup, {
      children: [(0, s.jsx)(r.MenuItem, {
        id: "play-game",
        label: I.default.Messages.QUESTS_PLAY_GAME,
        action: d,
        icon: i.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(r.MenuItem, {
        id: "share-link",
        label: I.default.Messages.COPY_LINK,
        action: p,
        icon: l.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(r.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(r.MenuItem, {
        id: "learn-more",
        label: I.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, c.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), u.default.open(m.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(r.MenuItem, {
        id: "display-disclosure",
        label: I.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, _.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: c.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), n && (0, s.jsx)(r.MenuItem, {
        id: "hide-entrypoint",
        label: I.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, c.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: c.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, E.isDismissible)(e.questContent) && (0, f.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: I.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(r.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(r.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: () => {
          (0, f.resetQuestDismissibilityStatus)(e.quest.id)
        }
      }), (0, s.jsx)(r.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: () => {
          (0, f.resetQuestPreviewStatus)(e.quest.id)
        }
      }), (0, s.jsx)(r.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: () => {
          (0, f.completeQuestPreview)(e.quest.id)
        }
      })]
    }, "preview-controls")]
  })
}

function h(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: i,
    quest: o,
    questContent: u,
    questContentPosition: f,
    ...E
  } = e, _ = a.useCallback(() => {
    (0, c.trackQuestContentClicked)({
      questId: o.id,
      questContent: u,
      questContentCTA: c.QuestContentCTA.OPEN_CONTEXT_MENU,
      questContentPosition: f
    }), null != n && n()
  }, [n, o.id, u, f]);
  return (0, s.jsx)(r.Popout, {
    onRequestOpen: _,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return i ? (0, s.jsx)(d.default, {
        children: (0, s.jsx)(p, {
          ...E,
          quest: o,
          questContent: u,
          questContentPosition: f,
          onClose: t
        })
      }) : (0, s.jsx)(p, {
        ...E,
        quest: o,
        questContent: u,
        questContentPosition: f,
        onClose: t
      })
    },
    animation: r.Popout.Animation.NONE,
    children: e => t(e)
  })
}