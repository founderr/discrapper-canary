a.r(n),
    a.d(n, {
        default: function () {
            return p;
        },
        openProfileUpsellModal: function () {
            return P;
        }
    });
var i = a(735250);
a(470079);
var s = a(481060),
    r = a(921813),
    o = a(687158),
    l = a(576635),
    t = a(594174),
    u = a(98278),
    c = a(790527),
    d = a(474936),
    A = a(981631),
    E = a(486324),
    _ = a(689938),
    I = a(821774);
function P(e, n, r) {
    let o = t.default.getCurrentUser();
    return (
        null != o &&
        ((0, s.openModalLazy)(async () => {
            let { default: s } = await Promise.resolve().then(a.bind(a, 378879));
            return (a) =>
                (0, i.jsx)(s, {
                    user: o,
                    imageSrc: n,
                    uploadType: e,
                    analyticsSource: A.Sbl.PROFILE_PANEL,
                    analyticsLocation: {
                        section: A.jXE.USER_PROFILE,
                        object: A.qAy.BUTTON_CTA
                    },
                    onSecondaryClick: r,
                    ...a
                });
        }),
        !0)
    );
}
function p(e) {
    let { user: n, uploadType: s, imageSrc: t, onClose: A, analyticsSource: P, analyticsLocation: p, onSecondaryClick: v, ...m } = e,
        N = (0, o.ZP)(n.id),
        { primaryColor: C, secondaryColor: L } = (0, l.Z)({
            user: n,
            displayProfile: N,
            pendingAvatar: s === E.pC.AVATAR ? t : void 0,
            isPreview: !0
        }),
        T = s === E.pC.AVATAR || s === E.pC.BANNER,
        f = null != t;
    return T
        ? (0, i.jsx)(c.Z, {
              artURL: f ? void 0 : a(116909),
              modalClassName: f ? I.modal : void 0,
              modalContentClassName: f ? I.modalContent : void 0,
              type: d.cd.CUSTOM_PROFILE_UPSELL,
              title: s === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: s === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: s === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == v || v(), (0, u.$)(A);
              },
              secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: A,
              enableArtBoxShadow: !1,
              analyticsSource: P,
              analyticsLocation: p,
              hideBackButton: !0,
              showEnhancedUpsell: !0,
              LeadingComponent: f
                  ? (0, i.jsx)('div', {
                        className: I.previewContainerParent,
                        children: (0, i.jsx)(r.Z, {
                            containerClassName: I.previewContainer,
                            user: n,
                            canUsePremiumCustomization: !0,
                            disabledInputs: !0,
                            pendingAvatar: s === E.pC.AVATAR ? t : void 0,
                            pendingBanner: s === E.pC.BANNER ? t : void 0,
                            pendingThemeColors: [C, L]
                        })
                    })
                  : void 0,
              ...m
          })
        : null;
}
