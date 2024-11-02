t(411104);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(149765),
    s = t(481060),
    d = t(208884),
    c = t(453628),
    u = t(996987),
    m = t(332014),
    h = t(113207);
class p extends l.PureComponent {
    getOverwriteValue(e) {
        let { allow: n, deny: t } = this.props;
        if (null == n || null == t) throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
        return o.e$(n, e) ? c.y.ALLOW : o.e$(t, e) ? c.y.DENY : c.y.PASSTHROUGH;
    }
    getPermissionValue(e, n) {
        return o.e$(n, e);
    }
    handleChange(e, n) {
        let { onChange: t } = this.props;
        t(e, n);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(s.Tooltip, {
            text: e,
            position: 'top',
            color: s.Tooltip.Colors.RED,
            children: (e) =>
                (0, i.jsx)('span', {
                    ...e,
                    children: (0, i.jsx)(s.DenyIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: m.icon
                    })
                })
        });
    }
    renderComponent(e) {
        let { title: n, description: t, helpdeskArticleId: l, flag: r } = e,
            { permissions: o, locked: c, permissionRender: h } = this.props,
            p = null == h ? void 0 : h(r),
            g = !!(c || p),
            f = 'string' == typeof p ? this.renderDisabledIndicator(p) : null,
            x = a()({ [m.title]: null != f });
        return null == o
            ? (0, i.jsxs)(
                  u.Z,
                  {
                      disabled: g,
                      value: this.getOverwriteValue(r),
                      onChange: (e) => this.handleChange(r, e),
                      note: (0, d._u)(t),
                      helpdeskArticleId: l,
                      children: [
                          f,
                          (0, i.jsx)('span', {
                              className: x,
                              children: n
                          })
                      ]
                  },
                  String(r)
              )
            : (0, i.jsxs)(
                  s.FormSwitch,
                  {
                      disabled: g,
                      value: this.getPermissionValue(r, o),
                      onChange: (e) => this.handleChange(r, e),
                      note: (0, d._u)(t),
                      children: [
                          f,
                          (0, i.jsx)('span', {
                              className: x,
                              children: n
                          })
                      ]
                  },
                  String(r)
              );
    }
    render() {
        let { spec: e, className: n } = this.props;
        return (0, i.jsx)(s.FormSection, {
            className: n,
            children: (0, i.jsxs)(s.HeadingLevel, {
                component: (0, i.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    className: null != e.description ? h.marginBottom8 : h.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: h.marginBottom20,
                            children: e.description
                        }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
n.Z = p;
