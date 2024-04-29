"use strict";
a.r(t), a("47120");
var n = a("735250"),
  l = a("470079"),
  s = a("120356"),
  r = a.n(s),
  o = a("481060"),
  u = a("285952"),
  i = a("282605");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class c extends l.PureComponent {
  componentDidUpdate(e) {
    if (this.props.formError !== e.formError) this.setState({
      changedSinceError: new Set
    });
    else if (null != this.props.formError) {
      let {
        changedSinceError: t
      } = this.state;
      this.getChangedValues(e).forEach(e => t.add(e)), this.setState({
        changedSinceError: t
      })
    }
  }
  getChangedValues(e) {
    let {
      values: t
    } = this.props, {
      values: a
    } = e;
    return Object.keys(t).filter(e => t[e] !== a[e])
  }
  getError(e) {
    let {
      errors: t,
      formError: a
    } = this.props;
    return null != t[e] ? t[e] : null == a || this.state.changedSinceError.has(e) ? null : a.getFieldMessage(e)
  }
  render() {
    let {
      form: e,
      className: t
    } = this.props, a = e.map(this.renderFormRow);
    return (0, n.jsx)("div", {
      className: t,
      children: a
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      changedSinceError: new Set
    }), d(this, "renderFormSection", e => {
      let {
        values: t,
        onFieldChange: a,
        onFieldFocus: l,
        onFieldBlur: s,
        layout: u,
        ...i
      } = this.props, {
        getClassNameForLayout: d,
        renderInput: c,
        title: E,
        name: p,
        id: m,
        placeholder: f,
        ...S
      } = e, _ = {
        ...S,
        placeholder: null == f ? void 0 : f(),
        layout: u,
        error: this.getError(p),
        value: t[p],
        name: p,
        "aria-labelledby": m,
        onChange: a,
        onFocus: l,
        onBlur: s
      };
      return (0, n.jsx)(o.FormSection, {
        className: r()(null == d ? void 0 : d(u)),
        title: E(),
        titleId: m,
        children: c(_, i)
      }, p)
    }), d(this, "renderFormRow", e => {
      let t = e.fields.map(this.renderFormSection);
      return (0, n.jsx)(u.default, {
        className: r()(i.row, e.className),
        children: t
      }, e.fields.map(e => e.name).join(""))
    })
  }
}
t.default = c