"use strict";
n.r(t), n.d(t, {
  TextArea: function() {
    return g
  }
}), n("424973");
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("748820"),
  l = n("718776"),
  u = n("516826"),
  c = n("741662"),
  d = n("324584"),
  p = n("782340"),
  h = n("430594"),
  f = n("182893"),
  E = n("356410");
let _ = (0, o.v4)(),
  m = (0, o.v4)(),
  S = (0, o.v4)();
class g extends r.Component {
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
        className: a(h.maxLength, {
          [h.errorOverflow]: this.hasError()
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
      className: a(h.maxLength, {
        [h.errorOverflow]: e < 0
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
    } = this.props, i = this.getIsOverflowing() ? p.default.Messages.MAXIMUM_LENGTH_ERROR.format({
      maxLength: t
    }) : null, r = this.getIsUnderflowing() ? p.default.Messages.MINIMUM_LENGTH_ERROR.format({
      minLength: n
    }) : null;
    return null != e && e.length < 1 || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : r
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == e ? null : (0, i.jsx)("div", {
      id: _,
      className: h.errorMessage,
      children: e
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: r,
      placeholder: s,
      autoFocus: o,
      minLength: u,
      maxLength: _,
      allowOverflow: g,
      spellCheck: T,
      resizeable: I,
      className: v,
      id: C,
      rows: A,
      flex: R,
      autosize: N,
      required: y,
      onInvalid: O,
      inputRef: D
    } = this.props, b = N ? d.TextAreaAutosize : "textarea", P = this.hasError(), L = null !== (t = this.props["aria-labelledby"]) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId, M = this.getAriaDescribedBy();
    return (0, i.jsxs)("div", {
      className: a(f.inputWrapper, {
        [h.flex]: R
      }),
      children: [(0, i.jsxs)("div", {
        className: a(h.inputMaxLength, {
          [h.flex]: R
        }),
        children: [(0, i.jsx)(l.FocusRing, {
          children: (0, i.jsx)(b, {
            type: "text",
            className: a(f.inputDefault, h.textArea, E.scrollbarDefault, v, {
              [f.error]: P,
              [f.disabled]: n,
              [h.resizeable]: I
            }),
            "aria-labelledby": L,
            "aria-describedby": M,
            "aria-invalid": P,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: C,
            disabled: n,
            placeholder: s,
            value: r,
            autoFocus: o,
            minLength: u,
            maxLength: g ? void 0 : _,
            spellCheck: T,
            required: y,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: O,
            rows: A,
            ref: D
          })
        }), null != u && (0, i.jsx)(c.HiddenVisually, {
          id: m,
          children: p.default.Messages.MINIMUM_LENGTH.format({
            minLength: u
          })
        }), null != _ && (0, i.jsx)(c.HiddenVisually, {
          id: S,
          children: p.default.Messages.MAXIMUM_LENGTH.format({
            maxLength: _
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
      } = this.props, r = [], s = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
      return null != s && r.push(s), null != i ? r.push(i) : (null != t && r.push(S), null != n && r.push(m)), r.length > 0 ? r.join(" ") : void 0
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
g.contextType = u.FormContext, g.defaultProps = {
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