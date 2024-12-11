n.d(t, {
    O: function () {
        return Q;
    },
    Z: function () {
        return ee;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(788911),
    d = n(2052),
    f = n(100527),
    _ = n(906732),
    p = n(313201),
    h = n(880949),
    m = n(806966),
    g = n(28546),
    E = n(468954),
    v = n(409700),
    I = n(53691),
    T = n(75145),
    b = n(631771),
    S = n(609218),
    y = n(695346),
    A = n(594174),
    N = n(979651),
    C = n(259580),
    R = n(626135),
    O = n(74538),
    D = n(135869),
    L = n(763296),
    x = n(697426),
    w = n(242291),
    P = n(22382),
    M = n(747071),
    k = n(421673),
    U = n(663215),
    B = n(409673),
    G = n(347072),
    Z = n(835648),
    F = n(650743),
    V = n(394740),
    j = n(343747),
    H = n(981631),
    Y = n(474936),
    W = n(388032),
    K = n(61368);
let z = [8, 0, 8, 0],
    q = 32 + T.Kn;
function Q(e, t, n) {
    return (null == n && e.type === x.bg.GUILD && !t) || (e.type === x.bg.GUILD && e.guild.id !== n && !t);
}
function X(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: o, showNitroDivider: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(T.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, r.jsx)('div', {
                className: s()(K.sectionContainer, { [K.sectionContainerNitroLocked]: o }),
                children: (0, r.jsx)(l.Clickable, {
                    className: s()(K.sectionHeader, { [K.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: K.sectionHeaderContent,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case x.bg.FAVORITES:
                                        return (0, r.jsx)(l.StarIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: K.headerIcon
                                        });
                                    case x.bg.RECENTLY_HEARD:
                                        return (0, r.jsx)(l.ClockIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            color: 'currentColor',
                                            className: K.headerIcon
                                        });
                                    case x.bg.FREQUENTLY_USED:
                                        return (0, r.jsx)(l.AnalyticsIcon, { className: K.headerIcon });
                                    case x.bg.GUILD:
                                        return (0, r.jsx)(h.Z, {
                                            guild: t.guild,
                                            height: 16,
                                            width: 16
                                        });
                                    case x.bg.DEFAULTS:
                                        return (0, r.jsx)(l.ClydeIcon, {
                                            size: 'custom',
                                            width: 28,
                                            height: 28,
                                            color: 'currentColor',
                                            className: K.headerIcon
                                        });
                                    case x.bg.SEARCH:
                                        return (0, r.jsx)(l.MagnifyingGlassIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: K.headerIcon
                                        });
                                }
                            })(),
                            (0, r.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: K.sectionTitle,
                                children: (function () {
                                    switch (t.type) {
                                        case x.bg.FAVORITES:
                                            return W.intl.string(W.t.k8fFjo);
                                        case x.bg.RECENTLY_HEARD:
                                            return W.intl.string(W.t['8i/+SE']);
                                        case x.bg.FREQUENTLY_USED:
                                            return W.intl.string(W.t['+cGVV1']);
                                        case x.bg.GUILD:
                                            return t.guild.name;
                                        case x.bg.DEFAULTS:
                                            return W.intl.string(W.t.Rtvk9f);
                                        case x.bg.SEARCH:
                                            return W.intl.string(W.t.zkoeq6);
                                    }
                                })()
                            }),
                            (0, r.jsx)(C.Z, {
                                className: K.headerIcon,
                                direction: n ? C.Z.Directions.RIGHT : C.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function J() {
    return (0, r.jsx)(c.Z, { message: W.intl.string(W.t.bgDdND) });
}
function $(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: f, onItemMouseEnter: _, buttonOverlay: p, isNitroLocked: h, shouldShowUpsell: g, refreshEnabled: E } = e,
        v = m.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, r.jsx)('ul', {
        ...c,
        className: s()(K.soundRow, {
            [K.soundRowNitroLocked]: h,
            [K.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let r = 'item-'.concat(t),
                s = l && v.rowIndex === a && v.columnIndex === t;
            switch (e.item.type) {
                case x.vB.SOUND:
                    return (0, i.createElement)(B.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(r, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: s,
                        onMouseEnter: () => _(t),
                        onSelectItem: () => f(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: p,
                        inNitroLockedSection: h,
                        showLockForDisabledSound: g,
                        refreshEnabled: E
                    });
                case x.vB.ADD_SOUND:
                    return (0, i.createElement)(G.Z, {
                        ...d(t),
                        key: r,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => f(e),
                        refreshEnabled: E
                    });
            }
        })
    });
}
function ee(e) {
    let { guildId: t, channel: a, containerWidth: c, onClose: h, onSelect: T, shouldValidateSelectedSound: C = !1, suppressPlaySound: B = !1, shouldShowUpsell: G = !0, gridNotice: ee, soundButtonOverlay: et, listPadding: en, renderHeader: er, defaultSoundsOnly: ei = !1, inExpressionPicker: ea, refreshEnabled: es } = e,
        { currentPreviewRef: eo } = i.useContext(D.Z),
        { analyticsLocations: el } = (0, _.ZP)(),
        { analyticsLocations: eu } = (0, _.ZP)(f.Z.PREMIUM_UPSELL),
        { location: ec } = (0, d.O)(),
        ed = i.useMemo(
            () => ({
                ...ec,
                section: H.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [ec]
        ),
        [ef, e_] = i.useState(null),
        ep = (0, o.e7)([A.default], () => A.default.getCurrentUser()),
        eh = (0, O.I5)(ep, Y.p9.TIER_2),
        em = (0, o.e7)([N.Z], () => {
            var e;
            return N.Z.getVoiceState(t, null !== (e = null == ep ? void 0 : ep.id) && void 0 !== e ? e : H.lds);
        }),
        eg = (null == em ? void 0 : em.selfDeaf) || (null == em ? void 0 : em.mute) || (null == em ? void 0 : em.suppress),
        eE = (0, g.Iu)((e) => e.searchQuery),
        ev = null != eE && '' !== eE,
        eI = (0, p.Dt)(),
        { categories: eT } = (0, U.ZP)(a, void 0, ei),
        [eb, eS] = i.useState([]),
        [ey, eA] = i.useState(!1),
        eN = (0, U.FS)(eT, eb, eE).filter((e) => e.items.length > 0),
        eC = eN.some((e) => !!(0, O._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eR = !eh && G && eC,
        { enableInlineUpsell: eO, enableRoadblock: eD, enableRoadblockWithSocialProof: eL } = b.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eR }),
        ex = eR && eO,
        ew = y.T4.useSetting(),
        eP = i.useMemo(() => new Set(ew), [ew]),
        eM = null == a,
        ek = O.ZP.canUseCustomCallSounds(ep),
        eU = i.useCallback(
            (e) => {
                eP.has(e) ? eP.delete(e) : eP.add(e), y.T4.updateSetting(Array.from(eP));
            },
            [eP]
        ),
        eB = i.useCallback(
            (e, t) => {
                if (null != T && !C) return T(e);
                let n = (0, w.Nq)(ep, e, a, !1);
                if (null != T && C && n) T(e);
                else if (!B && n) {
                    var r;
                    (0, w.GN)(e, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : H.lds, t),
                        ev &&
                            R.default.track(H.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: H.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: eE,
                                location_stack: t
                            });
                } else {
                    if ((0, w.Nq)(ep, e, a)) return;
                    G && e_(e);
                }
            },
            [B, ep, a, G, ev, eE, T, C]
        ),
        eG = i.useCallback(
            (e) => {
                switch (e.item.type) {
                    case x.vB.SOUND:
                        return eB(e.item.sound, el);
                    case x.vB.ADD_SOUND:
                        return h(), (0, j.Z)(e.item.guild.id);
                }
            },
            [el, eB, h]
        ),
        eZ = i.useCallback(
            (e, n, i, s, o) => {
                let l = eN[i.sectionIndex],
                    u = G && Q(l.categoryInfo, eh, t),
                    c = i.sectionIndex === eN.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    $,
                    {
                        descriptors: e,
                        rowIndex: i.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: B,
                        onSelectItem: eG,
                        soundButtonProps: {
                            channel: a,
                            interactive: eM ? ek : !eg,
                            forceSecondaryActions: eM || eO,
                            analyticsLocations: el
                        },
                        buttonOverlay: et,
                        isNitroLocked: u && ex,
                        shouldShowUpsell: G,
                        refreshEnabled: es
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eN, G, eh, t, B, eG, a, eM, ek, eg, eO, el, et, ex, es]
        ),
        eF = i.useCallback(
            (e, t) => {
                if (e <= 0 || !G) return !1;
                let n = eN[e],
                    r = eN[e - 1],
                    i = Q(n.categoryInfo, eh, t),
                    a = Q(r.categoryInfo, eh, t);
                return i && !a;
            },
            [eN, G, eh]
        ),
        eV = i.useCallback((e) => (0 === e ? 16 : eF(e, t) ? q : 32), [t, eF]),
        ej = i.useCallback(
            (e) => {
                let t = e === eN.length - 1;
                return ex && t ? 60 : 0;
            },
            [eN, ex]
        ),
        eH = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = G && Q(e.categoryInfo, eh, t),
                    s = eF(n, t);
                return (0, r.jsx)(
                    X,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eU(i),
                        collapsed: eP.has(i),
                        index: n,
                        isSectionNitroLocked: a && ex,
                        showNitroDivider: s && ex
                    },
                    'header-'.concat(i)
                );
            },
            [eP, eU, t, eF, G, eh, ex]
        ),
        eY = i.useCallback(
            (e, t) => {
                let n = t === eN.length - 1;
                return ex && n ? (0, r.jsx)('div', { className: K.sectionFooter }) : null;
            },
            [eN, ex]
        ),
        eW = i.useCallback((e) => eS((0, k.YM)(e, eT, ep, a, el)), [a, ep, eT, el]),
        eK = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        ez = i.useCallback(
            () =>
                ea
                    ? (0, r.jsx)(v.Hh, {
                          renderPopout: () => (0, r.jsx)(v.hq, {}),
                          tooltipText: W.intl.string(W.t['19lt29']),
                          position: 'top',
                          clickableClassName: s()(K.settingsClickArea, K.settingsSoundmojiClickArea),
                          children: (0, r.jsx)(l.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      })
                    : (0, r.jsx)(l.Clickable, {
                          tabIndex: 0,
                          className: K.settingsClickArea,
                          onClick: eK,
                          'aria-label': W.intl.string(W.t.kbFsAA),
                          children: (0, r.jsx)(l.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: K.settingsIcon
                          })
                      }),
            [ea, eK]
        ),
        eq = i.useCallback(
            (e) =>
                (0, r.jsx)(Z.Z, {
                    soundboardListRef: e,
                    categories: eT,
                    shouldUpsellLockedCategories: ex,
                    listPadding: en,
                    guildId: t,
                    inExpressionPicker: ea
                }),
            [eT, ex, en, t, ea]
        ),
        eQ = () => {
            let e = L.Z.getSoundById('3');
            null != e && e_(e);
        },
        eX = i.useCallback(() => {
            let e = (0, O.Px)(Y.p9.TIER_2);
            return W.intl.format(W.t['tw/SSk'], {
                nitroTierName: e,
                onClick: eQ
            });
        }, []),
        eJ = i.useCallback(
            () =>
                ex
                    ? (0, r.jsx)(I.p, {
                          showUpsell: ey,
                          text: eX(),
                          button: W.intl.string(W.t.pj0XBA),
                          buttonAnalyticsObject: { section: H.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [eX, ey, ex]
        ),
        e$ = i.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === x.vB.SOUND) {
                    var t;
                    return (0, r.jsx)(F.Z, {
                        closePicker: h,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [h]
        ),
        e0 = i.useCallback(() => {
            var e;
            let t = L.Z.getSoundById('3'),
                n = new Audio((0, P.Z)('3'));
            null != eo.current && eo.current.pause(), (eo.current = n), (n.currentTime = 0), (n.volume = (0, M.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [eo]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != ef
                ? eD
                    ? (0, r.jsx)(S.Z, {
                          containerContext: S.p.NONE,
                          image: {
                              url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
                              width: 220,
                              height: 132
                          },
                          title: W.intl.string(ea ? W.t.rZEEvb : W.t.jGDYFx),
                          description: W.intl.string(ea ? W.t.ZPNG5O : W.t['grL/ho']),
                          enableSocialProof: eL,
                          analyticsLocationSection: H.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...ed,
                                  object: H.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: eu,
                              sku_id: O.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => e_(null),
                          onDisplay: e0
                      })
                    : (0, r.jsx)(V.Z, {
                          onClose: () => e_(null),
                          closePopout: h,
                          sound: ef,
                          channel: a
                      })
                : void 0,
            (0, r.jsx)(E.Z, {
                categories: eN,
                collapsedCategories: eP,
                containerWidth: c,
                store: m.Wq,
                onSelectItem: eG,
                onSearchExpressions: eW,
                hasSearchResults: eb.length > 0,
                defaultSearchPlaceholder: W.intl.string(W.t.sKt3xc),
                renderRow: eZ,
                renderSectionHeader: eH,
                renderSectionFooter: eY,
                renderCategoryList: eq,
                renderHeaderAccessories: ez,
                rowHeight: es ? 80 : 48,
                sectionHeaderHeight: eV,
                sectionFooterHeight: ej,
                listPadding: z,
                itemNodeWidth: es ? 102 : 150,
                gridNavigatorId: eI,
                renderEmptySearchState: J,
                renderInspector: e$,
                gridNotice: ee,
                renderHeader: er,
                renderUpsell: eJ,
                setShowUpsell: eA
            })
        ]
    });
}
