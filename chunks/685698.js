"use strict";
n.r(t), n.d(t, {
  Checkbox: function() {
    return I
  }
}), n("222007");
var i, r, s, a, o = n("37983"),
  l = n("884691"),
  u = n("414456"),
  c = n.n(u),
  d = n("627445"),
  p = n.n(d),
  h = n("509043"),
  f = n("669491"),
  E = n("718776"),
  _ = n("36694"),
  m = n("49111"),
  S = n("139368");
(s = i || (i = {})).DEFAULT = "default", s.INVERTED = "inverted", s.GHOST = "ghost", s.ROW = "row", (a = r || (r = {})).TOP = "top", a.CENTER = "center";
let g = {
    BOX: S.box,
    ROUND: S.round,
    SMALL_BOX: S.smallBox
  },
  T = {
    top: S.alignTop,
    center: S.alignCenter
  };
class I extends l.PureComponent {
  getInputMode() {
    return this.props.disabled ? "disabled" : this.props.readOnly ? "readonly" : "default"
  }
  getStyle() {
    var e;
    let {
      value: t,
      type: n,
      color: i
    } = this.props, r = null !== (e = this.props.style) && void 0 !== e ? e : {};
    if (!1 === t) return r;
    if (r = {
        ...r
      }, i === f.default.unsafe_rawColors.BRAND_500.css) switch (n) {
      case "default":
        r.borderColor = "var(--control-brand-foreground)";
        break;
      case "ghost":
        r.borderColor = "var(--brand-experiment-15a)", r.backgroundColor = "var(--brand-experiment-15a)";
        break;
      case "row":
      case "inverted":
        r.borderColor = "var(--brand-experiment-400)", r.backgroundColor = "var(--brand-experiment-500)"
    } else switch (n) {
      case "default":
        r.borderColor = i;
        break;
      case "ghost":
        if (i.startsWith("var(--")) {
          let e = "".concat(i.slice(0, -1), "-hsl)");
          r.borderColor = "rgba(".concat(e, ", 0.15)"), r.backgroundColor = "rgba(".concat(e, ", 0.15)")
        } else p((0, h.isValidHex)(i), "Checkbox: ".concat(i, " is not a valid hex color")), r.borderColor = (0, h.hex2rgb)(i, .15), r.backgroundColor = (0, h.hex2rgb)(i, .15);
        break;
      case "row":
      case "inverted":
        r.backgroundColor = i, r.borderColor = i
    }
    return r
  }
  getColor() {
    let {
      value: e,
      type: t,
      color: n
    } = this.props;
    return e ? "inverted" === t || "row" === t ? f.default.unsafe_rawColors.WHITE_500.css : n : f.default.unsafe_rawColors.TRANSPARENT.css
  }
  render() {
    let {
      disabled: e,
      readOnly: t,
      value: n,
      shape: i,
      align: r = "center",
      className: s,
      innerClassName: a,
      children: l,
      size: u,
      reverse: d,
      checkboxColor: p,
      displayOnly: h,
      type: f,
      onClick: g
    } = this.props, I = null != l ? (0, o.jsx)("div", {
      className: c(S.label, e ? S.labelDisabled : S.labelClickable, d ? S.labelReversed : S.labelForward),
      style: {
        lineHeight: "".concat(u, "px")
      },
      children: l
    }) : null, v = this.props.disabled ? S.inputDisabled : this.props.readOnly ? S.inputReadonly : S.inputDefault;
    return (0, o.jsxs)(h ? "span" : "label", {
      className: c(e ? S.checkboxWrapperDisabled : S.checkboxWrapper, T[r], s, {
        [S.row]: "row" === f,
        [S.checked]: n
      }),
      children: [d ? I : null, !h && (0, o.jsx)(E.FocusRing, {
        children: (0, o.jsx)("input", {
          className: c(a, v),
          type: "checkbox",
          onClick: g,
          onChange: e || t ? m.NOOP : this.handleChange,
          checked: n,
          style: {
            width: u,
            height: u
          }
        })
      }), (0, o.jsx)("div", {
        className: c(S.checkbox, i, {
          [S.checked]: n
        }),
        style: {
          width: u,
          height: u,
          borderColor: p,
          ...this.getStyle()
        },
        children: (0, o.jsx)(_.default, {
          width: 18,
          height: 18,
          color: this.getColor(),
          "aria-hidden": !0
        })
      }), d ? null : I]
    })
  }
  constructor(...e) {
    super(...e), this.handleChange = e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e, e.currentTarget.checked)
    }
  }
}
I.Types = i, I.Shapes = g, I.Aligns = r, I.defaultProps = {
  size: 24,
  disabled: !1,
  readOnly: !1,
  displayOnly: !1,
  value: !1,
  type: "default",
  color: f.default.unsafe_rawColors.BRAND_500.css,
  shape: g.BOX,
  align: "center",
  onChange: m.NOOP,
  reverse: !1
}