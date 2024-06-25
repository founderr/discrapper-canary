s.d(t, {
  P: function() {
    return f
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(920906),
  o = s(442837),
  c = s(110924),
  E = s(607070),
  _ = s(819640),
  u = s(617136),
  d = s(113434),
  T = s(569984),
  I = s(497505),
  R = s(918701),
  A = s(977156),
  N = s(5881),
  C = s(602667),
  g = s(78826),
  m = s(693900),
  M = s(617889),
  S = s(46140),
  p = s(981631),
  h = s(323044);

function f(e) {
  var t, s, i;
  let {
    quest: T
  } = e, f = (0, N.T)({
    quest: T,
    location: S.dr.QUESTS_BAR
  }), O = (0, A.Zy)({
    location: S.dr.QUESTS_BAR
  }), x = (0, o.e7)([E.Z], () => E.Z.useReducedMotion), L = (0, o.e7)([_.Z], () => _.Z.hasLayers()), P = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, v = (0, c.Z)(P), Z = (null === (s = T.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, b = (0, c.Z)(Z), D = (null === (i = T.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, U = null != T.userStatus && (0, R.zE)(T.userStatus, I.jn.QUEST_BAR), j = (0, d.tP)(T), {
    hasError: G,
    isLoading: B
  } = (0, g.d7)(), H = O && !U && !D && !j && !B, y = a.useRef(H), k = (0, M.B)(T, H && !G), V = a.useRef(-1), F = a.useRef(!1), [w, W] = a.useState(!1), [K, Y] = a.useState(!1), [z, Q] = a.useState(!0), [X, q] = a.useState(!0), [J, $] = a.useState(k.preEnrollmentExpandedHeight), ee = a.useRef(null), et = a.useCallback(() => {
    var e, t;
    $((null !== (t = null === (e = ee.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * k.paddingVertical)
  }, [k.paddingVertical]), es = a.useCallback(() => {
    et(), Y(!0)
  }, [et]), en = a.useCallback(() => {
    W(!0)
  }, []), ea = a.useCallback(() => {
    W(!1), !F.current && !Z && Y(!1)
  }, [Z]), ei = a.useCallback(() => {
    W(!1), !Z && Y(!1), F.current = !1
  }, [Z]), er = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (K) return;
    let {
      withDelay: t = !1
    } = e;
    t ? V.current = window.setTimeout(es, 75) : es()
  }, [es, K]), el = a.useCallback(() => {
    er()
  }, [er]), eo = a.useCallback(() => {
    if (window.clearTimeout(V.current), !!k.canCollapseOnBlur && !w) !F.current && Y(!1)
  }, [w, k]), ec = a.useCallback(() => {
    (0, u.dA)({
      questId: T.id,
      event: p.rMx.QUEST_HOVER
    }), F.current = !0, er({
      withDelay: !0
    })
  }, [er, T]), eE = a.useCallback(() => {
    F.current = !1, eo()
  }, [eo]), e_ = a.useCallback(e => {
    K && $(t => t + e)
  }, [K]);
  a.useLayoutEffect(() => {
    Z && k.shouldExpandOnQuestComplete && es()
  }, [es, Z, k.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    P && !v && F.current && es()
  }, [es, P, v]), a.useLayoutEffect(() => {
    !Z && P && !v && !F.current && Y(!1)
  }, [P, Z, v]), a.useLayoutEffect(() => {
    H !== y.current && q(!1), y.current = H
  }, [H]);
  let eu = P ? S.XZ : S.R4,
    [{
      expansionSpring: ed
    }, eT] = (0, l.useSpring)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eu,
      immediate: x,
      onRest: () => {
        Q(!0)
      },
      onStart: () => {
        Q(!1)
      }
    })),
    [{
      height: eI
    }, eR] = (0, l.useSpring)(() => ({
      from: {
        height: k.collapsedHeight
      },
      config: eu,
      immediate: x
    }));
  a.useLayoutEffect(() => {
    eT({
      expansionSpring: K ? 1 : 0
    }), eR({
      height: K ? J : k.collapsedHeight
    })
  }, [K, J, eT, eR, k.collapsedHeight]);
  let {
    visibilitySpring: eA
  } = (0, l.useSpring)({
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
    immediate: x,
    onRest: () => {
      q(!0)
    },
    onStart: () => {
      q(!1)
    }
  });
  return (a.useLayoutEffect(() => {
    Z && !b && k.canCollapseOnBlur && et()
  }, [Z, es, k.canCollapseOnBlur, et, b]), O && (H || !X || B) && !G) ? (0, n.jsx)(C.A, {
    questOrQuests: T,
    questContent: k.trackingCtx.content,
    overrideVisibility: !L && H,
    children: () => {
      let e = k.component;
      return (0, n.jsx)(l.animated.div, {
        "aria-hidden": !H,
        className: r()(h.wrapper, {
          [h.wrapperInvisible]: !H,
          [h.wrapperVisible]: H && X
        }),
        style: {
          color: T.config.colors.secondary,
          height: eA.to({
            range: [0, 1],
            output: [0, !k.canCollapseOnBlur && K ? J : k.collapsedHeight]
          })
        },
        children: (0, n.jsx)(l.animated.div, {
          onMouseLeave: eE,
          onMouseEnter: ec,
          onFocus: el,
          onBlur: eo,
          className: r()(h.contentWrapper, {
            [h.contentWrapperExpanded]: K,
            [h.contentWrapperAccepted]: P
          }),
          style: {
            backgroundColor: k.preEnrollmentBackgroundColor,
            backgroundImage: P ? k.postEnrollmentBackgroundImage : void 0,
            height: eI,
            transform: eA.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, n.jsx)(m.t, {
            springConfig: eu,
            isExpanded: K,
            onHeightChange: e_,
            children: (0, n.jsx)(e, {
              expandedContentRef: ee,
              expansionSpring: ed,
              isExpanded: K,
              isExpansionAnimationComplete: z,
              onCtxMenuClosed: ea,
              onCtxMenuOpened: en,
              onCtxMenuSelection: ei,
              quest: T,
              useReducedMotion: x
            })
          })
        })
      })
    }
  }) : (G ? f.log("Not rendered due to asset error") : !O && f.log("Not rendered due to ineligibility"), null)
}
t.Z = 12633 == s.j ? function(e) {
  let {
    overrideQuest: t
  } = e, s = (0, o.e7)([T.Z], () => {
    var e;
    return null !== (e = null != t ? t : T.Z.questDeliveryOverride) && void 0 !== e ? e : (0, R._)(T.Z.quests, I.jn.QUEST_BAR)
  });
  return null == s ? null : (0, n.jsx)(g.p, {
    sentrySource: S.dr.QUESTS_BAR,
    children: (0, n.jsx)(f, {
      quest: s
    })
  }, s.id)
} : null