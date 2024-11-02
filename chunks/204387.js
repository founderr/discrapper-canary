r.r(t),
    r.d(t, {
        Steps: function () {
            return i;
        }
    }),
    r(47120);
var i,
    s,
    a = r(200651),
    n = r(192379),
    l = r(481060),
    o = r(100527),
    C = r(906732),
    d = r(626135),
    c = r(281494),
    x = r(687555),
    p = r(596583),
    h = r(981631);
((s = i || (i = {}))[(s.SELECT_FRIENDS = 1)] = 'SELECT_FRIENDS'), (s[(s.CONFIRMATION = 2)] = 'CONFIRMATION');
t.default = (e) => {
    let t,
        { transitionState: r, onClose: i, sourceAnalyticsLocations: s } = e,
        [f, u] = n.useState(1),
        [m, _] = n.useState(new Set()),
        [j, g] = n.useState(new Map()),
        { analyticsLocations: L } = (0, C.ZP)([...s, o.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (f) {
        case 1:
            t = (0, a.jsx)(x.Z, {
                onShare: async (e) => {
                    try {
                        d.default.track(h.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: L });
                        let t = await (0, c.jy)(e.map((e) => e.id));
                        u(2), _(new Set(e)), g(t);
                    } catch {}
                },
                onClose: i
            });
            break;
        case 2:
            t = (0, a.jsx)(p.Z, {
                selectedUsers: m,
                trialCreationResult: j,
                onClose: i
            });
            break;
        default:
            i();
    }
    return (0, a.jsx)(l.ModalRoot, {
        transitionState: r,
        children: t
    });
};
