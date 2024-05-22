"use strict";
s.r(t), s.d(t, {
  RecordModes: function() {
    return a
  }
}), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("120356"),
  o = s.n(r),
  d = s("879443"),
  u = s.n(d),
  c = s("392711"),
  S = s.n(c),
  E = s("481060"),
  T = s("13140"),
  _ = s("285952"),
  f = s("689938"),
  m = s("345757");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = a || (a = {})).DEFAULT = "DEFAULT", n.RECORDING = "RECORDING";
let I = {
  DEFAULT: m.__invalid_default,
  RECORDING: m.recording
};
class N extends i.PureComponent {
  componentWillUnmount() {
    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: s
    } = e;
    if (s === t) return;
    let {
      _inputRef: a
    } = this;
    if (null == a.current) return;
    let {
      activeElement: n
    } = document;
    "DEFAULT" === t && a.current === n && a.current.blur(), "RECORDING" === t && a.current !== n && a.current.focus()
  }
  render() {
    let e;
    let {
      mode: t,
      value: s,
      disabled: a
    } = this.props, n = (0, T.toString)(s, !0);
    e = "RECORDING" === t ? f.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? f.default.Messages.SHORTCUT_RECORDER_BUTTON : f.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let i = "DEFAULT" === t && s.length > 0;
    return (0, l.jsx)(E.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, l.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: o()(m.container, I[t], {
          [m.hasValue]: i,
          [m.disabled]: a
        }),
        children: (0, l.jsxs)(_.default, {
          className: m.layout,
          children: [(0, l.jsx)(_.default.Child, {
            className: m.input,
            children: (0, l.jsx)("input", {
              id: this._inputId,
              placeholder: f.default.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: n,
              disabled: "RECORDING" !== this.props.mode || a
            })
          }), (0, l.jsx)(_.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, l.jsxs)(E.Button, {
              className: m.button,
              disabled: a,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: E.Button.Sizes.MIN,
              color: E.ButtonColors.PRIMARY,
              children: [(0, l.jsx)("span", {
                className: m.text,
                children: e
              }), (0, l.jsx)("span", {
                className: m.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), g(this, "_inputId", S().uniqueId("key-recorder-")), g(this, "_unregisterNativeRecorder", null), g(this, "_mousedownMode", null), g(this, "_inputRef", i.createRef()), g(this, "_containerRef", i.createRef()), g(this, "setInputRef", e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: a
      } = this.props;
      this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != s && null != a ? this._unregisterNativeRecorder = s(e.id, a) : null != a && (new(u())(e).handleKey = a))
    }), g(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: s
      } = this.props;
      (!s || "RECORDING" !== this._mousedownMode) && t()
    }), g(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
t.default = N