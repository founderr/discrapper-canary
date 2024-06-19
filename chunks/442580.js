var n = r(735250),
  a = r(470079),
  i = r(392711),
  s = r.n(i),
  o = r(481060),
  l = r(481250),
  c = r(513547),
  d = r(689938);
class u extends a.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == e) return (0, n.jsx)(o.Spinner, {
      type: o.Spinner.Type.SPINNING_CIRCLE
    });
    let t = s().map(e, (e, t) => {
      if (!(c.al[t] || void 0 === e)) return (0, n.jsx)(c.ck, {
        label: t,
        value: e
      }, t)
    });
    return (0, n.jsx)(o.FormSection, {
      tag: o.FormTitleTags.H2,
      title: d.Z.Messages.RTC_DEBUG_SCREENSHARE,
      children: (0, l.a)(t)
    })
  }
}
t.Z = u