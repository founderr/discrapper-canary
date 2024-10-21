c.r(a),
    c.d(a, {
        default: function () {
            return _;
        }
    });
var n = c(200651);
c(192379);
var e = c(98278),
    o = c(790527),
    s = c(474936),
    r = c(981631),
    i = c(689938),
    d = c(350770),
    u = c(954696);
function _(t) {
    let { onClose: a, analyticsSource: c, onLearnMore: _, ...p } = t,
        L = s.Si.TIER_2,
        O = i.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
            onLearnMore: function () {
                null == _ || _(), a(), (0, e.z)();
            }
        });
    return (0, n.jsx)(o.Z, {
        artURL: u.Z,
        artContainerClassName: d.videoBackgroundArt,
        type: s.cd.VIDEO_BACKGROUNDS_MODAL,
        title: i.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
        body: O,
        glowUp: O,
        analyticsSource: c,
        analyticsLocation: {
            page: r.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
            object: r.qAy.BUTTON_CTA
        },
        onClose: a,
        subscriptionTier: L,
        ...p
    });
}
