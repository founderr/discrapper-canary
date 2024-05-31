"use strict";
a.r(t), a("411104");
var r = a("735250"),
  n = a("470079"),
  i = a("442837"),
  l = a("481060"),
  s = a("271383"),
  o = a("19780"),
  u = a("226961"),
  d = a("594174"),
  c = a("51144"),
  m = a("481250"),
  f = a("689938");
class p extends n.PureComponent {
  render() {
    let {
      streams: e,
      context: t,
      userId: a,
      mediaEngineConnectionId: n,
      videoStreams: i
    } = this.props;
    if (null == a || null == e || 0 === e.length) return (0, r.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    });
    let u = o.default.getGuildId(),
      p = d.default.getUser(a),
      h = s.default.getNick(u, a),
      g = null == p ? f.default.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(f.default.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != h ? h : c.default.getName(p));
    return (0, r.jsx)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: g,
      children: (0, m.renderStreams)(e, t, n, a, i)
    })
  }
}
t.default = i.default.connectStores([u.default], e => {
  let {
    context: t,
    index: a,
    videoStreams: r
  } = e, n = u.default.getAllStats(t)[a], {
    section: i
  } = (0, u.parseSection)(u.default.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let l = null;
  if (null != n && null != n.rtp.inbound) {
    var s;
    l = null !== (s = n.rtp.inbound[i]) && void 0 !== s ? s : []
  }
  return {
    mediaEngineConnectionId: null == n ? void 0 : n.mediaEngineConnectionId,
    userId: i,
    streams: l,
    videoStreams: r
  }
})(p)