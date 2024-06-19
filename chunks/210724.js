n.d(t, {
  P: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(920906),
  o = n(442837),
  c = n(110924),
  d = n(607070),
  u = n(819640),
  E = n(617136),
  _ = n(113434),
  h = n(569984),
  m = n(497505),
  T = n(918701),
  C = n(977156),
  g = n(5881),
  p = n(602667),
  N = n(78826),
  I = n(617889),
  A = n(46140),
  f = n(981631),
  x = n(323044);

function S(e) {
  var t, n, i;
  let {
    quest: h
  } = e, S = (0, g.T)({
    quest: h,
    location: A.dr.QUESTS_BAR
  }), v = (0, C.Zy)({
    location: A.dr.QUESTS_BAR
  }), R = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), M = (0, o.e7)([u.Z], () => u.Z.hasLayers()), O = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, L = (0, c.Z)(O), Z = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, j = (0, c.Z)(Z), y = (null === (i = h.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, b = null != h.userStatus && (0, T.zE)(h.userStatus, m.jn.QUEST_BAR), P = (0, _.tP)(h), {
    hasError: D,
    isLoading: U
  } = (0, N.d7)(), G = v && !b && !y && !P && !U, B = a.useRef(G), V = (0, I.B)(h, G && !D), H = a.useRef(-1), w = a.useRef(!1), [k, F] = a.useState(!1), [Y, Q] = a.useState(!1), [z, q] = a.useState(!1), [W, K] = a.useState(!0), [X, J] = a.useState(V.preEnrollmentExpandedHeight), $ = a.useRef(null), ee = a.useCallback(() => {
    var e, t;
    J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * V.paddingVertical)
  }, [V.paddingVertical]), et = a.useCallback(() => {
    ee(), Q(!0)
  }, [ee]), en = a.useCallback(() => {
    F(!0)
  }, []), es = a.useCallback(() => {
    F(!1), !w.current && !Z && Q(!1)
  }, [Z]), ea = a.useCallback(() => {
    F(!1), !Z && Q(!1), w.current = !1
  }, [Z]), ei = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? H.current = window.setTimeout(et, 75) : et()
  }, [et]), el = a.useCallback(() => {
    if (window.clearTimeout(H.current), !!V.canCollapseOnBlur && !k) !w.current && Q(!1)
  }, [k, V]), er = a.useCallback(() => {
    (0, E.dA)({
      questId: h.id,
      event: f.rMx.QUEST_HOVER
    }), w.current = !0, ei({
      withDelay: !0
    })
  }, [ei, h]), eo = a.useCallback(() => {
    w.current = !1, el()
  }, [el]), ec = a.useCallback(e => {
    J(t => t + e)
  }, []);
  a.useLayoutEffect(() => {
    Z && V.shouldExpandOnQuestComplete && et()
  }, [et, Z, V.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    O && !L && w.current && et()
  }, [et, O, L]), a.useLayoutEffect(() => {
    !Z && O && !L && !w.current && Q(!1)
  }, [O, Z, L]), a.useLayoutEffect(() => {
    G !== B.current && K(!1), B.current = G
  }, [G]);
  let {
    expansionSpring: ed
  } = (0, r.useSpring)({
    to: {
      expansionSpring: Y ? 1 : 0
    },
    config: O ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: R,
    onRest: () => {
      q(!0)
    },
    onStart: () => {
      q(!1)
    }
  }), {
    visibilitySpring: eu
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: G ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: R,
    onRest: () => {
      K(!0)
    },
    onStart: () => {
      K(!1)
    }
  });
  return (a.useLayoutEffect(() => {
    Z && !j && V.canCollapseOnBlur && ee()
  }, [Z, et, V.canCollapseOnBlur, ee, j]), v && (G || !W || U) && !D) ? (0, s.jsx)(p.A, {
    questOrQuests: h,
    questContent: V.trackingCtx.content,
    overrideVisibility: !M && G,
    children: () => {
      let e = V.component;
      return (0, s.jsx)(r.animated.div, {
        "aria-hidden": !G,
        className: l()(x.wrapper, {
          [x.wrapperInvisible]: !G,
          [x.wrapperVisible]: G && W
        }),
        style: {
          color: h.config.colors.secondary,
          height: eu.to({
            range: [0, 1],
            output: [0, !V.canCollapseOnBlur && Y ? X : V.collapsedHeight]
          })
        },
        children: (0, s.jsx)(r.animated.div, {
          onMouseLeave: eo,
          onMouseEnter: er,
          onFocus: () => ei(),
          onBlur: el,
          className: l()(x.contentWrapper, {
            [x.contentWrapperExpanded]: Y,
            [x.contentWrapperAccepted]: O
          }),
          style: {
            backgroundColor: V.preEnrollmentBackgroundColor,
            backgroundImage: O ? V.postEnrollmentBackgroundImage : void 0,
            height: ed.to({
              range: [0, 1],
              output: [V.collapsedHeight, X]
            }),
            transform: eu.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, s.jsx)(e, {
            expandedContentRef: $,
            expansionSpring: ed,
            isExpanded: Y,
            isExpansionAnimationComplete: z,
            onCtxMenuClosed: es,
            onCtxMenuOpened: en,
            onCtxMenuSelection: ea,
            onContentHeightChange: ec,
            quest: h,
            useReducedMotion: R
          })
        })
      })
    }
  }) : (D ? S.log("Not rendered due to asset error") : !v && S.log("Not rendered due to ineligibility"), null)
}
t.Z = 12633 == n.j ? function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, o.e7)([h.Z], () => {
    var e;
    return null !== (e = null != t ? t : h.Z.questDeliveryOverride) && void 0 !== e ? e : (0, T._)(h.Z.quests, m.jn.QUEST_BAR)
  });
  return null == n ? null : (0, s.jsx)(N.p, {
    sentrySource: A.dr.QUESTS_BAR,
    children: (0, s.jsx)(S, {
      quest: n
    })
  }, n.id)
} : null