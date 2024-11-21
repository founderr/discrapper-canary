n.d(t, {
    E: function () {
        return T;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(446108),
    f = n(956664),
    _ = n(921948),
    p = n(823023),
    h = n(981631),
    m = n(217702),
    g = n(388032),
    E = n(459127),
    v = n(167969),
    I = n(557256);
function b(e, t, n) {
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
class T extends (r = a.PureComponent) {
    render() {
        let e;
        let { className: t, imageClassName: n, readyState: r, src: a, placeholder: s, placeholderVersion: l, alt: c, width: _, height: v, maxWidth: I = _, maxHeight: b = v, minWidth: T, minHeight: A, mediaLayoutType: N, limitResponsiveWidth: C = !0, accessory: R, zoomable: O, original: D, children: L, renderAccessory: x, onClick: w, tabIndex: M, dataSafeSrc: P, useFullWidth: k = !1, ...U } = this.props;
        if (1 === _ && 1 === v) return null;
        let G = (0, f.Tj)({
                width: _,
                height: v,
                maxWidth: I,
                maxHeight: b,
                minWidth: T,
                minHeight: A
            }),
            B = 0 !== G.width ? G.width / G.height : 1;
        '' !== a && r !== h.zo9.ERROR
            ? (e = L({
                  src: a,
                  size: G,
                  alt: c,
                  className: n,
                  mediaLayoutType: N
              }))
            : r !== h.zo9.LOADING &&
              (e = (0, i.jsx)(S, {
                  size: G,
                  mediaLayoutType: N,
                  alt: c
              })),
            (e = (0, i.jsx)(p.N, {
                readyState: r,
                aspectRatio: B,
                placeholder: s,
                placeholderVersion: l,
                placeholderStyle: y(G, N),
                children: e
            }));
        let Z = null != x ? x() : null;
        return (
            (Z = null != Z ? Z : R),
            (0, i.jsx)(u.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, i.jsxs)('div', {
                    className: o()(
                        E.imageWrapper,
                        {
                            [E.imageZoom]: O,
                            [E.imageWrapperBackground]: r !== h.zo9.READY,
                            [E.clickable]: null != w
                        },
                        t
                    ),
                    style: (function (e, t, n, r) {
                        return r === m.hV.MOSAIC
                            ? {
                                  display: 'block',
                                  maxHeight: 'inherit',
                                  margin: 'auto',
                                  width: !n && e.width <= m.mT ? e.width : '100%',
                                  height: '100%'
                              }
                            : r === m.hV.RESPONSIVE
                              ? {
                                    maxWidth: t ? e.width : void 0,
                                    width: '100%',
                                    aspectRatio: ''.concat(e.width, ' / ').concat(e.height)
                                }
                              : e;
                    })(G, C, k, N),
                    ...U,
                    children: [
                        null != D &&
                            (0, i.jsx)('a', {
                                tabIndex: -1,
                                onClick: w,
                                'aria-hidden': !0,
                                className: E.originalLink,
                                href: D,
                                ref: this._containerRef,
                                'data-role': 'img',
                                'data-safe-src': null != P ? P : a
                            }),
                        null != w
                            ? (0, i.jsx)(u.Clickable, {
                                  className: E.clickableWrapper,
                                  tabIndex: null != M ? M : 0,
                                  onClick: w,
                                  'aria-label': null != c ? c : g.intl.string(g.t.X4IxWF),
                                  'aria-describedby': d.r5,
                                  innerRef: this._clickableRef,
                                  focusProps: { enabled: !1 },
                                  children: e
                              })
                            : e,
                        null != Z
                            ? (0, i.jsx)('div', {
                                  className: E.imageAccessory,
                                  children: Z
                              })
                            : null
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e), b(this, '_containerRef', a.createRef()), b(this, '_clickableRef', a.createRef());
    }
}
function S(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e,
        a = (0, c.ZP)();
    return (0, i.jsx)('div', {
        className: E.imageErrorWrapper,
        style: (function (e, t) {
            switch (t) {
                case m.hV.MOSAIC:
                    return {
                        width: '100%',
                        height: '100%',
                        aspectRatio: ''.concat(e.width, ' / ').concat(e.height),
                        display: 'flex',
                        maxHeight: 'inherit'
                    };
                case m.hV.RESPONSIVE:
                    return {
                        ...A(e),
                        display: 'flex'
                    };
                default:
                    return e;
            }
        })(t, n),
        children: (0, i.jsx)('img', {
            src: (0, l.ap)(a) ? I : v,
            className: E.imageError,
            alt: null != r ? r : g.intl.string(g.t.X4IxWF)
        })
    });
}
b(T, 'defaultProps', {
    readyState: h.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: t, size: n, alt: r, className: a, mediaLayoutType: s } = e;
        return (0, i.jsx)('img', {
            className: null != a ? a : void 0,
            alt: null != r ? r : g.intl.string(g.t.X4IxWF),
            src: t,
            style: y(n, s)
        });
    },
    minWidth: 0,
    minHeight: 0
});
function y(e, t) {
    switch (t) {
        case m.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, _.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case m.hV.RESPONSIVE:
            return A(e);
        default:
            return e;
    }
}
function A(e) {
    let { width: t, height: n } = e;
    return {
        maxWidth: t,
        maxHeight: n,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(t, ' / ').concat(n)
    };
}
