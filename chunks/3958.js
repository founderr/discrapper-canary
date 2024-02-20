"use strict";
s.r(t), s.d(t, {
  RecordModes: function() {
    return a
  },
  default: function() {
    return N
  }
}), s("222007");
var a, n, l = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("800648"),
  u = s.n(d),
  c = s("917351"),
  S = s.n(c),
  E = s("77078"),
  T = s("13798"),
  f = s("145131"),
  m = s("782340"),
  _ = s("363172");
(n = a || (a = {})).DEFAULT = "DEFAULT", n.RECORDING = "RECORDING";
let g = {
  DEFAULT: _.default,
  RECORDING: _.recording
};
class h extends i.PureComponent {
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
    e = "RECORDING" === t ? m.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? m.default.Messages.SHORTCUT_RECORDER_BUTTON : m.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let i = "DEFAULT" === t && s.length > 0;
    return (0, l.jsx)(E.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, l.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: o(_.container, g[t], {
          [_.hasValue]: i,
          [_.disabled]: a
        }),
        children: (0, l.jsxs)(f.default, {
          className: _.layout,
          children: [(0, l.jsx)(f.default.Child, {
            className: _.input,
            children: (0, l.jsx)("input", {
              id: this._inputId,
              placeholder: m.default.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: n,
              disabled: "RECORDING" !== this.props.mode || a
            })
          }), (0, l.jsx)(f.default, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, l.jsxs)(E.Button, {
              className: _.button,
              disabled: a,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: E.Button.Sizes.MIN,
              color: E.ButtonColors.PRIMARY,
              children: [(0, l.jsx)("span", {
                className: _.text,
                children: e
              }), (0, l.jsx)("span", {
                className: _.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this._inputId = S.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = i.createRef(), this._containerRef = i.createRef(), this.setInputRef = e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: a
      } = this.props;
      if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
        if (null != s && null != a) this._unregisterNativeRecorder = s(e.id, a);
        else if (null != a) {
          let t = new u(e);
          t.handleKey = a
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
var N = h