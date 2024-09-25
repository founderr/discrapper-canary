n.d(t, {
    K: function () {
        return m;
    },
    y: function () {
        return p;
    }
});
var r,
    i,
    a = n(411104);
var o = n(47120);
var s = n(735250),
    l = n(470079),
    u = n(922770),
    c = n(930295),
    d = n(126306),
    _ = n(603333);
function E(e, t, n) {
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
    (e.NONE = '1'), (e.TRANSLATE = '2'), (e.SCALE = '3'), (e.FADE = '4');
})(r || (r = {}));
let f = Object.freeze({
    2: d.l.Types.TRANSLATE,
    3: d.l.Types.SCALE,
    4: d.l.Types.FADE
});
function h(e) {
    switch (e) {
        case 'top':
        case 'bottom':
            return 'left';
        case 'left':
        case 'right':
            return 'top';
        case 'center':
        case 'window_center':
            return 'center';
    }
    throw Error('Unexpected position: '.concat(e));
}
class p extends (i = l.Component) {
    render() {
        let { children: e, shouldShow: t, position: n, onRequestOpen: r, onRequestClose: i, align: a, autoInvert: o, fixed: l, nudgeAlignIntoViewport: u, useRawTargetDimensions: d, spacing: _, onShiftClick: E, positionKey: f, preload: p, disablePointerEvents: m, ignoreModalClicks: I, closeOnScroll: T, useMouseEnter: g, renderPopout: S, layerContext: A } = this.props;
        return (0, s.jsx)(c.H, {
            ref: this.ref,
            preload: p,
            position: n,
            align: null != a ? a : h(n),
            autoInvert: o,
            fixed: l,
            nudgeAlignIntoViewport: u,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: _,
            shouldShow: null != S && t,
            onRequestOpen: r,
            onRequestClose: i,
            onShiftClick: E,
            positionKey: f,
            disablePointerEvents: m,
            ignoreModalClicks: I,
            closeOnScroll: T,
            useMouseEnter: g,
            layerContext: A,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'ref', l.createRef()),
            E(this, 'renderPopout', (e) => {
                let { renderPopout: t, animation: n, animationPosition: r } = this.props;
                switch ((null != r && null != e.position && (e.position = r), n)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, s.jsx)(d.l, {
                            position: e.position,
                            type: f[n],
                            children: t(e)
                        });
                    case '1':
                        return t(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(n)));
            });
    }
}
function m(e) {
    let { renderPopout: t, ...n } = e,
        r = l.useRef(null),
        [i, a] = l.useState(0);
    function o() {
        return d(), (0, s.jsx)(s.Fragment, {});
    }
    l.useLayoutEffect(() => {
        if (i > 0) {
            var e, t, n, a, o;
            null === (o = r.current) || void 0 === o || null === (a = o.ref) || void 0 === a || null === (n = a.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition();
        }
    }, [i]),
        l.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        }, []);
    let c = l.useRef(!1);
    async function d() {
        if (!c.current) {
            c.current = !0;
            let e = setTimeout(() => {
                    h(() => E), a((e) => e + 1);
                }, 300),
                n = await t();
            h(() => n), a((e) => e + 1), clearTimeout(e);
        }
    }
    function E() {
        var e, t, n, i;
        let a = null === (i = r.current) || void 0 === i ? void 0 : null === (n = i.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
            o = Math.max(100, null == a ? 100 : a.offsetWidth - 20);
        return (0, s.jsx)('div', {
            className: _.loader,
            style: { width: o },
            children: (0, s.jsx)(u.$, {})
        });
    }
    let [f, h] = l.useState(() => o);
    return (
        l.useEffect(() => {
            c.current
                ? t().then((e) => {
                      h(() => e), a((e) => e + 1);
                  })
                : h(o);
        }, [t]),
        (0, s.jsx)(p, {
            ref: r,
            ...n,
            renderPopout: f
        })
    );
}
E(p, 'Animation', r),
    E(p, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (m.Animation = r);
