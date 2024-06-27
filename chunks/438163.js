"use strict";
n.d(t, {
  Z: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(846519),
  _ = n(955623),
  c = n(481060),
  d = n(788307),
  E = n(727637),
  I = n(607070),
  T = n(100527),
  h = n(906732),
  f = n(676035),
  S = n(314897),
  A = n(158776),
  N = n(751009),
  m = n(785717),
  O = n(825801),
  R = n(228168),
  p = n(981631),
  g = n(689938),
  C = n(739550);
let v = "text-sm/medium",
  L = 36,
  D = 144;

function M(e) {
  let {
    statusActivity: t,
    profileType: s,
    canModifyStatus: f = !1,
    hasEntered: S = !0,
    animate: A = !0,
    onClose: N
  } = e, {
    analyticsLocations: p
  } = (0, h.ZP)(T.Z.PROFILE_CUSTOM_STATUS), {
    trackUserProfileAction: M
  } = (0, m.KZ)(), P = (0, l.e7)([I.Z], () => I.Z.useReducedMotion), [y, U] = r.useState(!0), [b] = r.useState(() => new u.V7), G = r.useRef(null), w = r.useRef(null), B = r.useRef(null), x = r.useRef(null), k = r.useRef(null), V = (0, E.Z)(k), {
    emoji: Z,
    state: H
  } = null != t ? t : {}, F = null != H && "" !== H ? H : null, Y = null != F && F.length > 0, j = null != Z, W = j && !Y, K = j || Y, z = f && !K, q = f && K, [X, Q] = r.useState(W ? 1 : 0), J = 1 === X, $ = X > 2;
  r.useLayoutEffect(() => {
    if (null != G.current && !W) {
      if (Q(Math.ceil(Math.floor(G.current.getBoundingClientRect().height) / 18)), S) {
        var e, t, n, i;
        w.current = null !== (n = null === (e = G.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height) && void 0 !== n ? n : D, x.current = null !== (i = null === (t = B.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== i ? i : L
      }
    }
  }, [S, W]);
  let [{
    maxHeight: ee,
    editIconOpacity: et
  }, en] = (0, a.useSpring)(() => ({
    maxHeight: "".concat(L, "px"),
    editIconOpacity: 0,
    config: {
      clamp: !0,
      immediate: P,
      duration: 150
    }
  }));
  if (r.useEffect(() => () => b.stop(), [b]), !K && !z) return null;
  let ei = e => {
      var t, n;
      if (!!$) {
        if (e) {
          let e = Math.min(null !== (t = w.current) && void 0 !== t ? t : D, D);
          en({
            maxHeight: "".concat(e, "px"),
            editIconOpacity: 1,
            delay: 300
          })
        } else {
          let e = Math.min(null !== (n = x.current) && void 0 !== n ? n : L, L);
          en({
            maxHeight: "".concat(e, "px"),
            editIconOpacity: 0,
            delay: 0
          })
        }
        b.start(e ? 300 : 150, () => {
          U(!e)
        })
      }
    },
    er = () => q ? (0, i.jsxs)(a.animated.div, {
      style: $ ? {
        opacity: et
      } : void 0,
      className: o()(C.editIcon, {
        [C.expandable]: $
      }),
      children: [!W && (0, i.jsx)("div", {
        className: C.editGradient
      }), (0, i.jsx)(c.Clickable, {
        className: o()(C.editClickable, W && C.editClickableEmojiOnly),
        onClick: el,
        children: (0, i.jsx)(_.v, {
          size: "xs"
        })
      })]
    }) : null,
    es = () => j ? (0, i.jsx)(d.I, {
      className: Y ? C.statusEmojiInline : C.statusEmojiOnly,
      emoji: Z,
      animate: A,
      hideTooltip: !1,
      tooltipDelay: R.vB
    }) : null,
    eo = () => Y ? (0, i.jsx)(c.Text, {
      variant: v,
      className: C.statusText,
      children: F
    }) : null,
    ea = () => (0, i.jsxs)("div", {
      className: C.content,
      children: [(0, i.jsx)(c.CirclePlusIcon, {
        className: C.addStatusIcon,
        colorClass: C.addStatusIconColor
      }), (0, i.jsx)(c.Text, {
        variant: v,
        className: C.addStatusPrompt,
        children: g.Z.Messages.USER_SETTINGS_ADD_STATUS
      })]
    }),
    el = () => {
      M({
        action: "PRESS_SET_CUSTOM_STATUS"
      }), null == N || N(), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("51714").then(n.bind(n, 211065));
        return t => (0, i.jsx)(e, {
          ...t,
          sourceAnalyticsLocations: p
        })
      })
    },
    eu = {
      [C.biteSize]: s === R.y0.BITE_SIZE,
      [C.fullSize]: s === R.y0.FULL_SIZE,
      [C.panel]: s === R.y0.PANEL
    },
    e_ = o()(C.statusBubbleOuter, eu, {
      [C.statusBubbleShape]: !Y && j || !J,
      [C.statusBubbleSingleLineWithTextShape]: J && Y || z,
      [C.statusBubbleOuterAddStatusCursor]: z
    }),
    ec = o()(C.statusBubble, {
      [C.statusBubbleShape]: !Y && j || !J,
      [C.statusBubbleSingleLineWithTextShape]: J && Y || z,
      [C.statusBubbleEmojiOnlyPadding]: W,
      [C.statusBubbleWithTextPadding]: Y || z,
      [C.statusBubbleWithTextMinWidth]: Y,
      [C.statusBubbleCopyStatusCursor]: K
    });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: o()(C.invisibleContainer, eu),
      children: (0, i.jsx)("div", {
        className: e_,
        children: (0, i.jsxs)("span", {
          className: ec,
          children: [z && ea(), K && (0, i.jsxs)("div", {
            className: o()(C.content, C.clamp, C.placeholderWidth, {
              [C.panel]: s === R.y0.PANEL
            }),
            ref: B,
            children: [es(), eo()]
          }), K && (0, i.jsxs)("div", {
            className: o()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, {
              [C.panel]: s === R.y0.PANEL
            }),
            ref: G,
            children: [es(), eo()]
          })]
        })
      })
    }), (0, i.jsxs)("div", {
      className: o()(C.visibleContainer, eu),
      ref: k,
      children: [(0, i.jsx)(O.Z, {
        isHovering: V,
        location: "UserProfileCustomStatusBubble",
        className: C.reactReplyBar
      }), (0, i.jsx)(c.Clickable, {
        tabIndex: 0,
        className: e_,
        onFocus: () => ei(!0),
        onBlur: e => {
          !e.currentTarget.contains(e.relatedTarget) && ei(!1)
        },
        onMouseEnter: () => ei(!0),
        onMouseLeave: () => ei(!1),
        onClick: z ? el : void 0,
        children: (0, i.jsxs)("span", {
          className: ec,
          children: [z && ea(), K && (() => {
            let e = o()(C.content, {
              [C.clamp]: y,
              [C.unclamp]: !y,
              [C.singleLineAlign]: J
            });
            return (0, i.jsxs)(a.animated.div, {
              style: {
                maxHeight: ee
              },
              className: e,
              children: [er(), es(), eo()]
            })
          })()]
        })
      })]
    })]
  })
}

function P(e) {
  let {
    user: t,
    ...n
  } = e, r = (0, l.e7)([S.default], () => S.default.getId() === t.id), s = (0, f.a)(), o = (0, l.e7)([A.Z], () => A.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === p.IIU.CUSTOM_STATUS
  })), {
    modifyStatusEnabled: a
  } = (0, N.K)({
    location: "UserProfileCustomStatusBubble"
  }), u = r && a;
  return (0, i.jsx)(M, {
    canModifyStatus: u,
    statusActivity: u ? s : o,
    ...n
  })
}