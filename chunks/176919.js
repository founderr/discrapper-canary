"use strict";
n.r(t), n.d(t, {
  PaymentAuthenticationState: function() {
    return u
  },
  usePaymentAuthenticationPoller: function() {
    return _
  },
  usePaymentStepForAuthentication: function() {
    return d
  }
});
var r, u, i = n("470079"),
  a = n("442837"),
  l = n("846519"),
  o = n("355467"),
  s = n("38618"),
  E = n("409813"),
  S = n("505649");

function d(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    u = arguments.length > 4 ? arguments[4] : void 0;
  i.useEffect(() => {
    null != e && (1 === t && e !== E.Step.AWAITING_AUTHENTICATION ? n(E.Step.AWAITING_AUTHENTICATION) : e === E.Step.AWAITING_AUTHENTICATION && (2 === t ? n(E.Step.REVIEW) : 3 === t && (r ? null != u ? u() : n(E.Step.REVIEW) : n(E.Step.CONFIRM))))
  }, [e, t, n, r, u])
}(r = u || (u = {}))[r.PENDING = 1] = "PENDING", r[r.ERROR = 2] = "ERROR", r[r.NONE = 3] = "NONE";

function _(e) {
  let t = (0, a.useStateFromStores)([S.default], () => S.default.awaitingPaymentId),
    n = (0, a.useStateFromStores)([s.default], () => s.default.isConnected()),
    r = i.useRef(new l.Interval);
  i.useEffect(() => {
    n || null == t || 1 !== e ? r.current.stop() : r.current.start(5e3, () => (0, o.fetchPayment)(t))
  }, [t, e, n])
}