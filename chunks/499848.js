r(411104);
var n = r(735250),
  a = r(470079),
  i = r(442837),
  s = r(481060),
  o = r(271383),
  l = r(19780),
  c = r(226961),
  d = r(594174),
  u = r(51144),
  m = r(481250),
  p = r(689938);
class h extends a.PureComponent {
  render() {
    let {
      streams: e,
      context: t,
      userId: r,
      mediaEngineConnectionId: a,
      videoStreams: i
    } = this.props;
    if (null == r || null == e || 0 === e.length) return (0, n.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    });
    let c = l.Z.getGuildId(),
      h = d.default.getUser(r),
      g = o.ZP.getNick(c, r),
      f = null == h ? p.Z.Messages.RTC_DEBUG_RTP_INBOUND : "".concat(p.Z.Messages.RTC_DEBUG_RTP_INBOUND, " — ").concat(null != g ? g : u.ZP.getName(h));
    return (0, n.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: f,
      children: (0, m.V)(e, t, a, r, i)
    })
  }
}
t.Z = i.ZP.connectStores([c.ZP], e => {
  let {
    context: t,
    index: r,
    videoStreams: n
  } = e, a = c.ZP.getAllStats(t)[r], {
    section: i
  } = (0, c.fZ)(c.ZP.getSection());
  if (null == i) throw Error("Unrecognized section format");
  let s = null;
  if (null != a && null != a.rtp.inbound) {
    var o;
    s = null !== (o = a.rtp.inbound[i]) && void 0 !== o ? o : []
  }
  return {
    mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
    userId: i,
    streams: s,
    videoStreams: n
  }
})(h)