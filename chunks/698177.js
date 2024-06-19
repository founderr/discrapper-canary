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
  h = n(815660),
  I = n(689938),
  p = n(83922),
  N = n(331651);
t.Z = () => {
  let [e, t] = r.useState(""), [i, g] = r.useState(""), [m, T] = r.useState(!1), [f, Z] = r.useState(!1), [A, x] = r.useState(null), [v, O] = r.useState(null), S = (0, a.e7)([d.Z], () => d.Z.getCountryCode()), C = S.code.split(" ")[0], D = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      O(e.body.message)
    }
  }, P = async () => {
    T(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(C + e, i);
      x(null), O(null), Z(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (x(null), O(e.body.message)) : (x(e.body.phone), O(e.body.code))
    } finally {
      T(!1)
    }
  }, R = (0, s.jsxs)(_.ZP, {
    children: [(0, s.jsx)(_.Ee, {
      src: n(292824)
    }), (0, s.jsxs)(_.Dx, {
      className: l()(N.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
      children: [I.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(o.CircleCheckIcon, {
        size: "md",
        color: "currentColor",
        className: N.marginLeft8
      })]
    })]
  });
  return f ? R : (0, s.jsxs)(_.ZP, {
    children: [(0, s.jsx)(_.Dx, {
      children: I.Z.Messages.ENTER_CODE
    }), (0, s.jsx)(_.DK, {
      className: N.marginTop8,
      children: I.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
    }), (0, s.jsxs)(_.gO, {
      className: N.marginTop20,
      children: [(0, s.jsx)(E.Z, {
        label: I.Z.Messages.FORM_LABEL_PHONE_NUMBER,
        alpha2: S.alpha2,
        countryCode: C,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: A
      }), (0, s.jsx)(_.II, {
        className: N.marginTop20,
        label: I.Z.Messages.CONFIRMATION_CODE,
        value: i,
        onChange: g,
        maxLength: h.z,
        error: v
      }), (0, s.jsx)(_.zx, {
        size: _.zx.Sizes.SMALL,
        look: _.zx.Looks.LINK,
        onClick: D,
        children: I.Z.Messages.RESEND_CODE
      }), (0, s.jsx)(_.zx, {
        className: N.marginTop20,
        onClick: P,
        submitting: m,
        children: I.Z.Messages.DONE
      })]
    })]
  })
}