e.r(n),
    e.d(n, {
        default: function () {
            return S;
        }
    }),
    e(47120);
var r = e(200651);
e(192379);
var s = e(120356),
    i = e.n(s),
    a = e(704215),
    o = e(100527),
    u = e(906732),
    c = e(243778),
    b = e(790527),
    d = e(474936),
    E = e(981631),
    l = e(921944),
    _ = e(388032),
    L = e(114831);
function S(t) {
    let n,
        s,
        S,
        { upsellType: p, onClose: C, transitionState: g } = t,
        A = p === d.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL,
        [R, T] = (0, c.US)([a.z.REVERSE_TRIAL_ENDED_UPSELL]);
    return (
        (0, u.ZP)(o.Z.REVERSE_TRIAL_UPSELL_MODAL),
        A ? ((n = _.intl.string(_.t.CCMEZW)), (s = _.intl.string(_.t.gFGZZG)), (S = _.intl.string(_.t.J61px8))) : ((n = _.intl.string(_.t.N1JBY2)), (s = _.intl.string(_.t['h5/w39'])), (S = _.intl.string(_.t['8x0jKS']))),
        (0, r.jsx)(b.Z, {
            artURL: e(746458),
            artContainerClassName: i()(L.artContainer, { [L.grayArt]: !A }),
            enableArtBoxShadow: !1,
            type: p,
            title: n,
            body: s,
            bodyClassName: L.subHeader,
            glowUp: s,
            onSubscribeClick: () => {
                T(l.L.TAKE_ACTION);
            },
            backButtonText: _.intl.string(_.t.cpT0Cg),
            subscribeButtonText: S,
            subscribeButtonClassname: L.subscribeButton,
            useSubscribeButtonGradient: !0,
            hidePremiumOfferUpsell: !0,
            analyticsLocation: {
                section: E.jXE.REVERSE_TRIAL_UPSELL_MODAL,
                object: E.qAy.BUTTON_CTA
            },
            transitionState: g,
            onClose: () => (T(l.L.USER_DISMISS), C())
        })
    );
}
