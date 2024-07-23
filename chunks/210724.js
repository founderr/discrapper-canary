n.d(t, {
  P: function() {
return b;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(469035),
  i = n(120356),
  l = n.n(i),
  o = n(338545),
  c = n(442837),
  d = n(481060),
  _ = n(110924),
  u = n(607070),
  E = n(819640),
  T = n(617136),
  I = n(113434),
  R = n(569984),
  C = n(497505),
  g = n(918701),
  p = n(977156),
  A = n(5881),
  m = n(602667),
  N = n(78826),
  f = n(693900),
  h = n(617889),
  S = n(46140),
  M = n(981631),
  x = n(487383);

function b(e) {
  var t, n, i;
  let {
quest: R
  } = e, b = (0, A.T)({
quest: R,
location: S.dr.QUESTS_BAR
  }), O = (0, p.Zy)({
location: S.dr.QUESTS_BAR
  }), P = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), L = (0, c.e7)([E.Z], () => E.Z.hasLayers()), v = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, Z = (0, _.Z)(v), D = (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, B = (0, _.Z)(D), j = (null === (i = R.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, U = null != R.userStatus && (0, g.zE)(R.userStatus, C.jn.QUEST_BAR), G = (0, I.tP)(R), {
hasError: y,
isLoading: H
  } = (0, N.d7)(), k = O && !U && !j && !G && !H, w = a.useRef(k), F = (0, h.B)(R, k && !y), V = a.useRef(-1), W = a.useRef(!1), [K, Y] = a.useState(!1), [z, Q] = a.useState(!1), [q, J] = a.useState(!0), [X, $] = a.useState(!0), [ee, et] = a.useState(F.preEnrollmentExpandedHeight), en = a.useRef(null), es = a.useCallback(() => {
var e, t;
et((null !== (t = null === (e = en.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * F.paddingVertical);
  }, [F.paddingVertical]), ea = (0, h.L)(F.trackingCtx.content), er = a.useCallback(() => {
ea.current.expandedAt = performance.now(), (0, r.Z)(() => {
  ea.current.paintedAfterExpandAt = performance.now();
}), es(), Q(!0);
  }, [
ea,
es
  ]), ei = a.useCallback(() => {
Y(!0);
  }, []), el = a.useCallback(() => {
Y(!1), !W.current && !D && Q(!1);
  }, [D]), eo = a.useCallback(() => {
Y(!1), !D && Q(!1), W.current = !1;
  }, [D]), ec = a.useCallback(function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
if (z)
  return;
let {
  withDelay: t = !1
} = e;
t ? V.current = window.setTimeout(er, 75) : er();
  }, [
er,
z
  ]), ed = a.useCallback(() => {
ec();
  }, [ec]), e_ = a.useCallback(() => {
if (window.clearTimeout(V.current), !!F.canCollapseOnBlur && !K)
  !W.current && Q(!1);
  }, [
K,
F
  ]), eu = a.useCallback(() => {
(0, T.dA)({
  questId: R.id,
  event: M.rMx.QUEST_HOVER
}), W.current = !0, ec({
  withDelay: !0
});
  }, [
ec,
R
  ]), eE = a.useCallback(() => {
W.current = !1, e_();
  }, [e_]), eT = a.useCallback(e => {
z && et(t => t + e);
  }, [z]);
  a.useLayoutEffect(() => {
D && F.shouldExpandOnQuestComplete && er();
  }, [
er,
D,
F.shouldExpandOnQuestComplete
  ]), a.useLayoutEffect(() => {
v && !Z && W.current && er();
  }, [
er,
v,
Z
  ]), a.useLayoutEffect(() => {
!D && v && !Z && !W.current && Q(!1);
  }, [
v,
D,
Z
  ]), a.useLayoutEffect(() => {
k !== w.current && $(!1), w.current = k;
  }, [k]);
  let eI = v ? S.XZ : S.R4,
[{
  expansionSpring: eR
}, eC] = (0, d.useSpring)(() => ({
  from: {
    expansionSpring: 0
  },
  config: eI,
  onRest: () => {
    ea.current.expandAnimationEndedAt = performance.now(), J(!0);
  },
  onStart: () => {
    ea.current.expandAnimationBeganAt = performance.now(), J(!1);
  }
})),
[{
  height: eg
}, ep] = (0, d.useSpring)(() => ({
  from: {
    height: F.collapsedHeight
  },
  config: eI
}));
  a.useLayoutEffect(() => {
eC({
  expansionSpring: z ? 1 : 0
}), ep({
  height: z ? ee : F.collapsedHeight
});
  }, [
z,
ee,
eC,
ep,
F.collapsedHeight
  ]);
  let {
visibilitySpring: eA
  } = (0, d.useSpring)({
from: {
  visibilitySpring: 0
},
to: {
  visibilitySpring: k ? 1 : 0
},
config: {
  tension: 250,
  friction: 10,
  clamp: !0
},
onRest: () => {
  $(!0);
},
onStart: () => {
  $(!1);
}
  });
  return (a.useLayoutEffect(() => {
D && !B && F.canCollapseOnBlur && es();
  }, [
D,
er,
F.canCollapseOnBlur,
es,
B
  ]), a.useEffect(() => {
y && (0, T.dA)({
  questId: R.id,
  event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, T.mH)(C.jn.QUEST_BAR),
    reason: 'asset_loading_error'
  }
}), !O && (0, T.dA)({
  questId: R.id,
  event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
  properties: {
    ...(0, T.mH)(C.jn.QUEST_BAR),
    reason: 'not_eligible_for_quest'
  }
});
  }, [
y,
O,
R.id
  ]), O && (k || !X || H) && !y) ? (0, s.jsx)(m.A, {
questOrQuests: R,
questContent: F.trackingCtx.content,
overrideVisibility: !L && k,
children: () => {
  let e = F.component;
  return (0, s.jsx)(o.animated.div, {
    'aria-hidden': !k,
    className: l()(x.wrapper, {
      [x.wrapperInvisible]: !k,
      [x.wrapperVisible]: k && X
    }),
    style: {
      color: R.config.colors.secondary,
      height: eA.to({
        range: [
          0,
          1
        ],
        output: [
          0,
          !F.canCollapseOnBlur && z ? ee : F.collapsedHeight
        ]
      })
    },
    children: (0, s.jsx)(o.animated.div, {
      onMouseLeave: eE,
      onMouseEnter: eu,
      onFocus: ed,
      onBlur: e_,
      className: l()(x.contentWrapper, {
        [x.contentWrapperExpanded]: z,
        [x.contentWrapperAccepted]: v
      }),
      style: {
        backgroundColor: F.preEnrollmentBackgroundColor,
        backgroundImage: v ? F.postEnrollmentBackgroundImage : void 0,
        height: eg,
        transform: eA.to({
          range: [
            0,
            1
          ],
          output: [
            100,
            0
          ]
        }).to(e => 'translateY('.concat(e, '%)'))
      },
      children: (0, s.jsx)(f.t, {
        springConfig: eI,
        isExpanded: z,
        onHeightChange: eT,
        children: (0, s.jsx)(e, {
          expandedContentRef: en,
          expansionSpring: eR,
          isExpanded: z,
          isExpansionAnimationComplete: q,
          onCtxMenuClosed: el,
          onCtxMenuOpened: ei,
          onCtxMenuSelection: eo,
          quest: R,
          useReducedMotion: P
        })
      })
    })
  });
}
  }) : (y ? b.log('Not rendered due to asset error') : !O && b.log('Not rendered due to ineligibility'), null);
}
t.Z = 12633 == n.j ? function(e) {
  let {
overrideQuest: t
  } = e, n = (0, c.e7)([R.Z], () => {
var e;
return null !== (e = null != t ? t : R.Z.questDeliveryOverride) && void 0 !== e ? e : (0, g._)(R.Z.quests, C.jn.QUEST_BAR);
  });
  return null == n ? null : (0, s.jsx)(N.p, {
source: S.dr.QUESTS_BAR,
questId: n.id,
children: (0, s.jsx)(b, {
  quest: n
})
  }, n.id);
} : null;