n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(313201),
    o = n(345861),
    c = n(208567),
    d = n(937615),
    u = n(289393),
    m = n(723047),
    h = n(727843),
    g = n(290348),
    x = n(927954),
    p = n(783454),
    f = n(981631),
    C = n(388032),
    I = n(83701),
    _ = n(747716);
function v(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, h.N)(),
        v = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getSubscriptionListing(n)) || void 0 === e ? void 0 : e.image_asset;
        }),
        [N, T] = g._T(n),
        [b, j] = g.mR(n),
        [S, E] = g.PK(n),
        [R, y] = g.d9(n, 1024),
        { imageCTA: A, imageAriaLabel: Z, setFilename: L } = (0, x.Z)(v),
        D = r.useMemo(() => {
            var e;
            return null !==
                (e =
                    null == t
                        ? void 0
                        : t.map((e) => ({
                              value: e,
                              label: (0, d.T4)(e, f.pKx.USD)
                          }))) && void 0 !== e
                ? e
                : [];
        }, [t]);
    function O(e, t) {
        null != t && L(t.name), y(e);
    }
    let P = (0, m.mY)(),
        k = (0, a.Dt)(),
        M = (0, a.Dt)(),
        w = (0, a.Dt)();
    return (0, i.jsxs)(p.Z, {
        title: C.intl.string(C.t.iHU439),
        intiallyExpanded: !0,
        children: [
            (0, i.jsxs)('div', {
                className: _.formSplit,
                children: [
                    (0, i.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, i.jsx)(s.FormSection, {
                            title: C.intl.string(C.t.grbGJy),
                            titleId: k,
                            disabled: P,
                            children: (0, i.jsx)(s.TextInput, {
                                placeholder: C.intl.string(C.t['So2/xM']),
                                value: N,
                                inputClassName: I.formInput,
                                onChange: T,
                                'aria-labelledby': k,
                                disabled: P
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: _.formSplitHalf,
                        children: (0, i.jsx)(s.FormSection, {
                            title: C.intl.string(C.t.Ibl4BQ),
                            titleId: M,
                            disabled: P,
                            children: (0, i.jsx)(s.SingleSelect, {
                                options: D,
                                className: I.formInput,
                                isDisabled: P || null == t,
                                placeholder: C.intl.string(C.t['88XZDg']),
                                value: b,
                                onChange: j,
                                maxVisibleItems: 5,
                                look: s.SelectLooks.CUSTOM,
                                'aria-labelledby': M
                            })
                        })
                    })
                ]
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsx)(s.FormSection, {
                title: C.intl.string(C.t['1w2WcX']),
                titleId: w,
                disabled: P,
                children: (0, i.jsx)(s.TextArea, {
                    placeholder: C.intl.string(C.t.p7Jr4O),
                    value: S,
                    rows: 2,
                    autosize: !0,
                    className: I.formInput,
                    onChange: E,
                    'aria-labelledby': w,
                    disabled: P
                })
            }),
            (0, i.jsx)(s.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: _.iconSection,
                children: [
                    (0, i.jsxs)(s.FormSection, {
                        title: C.intl.string(C.t.RUBM2t),
                        className: _.iconSectionDescription,
                        disabled: P,
                        children: [
                            (0, i.jsx)(s.FormText, {
                                type: s.FormText.Types.DESCRIPTION,
                                className: I.formDescription,
                                disabled: P,
                                children: C.intl.string(C.t['0iUofH'])
                            }),
                            (0, i.jsx)(o.Z, {
                                onChange: O,
                                buttonCTA: A,
                                'aria-label': Z,
                                disabled: P,
                                look: s.Button.Looks.OUTLINED,
                                color: s.Button.Colors.PRIMARY
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z, {
                        image: R,
                        hint: A,
                        showIcon: !0,
                        showRemoveButton: !1,
                        hideSize: !0,
                        className: _.iconUploader,
                        imageClassName: _.tierSymbolUploaderInner,
                        onChange: O,
                        'aria-label': Z,
                        disabled: P
                    })
                ]
            })
        ]
    });
}
