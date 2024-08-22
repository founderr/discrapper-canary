t.r(s),
    t.d(s, {
        default: function () {
            return b;
        }
    }),
    t(47120);
var E = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    _ = t(704215),
    n = t(243778),
    L = t(790527),
    o = t(474936),
    i = t(981631),
    u = t(921944),
    R = t(689938),
    S = t(475039);
function b(e) {
    let s,
        a,
        b,
        { upsellType: c, onClose: A, transitionState: T } = e,
        U = c === o.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
        [d, C] = (0, n.US)([_.z.REVERSE_TRIAL_ENDED_UPSELL]);
    return (
        U ? ((s = R.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_HEADER), (a = R.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_SUBHEADER), (b = R.Z.Messages.BOGO_CLAIM_OFFER)) : ((s = R.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_HEADER), (a = R.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_SUBHEADER), (b = R.Z.Messages.PREMIUM_SETTINGS_GET)),
        (0, E.jsx)(L.Z, {
            artURL: t(773585),
            artContainerClassName: r()(S.artContainer, { [S.grayArt]: !U }),
            enableArtBoxShadow: !1,
            type: c,
            title: s,
            body: a,
            bodyClassName: S.subHeader,
            glowUp: a,
            onSubscribeClick: () => {
                C(u.L.TAKE_ACTION);
            },
            backButtonText: R.Z.Messages.CLOSE,
            subscribeButtonText: b,
            subscribeButtonClassname: S.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: i.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: i.qAy.BUTTON_CTA
            },
            transitionState: T,
            onClose: () => (C(u.L.USER_DISMISS), A())
        })
    );
}
