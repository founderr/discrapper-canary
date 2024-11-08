n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(468194),
    u = n(481060),
    c = n(239091),
    d = n(2052),
    f = n(330726),
    _ = n(691251),
    h = n(626135),
    p = n(285651),
    m = n(373228),
    g = n(378233),
    E = n(419922),
    v = n(490095),
    I = n(981631),
    S = n(388032),
    b = n(375314);
let T = (0, l.Mg)(b.__invalid_stickerPickerPreviewDimensions),
    y = (0, l.Mg)(b.__invalid_stickerPickerPreviewPadding),
    A = i.memo(function (e) {
        let { isDisplayingIndividualStickers: t = !1, preferAnimation: a = !0, getStickerItemProps: l, getStickerRowProps: A, gutterWidth: N, inspectedStickerPosition: C, isScrolling: R, isUsingKeyboardNavigation: O, onInspect: D, onSelect: L, rowIndex: x, stickerClassName: w, stickerDescriptors: M, stickerPadding: P = y, stickerSize: k = T, ownedStickerPacks: U, enlargeOnInteraction: G = !1, channel: B, currentUser: Z, checkSendability: F = !0 } = e,
            { location: V } = (0, d.O)(),
            H = k + 2 * P,
            j = i.useMemo(
                () => ({
                    gridColumnGap: N,
                    gridTemplateColumns: 'repeat(auto-fill, '.concat(H, 'px)'),
                    height: H,
                    paddingRight: t ? void 0 : H
                }),
                [t, N, H]
            ),
            Y = i.useMemo(
                () => ({
                    width: k,
                    height: k,
                    padding: P
                }),
                [P, k]
            ),
            [W, K] = (0, f.Z)(null, 300);
        return (0, r.jsx)('div', {
            className: b.row,
            style: j,
            ...(null == A ? void 0 : A(x)),
            children: M.map((e) => {
                var d;
                let f = e.visibleRowIndex === (null == C ? void 0 : C.rowIndex) && e.columnIndex === (null == C ? void 0 : C.columnIndex),
                    T = e.type === m.al.STICKER && G && f,
                    y = (0, o.throttle)(() => {
                        (null == R ? void 0 : R.current) !== !0 && (null == O ? void 0 : O.current) !== !0 && !f && (null == D || D(e));
                    }, 250),
                    { ref: A, tabIndex: N, onFocus: M, ...P } = null !== (d = null == l ? void 0 : l(e.columnIndex, x)) && void 0 !== d ? d : {};
                switch (e.type) {
                    case m.al.CREATE_STICKER:
                        return (0, r.jsx)(
                            'div',
                            {
                                ...P,
                                children: (0, r.jsxs)(u.Clickable, {
                                    'aria-label': e.name,
                                    className: s()(b.createSticker, w, { [b.createInspected]: f }),
                                    innerRef: A,
                                    tabIndex: N,
                                    onFocus: null != M ? M : y,
                                    onMouseMove: y,
                                    onClick: () => {
                                        e.type === m.al.CREATE_STICKER &&
                                            (h.default.track(I.rMx.OPEN_MODAL, {
                                                type: I.jXE.CREATE_STICKER_MODAL,
                                                location: V
                                            }),
                                            (0, u.openModalLazy)(async () => {
                                                let { default: t } = await Promise.all([n.e('93626'), n.e('25887')]).then(n.bind(n, 136735));
                                                return (n) =>
                                                    (0, r.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...n
                                                    });
                                            }));
                                    },
                                    style: Y,
                                    children: [
                                        !G && (0, r.jsx)('div', { className: b.inspectedIndicator }),
                                        (0, r.jsx)('div', {
                                            className: b.iconWrapper,
                                            children: (0, r.jsx)(u.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: b.icon
                                            })
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: 'interactive-active',
                                            variant: 'text-xs/normal',
                                            children: S.intl.string(S.t['+nEuqq'])
                                        })
                                    ]
                                })
                            },
                            e.guild_id
                        );
                    case m.al.STICKER: {
                        let o = t && null != U && (0, g.jl)(e.sticker) && !U.has(e.sticker.pack_id);
                        return (0, i.createElement)(
                            'div',
                            {
                                ...P,
                                key: e.sticker.id
                            },
                            (0, r.jsxs)(u.Clickable, {
                                className: s()(b.sticker, w, {
                                    [b.stickerInspected]: f,
                                    [b.showPulse]: W === e.sticker.id
                                }),
                                innerRef: A,
                                tabIndex: N,
                                onFocus: null != M ? M : y,
                                onMouseMove: y,
                                onClick: (t) => {
                                    if ((null == R ? void 0 : R.current) === !0 || (null == O ? void 0 : O.current) === !0) return;
                                    let n = t.altKey;
                                    n && e.type === m.al.STICKER && !(0, g.gM)(e.sticker.id) && K(e.sticker.id), null == L || L(e, n);
                                },
                                onContextMenu: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    });
                                },
                                style: Y,
                                'data-type': _.S.STICKER,
                                'data-id': e.sticker.id,
                                children: [
                                    (0, r.jsx)(u.HiddenVisually, { children: (0, E.Co)(e.sticker) }),
                                    (0, r.jsxs)('div', {
                                        'aria-hidden': !0,
                                        children: [
                                            !G && (0, r.jsx)('div', { className: b.inspectedIndicator }),
                                            (0, r.jsx)(E.ZP, {
                                                className: s()(b.stickerNode, {
                                                    [b.stickerNodeDimmed]: G && !f && null != C && -1 !== C.rowIndex && -1 !== C.columnIndex,
                                                    [b.stickerNodeHidden]: T,
                                                    [b.stickerUnsendable]: F && !(0, p.kl)(e.sticker, Z, B)
                                                }),
                                                disableAnimation: !f && !a,
                                                enlargeOnInteraction: G,
                                                isInteracting: f,
                                                maskAsset: f,
                                                sticker: e.sticker,
                                                size: k
                                            }),
                                            o ? (0, r.jsx)(v.Z, { size: 20 }) : null
                                        ]
                                    })
                                ]
                            })
                        );
                    }
                }
            })
        });
    });
t.Z = A;
