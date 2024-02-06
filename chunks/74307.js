"use strict";
n.r(t), n.d(t, {
  TextArea: function() {
    return v
  }
}), n("424973");
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("748820"),
  l = n("718776"),
  u = n("516826"),
  d = n("741662"),
  c = n("324584"),
  f = n("782340"),
  _ = n("253469"),
  h = n("905518"),
  g = n("180615");
let m = (0, o.v4)(),
  E = (0, o.v4)(),
  p = (0, o.v4)();
class v extends s.Component {
  getPaddingRight() {
    let {
      maxLength: e
    } = this.props;
    return null == e ? 10 : 7.23 * "".concat(e).length + 10
  }
  getCharsLeftLength() {
    let {
      maxLength: e,
      value: t
    } = this.props;
    if (null == e) return null;
    let n = null != t ? t.length : 0;
    return e - n
  }
  getIsOverflowing() {
    let e = this.getCharsLeftLength();
    return null != e && e < 0
  }
  getIsUnderflowing() {
    let {
      minLength: e,
      value: t
    } = this.props;
    if (null == e) return !1;
    let n = null != t ? t.length : 0;
    return n < e
  }
  renderCharacterCount() {
    if (this.props.showCharacterCount) {
      var e;
      let {
        value: t,
        maxLength: n
      } = this.props;
      return (0, i.jsxs)("div", {
        className: a(_.maxLength, {
          [_.errorOverflow]: this.hasError()
        }),
        "aria-hidden": "true",
        children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, " ", null != n && "/ ".concat(n)]
      })
    }
    return null
  }
  renderMaxLength() {
    if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
    let e = this.getCharsLeftLength();
    return null == e ? null : (0, i.jsx)("div", {
      className: a(_.maxLength, {
        [_.errorOverflow]: e < 0
      }),
      "aria-hidden": "true",
      children: e
    })
  }
  hasError() {
    return null != this.props.error || null != this.context.error || !1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1)
  }
  getErrorMessage() {
    let {
      error: e,
      maxLength: t,
      minLength: n
    } = this.props, i = this.getIsOverflowing() ? f.default.Messages.MAXIMUM_LENGTH_ERROR.format({
      maxLength: t
    }) : null, s = this.getIsUnderflowing() ? f.default.Messages.MINIMUM_LENGTH_ERROR.format({
      minLength: n
    }) : null;
    return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : s
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == e ? null : (0, i.jsx)("div", {
      id: m,
      className: _.errorMessage,
      children: e
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: s,
      placeholder: r,
      autoFocus: o,
      minLength: u,
      maxLength: m,
      allowOverflow: v,
      spellCheck: S,
      resizeable: T,
      className: I,
      id: C,
      rows: A,
      flex: y,
      autosize: N,
      required: R,
      onInvalid: D,
      inputRef: O
    } = this.props, P = N ? c.TextAreaAutosize : "textarea", b = this.hasError(), L = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, M = this.getAriaDescribedBy();
    return (0, i.jsxs)("div", {
      className: a(h.inputWrapper, {
        [_.flex]: y
      }),
      children: [(0, i.jsxs)("div", {
        className: a(_.inputMaxLength, {
          [_.flex]: y
        }),
        children: [(0, i.jsx)(l.FocusRing, {
          children: (0, i.jsx)(P, {
            type: "text",
            className: a(h.inputDefault, _.textArea, g.scrollbarDefault, I, {
              [h.error]: b,
              [h.disabled]: n,
              [_.resizeable]: T
            }),
            "aria-labelledby": L,
            "aria-describedby": M,
            "aria-invalid": b,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: C,
            disabled: n,
            placeholder: r,
            value: s,
            autoFocus: o,
            minLength: u,
            maxLength: v ? void 0 : m,
            spellCheck: S,
            required: R,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: D,
            rows: A,
            ref: O
          })
        }), null != u && (0, i.jsx)(d.HiddenVisually, {
          id: E,
          children: f.default.Messages.MINIMUM_LENGTH.format({
            minLength: u
          })
        }), null != m && (0, i.jsx)(d.HiddenVisually, {
          id: p,
          children: f.default.Messages.MAXIMUM_LENGTH.format({
            maxLength: m
          })
        }), this.renderCharacterCount(), this.renderMaxLength()]
      }), this.renderErrorMessage()]
    })
  }
  constructor(e) {
    var t;
    super(e), this.getAriaDescribedBy = () => {
      var e;
      let {
        maxLength: t,
        minLength: n,
        error: i
      } = this.props, s = [], r = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
      return null != r && s.push(r), null != i ? s.push(i) : (null != t && s.push(p), null != n && s.push(E)), s.length > 0 ? s.join(" ") : void 0
    }, this.onChange = e => {
      let {
        onChange: t,
        name: n
      } = this.props;
      null == t || t(e.currentTarget.value, n), this.setState({
        dirty: !0
      })
    }, this.onFocus = e => {
      let {
        onFocus: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }, this.onBlur = e => {
      let {
        onBlur: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }, this.onKeyDown = e => {
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }, this.state = {
      dirty: null !== (t = e.defaultDirty) && void 0 !== t && t
    }
  }
}
v.contextType = u.FormContext, v.defaultProps = {
  name: "",
  disabled: !1,
  placeholder: "",
  autoFocus: !1,
  resizeable: !1,
  flex: !1,
  autosize: !1,
  rows: 3,
  allowOverflow: !1
}