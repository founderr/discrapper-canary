n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(209185),
  s = n(406128),
  l = n(706454),
  u = n(229588),
  c = n(689938),
  d = n(720631);

function _(e) {
  let {
locale: t,
children: n
  } = e, [i, o] = (0, a.Wu)([u.Z], () => [
u.Z.isLoading(),
u.Z.getError()
  ]);
  return null != o ? (0, r.jsx)(s.Z, {
title: c.Z.Messages.I18N_LOCALE_LOADING_ERROR.format({
  locale: t
}),
note: (0, r.jsx)('span', {
  children: o.message
})
  }) : i ? __OVERLAY__ ? null : (0, r.jsx)('div', {
className: d.loading
  }) : n;
}
class E extends i.Component {
  render() {
let {
  locale: e,
  children: t
} = this.props;
return (0, r.jsx)(_, {
  locale: e,
  children: t
});
  }
  constructor(e) {
super(e), o.$(e.locale, !0);
  }
}
t.Z = a.ZP.connectStores([l.default], () => ({
  locale: l.default.locale
}))(E);