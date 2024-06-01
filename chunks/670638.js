"use strict";
n.r(t), n.d(t, {
  QuestsEntryContextMenuPopout: function() {
    return A
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
  E = n("617136"),
  f = n("272008"),
  _ = n("113434"),
  T = n("569984"),
  m = n("918701"),
  I = n("341907"),
  N = n("981631"),
  p = n("231338"),
  S = n("689938");

function C(e) {
  var t;
  let n = (0, l.useStateFromStores)([T.default], () => T.default.questDeliveryOverride, []),
    c = (0, m.isDismissible)(e.questContent),
    {
      handleComplete: C,
      handleResetDismissibilityClick: A,
      handleResetStatusClick: h,
      handleOverrideDeliveryClick: g
    } = (0, _.useQuestPreviewActions)(e.quest.id),
    M = a.useCallback(() => {
      (0, m.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: E.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    O = a.useCallback(() => {
      (0, m.copyShareLink)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: E.QuestContentCTA.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]);
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": S.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : p.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [(0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: S.default.Messages.QUESTS_PLAY_GAME,
        action: M,
        icon: r.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: S.default.Messages.COPY_LINK,
        action: O,
        icon: i.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: S.default.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_LEARN_MORE
          }), d.default.open(N.UserSettingsSections.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(o.MenuItem, {
        id: "display-disclosure",
        label: S.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, I.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: E.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), c && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: S.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, m.isDismissible)(e.questContent) && (0, f.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: S.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(o.MenuCheckboxItem, {
        id: "delivery",
        label: "Show in Quest Bar",
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: g
      }), (0, s.jsx)(o.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: A
      }), (0, s.jsx)(o.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: h
      }), (0, s.jsx)(o.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: C
      })]
    }, "preview-controls")]
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
    questContentPosition: d,
    ...f
  } = e, _ = a.useCallback(() => {
    (0, E.trackQuestContentClicked)({
      questId: r.id,
      questContent: u,
      questContentCTA: E.QuestContentCTA.OPEN_CONTEXT_MENU,
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
        children: (0, s.jsx)(C, {
          ...f,
          quest: r,
          questContent: u,
          questContentPosition: d,
          onClose: t
        })
      }) : (0, s.jsx)(C, {
        ...f,
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