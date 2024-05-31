"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return C
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("204097"),
  r = n("80181"),
  o = n("481060"),
  u = n("239091"),
  d = n("230711"),
  c = n("390322"),
  f = n("617136"),
  E = n("272008"),
  _ = n("113434"),
  m = n("569984"),
  T = n("918701"),
  I = n("341907"),
  p = n("981631"),
  h = n("231338"),
  N = n("689938");

function S(e) {
  var t;
  let n = (0, l.useStateFromStores)([m.default], () => m.default.questDeliveryOverride, []),
    c = (0, T.isDismissible)(e.questContent),
    {
      handleComplete: S,
      handleResetDismissibilityClick: C,
      handleResetStatusClick: g,
      handleOverrideDeliveryClick: A
    } = (0, _.useQuestPreviewActions)(e.quest.id),
    M = a.useCallback(() => {
      (0, T.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: f.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    R = a.useCallback(() => {
      (0, T.copyShareLink)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: f.QuestContentCTA.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": N.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : h.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: N.default.Messages.QUESTS_PLAY_GAME,
        action: M,
        icon: r.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: N.default.Messages.COPY_LINK,
        action: R,
        icon: i.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: N.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(p.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: N.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, I.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: f.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), c && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: N.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, f.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: f.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, T.isDismissible)(e.questContent) && (0, E.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: N.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(o.MenuCheckboxItem, {
        id: "delivery",
        label: "Show in Quest Bar",
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: A
      }), (0, s.jsx)(o.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: C
      }), (0, s.jsx)(o.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: g
      }), (0, s.jsx)(o.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: S
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