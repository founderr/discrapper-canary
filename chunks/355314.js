n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(310752),
    l = n(174609),
    u = n(703656),
    c = n(210887),
    d = n(594174),
    f = n(626135),
    _ = n(424218),
    h = n(63063),
    p = n(380684),
    m = n(74538),
    g = n(684259),
    E = n(104494),
    v = n(639119),
    I = n(631771),
    S = n(790527),
    b = n(474936),
    T = n(981631),
    y = n(731994),
    A = n(388032),
    N = n(746971);
function C(e) {
    let { onClose: t, ...n } = e,
        C = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        R = (0, a.e7)([c.Z], () => c.Z.theme),
        O = null == C ? void 0 : C.premiumType,
        D = (0, v.N)(),
        L = (0, E.Ng)(),
        x = null != D || null != L,
        { enabled: w } = I.MP.useExperiment(
            { location: 'File Upload Roadblock' },
            {
                autoTrackExposure: !x,
                disable: x
            }
        ),
        M = (0, p.XS)(),
        P = w || M,
        k = R === T.BRd.LIGHT ? 'light' : 'dark',
        U = P
            ? (0, r.jsx)('img', {
                  className: N.updatedArt,
                  alt: 'File Upload Nitro Perk',
                  src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(k, '_v2.png')
              })
            : (0, r.jsx)(o.Z, { icons: y.J6 }),
        G = i.useMemo(() => {
            let e = m.ZP.getUserMaxFileSize(C);
            return (0, _.BU)(e / 1024, { useKibibytes: !0 });
        }, [C]),
        B = i.useMemo(() => {
            let e = A.intl.formatToPlainString(A.t.q5fTZm, { maxSize: G });
            switch (O) {
                case b.p9.TIER_0:
                    e = A.intl.formatToPlainString(A.t['/DXKen'], { maxSize: G });
                    break;
                case b.p9.TIER_1:
                    e = A.intl.formatToPlainString(A.t['Kf/MPD'], { maxSize: G });
            }
            return e;
        }, [O, G]),
        Z = (0, _.BU)(b.Uq / 1024, { useKibibytes: !0 }),
        F = M ? A.intl.string(A.t['9C+41t']) : A.intl.string(A.t['/tGlcn']),
        V = P
            ? M
                ? (0, g.T)({
                      user: C,
                      onClick: () => {
                          window.open(h.Z.getArticleURL(T.BhN.NITRO_FAQ), '_blank');
                      }
                  })
                : A.intl.string(A.t.ZcYwgY)
            : A.intl.formatToPlainString(A.t.htbuIS, { premiumMaxSize: Z }),
        j = P
            ? (0, r.jsx)('div', {
                  className: N.body,
                  children: (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      children: V
                  })
              })
            : (0, r.jsxs)('div', {
                  className: N.body,
                  children: [
                      (0, r.jsx)('span', { children: B }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          children: V
                      })
                  ]
              });
    return (0, r.jsx)(S.Z, {
        artElement: U,
        artContainerClassName: P ? N.updatedArtContainer : N.artContainer,
        enableArtBoxShadow: !1,
        type: b.cd.UPLOAD_ERROR_UPSELL,
        title: F,
        body: j,
        context: A.intl.formatToPlainString(A.t.q5fTZm, { maxSize: G }),
        glowUp: V,
        analyticsLocation: { section: T.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: b.Si.TIER_2,
        secondaryCTA: P ? A.intl.string(A.t.ZnqyZ2) : void 0,
        onSecondaryClick: P
            ? function () {
                  (0, l.Z)(),
                      t(),
                      f.default.track(T.rMx.PREMIUM_PROMOTION_OPENED, {
                          location_section: T.jXE.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: T.qAy.NAVIGATION_LINK
                      }),
                      (0, u.uL)(T.Z5c.APPLICATION_STORE);
              }
            : void 0,
        showEnhancedUpsell: P,
        ...n
    });
}
