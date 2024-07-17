var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(338545),
  l = n(481060),
  c = n(617136),
  d = n(497505),
  u = n(918701),
  p = n(685613),
  x = n(670638),
  m = n(341907),
  g = n(898170),
  C = n(689938),
  _ = n(560594);
t.Z = e => {
  let {
quest: t,
expansionSpring: r,
onCtxMenuSelect: f,
onCtxMenuOpen: h,
onCtxMenuClose: E,
useReducedMotion: T,
isExpanded: S,
isExpansionAnimationComplete: N
  } = e, A = o.useCallback(() => {
(0, m.az)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_DISCLOSURE
});
  }, [t]), v = o.useCallback(() => {
(0, u.FE)(t, {
  content: d.jn.QUEST_BAR_V2,
  ctaContent: c.jZ.OPEN_GAME_LINK
});
  }, [t]), j = S && N;
  return (0, s.jsxs)(i.animated.div, {
className: a()(_.wrapper, {
  [_.interactable]: j
}),
style: {
  margin: r.to({
    range: [
      0,
      1
    ],
    output: [
      0,
      8
    ]
  }),
  borderBottomLeftRadius: r.to({
    range: [
      0,
      1
    ],
    output: [
      0,
      8
    ]
  }),
  borderBottomRightRadius: r.to({
    range: [
      0,
      1
    ],
    output: [
      0,
      8
    ]
  }),
  paddingLeft: r.to({
    range: [
      0,
      1
    ],
    output: [
      12,
      8
    ]
  }),
  paddingRight: r.to({
    range: [
      0,
      1
    ],
    output: [
      12,
      8
    ]
  }),
  paddingTop: r.to({
    range: [
      0,
      1
    ],
    output: [
      8,
      4
    ]
  }),
  paddingBottom: r.to({
    range: [
      0,
      1
    ],
    output: [
      8,
      4
    ]
  }),
  backdropFilter: r.to([
    0,
    1
  ], [
    0,
    1
  ]).to(e => 'blur('.concat(10 * e, 'px) brightness(').concat(1 - e / 5, ')'))
},
children: [
  (0, s.jsx)(i.animated.div, {
    className: _.backgroundWrapper,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          0.5,
          0
        ]
      }),
      borderBottomLeftRadius: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          8
        ]
      }),
      borderBottomRightRadius: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          8
        ]
      })
    },
    children: (0, s.jsx)(g.Z, {
      className: _.background,
      animationClassName: _.backgroundAnimation,
      quest: t,
      useReducedMotion: T
    })
  }),
  (0, s.jsx)(i.animated.img, {
    alt: '',
    className: _.wreathIcon,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          1,
          0
        ]
      })
    },
    src: n(858595)
  }),
  (0, s.jsx)(i.animated.div, {
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          1,
          j ? 1 : 0.8
        ]
      }),
      x: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          -24
        ]
      })
    },
    children: (0, s.jsx)(l.Clickable, {
      onClick: v,
      className: a()({
        [_.logo]: j
      }),
      children: (0, s.jsx)(p.Z, {
        quest: t,
        withGameTile: !1
      })
    })
  }),
  (0, s.jsx)(i.animated.div, {
    className: _.questAvailable,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          0.7,
          0
        ]
      }),
      x: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          -20
        ]
      })
    },
    children: (0, s.jsx)(l.Text, {
      color: 'always-white',
      variant: 'text-xs/medium',
      className: _.questAvailableText,
      children: C.Z.Messages.QUEST_AVAILABLE
    })
  }),
  (0, s.jsxs)(i.animated.div, {
    className: _.promotedBadgeWrapper,
    style: {
      opacity: r.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          1
        ]
      })
    },
    children: [
      (0, s.jsxs)(l.Clickable, {
        className: _.promotedBadge,
        onClick: A,
        children: [
          (0, s.jsx)(l.Text, {
            color: 'always-white',
            variant: 'text-xs/normal',
            children: C.Z.Messages.QUESTS_PROMOTED
          }),
          (0, s.jsx)(l.CircleQuestionIcon, {
            color: l.tokens.colors.WHITE,
            className: _.promotedBadgeIcon
          })
        ]
      }),
      (0, s.jsx)(x.r, {
        onOpen: h,
        onClose: E,
        onSelect: f,
        questContent: d.jn.QUEST_BAR_V2,
        quest: t,
        shouldShowDisclosure: !0,
        showShareLink: !0,
        children: e => (0, s.jsx)(l.Clickable, {
          ...e,
          className: _.submenuWrapper,
          'aria-label': C.Z.Messages.ACTIONS,
          children: (0, s.jsx)(l.MoreHorizontalIcon, {
            size: 'md',
            color: 'currentColor',
            className: a()(_.submenuIcon, _.white)
          })
        })
      })
    ]
  })
]
  });
};