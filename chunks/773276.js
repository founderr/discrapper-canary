n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(923500),
    o = n(522664),
    s = n(247206),
    c = n(774863),
    u = n(668058),
    d = n(160877),
    m = n(388032);
function f(e) {
    let { channelId: t, messageId: n, transitionState: f, onClose: h } = e,
        p = (0, r.e7)([c.Z], () => c.Z.getFpMessageInfo(n)),
        g = p.attachments.map((e) => e.id),
        _ = p.attachments.map((e) => e.filename),
        { reportFalsePositive: C, isReportFalsePositiveLoading: E } = (0, u.$)({
            onSuccess: () => {
                (0, d.s)(h), a.Z.disableFalsePositiveButton(t, n);
            },
            onError: () => {
                (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.R0RpRU), l.ToastType.FAILURE));
            },
            report: () => {
                (0, o.Eq)(t, n, g, _);
            }
        });
    return (
        !(p.attachments.length > 0) && h(),
        (0, i.jsx)(d.$, {
            messageId: n,
            channelId: t,
            isReportFalsePositiveLoading: E,
            analyticsContext: s.UU.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
            onConfirmPress: C,
            transitionState: f,
            onClose: h
        })
    );
}
