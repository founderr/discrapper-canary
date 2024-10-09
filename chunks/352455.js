n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(409700),
    o = n(230711),
    c = n(630186),
    d = n(187819),
    u = n(981631),
    _ = n(921944),
    E = n(689938),
    h = n(886769);
function m(e) {
    let { className: t, markAsDismissed: n } = e,
        a = (0, d._p)({
            location: 'consent-card',
            autoTrackExposure: !1
        });
    return (0, i.jsxs)(c.Z, {
        className: s()(h.card, t),
        children: [
            (0, i.jsx)(r.Heading, {
                variant: 'heading-md/semibold',
                className: h.header,
                children: E.Z.Messages.NOW_PLAYING_GDPR_HEADER
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/normal',
                children: E.Z.Messages.NOW_PLAYING_GDPR_BODY.format({
                    onPrivacyClick: () => {
                        a ? o.Z.open(u.oAB.DATA_AND_PRIVACY) : o.Z.open(u.oAB.PRIVACY_AND_SAFETY);
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        size: r.Button.Sizes.SMALL,
                        onClick: () => (0, l.g)([u.pjP.PERSONALIZATION], []),
                        children: E.Z.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
                    }),
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        size: r.Button.Sizes.SMALL,
                        onClick: () => n(_.L.DISMISS),
                        look: r.Button.Looks.LINK,
                        children: E.Z.Messages.NO_THANKS
                    })
                ]
            })
        ]
    });
}
