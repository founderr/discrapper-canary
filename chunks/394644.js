t.d(s, {
    Gj: function () {
        return U;
    },
    Pt: function () {
        return B;
    },
    VO: function () {
        return F;
    },
    ji: function () {
        return Y;
    },
    q8: function () {
        return y;
    }
}),
    t(639576),
    t(536091),
    t(47120),
    t(653041);
var n = t(470079),
    a = t(442837),
    i = t(704215),
    r = t(493544),
    o = t(634894),
    l = t(211242),
    c = t(770471),
    d = t(924557),
    u = t(706140),
    _ = t(592204),
    E = t(610697),
    T = t(880257),
    S = t(631885),
    I = t(223639),
    N = t(160913),
    m = t(725727),
    C = t(977156),
    g = t(237292),
    A = t(314897),
    h = t(283595),
    O = t(663389),
    p = t(594174),
    R = t(202527),
    x = t(187819),
    f = t(695346),
    M = t(620163),
    D = t(295545),
    P = t(168308),
    L = t(839469),
    b = t(726985),
    Z = t(46140),
    v = t(689938);
function j(e) {
    let { shouldMergeGameSettings: s } = e,
        t = [
            {
                header: v.Z.Messages.USER_SETTINGS,
                settings: [b.s6.ACCOUNT, b.s6.GAMES, b.s6.PROFILE_CUSTOMIZATION, b.s6.PRIVACY_AND_SAFETY, b.s6.PRIVACY_AND_SAFETY_V2, b.s6.PRIVACY_FAMILY_CENTER, b.s6.AUTHORIZED_APPS, b.s6.SESSIONS, b.s6.CONNECTIONS, b.s6.CLIPS, b.s6.FRIEND_REQUESTS]
            },
            {
                header: v.Z.Messages.BILLING_SETTINGS,
                divider: !0,
                settings: [b.s6.PREMIUM, b.s6.GUILD_BOOSTING, b.s6.SUBSCRIPTIONS, b.s6.GIFT_INVENTORY, b.s6.BILLING]
            },
            {
                header: v.Z.Messages.APP_SETTINGS,
                divider: !0,
                settings: [b.s6.APPEARANCE, b.s6.ACCESSIBILITY, b.s6.VOICE_AND_VIDEO, b.s6.POGGERMODE, b.s6.CHAT, b.s6.NOTIFICATIONS, b.s6.KEYBINDS, b.s6.LANGUAGE, b.s6.WINDOW_SETTINGS, b.s6.LINUX_SETTINGS, b.s6.STREAMER_MODE, b.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [b.s6.CHANGELOG, b.s6.MERCHANDISE, b.s6.HYPESQUAD, b.s6.EXPERIMENTS, b.s6.DEVELOPER_OPTIONS, b.s6.HOTSPOT_OPTIONS, b.s6.DISMISSIBLE_CONTENT_OPTIONS, b.s6.PAYMENT_FLOW_MODALS, b.s6.DESIGN_SYSTEMS, b.s6.TEXT_PLAYGROUND, b.s6.TEXT_COMPONENTS, b.s6.INTL_TESTING, b.s6.PROFILE_EFFECTS_PREVIEW_TOOL, b.s6.WEB_SETTING_TREE_TOOL, b.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [b.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [b.s6.SOCIAL_LINKS, b.s6.CLIENT_DEBUG_INFO]
            }
        ],
        n = {
            header: v.Z.Messages.ACTIVITY_SETTINGS,
            divider: !0,
            settings: [b.s6.ACTIVITY_PRIVACY, b.s6.REGISTERED_GAMES, b.s6.OVERLAY]
        };
    return s ? t : t.toSpliced(3, 0, n);
}
function B() {
    var e, s, t;
    let n = (0, m.YO)().length,
        r = (0, N.U)(),
        L = (0, a.e7)([O.Z], () => O.Z.getProps().impressionSource),
        b = (0, S.gU)(),
        v = (0, P.bC)(),
        j = (0, d.Go)(),
        [B] = (0, u.cv)(j ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
        U = 'useGenerateUserSettingsSections';
    (0, o.j)({
        location: U + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: U + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: G } = R.b.useExperiment({ location: 'settings' }),
        F = (0, D.eA)({ location: 'settings' }),
        y = (0, _.Xo)({ location: 'settings' }),
        V = null !== (s = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s,
        Y = (0, g.y0)({ location: 'settings' }),
        w = (0, l.Q)(),
        k = (0, C.Zy)({ location: Z.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: H } = I.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        W = (0, a.e7)([h.Z], () => h.Z.hasLibraryApplication()),
        K = (0, a.e7)([A.default], () => A.default.hasTOTPEnabled()),
        { canBroadcast: z } = c.Z.useExperiment({ location: 'user_settings_activity_privacy' }, { autoTrackExposure: !0 }),
        Q = f.Sb.useSetting(),
        X = (0, E.Z)(),
        q = (0, x._p)({ location: 'settings-renderer-utils-web' }),
        J = null === (t = (0, T.Z)()) || void 0 === t || t;
    return (0, M.i)({
        unseenGiftCount: n,
        showPrepaidPaymentPastDueWarning: r,
        impressionSource: L,
        numOfPendingFamilyRequests: b,
        isOverlaySupported: v,
        isClipsBetaTagShowing: B === i.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: G,
        isUserSettingsSearchEnabled: F,
        isKeywordFilteringEnabled: y,
        isStaff: V,
        isInappropriateConversationWarningEnabled: Y,
        paymentsBlocked: w,
        isEligibleForQuests: k,
        showGiftNitro: H,
        isStricterMessageRequestsEnabled: X,
        hasLibraryApplication: W,
        hasTOTPEnabled: K,
        canBroadcastActivity: z,
        developerMode: Q,
        isSafetySettingsV2Enabled: q,
        isAdultUser: J
    });
}
function U(e) {
    let { searchResults: s } = (0, L.E)(),
        t = B();
    if (!(0, D.eA)({ location: 'settings' })) return new Set();
    let n = t[e],
        a = Object.fromEntries(
            Object.entries(t).filter((e) => {
                let [s, t] = e;
                return t.section === n.section;
            })
        ),
        i = Object.fromEntries(
            Object.entries(a)
                .filter((e) => {
                    let [s, { parent: t, section: a }] = e;
                    return null != t && a === n.section;
                })
                .map((e) => {
                    let [s, { parent: t }] = e;
                    return [s, t];
                })
        ),
        r = new Set(),
        o = (e) => {
            let s = a[e];
            if (null == s) return;
            r.add(e);
            let t = s.parent;
            null != t && o(t);
        },
        l = (e) => {
            for (let s of (r.add(e),
            Object.entries(i)
                .filter((s) => {
                    let [t, n] = s;
                    return n === e;
                })
                .map((e) => {
                    let [s] = e;
                    return s;
                })))
                l(s);
        };
    for (let e of s.filter((e) => e in a))
        if (!r.has(e)) {
            if (null != a[e].element && null == a[e].parent) {
                r.clear();
                break;
            }
            Object.values(i).includes(e) && l(e), o(e);
        }
    return r;
}
function G(e, s) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0,
        a = [],
        i = V(s),
        o = (function (e, s) {
            let t = new Map();
            return (
                null != s &&
                    s.forEach((s) => {
                        let n = e[s].parent;
                        for (; null != n && null != e[n].parent; ) n = e[n].parent;
                        if (null != n) {
                            var a;
                            let e = null !== (a = t.get(n)) && void 0 !== a ? a : 0;
                            t.set(n, e + 1);
                        }
                    }),
                t
            );
        })(s, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && a.push({ section: r.ID.DIVIDER }),
                null != e.header &&
                    a.push({
                        section: r.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    a.push({
                        ...s[e],
                        tabPredicate: () => {
                            var s, t, a;
                            return null == n || ((s = e), (t = n), (a = o), (s === b.s6.SEARCH_NO_RESULTS && 0 === t.size) || a.has(s) || t.has(s));
                        },
                        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
                    });
                }));
        }),
        a
    );
}
function F() {
    let e = B(),
        { shouldMergeGameSettings: s } = R.b.useExperiment({ location: 'settings' }),
        t = n.useMemo(() => j({ shouldMergeGameSettings: s }), [s]);
    return n.useMemo(() => G(t, e), [t, e]);
}
function y(e) {
    let s = B(),
        t = (function () {
            let { shouldMergeGameSettings: e } = R.b.useExperiment({ location: 'settings' }),
                s = j({ shouldMergeGameSettings: e });
            return n.useMemo(
                () => [
                    {
                        header: v.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
                        settings: [
                            ...s
                                .map((e) => {
                                    let { settings: s } = e;
                                    return s;
                                })
                                .flat(1),
                            b.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [s]
            );
        })(),
        a = (0, D.c3)({ location: 'settings' });
    return n.useMemo(() => G(t, s, a, new Set(e)), [t, s, a, e]);
}
function V(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [s, t] = e;
            return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate());
        })
    );
}
function Y(e) {
    return Array.from(V(e).entries()).map((e) => {
        let [s, t] = e;
        return [s, t.searchableTitles];
    });
}
