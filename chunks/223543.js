var s = n(735250),
  i = n(470079),
  r = n(442837),
  a = n(893776),
  l = n(129293),
  o = n(388905),
  c = n(108427),
  u = n(314897),
  d = n(689938),
  _ = n(331651);
t.Z = e => {
  let {
    location: t
  } = e, {
    verifyFailed: E,
    verifySucceeded: I
  } = (0, r.cj)([u.default], () => ({
    verifyFailed: u.default.didVerifyFail(),
    verifySucceeded: u.default.didVerifySucceed()
  }));
  return (i.useEffect(() => {
    let e = (0, l.Z)(t);
    null != e && a.Z.authorizePayment(e), (0, c.e)("authorize_payment")
  }, [t]), E) ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)("img", {
      alt: "",
      src: n(375673),
      className: _.marginBottom20
    }), (0, s.jsx)(o.Dx, {
      className: _.marginBottom8,
      children: d.Z.Messages.PAYMENT_AUTHORIZATION_EXPIRED
    }), (0, s.jsx)(o.DK, {
      className: _.marginBottom40,
      children: d.Z.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
    })]
  }) : I ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)("img", {
      alt: "",
      src: n(73962),
      className: _.marginBottom20
    }), (0, s.jsx)(o.Dx, {
      className: _.marginBottom8,
      children: d.Z.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
    }), (0, s.jsx)(o.DK, {
      className: _.marginBottom40,
      children: d.Z.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
    })]
  }) : (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Hh, {}), (0, s.jsx)(o.Dx, {
      children: d.Z.Messages.PAYMENT_AUTHORIZING
    })]
  })
}