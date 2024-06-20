n.d(t, {
  P: function() {
    return M
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(920906),
  c = n(442837),
  o = n(110924),
  d = n(607070),
  u = n(819640),
  E = n(617136),
  _ = n(113434),
  h = n(569984),
  T = n(497505),
  I = n(918701),
  C = n(977156),
  N = n(5881),
  g = n(602667),
  A = n(78826),
  m = n(617889),
  f = n(46140),
  p = n(981631),
  R = n(323044);

function M(e) {
  var t, n, i;
  let {
    quest: h
  } = e, M = (0, N.T)({
    quest: h,
    location: f.dr.QUESTS_BAR
  }), O = (0, C.Zy)({
    location: f.dr.QUESTS_BAR
  }), S = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), L = (0, c.e7)([u.Z], () => u.Z.hasLayers()), v = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, Z = (0, o.Z)(v), x = (null === (n = h.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, D = (0, o.Z)(x), y = (null === (i = h.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, b = null != h.userStatus && (0, I.zE)(h.userStatus, T.jn.QUEST_BAR), P = (0, _.tP)(h), {
    hasError: G,
    isLoading: j
  } = (0, A.d7)(), U = O && !b && !y && !P && !j, V = a.useRef(U), H = (0, m.B)(h, U && !G), w = a.useRef(-1), k = a.useRef(!1), [F, B] = a.useState(!1), [Y, z] = a.useState(!1), [Q, W] = a.useState(!0), [q, K] = a.useState(!0), [X, J] = a.useState(H.preEnrollmentExpandedHeight), $ = a.useRef(null), ee = a.useCallback(() => {
    var e, t;
    J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * H.paddingVertical)
  }, [H.paddingVertical]), et = a.useCallback(() => {
    ee(), z(!0)
  }, [ee]), en = a.useCallback(() => {
    B(!0)
  }, []), es = a.useCallback(() => {
    B(!1), !k.current && !x && z(!1)
  }, [x]), ea = a.useCallback(() => {
    B(!1), !x && z(!1), k.current = !1
  }, [x]), ei = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? w.current = window.setTimeout(et, 75) : et()
  }, [et]), el = a.useCallback(() => {
    if (window.clearTimeout(w.current), !!H.canCollapseOnBlur && !F) !k.current && z(!1)
  }, [F, H]), er = a.useCallback(() => {
    (0, E.dA)({
      questId: h.id,
      event: p.rMx.QUEST_HOVER
    }), k.current = !0, ei({
      withDelay: !0
    })
  }, [ei, h]), ec = a.useCallback(() => {
    k.current = !1, el()
  }, [el]), eo = a.useCallback(e => {
    J(t => t + e)
  }, []);
  a.useLayoutEffect(() => {
    x && H.shouldExpandOnQuestComplete && et()
  }, [et, x, H.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    v && !Z && k.current && et()
  }, [et, v, Z]), a.useLayoutEffect(() => {
    !x && v && !Z && !k.current && z(!1)
  }, [v, x, Z]), a.useLayoutEffect(() => {
    U !== V.current && K(!1), V.current = U
  }, [U]);
  let {
    expansionSpring: ed
  } = (0, r.useSpring)({
    to: {
      expansionSpring: Y ? 1 : 0
    },
    config: v ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: S,
    onRest: () => {
      W(!0)
    },
    onStart: () => {
      W(!1)
    }
  }), {
    visibilitySpring: eu
  } = (0, r.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: U ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: S,
    onRest: () => {
      K(!0)
    },
    onStart: () => {
      K(!1)
    }
  });
  return (a.useLayoutEffect(() => {
    x && !D && H.canCollapseOnBlur && ee()
  }, [x, et, H.canCollapseOnBlur, ee, D]), O && (U || !q || j) && !G) ? (0, s.jsx)(g.A, {
    questOrQuests: h,
    questContent: H.trackingCtx.content,
    overrideVisibility: !L && U,
    children: () => {
      let e = H.component;
      return (0, s.jsx)(r.animated.div, {
        "aria-hidden": !U,
        className: l()(R.wrapper, {
          [R.wrapperInvisible]: !U,
          [R.wrapperVisible]: U && q
        }),
        style: {
          color: h.config.colors.secondary,
          height: eu.to({
            range: [0, 1],
            output: [0, !H.canCollapseOnBlur && Y ? X : H.collapsedHeight]
          })
        },
        children: (0, s.jsx)(r.animated.div, {
          onMouseLeave: ec,
          onMouseEnter: er,
          onFocus: () => ei(),
          onBlur: el,
          className: l()(R.contentWrapper, {
            [R.contentWrapperExpanded]: Y,
            [R.contentWrapperAccepted]: v
          }),
          style: {
            backgroundColor: H.preEnrollmentBackgroundColor,
            backgroundImage: v ? H.postEnrollmentBackgroundImage : void 0,
            height: ed.to({
              range: [0, 1],
              output: [H.collapsedHeight, X]
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
            isExpansionAnimationComplete: Q,
            onCtxMenuClosed: es,
            onCtxMenuOpened: en,
            onCtxMenuSelection: ea,
            onContentHeightChange: eo,
            quest: h,
            useReducedMotion: S
          })
        })
      })
    }
  }) : (G ? M.log("Not rendered due to asset error") : !O && M.log("Not rendered due to ineligibility"), null)
}
t.Z = 12633 == n.j ? function(e) {
  let {
    overrideQuest: t
  } = e, n = (0, c.e7)([h.Z], () => {
    var e;
    return null !== (e = null != t ? t : h.Z.questDeliveryOverride) && void 0 !== e ? e : (0, I._)(h.Z.quests, T.jn.QUEST_BAR)
  });
  return null == n ? null : (0, s.jsx)(A.p, {
    sentrySource: f.dr.QUESTS_BAR,
    children: (0, s.jsx)(M, {
      quest: n
    })
  }, n.id)
} : null