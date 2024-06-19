var n = r(735250),
  a = r(470079),
  i = r(442837),
  s = r(481060),
  o = r(226961),
  l = r(481250),
  c = r(689938);
class d extends a.PureComponent {
  render() {
    let {
      outbound: e,
      context: t
    } = this.props;
    return null == e ? (0, n.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    }) : (0, n.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: c.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
      children: (0, l.V)(e, t)
    })
  }
}
t.Z = i.ZP.connectStores([o.ZP], e => {
  let {
    context: t,
    index: r
  } = e, n = o.ZP.getAllStats(t)[r];
  return {
    outbound: null != n ? n.rtp.outbound : null
  }
})(d)