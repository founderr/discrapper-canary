n(47120);
var r = n(200651),
    i = n(192379),
    a = n(954955),
    s = n.n(a),
    o = n(515643),
    l = n(442837),
    u = n(477690),
    c = n(481060),
    d = n(2052),
    f = n(100527),
    _ = n(906732),
    p = n(806966),
    h = n(28546),
    m = n(98528),
    g = n(98278),
    E = n(639119),
    v = n(695346),
    b = n(594174),
    I = n(626135),
    T = n(624138),
    S = n(45521),
    y = n(285651),
    A = n(217590),
    N = n(453070),
    C = n(926491),
    R = n(373228),
    O = n(462109),
    D = n(422195),
    L = n(657795),
    x = n(489762),
    w = n(31543),
    M = n(814042),
    P = n(15350),
    k = n(611480),
    U = n(981631),
    B = n(858260);
let G = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Z = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    F = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    V = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    j = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    H = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    Y = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    W = (0, T.Mg)(u.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    K = H + 2 * W,
    z = Y + 2 * W,
    q = s()(A.Iw, 200),
    Q = s()(A.m1, 200),
    X = i.forwardRef(function (e, t) {
        var a;
        let { containerWidth: s, channel: u, onSelectSticker: T, closePopout: H } = e,
            { location: Y } = (0, d.O)(),
            { analyticsLocations: W } = (0, _.ZP)(f.Z.STICKER_PICKER),
            X = (null === (a = (0, E.N)()) || void 0 === a ? void 0 : a.subscription_trial) != null,
            J = i.useRef(null),
            $ = i.useRef(null),
            ee = i.useRef(null),
            et = (0, S.Q)((e) => e.showPremiumUpsell),
            [en, er] = (0, h.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], o.X),
            ei = i.useRef('');
        i.useImperativeHandle(t, () => ({ onPickerOpen: eL }));
        let ea = (0, N.Sd)(u),
            es = 0 === ea.filter((e) => e.type !== R.Ih.EMPTY_GUILD_UPSELL).length,
            eo = (0, m.ep)({
                gridWrapperRef: J,
                containerWidth: s,
                showingEmptyState: es,
                listPaddingLeft: Z,
                listScrollbarWidth: 8
            }),
            el = v._O.useSetting(),
            eu = i.useMemo(() => new Set(el), [el]),
            ec = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
            ed = i.useMemo(() => (0, P.S)(en, ec, u), [en, ec, u]),
            ef = (0, N.RJ)(),
            e_ = (0, N.LZ)(),
            ep = (0, l.cj)([C.Z], () => C.Z.getAllGuildStickers()),
            { sendable: eh = [], sendableWithPremium: em = [] } = null != ed ? ed : {},
            eg = eh.length + em.length,
            eE = i.useCallback(
                (e) => {
                    '' === en ? (0, A.On)(e) : (0, A.Yk)(e, en, eg), T(e.sticker, R.V0.STICKER_PICKER);
                },
                [T, en, eg]
            ),
            ev = null != eo && eo > G,
            {
                rowCount: eb,
                rowCountBySection: eI,
                stickersGrid: eT,
                gutterWidth: eS,
                columnCounts: ey
            } = (0, N.el)({
                filteredStickers: ed,
                stickersCategories: ea,
                collapsedStickersCategories: eu,
                listWidth: eo,
                listPaddingRight: F,
                stickerNodeMargin: ev ? V : j,
                stickerNodeWidth: ev ? K : z
            }),
            eA = i.useCallback(
                (e, t) => {
                    let { location: i } = t;
                    switch (e.type) {
                        case R.al.CREATE_STICKER:
                            I.default.track(U.rMx.OPEN_MODAL, {
                                type: U.jXE.CREATE_STICKER_MODAL,
                                location: Y
                            }),
                                (0, c.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('44600')]).then(n.bind(n, 136735));
                                    return (n) =>
                                        (0, r.jsx)(t, {
                                            guildId: e.guild_id,
                                            ...n
                                        });
                                });
                            break;
                        case R.al.STICKER:
                            null != e.sticker && (0, y.kl)(e.sticker, ec, u) && eE(e);
                    }
                },
                [Y, ec, u, eE]
            ),
            {
                getItemProps: eN,
                getRowProps: eC,
                gridContainerProps: eR,
                handleGridContainerKeyDown: eO,
                isUsingKeyboardNavigation: eD
            } = (0, O.t)({
                columnCounts: ey,
                stickersListRef: $,
                stickersGrid: eT,
                onGridItemSelect: eA,
                store: p.ZN,
                setInspectedStickerPosition: p.ZN.setInspectedExpressionPosition,
                gridNavigatorId: k.Vr
            });
        i.useEffect(() => p.ZN.resetStoreState, []);
        let eL = () => {
            let e = u.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null !== (n = C.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [];
            }
            let r = 0;
            null != ep &&
                [...ep.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, A.ev)({
                    containerWidth: s,
                    favoriteStickers: ef,
                    frequentlyUsedStickers: e_,
                    guildStickers: t,
                    stickersTotal: r
                });
        };
        i.useEffect(() => {
            '' === ei.current && '' !== en && (0, A.n8)(), (ei.current = en);
        }, [en]),
            i.useEffect(() => {
                0 === eg ? q(en) : Q(en, eg, er);
            }, [en, eg, er]),
            i.useLayoutEffect(() => {
                var e;
                null === (e = ee.current) || void 0 === e || e.focus();
            }, []);
        let ex = i.useCallback(() => {
            H(), I.default.track(U.rMx.PREMIUM_PROMOTION_OPENED, { location_section: U.jXE.STICKER_PICKER_UPSELL }), (0, g.z)();
        }, [H]);
        return (0, r.jsxs)(_.Gt, {
            value: W,
            children: [
                !(X && es) &&
                    (0, r.jsx)('div', {
                        className: B.header,
                        children: (0, r.jsx)(w.Z, {
                            ref: ee,
                            onKeyDown: eO,
                            stickersListRef: $,
                            channel: u
                        })
                    }),
                es
                    ? (0, r.jsx)(L.Z, {
                          className: B.emptyState,
                          onClose: H
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  ref: J,
                                  className: B.listWrapper,
                                  id: k.Vr,
                                  ...eR,
                                  children:
                                      null != eo
                                          ? (0, r.jsx)(x.Z, {
                                                ref: $,
                                                collapsedStickersCategories: eu,
                                                filteredStickers: ed,
                                                getStickerItemProps: eN,
                                                getStickerRowProps: eC,
                                                gridWidth: eo,
                                                gutterWidth: eS,
                                                isUsingKeyboardNavigation: eD,
                                                onSelectSticker: eE,
                                                rowCount: eb,
                                                rowCountBySection: eI,
                                                stickersCategories: ea,
                                                stickersGrid: eT,
                                                channel: u
                                            })
                                          : null
                              }),
                              (0, r.jsx)(D.Z, {
                                  stickersListRef: $,
                                  channel: u
                              })
                          ]
                      }),
                et && (0, r.jsx)(M.C, { onLearnMore: ex })
            ]
        });
    });
t.Z = i.forwardRef(
    (e, t) => (
        (0, N.fP)(),
        (0, r.jsx)('div', {
            className: B.wrapper,
            id: k.nZ,
            'aria-labelledby': k.ED,
            role: 'tabpanel',
            children: e.isLoading
                ? (0, r.jsx)(c.Spinner, { className: B.loadingIndicator })
                : (0, r.jsx)(X, {
                      ...e,
                      ref: t
                  })
        })
    )
);
