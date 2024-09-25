n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(310752),
    l = n(174609),
    u = n(703656),
    c = n(210887),
    d = n(594174),
    _ = n(626135),
    E = n(424218),
    f = n(63063),
    h = n(380684),
    p = n(74538),
    m = n(684259),
    I = n(104494),
    T = n(639119),
    g = n(631771),
    S = n(790527),
    A = n(474936),
    v = n(981631),
    N = n(731994),
    O = n(689938),
    R = n(128893);
function C(e) {
    let { onClose: t, ...n } = e,
        C = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        y = (0, a.e7)([c.Z], () => c.Z.theme),
        b = null == C ? void 0 : C.premiumType,
        L = (0, T.N)(),
        D = (0, I.Ng)(),
        M = null != L || null != D,
        { enabled: P } = g.MP.useExperiment(
            { location: 'File Upload Roadblock' },
            {
                autoTrackExposure: !M,
                disable: M
            }
        ),
        U = (0, h.XS)(),
        w = P || U,
        x = y === v.BRd.LIGHT ? 'light' : 'dark',
        G = w
            ? (0, r.jsx)('img', {
                  className: R.updatedArt,
                  alt: 'File Upload Nitro Perk',
                  src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(x, '_v2.png')
              })
            : (0, r.jsx)(s.Z, { icons: N.J6 }),
        k = i.useMemo(() => {
            let e = p.ZP.getUserMaxFileSize(C);
            return (0, E.BU)(e / 1024, { useKibibytes: !0 });
        }, [C]),
        B = i.useMemo(() => {
            let e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: k });
            switch (b) {
                case A.p9.TIER_0:
                    e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({ maxSize: k });
                    break;
                case A.p9.TIER_1:
                    e = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({ maxSize: k });
            }
            return e;
        }, [b, k]),
        F = (0, E.BU)(A.Uq / 1024, { useKibibytes: !0 }),
        Z = U ? O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE_V2 : O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
        V = w
            ? U
                ? (0, m.T)({
                      user: C,
                      onClick: () => {
                          window.open(f.Z.getArticleURL(v.BhN.NITRO_FAQ), '_blank');
                      }
                  })
                : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2
            : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: F }),
        H = w
            ? (0, r.jsx)('div', {
                  className: R.body,
                  children: (0, r.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      children: V
                  })
              })
            : (0, r.jsxs)('div', {
                  className: R.body,
                  children: [
                      (0, r.jsx)('span', { children: B }),
                      (0, r.jsx)(o.Text, {
                          variant: 'text-md/medium',
                          children: V
                      })
                  ]
              });
    function Y() {
        (0, l.Z)(),
            t(),
            _.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: v.qAy.NAVIGATION_LINK
            }),
            (0, u.uL)(v.Z5c.APPLICATION_STORE);
    }
    return (0, r.jsx)(S.Z, {
        artElement: G,
        artContainerClassName: w ? R.updatedArtContainer : R.artContainer,
        enableArtBoxShadow: !1,
        type: A.cd.UPLOAD_ERROR_UPSELL,
        title: Z,
        body: H,
        context: O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: k }),
        glowUp: V,
        analyticsLocation: { section: v.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: A.Si.TIER_2,
        secondaryCTA: w ? O.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
        onSecondaryClick: w ? Y : void 0,
        showEnhancedUpsell: w,
        ...n
    });
}
