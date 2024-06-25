n.d(t, {
  r: function() {
    return f
  }
});
var s = n(735250),
  o = n(470079),
  i = n(442837),
  a = n(481060),
  l = n(239091),
  r = n(230711),
  u = n(479531),
  c = n(390322),
  d = n(617136),
  C = n(272008),
  m = n(113434),
  E = n(569984),
  p = n(918701),
  x = n(341907),
  _ = n(46140),
  T = n(981631),
  q = n(231338),
  S = n(689938);

function h(e) {
  var t;
  let n = (0, i.e7)([E.Z], () => E.Z.questDeliveryOverride, []),
    c = (0, p.GN)(e.questContent),
    h = (0, p.zK)(e.quest, _.S7.IN_HOUSE_CONSOLE_QUEST),
    {
      handleComplete: f,
      handleResetDismissibilityClick: N,
      handleResetStatusClick: j,
      handleOverrideDeliveryClick: M
    } = (0, m.kJ)(e.quest.id),
    I = o.useCallback(() => {
      (0, p.FE)(e.quest, {
        content: e.questContent,
        ctaContent: d.jZ.CONTEXT_MENU_OPEN_GAME_LINK
      })
    }, [e.quest, e.questContent]),
    g = o.useCallback(() => {
      (0, p.f2)(e.quest.id, {
        content: e.questContent,
        position: e.questContentPosition,
        ctaContent: d.jZ.CONTEXT_MENU_COPY_LINK
      })
    }, [e.quest, e.questContent, e.questContentPosition]),
    b = e => (0, a.showToast)((0, a.createToast)(new u.Z(e, e.status).message, a.ToastType.FAILURE));
  return (0, s.jsxs)(a.Menu, {
    variant: "fixed",
    onSelect: () => {
      null != e.onSelect ? e.onSelect() : (0, l.Zy)()
    },
    navId: "quests-entry",
    "aria-label": S.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: null !== (t = null == e ? void 0 : e.onClose) && void 0 !== t ? t : q.dG,
    children: [(0, s.jsxs)(a.MenuGroup, {
      children: [!1 === h && (0, s.jsx)(a.MenuItem, {
        id: "play-game",
        label: S.Z.Messages.QUESTS_GET_THIS_GAME,
        action: I,
        icon: a.LinkExternalMediumIcon
      }), !0 === e.showShareLink && (0, s.jsx)(a.MenuItem, {
        id: "share-link",
        label: S.Z.Messages.COPY_LINK,
        action: g,
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
          }), r.Z.open(T.oAB.INVENTORY)
        }
      }), e.shouldShowDisclosure && (0, s.jsx)(a.MenuItem, {
        id: "display-disclosure",
        label: S.Z.Messages.QUESTS_DISCLOSURE_LABEL,
        action: () => {
          (0, x.az)(e.quest, {
            content: e.questContent,
            position: e.questContentPosition,
            ctaContent: d.jZ.CONTEXT_MENU_OPEN_DISCLOSURE
          })
        }
      }), c && (0, s.jsx)(a.MenuItem, {
        id: "hide-entrypoint",
        label: S.Z.Messages.QUESTS_HIDE_THIS,
        action: () => {
          (0, d._3)({
            questId: e.quest.id,
            questContent: e.questContent,
            questContentPosition: e.questContentPosition,
            questContentCTA: d.jZ.CONTEXT_MENU_HIDE_CONTENT
          }), (0, p.GN)(e.questContent) && (0, C.gl)(e.quest.id, e.questContent)
        },
        subtext: S.Z.Messages.QUESTS_FIND_QUEST
      })]
    }, "minor-actions"), e.quest.preview && (0, s.jsxs)(a.MenuGroup, {
      label: "Preview Controls",
      children: [(0, s.jsx)(a.MenuCheckboxItem, {
        id: "delivery",
        label: "Show in Quest Bar",
        checked: (null == n ? void 0 : n.id) === e.quest.id,
        action: M
      }), (0, s.jsx)(a.MenuItem, {
        id: "dismiss",
        label: "Reset Dismissibility",
        action: N
      }), (0, s.jsx)(a.MenuItem, {
        id: "enrollment",
        label: "Reset Quest",
        action: j
      }), (0, s.jsx)(a.MenuItem, {
        id: "complete",
        label: "Complete Quest",
        action: f
      }), (0, p.$J)(e.quest) && (0, s.jsxs)(a.MenuItem, {
        id: "console",
        label: "Console Heartbeat",
        children: [(0, s.jsx)(a.MenuItem, {
          disabled: !0,
          id: "status",
          label: "Status: ".concat((0, p.Bz)(e.quest) ? "alive" : "dead")
        }), (0, s.jsx)(a.MenuItem, {
          id: "start",
          label: "Start heartbeat (cheatmode)",
          action: () => (0, C.CS)(e.quest.id, !0).catch(b)
        }), (0, s.jsx)(a.MenuItem, {
          id: "stop",
          label: "Stop heartbeat",
          action: () => (0, C.is)(e.quest.id).catch(b)
        })]
      })]
    }, "preview-controls")]
  })
}

function f(e) {
  let {
    children: t,
    onOpen: n,
    onClose: i,
    preventIdle: l,
    quest: r,
    questContent: u,
    questContentPosition: C,
    ...m
  } = e, E = o.useCallback(() => {
    (0, d._3)({
      questId: r.id,
      questContent: u,
      questContentCTA: d.jZ.OPEN_CONTEXT_MENU,
      questContentPosition: C
    }), null != n && n()
  }, [n, r.id, u, C]);
  return (0, s.jsx)(a.Popout, {
    onRequestOpen: E,
    onRequestClose: i,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return l ? (0, s.jsx)(c.Z, {
        children: (0, s.jsx)(h, {
          ...m,
          quest: r,
          questContent: u,
          questContentPosition: C,
          onClose: t
        })
      }) : (0, s.jsx)(h, {
        ...m,
        quest: r,
        questContent: u,
        questContentPosition: C,
        onClose: t
      })
    },
    animation: a.Popout.Animation.NONE,
    children: e => t(e)
  })
}