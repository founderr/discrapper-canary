var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(338545),
  l = n(754700),
  c = n(442837),
  d = n(481060),
  u = n(810090),
  p = n(617136),
  x = n(272008),
  m = n(113434),
  g = n(569984),
  C = n(497505),
  f = n(918701),
  _ = n(988303),
  h = n(585500),
  E = n(644646),
  S = n(78826),
  T = n(670638),
  A = n(330039),
  v = n(693900),
  N = n(524824),
  j = n(164495),
  B = n(759853),
  b = n(205511),
  R = n(95985),
  y = n(658590),
  I = n(46140),
  M = n(689938),
  O = n(689065);
let q = o.forwardRef(function(e, t) {
  var n;
  let {
className: r,
isExpanded: q,
isExpansionAnimationComplete: U,
expansionSpring: k,
onCtxMenuOpen: Z,
onCtxMenuClose: P,
onCtxMenuSelect: Q,
quest: w,
useReducedMotion: L,
taskDetails: W
  } = e, D = o.useRef(null), H = (0, c.e7)([g.Z], () => g.Z.isEnrolling(w.id), [w]), V = (0, m.B6)(w.config.expiresAt), z = o.useMemo(() => (0, f.nP)(w.config.assets.questBarHero), [w]), G = o.useCallback(() => {
(0, x.AH)(w.id, {
  questContent: C.jn.QUEST_BAR_V2,
  questContentCTA: p.jZ.ACCEPT_QUEST
});
  }, [w]), {
primaryVariant: F
  } = _.u.useExperiment({
location: I.dr.QUESTS_BAR
  }, {
autoTrackExposure: !1
  }), K = (null === (n = w.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Y = q && U, {
questSupportsConsole: X,
isProgressingOnConsole: J
  } = o.useMemo(() => ({
questSupportsConsole: (0, f.$J)(w),
isProgressingOnConsole: (0, f.Bz)(w)
  }), [w]), $ = (0, m.pe)(w), ee = W.percentComplete > 0, et = !J && !l.T.CONSOLE.has(W.taskType) && ($ || l.T.DESKTOP.has(W.taskType)), en = (0, f.ph)(w), es = (0, h.D)({
quest: w,
location: I.dr.QUESTS_BAR,
questContent: C.jn.QUEST_BAR_V2,
taskDetails: W,
useV2Variants: F === _.P.V2 || (0, y.a)(w)
  });
  return (0, s.jsx)('div', {
'aria-hidden': !Y,
className: a()(r, O.contentExpanded, {
  [O.contentInteractable]: Y,
  [O.contentExpandedAccepted]: K
}),
children: K ? (0, s.jsxs)('div', {
  className: O.questAcceptedContent,
  ref: t,
  children: [
    (0, s.jsxs)('div', {
      className: O.questAcceptedHeader,
      children: [
        (0, s.jsx)(d.Text, {
          variant: 'text-xxs/medium',
          className: a()(O.flex, O.headerText),
          children: M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
            expirationDate: V
          })
        }),
        (0, s.jsx)(T.r, {
          onOpen: Z,
          onClose: P,
          onSelect: Q,
          questContent: C.jn.QUEST_BAR_V2,
          quest: w,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(d.Clickable, {
            ...e,
            className: O.submenuWrapper,
            'aria-label': M.Z.Messages.ACTIONS,
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
      progressBarRef: D,
      quest: w,
      isExpanded: q
    }),
    (0, s.jsx)(R.Z, {
      quest: w,
      progressBarRef: D,
      isExpanded: !0,
      taskDetails: W
    }),
    (0, N.r)(w) && (0, s.jsx)(A.Z, {
      style: {
        marginTop: 8
      }
    }),
    (0, s.jsx)(v.n, {
      children: X && !et && (0, s.jsx)(b.Z, {
        quest: w,
        taskDetails: W
      })
    }),
    (0, s.jsx)(v.n, {
      children: (0, s.jsx)(j.y, {
        quest: w,
        useReducedMotion: L,
        isExpanded: q,
        hasMadeProgress: ee
      })
    })
  ]
}) : (0, s.jsxs)('div', {
  children: [
    (0, s.jsxs)('div', {
      className: O.questPromoContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: O.details,
          children: [
            (0, s.jsx)(E.Z, {
              className: O.rewardTile,
              learnMoreStyle: 'text',
              quest: w,
              questContent: C.jn.QUEST_BAR_V2
            }),
            (0, s.jsx)(d.Heading, {
              className: O.title,
              variant: 'heading-md/medium',
              children: M.Z.Messages.QUESTS_TITLE.format({
                questName: w.config.messages.questName
              })
            }),
            (0, s.jsx)(d.Text, {
              className: O.description,
              variant: 'text-xs/normal',
              children: es
            })
          ]
        }),
        (0, s.jsx)(d.Button, {
          className: O.cta,
          color: d.Button.Colors.BRAND,
          fullWidth: !0,
          onClick: Y ? G : void 0,
          size: d.Button.Sizes.SMALL,
          submitting: H,
          children: M.Z.Messages.QUESTS_ACCEPT_QUEST
        })
      ]
    }),
    (0, s.jsxs)(i.animated.div, {
      className: O.heroAssetWrapper,
      style: {
        backdropFilter: k.to([
          0,
          1
        ], [
          5,
          0
        ]).to(e => 'blur('.concat(e, 'px)')),
        filter: k.to([
          0,
          1
        ], [
          0.8,
          1
        ]).to(e => 'brightness('.concat(e, ')'))
      },
      children: [
        (0, s.jsx)(i.animated.div, {
          className: O.heroAssetDarken,
          style: {
            opacity: k.to([
              0,
              1
            ], [
              1,
              0
            ])
          }
        }),
        (0, s.jsx)(i.animated.div, {
          className: O.heroAssetTint,
          style: {
            backgroundColor: w.config.colors.primary,
            opacity: k.to([
              0,
              1
            ], [
              1,
              0
            ])
          }
        }),
        z ? (0, s.jsx)(S.Fl, {
          id: 'QuestBarV2ContentExpanded_heroAnimated',
          children: e => (0, s.jsx)(u.Z, {
            ref: e,
            autoPlay: !L,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, s.jsx)('source', {
              src: en,
              type: (0, f.mN)(en)
            })
          })
        }) : (0, s.jsx)(S.Fl, {
          id: 'QuestBarV2ContentExpanded_heroStatic',
          children: e => (0, s.jsx)('img', {
            ref: e,
            alt: '',
            className: O.heroAsset,
            src: en
          })
        }),
        (0, s.jsx)(i.animated.div, {
          className: O.legibilityGradient,
          style: {
            opacity: k.to({
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
})
  });
});
t.Z = q;