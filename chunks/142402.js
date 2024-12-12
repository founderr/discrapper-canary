n.r(t),
    n.d(t, {
        default: function () {
            return g;
        }
    });
var l = n(200651),
    i = n(192379),
    a = n(481060),
    r = n(332664),
    s = n(538211),
    o = n(698066),
    c = n(142497),
    u = n(626135),
    d = n(981631),
    m = n(70722),
    b = n(190378),
    f = n(388032);
let x = [m.kr.OTHER];
function g(e) {
    let { isStreamer: t, stream: g, streamApplication: p, onClose: h, transitionState: _, analyticsData: j } = e,
        k = t ? f.intl.string(f.t['0uxA2d']) : f.intl.string(f.t.CqjnLC);
    return (
        i.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
                type: 'Stream Problem Report',
                other_user_id: g.ownerId,
                application_id: null != p ? p.id : null,
                application_name: null != p ? p.name : null,
                game_id: null != p ? p.id : null,
                source: 'Stream End'
            });
        }, [g.ownerId, p]),
        (0, l.jsx)(r.Z, {
            modalType: 'stream',
            header: f.intl.string(f.t['5smP3d']),
            body: k,
            problemTitle: f.intl.string(f.t['6Y1t5O']),
            problems: (0, s.Z)(t, !0),
            feedbackProblems: x,
            onSubmit: function (e) {
                let { rating: t, problem: i, dontShowAgain: r, feedback: s } = e;
                if ((r && (0, c.Kw)(b.v.REPORT_PROBLEM_POST_STREAM), null != t))
                    (0, o.Z)({
                        problem: i,
                        stream: g,
                        feedback: s,
                        streamApplication: p,
                        analyticsData: j,
                        location: 'Stream End',
                        rating: t
                    }),
                        null != i &&
                            (0, a.openModalLazy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        body: f.intl.string(f.t.mMTVnp),
                                        ...t
                                    });
                            });
            },
            onClose: h,
            transitionState: _,
            otherKey: m.kr.OTHER
        })
    );
}
