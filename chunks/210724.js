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
  S = n(617889),
  h = n(46140),
  M = n(981631),
  x = n(487383);

function b(e) {
  var t, n, i;
  let {
quest: R
  } = e, b = (0, A.T)({
quest: R,
location: h.dr.QUESTS_BAR
  }), O = (0, p.Zy)({
location: h.dr.QUESTS_BAR
  }), P = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), L = (0, c.e7)([E.Z], () => E.Z.hasLayers()), v = (null === (t = R.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, Z = (0, _.Z)(v), D = (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, B = (0, _.Z)(D), j = (null === (i = R.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, U = null != R.userStatus && (0, g.zE)(R.userStatus, C.jn.QUEST_BAR), G = (0, I.tP)(R), {
hasError: y,
isLoading: k
  } = (0, N.d7)(), H = O && !U && !j && !G && !k, w = a.useRef(H), F = (0, S.B)(R, H && !y), V = a.useRef(-1), W = a.useRef(!1), [K, Y] = a.useState(!1), [z, Q] = a.useState(!1), [q, J] = a.useState(!0), [X, $] = a.useState(!0), [ee, et] = a.useState(F.preEnrollmentExpandedHeight), en = a.useRef(null), es = a.useCallback(e => {
J(!1), Q(e);
  }, []), ea = a.useCallback(() => {
var e, t;
et((null !== (t = null === (e = en.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * F.paddingVertical);
  }, [F.paddingVertical]), er = (0, S.L)(F.trackingCtx.content), ei = a.useCallback(() => {
er.current.expandedAt = performance.now(), (0, r.Z)(() => {
  er.current.paintedAfterExpandAt = performance.now();
}), ea(), es(!0);
  }, [
er,
ea,
es
  ]), el = a.useCallback(() => {
Y(!0);
  }, []), eo = a.useCallback(() => {
Y(!1), !W.current && !D && es(!1);
  }, [
D,
es
  ]), ec = a.useCallback(() => {
Y(!1), !D && es(!1), W.current = !1;
  }, [
D,
es
  ]), ed = a.useCallback(function() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
if (z)
  return;
let {
  withDelay: t = !1
} = e;
t ? V.current = window.setTimeout(ei, 75) : ei();
  }, [
ei,
z
  ]), e_ = a.useCallback(() => {
ed();
  }, [ed]), eu = a.useCallback(() => {
if (window.clearTimeout(V.current), !!F.canCollapseOnBlur && !K)
  !W.current && es(!1);
  }, [
K,
F,
es
  ]), eE = a.useCallback(() => {
(0, T.dA)({
  questId: R.id,
  event: M.rMx.QUEST_HOVER
}), W.current = !0, ed({
  withDelay: !0
});
  }, [
ed,
R
  ]), eT = a.useCallback(() => {
W.current = !1, eu();
  }, [eu]);
  a.useLayoutEffect(() => {
D && F.shouldExpandOnQuestComplete && ei();
  }, [
ei,
D,
F.shouldExpandOnQuestComplete
  ]), a.useLayoutEffect(() => {
v && !Z && W.current && ei();
  }, [
ei,
v,
Z
  ]), a.useLayoutEffect(() => {
!D && v && !Z && !W.current && es(!1);
  }, [
v,
D,
Z,
es
  ]), a.useLayoutEffect(() => {
H !== w.current && $(!1), w.current = H;
  }, [H]);
  let eI = v ? h.XZ : h.R4,
[{
  expansionSpring: eR
}, eC] = (0, d.useSpring)(() => ({
  from: {
    expansionSpring: 0
  },
  config: eI,
  onRest: () => {
    er.current.expandAnimationEndedAt = performance.now(), J(!0);
  },
  onStart: () => {
    er.current.expandAnimationBeganAt = performance.now(), J(!1);
  }
}));
  a.useEffect(() => {
eC({
  expansionSpring: z ? 1 : 0,
  immediate: P
});
  }, [
z,
eC,
P
  ]);
  let {
visibilitySpring: eg
  } = (0, d.useSpring)({
from: {
  visibilitySpring: 0
},
to: {
  visibilitySpring: H ? 1 : 0
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
D && !B && F.canCollapseOnBlur && ea();
  }, [
D,
ei,
F.canCollapseOnBlur,
ea,
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
  ]), O && (H || !X || k) && !y) ? (0, s.jsx)(m.A, {
questOrQuests: R,
questContent: F.trackingCtx.content,
overrideVisibility: !L && H,
children: () => {
  let e = F.component;
  return (0, s.jsx)('div', {
    className: x.mask,
    children: (0, s.jsx)(o.animated.div, {
      'aria-hidden': !H,
      onMouseLeave: eT,
      onMouseEnter: eE,
      onFocus: e_,
      onBlur: eu,
      className: l()(x.wrapper, {
        [x.wrapperInvisible]: !H,
        [x.wrapperVisible]: H && X
      }),
      style: {
        color: R.config.colors.secondary,
        height: eg.to({
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
        className: l()(x.contentWrapper, {
          [x.contentWrapperExpanded]: z,
          [x.contentWrapperAccepted]: v
        }),
        style: {
          backgroundColor: F.preEnrollmentBackgroundColor,
          backgroundImage: v ? F.postEnrollmentBackgroundImage : void 0
        },
        children: (0, s.jsx)(f.t, {
          springConfig: eI,
          isExpanded: z,
          children: (0, s.jsx)(e, {
            expandedContentRef: en,
            expansionSpring: eR,
            isExpanded: z,
            isExpansionAnimationComplete: q,
            onCtxMenuClosed: eo,
            onCtxMenuOpened: el,
            onCtxMenuSelection: ec,
            quest: R,
            useReducedMotion: P,
            collapsedHeight: F.collapsedHeight
          })
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
source: h.dr.QUESTS_BAR,
questId: n.id,
children: (0, s.jsx)(b, {
  quest: n
})
  }, n.id);
} : null;