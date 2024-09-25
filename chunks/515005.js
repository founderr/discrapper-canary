var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711);
var u = n(468194),
    c = n(481060),
    d = n(239091),
    _ = n(2052),
    E = n(330726),
    f = n(691251),
    h = n(626135),
    p = n(285651),
    m = n(373228),
    I = n(378233),
    T = n(419922),
    g = n(490095),
    S = n(981631),
    A = n(689938),
    v = n(911038);
let N = (0, u.Mg)(v.__invalid_stickerPickerPreviewDimensions),
    O = (0, u.Mg)(v.__invalid_stickerPickerPreviewPadding),
    R = 250,
    C = a.memo(function (e) {
        let { isDisplayingIndividualStickers: t = !1, preferAnimation: r = !0, getStickerItemProps: o, getStickerRowProps: u, gutterWidth: C, inspectedStickerPosition: y, isScrolling: b, isUsingKeyboardNavigation: L, onInspect: D, onSelect: M, rowIndex: P, stickerClassName: U, stickerDescriptors: w, stickerPadding: x = O, stickerSize: G = N, ownedStickerPacks: k, enlargeOnInteraction: B = !1, channel: F, currentUser: Z, checkSendability: V = !0 } = e,
            { location: H } = (0, _.O)(),
            Y = G + 2 * x,
            j = a.useMemo(
                () => ({
                    gridColumnGap: C,
                    gridTemplateColumns: 'repeat(auto-fill, '.concat(Y, 'px)'),
                    height: Y,
                    paddingRight: t ? void 0 : Y
                }),
                [t, C, Y]
            ),
            W = a.useMemo(
                () => ({
                    width: G,
                    height: G,
                    padding: x
                }),
                [x, G]
            ),
            [K, z] = (0, E.Z)(null, 300);
        return (0, i.jsx)('div', {
            className: v.row,
            style: j,
            ...(null == u ? void 0 : u(P)),
            children: w.map((e) => {
                var u;
                let _ = e.visibleRowIndex === (null == y ? void 0 : y.rowIndex) && e.columnIndex === (null == y ? void 0 : y.columnIndex),
                    E = e.type === m.al.STICKER && B && _,
                    N = (t) => {
                        if ((null == b ? void 0 : b.current) === !0 || (null == L ? void 0 : L.current) === !0) return;
                        let n = t.altKey;
                        n && e.type === m.al.STICKER && !(0, I.gM)(e.sticker.id) && z(e.sticker.id), null == M || M(e, n);
                    },
                    O = (0, l.throttle)(() => {
                        (null == b ? void 0 : b.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && !_ && (null == D || D(e));
                    }, R),
                    C = () => {
                        e.type === m.al.CREATE_STICKER &&
                            (h.default.track(S.rMx.OPEN_MODAL, {
                                type: S.jXE.CREATE_STICKER_MODAL,
                                location: H
                            }),
                            (0, c.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([n.e('93626'), n.e('44600')]).then(n.bind(n, 136735));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        guildId: e.guild_id,
                                        ...n
                                    });
                            }));
                    },
                    { ref: w, tabIndex: x, onFocus: Y, ...j } = null !== (u = null == o ? void 0 : o(e.columnIndex, P)) && void 0 !== u ? u : {};
                switch (e.type) {
                    case m.al.CREATE_STICKER:
                        return (0, i.jsx)(
                            'div',
                            {
                                ...j,
                                children: (0, i.jsxs)(c.Clickable, {
                                    'aria-label': e.name,
                                    className: s()(v.createSticker, U, { [v.createInspected]: _ }),
                                    innerRef: w,
                                    tabIndex: x,
                                    onFocus: null != Y ? Y : O,
                                    onMouseMove: O,
                                    onClick: C,
                                    style: W,
                                    children: [
                                        !B && (0, i.jsx)('div', { className: v.inspectedIndicator }),
                                        (0, i.jsx)('div', {
                                            className: v.iconWrapper,
                                            children: (0, i.jsx)(c.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: v.icon
                                            })
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            color: 'interactive-active',
                                            variant: 'text-xs/normal',
                                            children: A.Z.Messages.STICKER_PICKER_CREATE_STICKER
                                        })
                                    ]
                                })
                            },
                            e.guild_id
                        );
                    case m.al.STICKER: {
                        let o = t && null != k && (0, I.jl)(e.sticker) && !k.has(e.sticker.pack_id),
                            l = (e) => {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            };
                        return (0, a.createElement)(
                            'div',
                            {
                                ...j,
                                key: e.sticker.id
                            },
                            (0, i.jsxs)(c.Clickable, {
                                className: s()(v.sticker, U, {
                                    [v.stickerInspected]: _,
                                    [v.showPulse]: K === e.sticker.id
                                }),
                                innerRef: w,
                                tabIndex: x,
                                onFocus: null != Y ? Y : O,
                                onMouseMove: O,
                                onClick: N,
                                onContextMenu: l,
                                style: W,
                                'data-type': f.S.STICKER,
                                'data-id': e.sticker.id,
                                children: [
                                    (0, i.jsx)(c.HiddenVisually, { children: (0, T.Co)(e.sticker) }),
                                    (0, i.jsxs)('div', {
                                        'aria-hidden': !0,
                                        children: [
                                            !B && (0, i.jsx)('div', { className: v.inspectedIndicator }),
                                            (0, i.jsx)(T.ZP, {
                                                className: s()(v.stickerNode, {
                                                    [v.stickerNodeDimmed]: B && !_ && null != y && -1 !== y.rowIndex && -1 !== y.columnIndex,
                                                    [v.stickerNodeHidden]: E,
                                                    [v.stickerUnsendable]: V && !(0, p.kl)(e.sticker, Z, F)
                                                }),
                                                disableAnimation: !_ && !r,
                                                enlargeOnInteraction: B,
                                                isInteracting: _,
                                                maskAsset: _,
                                                sticker: e.sticker,
                                                size: G
                                            }),
                                            o ? (0, i.jsx)(g.Z, { size: 20 }) : null
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
t.Z = C;
