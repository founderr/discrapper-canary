o.d(t, {
    c2: function () {
        return b;
    },
    cK: function () {
        return n;
    }
});
var r,
    n,
    s,
    i,
    c = o(200651),
    l = o(192379),
    a = o(841596),
    d = o(458221);
function u(e, t, o) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = o),
        e
    );
}
((r = n || (n = {})).SIZE_40 = 'SIZE_40'), (r.SIZE_60 = 'SIZE_60');
let f = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    C = o(515695);
class m extends (s = l.PureComponent) {
    render() {
        let { className: e, text: t, ...o } = this.props;
        return (0, c.jsx)('div', {
            style: {
                padding: 8,
                borderRadius: 4,
                width: o.size,
                height: o.size,
                backgroundColor: o.bgColor
            },
            className: e,
            children: (0, c.jsx)(a.default, {
                value: t,
                level: 'M',
                ...o
            })
        });
    }
}
u(m, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class b extends (i = l.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            t = f[null != e ? e : 'SIZE_40'];
        return (0, c.jsxs)('div', {
            className: d.qrCodeContainer,
            children: [
                (0, c.jsx)(m, { ...this.props }),
                (0, c.jsx)('div', {
                    className: d.qrCodeOverlay,
                    children: (0, c.jsx)('img', {
                        className: d[t],
                        src: C,
                        alt: ''
                    })
                })
            ]
        });
    }
}
u(b, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
}),
    (t.ZP = m);
