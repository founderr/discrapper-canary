n(47120);
var s = n(735250),
  r = n(470079),
  i = n(120356),
  l = n.n(i),
  a = n(442837),
  o = n(481060),
  u = n(144114),
  c = n(742458),
  d = n(541692),
  E = n(952802),
  _ = n(388905),
  h = n(815660),
  I = n(689938),
  N = n(83922),
  p = n(331651);
t.Z = () => {
  let [e, t] = r.useState(""), [i, g] = r.useState(""), [m, T] = r.useState(!1), [f, A] = r.useState(!1), [Z, x] = r.useState(null), [O, S] = r.useState(null), v = (0, a.e7)([d.Z], () => d.Z.getCountryCode()), P = v.code.split(" ")[0], D = async () => {
    try {
      await u.Z.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, C = async () => {
    T(!0);
    try {
      let {
        token: t
      } = await u.Z.verifyPhone(P + e, i);
      x(null), S(null), A(!0), u.Z.validatePhoneForSupport(t)
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
      children: [I.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(o.CircleCheckIcon, {
        size: "md",
        color: "currentColor",
        className: p.marginLeft8
      })]
    })]
  });
  return f ? R : (0, s.jsxs)(_.ZP, {
    children: [(0, s.jsx)(_.Dx, {
      children: I.Z.Messages.ENTER_CODE
    }), (0, s.jsx)(_.DK, {
      className: p.marginTop8,
      children: I.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
    }), (0, s.jsxs)(_.gO, {
      className: p.marginTop20,
      children: [(0, s.jsx)(E.Z, {
        label: I.Z.Messages.FORM_LABEL_PHONE_NUMBER,
        alpha2: v.alpha2,
        countryCode: P,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: c.Nz.PHONE,
        error: Z
      }), (0, s.jsx)(_.II, {
        className: p.marginTop20,
        label: I.Z.Messages.CONFIRMATION_CODE,
        value: i,
        onChange: g,
        maxLength: h.z,
        error: O
      }), (0, s.jsx)(_.zx, {
        size: _.zx.Sizes.SMALL,
        look: _.zx.Looks.LINK,
        onClick: D,
        children: I.Z.Messages.RESEND_CODE
      }), (0, s.jsx)(_.zx, {
        className: p.marginTop20,
        onClick: C,
        submitting: m,
        children: I.Z.Messages.DONE
      })]
    })]
  })
}