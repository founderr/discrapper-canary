s.d(t, {
  c: function() {
    return n
  }
}), s(47120);
var n, i, r = s(735250),
  l = s(470079),
  o = s(120356),
  a = s.n(o),
  d = s(879443),
  u = s.n(d),
  h = s(392711),
  c = s.n(h),
  m = s(481060),
  g = s(13140),
  p = s(285952),
  E = s(689938),
  _ = s(156186);

function R(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(i = n || (n = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
let C = {
  DEFAULT: _.__invalid_default,
  RECORDING: _.recording
};
class T extends l.PureComponent {
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
      activeElement: i
    } = document;
    "DEFAULT" === t && n.current === i && n.current.blur(), "RECORDING" === t && n.current !== i && n.current.focus()
  }
  render() {
    let e;
    let {
      mode: t,
      value: s,
      disabled: n
    } = this.props, i = (0, g.BB)(s, !0);
    e = "RECORDING" === t ? E.Z.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === s.length ? E.Z.Messages.SHORTCUT_RECORDER_BUTTON : E.Z.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
    let l = "DEFAULT" === t && s.length > 0;
    return (0, r.jsx)(m.FocusRing, {
      focusTarget: this._inputRef,
      ringTarget: this._containerRef,
      children: (0, r.jsx)("div", {
        onClick: this.handleClick,
        onMouseDown: this.handleMouseDown,
        ref: this._containerRef,
        className: a()(_.recorderContainer, C[t], {
          [_.hasValue]: l,
          [_.containerDisabled]: n
        }),
        children: (0, r.jsxs)(p.Z, {
          className: _.recorderLayout,
          children: [(0, r.jsx)(p.Z.Child, {
            className: _.keybindInput,
            children: (0, r.jsx)("input", {
              id: this._inputId,
              placeholder: E.Z.Messages.SHORTCUT_RECORDER_NO_BIND,
              type: "text",
              ref: this.setInputRef,
              readOnly: !0,
              value: i,
              disabled: "RECORDING" !== this.props.mode || n
            })
          }), (0, r.jsx)(p.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, r.jsxs)(m.Button, {
              className: _.addKeybindButton,
              disabled: n,
              onClick: e => {
                e.stopPropagation(), e.preventDefault(), this.handleClick(e)
              },
              size: m.Button.Sizes.MIN,
              color: m.ButtonColors.PRIMARY,
              children: [(0, r.jsx)("span", {
                className: _.text,
                children: e
              }), (0, r.jsx)("span", {
                className: _.editIcon
              })]
            })
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "_inputId", c().uniqueId("key-recorder-")), R(this, "_unregisterNativeRecorder", null), R(this, "_mousedownMode", null), R(this, "_inputRef", l.createRef()), R(this, "_containerRef", l.createRef()), R(this, "setInputRef", e => {
      var t;
      let {
        registerNativeRecorder: s,
        onChange: n
      } = this.props;
      this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e && (null != s && null != n ? this._unregisterNativeRecorder = s(e.id, n) : null != n && (new(u())(e).handleKey = n))
    }), R(this, "handleClick", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onClick: t,
        disableOnClickWhileRecording: s
      } = this.props;
      if (!s || "RECORDING" !== this._mousedownMode) t()
    }), R(this, "handleMouseDown", () => {
      this._mousedownMode = this.props.mode
    })
  }
}
t.Z = T