n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var a = n(442837),
    s = n(704215),
    r = n(481060),
    l = n(410575),
    o = n(100527),
    c = n(906732),
    d = n(313201),
    u = n(243778),
    _ = n(352455),
    E = n(480294),
    h = n(791359),
    m = n(981631),
    I = n(689938),
    p = n(831162);
function g() {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.ACTIVE_NOW_COLUMN),
        t = (0, a.e7)([E.Z], () => E.Z.hasConsented(m.pjP.PERSONALIZATION)) ? [] : [s.z.NOW_PLAYING_CONSENT_CARD],
        n = (0, d.Dt)();
    return (0, i.jsx)(c.Gt, {
        value: e,
        children: (0, i.jsx)(l.Z, {
            section: m.jXE.ACTIVE_NOW_COLUMN,
            children: (0, i.jsx)('aside', {
                className: p.container,
                'aria-labelledby': n,
                children: (0, i.jsxs)(r.Scroller, {
                    className: p.scroller,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: 'heading-lg/semibold',
                            className: p.header,
                            id: n,
                            children: I.Z.Messages.GAME_FEED_CURRENT_HEADER_TITLE
                        }),
                        (0, i.jsx)(u.ZP, {
                            contentTypes: t,
                            children: (e) => {
                                let { visibleContent: t, markAsDismissed: n } = e;
                                if (t === s.z.NOW_PLAYING_CONSENT_CARD)
                                    return (0, i.jsx)(_.Z, {
                                        className: p.__invalid_consentCard,
                                        markAsDismissed: n
                                    });
                            }
                        }),
                        (0, i.jsx)(h.Z, {})
                    ]
                })
            })
        })
    });
}
