n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(177593);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(347469),
    c = n(853276),
    d = n(596390),
    u = n(870472),
    m = n(89634);
function h(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: r } = e,
        l = (0, o.Z)({
            minDimension: d.tq,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: r,
            orientation: o.y.VERTICAL_BOTTOM,
            throttleDuration: 16
        });
    return (0, i.jsx)('div', {
        onMouseDown: l,
        className: m.resizeHandle
    });
}
let g = r.forwardRef(function (e, t) {
    let { children: n, onFocus: l, onBlur: s, onClick: o } = e,
        c = r.useRef(null),
        [u, g] = r.useState(d.tq);
    return (0, i.jsxs)(a.Clickable, {
        className: m.textArea,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: { minHeight: u },
        children: [
            (0, i.jsx)(a.AdvancedScroller, {
                className: m.innerScroller,
                style: { minHeight: u - 2 },
                ref: t,
                children: n
            }),
            (0, i.jsx)(h, {
                resizableNode: c,
                onResize: g,
                onResizeEnd: (e) => {
                    g(e), null == l || l();
                }
            })
        ]
    });
});
function x(e) {
    var t;
    let { initialValue: n, onChangeTags: l, onChangeNewTagValue: o, tagErrors: d = {}, placeholder: h, className: x, maxTags: p } = e,
        f = r.useRef(null),
        C = r.useRef(null),
        I = r.useRef(null),
        _ = (0, u.V)(n),
        {
            handlePasteEvent: N,
            handleInputChange: v,
            handleKeyDown: T,
            handleContainerKeyUp: j,
            handleRemoveTag: E,
            handleTagChangeEvent: S,
            handleSelectTag: b,
            handleUnselectTag: R,
            handleResetTagSelections: Z,
            handleInputBlurEvent: A
        } = (0, u.Q)(_, {
            scrollerRef: I,
            mainInputRef: f,
            mainContainerRef: C
        }),
        {
            state: { value: L, tags: y, selections: D, isSelecting: O }
        } = _,
        [M, P] = r.useState(!1),
        k = r.useCallback(() => {
            var e;
            P(!1), Z(), null === (e = f.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [Z]);
    r.useEffect(() => {
        if (!M) l(y);
    }, [l, y, M]),
        r.useEffect(() => {
            if (!M) o(L);
        }, [o, L, M]);
    let w = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && k(), P(!1);
            },
            [k]
        ),
        B = r.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(y[e]);
                    null === (n = f.current) || void 0 === n || n.focus(),
                        t
                            ? R(e)
                            : (b(e),
                              setImmediate(() => {
                                  var e;
                                  null === (e = f.current) || void 0 === e || e.blur(),
                                      setTimeout(() => {
                                          var e;
                                          return null === (e = C.current) || void 0 === e ? void 0 : e.focus();
                                      }, 16);
                              }));
                } else R(e, !0), P(!0);
            },
            [b, R, D, y]
        );
    return (0, i.jsxs)('div', {
        className: s()(m.mainContainer, x),
        ref: C,
        tabIndex: 0,
        onKeyUp: j,
        children: [
            (0, i.jsxs)(g, {
                ref: I,
                onClick: k,
                children: [
                    y.map((e, t) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: w,
                                onFocus: B(t),
                                onRemove: () => E(t),
                                isSelected: D.includes(e),
                                isSelecting: O,
                                error: d[e],
                                forceShowErrorTooltip: !M && t === y.length - 1
                            },
                            t
                        )
                    ),
                    (0, i.jsx)('input', {
                        className: s()(m.mainTextInput, { [m.isEditingOtherNodes]: M }),
                        ref: f,
                        onChange: v,
                        onKeyDownCapture: T,
                        onPaste: N,
                        onBlur: A,
                        placeholder: 0 === y.length ? h : void 0,
                        value: L
                    })
                ]
            }),
            null != p &&
                (0, i.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: m.maxTags,
                    children: [null !== (t = null == y ? void 0 : y.length) && void 0 !== t ? t : 0, '/', p]
                })
        ]
    });
}
