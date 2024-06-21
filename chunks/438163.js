"use strict";
n.d(t, {
  J: function() {
    return O
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
  d = n(607070),
  E = n(100527),
  I = n(906732),
  T = n(594174),
  h = n(751009),
  S = n(785717),
  f = n(228168),
  N = n(689938),
  A = n(739550);
let m = "text-sm/medium";

function O(e) {
  let {
    user: t,
    statusActivity: s,
    profileType: O,
    hasEntered: R = !0,
    animate: p = !0,
    onClose: g
  } = e, {
    modifyStatusEnabled: C
  } = (0, h.K)({
    location: "UserProfileCustomStatusBubble"
  }), {
    analyticsLocations: v
  } = (0, I.ZP)(E.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: L
  } = (0, S.KZ)(), D = (0, l.e7)([T.default], () => T.default.getCurrentUser()), M = t.id === (null == D ? void 0 : D.id), P = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [y, U] = r.useState(!0), [b] = r.useState(() => new u.V7), G = r.useRef(null), w = r.useRef(null), B = r.useRef(null), k = r.useRef(null), x = (null == s ? void 0 : s.state) != null && "" !== s.state ? s.state : null, V = null != x && x.length > 0, {
    emoji: Z
  } = null != s ? s : {}, H = null != Z, F = H && !V, Y = H || V, j = M && !Y && C, [W, K] = r.useState(F);
  r.useLayoutEffect(() => {
    if (null == G.current || F) return;
    let e = Math.floor(G.current.getBoundingClientRect().height);
    if (K(F || e <= 18), R) {
      var t, n, i, r;
      w.current = null !== (i = null === (t = G.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : 144, k.current = null !== (r = null === (n = B.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== r ? r : 36
    }
  }, [R, F]);
  let [z, q] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(36, "px"),
    config: {
      clamp: !0,
      immediate: P,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => b.stop(), [b]), !Y && !j) return null;
  let X = e => {
      var t, n;
      if (!W) {
        e ? q({
          maxHeight: "".concat(Math.min(null !== (t = w.current) && void 0 !== t ? t : 144, 144), "px"),
          delay: 300
        }) : q({
          maxHeight: "".concat(Math.min(null !== (n = k.current) && void 0 !== n ? n : 36, 36), "px"),
          delay: 0
        });
        b.start(e ? 300 : 150, () => {
          U(!e)
        })
      }
    },
    Q = () => (0, i.jsxs)("div", {
      className: A.content,
      children: [(0, i.jsx)(_.CirclePlusIcon, {
        className: A.addStatusIcon,
        colorClass: A.addStatusIconColor
      }), (0, i.jsx)(_.Text, {
        variant: m,
        className: A.addStatusPrompt,
        children: N.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    J = () => H ? (0, i.jsx)(c.I, {
      className: V ? A.statusEmojiInline : A.statusEmojiOnly,
      emoji: Z,
      animate: p,
      hideTooltip: !1,
      tooltipDelay: f.vB
    }) : null,
    $ = () => V ? (0, i.jsx)(_.Text, {
      variant: m,
      className: A.statusText,
      children: x
    }) : null,
    ee = {
      [A.biteSize]: O === f.y0.BITE_SIZE,
      [A.fullSize]: O === f.y0.FULL_SIZE,
      [A.panel]: O === f.y0.PANEL
    },
    et = o()(A.statusBubbleOuter, ee, {
      [A.statusBubbleShape]: !V && H || !W,
      [A.statusBubbleSingleLineWithTextShape]: W && V || j,
      [A.statusBubbleOuterStatusCursor]: j
    }),
    en = o()(A.statusBubble, {
      [A.statusBubbleShape]: !V && H || !W,
      [A.statusBubbleSingleLineWithTextShape]: W && V || j,
      [A.statusBubbleEmojiOnlyPadding]: F,
      [A.statusBubbleWithTextPadding]: V || j,
      [A.statusBubbleWithTextMinWidth]: V,
      [A.statusBubbleCopyStatusCursor]: Y
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(A.invisibleContainer, ee),
      children: (0, i.jsx)("div", {
        className: et,
        children: (0, i.jsxs)("span", {
          className: en,
          children: [j && Q(), Y && (0, i.jsxs)("div", {
            className: o()(A.content, A.clamp, A.placeholderWidth, {
              [A.panel]: O === f.y0.PANEL
            }),
            ref: B,
            children: [J(), $()]
          }), Y && (0, i.jsxs)("div", {
            className: o()(A.content, A.unclamp, A.placeholderWidth, A.incorporeal, {
              [A.panel]: O === f.y0.PANEL
            }),
            ref: G,
            children: [J(), $()]
          })]
        })
      })
    }), (0, i.jsx)("div", {
      className: o()(A.visibleContainer, ee),
      children: (0, i.jsx)(_.Clickable, {
        tabIndex: 0,
        className: et,
        onFocus: () => X(!0),
        onBlur: () => X(!1),
        onMouseEnter: () => X(!0),
        onMouseLeave: () => X(!1),
        onClick: j ? () => {
          L({
            action: "PRESS_SET_CUSTOM_STATUS"
          }), null == g || g(), (0, _.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("47484")]).then(n.bind(n, 211065));
            return t => (0, i.jsx)(e, {
              ...t,
              sourceAnalyticsLocations: v
            })
          })
        } : void 0,
        children: (0, i.jsxs)("span", {
          className: en,
          children: [j && Q(), Y && (() => {
            let e = o()(A.content, {
              [A.clamp]: y,
              [A.unclamp]: !y,
              [A.singleLineAlign]: W
            });
            return (0, i.jsxs)(a.animated.div, {
              style: z,
              className: e,
              children: [J(), $()]
            })
          })()]
        })
      })
    })]
  })
}