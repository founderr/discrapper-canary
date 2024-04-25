"use strict";
r.r(t), r("411104");
var a = r("735250"),
  n = r("470079"),
  i = r("442837"),
  s = r("481060"),
  l = r("271383"),
  o = r("19780"),
  d = r("226961"),
  u = r("594174"),
  c = r("51144"),
  m = r("481250"),
  f = r("689938");
class p extends n.PureComponent {
  render() {
    let {
      streams: e,
      userId: t,
      mediaEngineConnectionId: r,
      videoStreams: n
    } = this.props;
    if (null == t || null == e || 0 === e.length) return (0, a.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    });
    let i = o.default.getGuildId(),
      d = u.default.getUser(t),
      p = l.default.getNick(i, t),
      h = null == d ? f.default.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != p ? p : c.default.getName(d));
    return (0, a.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: h,
      children: (0, m.renderStreams)(e, r, t, n)
    })
  }
}
t.default = i.default.connectStores([d.default], e => {
  let {
    context: t,
    index: r,
    videoStreams: a
  } = e, n = d.default.getAllStats(t)[r], {
    section: i
  } = (0, d.parseSection)(d.default.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let s = null;
  if (null != n && null != n.rtp.inbound) {
    var l;
    s = null !== (l = n.rtp.inbound[i]) && void 0 !== l ? l : []
  }
  return {
    mediaEngineConnectionId: null == n ? void 0 : n.mediaEngineConnectionId,
    userId: i,
    streams: s,
    videoStreams: a
  }
})(p)