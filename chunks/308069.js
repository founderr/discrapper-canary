var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(920906),
  o = n(481060),
  c = n(617136),
  d = n(497505),
  u = n(918701),
  E = n(685613),
  _ = n(670638),
  h = n(341907),
  m = n(898170),
  T = n(689938),
  C = n(247192);
t.Z = e => {
  let {
    quest: t,
    expansionSpring: i,
    onCtxMenuSelect: g,
    onCtxMenuOpen: p,
    onCtxMenuClose: N,
    useReducedMotion: I,
    isExpanded: A,
    isExpansionAnimationComplete: f
  } = e, x = a.useCallback(() => {
    (0, h.az)(t, {
      content: d.jn.QUEST_BAR,
      ctaContent: c.jZ.OPEN_DISCLOSURE
    })
  }, [t]), S = a.useCallback(() => {
    (0, u.FE)(t, {
      content: d.jn.QUEST_BAR,
      ctaContent: c.jZ.OPEN_GAME_LINK
    })
  }, [t]), v = A && f;
  return (0, s.jsxs)(r.animated.div, {
    className: l()(C.wrapper, {
      [C.interactable]: v
    }),
    style: {
      margin: i.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomLeftRadius: i.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomRightRadius: i.to({
        range: [0, 1],
        output: [0, 8]
      }),
      paddingLeft: i.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingRight: i.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingTop: i.to({
        range: [0, 1],
        output: [8, 4]
      }),
      paddingBottom: i.to({
        range: [0, 1],
        output: [8, 4]
      }),
      backdropFilter: i.to([0, 1], [0, 1]).to(e => "blur(".concat(10 * e, "px) brightness(").concat(1 - e / 5, ")"))
    },
    children: [(0, s.jsx)(r.animated.div, {
      className: C.backgroundWrapper,
      style: {
        opacity: i.to({
          range: [0, 1],
          output: [.5, 0]
        }),
        borderBottomLeftRadius: i.to({
          range: [0, 1],
          output: [0, 8]
        }),
        borderBottomRightRadius: i.to({
          range: [0, 1],
          output: [0, 8]
        })
      },
      children: (0, s.jsx)(m.Z, {
        className: C.background,
        animationClassName: C.backgroundAnimation,
        quest: t,
        useReducedMotion: I
      })
    }), (0, s.jsx)(r.animated.img, {
      alt: "",
      className: C.wreathIcon,
      style: {
        opacity: i.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      src: n(858595)
    }), (0, s.jsx)(r.animated.div, {
      style: {
        opacity: i.to({
          range: [0, 1],
          output: [1, v ? 1 : .8]
        }),
        x: i.to({
          range: [0, 1],
          output: [0, -24]
        })
      },
      children: (0, s.jsx)(o.Clickable, {
        onClick: S,
        className: l()({
          [C.logo]: v
        }),
        children: (0, s.jsx)(E.Z, {
          quest: t,
          withGameTile: !1
        })
      })
    }), (0, s.jsx)(r.animated.div, {
      className: C.questAvailable,
      style: {
        opacity: i.to({
          range: [0, 1],
          output: [.7, 0]
        }),
        x: i.to({
          range: [0, 1],
          output: [0, -20]
        })
      },
      children: (0, s.jsx)(o.Text, {
        color: "always-white",
        variant: "text-xs/medium",
        className: C.questAvailableText,
        children: T.Z.Messages.QUEST_AVAILABLE
      })
    }), (0, s.jsxs)(r.animated.div, {
      className: C.promotedBadgeWrapper,
      style: {
        opacity: i.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, s.jsxs)(o.Clickable, {
        className: C.promotedBadge,
        onClick: x,
        children: [(0, s.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: T.Z.Messages.QUESTS_PROMOTED
        }), (0, s.jsx)(o.CircleQuestionIcon, {
          color: o.tokens.colors.WHITE,
          className: C.promotedBadgeIcon
        })]
      }), (0, s.jsx)(_.r, {
        onOpen: p,
        onClose: N,
        onSelect: g,
        questContent: d.jn.QUEST_BAR,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, s.jsx)(o.Clickable, {
          ...e,
          className: C.submenuWrapper,
          "aria-label": T.Z.Messages.ACTIONS,
          children: (0, s.jsx)(o.MoreHorizontalIcon, {
            size: "md",
            color: "currentColor",
            className: l()(C.submenuIcon, C.white)
          })
        })
      })]
    })]
  })
}