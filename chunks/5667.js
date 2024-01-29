"use strict";
l.r(t), l.d(t, {
  CaretPosition: function() {
    return n
  },
  ButtonLayout: function() {
    return u
  },
  default: function() {
    return S
  }
});
var s, i, n, u, a = l("37983"),
  o = l("884691"),
  r = l("414456"),
  d = l.n(r),
  c = l("77078"),
  f = l("994428"),
  _ = l("142190");

function S(e) {
  let {
    className: t,
    header: l,
    headerClassName: s,
    content: i,
    contentClassName: n,
    buttonCTA: u,
    secondaryButtonCTA: r,
    onClick: S,
    onSecondaryClick: T,
    onComponentMount: E,
    asset: C,
    markAsDismissed: p,
    caretPosition: m = "caretTopCenter",
    buttonLayout: I = 0
  } = e;
  o.useEffect(() => {
    null == E || E()
  }, []);
  let L = null != r;
  return (0, a.jsxs)("div", {
    className: d(t, _.upsellTooltipWrapper, _[m]),
    children: [C, null == l ? null : (0, a.jsx)(c.Heading, {
      className: d(s, _.upsellTooltipHeader),
      variant: "heading-md/semibold",
      children: l
    }), (0, a.jsx)(c.Text, {
      color: "always-white",
      className: d(n, _.content),
      variant: "text-sm/normal",
      children: i
    }), null != u || L ? (0, a.jsxs)("div", {
      className: d(_.upsellButtonsContainer, {
        [_.upsellButtonsAdjacent]: 0 === I,
        [_.upsellButtonsStacked]: 1 === I
      }),
      children: [L ? (0, a.jsx)(c.Button, {
        color: c.Button.Colors.BRAND,
        onClick: () => {
          null == T || T(), null == p || p(f.ContentDismissActionType.SECONDARY)
        },
        children: r
      }) : null, null == u ? null : (0, a.jsx)(c.Button, {
        className: d({
          [_.fullWidth]: !L
        }),
        color: c.Button.Colors.BRAND,
        look: c.Button.Looks.INVERTED,
        onClick: e => {
          S(e), null == p || p(f.ContentDismissActionType.PRIMARY)
        },
        children: u
      })]
    }) : null]
  })
}(s = n || (n = {})).TOP_CENTER = "caretTopCenter", s.TOP_RIGHT = "caretTopRight", s.TOP_LEFT = "caretTopLeft", s.BOTTOM_CENTER = "caretBottomCenter", s.BOTTOM_LEFT = "caretBottomLeft", s.LEFT_CENTER = "caretLeftCenter", s.LEFT_TOP = "caretLeftTop", s.RIGHT_CENTER = "caretRightCenter", (i = u || (u = {}))[i.ADJACENT = 0] = "ADJACENT", i[i.STACKED = 1] = "STACKED", S.CaretPosition = n, S.ButtonLayout = u