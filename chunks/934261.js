var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(809206),
    s = n(597688),
    a = n(884697),
    c = n(18438),
    d = n(778825),
    u = n(957730),
    f = n(81245),
    m = n(921813),
    p = n(350327),
    h = n(687158),
    g = n(706454),
    v = n(695346),
    x = n(265159),
    I = n(25990),
    C = n(594174),
    P = n(55935),
    j = n(74538),
    Z = n(388032),
    E = n(173936);
let _ = (e) => {
        var t;
        let { effectIsOwned: n, pendingProfileEffectRecord: o, product: c, purchase: d } = e,
            u = (0, r.e7)([C.default], () => C.default.getCurrentUser()),
            m = (0, r.e7)([s.Z], () => s.Z.getProduct(null == o ? void 0 : o.skuId)),
            p = (0, r.e7)([g.default], () => g.default.locale),
            h = j.ZP.canUseCollectibles(u),
            v = (0, a.qS)(d),
            x = (0, a.G1)(c),
            I = !h && v,
            _ = (null == d ? void 0 : d.expiresAt) != null ? (0, P.TD)(Date.now(), d.expiresAt) : null,
            y = (0, f.Mu)('ProfileEffectDescription', !x || h),
            b = N(I, x, h, y);
        return null != o
            ? (0, i.jsx)('div', {
                  className: n ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
                  children: (0, i.jsxs)('div', {
                      className: E.effectDescriptionContainer,
                      children: [
                          (0, i.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: E.effectName,
                              children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == m ? void 0 : m.name
                          }),
                          (0, i.jsx)(l.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: E.effectDescription,
                              children: null != d ? d.summary : b
                          }),
                          null != _ &&
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: Z.intl.format(Z.t.Io7ozs, { days: _.days.toString() })
                              }),
                          null != d &&
                              (0, i.jsxs)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: [
                                      Z.intl.format(Z.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(p, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != d.expiresAt &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('br', {}),
                                                  Z.intl.format(Z.t.eZSTa2, {
                                                      date: d.expiresAt.toLocaleDateString(p, {
                                                          minute: 'numeric',
                                                          hour: 'numeric',
                                                          day: 'numeric',
                                                          month: 'long',
                                                          year: 'numeric'
                                                      })
                                                  })
                                              ]
                                          })
                                  ]
                              }),
                          v &&
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: Z.intl.string(Z.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    N = (e, t, n, i) => {
        if (e) return Z.intl.string(Z.t.ZVTtBg);
        if (t && n) return Z.intl.string(Z.t.L5hyz8);
        if (t && !n) return i ? Z.intl.string(Z.t.meldu7) : Z.intl.string(Z.t.bGl9t7);
        return Z.intl.string(Z.t.PXzyvr);
    };
t.Z = (e) => {
    var t;
    let { user: n, pendingProfileEffectRecord: l, canApplySelectedChange: s, product: a, purchase: f, guild: g } = e,
        {
            pendingGlobalName: C,
            pendingNickname: P,
            pendingPronouns: Z,
            pendingBio: N,
            pendingBanner: y,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A
        } = (0, r.cj)([d.Z, I.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != g ? d.Z.getAllPending() : I.Z.getAllPending())
        })),
        B = j.ZP.isPremium(n),
        k = j.ZP.canUsePremiumProfileCustomization(n),
        w = (0, h.ZP)(n.id),
        M = !!(null == w ? void 0 : w.getPreviewBio(N).value),
        R = {
            user: n,
            guild: g,
            pendingGlobalName: C,
            pendingNickname: P,
            pendingPronouns: Z,
            pendingBio: v.dN.useSetting() && null != N ? u.ZP.parse(void 0, N).content : N,
            pendingBanner: y,
            useLargeBanner: !0,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A,
            pendingProfileEffectId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
            hideFakeActivity: M,
            canUsePremiumCustomization: k,
            onUpsellClick: x.Z,
            onAvatarChange: null != g ? c.I5 : o.I5,
            onBannerChange: p.g_
        };
    return (0, i.jsxs)('div', {
        className: E.previewContainer,
        children: [
            (0, i.jsx)(m.Z, {
                ...R,
                disabledInputs: !0,
                hideCustomStatus: !0
            }),
            !1,
            (0, i.jsx)(_, {
                effectIsOwned: s,
                pendingProfileEffectRecord: l,
                product: a,
                purchase: f,
                userIsPremium: B
            })
        ]
    });
};
