"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("222007");
var n = l("37983"),
  s = l("884691"),
  a = l("414456"),
  r = l.n(a),
  i = l("77078"),
  u = l("731898"),
  o = l("10641"),
  d = l("275623"),
  c = l("216422"),
  f = l("994428"),
  m = l("782340"),
  S = l("804920"),
  h = s.forwardRef(function(e, t) {
    let {
      body: l,
      header: a,
      artClassName: h,
      headerClassName: C,
      contentClassName: E,
      tryItText: p,
      dismissText: N,
      onTryFeature: g,
      onClose: _,
      className: x,
      inlineArt: I = !1,
      isPremiumFeature: v = !1,
      shouldUseHorizontalButtons: A = !1,
      showGIFTag: R = !1,
      dismissibleContent: T,
      position: L = "top",
      align: j = "center",
      art: M,
      isPremiumEarlyAccess: O = !1,
      maxWidth: D = 280
    } = e, b = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [P, y] = s.useState(!1), {
      ref: k,
      width: G
    } = (0, u.default)();

    function H(e) {
      (0, o.markDismissibleContentAsDismissed)(T, {
        dismissAction: e
      })
    }
    return s.useEffect(() => {
      var e, t;
      let l = (null !== (t = null === (e = k.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
      !P && l > D && y(!0)
    }, [P, G, k, D]), s.useEffect(() => {
      (0, o.requestMarkDismissibleContentAsShown)(T)
    }, [T]), (0, n.jsx)("div", {
      className: x,
      ref: t,
      children: (0, n.jsxs)("div", {
        className: r(S.content, E, {
          [S.contentNoArt]: null == h || I,
          [S.contentPremium]: v || O
        }),
        children: [(0, n.jsxs)("div", {
          className: r(h, I ? S.artInline : S.artAbsolute),
          children: [R && (0, n.jsx)(d.default, {
            className: S.gifTag
          }), M]
        }), (0, n.jsxs)("div", {
          className: S.body,
          children: [(0, n.jsxs)(i.Heading, {
            className: r(v ? S.headerWithPremiumIcon : S.header, C),
            variant: "heading-md/bold",
            color: "always-white",
            children: [v && !O ? (0, n.jsx)(c.default, {
              className: S.premiumIcon
            }) : null, O ? (0, n.jsxs)(i.Text, {
              color: "always-white",
              variant: "eyebrow",
              className: S.earlyAccessBadgeContainer,
              children: [(0, n.jsx)(c.default, {
                className: S.earlyAccessIcon
              }), (0, n.jsx)("span", {
                className: S.earlyAccessText,
                children: m.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
              })]
            }) : null, a]
          }), null == l ? null : "string" == typeof l ? (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: l
          }) : l]
        }), (0, n.jsx)("div", {
          ref: k,
          className: P || !A ? S.buttonContainerVertical : S.buttonContainerHorizontal,
          children: null != g ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Button, {
              className: S.button,
              size: b,
              onClick: e => {
                null == _ || _(e), g(e), H(f.ContentDismissActionType.PRIMARY)
              },
              color: v || O ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
              look: v || O ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
              children: null != p ? p : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
            }), (0, n.jsx)(i.Button, {
              className: S.button,
              size: b,
              onClick: e => {
                null == _ || _(e), H(f.ContentDismissActionType.DISMISS)
              },
              color: v || O ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
              look: v || O ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
              children: null != N ? N : m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
            })]
          }) : (0, n.jsx)(i.Button, {
            className: S.button,
            size: i.Button.Sizes.MAX,
            onClick: e => {
              null == _ || _(e), H(f.ContentDismissActionType.PRIMARY)
            },
            color: i.Button.Colors.WHITE,
            children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
          })
        }), (0, n.jsx)("div", {
          className: r(S.pointer, {
            [S.bottomPointer]: "top" === L,
            [S.centerLeftPointer]: "right" === L && "center" === j,
            [S.topLeftPointer]: "right" === L && "top" === j
          })
        })]
      })
    })
  })