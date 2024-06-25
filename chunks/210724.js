s.d(t, {
  P: function() {
    return h
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
  m = s(617889),
  M = s(46140),
  S = s(981631),
  p = s(323044);

function h(e) {
  var t, s, i;
  let {
    quest: T
  } = e, h = (0, N.T)({
    quest: T,
    location: M.dr.QUESTS_BAR
  }), f = (0, A.Zy)({
    location: M.dr.QUESTS_BAR
  }), O = (0, o.e7)([E.Z], () => E.Z.useReducedMotion), x = (0, o.e7)([_.Z], () => _.Z.hasLayers()), L = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, P = (0, c.Z)(L), v = (null === (s = T.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, Z = (0, c.Z)(v), b = (null === (i = T.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, D = null != T.userStatus && (0, R.zE)(T.userStatus, I.jn.QUEST_BAR), U = (0, d.tP)(T), {
    hasError: j,
    isLoading: G
  } = (0, g.d7)(), B = f && !D && !b && !U && !G, H = a.useRef(B), y = (0, m.B)(T, B && !j), k = a.useRef(-1), V = a.useRef(!1), [F, w] = a.useState(!1), [W, K] = a.useState(!1), [Y, z] = a.useState(!0), [Q, X] = a.useState(!0), [q, J] = a.useState(y.preEnrollmentExpandedHeight), $ = a.useRef(null), ee = a.useCallback(() => {
    var e, t;
    J((null !== (t = null === (e = $.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * y.paddingVertical)
  }, [y.paddingVertical]), et = a.useCallback(() => {
    ee(), K(!0)
  }, [ee]), es = a.useCallback(() => {
    w(!0)
  }, []), en = a.useCallback(() => {
    w(!1), !V.current && !v && K(!1)
  }, [v]), ea = a.useCallback(() => {
    w(!1), !v && K(!1), V.current = !1
  }, [v]), ei = a.useCallback(function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      {
        withDelay: t = !1
      } = e;
    t ? k.current = window.setTimeout(et, 75) : et()
  }, [et]), er = a.useCallback(() => {
    if (window.clearTimeout(k.current), !!y.canCollapseOnBlur && !F) !V.current && K(!1)
  }, [F, y]), el = a.useCallback(() => {
    (0, u.dA)({
      questId: T.id,
      event: S.rMx.QUEST_HOVER
    }), V.current = !0, ei({
      withDelay: !0
    })
  }, [ei, T]), eo = a.useCallback(() => {
    V.current = !1, er()
  }, [er]), ec = a.useCallback(e => {
    J(t => t + e)
  }, []);
  a.useLayoutEffect(() => {
    v && y.shouldExpandOnQuestComplete && et()
  }, [et, v, y.shouldExpandOnQuestComplete]), a.useLayoutEffect(() => {
    L && !P && V.current && et()
  }, [et, L, P]), a.useLayoutEffect(() => {
    !v && L && !P && !V.current && K(!1)
  }, [L, v, P]), a.useLayoutEffect(() => {
    B !== H.current && X(!1), H.current = B
  }, [B]);
  let {
    expansionSpring: eE
  } = (0, l.useSpring)({
    to: {
      expansionSpring: W ? 1 : 0
    },
    config: L ? {
      tension: 900,
      friction: 45,
      clamp: !0
    } : {
      tension: 360,
      friction: 30,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      z(!0)
    },
    onStart: () => {
      z(!1)
    }
  }), {
    visibilitySpring: e_
  } = (0, l.useSpring)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: B ? 1 : 0
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: !0
    },
    immediate: O,
    onRest: () => {
      X(!0)
    },
    onStart: () => {
      X(!1)
    }
  });
  return (a.useLayoutEffect(() => {
    v && !Z && y.canCollapseOnBlur && ee()
  }, [v, et, y.canCollapseOnBlur, ee, Z]), f && (B || !Q || G) && !j) ? (0, n.jsx)(C.A, {
    questOrQuests: T,
    questContent: y.trackingCtx.content,
    overrideVisibility: !x && B,
    children: () => {
      let e = y.component;
      return (0, n.jsx)(l.animated.div, {
        "aria-hidden": !B,
        className: r()(p.wrapper, {
          [p.wrapperInvisible]: !B,
          [p.wrapperVisible]: B && Q
        }),
        style: {
          color: T.config.colors.secondary,
          height: e_.to({
            range: [0, 1],
            output: [0, !y.canCollapseOnBlur && W ? q : y.collapsedHeight]
          })
        },
        children: (0, n.jsx)(l.animated.div, {
          onMouseLeave: eo,
          onMouseEnter: el,
          onFocus: () => ei(),
          onBlur: er,
          className: r()(p.contentWrapper, {
            [p.contentWrapperExpanded]: W,
            [p.contentWrapperAccepted]: L
          }),
          style: {
            backgroundColor: y.preEnrollmentBackgroundColor,
            backgroundImage: L ? y.postEnrollmentBackgroundImage : void 0,
            height: eE.to({
              range: [0, 1],
              output: [y.collapsedHeight, q]
            }),
            transform: e_.to({
              range: [0, 1],
              output: [100, 0]
            }).to(e => "translateY(".concat(e, "%)"))
          },
          children: (0, n.jsx)(e, {
            expandedContentRef: $,
            expansionSpring: eE,
            isExpanded: W,
            isExpansionAnimationComplete: Y,
            onCtxMenuClosed: en,
            onCtxMenuOpened: es,
            onCtxMenuSelection: ea,
            onContentHeightChange: ec,
            quest: T,
            useReducedMotion: O
          })
        })
      })
    }
  }) : (j ? h.log("Not rendered due to asset error") : !f && h.log("Not rendered due to ineligibility"), null)
}
t.Z = 12633 == s.j ? function(e) {
  let {
    overrideQuest: t
  } = e, s = (0, o.e7)([T.Z], () => {
    var e;
    return null !== (e = null != t ? t : T.Z.questDeliveryOverride) && void 0 !== e ? e : (0, R._)(T.Z.quests, I.jn.QUEST_BAR)
  });
  return null == s ? null : (0, n.jsx)(g.p, {
    sentrySource: M.dr.QUESTS_BAR,
    children: (0, n.jsx)(h, {
      quest: s
    })
  }, s.id)
} : null