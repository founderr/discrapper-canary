var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(920906),
  i = n(481060),
  c = n(617136),
  u = n(497505),
  d = n(918701),
  p = n(685613),
  x = n(670638),
  m = n(341907),
  g = n(898170),
  C = n(689938),
  h = n(247192);
t.Z = e => {
  let {
    quest: t,
    expansionSpring: a,
    onCtxMenuSelect: S,
    onCtxMenuOpen: E,
    onCtxMenuClose: f,
    useReducedMotion: v,
    isExpanded: T,
    isExpansionAnimationComplete: N
  } = e, j = o.useCallback(() => {
    (0, m.az)(t, {
      content: u.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_DISCLOSURE
    })
  }, [t]), _ = o.useCallback(() => {
    (0, d.FE)(t, {
      content: u.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_GAME_LINK
    })
  }, [t]), A = T && N;
  return (0, s.jsxs)(l.animated.div, {
    className: r()(h.wrapper, {
      [h.interactable]: A
    }),
    style: {
      margin: a.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomLeftRadius: a.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomRightRadius: a.to({
        range: [0, 1],
        output: [0, 8]
      }),
      paddingLeft: a.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingRight: a.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingTop: a.to({
        range: [0, 1],
        output: [8, 4]
      }),
      paddingBottom: a.to({
        range: [0, 1],
        output: [8, 4]
      }),
      backdropFilter: a.to([0, 1], [0, 1]).to(e => "blur(".concat(10 * e, "px) brightness(").concat(1 - e / 5, ")"))
    },
    children: [(0, s.jsx)(l.animated.div, {
      className: h.backgroundWrapper,
      style: {
        opacity: a.to({
          range: [0, 1],
          output: [.5, 0]
        }),
        borderBottomLeftRadius: a.to({
          range: [0, 1],
          output: [0, 8]
        }),
        borderBottomRightRadius: a.to({
          range: [0, 1],
          output: [0, 8]
        })
      },
      children: (0, s.jsx)(g.Z, {
        className: h.background,
        animationClassName: h.backgroundAnimation,
        quest: t,
        useReducedMotion: v
      })
    }), (0, s.jsx)(l.animated.img, {
      alt: "",
      className: h.wreathIcon,
      style: {
        opacity: a.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      src: n(858595)
    }), (0, s.jsx)(l.animated.div, {
      style: {
        opacity: a.to({
          range: [0, 1],
          output: [1, A ? 1 : .8]
        }),
        x: a.to({
          range: [0, 1],
          output: [0, -24]
        })
      },
      children: (0, s.jsx)(i.Clickable, {
        onClick: _,
        className: r()({
          [h.logo]: A
        }),
        children: (0, s.jsx)(p.Z, {
          quest: t,
          withGameTile: !1
        })
      })
    }), (0, s.jsx)(l.animated.div, {
      className: h.questAvailable,
      style: {
        opacity: a.to({
          range: [0, 1],
          output: [.7, 0]
        }),
        x: a.to({
          range: [0, 1],
          output: [0, -20]
        })
      },
      children: (0, s.jsx)(i.Text, {
        color: "always-white",
        variant: "text-xs/medium",
        className: h.questAvailableText,
        children: C.Z.Messages.QUEST_AVAILABLE
      })
    }), (0, s.jsxs)(l.animated.div, {
      className: h.promotedBadgeWrapper,
      style: {
        opacity: a.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, s.jsxs)(i.Clickable, {
        className: h.promotedBadge,
        onClick: j,
        children: [(0, s.jsx)(i.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: C.Z.Messages.QUESTS_PROMOTED
        }), (0, s.jsx)(i.CircleQuestionIcon, {
          color: i.tokens.colors.WHITE,
          className: h.promotedBadgeIcon
        })]
      }), (0, s.jsx)(x.r, {
        onOpen: E,
        onClose: f,
        onSelect: S,
        questContent: u.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, s.jsx)(i.Clickable, {
          ...e,
          className: h.submenuWrapper,
          "aria-label": C.Z.Messages.ACTIONS,
          children: (0, s.jsx)(i.MoreHorizontalIcon, {
            size: "md",
            color: "currentColor",
            className: r()(h.submenuIcon, h.white)
          })
        })
      })]
    })]
  })
}