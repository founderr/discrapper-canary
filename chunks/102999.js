"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  a = E("318696"),
  r = E("915639"),
  i = E("787910"),
  I = E("90404"),
  T = E("782340"),
  s = E("743046");

function S(e) {
  let {
    locale: _,
    children: E
  } = e, [o, a] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.isLoading(), i.default.getError()]);
  return null != a ? (0, t.jsx)(I.default, {
    title: T.default.Messages.I18N_LOCALE_LOADING_ERROR.format({
      locale: _
    }),
    note: (0, t.jsx)("span", {
      children: a.message
    })
  }) : o ? __OVERLAY__ ? null : (0, t.jsx)("div", {
    className: s.loading
  }) : E
}
class N extends o.Component {
  render() {
    let {
      locale: e,
      children: _
    } = this.props;
    return (0, t.jsx)(S, {
      locale: e,
      children: _
    })
  }
  constructor(e) {
    super(e), a.updateLocaleLoadingStatus(e.locale, !0)
  }
}
var O = n.default.connectStores([r.default], () => ({
  locale: r.default.locale
}))(N)