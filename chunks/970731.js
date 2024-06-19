e.d(_, {
  DF: function() {
    return I
  },
  ZP: function() {
    return S
  }
});
var T, s, I, A, n = e(735250),
  N = e(470079),
  t = e(120356),
  r = e.n(t),
  a = e(481060),
  L = e(921944),
  D = e(626994);

function S(E) {
  let {
    className: _,
    header: e,
    headerClassName: T,
    content: s,
    contentClassName: I,
    buttonCTA: A,
    secondaryButtonCTA: t,
    onClick: S,
    onSecondaryClick: U,
    buttonProps: l = {
      color: a.Button.Colors.BRAND,
      look: a.Button.Looks.FILLED
    },
    secondaryButtonProps: O = {
      color: a.Button.Colors.BRAND_INVERTED
    },
    onComponentMount: G,
    asset: M,
    markAsDismissed: R,
    caretPosition: u = "caretTopCenter",
    buttonLayout: i = 0
  } = E;
  N.useEffect(() => {
    null == G || G()
  }, []);
  let o = null != t;
  return (0, n.jsxs)("div", {
    className: r()(_, D.upsellTooltipWrapper, D[u]),
    children: [M, null == e ? null : (0, n.jsx)(a.Heading, {
      className: r()(T, D.upsellTooltipHeader),
      variant: "heading-md/semibold",
      children: e
    }), (0, n.jsx)(a.Text, {
      color: "always-white",
      className: r()(I, D.content),
      variant: "text-sm/normal",
      children: s
    }), null != A || o ? (0, n.jsxs)("div", {
      className: r()(D.upsellButtonsContainer, {
        [D.upsellButtonsAdjacent]: 0 === i,
        [D.upsellButtonsStacked]: 1 === i
      }),
      children: [o ? (0, n.jsx)(a.Button, {
        ...O,
        onClick: () => {
          null == U || U(), null == R || R(L.L.SECONDARY)
        },
        children: t
      }) : null, null == A ? null : (0, n.jsx)(a.Button, {
        className: r()({
          [D.fullWidth]: !o
        }, l.className),
        color: l.color,
        look: l.look,
        innerClassName: l.innerClassName,
        onClick: E => {
          S(E), null == R || R(L.L.PRIMARY)
        },
        children: A
      })]
    }) : null]
  })
}(T = I || (I = {})).TOP_CENTER = "caretTopCenter", T.TOP_RIGHT = "caretTopRight", T.TOP_LEFT = "caretTopLeft", T.BOTTOM_CENTER = "caretBottomCenter", T.BOTTOM_LEFT = "caretBottomLeft", T.LEFT_CENTER = "caretLeftCenter", T.LEFT_TOP = "caretLeftTop", T.RIGHT_CENTER = "caretRightCenter", (s = A || (A = {}))[s.ADJACENT = 0] = "ADJACENT", s[s.STACKED = 1] = "STACKED", S.CaretPosition = I, S.ButtonLayout = A