n.r(t),
    n.d(t, {
        default: function () {
            return p;
        },
        openEffectsUpsellModal: function () {
            return _;
        }
    });
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(70097),
    l = n(174609),
    r = n(98278),
    o = n(790527),
    c = n(626135),
    u = n(981631),
    d = n(689938),
    h = n(517301),
    m = n(626065);
function p(e) {
    let { onClose: t, analytics: n, ...s } = e,
        p = d.Z.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_BODY_2.format({
            onPressMore: function () {
                (0, l.Z)(),
                    t(),
                    c.default.track(u.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_section: u.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
                        location_object: u.qAy.NAVIGATION_LINK
                    }),
                    (0, r.z)();
            }
        });
    return (0, i.jsx)(o.Z, {
        title: d.Z.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_HEADER_2,
        glowUp: p,
        body: p,
        artContainerClassName: h.artContainer,
        enableArtBoxShadow: !1,
        type: n.type,
        analyticsLocation: {
            section: u.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
            object: n.object
        },
        analyticsSource: {
            page: u.ZY5.CHANNEL_CALL,
            section: n.section
        },
        onClose: t,
        onSubscribeClick: l.Z,
        artElement: (0, i.jsx)(a.Z, {
            className: h.video,
            src: m,
            loop: !0,
            autoPlay: !0
        }),
        ...s
    });
}
function _(e) {
    let { analytics: t } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 310892));
        return (n) =>
            (0, i.jsx)(e, {
                analytics: t,
                ...n
            });
    });
}
