n.d(t, {
    Ph: function () {
        return h;
    },
    Tt: function () {
        return p;
    },
    ZP: function () {
        return E;
    },
    iL: function () {
        return _;
    },
    nY: function () {
        return m;
    },
    zx: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(680732),
    u = n(84735),
    c = n(922770),
    d = n(388032),
    f = n(837105);
let _ = {
        FILLED: f.lookFilled,
        OUTLINED: f.lookOutlined,
        LINK: f.lookLink,
        BLANK: f.lookBlank
    },
    p = {
        BRAND: f.colorBrand,
        BRAND_INVERTED: f.colorBrandInverted,
        RED: f.colorRed,
        GREEN: f.colorGreen,
        PRIMARY: f.colorPrimary,
        LINK: f.colorLink,
        WHITE: f.colorWhite,
        TRANSPARENT: f.colorTransparent,
        CUSTOM: ''
    },
    h = {
        NONE: '',
        TINY: f.sizeTiny,
        SMALL: f.sizeSmall,
        MEDIUM: f.sizeMedium,
        LARGE: f.sizeLarge,
        MIN: f.sizeMin,
        MAX: f.sizeMax,
        ICON: f.sizeIcon
    };
function m() {
    let { look: e = _.FILLED, color: t = p.BRAND, size: n = h.MEDIUM, fullWidth: r = !1, grow: i = !0, submitting: a = !1, disabled: o = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(f.button, e, t, n, {
        [f.fullWidth]: r,
        [f.grow]: i,
        [f.submitting]: a && !o
    });
}
function g(e) {
    let { look: t = _.FILLED, color: n = p.BRAND, size: a = h.MEDIUM, fullWidth: o = !1, grow: g = !0, disabled: E = !1, submitting: v = !1, type: b = 'button', style: I, wrapperClassName: S, className: T, innerClassName: y, onClick: A, onDoubleClick: N, onMouseDown: C, onMouseUp: R, onMouseEnter: O, onMouseLeave: D, onKeyDown: L, children: x, rel: w, buttonRef: M, focusProps: P, 'aria-label': k, submittingStartedLabel: U, submittingFinishedLabel: G, ...B } = e,
        Z = E || v,
        F = Z && (null != O || null != D),
        V = (function (e, t) {
            var n, r, i, a;
            let s = null == e ? void 0 : e.offset;
            if (t === _.LINK || t === _.BLANK) return s;
            if (null == s) return -2;
            if ('number' == typeof s) return s + 2;
            return {
                top: (null !== (n = s.top) && void 0 !== n ? n : 0) - 2,
                right: (null !== (r = s.right) && void 0 !== r ? r : 0) - 2,
                bottom: (null !== (i = s.bottom) && void 0 !== i ? i : 0) - 2,
                left: (null !== (a = s.left) && void 0 !== a ? a : 0) - 2
            };
        })(P, t),
        j = i.useRef(!1);
    i.useEffect(() => {
        !0 === v && ((j.current = !0), l.u.announce(null != U ? U : d.intl.string(d.t.pfChQk))), !1 === v && !0 === j.current && l.u.announce(null != G ? G : d.intl.string(d.t.SVPara));
    }, [v, U, G]);
    let H = (0, r.jsx)(u.t, {
        ...P,
        offset: V,
        children: (0, r.jsxs)('button', {
            ...(Z ? null : B),
            'aria-label': k,
            'aria-busy': !!v || void 0,
            ref: M,
            onClick: Z ? (e) => e.preventDefault() : A,
            onDoubleClick: Z ? (e) => e.preventDefault() : N,
            onMouseUp: E ? void 0 : R,
            onMouseDown: E ? void 0 : C,
            onMouseEnter: O,
            onMouseLeave: D,
            onKeyDown: E ? void 0 : L,
            type: b,
            disabled: E,
            style: I,
            rel: w,
            className: s()(
                T,
                m({
                    look: t,
                    color: n,
                    size: a,
                    fullWidth: o,
                    grow: g,
                    submitting: v,
                    disabled: E
                }),
                F ? null : S
            ),
            children: [
                v && !E
                    ? (0, r.jsx)(c.$, {
                          type: c.$.Type.PULSING_ELLIPSIS,
                          className: f.spinner,
                          itemClassName: f.spinnerItem
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: s()(f.contents, y),
                    children: x
                })
            ]
        })
    });
    return F
        ? (0, r.jsxs)('span', {
              className: s()(f.disabledButtonWrapper, S, a, {
                  [f.grow]: g,
                  [f.fullWidth]: o
              }),
              children: [
                  H,
                  (0, r.jsx)('span', {
                      onMouseEnter: O,
                      onMouseLeave: D,
                      className: f.disabledButtonOverlay
                  })
              ]
          })
        : H;
}
function E(e) {
    let { look: t = _.FILLED, color: n = p.BRAND, size: i = h.MEDIUM, fullWidth: a = !1, grow: l = !0, style: u, className: c, innerClassName: d, to: m, onClick: g, onMouseDown: E, onMouseUp: v, children: b, rel: I, ...S } = e;
    return (0, r.jsx)(o.rU, {
        ...S,
        to: m,
        onClick: g,
        onMouseUp: v,
        onMouseDown: E,
        style: u,
        rel: I,
        className: s()(c, f.button, t, n, i, {
            [f.fullWidth]: a,
            [f.grow]: l
        }),
        children: (0, r.jsx)('span', {
            className: s()(f.contents, d),
            children: b
        })
    });
}
(g.Looks = _), (g.Colors = p), (g.Sizes = h), (g.Link = E);
