"use strict";
n.d(t, {
  J: function() {
    return p
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(846519),
  _ = n(481060),
  c = n(788307),
  d = n(727637),
  E = n(607070),
  I = n(100527),
  T = n(906732),
  h = n(594174),
  S = n(751009),
  f = n(785717),
  N = n(825801),
  A = n(228168),
  m = n(689938),
  O = n(739550);
let R = "text-sm/medium";

function p(e) {
  let {
    user: t,
    statusActivity: s,
    profileType: p,
    hasEntered: g = !0,
    animate: C = !0,
    onClose: v
  } = e, {
    modifyStatusEnabled: L
  } = (0, S.K)({
    location: "UserProfileCustomStatusBubble"
  }), {
    analyticsLocations: D
  } = (0, T.ZP)(I.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: M
  } = (0, f.KZ)(), P = (0, l.e7)([h.default], () => h.default.getCurrentUser()), y = t.id === (null == P ? void 0 : P.id), U = (0, l.e7)([E.Z], () => E.Z.useReducedMotion), [b, G] = r.useState(!0), [w] = r.useState(() => new u.V7), B = r.useRef(null), k = r.useRef(null), x = r.useRef(null), V = r.useRef(null), Z = r.useRef(null), H = (0, d.Z)(Z), F = (null == s ? void 0 : s.state) != null && "" !== s.state ? s.state : null, Y = null != F && F.length > 0, {
    emoji: j
  } = null != s ? s : {}, W = null != j, K = W && !Y, z = W || Y, q = y && !z && L, [X, Q] = r.useState(K);
  r.useLayoutEffect(() => {
    if (null == B.current || K) return;
    let e = Math.floor(B.current.getBoundingClientRect().height);
    if (Q(K || e <= 18), g) {
      var t, n, i, r;
      k.current = null !== (i = null === (t = B.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, V.current = null !== (r = null === (n = x.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [g, K]);
  let [J, $] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: U,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => w.stop(), [w]), !z && !q) return null;
  let ee = e => {
      var t, n;
      if (!X) {
        e ? $({
          maxHeight: "".concat(Math.min(null !== (t = k.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : $({
          maxHeight: "".concat(Math.min(null !== (n = V.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        w.start(e ? 300 : 150, () => {
          G(!e)
        })
      }
    },
    et = () => (0, i.jsxs)("div", {
      className: O.content,
      children: [(0, i.jsx)(_.CirclePlusIcon, {
        className: O.addStatusIcon,
        colorClass: O.addStatusIconColor
      }), (0, i.jsx)(_.Text, {
        variant: R,
        className: O.addStatusPrompt,
        children: m.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    en = () => W ? (0, i.jsx)(c.I, {
      className: Y ? O.statusEmojiInline : O.statusEmojiOnly,
      emoji: j,
      animate: C,
      hideTooltip: !1,
      tooltipDelay: A.vB
    }) : null,
    ei = () => Y ? (0, i.jsx)(_.Text, {
      variant: R,
      className: O.statusText,
      children: F
    }) : null,
    er = {
      [O.biteSize]: p === A.y0.BITE_SIZE,
      [O.fullSize]: p === A.y0.FULL_SIZE,
      [O.panel]: p === A.y0.PANEL
    },
    es = o()(O.statusBubbleOuter, er, {
      [O.statusBubbleShape]: !Y && W || !X,
      [O.statusBubbleSingleLineWithTextShape]: X && Y || q,
      [O.statusBubbleOuterStatusCursor]: q
    }),
    eo = o()(O.statusBubble, {
      [O.statusBubbleShape]: !Y && W || !X,
      [O.statusBubbleSingleLineWithTextShape]: X && Y || q,
      [O.statusBubbleEmojiOnlyPadding]: K,
      [O.statusBubbleWithTextPadding]: Y || q,
      [O.statusBubbleWithTextMinWidth]: Y,
      [O.statusBubbleCopyStatusCursor]: z
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(O.invisibleContainer, er),
      children: (0, i.jsx)("div", {
        className: es,
        children: (0, i.jsxs)("span", {
          className: eo,
          children: [q && et(), z && (0, i.jsxs)("div", {
            className: o()(O.content, O.clamp, O.placeholderWidth, {
              [O.panel]: p === A.y0.PANEL
            }),
            ref: x,
            children: [en(), ei()]
          }), z && (0, i.jsxs)("div", {
            className: o()(O.content, O.unclamp, O.placeholderWidth, O.incorporeal, {
              [O.panel]: p === A.y0.PANEL
            }),
            ref: B,
            children: [en(), ei()]
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: o()(O.visibleContainer, er),
      ref: Z,
      children: [(0, i.jsx)(N.Z, {
        isHovering: H,
        location: "UserProfileCustomStatusBubble",
        className: O.reactReplyBar
      }), (0, i.jsx)(_.Clickable, {
        tabIndex: 0,
        className: es,
        onFocus: () => ee(!0),
        onBlur: () => ee(!1),
        onMouseEnter: () => ee(!0),
        onMouseLeave: () => ee(!1),
        onClick: q ? () => {
          M({
            action: "PRESS_SET_CUSTOM_STATUS"
          }), null == v || v(), (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, 211065));
            return t => (0, i.jsx)(e, {
              ...t,
              sourceAnalyticsLocations: D
            })
          })
        } : void 0,
        children: (0, i.jsxs)("span", {
          className: eo,
          children: [q && et(), z && (() => {
            let e = o()(O.content, {
              [O.clamp]: b,
              [O.unclamp]: !b,
              [O.singleLineAlign]: X
            });
            return (0, i.jsxs)(a.animated.div, {
              style: J,
              className: e,
              children: [en(), ei()]
            })
          })()]
        })
      })]
    })]
  })
}