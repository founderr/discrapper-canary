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
  C = n(689938),
  f = n(247192);
t.Z = e => {
  let {
    quest: t,
    expansionSpring: r,
    onCtxMenuSelect: h,
    onCtxMenuOpen: _,
    onCtxMenuClose: E,
    useReducedMotion: S,
    isExpanded: T,
    isExpansionAnimationComplete: N
  } = e, v = s.useCallback(() => {
    (0, x.a)(t, {
      content: d.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_DISCLOSURE
    })
  }, [t]), A = s.useCallback(() => {
    (0, u.FE)(t, {
      content: d.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_GAME_LINK
    })
  }, [t]), j = T && N;
  return (0, o.jsxs)(i.animated.div, {
    className: a()(f.wrapper, {
      [f.interactable]: j
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
      className: f.backgroundWrapper,
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
        className: f.background,
        animationClassName: f.backgroundAnimation,
        quest: t,
        useReducedMotion: S
      })
    }), (0, o.jsx)(i.animated.img, {
      alt: "",
      className: f.wreathIcon,
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
          output: [1, j ? 1 : .8]
        }),
        x: r.to({
          range: [0, 1],
          output: [0, -24]
        })
      },
      children: (0, o.jsx)(l.Clickable, {
        onClick: A,
        className: a()({
          [f.logo]: j
        }),
        children: (0, o.jsx)(p.Z, {
          quest: t,
          withGameTile: !1
        })
      })
    }), (0, o.jsx)(i.animated.div, {
      className: f.questAvailable,
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
        className: f.questAvailableText,
        children: C.Z.Messages.QUEST_AVAILABLE
      })
    }), (0, o.jsxs)(i.animated.div, {
      className: f.promotedBadgeWrapper,
      style: {
        opacity: r.to({
          range: [0, 1],
          output: [0, 1]
        })
      },
      children: [(0, o.jsxs)(l.Clickable, {
        className: f.promotedBadge,
        onClick: v,
        children: [(0, o.jsx)(l.Text, {
          color: "always-white",
          variant: "text-xs/normal",
          children: C.Z.Messages.QUESTS_PROMOTED
        }), (0, o.jsx)(l.CircleQuestionIcon, {
          color: l.tokens.colors.WHITE,
          className: f.promotedBadgeIcon
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
          className: f.submenuWrapper,
          "aria-label": C.Z.Messages.ACTIONS,
          children: (0, o.jsx)(l.MoreHorizontalIcon, {
            size: "md",
            color: "currentColor",
            className: a()(f.submenuIcon, f.white)
          })
        })
      })]
    })]
  })
}