"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("289987"),
  u = s("481060"),
  d = s("808268"),
  c = s("617136"),
  E = s("497505"),
  f = s("918701"),
  _ = s("685613"),
  h = s("670638"),
  C = s("341907"),
  m = s("898170"),
  T = s("689938"),
  g = s("682396");
t.default = e => {
  let {
    quest: t,
    expansionSpring: l,
    onCtxMenuSelect: p,
    onCtxMenuOpen: A,
    onCtxMenuClose: N,
    useReducedMotion: S,
    isExpanded: I,
    isExpansionAnimationComplete: x
  } = e, R = a.useCallback(() => {
    (0, C.openDisclosureModal)(t, {
      content: E.QuestContent.QUEST_BAR,
      ctaContent: c.QuestContentCTA.OPEN_DISCLOSURE
    })
  }, [t]), v = a.useCallback(() => {
    (0, f.openGameLink)(t, {
      content: E.QuestContent.QUEST_BAR,
      ctaContent: c.QuestContentCTA.OPEN_GAME_LINK
    })
  }, [t]), M = I && x;
  return (0, n.jsxs)(r.animated.div, {
    className: i()(g.wrapper, {
      [g.interactable]: M
    }),
    style: {
      margin: l.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomLeftRadius: l.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomRightRadius: l.to({
        range: [0, 1],
        output: [0, 8]
      }),
      paddingLeft: l.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingRight: l.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingTop: l.to({
        range: [0, 1],
        output: [8, 4]
      }),
      paddingBottom: l.to({
        range: [0, 1],
        output: [8, 4]
      }),
      backdropFilter: l.to([0, 1], [0, 1]).to(e => "blur(".concat(10 * e, "px) brightness(").concat(1 - e / 5, ")"))
    },
    children: [(0, n.jsx)(r.animated.div, {
      className: g.backgroundWrapper,
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [.5, 0]
        }),
        borderBottomLeftRadius: l.to({
          range: [0, 1],
          output: [0, 8]
        }),
        borderBottomRightRadius: l.to({
          range: [0, 1],
          output: [0, 8]
        })
      },
      children: (0, n.jsx)(m.QuestBarBackgroundAnimation, {
        className: g.background,
        animationClassName: g.backgroundAnimation,
        quest: t,
        useReducedMotion: S
      })
    }), (0, n.jsx)(r.animated.img, {
      alt: "",
      className: g.wreathIcon,
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      src: s("858595")
    }), (0, n.jsx)(r.animated.div, {
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [1, M ? 1 : .8]
        }),
        x: l.to({
          range: [0, 1],
          output: [0, -24]
        })
      },
      children: (0, n.jsx)(u.Clickable, {
        onClick: v,
        className: i()({
          [g.logo]: M
        }),
        children: (0, n.jsx)(_.default, {
          quest: t,
          withGameTile: !1
        })
      })
    }), (0, n.jsx)(r.animated.div, {
      className: g.questAvailable,
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [.7, 0]
        }),
        x: l.to({
          range: [0, 1],
          output: [0, -20]
        })
      },
      children: (0, n.jsx)(u.Text, {
        color: "always-white",
        variant: "text-xs/medium",
        className: g.questAvailableText,
        children: T.default.Messages.QUEST_AVAILABLE
      })
    }), (0, n.jsxs)(r.animated.div, {
      className: g.promotedBadgeWrapper,
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, n.jsxs)(u.Clickable, {
        className: g.promotedBadge,
        onClick: R,
        children: [(0, n.jsx)(u.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: T.default.Messages.QUESTS_PROMOTED
        }), (0, n.jsx)(o.CircleQuestionIcon, {
          color: u.tokens.colors.WHITE,
          className: g.promotedBadgeIcon
        })]
      }), (0, n.jsx)(h.QuestsEntryContextMenuPopout, {
        onOpen: A,
        onClose: N,
        onSelect: p,
        questContent: E.QuestContent.QUEST_BAR,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, n.jsx)(u.Clickable, {
          ...e,
          className: g.submenuWrapper,
          "aria-label": T.default.Messages.ACTIONS,
          children: (0, n.jsx)(d.default, {
            className: i()(g.submenuIcon, g.white)
          })
        })
      })]
    })]
  })
}