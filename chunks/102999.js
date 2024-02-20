"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("318696"),
  r = n("915639"),
  o = n("787910"),
  u = n("90404"),
  d = n("782340"),
  c = n("386161");

function f(e) {
  let {
    locale: t,
    children: n
  } = e, [a, s] = (0, l.useStateFromStoresArray)([o.default], () => [o.default.isLoading(), o.default.getError()]);
  return null != s ? (0, i.jsx)(u.default, {
    title: d.default.Messages.I18N_LOCALE_LOADING_ERROR.format({
      locale: t
    }),
    note: (0, i.jsx)("span", {
      children: s.message
    })
  }) : a ? __OVERLAY__ ? null : (0, i.jsx)("div", {
    className: c.loading
  }) : n
}
class E extends a.Component {
  render() {
    let {
      locale: e,
      children: t
    } = this.props;
    return (0, i.jsx)(f, {
      locale: e,
      children: t
    })
  }
  constructor(e) {
    super(e), s.updateLocaleLoadingStatus(e.locale, !0)
  }
}
var h = l.default.connectStores([r.default], () => ({
  locale: r.default.locale
}))(E)