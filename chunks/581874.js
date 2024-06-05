"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return h
  }
}), s("47120");
var o, n = s("735250"),
  l = s("470079"),
  a = s("120356"),
  i = s.n(a),
  r = s("481060"),
  d = s("153066"),
  u = s("285952"),
  c = s("689938"),
  N = s("965804");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let h = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class C extends(o = l.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: o
    } = this.props, l = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, n.jsx)("input", {
      className: i()((0, d.getClass)(N, "input", o), {
        [N.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": l
    })
  }
  render() {
    let e;
    let {
      text: t = c.default.Messages.COPY,
      mode: s,
      hideMessage: o,
      className: l,
      buttonLook: a
    } = this.props, I = null != o;
    switch (s) {
      case h.SUCCESS:
        e = r.ButtonColors.GREEN;
        break;
      case h.ERROR:
        e = r.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, n.jsx)(r.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, n.jsx)("div", {
        className: i()((0, d.getClass)(N, "copyInput", s), l),
        ref: this.containerRef,
        children: (0, n.jsxs)(u.default, {
          className: N.layout,
          children: [(0, n.jsxs)(u.default, {
            className: N.inputWrapper,
            children: [this.renderInput(I), I ? (0, n.jsx)("div", {
              className: N.hiddenMessage,
              children: o
            }) : null]
          }), (0, n.jsx)(u.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, n.jsx)(r.Button, {
              className: N.button,
              onClick: this.handleButtonClick,
              size: r.ButtonSizes.MIN,
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
    super(...e), I(this, "inputRef", l.createRef()), I(this, "containerRef", l.createRef()), I(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), I(this, "handleInputClick", () => {
      this.select()
    })
  }
}
I(C, "contextType", r.FormContext), I(C, "defaultProps", {
  supportsCopy: !0,
  buttonColor: r.ButtonColors.PRIMARY,
  buttonLook: r.ButtonLooks.FILLED,
  mode: h.DEFAULT
}), I(C, "Modes", h), I(C, "ButtonColors", r.ButtonColors), I(C, "ButtonLooks", r.ButtonLooks), t.default = C