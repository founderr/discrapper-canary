t.r(n),
    t.d(n, {
        default: function () {
            return E;
        }
    });
var i = t(735250);
t(470079);
var a = t(481060),
    s = t(522664),
    l = t(651530),
    r = t(163268),
    o = t(668058),
    u = t(112554),
    d = t(160877),
    c = t(689938);
function E(e) {
    let { channelId: n, messageId: t, mediaItemUrl: E, embedId: M, transitionState: g, onClose: m } = e,
        f = (0, l.yh)(),
        I = (0, u.K)(n, t, E),
        _ = (0, u.b)(n, t, M),
        { reportFalsePositive: Z, isReportFalsePositiveLoading: S } = (0, o.$)({
            onSuccess: () => (0, d.s)(m),
            onError: () => {
                (0, a.showToast)((0, a.createToast)(c.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
            },
            report: () => {
                (0, s.Uj)(
                    n,
                    t,
                    I.map((e) => e.id),
                    _.map((e) => e.id)
                );
            }
        });
    return (
        !(f && (I.length > 0 || _.length > 0)) && m(),
        (0, i.jsx)(d.$, {
            messageId: t,
            channelId: n,
            isReportFalsePositiveLoading: S,
            analyticsContext: r.UU.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
            onConfirmPress: Z,
            attachmentPreview: 1 === I.length && 0 === _.length ? I[0] : void 0,
            embedPreview: 1 === _.length && 0 === I.length ? _[0] : void 0,
            transitionState: g,
            onClose: m
        })
    );
}
