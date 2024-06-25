"use strict";
n.d(t, {
  X: function() {
    return p
  }
}), n(47120);
var i, r, s, o, a, l = n(735250),
  u = n(470079),
  _ = n(120356),
  c = n.n(_),
  d = n(512722),
  E = n.n(d),
  I = n(866442),
  T = n(692547),
  h = n(84735),
  f = n(481060),
  S = n(981631),
  A = n(58126);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(o = i || (i = {})).DEFAULT = "default", o.INVERTED = "inverted", o.GHOST = "ghost", o.ROW = "row", (a = r || (r = {})).TOP = "top", a.CENTER = "center";
let m = {
    BOX: A.box,
    ROUND: A.round,
    SMALL_BOX: A.smallBox
  },
  O = {
    top: A.alignTop,
    center: A.alignCenter
  };
class p extends(s = u.PureComponent) {
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
      }, i === T.Z.unsafe_rawColors.BRAND_500.css) switch (n) {
      case "default":
        r.borderColor = "var(--control-brand-foreground)";
        break;
      case "ghost":
        r.borderColor = "var(--brand-experiment-15a)", r.backgroundColor = "var(--brand-experiment-15a)";
        break;
      case "row":
      case "inverted":
        r.borderColor = "var(--brand-400)", r.backgroundColor = "var(--brand-500)"
    } else switch (n) {
      case "default":
        r.borderColor = i;
        break;
      case "ghost":
        if (i.startsWith("var(--")) {
          let e = "".concat(i.slice(0, -1), "-hsl)");
          r.borderColor = "rgba(".concat(e, ", 0.15)"), r.backgroundColor = "rgba(".concat(e, ", 0.15)")
        } else E()((0, I.FX)(i), "Checkbox: ".concat(i, " is not a valid hex color")), r.borderColor = (0, I.wK)(i, .15), r.backgroundColor = (0, I.wK)(i, .15);
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
    return e ? "inverted" === t || "row" === t ? T.Z.unsafe_rawColors.WHITE_500.css : n : T.Z.unsafe_rawColors.TRANSPARENT.css
  }
  render() {
    let {
      disabled: e,
      readOnly: t,
      value: n,
      shape: i,
      align: r = "center",
      className: s,
      innerClassName: o,
      children: a,
      size: u,
      reverse: _,
      checkboxColor: d,
      displayOnly: E,
      type: I,
      onClick: T
    } = this.props, N = null != a ? (0, l.jsx)("div", {
      className: c()(A.label, e ? A.labelDisabled : A.labelClickable, _ ? A.labelReversed : A.labelForward),
      style: {
        lineHeight: "".concat(u, "px")
      },
      children: a
    }) : null, m = this.props.disabled ? A.inputDisabled : this.props.readOnly ? A.inputReadonly : A.inputDefault;
    return (0, l.jsxs)(E ? "span" : "label", {
      className: c()(e ? A.checkboxWrapperDisabled : A.checkboxWrapper, O[r], s, {
        [A.row]: "row" === I,
        [A.checked]: n
      }),
      children: [_ ? N : null, !E && (0, l.jsx)(h.t, {
        children: (0, l.jsx)("input", {
          className: c()(o, m),
          type: "checkbox",
          onClick: T,
          onChange: e || t ? S.dG4 : this.handleChange,
          checked: n,
          style: {
            width: u,
            height: u
          }
        })
      }), (0, l.jsx)("div", {
        className: c()(A.checkbox, i, {
          [A.checked]: n
        }),
        style: {
          width: u,
          height: u,
          borderColor: d,
          ...this.getStyle()
        },
        children: (0, l.jsx)(f.CheckmarkLargeIcon, {
          size: "sm",
          color: this.getColor(),
          "aria-hidden": !0
        })
      }), _ ? null : N]
    })
  }
  constructor(...e) {
    super(...e), N(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e, e.currentTarget.checked)
    })
  }
}
N(p, "Types", i), N(p, "Shapes", m), N(p, "Aligns", r), N(p, "defaultProps", {
  size: 24,
  disabled: !1,
  readOnly: !1,
  displayOnly: !1,
  value: !1,
  type: "default",
  color: T.Z.unsafe_rawColors.BRAND_500.css,
  shape: m.BOX,
  align: "center",
  onChange: S.dG4,
  reverse: !1
})