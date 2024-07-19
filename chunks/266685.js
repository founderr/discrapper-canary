var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(950104),
  c = n(780384),
  d = n(481060),
  u = n(703656),
  p = n(810090),
  x = n(358085),
  m = n(617136),
  g = n(272008),
  C = n(113434),
  f = n(569984),
  _ = n(497505),
  h = n(918701),
  E = n(865364),
  S = n(585500),
  T = n(566078),
  A = n(340100),
  v = n(611855),
  N = n(644646),
  j = n(78826),
  B = n(670638),
  b = n(667105),
  R = n(46140),
  y = n(981631),
  I = n(701488),
  M = n(689938),
  O = n(47067);
let q = o.forwardRef(function(e, t) {
  var n, r;
  let {
className: E,
isExpanded: q,
isExpansionAnimationComplete: k,
onCtxMenuOpen: Z,
onCtxMenuClose: P,
onCtxMenuSelect: Q,
quest: w,
useReducedMotion: L
  } = e, W = (0, i.e7)([f.Z], () => f.Z.isEnrolling(w.id), [w]), D = (0, C.B6)(w.config.expiresAt), H = T.r.build(w.config), V = (0, C.B6)(H.rewardsExpireAt), z = o.useMemo(() => (0, h.nP)(w.config.assets.questBarHero), [w]), G = (0, b.tP)(H.application.id), F = H.features.has(R.S7.START_QUEST_CTA) ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST, K = H.features.has(R.S7.START_QUEST_CTA) ? M.Z.Messages.QUESTS_START_QUEST : M.Z.Messages.QUESTS_ACCEPT_QUEST, Y = o.useCallback(() => {
(0, g.AH)(w.id, {
  questContent: _.jn.QUEST_BAR,
  questContentCTA: F
}), H.features.has(R.S7.START_QUEST_CTA) && (0, u.uL)(y.Z5c.ACTIVITY_DETAILS(I.In), void 0);
  }, [
w,
F,
H.features
  ]), X = (0, b.hf)({
quest: w,
location: _.jn.QUEST_BAR
  }), J = o.useCallback(() => {
(0, h.FE)(w, {
  content: _.jn.QUEST_BAR,
  ctaContent: m.jZ.OPEN_GAME_LINK
});
  }, [w]), $ = H.features.has(R.S7.POST_ENROLLMENT_CTA), ee = (0, C.Rf)(w), et = (0, C.Jf)(w), en = null != et ? et.progress > 0 : ee.progressSeconds > 0, es = (null === (n = w.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, eo = (null === (r = w.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, er = o.useMemo(() => (0, h.Xv)(w.config), [w.config]), ea = q && k, ei = (0, h.ph)(w), el = (0, S.D)({
quest: w,
taskDetails: ee,
location: R.dr.QUESTS_BAR,
questContent: _.jn.QUEST_BAR,
thirdPartyTaskDetails: null != et ? et : void 0
  }), ec = (0, x.isWeb)(), ed = o.useMemo(() => {
let e = (0, c.Qg)(w.config.colors.primary, {
  base: '#ffffff',
  contrastRatio: c.S3.Text
});
return {
  '--custom-cta-color': e,
  '--custom-cta-color-hover': (0, l.r5)(e, 0.3),
  '--custom-cta-color-active': (0, l.r5)(e, 0.35)
};
  }, [w.config.colors.primary]);
  return (0, s.jsx)('div', {
style: {
  backgroundColor: w.config.colors.secondary
},
'aria-hidden': !ea,
className: a()(E, O.contentExpanded, {
  [O.contentInteractable]: ea
}),
children: es ? (0, s.jsxs)('div', {
  className: O.questAcceptedContent,
  ref: t,
  children: [
    (0, s.jsxs)('div', {
      className: O.utils,
      children: [
        (0, s.jsxs)('div', {
          className: O.questAcceptedContentHeading,
          children: [
            (0, s.jsx)(N.Z, {
              className: O.questProgressRewardTile,
              learnMoreStyle: 'icon',
              quest: w,
              questContent: _.jn.QUEST_BAR
            }),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)(d.Heading, {
                  color: 'always-white',
                  variant: 'heading-sm/semibold',
                  children: (0, h.AV)({
                    quest: w,
                    taskDetails: ee,
                    thirdPartyTaskDetails: null != et ? et : void 0
                  })
                }),
                (0, s.jsx)(d.Text, {
                  className: O.questAcceptedContentCopySubheading,
                  color: 'always-white',
                  variant: 'text-xxs/normal',
                  children: eo ? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                    expirationDate: V
                  }) : M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                    expirationDate: D
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(B.r, {
          onOpen: Z,
          onClose: P,
          onSelect: Q,
          questContent: _.jn.QUEST_BAR,
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
              className: O.submenuIcon
            })
          })
        })
      ]
    }),
    eo ? (0, s.jsx)(d.Button, {
      className: a()(O.cta, O.ctaClaimReward),
      style: er ? ed : void 0,
      color: d.Button.Colors.CUSTOM,
      fullWidth: !0,
      onClick: X,
      size: d.Button.Sizes.NONE,
      children: M.Z.Messages.QUESTS_CLAIM_REWARD
    }) : (0, s.jsx)(d.Text, {
      className: O.description,
      color: 'always-white',
      variant: 'text-xs/normal',
      children: el
    }),
    (0, s.jsx)(A.Z, {
      quest: w
    }),
    !ec && !en && !G && $ && (0, s.jsx)(U, {
      onClick: ea ? J : void 0
    })
  ]
}) : (0, s.jsxs)('div', {
  children: [
    (0, s.jsxs)('div', {
      className: O.questPromoContent,
      ref: t,
      children: [
        (0, s.jsxs)('div', {
          className: O.utils,
          children: [
            (0, s.jsx)(v.Z, {
              color: 'always-white'
            }),
            (0, s.jsx)(B.r, {
              onOpen: Z,
              onClose: P,
              onSelect: Q,
              questContent: _.jn.QUEST_BAR,
              quest: w,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, s.jsx)(d.Clickable, {
                ...e,
                className: O.submenuWrapper,
                'aria-label': M.Z.Messages.ACTIONS,
                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: O.submenuIcon
                })
              })
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: O.details,
          children: [
            (0, s.jsx)(N.Z, {
              className: O.rewardTile,
              learnMoreStyle: 'text',
              quest: w,
              questContent: _.jn.QUEST_BAR
            }),
            (0, s.jsx)(d.Heading, {
              className: O.title,
              color: 'always-white',
              variant: 'heading-md/medium',
              children: M.Z.Messages.QUESTS_TITLE.format({
                questName: w.config.messages.questName
              })
            }),
            (0, s.jsx)(d.Text, {
              className: O.description,
              color: 'always-white',
              variant: 'text-sm/normal',
              children: el
            })
          ]
        }),
        (0, s.jsx)(d.Button, {
          className: O.cta,
          style: '1232852290197655573' !== w.id ? ed : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: ea ? Y : void 0,
          size: d.Button.Sizes.NONE,
          submitting: W,
          children: K
        })
      ]
    }),
    (0, s.jsx)('div', {
      className: O.heroAssetWrapper,
      style: {
        color: w.config.colors.secondary
      },
      children: z ? (0, s.jsx)(j.Fl, {
        id: 'QuestBarContentExpanded_heroAnimated',
        children: e => (0, s.jsx)(p.Z, {
          ref: e,
          autoPlay: !L,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: O.heroAsset,
          controls: !1,
          children: (0, s.jsx)('source', {
            src: ei,
            type: (0, h.mN)(ei)
          })
        })
      }) : (0, s.jsx)(j.Fl, {
        id: 'QuestBarContentExpanded_heroStatic',
        children: e => (0, s.jsx)('img', {
          ref: e,
          alt: '',
          className: O.heroAsset,
          src: ei
        })
      })
    })
  ]
})
  });
});

function U(e) {
  let {
style: t,
onClick: n
  } = e;
  return (0, E.O)({
location: R.dr.QUESTS_BAR,
autoTrackExposure: !0
  }) ? (0, s.jsx)(d.Button, {
className: O.cta,
style: t,
color: d.Button.Colors.CUSTOM,
fullWidth: !0,
onClick: n,
size: d.Button.Sizes.NONE,
children: M.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null;
}
t.Z = q;