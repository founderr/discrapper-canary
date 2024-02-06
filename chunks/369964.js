"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("222007");
var s = l("37983"),
  n = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("77078"),
  u = l("731898"),
  o = l("10641"),
  c = l("275623"),
  d = l("216422"),
  f = l("994428"),
  C = l("782340"),
  h = l("804920"),
  N = n.forwardRef(function(e, t) {
    let {
      body: l,
      header: a,
      artClassName: N,
      headerClassName: p,
      contentClassName: L,
      tryItText: T,
      dismissText: I,
      onTryFeature: v,
      onClose: m,
      className: E,
      inlineArt: H = !1,
      isPremiumFeature: x = !1,
      shouldUseHorizontalButtons: A = !1,
      showGIFTag: M = !1,
      dismissibleContent: R,
      position: D = "top",
      align: _ = "center",
      art: j,
      isPremiumEarlyAccess: y = !1,
      maxWidth: g = 280
    } = e, w = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [B, V] = n.useState(!1), {
      ref: S,
      width: U
    } = (0, u.default)();

    function k(e) {
      (0, o.markDismissibleContentAsDismissed)(R, {
        dismissAction: e
      })
    }
    return n.useEffect(() => {
      var e, t;
      let l = (null !== (t = null === (e = S.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
      !B && l > g && V(!0)
    }, [B, U, S, g]), n.useEffect(() => {
      (0, o.requestMarkDismissibleContentAsShown)(R)
    }, [R]), (0, s.jsx)("div", {
      className: E,
      ref: t,
      children: (0, s.jsxs)("div", {
        className: r(h.content, L, {
          [h.contentNoArt]: null == N || H,
          [h.contentPremium]: x || y
        }),
        children: [(0, s.jsxs)("div", {
          className: r(N, H ? h.artInline : h.artAbsolute),
          children: [M && (0, s.jsx)(c.default, {
            className: h.gifTag
          }), j]
        }), (0, s.jsxs)("div", {
          className: h.body,
          children: [(0, s.jsxs)(i.Heading, {
            className: r(x ? h.headerWithPremiumIcon : h.header, p),
            variant: "heading-md/bold",
            color: "always-white",
            children: [x && !y ? (0, s.jsx)(d.default, {
              className: h.premiumIcon
            }) : null, y ? (0, s.jsxs)(i.Text, {
              color: "always-white",
              variant: "eyebrow",
              className: h.earlyAccessBadgeContainer,
              children: [(0, s.jsx)(d.default, {
                className: h.earlyAccessIcon
              }), (0, s.jsx)("span", {
                className: h.earlyAccessText,
                children: C.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
              })]
            }) : null, a]
          }), null == l ? null : "string" == typeof l ? (0, s.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: l
          }) : l]
        }), (0, s.jsx)("div", {
          ref: S,
          className: B || !A ? h.buttonContainerVertical : h.buttonContainerHorizontal,
          children: null != v ? (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(i.Button, {
              className: h.button,
              size: w,
              onClick: e => {
                null == m || m(e), v(e), k(f.ContentDismissActionType.PRIMARY)
              },
              color: x || y ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
              look: x || y ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
              children: null != T ? T : C.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
            }), (0, s.jsx)(i.Button, {
              className: h.button,
              size: w,
              onClick: e => {
                null == m || m(e), k(f.ContentDismissActionType.DISMISS)
              },
              color: x || y ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
              look: x || y ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
              children: null != I ? I : C.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
            })]
          }) : (0, s.jsx)(i.Button, {
            className: h.button,
            size: i.Button.Sizes.MAX,
            onClick: e => {
              null == m || m(e), k(f.ContentDismissActionType.PRIMARY)
            },
            color: i.Button.Colors.WHITE,
            children: C.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
          })
        }), (0, s.jsx)("div", {
          className: r(h.pointer, {
            [h.bottomPointer]: "top" === D,
            [h.centerLeftPointer]: "right" === D && "center" === _,
            [h.topLeftPointer]: "right" === D && "top" === _
          })
        })]
      })
    })
  })