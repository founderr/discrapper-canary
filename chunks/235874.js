n.d(t, {
    K: function () {
        return h;
    },
    y: function () {
        return p;
    }
}),
    n(411104),
    n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(922770),
    u = n(930295),
    c = n(126306),
    d = n(588921);
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
((a = r || (r = {})).NONE = '1'), (a.TRANSLATE = '2'), (a.SCALE = '3'), (a.FADE = '4');
let _ = Object.freeze({
    2: c.l.Types.TRANSLATE,
    3: c.l.Types.SCALE,
    4: c.l.Types.FADE
});
class p extends (i = o.Component) {
    render() {
        let { children: e, shouldShow: t, position: n, onRequestOpen: r, onRequestClose: i, align: a, autoInvert: o, fixed: l, nudgeAlignIntoViewport: c, useRawTargetDimensions: d, spacing: f, onShiftClick: _, positionKey: p, preload: h, disablePointerEvents: m, ignoreModalClicks: g, closeOnScroll: E, useMouseEnter: v, renderPopout: I, layerContext: b } = this.props;
        return (0, s.jsx)(u.H, {
            ref: this.ref,
            preload: h,
            position: n,
            align:
                null != a
                    ? a
                    : (function (e) {
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
                      })(n),
            autoInvert: o,
            fixed: l,
            nudgeAlignIntoViewport: c,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: f,
            shouldShow: null != I && t,
            onRequestOpen: r,
            onRequestClose: i,
            onShiftClick: _,
            positionKey: p,
            disablePointerEvents: m,
            ignoreModalClicks: g,
            closeOnScroll: E,
            useMouseEnter: v,
            layerContext: b,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'ref', o.createRef()),
            f(this, 'renderPopout', (e) => {
                let { renderPopout: t, animation: n, animationPosition: r } = this.props;
                switch ((null != r && null != e.position && (e.position = r), n)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, s.jsx)(c.l, {
                            position: e.position,
                            type: _[n],
                            children: t(e)
                        });
                    case '1':
                        return t(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(n)));
            });
    }
}
function h(e) {
    let { renderPopout: t, ...n } = e,
        r = o.useRef(null),
        [i, a] = o.useState(0);
    function u() {
        return f(), (0, s.jsx)(s.Fragment, {});
    }
    o.useLayoutEffect(() => {
        if (i > 0) {
            var e, t, n, a, s;
            null === (s = r.current) || void 0 === s || null === (a = s.ref) || void 0 === a || null === (n = a.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition();
        }
    }, [i]),
        o.useEffect(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        }, []);
    let c = o.useRef(!1);
    async function f() {
        if (!c.current) {
            c.current = !0;
            let e = setTimeout(() => {
                    m(() => _), a((e) => e + 1);
                }, 300),
                n = await t();
            m(() => n), a((e) => e + 1), clearTimeout(e);
        }
    }
    function _() {
        var e, t, n, i;
        let a = null === (i = r.current) || void 0 === i ? void 0 : null === (n = i.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
            o = Math.max(100, null == a ? 100 : a.offsetWidth - 20);
        return (0, s.jsx)('div', {
            className: d.loader,
            style: { width: o },
            children: (0, s.jsx)(l.$, {})
        });
    }
    let [h, m] = o.useState(() => u);
    return (
        o.useEffect(() => {
            c.current
                ? t().then((e) => {
                      m(() => e), a((e) => e + 1);
                  })
                : m(u);
        }, [t]),
        (0, s.jsx)(p, {
            ref: r,
            ...n,
            renderPopout: h
        })
    );
}
f(p, 'Animation', r),
    f(p, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (h.Animation = r);
