"use strict";
r.r(t);
var a = r("735250"),
  n = r("470079"),
  i = r("442837"),
  s = r("481060"),
  l = r("226961"),
  o = r("481250"),
  d = r("689938");
class u extends n.PureComponent {
  render() {
    let {
      outbound: e
    } = this.props;
    return null == e ? (0, a.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    }) : (0, a.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: d.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
      children: (0, o.renderStreams)(e)
    })
  }
}
t.default = i.default.connectStores([l.default], e => {
  let {
    context: t,
    index: r
  } = e, a = l.default.getAllStats(t)[r];
  return {
    outbound: null != a ? a.rtp.outbound : null
  }
})(u)