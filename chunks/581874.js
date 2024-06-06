"use strict";
s.r(t), s.d(t, {
  CopyInputModes: function() {
    return _
  }
}), s("47120");
var n, i = s("735250"),
  r = s("470079"),
  l = s("120356"),
  a = s.n(l),
  o = s("481060"),
  u = s("153066"),
  C = s("285952"),
  d = s("689938"),
  c = s("965804");

function p(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let _ = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class f extends(n = r.PureComponent) {
  select() {
    var e;
    null === (e = this.inputRef.current) || void 0 === e || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: s,
      mode: n
    } = this.props, r = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
    return (0, i.jsx)("input", {
      className: a()((0, u.getClass)(c, "input", n), {
        [c.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: s,
      onClick: this.handleInputClick,
      readOnly: !0,
      "aria-labelledby": r
    })
  }
  render() {
    let e;
    let {
      text: t = d.default.Messages.COPY,
      mode: s,
      hideMessage: n,
      className: r,
      buttonLook: l
    } = this.props, p = null != n;
    switch (s) {
      case _.SUCCESS:
        e = o.ButtonColors.GREEN;
        break;
      case _.ERROR:
        e = o.ButtonColors.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, i.jsx)(o.FocusRing, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, i.jsx)("div", {
        className: a()((0, u.getClass)(c, "copyInput", s), r),
        ref: this.containerRef,
        children: (0, i.jsxs)(C.default, {
          className: c.layout,
          children: [(0, i.jsxs)(C.default, {
            className: c.inputWrapper,
            children: [this.renderInput(p), p ? (0, i.jsx)("div", {
              className: c.hiddenMessage,
              children: n
            }) : null]
          }), (0, i.jsx)(C.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsx)(o.Button, {
              className: c.button,
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
    super(...e), p(this, "inputRef", r.createRef()), p(this, "containerRef", r.createRef()), p(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), p(this, "handleInputClick", () => {
      this.select()
    })
  }
}
p(f, "contextType", o.FormContext), p(f, "defaultProps", {
  supportsCopy: !0,
  buttonColor: o.ButtonColors.PRIMARY,
  buttonLook: o.ButtonLooks.FILLED,
  mode: _.DEFAULT
}), p(f, "Modes", _), p(f, "ButtonColors", o.ButtonColors), p(f, "ButtonLooks", o.ButtonLooks), t.default = f