n.r(t),
    n.d(t, {
        default: function () {
            return p;
        },
        openEffectsUpsellModal: function () {
            return f;
        }
    });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(70097),
    s = n(174609),
    a = n(98278),
    o = n(790527),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    h = n(517301),
    m = n(626065);
function p(e) {
    let { onClose: t, analytics: n, ...l } = e,
        p = d.intl.format(d.t['7aNIkZ'], {
            onPressMore: function () {
                (0, s.Z)(),
                    t(),
                    c.default.track(u.rMx.PREMIUM_PROMOTION_OPENED, {
                        location_section: u.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
                        location_object: u.qAy.NAVIGATION_LINK
                    }),
                    (0, a.z)();
            }
        });
    return (0, i.jsx)(o.Z, {
        title: d.intl.string(d.t.K49fZG),
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
        onSubscribeClick: s.Z,
        artElement: (0, i.jsx)(r.Z, {
            className: h.video,
            src: m,
            loop: !0,
            autoPlay: !0
        }),
        ...l
    });
}
function f(e) {
    let { analytics: t } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 310892));
        return (n) =>
            (0, i.jsx)(e, {
                analytics: t,
                ...n
            });
    });
}
