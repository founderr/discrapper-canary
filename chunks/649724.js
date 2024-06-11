"use strict";
n.r(t), n.d(t, {
  CopyInput: function() {
    return T
  },
  CopyInputModes: function() {
    return I
  }
}), n("47120");
var i, r = n("735250"),
  s = n("470079"),
  a = n("120356"),
  o = n.n(a),
  l = n("481060"),
  u = n("285952"),
  d = n("153066"),
  _ = n("689938"),
  c = n("245578");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class T extends(i = s.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: n,
      mode: i
    } = this.props, s = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, r.jsx)("input", {
      className: o()((0, d.getClass)(c, "input", i), {
        [c.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: n,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": s
    })
  }
  render() {
    let e;
    let {
      text: t = _.default.Messages.COPY,
      mode: n,
      hideMessage: i,
      className: s,
      buttonLook: a
    } = this.props, E = null != i;
    switch (n) {
      case I.SUCCESS:
        e = l.ButtonColors.GREEN;
        break;
      case I.ERROR:
        e = l.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, r.jsx)(l.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        className: o()((0, d.getClass)(c, "copyInput", n), s),
        ref: this.containerRef,
        children: (0, r.jsxs)(u.default, {
          className: c.layout,
          children: [(0, r.jsxs)(u.default, {
            className: c.inputWrapper,
            children: [this.renderInput(E), E ? (0, r.jsx)("div", {
              className: c.hiddenMessage,
              children: i
            }) : null]
          }), (0, r.jsx)(u.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsx)(l.Button, {
              className: c.button,
              onClick: this.handleButtonClick,
              size: l.ButtonSizes.MIN,
              color: e,
              look: a,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "inputRef", s.createRef()), E(this, "containerRef", s.createRef()), E(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), E(this, "handleInputClick", () => {
      this.select()
    })
  }
}
E(T, "contextType", l.FormContext), E(T, "defaultProps", {
  supportsCopy: !0,
  buttonColor: l.ButtonColors.PRIMARY,
  buttonLook: l.ButtonLooks.FILLED,
  mode: I.DEFAULT
}), E(T, "Modes", I), E(T, "ButtonColors", l.ButtonColors), E(T, "ButtonLooks", l.ButtonLooks)