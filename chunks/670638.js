n.d(t, {
  r: function() {
    return p
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(239091),
  o = n(230711),
  c = n(479531),
  u = n(390322),
  d = n(617136),
  E = n(272008),
  _ = n(113434),
  I = n(569984),
  T = n(918701),
  N = n(341907),
  m = n(46140),
  h = n(981631),
  C = n(231338),
  S = n(689938);

function A(e) {
  var t;
  let n = (0, l.e7)([I.Z], () => I.Z.questDeliveryOverride, []),
    u = (0, T.GN)(e.questContent),
    A = (0, T.zK)(e.quest, m.S7.IN_HOUSE_CONSOLE_QUEST),
    {
      handleComplete: p,
      handleResetDismissibilityClick: g,
      handleResetStatusClick: f,
      handleOverrideDeliveryClick: O
    } = (0, _.kJ)(e.quest.id),
    R = i.useCallback(() => {
      (0, T.FE)(e.quest, {
        content: e.questContent,
        ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    M = i.useCallback(() => {
      (0, T.f2)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]),
    x = e => (0, a.showToast)((0, a.createToast)(new c.Z(e, e.status).message, a.ToastType.FAILURE));
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, r.Zy)()
    },
    navId: "quests-entry",
    "aria-label": S.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : C.dG,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [!1 === A && (0, s.jsx)(a.MenuItem, {
        id: "play-game",
        label: S.Z.Messages.QUESTS_PLAY_GAME,
        action: R,
        icon: a.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: S.Z.Messages.COPY_LINK,
        action: M,
        icon: a.CopyIcon
      })]
    }, "major-actions"), (0, s.jsxs)(a.MenuGroup, {
      children: [!e.hideLearnMore && (0, s.jsx)(a.MenuItem, {
        id: "learn-more",
        label: S.Z.Messages.QUESTS_LEARN_MORE_V2,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_LEARN_MORE
          }), o.Z.open(h.oAB.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: S.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, N.az)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), u && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: S.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, T.GN)(e.questContent) && (0, E.gl)(e.quest.id, e.questContent)
        },
        subtext: S.Z.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(a.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(a.MenuCheckboxItem, {
        id: "delivery",
        label: "Show in Quest Bar",
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: O
      }), (0, s.jsx)(a.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: g
      }), (0, s.jsx)(a.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: f
      }), (0, s.jsx)(a.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: p
      }), (0, T.$J)(e.quest) && (0, s.jsxs)(a.MenuItem, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, s.jsx)(a.MenuItem, {
          disabled: !0,
          id: "status",
          label: "Status: ".concat((0, T.Bz)(e.quest) ? "alive" : "dead")
        }), (0, s.jsx)(a.MenuItem, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: () => (0, E.CS)(e.quest.id, !0).catch(x)
        }), (0, s.jsx)(a.MenuItem, {
          id: "stop",
          label: "Stop heartbeat",
          action: () => (0, E.is)(e.quest.id).catch(x)
        })]
      })]
    }, "preview-controls")]
  })
}

function p(e) {
  let {
    children: t,
    onOpen: n,
    onClose: l,
    preventIdle: r,
    quest: o,
    questContent: c,
    questContentPosition: E,
    ..._
  } = e, I = i.useCallback(() => {
    (0, d._3)({
      questId: o.id,
      questContent: c,
      questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: E
    }), null != n && n()
  }, [n, o.id, c, E]);
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: I,
    onRequestClose: l,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return r ? (0, s.jsx)(u.Z, {
        children: (0, s.jsx)(A, {
          ..._,
          quest: o,
          questContent: c,
          questContentPosition: E,
          onClose: t
        })
      }) : (0, s.jsx)(A, {
        ..._,
        quest: o,
        questContent: c,
        questContentPosition: E,
        onClose: t
      })
    },
    animation: a.Popout.Animation.NONE,
    children: e => t(e)
  })
}