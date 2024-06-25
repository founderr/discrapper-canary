var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(920906),
  l = n(481060),
  c = n(617136),
  d = n(497505),
  u = n(918701),
  p = n(685613),
  m = n(670638),
  x = n(341907),
  g = n(898170),
  f = n(689938),
  C = n(247192);
t.Z = e => {
  let {
    quest: t,
    expansionSpring: r,
    onCtxMenuSelect: h,
    onCtxMenuOpen: _,
    onCtxMenuClose: E,
    useReducedMotion: S,
    isExpanded: T,
    isExpansionAnimationComplete: v
  } = e, N = s.useCallback(() => {
    (0, x.az)(t, {
      content: d.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_DISCLOSURE
    })
  }, [t]), j = s.useCallback(() => {
    (0, u.FE)(t, {
      content: d.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_GAME_LINK
    })
  }, [t]), A = T && v;
  return (0, o.jsxs)(i.animated.div, {
    className: a()(C.wrapper, {
      [C.interactable]: A
    }),
    style: {
      margin: r.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomLeftRadius: r.to({
        range: [0, 1],
        output: [0, 8]
      }),
      borderBottomRightRadius: r.to({
        range: [0, 1],
        output: [0, 8]
      }),
      paddingLeft: r.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingRight: r.to({
        range: [0, 1],
        output: [12, 8]
      }),
      paddingTop: r.to({
        range: [0, 1],
        output: [8, 4]
      }),
      paddingBottom: r.to({
        range: [0, 1],
        output: [8, 4]
      }),
      backdropFilter: r.to([0, 1], [0, 1]).to(e => "blur(".concat(10 * e, "px) brightness(").concat(1 - e / 5, ")"))
    },
    children: [(0, o.jsx)(i.animated.div, {
      className: C.backgroundWrapper,
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [.5, 0]
        }),
        borderBottomLeftRadius: r.to({
          range: [0, 1],
          output: [0, 8]
        }),
        borderBottomRightRadius: r.to({
          range: [0, 1],
          output: [0, 8]
        })
      },
      children: (0, o.jsx)(g.Z, {
        className: C.background,
        animationClassName: C.backgroundAnimation,
        quest: t,
        useReducedMotion: S
      })
    }), (0, o.jsx)(i.animated.img, {
      alt: "",
      className: C.wreathIcon,
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      src: n(858595)
    }), (0, o.jsx)(i.animated.div, {
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [1, A ? 1 : .8]
        }),
        x: r.to({
          range: [0, 1],
          output: [0, -24]
        })
      },
      children: (0, o.jsx)(l.Clickable, {
        onClick: j,
        className: a()({
          [C.logo]: A
        }),
        children: (0, o.jsx)(p.Z, {
          quest: t,
          withGameTile: !1
        })
      })
    }), (0, o.jsx)(i.animated.div, {
      className: C.questAvailable,
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [.7, 0]
        }),
        x: r.to({
          range: [0, 1],
          output: [0, -20]
        })
      },
      children: (0, o.jsx)(l.Text, {
        color: "always-white",
        variant: "text-xs/medium",
        className: C.questAvailableText,
        children: f.Z.Messages.QUEST_AVAILABLE
      })
    }), (0, o.jsxs)(i.animated.div, {
      className: C.promotedBadgeWrapper,
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, o.jsxs)(l.Clickable, {
        className: C.promotedBadge,
        onClick: N,
        children: [(0, o.jsx)(l.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: f.Z.Messages.QUESTS_PROMOTED
        }), (0, o.jsx)(l.CircleQuestionIcon, {
          color: l.tokens.colors.WHITE,
          className: C.promotedBadgeIcon
        })]
      }), (0, o.jsx)(m.r, {
        onOpen: _,
        onClose: E,
        onSelect: h,
        questContent: d.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, o.jsx)(l.Clickable, {
          ...e,
          className: C.submenuWrapper,
          "aria-label": f.Z.Messages.ACTIONS,
          children: (0, o.jsx)(l.MoreHorizontalIcon, {
            size: "md",
            color: "currentColor",
            className: a()(C.submenuIcon, C.white)
          })
        })
      })]
    })]
  })
}