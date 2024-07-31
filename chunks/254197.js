var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(754700),
  c = n(442837),
  d = n(481060),
  u = n(810090),
  p = n(617136),
  m = n(272008),
  x = n(113434),
  f = n(569984),
  g = n(497505),
  C = n(918701),
  _ = n(988303),
  h = n(585500),
  E = n(644646),
  S = n(78826),
  T = n(670638),
  v = n(330039),
  A = n(693900),
  N = n(524824),
  j = n(164495),
  B = n(759853),
  b = n(205511),
  R = n(95985),
  y = n(658590),
  I = n(46140),
  U = n(743294),
  q = n(689938),
  M = n(689065);
let O = o.forwardRef(function(e, t) {
  var n;
  let {
children: r,
className: O,
collapsedHeight: k,
isExpanded: P,
isExpansionAnimationComplete: Z,
expansionSpring: Q,
onCtxMenuOpen: w,
onCtxMenuClose: L,
onCtxMenuSelect: W,
overlayRef: D,
quest: H,
useReducedMotion: V,
taskDetails: z
  } = e, G = o.useRef(null), F = (0, c.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]), Y = (0, x.B6)(H.config.expiresAt), K = o.useMemo(() => (0, C.nP)(H.config.assets.questBarHero), [H]), X = o.useCallback(() => {
(0, m.AH)(H.id, {
  questContent: g.jn.QUEST_BAR_V2,
  questContentCTA: p.jZ.ACCEPT_QUEST
});
  }, [H]), {
primaryVariant: J
  } = _.u.useExperiment({
location: I.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), $ = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, ee = P && Z, {
questSupportsConsole: et,
isProgressingOnConsole: en
  } = o.useMemo(() => ({
questSupportsConsole: (0, C.$J)(H),
isProgressingOnConsole: (0, C.Bz)(H)
  }), [H]), es = (0, x.pe)(H), eo = z.percentComplete > 0, er = !en && !i.T.CONSOLE.has(z.taskType) && (es || i.T.DESKTOP.has(z.taskType)), ea = (0, C.ph)(H), el = (0, h.D)({
quest: H,
location: I.dr.QUESTS_BAR,
questContent: g.jn.QUEST_BAR_V2,
taskDetails: z,
useV2Variants: J === _.P.V2 || (0, y.a)(H)
  });
  return (0, s.jsxs)(l.animated.div, {
'aria-hidden': !ee,
className: a()(O, M.contentExpanded, {
  [M.contentInteractable]: ee,
  [M.contentExpandedAccepted]: $
}),
style: {
  transform: (0, l.to)([
    Q.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        -100
      ]
    }),
    Q.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        k
      ]
    })
  ], (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))'))
},
children: [
  $ && (0, s.jsx)(l.animated.div, {
    className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundCollapsed),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')'),
      opacity: Q.to({
        range: [
          0,
          1
        ],
        output: [
          1,
          0
        ]
      })
    }
  }),
  r,
  (0, s.jsx)(l.animated.div, {
    style: {
      opacity: 1
    },
    children: $ ? (0, s.jsxs)('div', {
      className: M.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: M.questAcceptedHeader,
          children: [
            (0, s.jsx)(d.Text, {
              variant: 'text-xxs/medium',
              className: a()(M.flex, M.headerText),
              children: q.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: Y
              })
            }),
            (0, s.jsx)(T.r, {
              onOpen: w,
              onClose: L,
              onSelect: W,
              questContent: g.jn.QUEST_BAR_V2,
              quest: H,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: M.submenuWrapper,
                'aria-label': q.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a()(M.submenuIcon, M.interactiveNormal)
                })
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: M.divider
        }),
        (0, s.jsx)(B.Z, {
          expansionSpring: Q,
          overlayRef: D,
          progressBarRef: G,
          quest: H,
          isExpanded: P
        }),
        (0, s.jsx)(R.Z, {
          quest: H,
          progressBarRef: G,
          isExpanded: !0,
          taskDetails: z
        }),
        (0, N.r)(H) && (0, s.jsx)(v.Z, {
          style: {
            marginTop: 8
          }
        }),
        (0, s.jsx)(A.n, {
          children: et && !er && (0, s.jsx)(b.Z, {
            quest: H,
            taskDetails: z
          })
        }),
        (0, s.jsx)(A.n, {
          children: (0, s.jsx)(j.y, {
            quest: H,
            useReducedMotion: V,
            isExpanded: P,
            hasMadeProgress: eo
          })
        })
      ]
    }) : (0, s.jsx)('div', {
      children: (0, s.jsxs)('div', {
        className: M.questPromoContent,
        ref: t,
        children: [
          (0, s.jsxs)('div', {
            className: M.details,
            children: [
              (0, s.jsx)(E.Z, {
                className: M.rewardTile,
                learnMoreStyle: 'text',
                quest: H,
                questContent: g.jn.QUEST_BAR_V2,
                location: I.dr.QUESTS_BAR
              }),
              (0, s.jsx)(d.Heading, {
                className: M.title,
                variant: 'heading-md/medium',
                children: q.Z.Messages.QUESTS_TITLE.format({
                  questName: H.config.messages.questName
                })
              }),
              (0, s.jsx)(d.Text, {
                className: M.description,
                variant: 'text-xs/normal',
                children: el
              })
            ]
          }),
          (0, s.jsx)(d.Button, {
            className: M.cta,
            color: d.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: ee ? X : void 0,
            size: d.Button.Sizes.SMALL,
            submitting: F,
            children: q.Z.Messages.QUESTS_ACCEPT_QUEST
          })
        ]
      })
    })
  }),
  $ ? (0, s.jsx)('div', {
    className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundExpanded),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')')
    }
  }) : (0, s.jsxs)(l.animated.div, {
    className: M.heroAssetWrapper,
    style: {
      backdropFilter: Q.to([
        0,
        1
      ], [
        5,
        0
      ]).to(e => 'blur('.concat(e, 'px)')),
      filter: Q.to([
        0,
        1
      ], [
        0.8,
        1
      ]).to(e => 'brightness('.concat(e, ')'))
    },
    children: [
      (0, s.jsx)(l.animated.div, {
        className: M.heroAssetDarken,
        style: {
          opacity: Q.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      (0, s.jsx)(l.animated.div, {
        className: M.heroAssetTint,
        style: {
          backgroundColor: H.config.colors.primary,
          opacity: Q.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      K ? (0, s.jsx)(S.Fl, {
        id: 'QuestBarV2ContentExpanded_heroAnimated',
        children: e => (0, s.jsx)(u.Z, {
          ref: e,
          autoPlay: !V,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: M.heroAsset,
          controls: !1,
          children: (0, s.jsx)('source', {
            src: ea,
            type: (0, C.mN)(ea)
          })
        })
      }) : (0, s.jsx)(S.Fl, {
        id: 'QuestBarV2ContentExpanded_heroStatic',
        children: e => (0, s.jsx)('img', {
          ref: e,
          alt: '',
          className: M.heroAsset,
          src: ea
        })
      }),
      (0, s.jsx)(l.animated.div, {
        className: M.legibilityGradient,
        style: {
          opacity: Q.to({
            range: [
              0,
              1
            ],
            output: [
              0,
              1
            ]
          })
        }
      })
    ]
  })
]
  });
});
t.Z = O;