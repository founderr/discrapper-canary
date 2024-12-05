n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120),
    n(177593);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(110924),
    c = n(347469),
    d = n(853276),
    u = n(596390),
    m = n(870472),
    h = n(15058);
function g(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, c.Z)({
            minDimension: u.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: c.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: l,
        className: h.resizeHandle
    });
}
let x = r.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: s, onClick: o } = e,
        c = r.useRef(null),
        [d, m] = r.useState(u.tq);
    return (0, i.jsxs)(a.Clickable, {
        className: h.textArea,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: d },
        children: [
            (0, i.jsx)(a.AdvancedScroller, {
                className: h.innerScroller,
                style: { minHeight: d - 2 },
                ref: t,
                children: n
            }),
            (0, i.jsx)(g, {
                resizableNode: c,
                onResize: m,
                onResizeEnd: (e) => {
                    m(e), null == l || l();
                }
            })
        ]
    });
});
function p(e) {
    var t;
    let { initialValue: n, onChangeTags: l, onChangeNewTagValue: c, tagErrors: u = {}, placeholder: g, className: p, maxTags: f } = e,
        C = r.useRef(null),
        v = r.useRef(null),
        _ = r.useRef(null),
        I = (0, m.V)(n),
        {
            handlePasteEvent: N,
            handleInputChange: T,
            handleKeyDown: b,
            handleContainerKeyUp: j,
            handleRemoveTag: S,
            handleTagChangeEvent: E,
            handleSelectTag: R,
            handleUnselectTag: y,
            handleResetTagSelections: Z,
            handleInputBlurEvent: A
        } = (0, m.Q)(I, {
            scrollerRef: _,
            mainInputRef: C,
            mainContainerRef: v
        }),
        {
            state: { value: L, tags: D, selections: O, isSelecting: k }
        } = I,
        P = (0, o.Z)(D),
        [M, w] = r.useState(!1),
        B = r.useCallback(() => {
            var e;
            w(!1), Z(), null === (e = C.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [Z]);
    r.useEffect(() => {
        if (!M && P !== D) l(D);
    }, [l, P, D, M]),
        r.useEffect(() => {
            if (!M) c(L);
        }, [c, L, M]);
    let U = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && B(), w(!1);
            },
            [B]
        ),
        G = r.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = O.includes(D[e]);
                    null === (n = C.current) || void 0 === n || n.focus(),
                        t
                            ? y(e)
                            : (R(e),
                              setImmediate(() => {
                                  var e;
                                  null === (e = C.current) || void 0 === e || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null === (e = v.current) || void 0 === e ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else y(e, !0), w(!0);
            },
            [R, y, O, D]
        );
    return (0, i.jsxs)('div', {
        className: s()(h.mainContainer, p),
        ref: v,
        tabIndex: 0,
        onKeyUp: j,
        children: [
            (0, i.jsxs)(x, {
                ref: _,
                onClick: B,
                children: [
                    D.map((e, t) =>
                        (0, i.jsx)(
                            d.Z,
                            {
                                value: e,
                                onChange: E(t),
                                onBlur: U,
                                onFocus: G(t),
                                onRemove: () => S(t),
                                isSelected: O.includes(e),
                                isSelecting: k,
                                error: u[e],
                                forceShowErrorTooltip: !M && t === D.length - 1
                            },
                            t
                        )
                    ),
                    (0, i.jsx)('input', {
                        className: s()(h.mainTextInput, { [h.isEditingOtherNodes]: M }),
                        ref: C,
                        onChange: T,
                        onKeyDownCapture: b,
                        onPaste: N,
                        onBlur: A,
                        placeholder: 0 === D.length ? g : void 0,
                        value: L
                    })
                ]
            }),
            null != f &&
                (0, i.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: h.maxTags,
                    children: [null !== (t = null == D ? void 0 : D.length) && void 0 !== t ? t : 0, '/', f]
                })
        ]
    });
}
