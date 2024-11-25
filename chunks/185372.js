n.d(t, {
    OZ: function () {
        return m;
    },
    ox: function () {
        return h;
    },
    ub: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(600164),
    c = n(981631),
    d = n(129121),
    f = n(232186);
let { Provider: _, Consumer: p } = i.createContext(c.BRd.DARK);
class h extends i.PureComponent {
    render() {
        let { lightSrc: e, darkSrc: t, width: n, height: i, offsetX: a, offsetY: l, style: c } = this.props;
        return (0, r.jsx)(p, {
            children: (_) =>
                (0, r.jsx)(u.Z.Child, {
                    grow: 0,
                    className: s()(d.image, f.marginBottom40),
                    style: {
                        ...c,
                        width: n,
                        height: i,
                        marginLeft: a,
                        marginTop: l,
                        backgroundImage: 'url('.concat((0, o.wj)(_) ? t : e, ')')
                    }
                })
        });
    }
}
let m = (e) => {
    let { children: t, className: n, noteClassName: i, note: a, style: o } = e;
    return (0, r.jsxs)(u.Z.Child, {
        grow: 0,
        direction: u.Z.Direction.VERTICAL,
        style: o,
        children: [
            null != t &&
                (0, r.jsx)(l.H, {
                    className: s()(n, d.title),
                    children: t
                }),
            null != a
                ? (0, r.jsx)('div', {
                      className: s()(i, d.text, f.marginTop8),
                      children: a
                  })
                : null
        ]
    });
};
class g extends i.PureComponent {
    render() {
        let { children: e, theme: t, className: n, style: i } = this.props;
        return (0, r.jsx)(_, {
            value: t,
            children: (0, r.jsx)(u.Z, {
                direction: u.Z.Direction.VERTICAL,
                align: u.Z.Align.CENTER,
                justify: u.Z.Justify.CENTER,
                className: s()(d.wrapper, n),
                style: i,
                children: e
            })
        });
    }
}
