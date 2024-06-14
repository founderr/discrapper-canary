"use strict";
E.r(t), E.d(t, {
  CaretPosition: function() {
    return T
  },
  default: function() {
    return o
  }
});
var s, _, T, a, A = E("735250"),
  n = E("470079"),
  I = E("120356"),
  u = E.n(I),
  i = E("481060"),
  l = E("921944"),
  L = E("835104");

function o(e) {
  let {
    className: t,
    header: E,
    headerClassName: s,
    content: _,
    contentClassName: T,
    buttonCTA: a,
    secondaryButtonCTA: I,
    onClick: o,
    onSecondaryClick: r,
    buttonProps: d = {
      color: i.Button.Colors.BRAND,
      look: i.Button.Looks.FILLED
    },
    secondaryButtonProps: N = {
      color: i.Button.Colors.BRAND_INVERTED
    },
    onComponentMount: S,
    asset: g,
    markAsDismissed: D,
    caretPosition: G = "caretTopCenter",
    buttonLayout: O = 0
  } = e;
  n.useEffect(() => {
    null == S || S()
  }, []);
  let c = null != I;
  return (0, A.jsxs)("div", {
    className: u()(t, L.upsellTooltipWrapper, L[G]),
    children: [g, null == E ? null : (0, A.jsx)(i.Heading, {
      className: u()(s, L.upsellTooltipHeader),
      variant: "heading-md/semibold",
      children: E
    }), (0, A.jsx)(i.Text, {
      color: "always-white",
      className: u()(T, L.content),
      variant: "text-sm/normal",
      children: _
    }), null != a || c ? (0, A.jsxs)("div", {
      className: u()(L.upsellButtonsContainer, {
        [L.upsellButtonsAdjacent]: 0 === O,
        [L.upsellButtonsStacked]: 1 === O
      }),
      children: [c ? (0, A.jsx)(i.Button, {
        ...N,
        onClick: () => {
          null == r || r(), null == D || D(l.ContentDismissActionType.SECONDARY)
        },
        children: I
      }) : null, null == a ? null : (0, A.jsx)(i.Button, {
        className: u()({
          [L.fullWidth]: !c
        }, d.className),
        color: d.color,
        look: d.look,
        innerClassName: d.innerClassName,
        onClick: e => {
          o(e), null == D || D(l.ContentDismissActionType.PRIMARY)
        },
        children: a
      })]
    }) : null]
  })
}(s = T || (T = {})).TOP_CENTER = "caretTopCenter", s.TOP_RIGHT = "caretTopRight", s.TOP_LEFT = "caretTopLeft", s.BOTTOM_CENTER = "caretBottomCenter", s.BOTTOM_LEFT = "caretBottomLeft", s.LEFT_CENTER = "caretLeftCenter", s.LEFT_TOP = "caretLeftTop", s.RIGHT_CENTER = "caretRightCenter", (_ = a || (a = {}))[_.ADJACENT = 0] = "ADJACENT", _[_.STACKED = 1] = "STACKED", o.CaretPosition = T, o.ButtonLayout = a