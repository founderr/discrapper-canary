a.r(n),
    a.d(n, {
        default: function () {
            return v;
        },
        openProfileUpsellModal: function () {
            return p;
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
    I = a(821774),
    P = a(116909);
function p(e, n, r) {
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
function v(e) {
    let { user: n, uploadType: a, imageSrc: s, onClose: t, analyticsSource: A, analyticsLocation: p, onSecondaryClick: v, ...m } = e,
        N = (0, o.ZP)(n.id),
        { primaryColor: C, secondaryColor: L } = (0, l.Z)({
            user: n,
            displayProfile: N,
            pendingAvatar: a === E.pC.AVATAR ? s : void 0,
            isPreview: !0
        }),
        T = a === E.pC.AVATAR || a === E.pC.BANNER,
        f = null != s;
    return T
        ? (0, i.jsx)(c.Z, {
              artURL: f ? void 0 : P.default,
              modalClassName: f ? I.modal : void 0,
              modalContentClassName: f ? I.modalContent : void 0,
              type: d.cd.CUSTOM_PROFILE_UPSELL,
              title: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_TITLE : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_TITLE,
              body: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              glowUp: a === E.pC.AVATAR ? _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_AVATAR_MODAL_UPSELL_DESCRIPTION : _.Z.Messages.PREMIUM_UPSELL_PROFILE_ANIMATED_BANNER_MODAL_UPSELL_DESCRIPTION,
              onSecondaryClick: () => {
                  null == v || v(), (0, u.$)(t);
              },
              secondaryCTA: _.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
              onClose: t,
              enableArtBoxShadow: !1,
              analyticsSource: A,
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
                            pendingAvatar: a === E.pC.AVATAR ? s : void 0,
                            pendingBanner: a === E.pC.BANNER ? s : void 0,
                            pendingThemeColors: [C, L]
                        })
                    })
                  : void 0,
              ...m
          })
        : null;
}
