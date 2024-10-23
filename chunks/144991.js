t(411104);
var i = t(200651),
    a = t(192379),
    l = t(120356),
    s = t.n(l),
    o = t(149765),
    r = t(481060),
    d = t(208884),
    c = t(453628),
    u = t(996987),
    I = t(332014),
    m = t(113207);
class _ extends a.PureComponent {
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
        return (0, i.jsx)(r.Tooltip, {
            text: e,
            position: 'top',
            color: r.Tooltip.Colors.RED,
            children: (e) =>
                (0, i.jsx)('span', {
                    ...e,
                    children: (0, i.jsx)(r.DenyIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: I.icon
                    })
                })
        });
    }
    renderComponent(e) {
        let { title: n, description: t, helpdeskArticleId: a, flag: l } = e,
            { permissions: o, locked: c, permissionRender: m } = this.props,
            _ = null == m ? void 0 : m(l),
            N = !!(c || _),
            E = 'string' == typeof _ ? this.renderDisabledIndicator(_) : null,
            T = s()({ [I.title]: null != E });
        return null == o
            ? (0, i.jsxs)(
                  u.Z,
                  {
                      disabled: N,
                      value: this.getOverwriteValue(l),
                      onChange: (e) => this.handleChange(l, e),
                      note: (0, d._u)(t),
                      helpdeskArticleId: a,
                      children: [
                          E,
                          (0, i.jsx)('span', {
                              className: T,
                              children: n
                          })
                      ]
                  },
                  String(l)
              )
            : (0, i.jsxs)(
                  r.FormSwitch,
                  {
                      disabled: N,
                      value: this.getPermissionValue(l, o),
                      onChange: (e) => this.handleChange(l, e),
                      note: (0, d._u)(t),
                      children: [
                          E,
                          (0, i.jsx)('span', {
                              className: T,
                              children: n
                          })
                      ]
                  },
                  String(l)
              );
    }
    render() {
        let { spec: e, className: n } = this.props;
        return (0, i.jsx)(r.FormSection, {
            className: n,
            children: (0, i.jsxs)(r.HeadingLevel, {
                component: (0, i.jsx)(r.FormTitle, {
                    tag: r.FormTitleTags.H5,
                    className: null != e.description ? m.marginBottom8 : m.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: m.marginBottom20,
                            children: e.description
                        }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
n.Z = _;
