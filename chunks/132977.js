n.d(t, {
    ZX: function () {
        return m;
    },
    gt: function () {
        return I;
    },
    rH: function () {
        return r;
    }
});
var r,
    i,
    a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(748780),
    c = n(481060),
    d = n(727637),
    _ = n(600164),
    E = n(604547);
function f(e, t, n) {
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
!(function (e) {
    (e.DEFAULT = 'default'), (e.SMALL = 'small');
})(r || (r = {}));
let h = {
        default: E.shineDefault,
        small: E.shineSmall
    },
    p = {
        default: E.shineInnerDefault,
        small: E.shineInnerSmall
    };
class m extends (i = o.PureComponent) {
    render() {
        let { className: e, shineSize: t, shinePaused: n, ...r } = this.props;
        return (0, a.jsx)(u.Z.div, {
            ...r,
            className: l()(E.shineContainer, e, { [E.shinePaused]: n }),
            children: (0, a.jsx)(_.Z, {
                align: _.Z.Align.CENTER,
                justify: _.Z.Justify.CENTER,
                className: h[t],
                children: (0, a.jsx)('div', { className: p[t] })
            })
        });
    }
}
f(m, 'defaultProps', { shineSize: 'default' });
let I = (e) => {
    let { children: t, className: n, disabled: r, submitting: i, pauseAnimation: s, shineSize: u = 'default', shinePaused: _, buttonShineClassName: f, onlyShineOnHover: h, ...p } = e,
        I = o.createRef(),
        T = (0, d.Z)(I),
        g = !r && !i && !0 !== s && (!h || T);
    return (0, a.jsxs)(c.Button, {
        buttonRef: I,
        ...p,
        className: l()(E.shinyButton, n),
        disabled: r,
        submitting: i,
        children: [
            t,
            g
                ? (0, a.jsx)(m, {
                      shinePaused: _,
                      className: l()(E.buttonShine, h ? E.onlyShineOnHover : void 0, f),
                      shineSize: u
                  })
                : null
        ]
    });
};
I.ShineSizes = r;
