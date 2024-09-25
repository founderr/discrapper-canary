n.r(t),
    n.d(t, {
        default: function () {
            return E;
        }
    });
var r = n(735250);
n(470079);
var i = n(399606),
    a = n(481060),
    o = n(923500),
    s = n(522664),
    l = n(163268),
    u = n(774863),
    c = n(668058),
    d = n(160877),
    _ = n(689938);
function E(e) {
    let { channelId: t, messageId: n, transitionState: E, onClose: f } = e,
        h = (0, i.e7)([u.Z], () => u.Z.getFpMessageInfo(n)),
        p = h.attachments.map((e) => e.id),
        m = h.attachments.map((e) => e.filename),
        { reportFalsePositive: I, isReportFalsePositiveLoading: T } = (0, c.$)({
            onSuccess: () => {
                (0, d.s)(f), o.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, a.showToast)((0, a.createToast)(_.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
            },
            report: () => {
                (0, s.Eq)(t, n, p, m);
            }
        });
    return (
        !(h.attachments.length > 0) && f(),
        (0, r.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: T,
            analyticsContext: l.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: I,
            transitionState: E,
            onClose: f
        })
    );
}
