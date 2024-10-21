a.r(n),
    a.d(n, {
        default: function () {
            return I;
        },
        openProfileUpsellModal: function () {
            return L;
        }
    });
var t = a(200651);
a(192379);
var s = a(481060),
    c = a(921813),
    o = a(687158),
    i = a(576635),
    r = a(594174),
    d = a(98278),
    l = a(792254),
    u = a(790527),
    A = a(474936),
    f = a(981631),
    p = a(486324),
    E = a(689938),
    _ = a(821774);
function L(e, n) {
    let c = r.default.getCurrentUser();
    return (
        null != c &&
        ((0, s.openModalLazy)(async () => {
            let { default: o } = await Promise.resolve().then(a.bind(a, 378879));
            return (a) =>
                (0, t.jsx)(o, {
                    user: c,
                    imageSrc: n,
                    uploadType: e,
                    analyticsSource: f.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: f.jXE.USER_PROFILE,
                        object: f.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: s.closeAllModals,
                    ...a
                });
        }),
        !0)
    );
}
function I(e) {
    let { user: n, uploadType: a, imageSrc: s, onClose: r, analyticsSource: f, analyticsLocation: L, onSecondaryClick: I, ...P } = e,
        R = (0, o.ZP)(n.id),
        { primaryColor: b, secondaryColor: Z } = (0, i.Z)({
            user: n,
            displayProfile: R,
            pendingAvatar: a === p.pC.AVATAR ? s : void 0,
            isPreview: !0
        }),
        N = a === p.pC.AVATAR || a === p.pC.BANNER,
        m = null != s,
        T = (0, l.Z)(a === p.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return N
        ? (0, t.jsx)(u.Z, {
              artURL: m ? void 0 : T,
              modalClassName: m ? _.modal : void 0,
              modalContentClassName: m ? _.modalContent : void 0,
              type: a === p.pC.AVATAR ? A.cd.ANIMATED_AVATAR_MODAL_UPSELL : A.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title: a === p.pC.AVATAR ? E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: a === p.pC.AVATAR ? E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: a === p.pC.AVATAR ? E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : E.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == I || I(), (0, d.$)(r);
              },
              secondaryCTA: E.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: r,
              enableArtBoxShadow: !1,
              analyticsSource: f,
              analyticsLocation: L,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: m
                  ? (0, t.jsx)('div', {
                        className: _.previewContainerParent,
                        children: (0, t.jsx)(c.Z, {
                            containerClassName: _.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: a === p.pC.AVATAR ? s : void 0,
                            pendingBanner: a === p.pC.BANNER ? s : void 0,
                            pendingThemeColors: [b, Z],
                            hideExampleButton: !0
                        })
                    })
                  : void 0,
              ...P
          })
        : null;
}
