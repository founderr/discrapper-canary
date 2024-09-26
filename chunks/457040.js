var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(954955),
    s = n.n(o),
    l = n(143927),
    u = n(442837),
    c = n(477690),
    d = n(481060),
    _ = n(2052),
    E = n(100527),
    f = n(906732),
    h = n(806966),
    p = n(28546),
    m = n(98528),
    I = n(98278),
    T = n(639119),
    g = n(695346),
    S = n(594174),
    A = n(626135),
    v = n(624138),
    N = n(191177),
    O = n(285651),
    R = n(217590),
    C = n(453070),
    y = n(926491),
    L = n(373228),
    b = n(462109),
    D = n(422195),
    M = n(657795),
    P = n(489762),
    U = n(31543),
    w = n(814042),
    x = n(15350),
    G = n(611480),
    k = n(981631),
    B = n(858260);
let F = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
    Z = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
    V = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
    H = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
    Y = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
    j = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
    W = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
    K = (0, v.Mg)(c.Z.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
    z = j + 2 * K,
    q = W + 2 * K,
    Q = 8,
    X = 200,
    $ = s()(R.Iw, X),
    J = s()(R.m1, X),
    ee = a.forwardRef(function (e, t) {
        var r;
        let { containerWidth: o, channel: s, onSelectSticker: c, closePopout: v } = e,
            { location: j } = (0, _.O)(),
            { analyticsLocations: W } = (0, f.ZP)(E.Z.STICKER_PICKER),
            K = (null === (r = (0, T.N)()) || void 0 === r ? void 0 : r.subscription_trial) != null,
            X = a.useRef(null),
            ee = a.useRef(null),
            et = a.useRef(null),
            en = (0, N.Q)((e) => e.showPremiumUpsell),
            [er, ei] = (0, p.Iu)((e) => [e.searchQuery, e.isSearchSuggestion], l.Z),
            ea = a.useRef('');
        a.useImperativeHandle(t, () => ({ onPickerOpen: eM }));
        let eo = (0, C.Sd)(s),
            es = 0 === eo.filter((e) => e.type !== L.Ih.EMPTY_GUILD_UPSELL).length,
            el = (0, m.ep)({
                gridWrapperRef: X,
                containerWidth: o,
                showingEmptyState: es,
                listPaddingLeft: Z,
                listScrollbarWidth: Q
            }),
            eu = g._O.useSetting(),
            ec = a.useMemo(() => new Set(eu), [eu]),
            ed = (0, u.e7)([S.default], () => S.default.getCurrentUser()),
            e_ = a.useMemo(() => (0, x.S)(er, ed, s), [er, ed, s]),
            eE = (0, C.RJ)(),
            ef = (0, C.LZ)(),
            eh = (0, u.cj)([y.Z], () => y.Z.getAllGuildStickers()),
            { sendable: ep = [], sendableWithPremium: em = [] } = null != e_ ? e_ : {},
            eI = ep.length + em.length,
            eT = a.useCallback(
                (e) => {
                    '' === er ? (0, R.On)(e) : (0, R.Yk)(e, er, eI), c(e.sticker, L.V0.STICKER_PICKER);
                },
                [c, er, eI]
            ),
            eg = null != el && el > F,
            {
                rowCount: eS,
                rowCountBySection: eA,
                stickersGrid: ev,
                gutterWidth: eN,
                columnCounts: eO
            } = (0, C.el)({
                filteredStickers: e_,
                stickersCategories: eo,
                collapsedStickersCategories: ec,
                listWidth: el,
                listPaddingRight: V,
                stickerNodeMargin: eg ? H : Y,
                stickerNodeWidth: eg ? z : q
            }),
            eR = a.useCallback(
                (e, t) => {
                    let { location: r } = t;
                    switch (e.type) {
                        case L.al.CREATE_STICKER:
                            A.default.track(k.rMx.OPEN_MODAL, {
                                type: k.jXE.CREATE_STICKER_MODAL,
                                location: j
                            }),
                                (0, d.openModalLazy)(async () => {
                                    let { default: t } = await Promise.all([n.e('93626'), n.e('44600')]).then(n.bind(n, 136735));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            guildId: e.guild_id,
                                            ...n
                                        });
                                });
                            break;
                        case L.al.STICKER:
                            null != e.sticker && (0, O.kl)(e.sticker, ed, s) && eT(e);
                    }
                },
                [j, ed, s, eT]
            ),
            {
                getItemProps: eC,
                getRowProps: ey,
                gridContainerProps: eL,
                handleGridContainerKeyDown: eb,
                isUsingKeyboardNavigation: eD
            } = (0, b.t)({
                columnCounts: eO,
                stickersListRef: ee,
                stickersGrid: ev,
                onGridItemSelect: eR,
                store: h.ZN,
                setInspectedStickerPosition: h.ZN.setInspectedExpressionPosition,
                gridNavigatorId: G.Vr
            });
        a.useEffect(() => h.ZN.resetStoreState, []);
        let eM = () => {
            let e = s.getGuildId(),
                t = [];
            if (null !== e) {
                var n;
                t = null !== (n = y.Z.getStickersByGuildId(e)) && void 0 !== n ? n : [];
            }
            let r = 0;
            null != eh &&
                [...eh.values()].forEach((e) => {
                    r += e.length;
                }),
                (0, R.ev)({
                    containerWidth: o,
                    favoriteStickers: eE,
                    frequentlyUsedStickers: ef,
                    guildStickers: t,
                    stickersTotal: r
                });
        };
        a.useEffect(() => {
            '' === ea.current && '' !== er && (0, R.n8)(), (ea.current = er);
        }, [er]),
            a.useEffect(() => {
                0 === eI ? $(er) : J(er, eI, ei);
            }, [er, eI, ei]),
            a.useLayoutEffect(() => {
                var e;
                null === (e = et.current) || void 0 === e || e.focus();
            }, []);
        let eP = a.useCallback(() => {
            v(), A.default.track(k.rMx.PREMIUM_PROMOTION_OPENED, { location_section: k.jXE.STICKER_PICKER_UPSELL }), (0, I.z)();
        }, [v]);
        return (0, i.jsxs)(f.Gt, {
            value: W,
            children: [
                !(K && es) &&
                    (0, i.jsx)('div', {
                        className: B.header,
                        children: (0, i.jsx)(U.Z, {
                            ref: et,
                            onKeyDown: eb,
                            stickersListRef: ee,
                            channel: s
                        })
                    }),
                es
                    ? (0, i.jsx)(M.Z, {
                          className: B.emptyState,
                          onClose: v
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  ref: X,
                                  className: B.listWrapper,
                                  id: G.Vr,
                                  ...eL,
                                  children:
                                      null != el
                                          ? (0, i.jsx)(P.Z, {
                                                ref: ee,
                                                collapsedStickersCategories: ec,
                                                filteredStickers: e_,
                                                getStickerItemProps: eC,
                                                getStickerRowProps: ey,
                                                gridWidth: el,
                                                gutterWidth: eN,
                                                isUsingKeyboardNavigation: eD,
                                                onSelectSticker: eT,
                                                rowCount: eS,
                                                rowCountBySection: eA,
                                                stickersCategories: eo,
                                                stickersGrid: ev,
                                                channel: s
                                            })
                                          : null
                              }),
                              (0, i.jsx)(D.Z, {
                                  stickersListRef: ee,
                                  channel: s
                              })
                          ]
                      }),
                en && (0, i.jsx)(w.C, { onLearnMore: eP })
            ]
        });
    }),
    et = (e, t) => (
        (0, C.fP)(),
        (0, i.jsx)('div', {
            className: B.wrapper,
            id: G.nZ,
            'aria-labelledby': G.ED,
            role: 'tabpanel',
            children: e.isLoading
                ? (0, i.jsx)(d.Spinner, { className: B.loadingIndicator })
                : (0, i.jsx)(ee, {
                      ...e,
                      ref: t
                  })
        })
    );
t.Z = a.forwardRef(et);
