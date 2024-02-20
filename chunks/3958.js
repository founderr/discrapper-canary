"use strict";
s.r(t), s.d(t, {
  RecordModes: function() {
    return n
  },
  default: function() {
    return D
  }
}), s("222007");
var n, r, i = s("37983"),
  l = s("884691"),
  a = s("414456"),
  o = s.n(a),
  d = s("800648"),
  u = s.n(d),
  c = s("917351"),
  h = s.n(c),
  f = s("77078"),
  E = s("13798"),
  p = s("145131"),
  g = s("782340"),
  m = s("363172");
(r = n || (n = {})).DEFAULT = "DEFAULT", r.RECORDING = "RECORDING";
let N = {
  DEFAULT: m.default,
  RECORDING: m.recording
};
class R extends l.PureComponent {
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
      _inputRef: n
    } = this;
    if (null == n.current) return;
    let {
      activeElement: r
    } = document;
    "DEFAULT" === t && n.current === r && n.current.blur(), "RECORDING" === t && n.current !== r && n.current.focus()
  }
  render() {
    let e;
    let {
      mode: t,
      value: s,
      disabled: n
    } = this.props, r = (0, E.toString)(s, !0);
    e = "RECORDING" === t ? g.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? g.default.Messages.SHORTCUT_RECORDER_BUTTON : g.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let l = "DEFAULT" === t && s.length > 0;
    return (0, i.jsx)(f.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, i.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: o(m.container, N[t], {
          [m.hasValue]: l,
          [m.disabled]: n
        }),
        children: (0, i.jsxs)(p.default, {
          className: m.layout,
          children: [(0, i.jsx)(p.default.Child, {
            className: m.input,
            children: (0, i.jsx)("input", {
              id: this._inputId,
              placeholder: g.default.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: r,
              disabled: "RECORDING" !== this.props.mode || n
            })
          }), (0, i.jsx)(p.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsxs)(f.Button, {
              className: m.button,
              disabled: n,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: f.Button.Sizes.MIN,
              color: f.ButtonColors.PRIMARY,
              children: [(0, i.jsx)("span", {
                className: m.text,
                children: e
              }), (0, i.jsx)("span", {
                className: m.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._inputId = h.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = l.createRef(), this._containerRef = l.createRef(), this.setInputRef = e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: n
      } = this.props;
      if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
        if (null != s && null != n) this._unregisterNativeRecorder = s(e.id, n);
        else if (null != n) {
          let t = new u(e);
          t.handleKey = n
        }
      }
    }, this.handleClick = e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: s
      } = this.props;
      (!s || "RECORDING" !== this._mousedownMode) && t()
    }, this.handleMouseDown = () => {
      this._mousedownMode = this.props.mode
    }
  }
}
var D = R