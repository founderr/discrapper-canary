n.d(t, {
    Og: function () {
        return h;
    },
    Xv: function () {
        return S;
    },
    li: function () {
        return p;
    },
    mh: function () {
        return g;
    },
    px: function () {
        return m;
    },
    wL: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(699581),
    d = n(251625),
    _ = n(872801),
    E = n(136753);
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
let h = E.layerContainer;
class p extends a.Component {
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, i.jsx)(e.Provider, {
            value: this.getContextValue(n),
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', { layerContainerElement: null }),
            f(this, 'setLayerContainerElement', (e) => {
                this.setState({ layerContainerElement: e });
            }),
            f(
                this,
                'getContextValue',
                (0, d.oH)((e) => [e, this.setLayerContainerElement])
            );
    }
}
let m = (e) => {
    let { layerContext: t, className: n } = e,
        [, r] = a.useContext(t);
    return (0, i.jsx)('div', {
        className: s()(h, n),
        ref: r
    });
};
function I(e) {
    let t = (0, _.Z)(e, E.layerContainer);
    return u()(null != t, 'Unexpected missing parent container'), t;
}
function T(e, t) {
    let [n] = e;
    return null == n ? null : c.createPortal(a.Children.only(t), n);
}
let g = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, i.jsx)(t.Consumer, { children: (e) => T(e, n) });
};
function S(e) {
    let t = a.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) =>
                (0, i.jsx)(p, {
                    layerContext: t,
                    ...e
                }),
            LayerContainer: (e) =>
                (0, i.jsx)(m, {
                    layerContext: t,
                    ...e
                }),
            Layer: (e) =>
                (0, i.jsx)(g, {
                    layerContext: t,
                    ...e
                }),
            layerContext: t
        };
    return (n.LayerProvider.displayName = ''.concat(e, 'LayerProvider')), (n.LayerContainer.displayName = ''.concat(e, 'LayerContainer')), (n.Layer.displayName = ''.concat(e, 'Layer')), n;
}
