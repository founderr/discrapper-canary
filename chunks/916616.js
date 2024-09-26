n.d(t, {
    E: function () {
        return v;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(780384),
    c = n(481060),
    d = n(410030),
    _ = n(446108),
    E = n(956664),
    f = n(921948),
    h = n(823023),
    p = n(981631),
    m = n(217702),
    I = n(689938),
    T = n(459127),
    g = n(167969),
    S = n(557256);
function A(e, t, n) {
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
class v extends (r = o.PureComponent) {
    render() {
        let e;
        let { className: t, imageClassName: n, readyState: r, src: i, placeholder: o, placeholderVersion: s, alt: u, width: d, height: f, maxWidth: m = d, maxHeight: g = f, minWidth: S, minHeight: A, mediaLayoutType: v, limitResponsiveWidth: C = !0, accessory: y, zoomable: L, original: b, children: D, renderAccessory: M, onClick: P, tabIndex: U, dataSafeSrc: w, useFullWidth: x = !1, ...G } = this.props;
        if (1 === d && 1 === f) return null;
        let k = (0, E.Tj)({
                width: d,
                height: f,
                maxWidth: m,
                maxHeight: g,
                minWidth: S,
                minHeight: A
            }),
            B = 0 !== k.width ? k.width / k.height : 1;
        '' !== i && r !== p.zo9.ERROR
            ? (e = D({
                  src: i,
                  size: k,
                  alt: u,
                  className: n,
                  mediaLayoutType: v
              }))
            : r !== p.zo9.LOADING &&
              (e = (0, a.jsx)(N, {
                  size: k,
                  mediaLayoutType: v,
                  alt: u
              })),
            (e = (0, a.jsx)(h.N, {
                readyState: r,
                aspectRatio: B,
                placeholder: o,
                placeholderVersion: s,
                placeholderStyle: R(k, v),
                children: e
            }));
        let F = null != M ? M() : null;
        return (
            (F = null != F ? F : y),
            (0, a.jsx)(c.FocusRing, {
                ringTarget: this._containerRef,
                focusTarget: this._clickableRef,
                children: (0, a.jsxs)('div', {
                    className: l()(
                        T.imageWrapper,
                        {
                            [T.imageZoom]: L,
                            [T.imageWrapperBackground]: r !== p.zo9.READY,
                            [T.clickable]: null != P
                        },
                        t
                    ),
                    style: O(k, C, x, v),
                    ...G,
                    children: [
                        null != b &&
                            (0, a.jsx)('a', {
                                tabIndex: -1,
                                onClick: P,
                                'aria-hidden': !0,
                                className: T.originalLink,
                                href: b,
                                ref: this._containerRef,
                                'data-role': 'img',
                                'data-safe-src': null != w ? w : i
                            }),
                        null != P
                            ? (0, a.jsx)(c.Clickable, {
                                  className: T.clickableWrapper,
                                  tabIndex: null != U ? U : 0,
                                  onClick: P,
                                  'aria-label': null != u ? u : I.Z.Messages.IMAGE,
                                  'aria-describedby': _.r5,
                                  innerRef: this._clickableRef,
                                  focusProps: { enabled: !1 },
                                  children: e
                              })
                            : e,
                        null != F
                            ? (0, a.jsx)('div', {
                                  className: T.imageAccessory,
                                  children: F
                              })
                            : null
                    ]
                })
            })
        );
    }
    constructor(...e) {
        super(...e), A(this, '_containerRef', o.createRef()), A(this, '_clickableRef', o.createRef());
    }
}
function N(e) {
    let { size: t, mediaLayoutType: n, alt: r } = e,
        i = (0, d.ZP)();
    return (0, a.jsx)('div', {
        className: T.imageErrorWrapper,
        style: C(t, n),
        children: (0, a.jsx)('img', {
            src: (0, u.ap)(i) ? S : g,
            className: T.imageError,
            alt: null != r ? r : I.Z.Messages.IMAGE
        })
    });
}
function O(e, t, n, r) {
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
}
function R(e, t) {
    switch (t) {
        case m.hV.MOSAIC:
            return {
                display: 'block',
                objectFit: 'cover',
                minWidth: '100%',
                minHeight: '100%',
                maxWidth: 1 === (0, f.Z)() ? 'calc(100% + 1px)' : '100%'
            };
        case m.hV.RESPONSIVE:
            return y(e);
        default:
            return e;
    }
}
function C(e, t) {
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
                ...y(e),
                display: 'flex'
            };
        default:
            return e;
    }
}
function y(e) {
    let { width: t, height: n } = e;
    return {
        maxWidth: t,
        maxHeight: n,
        width: '100%',
        display: 'block',
        aspectRatio: ''.concat(t, ' / ').concat(n)
    };
}
A(v, 'defaultProps', {
    readyState: p.zo9.READY,
    zoomable: !0,
    children: (e) => {
        let { src: t, size: n, alt: r, className: i, mediaLayoutType: o } = e;
        return (0, a.jsx)('img', {
            className: null != i ? i : void 0,
            alt: null != r ? r : I.Z.Messages.IMAGE,
            src: t,
            style: R(n, o)
        });
    },
    minWidth: 0,
    minHeight: 0
});
