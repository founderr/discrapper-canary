var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    o = n(809206),
    s = n(597688),
    a = n(884697),
    c = n(905357),
    d = n(95422),
    u = n(18438),
    f = n(778825),
    m = n(957730),
    p = n(222062),
    h = n(921813),
    g = n(350327),
    v = n(687158),
    x = n(706454),
    I = n(695346),
    C = n(265159),
    j = n(25990),
    P = n(594174),
    Z = n(55935),
    E = n(74538),
    _ = n(388032),
    N = n(173936);
let y = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: o, purchase: u } = e,
            f = (0, r.e7)([P.default], () => P.default.getCurrentUser()),
            m = (0, r.e7)([s.Z], () => s.Z.getProduct(null == n ? void 0 : n.skuId)),
            h = (0, r.e7)([x.default], () => x.default.locale),
            g = E.ZP.canUseCollectibles(f),
            v = (0, a.qS)(u),
            I = (0, a.G1)(o),
            C = !g && v,
            j = (null == u ? void 0 : u.expiresAt) != null ? (0, Z.TD)(Date.now(), u.expiresAt) : null,
            y = (0, d.a)(u),
            S = (0, c.k)(m),
            T = (0, p.M)(!I || g),
            A = b(C, I, g, T);
        return null != n
            ? (0, i.jsx)('div', {
                  className: t ? N.effectDescriptionNoGradient : N.effectDescriptionBorderWithGradient,
                  children: (0, i.jsxs)('div', {
                      className: N.effectDescriptionContainer,
                      children: [
                          (0, i.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: N.effectName,
                              children: null != y ? y : S
                          }),
                          (0, i.jsx)(l.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: N.effectDescription,
                              children: null != u ? u.summary : A
                          }),
                          null != j &&
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: _.intl.format(_.t.Io7ozs, { days: j.days.toString() })
                              }),
                          null != u &&
                              (0, i.jsxs)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: [
                                      _.intl.format(_.t.gW9R4O, {
                                          date: u.purchasedAt.toLocaleDateString(h, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != u.expiresAt &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('br', {}),
                                                  _.intl.format(_.t.eZSTa2, {
                                                      date: u.expiresAt.toLocaleDateString(h, {
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
                                  className: N.effectPurchasedAt,
                                  children: _.intl.string(_.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    b = (e, t, n, i) => {
        if (e) return _.intl.string(_.t.ZVTtBg);
        if (t && n) return _.intl.string(_.t.L5hyz8);
        if (t && !n) return i ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.bGl9t7);
        return _.intl.string(_.t.PXzyvr);
    };
t.Z = (e) => {
    var t;
    let { user: n, pendingProfileEffectRecord: l, canApplySelectedChange: s, product: a, purchase: c, guild: d } = e,
        {
            pendingGlobalName: p,
            pendingNickname: x,
            pendingPronouns: P,
            pendingBio: Z,
            pendingBanner: _,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A
        } = (0, r.cj)([f.Z, j.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != d ? f.Z.getAllPending() : j.Z.getAllPending())
        })),
        k = E.ZP.isPremium(n),
        B = E.ZP.canUsePremiumProfileCustomization(n),
        w = (0, v.ZP)(n.id),
        M = !!(null == w ? void 0 : w.getPreviewBio(Z).value),
        R = {
            user: n,
            guild: d,
            pendingGlobalName: p,
            pendingNickname: x,
            pendingPronouns: P,
            pendingBio: I.dN.useSetting() && null != Z ? m.ZP.parse(void 0, Z).content : Z,
            pendingBanner: _,
            useLargeBanner: !0,
            pendingAvatar: b,
            pendingAvatarDecoration: S,
            pendingThemeColors: T,
            pendingAccentColor: A,
            pendingProfileEffectId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
            hideFakeActivity: M,
            canUsePremiumCustomization: B,
            onUpsellClick: C.Z,
            onAvatarChange: null != d ? u.I5 : o.I5,
            onBannerChange: g.g_
        };
    return (0, i.jsxs)('div', {
        className: N.previewContainer,
        children: [
            (0, i.jsx)(h.Z, {
                ...R,
                disabledInputs: !0,
                hideCustomStatus: !0
            }),
            !1,
            (0, i.jsx)(y, {
                effectIsOwned: s,
                pendingProfileEffectRecord: l,
                product: a,
                purchase: c,
                userIsPremium: k
            })
        ]
    });
};
