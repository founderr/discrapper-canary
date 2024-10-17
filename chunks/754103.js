t(47120);
var n = t(735250),
    s = t(470079),
    r = t(120356),
    l = t.n(r),
    o = t(481060),
    i = t(600164),
    c = t(251316);
function u(e, a, t) {
    return (
        a in e
            ? Object.defineProperty(e, a, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[a] = t),
        e
    );
}
class d extends s.PureComponent {
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: a } = this.state;
            this.getChangedValues(e).forEach((e) => a.add(e)), this.setState({ changedSinceError: a });
        }
    }
    getChangedValues(e) {
        let { values: a } = this.props,
            { values: t } = e;
        return Object.keys(a).filter((e) => a[e] !== t[e]);
    }
    getError(e) {
        let { errors: a, formError: t } = this.props;
        return null != a[e] ? a[e] : null == t || this.state.changedSinceError.has(e) ? null : t.getFieldMessage(e);
    }
    render() {
        let { form: e, className: a } = this.props,
            t = e.map(this.renderFormRow);
        return (0, n.jsx)('div', {
            className: a,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'state', { changedSinceError: new Set() }),
            u(this, 'renderFormSection', (e) => {
                let { values: a, onFieldChange: t, onFieldFocus: s, onFieldBlur: r, layout: i, ...c } = this.props,
                    { getClassNameForLayout: u, renderInput: d, title: E, name: _, id: A, placeholder: m, ...N } = e,
                    p = {
                        ...N,
                        placeholder: null == m ? void 0 : m(),
                        layout: i,
                        error: this.getError(_),
                        value: a[_],
                        name: _,
                        'aria-labelledby': A,
                        onChange: t,
                        onFocus: s,
                        onBlur: r
                    };
                return (0, n.jsx)(
                    o.FormSection,
                    {
                        className: l()(null == u ? void 0 : u(i)),
                        title: E(),
                        titleId: A,
                        children: d(p, c)
                    },
                    _
                );
            }),
            u(this, 'renderFormRow', (e) => {
                let a = e.fields.map(this.renderFormSection);
                return (0, n.jsx)(
                    i.Z,
                    {
                        className: l()(c.row, e.className),
                        children: a
                    },
                    e.fields.map((e) => e.name).join('')
                );
            });
    }
}
a.Z = d;
