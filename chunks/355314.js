n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(310752),
    l = n(174609),
    u = n(703656),
    c = n(210887),
    d = n(594174),
    _ = n(626135),
    E = n(424218),
    f = n(63063),
    h = n(380684),
    p = n(74538),
    I = n(104494),
    m = n(639119),
    T = n(631771),
    g = n(790527),
    S = n(474936),
    A = n(981631),
    N = n(731994),
    O = n(689938),
    R = n(984348);
function v(e) {
    let { onClose: t, ...n } = e,
        v = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        C = (0, a.e7)([c.Z], () => c.Z.theme),
        y = null == v ? void 0 : v.premiumType,
        L = (0, m.N)(),
        D = (0, I.Ng)(),
        b = null != L || null != D,
        { enabled: M } = T.MP.useExperiment(
            { location: 'File Upload Roadblock' },
            {
                autoTrackExposure: !b,
                disable: b
            }
        ),
        P = (0, h.XS)(),
        U = M || P,
        w = C === A.BRd.LIGHT ? 'light' : 'dark',
        x = U
            ? (0, r.jsx)('img', {
                  className: R.updatedArt,
                  alt: 'File Upload Nitro Perk',
                  src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(w, '_v2.png')
              })
            : (0, r.jsx)(o.Z, { icons: N.J6 }),
        G = i.useMemo(() => {
            let e = p.ZP.getUserMaxFileSize(v);
            return (0, E.BU)(e / 1024, { useKibibytes: !0 });
        }, [v]),
        k = i.useMemo(() => {
            let e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: G });
            switch (y) {
                case S.p9.TIER_0:
                    e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({ maxSize: G });
                    break;
                case S.p9.TIER_1:
                    e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({ maxSize: G });
            }
            return e;
        }, [y, G]),
        B = (0, E.BU)(S.Uq / 1024, { useKibibytes: !0 }),
        F = P ? O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE_V2 : O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        V = U
            ? P
                ? O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2_V2.format({
                      onClick: () => {
                          window.open(f.Z.getArticleURL(A.BhN.NITRO_FAQ), '_blank');
                      }
                  })
                : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2
            : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: B }),
        H = U
            ? (0, r.jsx)('div', {
                  className: R.body,
                  children: (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      children: V
                  })
              })
            : (0, r.jsxs)('div', {
                  className: R.body,
                  children: [
                      (0, r.jsx)('span', { children: k }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-md/medium',
                          children: V
                      })
                  ]
              });
    return (0, r.jsx)(g.Z, {
        artElement: x,
        artContainerClassName: U ? R.updatedArtContainer : R.artContainer,
        enableArtBoxShadow: !1,
        type: S.cd.UPLOAD_ERROR_UPSELL,
        title: F,
        body: H,
        context: O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: G }),
        glowUp: V,
        analyticsLocation: { section: A.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: S.Si.TIER_2,
        secondaryCTA: U ? O.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
        onSecondaryClick: U
            ? function () {
                  (0, l.Z)(),
                      t(),
                      _.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
                          location_section: A.jXE.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: A.qAy.NAVIGATION_LINK
                      }),
                      (0, u.uL)(A.Z5c.APPLICATION_STORE);
              }
            : void 0,
        showEnhancedUpsell: U,
        ...n
    });
}
