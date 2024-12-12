r.d(n, {
    E: function () {
        return h;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(653041);
var o = r(200651),
    l = r(192379),
    u = r(658722),
    c = r.n(u),
    d = r(481060),
    f = r(683976);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends l.PureComponent {
    render() {
        let { label: e, value: n, popoutProps: r, renderValue: i, className: a } = this.props;
        return (0, o.jsx)(d.Popout, {
            ...r,
            renderPopout: this.renderPopout,
            children: (r) =>
                (0, o.jsx)(d.Clickable, {
                    ...r,
                    className: a,
                    children: (0, o.jsx)(f.F, {
                        label: e,
                        value: n,
                        renderValue: i
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'renderItems', (e) => {
                let { items: n, renderItem: r } = this.props;
                return n.reduce((n, i, a) => (c()(e.toLowerCase(), i.label.toLowerCase()) && n.push(r(i, a)), n), []);
            }),
            _(this, 'renderPopout', (e) => {
                let { closePopout: n } = e,
                    { placeholder: r, popoutClassName: i, onChange: a, value: s } = this.props;
                return (0, o.jsx)(d.ComboboxPopout, {
                    className: i,
                    placeholder: r,
                    value: new Set([s.value]),
                    onChange: a,
                    onClose: n,
                    showScrollbar: !0,
                    children: (e) => this.renderItems(e)
                });
            });
    }
}
