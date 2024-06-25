t(411104);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  a = t.n(s),
  r = t(149765),
  o = t(253923),
  c = t(481060),
  d = t(901524),
  u = t(291913),
  I = t(185402),
  N = t(331651);
class E extends l.PureComponent {
  getOverwriteValue(e) {
    let {
      allow: n,
      deny: t
    } = this.props;
    if (null == n || null == t) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
    return r.e$(n, e) ? d.y.ALLOW : r.e$(t, e) ? d.y.DENY : d.y.PASSTHROUGH
  }
  getPermissionValue(e, n) {
    return r.e$(n, e)
  }
  handleChange(e, n) {
    let {
      onChange: t
    } = this.props;
    t(e, n)
  }
  renderDisabledIndicator(e) {
    return (0, i.jsx)(c.Tooltip, {
      text: e,
      position: "top",
      color: c.Tooltip.Colors.RED,
      children: e => (0, i.jsx)("span", {
        ...e,
        children: (0, i.jsx)(c.DenyIcon, {
          size: "sm",
          color: "currentColor",
          className: I.icon
        })
      })
    })
  }
  renderComponent(e) {
    let {
      title: n,
      description: t,
      helpdeskArticleId: l,
      flag: s
    } = e, {
      permissions: r,
      locked: d,
      permissionRender: N
    } = this.props, E = null == N ? void 0 : N(s), T = !!(d || E), m = "string" == typeof E ? this.renderDisabledIndicator(E) : null, _ = a()({
      [I.title]: null != m
    });
    return null == r ? (0, i.jsxs)(u.Z, {
      disabled: T,
      value: this.getOverwriteValue(s),
      onChange: e => this.handleChange(s, e),
      note: (0, o._u)(t),
      helpdeskArticleId: l,
      children: [m, (0, i.jsx)("span", {
        className: _,
        children: n
      })]
    }, String(s)) : (0, i.jsxs)(c.FormSwitch, {
      disabled: T,
      value: this.getPermissionValue(s, r),
      onChange: e => this.handleChange(s, e),
      note: (0, o._u)(t),
      children: [m, (0, i.jsx)("span", {
        className: _,
        children: n
      })]
    }, String(s))
  }
  render() {
    let {
      spec: e,
      className: n
    } = this.props;
    return (0, i.jsx)(c.FormSection, {
      className: n,
      children: (0, i.jsxs)(c.HeadingLevel, {
        component: (0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          className: null != e.description ? N.marginBottom8 : N.marginBottom20,
          children: e.title
        }),
        children: [null != e.description && (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: N.marginBottom20,
          children: e.description
        }), e.permissions.map(this.renderComponent, this)]
      })
    })
  }
}
n.Z = E