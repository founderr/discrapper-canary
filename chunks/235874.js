r.d(n, {
    K: function () {
        return E;
    },
    y: function () {
        return g;
    }
});
var i,
    a,
    s = r(411104);
var o = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(922770),
    d = r(930295),
    f = r(126306),
    _ = r(588921);
function h(e, n, r) {
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
!(function (e) {
    (e.NONE = '1'), (e.TRANSLATE = '2'), (e.SCALE = '3'), (e.FADE = '4');
})(i || (i = {}));
let p = Object.freeze({
    2: f.l.Types.TRANSLATE,
    3: f.l.Types.SCALE,
    4: f.l.Types.FADE
});
function m(e) {
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
class g extends (a = u.Component) {
    render() {
        let { children: e, shouldShow: n, position: r, onRequestOpen: i, onRequestClose: a, align: s, autoInvert: o, fixed: u, nudgeAlignIntoViewport: c, useRawTargetDimensions: f, spacing: _, onShiftClick: h, positionKey: p, preload: g, disablePointerEvents: E, ignoreModalClicks: v, closeOnScroll: I, useMouseEnter: T, renderPopout: b, layerContext: y } = this.props;
        return (0, l.jsx)(d.H, {
            ref: this.ref,
            preload: g,
            position: r,
            align: null != s ? s : m(r),
            autoInvert: o,
            fixed: u,
            nudgeAlignIntoViewport: c,
            useRawTargetDimensions: f,
            renderPopout: this.renderPopout,
            spacing: _,
            shouldShow: null != b && n,
            onRequestOpen: i,
            onRequestClose: a,
            onShiftClick: h,
            positionKey: p,
            disablePointerEvents: E,
            ignoreModalClicks: v,
            closeOnScroll: I,
            useMouseEnter: T,
            layerContext: y,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'ref', u.createRef()),
            h(this, 'renderPopout', (e) => {
                let { renderPopout: n, animation: r, animationPosition: i } = this.props;
                switch ((null != i && null != e.position && (e.position = i), r)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, l.jsx)(f.l, {
                            position: e.position,
                            type: p[r],
                            children: n(e)
                        });
                    case '1':
                        return n(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(r)));
            });
    }
}
function E(e) {
    let { renderPopout: n, ...r } = e,
        i = u.useRef(null),
        [a, s] = u.useState(0);
    function o() {
        return f(), (0, l.jsx)(l.Fragment, {});
    }
    u.useLayoutEffect(() => {
        if (a > 0) {
            var e, n, r, s, o;
            null === (o = i.current) || void 0 === o || null === (s = o.ref) || void 0 === s || null === (r = s.current) || void 0 === r || null === (n = r.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
        }
    }, [a]),
        u.useEffect(() => {
            let e = setTimeout(n, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        }, []);
    let d = u.useRef(!1);
    async function f() {
        if (!d.current) {
            d.current = !0;
            let e = setTimeout(() => {
                    m(() => h), s((e) => e + 1);
                }, 300),
                r = await n();
            m(() => r), s((e) => e + 1), clearTimeout(e);
        }
    }
    function h() {
        var e, n, r, a;
        let s = null === (a = i.current) || void 0 === a ? void 0 : null === (r = a.ref) || void 0 === r ? void 0 : null === (n = r.current) || void 0 === n ? void 0 : null === (e = n.domElementRef) || void 0 === e ? void 0 : e.current,
            o = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
        return (0, l.jsx)('div', {
            className: _.loader,
            style: { width: o },
            children: (0, l.jsx)(c.$, {})
        });
    }
    let [p, m] = u.useState(() => o);
    return (
        u.useEffect(() => {
            d.current
                ? n().then((e) => {
                      m(() => e), s((e) => e + 1);
                  })
                : m(o);
        }, [n]),
        (0, l.jsx)(g, {
            ref: i,
            ...r,
            renderPopout: p
        })
    );
}
h(g, 'Animation', i),
    h(g, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (E.Animation = i);
