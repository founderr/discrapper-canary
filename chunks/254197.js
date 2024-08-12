n(47120), n(627341);
var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(338545),
  i = n(278074),
  c = n(442837),
  d = n(481060),
  u = n(70097),
  p = n(358085),
  m = n(617136),
  x = n(272008),
  g = n(113434),
  f = n(569984),
  C = n(497505),
  _ = n(918701),
  h = n(988303),
  E = n(665430),
  S = n(585500),
  T = n(644646),
  v = n(78826),
  N = n(670638),
  j = n(693900),
  A = n(164495),
  B = n(759853),
  b = n(205511),
  R = n(95985),
  y = n(50476),
  I = n(658590),
  k = n(740697),
  O = n(46140),
  M = n(743294),
  U = n(689938),
  q = n(689065);
let L = o.forwardRef(function(e, t) {
  var n, r;
  let {
children: L,
className: Z,
collapsedHeight: P,
isExpanded: Q,
isExpansionAnimationComplete: w,
expansionSpring: W,
onCtxMenuOpen: D,
onCtxMenuClose: H,
onCtxMenuSelect: V,
overlayRef: z,
quest: G,
useReducedMotion: F,
taskDetails: Y
  } = e, K = o.useRef(null), X = (0, c.e7)([f.Z], () => f.Z.isEnrolling(G.id), [G]), J = (0, g.B6)(G.config.expiresAt), $ = o.useMemo(() => (0, _.nP)(G.config.assets.questBarHero), [G]), ee = o.useCallback(() => {
(0, x.AH)(G.id, {
  questContent: C.jn.QUEST_BAR_V2,
  questContentCTA: m.jZ.ACCEPT_QUEST
});
  }, [G]), et = (0, E.p)({
location: O.dr.QUESTS_BAR
  }), {
primaryVariant: en
  } = h.u.useExperiment({
location: O.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), es = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, eo = (null === (r = G.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, er = Q && w, ea = (0, g._s)({
quest: G
  }), el = Y.percentComplete > 0, ei = (0, g.z)(G), [ec, ed, eu] = (0, g.me)(G, Y), ep = (0, _.ph)(G), em = (0, S.D)({
quest: G,
location: O.dr.QUESTS_BAR,
questContent: C.jn.QUEST_BAR_V2,
taskDetails: Y,
useV2Variants: en === h.P.V2 || (0, I.a)(G)
  });
  return (0, s.jsxs)(l.animated.div, {
'aria-hidden': !er,
className: a()(Z, q.contentExpanded, {
  [q.contentInteractable]: er,
  [q.contentExpandedAccepted]: es
}),
style: {
  transform: (0, l.to)([
    W.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        -100
      ]
    }),
    W.to({
      range: [
        0,
        1
      ],
      output: [
        0,
        P
      ]
    })
  ], (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))'))
},
children: [
  es && (0, s.jsx)(l.animated.div, {
    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundCollapsed),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')'),
      opacity: W.to({
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
  L,
  (0, s.jsx)(l.animated.div, {
    style: {
      opacity: 1
    },
    children: es ? (0, s.jsxs)('div', {
      className: q.questAcceptedContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: q.questAcceptedHeader,
          children: [
            (0, s.jsx)(d.Text, {
              variant: 'text-xxs/medium',
              className: a()(q.flex, q.headerText),
              children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: J
              })
            }),
            (0, s.jsx)(N.r, {
              onOpen: D,
              onClose: H,
              onSelect: V,
              questContent: C.jn.QUEST_BAR_V2,
              quest: G,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: q.submenuWrapper,
                'aria-label': U.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: a()(q.submenuIcon, q.interactiveNormal)
                })
              })
            })
          ]
        }),
        (0, s.jsx)('div', {
          className: q.divider
        }),
        (0, s.jsx)(B.Z, {
          expansionSpring: W,
          overlayRef: z,
          progressBarRef: K,
          quest: G,
          isExpanded: Q
        }),
        (0, s.jsx)(R.Z, {
          contentLocation: 'expanded',
          quest: G,
          progressBarRef: K,
          isExpanded: !0,
          taskDetails: Y,
          activeScreen: ec
        }),
        (0, s.jsx)(j.n, {
          children: !eo && (0, i.EQ)(ec).with(C.LI.SELECT, () => (0, s.jsx)(y.Z, {
            onConsole: () => eu(O.cd.CONSOLE),
            onDesktop: () => eu(O.cd.DESKTOP)
          })).with(C.LI.DESKTOP, () => (0, p.isWeb)() && et && (0, s.jsx)(k.Z, {})).with(C.LI.CONSOLE, () => (0, s.jsx)(b.Z, {
            quest: G,
            taskDetails: Y
          })).exhaustive()
        }),
        (0, s.jsx)(j.n, {
          children: (0, s.jsx)(A.y, {
            quest: G,
            useReducedMotion: F,
            isExpanded: Q,
            awaitingConsoleConnections: ea,
            hasMadeProgress: el,
            isProgressing: ei,
            activeScreen: ec,
            showBackButton: ec !== C.LI.SELECT && ed.length > 1 && !el && !ei && et,
            onBack: () => eu(null)
          })
        })
      ]
    }) : (0, s.jsx)('div', {
      children: (0, s.jsxs)('div', {
        className: q.questPromoContent,
        ref: t,
        children: [
          (0, s.jsxs)('div', {
            className: q.details,
            children: [
              (0, s.jsx)(T.Z, {
                className: q.rewardTile,
                learnMoreStyle: 'text',
                quest: G,
                questContent: C.jn.QUEST_BAR_V2,
                location: O.dr.QUESTS_BAR
              }),
              (0, s.jsx)(d.Heading, {
                className: q.title,
                variant: 'heading-md/medium',
                children: U.Z.Messages.QUESTS_TITLE.format({
                  questName: G.config.messages.questName
                })
              }),
              (0, s.jsx)(d.Text, {
                className: q.description,
                variant: 'text-xs/normal',
                children: em
              })
            ]
          }),
          (0, s.jsx)(d.Button, {
            className: q.cta,
            color: d.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: er ? ee : void 0,
            size: d.Button.Sizes.SMALL,
            submitting: X,
            children: U.Z.Messages.QUESTS_ACCEPT_QUEST
          })
        ]
      })
    })
  }),
  es ? (0, s.jsx)('div', {
    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundExpanded),
    style: {
      backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')')
    }
  }) : (0, s.jsxs)(l.animated.div, {
    className: q.heroAssetWrapper,
    style: {
      backdropFilter: W.to([
        0,
        1
      ], [
        5,
        0
      ]).to(e => 'blur('.concat(e, 'px)')),
      filter: W.to([
        0,
        1
      ], [
        0.8,
        1
      ]).to(e => 'brightness('.concat(e, ')'))
    },
    children: [
      (0, s.jsx)(l.animated.div, {
        className: q.heroAssetDarken,
        style: {
          opacity: W.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      (0, s.jsx)(l.animated.div, {
        className: q.heroAssetTint,
        style: {
          backgroundColor: G.config.colors.primary,
          opacity: W.to([
            0,
            1
          ], [
            1,
            0
          ])
        }
      }),
      $ ? (0, s.jsx)(v.Fl, {
        id: 'QuestBarV2ContentExpanded_heroAnimated',
        children: e => (0, s.jsx)(u.Z, {
          ref: e,
          autoPlay: !F,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: q.heroAsset,
          controls: !1,
          children: (0, s.jsx)('source', {
            src: ep,
            type: (0, _.mN)(ep)
          })
        })
      }) : (0, s.jsx)(v.Fl, {
        id: 'QuestBarV2ContentExpanded_heroStatic',
        children: e => (0, s.jsx)('img', {
          ref: e,
          alt: '',
          className: q.heroAsset,
          src: ep
        })
      }),
      (0, s.jsx)(l.animated.div, {
        className: q.legibilityGradient,
        style: {
          opacity: W.to({
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
t.Z = L;