n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var o = n(200651),
    a = n(192379),
    l = n(75124),
    r = n(442837),
    i = n(704215),
    s = n(481060),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    b = n(626135),
    m = n(924400),
    f = n(987562),
    h = n(981631),
    _ = n(388032);
function x(e) {
    let { transitionState: t, onClose: x, channel: p } = e,
        g = (0, l.Z)(f.TL),
        k = (0, r.e7)([d.default], () => d.default.getUser(p.getRecipientId()));
    return (
        a.useEffect(() => {
            b.default.track(h.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, o.jsx)(u.Z, {
            hasCloseButton: !0,
            header: _.intl.string(_.t.SxsBFB),
            body: _.intl.formatToPlainString(_.t['7kb7z8'], { username: null == k ? void 0 : k.username }),
            problems: g,
            feedbackProblems: {
                [f.YA.OTHER]: {
                    subheader: _.intl.string(_.t.VQkdtL),
                    hint: _.intl.string(_.t.EG3N9f)
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: l, closeClicked: r } = e;
                a && (0, c.EW)(i.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || r;
                (0, m.Z)(t, l, u, a),
                    !u &&
                        (0, s.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: _.intl.string(_.t.sYrCub),
                                    ...t
                                });
                        });
            },
            onClose: x,
            transitionState: t,
            otherKey: f.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
