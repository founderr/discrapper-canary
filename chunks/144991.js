"use strict";
l.r(t), l("411104");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("149765"),
  o = l("253923"),
  d = l("481060"),
  u = l("901524"),
  c = l("291913"),
  f = l("783014"),
  I = l("495395"),
  m = l("611273");
class T extends a.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: t,
      deny: l
    } = this.props;
    if (null == t || null == l) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return r.has(t, e) ? u.PermissionOverrideType.ALLOW : r.has(l, e) ? u.PermissionOverrideType.DENY : u.PermissionOverrideType.PASSTHROUGH
  }
  getPermissionValue(e, t) {
    return r.has(t, e)
  }
  handleChange(e, t) {
    let {
      onChange: l
    } = this.props;
    l(e, t)
  }
  renderDisabledIndicator(e) {
    return (0, n.jsx)(d.Tooltip, {
      text: e,
      position: "top",
      color: d.Tooltip.Colors.RED,
      children: e => (0, n.jsx)("span", {
        ...e,
        children: (0, n.jsx)(f.default, {
          className: I.icon,
          width: 18,
          height: 18
        })
      })
    })
  }
  renderComponent(e) {
    let {
      title: t,
      description: l,
      helpdeskArticleId: a,
      flag: s
    } = e, {
      permissions: r,
      locked: u,
      permissionRender: f
    } = this.props, m = null == f ? void 0 : f(s), T = !!(u || m), E = "string" == typeof m ? this.renderDisabledIndicator(m) : null, N = i()({
      [I.title]: null != E
    });
    return null == r ? (0, n.jsxs)(c.default, {
      disabled: T,
      value: this.getOverwriteValue(s),
      onChange: e => this.handleChange(s, e),
      note: (0, o.renderDescription)(l),
      helpdeskArticleId: a,
      children: [E, (0, n.jsx)("span", {
        className: N,
        children: t
      })]
    }, String(s)) : (0, n.jsxs)(d.FormSwitch, {
      disabled: T,
      value: this.getPermissionValue(s, r),
      onChange: e => this.handleChange(s, e),
      note: (0, o.renderDescription)(l),
      children: [E, (0, n.jsx)("span", {
        className: N,
        children: t
      })]
    }, String(s))
  }
  render() {
    let {
      spec: e,
      className: t
    } = this.props;
    return (0, n.jsx)(d.FormSection, {
      className: t,
      children: (0, n.jsxs)(d.HeadingLevel, {
        component: (0, n.jsx)(d.FormTitle, {
          tag: d.FormTitleTags.H5,
          className: null != e.description ? m.marginBottom8 : m.marginBottom20,
          children: e.title
        }),
        children: [null != e.description && (0, n.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: m.marginBottom20,
          children: e.description
        }), e.permissions.map(this.renderComponent, this)]
      })
    })
  }
}
t.default = T