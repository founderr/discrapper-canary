n.d(t, {
    Ph: function () {
        return h;
    },
    Tt: function () {
        return f;
    },
    ZP: function () {
        return T;
    },
    iL: function () {
        return E;
    },
    nY: function () {
        return m;
    },
    zx: function () {
        return I;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(613828),
    l = n(680732),
    u = n(84735),
    c = n(922770),
    d = n(689938),
    _ = n(426950);
let E = {
        FILLED: _.lookFilled,
        OUTLINED: _.lookOutlined,
        LINK: _.lookLink,
        BLANK: _.lookBlank
    },
    f = {
        BRAND: _.colorBrand,
        BRAND_INVERTED: _.colorBrandInverted,
        RED: _.colorRed,
        GREEN: _.colorGreen,
        PRIMARY: _.colorPrimary,
        LINK: _.colorLink,
        WHITE: _.colorWhite,
        TRANSPARENT: _.colorTransparent,
        CUSTOM: ''
    },
    h = {
        NONE: '',
        TINY: _.sizeTiny,
        SMALL: _.sizeSmall,
        MEDIUM: _.sizeMedium,
        LARGE: _.sizeLarge,
        MIN: _.sizeMin,
        MAX: _.sizeMax,
        ICON: _.sizeIcon
    };
function p(e, t) {
    var n, r, i, a;
    let o = null == e ? void 0 : e.offset;
    if (t === E.LINK || t === E.BLANK) return o;
    if (null == o) return -2;
    if ('number' == typeof o) return o + 2;
    return {
        top: (null !== (n = o.top) && void 0 !== n ? n : 0) - 2,
        right: (null !== (r = o.right) && void 0 !== r ? r : 0) - 2,
        bottom: (null !== (i = o.bottom) && void 0 !== i ? i : 0) - 2,
        left: (null !== (a = o.left) && void 0 !== a ? a : 0) - 2
    };
}
function m() {
    let { look: e = E.FILLED, color: t = f.BRAND, size: n = h.MEDIUM, fullWidth: r = !1, grow: i = !0, submitting: a = !1, disabled: s = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return o()(_.button, e, t, n, {
        [_.fullWidth]: r,
        [_.grow]: i,
        [_.submitting]: a && !s
    });
}
function I(e) {
    let { look: t = E.FILLED, color: n = f.BRAND, size: a = h.MEDIUM, fullWidth: s = !1, grow: I = !0, disabled: T = !1, submitting: g = !1, type: S = 'button', style: A, wrapperClassName: v, className: N, innerClassName: O, onClick: R, onDoubleClick: C, onMouseDown: y, onMouseUp: b, onMouseEnter: L, onMouseLeave: D, onKeyDown: M, children: P, rel: U, buttonRef: w, focusProps: x, 'aria-label': G, submittingStartedLabel: k, submittingFinishedLabel: B, ...F } = e,
        Z = T || g,
        V = Z && (null != L || null != D),
        H = V ? null : v,
        Y = p(x, t),
        j = i.useRef(!1);
    i.useEffect(() => {
        !0 === g && ((j.current = !0), l.u.announce(null != k ? k : d.Z.Messages.A11Y_LOADING_STARTED)), !1 === g && !0 === j.current && l.u.announce(null != B ? B : d.Z.Messages.A11Y_LOADING_FINISHED);
    }, [g, k, B]);
    let W = (0, r.jsx)(u.t, {
        ...x,
        offset: Y,
        children: (0, r.jsxs)('button', {
            ...(Z ? null : F),
            'aria-label': G,
            'aria-busy': !!g || void 0,
            ref: w,
            onClick: Z ? (e) => e.preventDefault() : R,
            onDoubleClick: Z ? (e) => e.preventDefault() : C,
            onMouseUp: T ? void 0 : b,
            onMouseDown: T ? void 0 : y,
            onMouseEnter: L,
            onMouseLeave: D,
            onKeyDown: T ? void 0 : M,
            type: S,
            disabled: T,
            style: A,
            rel: U,
            className: o()(
                N,
                m({
                    look: t,
                    color: n,
                    size: a,
                    fullWidth: s,
                    grow: I,
                    submitting: g,
                    disabled: T
                }),
                H
            ),
            children: [
                g && !T
                    ? (0, r.jsx)(c.$, {
                          type: c.$.Type.PULSING_ELLIPSIS,
                          className: _.spinner,
                          itemClassName: _.spinnerItem
                      })
                    : null,
                (0, r.jsx)('div', {
                    className: o()(_.contents, O),
                    children: P
                })
            ]
        })
    });
    return V
        ? (0, r.jsxs)('span', {
              className: o()(_.disabledButtonWrapper, v, a, {
                  [_.grow]: I,
                  [_.fullWidth]: s
              }),
              children: [
                  W,
                  (0, r.jsx)('span', {
                      onMouseEnter: L,
                      onMouseLeave: D,
                      className: _.disabledButtonOverlay
                  })
              ]
          })
        : W;
}
function T(e) {
    let { look: t = E.FILLED, color: n = f.BRAND, size: i = h.MEDIUM, fullWidth: a = !1, grow: l = !0, style: u, className: c, innerClassName: d, to: p, onClick: m, onMouseDown: I, onMouseUp: T, children: g, rel: S, ...A } = e;
    return (0, r.jsx)(s.rU, {
        ...A,
        to: p,
        onClick: m,
        onMouseUp: T,
        onMouseDown: I,
        style: u,
        rel: S,
        className: o()(c, _.button, t, n, i, {
            [_.fullWidth]: a,
            [_.grow]: l
        }),
        children: (0, r.jsx)('span', {
            className: o()(_.contents, d),
            children: g
        })
    });
}
(I.Looks = E), (I.Colors = f), (I.Sizes = h), (I.Link = T);
