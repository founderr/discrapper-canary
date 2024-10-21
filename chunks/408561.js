n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var a = n(200651),
    o = n(192379),
    s = n(75124),
    r = n(442837),
    l = n(704215),
    i = n(481060),
    c = n(605236),
    u = n(624659),
    d = n(594174),
    E = n(626135),
    _ = n(924400),
    b = n(987562),
    m = n(981631),
    f = n(689938);
function h(e) {
    let { transitionState: t, onClose: h, channel: M } = e,
        x = (0, s.Z)(b.TL),
        A = (0, r.e7)([d.default], () => d.default.getUser(M.getRecipientId()));
    return (
        o.useEffect(() => {
            E.default.track(m.rMx.OPEN_MODAL, { type: 'DM Mute Feedback Modal' });
        }, []),
        (0, a.jsx)(u.Z, {
            hasCloseButton: !0,
            header: f.Z.Messages.MUTE_FEEDBACK_HEADER,
            body: f.Z.Messages.MUTE_FEEDBACK_BODY.format({ username: null == A ? void 0 : A.username }),
            problems: x,
            feedbackProblems: {
                [b.YA.OTHER]: {
                    subheader: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_BODY,
                    hint: f.Z.Messages.MUTE_FEEDBACK_TEXTAREA_HINT
                }
            },
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: o, feedback: s, closeClicked: r } = e;
                o && (0, c.EW)(l.z.USER_DM_MUTE_FEEDBACK);
                let u = null == t || r;
                (0, _.Z)(t, s, u, o),
                    !u &&
                        (0, i.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: f.Z.Messages.MUTE_FEEDBACK_THANKS,
                                    ...t
                                });
                        });
            },
            onClose: h,
            transitionState: t,
            otherKey: b.YA.OTHER,
            showHelpdeskLink: !1
        })
    );
}
