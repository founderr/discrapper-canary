n.d(t, {
    E: function () {
        return E;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(653041);
var o = n(735250),
    s = n(470079),
    l = n(658722),
    u = n.n(l),
    c = n(481060),
    d = n(683976);
function _(e, t, n) {
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
class E extends s.PureComponent {
    render() {
        let { label: e, value: t, popoutProps: n, renderValue: r, className: i } = this.props;
        return (0, o.jsx)(c.Popout, {
            ...n,
            renderPopout: this.renderPopout,
            children: (n) =>
                (0, o.jsx)(c.Clickable, {
                    ...n,
                    className: i,
                    children: (0, o.jsx)(d.F, {
                        label: e,
                        value: t,
                        renderValue: r
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'renderItems', (e) => {
                let { items: t, renderItem: n } = this.props;
                return t.reduce((t, r, i) => (u()(e.toLowerCase(), r.label.toLowerCase()) && t.push(n(r, i)), t), []);
            }),
            _(this, 'renderPopout', (e) => {
                let { closePopout: t } = e,
                    { placeholder: n, popoutClassName: r, onChange: i, value: a } = this.props;
                return (0, o.jsx)(c.ComboboxPopout, {
                    className: r,
                    placeholder: n,
                    value: new Set([a.value]),
                    onChange: i,
                    onClose: t,
                    showScrollbar: !0,
                    children: (e) => this.renderItems(e)
                });
            });
    }
}
