n.d(t, {
    Z: function () {
        return D;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(954138),
    d = n(891728),
    u = n(328783),
    m = n(295474),
    h = n(150039),
    g = n(126631),
    p = n(433411),
    x = n(532432),
    S = n(349177),
    T = n(872736),
    C = n(134795),
    _ = n(610966),
    E = n(513901),
    f = n(451392),
    I = n(906364),
    N = n(350327),
    b = n(621853),
    A = n(687158),
    v = n(25990),
    j = n(594174),
    O = n(74538),
    R = n(388032),
    P = n(221118);
function D() {
    var e, t, n, s, D, y, B, L;
    let Z = (0, l.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return r()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        F = (0, l.e7)([b.Z], () => b.Z.getUserProfile(Z.id)),
        {
            pendingAvatar: M,
            pendingGlobalName: k,
            pendingBanner: w,
            pendingBio: U,
            pendingPronouns: V,
            pendingAccentColor: G,
            pendingThemeColors: Y,
            errors: H
        } = (0, l.cj)([v.Z], () => {
            let e = v.Z.getAllPending(),
                t = v.Z.getErrors();
            return {
                ...e,
                errors: t
            };
        }),
        z = (0, m.gS)(),
        W = O.ZP.canUsePremiumProfileCustomization(Z),
        K = (0, h.gd)(M, Z.avatar),
        q = (0, h.f$)(w, null == F ? void 0 : F.banner),
        Q = 'DefaultCustomizationSections';
    (0, o.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let X = (0, A.ZP)(Z.id),
        J = null == X ? void 0 : X.getLegacyUsername(),
        $ = (null !== (n = null === (e = H.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? H.global_name : null !== (s = null == z ? void 0 : z.nick) && void 0 !== s ? s : [],
        ee = (null !== (D = null === (t = H.bio) || void 0 === t ? void 0 : t.length) && void 0 !== D ? D : 0) > 0 ? H.bio : null !== (y = null == z ? void 0 : z.bio) && void 0 !== y ? y : [],
        et = (0, c.Z)('user_profile'),
        en = (0, d.V)();
    return (0, i.jsxs)('div', {
        className: P.sectionsContainer,
        children: [
            (0, i.jsx)(S.Z, {
                placeholder: Z.username,
                errors: $,
                currentGlobalName: Z.globalName,
                pendingGlobalName: k,
                onGlobalNameChange: a.UZ
            }),
            (0, i.jsx)(
                I.Z,
                {
                    sectionTitle: R.intl.string(R.t['+T3RIy']),
                    errors: H.pronouns,
                    onPronounsChange: N.ID,
                    pendingPronouns: V,
                    currentPronouns: null !== (B = null == F ? void 0 : F.pronouns) && void 0 !== B ? B : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                x.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: K,
                    errors: H.avatar,
                    sectionTitle: R.intl.string(R.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                p.Z,
                {
                    user: Z,
                    sectionTitle: R.intl.string(R.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(
                E.Z,
                {
                    user: Z,
                    sectionTitle: R.intl.string(R.t.wR5wOj)
                },
                'effect'
            ),
            W
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              C.Z,
                              {
                                  showRemoveBannerButton: q,
                                  errors: H.banner,
                                  onBannerChange: N.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(f.Z, {
                              user: Z,
                              pendingAvatar: M,
                              pendingColors: Y,
                              onThemeColorsChange: N.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      _.Z,
                      {
                          user: Z,
                          savedUserColor: null == F ? void 0 : F.accentColor,
                          pendingColor: G,
                          setPendingAccentColor: N.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                g.Z,
                {
                    sectionTitle: R.intl.string(R.t.NepzEx),
                    errors: ee,
                    onBioChange: (e) => (0, h.xQ)(e, null == F ? void 0 : F.bio),
                    pendingBio: U,
                    currentBio: null !== (L = null == F ? void 0 : F.bio) && void 0 !== L ? L : ''
                },
                'bio'
            ),
            et && en.length > 0 && (0, i.jsx)(u.Z, { availableClans: en }),
            null != J && (0, i.jsx)(T.Z, { legacyUsername: J }, 'legacy_username')
        ]
    });
}
