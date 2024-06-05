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
  c = n("479531"),
  f = n("390322"),
  E = n("617136"),
  _ = n("272008"),
  m = n("113434"),
  T = n("569984"),
  I = n("918701"),
  p = n("341907"),
  h = n("46140"),
  N = n("981631"),
  S = n("231338"),
  C = n("689938");

function g(e) {
  var t;
  let n = (0, l.useStateFromStores)([T.default], () => T.default.questDeliveryOverride, []),
    f = (0, I.isDismissible)(e.questContent),
    g = (0, I.hasVariant)(e.quest, h.QuestVariants.IN_HOUSE_CONSOLE_QUEST),
    {
      handleComplete: A,
      handleResetDismissibilityClick: M,
      handleResetStatusClick: R,
      handleOverrideDeliveryClick: v
    } = (0, m.useQuestPreviewActions)(e.quest.id),
    O = a.useCallback(() => {
      (0, I.openGameLink)(e.quest, {
        content: e.questContent,
        ctaContent: E.QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    x = a.useCallback(() => {
      (0, I.copyShareLink)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: E.QuestContentCTA.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]),
    L = e => (0, o.showToast)((0, o.createToast)(new c.default(e, e.status).message, o.ToastType.FAILURE));
  return (0, s.jsxs)(o.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, u.closeContextMenu)()
    },
    navId: "quests-entry",
    "aria-label": C.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : S.NOOP,
    children: [(0, s.jsxs)(o.MenuGroup, {
      children: [!1 === g && (0, s.jsx)(o.MenuItem, {
        id: "play-game",
        label: C.default.Messages.QUESTS_PLAY_GAME,
        action: O,
        icon: r.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(o.MenuItem, {
        id: "share-link",
        label: C.default.Messages.COPY_LINK,
        action: x,
        icon: i.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(o.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(o.MenuItem, {
        id: "learn-more",
        label: C.default.Messages.QUESTS_LEARN_MORE_V2,
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
        label: C.default.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, p.openDisclosureModal)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: E.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), f && (0, s.jsx)(o.MenuItem, {
        id: "hide-entrypoint",
        label: C.default.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, E.trackQuestContentClicked)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: E.QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT
          }), (0, I.isDismissible)(e.questContent) && (0, _.dismissQuestContent)(e.quest.id, e.questContent)
        },
        subtext: C.default.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(o.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(o.MenuCheckboxItem, {
        id: "delivery",
        label: "Show in Quest Bar",
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: v
      }), (0, s.jsx)(o.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: M
      }), (0, s.jsx)(o.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: R
      }), (0, s.jsx)(o.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: A
      }), (0, I.isConsoleQuest)(e.quest) && (0, s.jsxs)(o.MenuItem, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, s.jsx)(o.MenuItem, {
          disabled: !0,
          id: "status",
          label: "Status: ".concat((0, I.isQuestProgressingOnConsole)(e.quest) ? "alive" : "dead")
        }), (0, s.jsx)(o.MenuItem, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: () => (0, _.manualStartConsoleQuest)(e.quest.id, !0).catch(L)
        }), (0, s.jsx)(o.MenuItem, {
          id: "stop",
          label: "Stop heartbeat",
          action: () => (0, _.manualStopConsoleQuest)(e.quest.id).catch(L)
        })]
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
    ...c
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
      return i ? (0, s.jsx)(f.default, {
        children: (0, s.jsx)(g, {
          ...c,
          quest: r,
          questContent: u,
          questContentPosition: d,
          onClose: t
        })
      }) : (0, s.jsx)(g, {
        ...c,
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