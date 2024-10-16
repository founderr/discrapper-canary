n.r(t),
    n.d(t, {
        default: function () {
            return g;
        },
        openProfileUpsellModal: function () {
            return p;
        }
    });
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(921813),
    r = n(687158),
    l = n(576635),
    o = n(594174),
    c = n(98278),
    d = n(792254),
    u = n(790527),
    _ = n(474936),
    E = n(981631),
    h = n(486324),
    m = n(689938),
    I = n(821774);
function p(e, t) {
    let s = o.default.getCurrentUser();
    return (
        null != s &&
        ((0, a.openModalLazy)(async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 378879));
            return (n) =>
                (0, i.jsx)(r, {
                    user: s,
                    imageSrc: t,
                    uploadType: e,
                    analyticsSource: E.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: E.jXE.USER_PROFILE,
                        object: E.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: a.closeAllModals,
                    ...n
                });
        }),
        !0)
    );
}
function g(e) {
    let { user: t, uploadType: n, imageSrc: a, onClose: o, analyticsSource: E, analyticsLocation: p, onSecondaryClick: g, ...T } = e,
        S = (0, r.ZP)(t.id),
        { primaryColor: f, secondaryColor: C } = (0, l.Z)({
            user: t,
            displayProfile: S,
            pendingAvatar: n === h.pC.AVATAR ? a : void 0,
            isPreview: !0
        }),
        N = n === h.pC.AVATAR || n === h.pC.BANNER,
        A = null != a,
        v = (0, d.Z)(n === h.pC.AVATAR ? _.cd.ANIMATED_AVATAR_MODAL_UPSELL : _.cd.ANIMATED_BANNER_MODAL_UPSELL);
    return N
        ? (0, i.jsx)(u.Z, {
              artURL: A ? void 0 : v,
              modalClassName: A ? I.modal : void 0,
              modalContentClassName: A ? I.modalContent : void 0,
              type: n === h.pC.AVATAR ? _.cd.ANIMATED_AVATAR_MODAL_UPSELL : _.cd.ANIMATED_BANNER_MODAL_UPSELL,
              title: n === h.pC.AVATAR ? m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: n === h.pC.AVATAR ? m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: n === h.pC.AVATAR ? m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : m.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == g || g(), (0, c.$)(o);
              },
              secondaryCTA: m.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: o,
              enableArtBoxShadow: !1,
              analyticsSource: E,
              analyticsLocation: p,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: A
                  ? (0, i.jsx)('div', {
                        className: I.previewContainerParent,
                        children: (0, i.jsx)(s.Z, {
                            containerClassName: I.previewContainer,
                            user: t,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: n === h.pC.AVATAR ? a : void 0,
                            pendingBanner: n === h.pC.BANNER ? a : void 0,
                            pendingThemeColors: [f, C],
                            hideExampleButton: !0
                        })
                    })
                  : void 0,
              ...T
          })
        : null;
}
