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
        v = r.useRef(null),
        _ = (0, u.V)(n),
        {
            handlePasteEvent: I,
            handleInputChange: N,
            handleKeyDown: T,
            handleContainerKeyUp: j,
            handleRemoveTag: b,
            handleTagChangeEvent: S,
            handleSelectTag: E,
            handleUnselectTag: R,
            handleResetTagSelections: y,
            handleInputBlurEvent: Z
        } = (0, u.Q)(_, {
            scrollerRef: v,
            mainInputRef: f,
            mainContainerRef: C
        }),
        {
            state: { value: A, tags: L, selections: D, isSelecting: O }
        } = _,
        [k, P] = r.useState(!1),
        M = r.useCallback(() => {
            var e;
            P(!1), y(), null === (e = f.current) || void 0 === e || e.focus({ preventScroll: !0 });
        }, [y]);
    r.useEffect(() => {
        if (!k) l(L);
    }, [l, L, k]),
        r.useEffect(() => {
            if (!k) o(A);
        }, [o, A, k]);
    let w = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && M(), P(!1);
            },
            [M]
        ),
        B = r.useCallback(
            (e) => (t) => {
                if (t) {
                    var n;
                    let t = D.includes(L[e]);
                    null === (n = f.current) || void 0 === n || n.focus(),
                        t
                            ? R(e)
                            : (E(e),
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
            [E, R, D, L]
        );
    return (0, i.jsxs)('div', {
        className: s()(m.mainContainer, x),
        ref: C,
        tabIndex: 0,
        onKeyUp: j,
        children: [
            (0, i.jsxs)(g, {
                ref: v,
                onClick: M,
                children: [
                    L.map((e, t) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                value: e,
                                onChange: S(t),
                                onBlur: w,
                                onFocus: B(t),
                                onRemove: () => b(t),
                                isSelected: D.includes(e),
                                isSelecting: O,
                                error: d[e],
                                forceShowErrorTooltip: !k && t === L.length - 1
                            },
                            t
                        )
                    ),
                    (0, i.jsx)('input', {
                        className: s()(m.mainTextInput, { [m.isEditingOtherNodes]: k }),
                        ref: f,
                        onChange: N,
                        onKeyDownCapture: T,
                        onPaste: I,
                        onBlur: Z,
                        placeholder: 0 === L.length ? h : void 0,
                        value: A
                    })
                ]
            }),
            null != p &&
                (0, i.jsxs)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: m.maxTags,
                    children: [null !== (t = null == L ? void 0 : L.length) && void 0 !== t ? t : 0, '/', p]
                })
        ]
    });
}
