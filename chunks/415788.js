t.r(s),
    t.d(s, {
        default: function () {
            return A;
        }
    }),
    t(47120);
var E = t(735250);
t(470079);
var a = t(120356),
    _ = t.n(a),
    n = t(704215),
    r = t(100527),
    L = t(906732),
    o = t(243778),
    R = t(790527),
    i = t(474936),
    u = t(981631),
    c = t(921944),
    S = t(689938),
    b = t(114831);
function A(e) {
    let s,
        a,
        A,
        { upsellType: d, onClose: T, transitionState: U } = e,
        I = d === i.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
        [p, C] = (0, o.US)([n.z.REVERSE_TRIAL_ENDED_UPSELL]);
    return (
        (0, L.ZP)(r.Z.REVERSE_TRIAL_UPSELL_MODAL),
        I ? ((s = S.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_HEADER), (a = S.Z.Messages.REVERSE_TRIAL_FOLLOW_UP_TRIAL_UPSELL_SUBHEADER), (A = S.Z.Messages.BOGO_CLAIM_OFFER)) : ((s = S.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_HEADER), (a = S.Z.Messages.REVERSE_TRIAL_ENDED_UPSELL_SUBHEADER), (A = S.Z.Messages.PREMIUM_SETTINGS_GET)),
        (0, E.jsx)(R.Z, {
            artURL: t(746458),
            artContainerClassName: _()(b.artContainer, { [b.grayArt]: !I }),
            enableArtBoxShadow: !1,
            type: d,
            title: s,
            body: a,
            bodyClassName: b.subHeader,
            glowUp: a,
            onSubscribeClick: () => {
                C(c.L.TAKE_ACTION);
            },
            backButtonText: S.Z.Messages.CLOSE,
            subscribeButtonText: A,
            subscribeButtonClassname: b.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: u.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: u.qAy.BUTTON_CTA
            },
            transitionState: U,
            onClose: () => (C(c.L.USER_DISMISS), T())
        })
    );
}
