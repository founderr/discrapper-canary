"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  r = a.n(l),
  o = a("481060"),
  i = a("285952"),
  u = a("451893");

function d(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class c extends s.PureComponent {
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
        onFieldFocus: s,
        onFieldBlur: l,
        layout: i,
        ...u
      } = this.props, {
        getClassNameForLayout: d,
        renderInput: c,
        title: E,
        name: m,
        id: p,
        placeholder: S,
        ..._
      } = e, f = {
        ..._,
        placeholder: null == S ? void 0 : S(),
        layout: i,
        error: this.getError(m),
        value: t[m],
        name: m,
        "aria-labelledby": p,
        onChange: a,
        onFocus: s,
        onBlur: l
      };
      return (0, n.jsx)(o.FormSection, {
        className: r()(null == d ? void 0 : d(i)),
        title: E(),
        titleId: p,
        children: c(f, u)
      }, m)
    }), d(this, "renderFormRow", e => {
      let t = e.fields.map(this.renderFormSection);
      return (0, n.jsx)(i.default, {
        className: r()(u.row, e.className),
        children: t
      }, e.fields.map(e => e.name).join(""))
    })
  }
}
t.default = c