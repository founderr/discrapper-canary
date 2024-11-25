n.d(t, {
    ZX: function () {
        return I;
    },
    gt: function () {
        return b;
    },
    rH: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(200651),
    c = n(192379),
    d = n(120356),
    f = n.n(d),
    _ = n(748780),
    p = n(481060),
    h = n(727637),
    m = n(600164),
    g = n(136997);
((r = o || (o = {})).DEFAULT = 'default'), (r.SMALL = 'small');
let E = {
        default: g.shineDefault,
        small: g.shineSmall
    },
    v = {
        default: g.shineInnerDefault,
        small: g.shineInnerSmall
    };
class I extends (l = c.PureComponent) {
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
        return (0, u.jsx)(_.Z.div, {
            ...r,
            className: f()(g.shineContainer, e, { [g.shinePaused]: n }),
            children: (0, u.jsx)(m.Z, {
                align: m.Z.Align.CENTER,
                justify: m.Z.Justify.CENTER,
                className: E[t],
                children: (0, u.jsx)('div', { className: v[t] })
            })
        });
    }
}
(s = { shineSize: 'default' }),
    (a = 'defaultProps') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let b = (e) => {
    let { children: t, className: n, disabled: r, submitting: i, pauseAnimation: a, shineSize: s = 'default', shinePaused: o, buttonShineClassName: l, onlyShineOnHover: d, ..._ } = e,
        m = c.createRef(),
        E = (0, h.Z)(m),
        v = !r && !i && !0 !== a && (!d || E);
    return (0, u.jsxs)(p.Button, {
        buttonRef: m,
        ..._,
        className: f()(g.shinyButton, n),
        disabled: r,
        submitting: i,
        children: [
            t,
            v
                ? (0, u.jsx)(I, {
                      shinePaused: o,
                      className: f()(g.buttonShine, d ? g.onlyShineOnHover : void 0, l),
                      shineSize: s
                  })
                : null
        ]
    });
};
b.ShineSizes = o;
