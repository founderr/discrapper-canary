n.d(a, {
  Z: function() {
    return s
  }
}), n(653041);
var t = n(701488),
  l = n(689938);

function s(e) {
  let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = [{
      value: t.K8.FAILED_LOAD,
      label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_FAILED_LOAD : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_FAILED_LOAD
    }, {
      value: t.K8.LAGGING,
      label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_LAGGING : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_LAGGING
    }, {
      value: t.K8.CONFUSING,
      label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_CONFUSING : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_CONFUSING
    }, {
      value: t.K8.NOT_FUN,
      label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_NOT_FUN : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_NOT_FUN
    }, {
      value: t.K8.OTHER,
      label: l.Z.Messages.CALL_FEEDBACK_OPTION_OTHER
    }];
  return a && n.push({
    value: t.K8.ADS,
    label: e ? l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_END_INCLUDED_ADS : l.Z.Messages.ACTIVITY_REPORT_ACTIVITY_INCLUDES_ADS
  }), n
}