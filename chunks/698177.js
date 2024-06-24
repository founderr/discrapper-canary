n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  a = n(442837),
  o = n(481060),
  c = n(144114),
  u = n(742458),
  d = n(541692),
  E = n(952802),
  _ = n(388905),
  I = n(815660),
  h = n(689938),
  N = n(83922),
  p = n(331651);
t.Z = () => {
  let [e, t] = r.useState(""), [i, g] = r.useState(""), [m, T] = r.useState(!1), [Z, A] = r.useState(!1), [f, x] = r.useState(null), [O, S] = r.useState(null), v = (0, a.e7)([d.Z], () => d.Z.getCountryCode()), D = v.code.split(" ")[0], P = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, C = async () => {
    T(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(D + e, i);
      x(null), S(null), A(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (x(null), S(e.body.message)) : (x(e.body.phone), S(e.body.code))
    } finally {
      T(!1)
    }
  }, R = (0, s.jsxs)(_.ZP, {
    children: [(0, s.jsx)(_.Ee, {
      src: n(292824)
    }), (0, s.jsxs)(_.Dx, {
      className: l()(p.marginTop20, N.flex, N.justifyCenter, N.alignCenter),
      children: [h.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(o.CircleCheckIcon, {
        size: "md",
        color: "currentColor",
        className: p.marginLeft8
      })]
    })]
  });
  return Z ? R : (0, s.jsxs)(_.ZP, {
    children: [(0, s.jsx)(_.Dx, {
      children: h.Z.Messages.ENTER_CODE
    }), (0, s.jsx)(_.DK, {
      className: p.marginTop8,
      children: h.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
    }), (0, s.jsxs)(_.gO, {
      className: p.marginTop20,
      children: [(0, s.jsx)(E.Z, {
        label: h.Z.Messages.FORM_LABEL_PHONE_NUMBER,
        alpha2: v.alpha2,
        countryCode: D,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: f
      }), (0, s.jsx)(_.II, {
        className: p.marginTop20,
        label: h.Z.Messages.CONFIRMATION_CODE,
        value: i,
        onChange: g,
        maxLength: I.z,
        error: O
      }), (0, s.jsx)(_.zx, {
        size: _.zx.Sizes.SMALL,
        look: _.zx.Looks.LINK,
        onClick: P,
        children: h.Z.Messages.RESEND_CODE
      }), (0, s.jsx)(_.zx, {
        className: p.marginTop20,
        onClick: C,
        submitting: m,
        children: h.Z.Messages.DONE
      })]
    })]
  })
}