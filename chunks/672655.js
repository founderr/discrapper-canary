n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041);
var a = n(701488),
    s = n(689938);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = [
            {
                value: a.K8.FAILED_LOAD,
                label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
            },
            {
                value: a.K8.LAGGING,
                label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
            },
            {
                value: a.K8.CONFUSING,
                label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
            },
            {
                value: a.K8.NOT_FUN,
                label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
            },
            {
                value: a.K8.OTHER,
                label: s.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
            }
        ];
    return (
        t &&
            n.push({
                value: a.K8.ADS,
                label: e ? s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS : s.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS
            }),
        n
    );
}
