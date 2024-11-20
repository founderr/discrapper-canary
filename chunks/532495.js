n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(442837),
    a = n(809206),
    o = n(634894),
    c = n(891728),
    d = n(328783),
    u = n(295474),
    m = n(150039),
    h = n(126631),
    g = n(433411),
    p = n(532432),
    x = n(349177),
    S = n(872736),
    T = n(134795),
    C = n(610966),
    E = n(513901),
    _ = n(451392),
    f = n(906364),
    I = n(350327),
    N = n(621853),
    A = n(687158),
    b = n(25990),
    v = n(594174),
    j = n(74538),
    O = n(388032),
    R = n(826522);
function P() {
    var e, t, n, s, P, D, y, B;
    let L = (0, l.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return r()(null != e, 'DefaultCustomizationSections: user cannot be undefined'), e;
        }),
        Z = (0, l.e7)([N.Z], () => N.Z.getUserProfile(L.id)),
        {
            pendingAvatar: F,
            pendingGlobalName: M,
            pendingBanner: k,
            pendingBio: w,
            pendingPronouns: U,
            pendingAccentColor: V,
            pendingThemeColors: G,
            errors: Y
        } = (0, l.cj)([b.Z], () => {
            let e = b.Z.getAllPending(),
                t = b.Z.getErrors();
            return {
                ...e,
                errors: t
            };
        }),
        H = (0, u.gS)(),
        z = j.ZP.canUsePremiumProfileCustomization(L),
        W = (0, m.gd)(F, L.avatar),
        K = (0, m.f$)(k, null == Z ? void 0 : Z.banner),
        q = 'DefaultCustomizationSections';
    (0, o.j)({
        location: q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: q + ' auto off',
            autoTrackExposure: !1
        });
    let Q = (0, A.ZP)(L.id),
        X = null == Q ? void 0 : Q.getLegacyUsername(),
        J = (null !== (n = null === (e = Y.global_name) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) > 0 ? Y.global_name : null !== (s = null == H ? void 0 : H.nick) && void 0 !== s ? s : [],
        $ = (null !== (P = null === (t = Y.bio) || void 0 === t ? void 0 : t.length) && void 0 !== P ? P : 0) > 0 ? Y.bio : null !== (D = null == H ? void 0 : H.bio) && void 0 !== D ? D : [],
        ee = (0, c.V)();
    return (0, i.jsxs)('div', {
        className: R.sectionsContainer,
        children: [
            (0, i.jsx)(x.Z, {
                placeholder: L.username,
                errors: J,
                currentGlobalName: L.globalName,
                pendingGlobalName: M,
                onGlobalNameChange: a.UZ
            }),
            (0, i.jsx)(
                f.Z,
                {
                    sectionTitle: O.intl.string(O.t['+T3RIy']),
                    errors: Y.pronouns,
                    onPronounsChange: I.ID,
                    pendingPronouns: U,
                    currentPronouns: null !== (y = null == Z ? void 0 : Z.pronouns) && void 0 !== y ? y : ''
                },
                'pronouns'
            ),
            (0, i.jsx)(
                p.Z,
                {
                    onAvatarChange: a.I5,
                    showRemoveAvatarButton: W,
                    errors: Y.avatar,
                    sectionTitle: O.intl.string(O.t.lqaIxM),
                    forcedDivider: !0
                },
                'avatar'
            ),
            (0, i.jsx)(
                g.Z,
                {
                    user: L,
                    sectionTitle: O.intl.string(O.t['7v0T9P'])
                },
                'decoration'
            ),
            (0, i.jsx)(
                E.Z,
                {
                    user: L,
                    sectionTitle: O.intl.string(O.t.wR5wOj)
                },
                'effect'
            ),
            z
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(
                              T.Z,
                              {
                                  showRemoveBannerButton: K,
                                  errors: Y.banner,
                                  onBannerChange: I.g_,
                                  forcedDivider: !0
                              },
                              'banner'
                          ),
                          (0, i.jsx)(_.Z, {
                              user: L,
                              pendingAvatar: F,
                              pendingColors: G,
                              onThemeColorsChange: I.z5,
                              forcedDivider: !0
                          })
                      ]
                  })
                : (0, i.jsx)(
                      C.Z,
                      {
                          user: L,
                          savedUserColor: null == Z ? void 0 : Z.accentColor,
                          pendingColor: V,
                          setPendingAccentColor: I.CM
                      },
                      'color'
                  ),
            (0, i.jsx)(
                h.Z,
                {
                    sectionTitle: O.intl.string(O.t.NepzEx),
                    errors: $,
                    onBioChange: (e) => (0, m.xQ)(e, null == Z ? void 0 : Z.bio),
                    pendingBio: w,
                    currentBio: null !== (B = null == Z ? void 0 : Z.bio) && void 0 !== B ? B : ''
                },
                'bio'
            ),
            ee.length > 0 && (0, i.jsx)(d.Z, { availableClans: ee }),
            null != X && (0, i.jsx)(S.Z, { legacyUsername: X }, 'legacy_username')
        ]
    });
}
