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
  g = n(569984),
  f = n(497505),
  C = n(918701),
  _ = n(988303),
  h = n(585500),
  E = n(644646),
  S = n(78826),
  T = n(670638),
  v = n(330039),
  N = n(693900),
  j = n(524824),
  A = n(164495),
  B = n(759853),
  b = n(205511),
  y = n(95985),
  R = n(658590),
  I = n(46140),
  q = n(743294),
  U = n(689938),
  O = n(689065);
let M = o.forwardRef(function(e, t) {
  var n;
  let {
children: r,
className: M,
collapsedHeight: k,
isExpanded: P,
isExpansionAnimationComplete: Z,
expansionSpring: Q,
onCtxMenuOpen: w,
onCtxMenuClose: L,
onCtxMenuSelect: W,
overlayRef: D,
quest: V,
useReducedMotion: H,
taskDetails: z
  } = e, G = o.useRef(null), Y = (0, c.e7)([g.Z], () => g.Z.isEnrolling(V.id), [V]), F = (0, x.B6)(V.config.expiresAt), K = o.useMemo(() => (0, C.nP)(V.config.assets.questBarHero), [V]), X = o.useCallback(() => {
(0, m.AH)(V.id, {
  questContent: f.jn.QUEST_BAR_V2,
  questContentCTA: p.jZ.ACCEPT_QUEST
});
  }, [V]), {
primaryVariant: J
  } = _.u.useExperiment({
location: I.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), $ = (null === (n = V.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, ee = P && Z, {
questSupportsConsole: et,
isProgressingOnConsole: en
  } = o.useMemo(() => ({
questSupportsConsole: (0, C.$J)(V),
isProgressingOnConsole: (0, C.Bz)(V)
  }), [V]), es = (0, x.pe)(V), eo = z.percentComplete > 0, er = !en && !i.T.CONSOLE.has(z.taskType) && (es || i.T.DESKTOP.has(z.taskType)), ea = (0, C.ph)(V), el = (0, h.D)({
quest: V,
location: I.dr.QUESTS_BAR,
questContent: f.jn.QUEST_BAR_V2,
taskDetails: z,
useV2Variants: J === _.P.V2 || (0, R.a)(V)
  });
  return (0, s.jsxs)(l.animated.div, {
'aria-hidden': !ee,
className: a()(M, O.contentExpanded, {
  [O.contentInteractable]: ee,
  [O.contentExpandedAccepted]: $
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
    className: a()(O.postEnrollmentBackground, O.postEnrollmentBackgroundCollapsed),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')'),
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
      className: O.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: O.questAcceptedHeader,
          children: [
            (0, s.jsx)(d.Text, {
              variant: 'text-xxs/medium',
              className: a()(O.flex, O.headerText),
              children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: F
              })
            }),
            (0, s.jsx)(T.r, {
              onOpen: w,
              onClose: L,
              onSelect: W,
              questContent: f.jn.QUEST_BAR_V2,
              quest: V,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: O.submenuWrapper,
                'aria-label': U.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a()(O.submenuIcon, O.interactiveNormal)
                })
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: O.divider
        }),
        (0, s.jsx)(B.Z, {
          expansionSpring: Q,
          overlayRef: D,
          progressBarRef: G,
          quest: V,
          isExpanded: P
        }),
        (0, s.jsx)(y.Z, {
          quest: V,
          progressBarRef: G,
          isExpanded: !0,
          taskDetails: z
        }),
        (0, j.r)(V) && (0, s.jsx)(v.Z, {
          style: {
            marginTop: 8
          }
        }),
        (0, s.jsx)(N.n, {
          children: et && !er && (0, s.jsx)(b.Z, {
            quest: V,
            taskDetails: z
          })
        }),
        (0, s.jsx)(N.n, {
          children: (0, s.jsx)(A.y, {
            quest: V,
            useReducedMotion: H,
            isExpanded: P,
            hasMadeProgress: eo
          })
        })
      ]
    }) : (0, s.jsx)('div', {
      children: (0, s.jsxs)('div', {
        className: O.questPromoContent,
        ref: t,
        children: [
          (0, s.jsxs)('div', {
            className: O.details,
            children: [
              (0, s.jsx)(E.Z, {
                className: O.rewardTile,
                learnMoreStyle: 'text',
                quest: V,
                questContent: f.jn.QUEST_BAR_V2,
                location: I.dr.QUESTS_BAR
              }),
              (0, s.jsx)(d.Heading, {
                className: O.title,
                variant: 'heading-md/medium',
                children: U.Z.Messages.QUESTS_TITLE.format({
                  questName: V.config.messages.questName
                })
              }),
              (0, s.jsx)(d.Text, {
                className: O.description,
                variant: 'text-xs/normal',
                children: el
              })
            ]
          }),
          (0, s.jsx)(d.Button, {
            className: O.cta,
            color: d.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: ee ? X : void 0,
            size: d.Button.Sizes.SMALL,
            submitting: Y,
            children: U.Z.Messages.QUESTS_ACCEPT_QUEST
          })
        ]
      })
    })
  }),
  $ ? (0, s.jsx)('div', {
    className: a()(O.postEnrollmentBackground, O.postEnrollmentBackgroundExpanded),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')')
    }
  }) : (0, s.jsxs)(l.animated.div, {
    className: O.heroAssetWrapper,
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
        className: O.heroAssetDarken,
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
        className: O.heroAssetTint,
        style: {
          backgroundColor: V.config.colors.primary,
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
          autoPlay: !H,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: O.heroAsset,
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
          className: O.heroAsset,
          src: ea
        })
      }),
      (0, s.jsx)(l.animated.div, {
        className: O.legibilityGradient,
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
t.Z = M;