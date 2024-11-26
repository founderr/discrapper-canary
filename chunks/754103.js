n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(600164),
    c = n(498918);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends r.PureComponent {
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: t } = this.state;
            this.getChangedValues(e).forEach((e) => t.add(e)), this.setState({ changedSinceError: t });
        }
    }
    getChangedValues(e) {
        let { values: t } = this.props,
            { values: n } = e;
        return Object.keys(t).filter((e) => t[e] !== n[e]);
    }
    getError(e) {
        let { errors: t, formError: n } = this.props;
        return null != t[e] ? t[e] : null == n || this.state.changedSinceError.has(e) ? null : n.getFieldMessage(e);
    }
    render() {
        let { form: e, className: t } = this.props,
            n = e.map(this.renderFormRow);
        return (0, a.jsx)('div', {
            className: t,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'state', { changedSinceError: new Set() }),
            u(this, 'renderFormSection', (e) => {
                let { values: t, onFieldChange: n, onFieldFocus: r, onFieldBlur: l, layout: s, ...c } = this.props,
                    { getClassNameForLayout: u, renderInput: d, title: m, name: p, id: h, placeholder: A, ...E } = e,
                    N = {
                        ...E,
                        placeholder: null == A ? void 0 : A(),
                        layout: s,
                        error: this.getError(p),
                        value: t[p],
                        name: p,
                        'aria-labelledby': h,
                        onChange: n,
                        onFocus: r,
                        onBlur: l
                    };
                return (0, a.jsx)(
                    o.FormSection,
                    {
                        className: i()(null == u ? void 0 : u(s)),
                        title: m(),
                        titleId: h,
                        children: d(N, c)
                    },
                    p
                );
            }),
            u(this, 'renderFormRow', (e) => {
                let t = e.fields.map(this.renderFormSection);
                return (0, a.jsx)(
                    s.Z,
                    {
                        className: i()(c.row, e.className),
                        children: t
                    },
                    e.fields.map((e) => e.name).join('')
                );
            });
    }
}
t.Z = d;
