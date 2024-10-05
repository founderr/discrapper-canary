n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n(468194),
    u = n(481060),
    c = n(239091),
    d = n(2052),
    _ = n(330726),
    E = n(691251),
    f = n(626135),
    h = n(285651),
    p = n(373228),
    I = n(378233),
    m = n(419922),
    T = n(490095),
    S = n(981631),
    g = n(689938),
    A = n(911038);
let N = (0, l.Mg)(A.__invalid_stickerPickerPreviewDimensions),
    O = (0, l.Mg)(A.__invalid_stickerPickerPreviewPadding),
    R = i.memo(function (e) {
        let { isDisplayingIndividualStickers: t = !1, preferAnimation: a = !0, getStickerItemProps: l, getStickerRowProps: R, gutterWidth: v, inspectedStickerPosition: C, isScrolling: L, isUsingKeyboardNavigation: D, onInspect: y, onSelect: b, rowIndex: M, stickerClassName: P, stickerDescriptors: U, stickerPadding: w = O, stickerSize: x = N, ownedStickerPacks: G, enlargeOnInteraction: k = !1, channel: B, currentUser: F, checkSendability: V = !0 } = e,
            { location: H } = (0, d.O)(),
            Z = x + 2 * w,
            Y = i.useMemo(
                () => ({
                    gridColumnGap: v,
                    gridTemplateColumns: 'repeat(auto-fill, '.concat(Z, 'px)'),
                    height: Z,
                    paddingRight: t ? void 0 : Z
                }),
                [t, v, Z]
            ),
            j = i.useMemo(
                () => ({
                    width: x,
                    height: x,
                    padding: w
                }),
                [w, x]
            ),
            [W, K] = (0, _.Z)(null, 300);
        return (0, r.jsx)('div', {
            className: A.row,
            style: Y,
            ...(null == R ? void 0 : R(M)),
            children: U.map((e) => {
                var d;
                let _ = e.visibleRowIndex === (null == C ? void 0 : C.rowIndex) && e.columnIndex === (null == C ? void 0 : C.columnIndex),
                    N = e.type === p.al.STICKER && k && _,
                    O = (0, o.throttle)(() => {
                        (null == L ? void 0 : L.current) !== !0 && (null == D ? void 0 : D.current) !== !0 && !_ && (null == y || y(e));
                    }, 250),
                    { ref: R, tabIndex: v, onFocus: U, ...w } = null !== (d = null == l ? void 0 : l(e.columnIndex, M)) && void 0 !== d ? d : {};
                switch (e.type) {
                    case p.al.CREATE_STICKER:
                        return (0, r.jsx)(
                            'div',
                            {
                                ...w,
                                children: (0, r.jsxs)(u.Clickable, {
                                    'aria-label': e.name,
                                    className: s()(A.createSticker, P, { [A.createInspected]: _ }),
                                    innerRef: R,
                                    tabIndex: v,
                                    onFocus: null != U ? U : O,
                                    onMouseMove: O,
                                    onClick: () => {
                                        e.type === p.al.CREATE_STICKER &&
                                            (f.default.track(S.rMx.OPEN_MODAL, {
                                                type: S.jXE.CREATE_STICKER_MODAL,
                                                location: H
                                            }),
                                            (0, u.openModalLazy)(async () => {
                                                let { default: t } = await Promise.all([n.e('93626'), n.e('44600')]).then(n.bind(n, 136735));
                                                return (n) =>
                                                    (0, r.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...n
                                                    });
                                            }));
                                    },
                                    style: j,
                                    children: [
                                        !k && (0, r.jsx)('div', { className: A.inspectedIndicator }),
                                        (0, r.jsx)('div', {
                                            className: A.iconWrapper,
                                            children: (0, r.jsx)(u.PlusSmallIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: A.icon
                                            })
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            color: 'interactive-active',
                                            variant: 'text-xs/normal',
                                            children: g.Z.Messages.STICKER_PICKER_CREATE_STICKER
                                        })
                                    ]
                                })
                            },
                            e.guild_id
                        );
                    case p.al.STICKER: {
                        let o = t && null != G && (0, I.jl)(e.sticker) && !G.has(e.sticker.pack_id);
                        return (0, i.createElement)(
                            'div',
                            {
                                ...w,
                                key: e.sticker.id
                            },
                            (0, r.jsxs)(u.Clickable, {
                                className: s()(A.sticker, P, {
                                    [A.stickerInspected]: _,
                                    [A.showPulse]: W === e.sticker.id
                                }),
                                innerRef: R,
                                tabIndex: v,
                                onFocus: null != U ? U : O,
                                onMouseMove: O,
                                onClick: (t) => {
                                    if ((null == L ? void 0 : L.current) === !0 || (null == D ? void 0 : D.current) === !0) return;
                                    let n = t.altKey;
                                    n && e.type === p.al.STICKER && !(0, I.gM)(e.sticker.id) && K(e.sticker.id), null == b || b(e, n);
                                },
                                onContextMenu: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('39010').then(n.bind(n, 269254));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    });
                                },
                                style: j,
                                'data-type': E.S.STICKER,
                                'data-id': e.sticker.id,
                                children: [
                                    (0, r.jsx)(u.HiddenVisually, { children: (0, m.Co)(e.sticker) }),
                                    (0, r.jsxs)('div', {
                                        'aria-hidden': !0,
                                        children: [
                                            !k && (0, r.jsx)('div', { className: A.inspectedIndicator }),
                                            (0, r.jsx)(m.ZP, {
                                                className: s()(A.stickerNode, {
                                                    [A.stickerNodeDimmed]: k && !_ && null != C && -1 !== C.rowIndex && -1 !== C.columnIndex,
                                                    [A.stickerNodeHidden]: N,
                                                    [A.stickerUnsendable]: V && !(0, h.kl)(e.sticker, F, B)
                                                }),
                                                disableAnimation: !_ && !a,
                                                enlargeOnInteraction: k,
                                                isInteracting: _,
                                                maskAsset: _,
                                                sticker: e.sticker,
                                                size: x
                                            }),
                                            o ? (0, r.jsx)(T.Z, { size: 20 }) : null
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
t.Z = R;
