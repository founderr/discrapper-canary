var t = s(735250);
s(470079);
var r = s(481060),
  l = s(366939),
  i = s(853872),
  a = s(212895),
  c = s(296848);
n.Z = function(e) {
  let {
activeSubscription: n,
onNext: s,
isSubmitting: o,
paymentSourceId: u,
buttonLabel: I,
analyticsLocations: _
  } = e, E = async () => {
let e = i.Z.getPaymentSource(u);
null != e && (await (0, a.i1)(u, (0, c.yb)(n)), await l.tq(n, e, n.currency, _), s());
  };
  return (0, t.jsx)(r.Button, {
'data-testid': 'purchase',
onClick: E,
color: r.Button.Colors.GREEN,
submitting: o,
children: I
  });
};