"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  r = l.n(s),
  i = l("77078"),
  u = l("731898"),
  o = l("10641"),
  d = l("275623"),
  c = l("216422"),
  f = l("994428"),
  m = l("782340"),
  S = l("804920"),
  C = a.forwardRef(function(e, t) {
    let {
      body: l,
      header: s,
      artClassName: C,
      headerClassName: E,
      contentClassName: h,
      tryItText: N,
      dismissText: g,
      onTryFeature: _,
      onClose: p,
      className: I,
      inlineArt: x = !1,
      isPremiumFeature: v = !1,
      shouldUseHorizontalButtons: A = !1,
      showGIFTag: R = !1,
      dismissibleContent: T,
      position: L = "top",
      align: M = "center",
      art: j,
      isPremiumEarlyAccess: O = !1,
      maxWidth: D = 280
    } = e, P = A ? i.Button.Sizes.LARGE : i.Button.Sizes.MAX, [b, U] = a.useState(!1), {
      ref: G,
      width: y
    } = (0, u.default)();

    function V(e) {
      (0, o.markDismissibleContentAsDismissed)(T, {
        dismissAction: e
      })
    }
    return a.useEffect(() => {
      var e, t;
      let l = (null !== (t = null === (e = G.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
      !b && l > D && U(!0)
    }, [b, y, G, D]), a.useEffect(() => {
      (0, o.requestMarkDismissibleContentAsShown)(T)
    }, [T]), (0, n.jsx)("div", {
      className: I,
      ref: t,
      children: (0, n.jsxs)("div", {
        className: r(S.content, h, {
          [S.contentNoArt]: null == C || x,
          [S.contentPremium]: v || O
        }),
        children: [(0, n.jsxs)("div", {
          className: r(C, x ? S.artInline : S.artAbsolute),
          children: [R && (0, n.jsx)(d.default, {
            className: S.gifTag
          }), j]
        }), (0, n.jsxs)("div", {
          className: S.body,
          children: [(0, n.jsxs)(i.Heading, {
            className: r(v ? S.headerWithPremiumIcon : S.header, E),
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
            }) : null, s]
          }), null == l ? null : "string" == typeof l ? (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            children: l
          }) : l]
        }), (0, n.jsx)("div", {
          ref: G,
          className: b || !A ? S.buttonContainerVertical : S.buttonContainerHorizontal,
          children: null != _ ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(i.Button, {
              className: S.button,
              size: P,
              onClick: e => {
                null == p || p(e), _(e), V(f.ContentDismissActionType.PRIMARY)
              },
              color: v || O ? i.Button.Colors.BRAND : i.Button.Colors.WHITE,
              look: v || O ? i.Button.Looks.INVERTED : i.Button.Looks.FILLED,
              children: null != N ? N : m.default.Messages.EDUCATION_NEW_FEATURE_TRY_IT
            }), (0, n.jsx)(i.Button, {
              className: S.button,
              size: P,
              onClick: e => {
                null == p || p(e), V(f.ContentDismissActionType.DISMISS)
              },
              color: v || O ? i.Button.Colors.WHITE : i.Button.Colors.BRAND,
              look: v || O ? i.Button.Looks.LINK : i.Button.Looks.FILLED,
              children: null != g ? g : m.default.Messages.EDUCATION_NEW_FEATURE_DISMISS
            })]
          }) : (0, n.jsx)(i.Button, {
            className: S.button,
            size: i.Button.Sizes.MAX,
            onClick: e => {
              null == p || p(e), V(f.ContentDismissActionType.PRIMARY)
            },
            color: i.Button.Colors.WHITE,
            children: m.default.Messages.EDUCATION_NEW_FEATURE_CONFIRM
          })
        }), (0, n.jsx)("div", {
          className: r(S.pointer, {
            [S.bottomPointer]: "top" === L,
            [S.centerLeftPointer]: "right" === L && "center" === M,
            [S.topLeftPointer]: "right" === L && "top" === M
          })
        })]
      })
    })
  })