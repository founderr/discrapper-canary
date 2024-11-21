n.d(t, {
    Gj: function () {
        return V;
    },
    Pt: function () {
        return U;
    },
    VO: function () {
        return Y;
    },
    ji: function () {
        return W;
    },
    q8: function () {
        return H;
    }
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(404295),
    c = n(211242),
    d = n(924557),
    u = n(706140),
    m = n(319828),
    h = n(592204),
    g = n(610697),
    p = n(880257),
    x = n(631885),
    S = n(223639),
    T = n(160913),
    C = n(725727),
    E = n(977156),
    _ = n(922611),
    f = n(921157),
    I = n(237292),
    N = n(314897),
    A = n(283595),
    b = n(699516),
    v = n(663389),
    j = n(594174),
    O = n(202527),
    R = n(187819),
    P = n(413182),
    D = n(695346),
    y = n(620163),
    B = n(295545),
    L = n(168308),
    Z = n(839469),
    F = n(726985),
    M = n(46140),
    k = n(388032);
function w(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: k.intl.string(k.t.cduTBA),
                settings: n ? [F.s6.ACCOUNT, F.s6.GAMES, F.s6.PROFILE_CUSTOMIZATION, F.s6.PRIVACY_AND_SAFETY, F.s6.CONTENT_SOCIAL, F.s6.DATA_PRIVACY, F.s6.PRIVACY_FAMILY_CENTER, F.s6.THIRD_PARTY_ACCESS, F.s6.SESSIONS, F.s6.CLIPS, F.s6.FRIEND_REQUESTS] : [F.s6.ACCOUNT, F.s6.GAMES, F.s6.PROFILE_CUSTOMIZATION, F.s6.PRIVACY_AND_SAFETY, F.s6.CONTENT_SOCIAL, F.s6.DATA_PRIVACY, F.s6.PRIVACY_FAMILY_CENTER, F.s6.AUTHORIZED_APPS, F.s6.SESSIONS, F.s6.CONNECTIONS, F.s6.CLIPS, F.s6.FRIEND_REQUESTS]
            },
            {
                header: k.intl.string(k.t['4uOdGh']),
                divider: !0,
                settings: [F.s6.PREMIUM, F.s6.GUILD_BOOSTING, F.s6.SUBSCRIPTIONS, F.s6.GIFT_INVENTORY, F.s6.BILLING]
            },
            {
                header: k.intl.string(k.t.f2n1TE),
                divider: !0,
                settings: [F.s6.APPEARANCE, F.s6.ACCESSIBILITY, F.s6.VOICE_AND_VIDEO, F.s6.POGGERMODE, F.s6.CHAT, F.s6.NOTIFICATIONS, F.s6.KEYBINDS, F.s6.LANGUAGE, F.s6.WINDOW_SETTINGS, F.s6.LINUX_SETTINGS, F.s6.STREAMER_MODE, F.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [F.s6.CHANGELOG, F.s6.MERCHANDISE, F.s6.HYPESQUAD, F.s6.TOWNHALL, F.s6.EXPERIMENTS, F.s6.DEVELOPER_OPTIONS, F.s6.HOTSPOT_OPTIONS, F.s6.DISMISSIBLE_CONTENT_OPTIONS, F.s6.PAYMENT_FLOW_MODALS, F.s6.DESIGN_SYSTEMS, F.s6.TEXT_PLAYGROUND, F.s6.TEXT_COMPONENTS, F.s6.INTL_TESTING, F.s6.PROFILE_EFFECTS_PREVIEW_TOOL, F.s6.WEB_SETTING_TREE_TOOL, F.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [F.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [F.s6.SOCIAL_LINKS, F.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: k.intl.string(k.t.SmHCFR),
            divider: !0,
            settings: [F.s6.ACTIVITY_PRIVACY, F.s6.REGISTERED_GAMES, F.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function U() {
    var e, t, n, i;
    let l = (0, C.YO)().length,
        P = (0, T.U)(),
        Z = (0, s.e7)([v.Z], () => v.Z.getProps().impressionSource),
        F = (0, x.gU)(),
        k = (0, L.bC)(),
        w = (0, d.Go)(),
        [U] = (0, u.cv)(w ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        V = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: V + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: V + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: G } = O.b.useExperiment({ location: 'settings' }),
        Y = (0, B.eA)({ location: 'settings' }),
        H = (0, h.Xo)({ location: 'settings' }),
        z = null !== (n = null === (e = j.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        W = (0, I.y0)({ location: 'settings' }),
        K = (0, c.Q)(),
        q = (0, E.Zy)({ location: M.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: Q } = S.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        X = (0, s.e7)([A.Z], () => A.Z.hasLibraryApplication()),
        J = (0, s.e7)([N.default], () => N.default.hasTOTPEnabled()),
        $ = D.Sb.useSetting(),
        ee = (0, g.Z)(),
        et = (0, R._p)({ location: 'settings-renderer-utils-web' }),
        { hypeSquadRemoved: en } = m.Z.useExperiment({ location: 'settings' }),
        ei = null === (i = (0, p.Z)()) || void 0 === i || i,
        es = (null === (t = (0, f.s)()) || void 0 === t ? void 0 : t.length) > 0,
        er = (0, _.Do)({ location: 'settings_renderer_utils' }),
        { hasBlockedUsers: el, hasIgnoredUsers: ea } = (0, s.cj)([b.Z], () => ({
            hasBlockedUsers: b.Z.getBlockedIDs().length > 0,
            hasIgnoredUsers: b.Z.getIgnoredIDs().length > 0
        })),
        eo = (0, o.en)('User Settings');
    return (0, y.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: P,
        impressionSource: Z,
        numOfPendingFamilyRequests: F,
        isOverlaySupported: k,
        isClipsBetaTagShowing: U === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: G,
        isUserSettingsSearchEnabled: Y,
        isKeywordFilteringEnabled: H,
        isStaff: z,
        isInappropriateConversationWarningEnabled: W,
        paymentsBlocked: K,
        isEligibleForQuests: q,
        showGiftNitro: Q,
        isStricterMessageRequestsEnabled: ee,
        hasLibraryApplication: X,
        hasTOTPEnabled: J,
        developerMode: $,
        isSafetySettingsV2Enabled: et,
        isAdultUser: ei,
        hasSecureFramesVerifiedUserIds: es,
        hypeSquadRemoved: en,
        stealthRemediationEnabled: er,
        hasIgnoredUsers: ea,
        hasBlockedUsers: el,
        showAppDMsQuickLauncher: eo
    });
}
function V(e) {
    let { searchResults: t } = (0, Z.E)(),
        n = U();
    if (!(0, B.eA)({ location: 'settings' })) return new Set();
    let i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        r = Object.fromEntries(
            Object.entries(s)
                .filter((e) => {
                    let [t, { parent: n, section: s }] = e;
                    return null != n && s === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        l = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
            Object.entries(r)
                .filter((t) => {
                    let [n, i] = t;
                    return i === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in s))
        if (!l.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                l.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), a(e);
        }
    return l;
}
function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = z(t),
        a = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var s;
                            let e = null !== (s = n.get(i)) && void 0 !== s ? s : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != i ? i : []).filter((e) => r.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && s.push({ section: l.ID.DIVIDER }),
                null != e.header &&
                    s.push({
                        section: l.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    s.push({
                        ...t[e],
                        tabPredicate: () => {
                            var t, n, s;
                            return null == i || ((t = e), (n = i), (s = a), (t === F.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : a.get(e)
                    });
                }));
        }),
        s
    );
}
function Y() {
    let e = U(),
        { shouldMergeGameSettings: t } = O.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = P.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                w({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => G(s, e), [s, e]);
}
function H(e) {
    let t = U(),
        n = (function () {
            let { shouldMergeGameSettings: e } = O.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = P.b.useExperiment({ location: 'settings' }),
                n = w({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: k.intl.string(k.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            F.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })(),
        s = (0, B.c3)({ location: 'settings' });
    return i.useMemo(() => G(n, t, s, new Set(e)), [n, t, s, e]);
}
function z(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function W(e) {
    return Array.from(z(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
