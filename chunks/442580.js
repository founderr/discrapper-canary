"use strict";
r.r(t);
var a = r("735250"),
  n = r("470079"),
  i = r("392711"),
  s = r.n(i),
  l = r("481060"),
  o = r("481250"),
  d = r("513547"),
  u = r("689938");
class c extends n.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == e) return (0, a.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    });
    let t = s().map(e, (e, t) => {
      if (!(d.hidden[t] || void 0 === e)) return (0, a.jsx)(d.Item, {
        label: t,
        value: e
      }, t)
    });
    return (0, a.jsx)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: u.default.Messages.RTC_DEBUG_SCREENSHARE,
      children: (0, o.renderTwoColumns)(t)
    })
  }
}
t.default = c