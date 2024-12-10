n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(295474),
    c = n(150039),
    d = n(126631),
    u = n(433411),
    m = n(532432),
    h = n(134795),
    g = n(513901),
    p = n(451392),
    x = n(906364),
    S = n(621853),
    T = n(271383),
    E = n(594174),
    C = n(74538),
    _ = n(51144),
    f = n(18438),
    I = n(778825),
    N = n(52597),
    A = n(430131),
    b = n(133484),
    v = n(388032),
    j = n(894368);
function O(e) {
    var t, n, s, O;
    let { guild: R } = e,
        P = (0, l.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        {
            pendingAvatar: D,
            pendingNickname: y,
            pendingBanner: B,
            pendingBio: L,
            pendingPronouns: Z,
            pendingThemeColors: F,
            errors: M,
            guild: k
        } = (0, l.cj)([I.Z], () => {
            let { pendingAvatar: e, pendingNickname: t, pendingBio: n, pendingPronouns: i, pendingBanner: s, pendingThemeColors: r } = I.Z.getAllPending();
            return {
                pendingAvatar: e,
                pendingNickname: t,
                pendingBanner: s,
                pendingBio: n,
                pendingPronouns: i,
                pendingThemeColors: r,
                errors: I.Z.getErrors(),
                guild: I.Z.getGuild()
            };
        }),
        w = null != R ? R : k;
    r()(null != w, 'guild should not be null');
    let U = (0, o.gS)(w.id),
        V = (0, l.e7)([T.ZP], () => (null == w.id ? null : T.ZP.getMember(w.id, P.id))),
        G = (0, l.e7)([S.Z], () => S.Z.getGuildMemberProfile(P.id, w.id)),
        Y = C.ZP.canUsePremiumProfileCustomization(P),
        H = (0, c.gd)(D, null == V ? void 0 : V.avatar),
        z = (0, c.f$)(B, null == G ? void 0 : G.banner),
        W = (0, N.p)(F, null == G ? void 0 : G.themeColors),
        K = null !== (t = null == G ? void 0 : G.bio) && void 0 !== t ? t : '',
        q = null !== (n = null == G ? void 0 : G.pronouns) && void 0 !== n ? n : '',
        X = (e, t, n) => {
            n(null != e ? e : null != t ? null : void 0);
        };
    return (0, i.jsxs)('div', {
        className: j.sectionsContainer,
        children: [
            (0, i.jsx)(
                A.Z,
                {
                    errors: null !== (s = null == M ? void 0 : M.nick) && void 0 !== s ? s : null == U ? void 0 : U.nick,
                    username: _.ZP.getName(P),
                    pendingNick: y,
                    currentNick: null == V ? void 0 : V.nick,
                    guild: w
                },
                'nick'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    sectionTitle: v.intl.string(v.t['+T3RIy']),
                    errors: null == M ? void 0 : M.pronouns,
                    onPronounsChange: (e) => {
                        (0, N.xs)(e, q);
                    },
                    pendingPronouns: Z,
                    currentPronouns: q
                },
                'pronouns'
            ),
            (0, i.jsxs)(b.Z, {
                user: P,
                showOverlay: !Y,
                children: [
                    (0, i.jsx)(
                        m.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    v.intl.string(v.t.lqaIxM),
                                    (0, i.jsx)(a.Tooltip, {
                                        text: v.intl.string(v.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            showRemoveAvatarButton: H,
                            onAvatarChange: (e) => X(e, null == V ? void 0 : V.avatar, f.I5),
                            errors: null == M ? void 0 : M.avatar,
                            guildId: w.id,
                            disabled: !Y
                        },
                        'avatar'
                    ),
                    (0, i.jsx)(
                        u.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    v.intl.string(v.t['7v0T9P']),
                                    (0, i.jsx)(a.Tooltip, {
                                        text: v.intl.string(v.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: w
                        },
                        'decoration'
                    ),
                    (0, i.jsx)(
                        g.Z,
                        {
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    v.intl.string(v.t.wR5wOj),
                                    (0, i.jsx)(a.Tooltip, {
                                        text: v.intl.string(v.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            user: P,
                            guild: w
                        },
                        'effect'
                    ),
                    (0, i.jsx)(
                        h.Z,
                        {
                            showRemoveBannerButton: z,
                            errors: null == M ? void 0 : M.banner,
                            onBannerChange: (e) => X(e, null == G ? void 0 : G.banner, f.g_),
                            guildId: null == w ? void 0 : w.id,
                            disabled: !Y
                        },
                        'banner'
                    ),
                    (0, i.jsx)(p.Z, {
                        user: P,
                        pendingAvatar: D,
                        pendingColors: F,
                        onThemeColorsChange: (e) => {
                            (0, N.ce)(e, null == G ? void 0 : G.themeColors);
                        },
                        guildId: null == w ? void 0 : w.id,
                        showResetThemeButton: W
                    }),
                    (0, i.jsx)(
                        d.Z,
                        {
                            placeholder: v.intl.string(v.t['/7NKgo']),
                            sectionTitle: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    v.intl.string(v.t.jGoPJS),
                                    (0, i.jsx)(a.Tooltip, {
                                        text: v.intl.string(v.t['5AFxuL']),
                                        children: (e) =>
                                            (0, i.jsx)(a.NitroWheelIcon, {
                                                size: 'md',
                                                color: 'currentColor',
                                                ...e,
                                                className: j.nitroWheel
                                            })
                                    })
                                ]
                            }),
                            onBioChange: (e) => (0, N.qN)(e, K),
                            errors: null !== (O = null == M ? void 0 : M.bio) && void 0 !== O ? O : null == U ? void 0 : U.bio,
                            pendingBio: L,
                            currentBio: K,
                            disabled: !Y
                        },
                        'about'
                    )
                ]
            })
        ]
    });
}
