n(47120);
var l = n(200651),
    r = n(192379),
    i = n(442837),
    s = n(481060),
    a = n(16084),
    o = n(55563),
    d = n(388032);
class c extends r.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: l } = this.props;
        null == t || 0 === t.length ? (0, a.uE)(e, !1) : 1 === t.length && null == n && l(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    render() {
        let { skus: e, selectedSkuId: t, className: n } = this.props,
            r = null != e && 0 === e.length;
        return (0, l.jsx)(s.SingleSelect, {
            options:
                null != e
                    ? e.map((e) => ({
                          label: e.name,
                          value: e.id
                      }))
                    : [],
            placeholder: r ? d.intl.string(d.t.hKcgPz) : d.intl.string(d.t.QV60Ul),
            value: t,
            onChange: this.handleChange,
            className: n,
            isDisabled: r
        });
    }
    constructor(...e) {
        var t, n, l;
        super(...e),
            (t = this),
            (n = 'handleChange'),
            (l = (e) => {
                this.props.onChange(e);
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = l);
    }
}
t.Z = i.ZP.connectStores([o.Z], (e) => {
    let { applicationId: t } = e;
    return { skus: o.Z.getForApplication(t) };
})(c);
