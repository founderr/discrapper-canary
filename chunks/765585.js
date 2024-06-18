"use strict";
t(47120);
var r = t(735250),
  o = t(470079),
  i = t(120356),
  s = t.n(i),
  l = t(481060),
  c = t(393238),
  u = t(605236),
  a = t(311715),
  d = t(921944),
  I = t(689938),
  f = t(255372);
n.Z = o.forwardRef(function(e, n) {
  let {
    body: t,
    header: i,
    artClassName: m,
    headerClassName: h,
    contentClassName: N,
    tryItText: v,
    dismissText: E,
    onTryFeature: g,
    onClose: p,
    className: A,
    inlineArt: C = !1,
    isPremiumFeature: T = !1,
    shouldUseHorizontalButtons: _ = !1,
    showGIFTag: W = !1,
    dismissibleContent: S,
    position: D = "top",
    align: R = "center",
    art: L,
    isPremiumEarlyAccess: P = !1,
    maxWidth: x = 280
  } = e, O = _ ? l.Button.Sizes.LARGE : l.Button.Sizes.MAX, [b, k] = o.useState(!1), {
    ref: w,
    width: Z
  } = (0, c.Z)();

  function U(e) {
    (0, u.EW)(S, {
      dismissAction: e
    })
  }
  return o.useEffect(() => {
    var e, n;
    let t = (null !== (n = null === (e = w.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== n ? n : 0) + 64;
    !b && t > x && k(!0)
  }, [b, Z, w, x]), o.useEffect(() => {
    (0, u.kk)(S)
  }, [S]), (0, r.jsx)("div", {
    className: A,
    ref: n,
    children: (0, r.jsxs)("div", {
      className: s()(f.content, N, {
        [f.contentNoArt]: null == m || C,
        [f.contentPremium]: T || P
      }),
      children: [(0, r.jsxs)("div", {
        className: s()(m, C ? f.artInline : f.artAbsolute),
        children: [W && (0, r.jsx)(a.Z, {
          className: f.gifTag
        }), L]
      }), (0, r.jsxs)("div", {
        className: f.body,
        children: [(0, r.jsxs)(l.Heading, {
          className: s()(T ? f.headerWithPremiumIcon : f.header, h),
          variant: "heading-md/bold",
          color: "always-white",
          children: [T && !P ? (0, r.jsx)(l.NitroWheelIcon, {
            size: "md",
            color: "currentColor",
            className: f.premiumIcon
          }) : null, P ? (0, r.jsxs)(l.Text, {
            color: "always-white",
            variant: "eyebrow",
            className: f.earlyAccessBadgeContainer,
            children: [(0, r.jsx)(l.NitroWheelIcon, {
              size: "md",
              color: "currentColor",
              className: f.earlyAccessIcon
            }), (0, r.jsx)("span", {
              className: f.earlyAccessText,
              children: I.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
            })]
          }) : null, i]
        }), null == t ? null : "string" == typeof t ? (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          children: t
        }) : t]
      }), (0, r.jsx)("div", {
        ref: w,
        className: b || !_ ? f.buttonContainerVertical : f.buttonContainerHorizontal,
        children: null != g ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Button, {
            className: f.button,
            size: O,
            onClick: e => {
              null == p || p(e), g(e), U(d.L.PRIMARY)
            },
            color: T || P ? l.Button.Colors.BRAND_INVERTED : l.Button.Colors.WHITE,
            children: null != v ? v : I.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
          }), (0, r.jsx)(l.Button, {
            className: f.button,
            size: O,
            onClick: e => {
              null == p || p(e), U(d.L.DISMISS)
            },
            color: T || P ? l.Button.Colors.WHITE : l.Button.Colors.BRAND,
            look: T || P ? l.Button.Looks.LINK : l.Button.Looks.FILLED,
            children: null != E ? E : I.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
          })]
        }) : (0, r.jsx)(l.Button, {
          className: f.button,
          size: l.Button.Sizes.MAX,
          onClick: e => {
            null == p || p(e), U(d.L.PRIMARY)
          },
          color: l.Button.Colors.WHITE,
          children: I.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
        })
      }), (0, r.jsx)("div", {
        className: s()(f.pointer, {
          [f.bottomPointer]: "top" === D,
          [f.centerLeftPointer]: "right" === D && "center" === R,
          [f.topLeftPointer]: "right" === D && "top" === R
        })
      })]
    })
  })
})