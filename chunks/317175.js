n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(390547);
var s = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(658722),
    r = n.n(a),
    h = n(392711),
    u = n.n(h),
    d = n(217986),
    c = n(481060),
    p = n(600164),
    m = n(133080),
    f = n(388032),
    g = n(594567),
    C = n(152105);
function y(e, t, n) {
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
class x extends i.PureComponent {
    renderItems() {
        let { query: e } = this.state,
            t = d.Z.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: i, name: o } = e,
                    l = (0, m.q9)(n);
                return i.map((e) => ({
                    key: ''.concat(t, '-').concat(e),
                    name: o,
                    translatedName: l,
                    countryData: {
                        name: o,
                        alpha2: n,
                        code: e
                    },
                    children: (0, s.jsxs)(p.Z, {
                        className: g.countryItem,
                        justify: p.Z.Justify.CENTER,
                        align: p.Z.Align.CENTER,
                        children: [
                            (0, s.jsx)(p.Z.Child, {
                                className: g.countryName,
                                children: l
                            }),
                            (0, s.jsx)(p.Z.Child, {
                                className: g.countryCode,
                                grow: 0,
                                shrink: 0,
                                children: e
                            })
                        ]
                    })
                }));
            }),
            n = u()(t)
                .filter((t) => 0 === e.length || r()(e.toLowerCase(), t.name.toLowerCase()) || r()(e.toLowerCase(), t.translatedName.toLowerCase()))
                .map((e) =>
                    (0, i.createElement)(c.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })
                )
                .value();
        return 0 === n.length
            ? (0, s.jsx)(c.PopoutList.Empty, { children: f.intl.string(f.t.PoWNfX) })
            : (0, s.jsx)(c.ScrollerAuto, {
                  className: g.phoneFieldScroller,
                  children: n
              });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(c.PopoutList, {
            className: l()(g.phoneFieldPopout, C.elevationBorderLow, e),
            children: [
                (0, s.jsx)(c.PopoutList.SearchBar, {
                    query: this.state.query,
                    placeholder: f.intl.string(f.t.hGOODg),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: 'off'
                }),
                (0, s.jsx)(c.PopoutList.Divider, {}),
                this.renderItems()
            ]
        });
    }
    constructor(e) {
        super(e),
            y(this, 'onChangeQuery', (e) => {
                this.setState({ query: e });
            }),
            y(this, 'onClearQuery', () => {
                this.setState({ query: '' });
            }),
            y(this, 'onClick', (e) => {
                var t, n;
                null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e);
            }),
            (this.state = { query: '' });
    }
}
