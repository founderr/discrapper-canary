"use strict";
n.r(t), n("47120");
var l = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  i = n("481060"),
  u = n("393238"),
  o = n("605236"),
  c = n("311715"),
  d = n("466111"),
  f = n("921944"),
  h = n("689938"),
  C = n("162335");
t.default = r.forwardRef(function(e, t) {
  let {
    body: n,
    header: s,
    artClassName: v,
    headerClassName: p,
    contentClassName: m,
    tryItText: I,
    dismissText: N,
    onTryFeature: g,
    onClose: E,
    className: H,
    inlineArt: D = !1,
    isPremiumFeature: x = !1,
    shouldUseHorizontalButtons: S = !1,
    showGIFTag: L = !1,
    dismissibleContent: T,
    position: w = "top",
    align: A = "center",
    art: R,
    isPremiumEarlyAccess: V = !1,
    maxWidth: M = 280
  } = e, j = S ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [P, _] = r.useState(!1), {
    ref: y,
    width: k
  } = (0, u.default)();

  function O(e) {
    (0, o.markDismissibleContentAsDismissed)(T, {
      dismissAction: e
    })
  }
  return r.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = y.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !P && n > M && _(!0)
  }, [P, k, y, M]), r.useEffect(() => {
    (0, o.requestMarkDismissibleContentAsShown)(T)
  }, [T]), (0, l.jsx)("div", {
    className: H,
    ref: t,
    children: (0, l.jsxs)("div", {
      className: a()(C.content, m, {
        [C.contentNoArt]: null == v || D,
        [C.contentPremium]: x || V
      }),
      children: [(0, l.jsxs)("div", {
        className: a()(v, D ? C.artInline : C.artAbsolute),
        children: [L && (0, l.jsx)(c.default, {
          className: C.gifTag
        }), R]
      }), (0, l.jsxs)("div", {
        className: C.body,
        children: [(0, l.jsxs)(i.Heading, {
          className: a()(x ? C.headerWithPremiumIcon : C.header, p),
          variant: "heading-md/bold",
          color: "always-white",
          children: [x && !V ? (0, l.jsx)(d.default, {
            className: C.premiumIcon
          }) : null, V ? (0, l.jsxs)(i.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: C.earlyAccessBadgeContainer,
            children: [(0, l.jsx)(d.default, {
              className: C.earlyAccessIcon
            }), (0, l.jsx)("span", {
              className: C.earlyAccessText,
              children: h.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
            })]
          }) : null, s]
        }), null == n ? null : "string" == typeof n ? (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, l.jsx)("div", {
        ref: y,
        className: P || !S ? C.buttonContainerVertical : C.buttonContainerHorizontal,
        children: null != g ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(i.Button, {
            className: C.button,
            size: j,
            onClick: e => {
              null == E || E(e), g(e), O(f.ContentDismissActionType.PRIMARY)
            },
            color: x || V ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
            look: x || V ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
            children: null != I ? I : h.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, l.jsx)(i.Button, {
            className: C.button,
            size: j,
            onClick: e => {
              null == E || E(e), O(f.ContentDismissActionType.DISMISS)
            },
            color: x || V ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
            look: x || V ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
            children: null != N ? N : h.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, l.jsx)(i.Button, {
          className: C.button,
          size: i.Button.Sizes.MAX,
          onClick: e => {
            null == E || E(e), O(f.ContentDismissActionType.PRIMARY)
          },
          color: i.Button.Colors.WHITE,
          children: h.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, l.jsx)("div", {
        className: a()(C.pointer, {
          [C.bottomPointer]: "top" === w,
          [C.centerLeftPointer]: "right" === w && "center" === A,
          [C.topLeftPointer]: "right" === w && "top" === A
        })
      })]
    })
  })
})