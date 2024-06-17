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
  C = n("255372");
t.default = r.forwardRef(function(e, t) {
  let {
    body: n,
    header: s,
    artClassName: v,
    headerClassName: p,
    contentClassName: m,
    tryItText: N,
    dismissText: I,
    onTryFeature: E,
    onClose: g,
    className: T,
    inlineArt: H = !1,
    isPremiumFeature: x = !1,
    shouldUseHorizontalButtons: L = !1,
    showGIFTag: D = !1,
    dismissibleContent: w,
    position: A = "top",
    align: R = "center",
    art: S,
    isPremiumEarlyAccess: M = !1,
    maxWidth: _ = 280
  } = e, V = L ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [j, y] = r.useState(!1), {
    ref: O,
    width: P
  } = (0, u.default)();

  function W(e) {
    (0, o.markDismissibleContentAsDismissed)(w, {
      dismissAction: e
    })
  }
  return r.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = O.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !j && n > _ && y(!0)
  }, [j, P, O, _]), r.useEffect(() => {
    (0, o.requestMarkDismissibleContentAsShown)(w)
  }, [w]), (0, l.jsx)("div", {
    className: T,
    ref: t,
    children: (0, l.jsxs)("div", {
      className: a()(C.content, m, {
        [C.contentNoArt]: null == v || H,
        [C.contentPremium]: x || M
      }),
      children: [(0, l.jsxs)("div", {
        className: a()(v, H ? C.artInline : C.artAbsolute),
        children: [D && (0, l.jsx)(c.default, {
          className: C.gifTag
        }), S]
      }), (0, l.jsxs)("div", {
        className: C.body,
        children: [(0, l.jsxs)(i.Heading, {
          className: a()(x ? C.headerWithPremiumIcon : C.header, p),
          variant: "heading-md/bold",
          color: "always-white",
          children: [x && !M ? (0, l.jsx)(d.default, {
            className: C.premiumIcon
          }) : null, M ? (0, l.jsxs)(i.Text, {
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
        ref: O,
        className: j || !L ? C.buttonContainerVertical : C.buttonContainerHorizontal,
        children: null != E ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(i.Button, {
            className: C.button,
            size: V,
            onClick: e => {
              null == g || g(e), E(e), W(f.ContentDismissActionType.PRIMARY)
            },
            color: x || M ? i.Button.Colors.BRAND_INVERTED : i.Button.Colors.WHITE,
            children: null != N ? N : h.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, l.jsx)(i.Button, {
            className: C.button,
            size: V,
            onClick: e => {
              null == g || g(e), W(f.ContentDismissActionType.DISMISS)
            },
            color: x || M ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
            look: x || M ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
            children: null != I ? I : h.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, l.jsx)(i.Button, {
          className: C.button,
          size: i.Button.Sizes.MAX,
          onClick: e => {
            null == g || g(e), W(f.ContentDismissActionType.PRIMARY)
          },
          color: i.Button.Colors.WHITE,
          children: h.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, l.jsx)("div", {
        className: a()(C.pointer, {
          [C.bottomPointer]: "top" === A,
          [C.centerLeftPointer]: "right" === A && "center" === R,
          [C.topLeftPointer]: "right" === A && "top" === R
        })
      })]
    })
  })
})