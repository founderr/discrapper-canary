"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return S
  }
}), s("47120");
var n, r = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  o = s("481060"),
  d = s("153066"),
  u = s("285952"),
  c = s("689938"),
  p = s("965804");

function h(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let S = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class f extends(n = a.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: n
    } = this.props, a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, r.jsx)("input", {
      className: i()((0, d.getClass)(p, "input", n), {
        [p.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": a
    })
  }
  render() {
    let e;
    let {
      text: t = c.default.Messages.COPY,
      mode: s,
      hideMessage: n,
      className: a,
      buttonLook: l
    } = this.props, h = null != n;
    switch (s) {
      case S.SUCCESS:
        e = o.ButtonColors.GREEN;
        break;
      case S.ERROR:
        e = o.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, r.jsx)(o.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        className: i()((0, d.getClass)(p, "copyInput", s), a),
        ref: this.containerRef,
        children: (0, r.jsxs)(u.default, {
          className: p.layout,
          children: [(0, r.jsxs)(u.default, {
            className: p.inputWrapper,
            children: [this.renderInput(h), h ? (0, r.jsx)("div", {
              className: p.hiddenMessage,
              children: n
            }) : null]
          }), (0, r.jsx)(u.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsx)(o.Button, {
              className: p.button,
              onClick: this.handleButtonClick,
              size: o.ButtonSizes.MIN,
              color: e,
              look: l,
              children: t
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "inputRef", a.createRef()), h(this, "containerRef", a.createRef()), h(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), h(this, "handleInputClick", () => {
      this.select()
    })
  }
}
h(f, "contextType", o.FormContext), h(f, "defaultProps", {
  supportsCopy: !0,
  buttonColor: o.ButtonColors.PRIMARY,
  buttonLook: o.ButtonLooks.FILLED,
  mode: S.DEFAULT
}), h(f, "Modes", S), h(f, "ButtonColors", o.ButtonColors), h(f, "ButtonLooks", o.ButtonLooks), t.default = f