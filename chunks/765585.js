"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("393238"),
  u = n("605236"),
  d = n("311715"),
  c = n("466111"),
  f = n("921944"),
  h = n("689938"),
  p = n("162335");
t.default = a.forwardRef(function(e, t) {
  let {
    body: n,
    header: s,
    artClassName: C,
    headerClassName: m,
    contentClassName: g,
    tryItText: E,
    dismissText: S,
    onTryFeature: _,
    onClose: I,
    className: N,
    inlineArt: T = !1,
    isPremiumFeature: A = !1,
    shouldUseHorizontalButtons: L = !1,
    showGIFTag: v = !1,
    dismissibleContent: x,
    position: R = "top",
    align: y = "center",
    art: M,
    isPremiumEarlyAccess: O = !1,
    maxWidth: D = 280
  } = e, b = L ? r.Button.Sizes.LARGE : r.Button.Sizes.MAX, [j, G] = a.useState(!1), {
    ref: U,
    width: P
  } = (0, o.default)();

  function w(e) {
    (0, u.markDismissibleContentAsDismissed)(x, {
      dismissAction: e
    })
  }
  return a.useEffect(() => {
    var e, t;
    let n = (null !== (t = null === (e = U.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
    !j && n > D && G(!0)
  }, [j, P, U, D]), a.useEffect(() => {
    (0, u.requestMarkDismissibleContentAsShown)(x)
  }, [x]), (0, l.jsx)("div", {
    className: N,
    ref: t,
    children: (0, l.jsxs)("div", {
      className: i()(p.content, g, {
        [p.contentNoArt]: null == C || T,
        [p.contentPremium]: A || O
      }),
      children: [(0, l.jsxs)("div", {
        className: i()(C, T ? p.artInline : p.artAbsolute),
        children: [v && (0, l.jsx)(d.default, {
          className: p.gifTag
        }), M]
      }), (0, l.jsxs)("div", {
        className: p.body,
        children: [(0, l.jsxs)(r.Heading, {
          className: i()(A ? p.headerWithPremiumIcon : p.header, m),
          variant: "heading-md/bold",
          color: "always-white",
          children: [A && !O ? (0, l.jsx)(c.default, {
            className: p.premiumIcon
          }) : null, O ? (0, l.jsxs)(r.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: p.earlyAccessBadgeContainer,
            children: [(0, l.jsx)(c.default, {
              className: p.earlyAccessIcon
            }), (0, l.jsx)("span", {
              className: p.earlyAccessText,
              children: h.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
            })]
          }) : null, s]
        }), null == n ? null : "string" == typeof n ? (0, l.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: n
        }) : n]
      }), (0, l.jsx)("div", {
        ref: U,
        className: j || !L ? p.buttonContainerVertical : p.buttonContainerHorizontal,
        children: null != _ ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(r.Button, {
            className: p.button,
            size: b,
            onClick: e => {
              null == I || I(e), _(e), w(f.ContentDismissActionType.PRIMARY)
            },
            color: A || O ? r.Button.Colors.BRAND : r.Button.Colors.WHITE,
            look: A || O ? r.Button.Looks.INVERTED : r.Button.Looks.FILLED,
            children: null != E ? E : h.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, l.jsx)(r.Button, {
            className: p.button,
            size: b,
            onClick: e => {
              null == I || I(e), w(f.ContentDismissActionType.DISMISS)
            },
            color: A || O ? r.Button.Colors.WHITE : r.Button.Colors.BRAND,
            look: A || O ? r.Button.Looks.LINK : r.Button.Looks.FILLED,
            children: null != S ? S : h.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, l.jsx)(r.Button, {
          className: p.button,
          size: r.Button.Sizes.MAX,
          onClick: e => {
            null == I || I(e), w(f.ContentDismissActionType.PRIMARY)
          },
          color: r.Button.Colors.WHITE,
          children: h.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, l.jsx)("div", {
        className: i()(p.pointer, {
          [p.bottomPointer]: "top" === R,
          [p.centerLeftPointer]: "right" === R && "center" === y,
          [p.topLeftPointer]: "right" === R && "top" === y
        })
      })]
    })
  })
})