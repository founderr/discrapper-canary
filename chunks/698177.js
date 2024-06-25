n(47120);
var s = n(735250),
  i = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(442837),
  o = n(481060),
  c = n(144114),
  u = n(742458),
  d = n(541692),
  _ = n(952802),
  E = n(388905),
  I = n(815660),
  h = n(689938),
  p = n(83922),
  g = n(331651);
t.Z = () => {
  let [e, t] = i.useState(""), [r, f] = i.useState(""), [N, m] = i.useState(!1), [T, A] = i.useState(!1), [Z, x] = i.useState(null), [S, O] = i.useState(null), v = (0, l.e7)([d.Z], () => d.Z.getCountryCode()), C = v.code.split(" ")[0], D = async () => {
    try {
      await c.Z.resendCode(e)
    } catch (e) {
      O(e.body.message)
    }
  }, P = async () => {
    m(!0);
    try {
      let {
        token: t
      } = await c.Z.verifyPhone(C + e, r);
      x(null), O(null), A(!0), c.Z.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (x(null), O(e.body.message)) : (x(e.body.phone), O(e.body.code))
    } finally {
      m(!1)
    }
  }, R = (0, s.jsxs)(E.ZP, {
    children: [(0, s.jsx)(E.Ee, {
      src: n(292824)
    }), (0, s.jsxs)(E.Dx, {
      className: a()(g.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
      children: [h.Z.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(o.CircleCheckIcon, {
        size: "md",
        color: "currentColor",
        className: g.marginLeft8
      })]
    })]
  });
  return T ? R : (0, s.jsxs)(E.ZP, {
    children: [(0, s.jsx)(E.Dx, {
      children: h.Z.Messages.ENTER_CODE
    }), (0, s.jsx)(E.DK, {
      className: g.marginTop8,
      children: h.Z.Messages.VERIFY_PHONE_FOR_SUPPORT
    }), (0, s.jsxs)(E.gO, {
      className: g.marginTop20,
      children: [(0, s.jsx)(_.Z, {
        label: h.Z.Messages.FORM_LABEL_PHONE_NUMBER,
        alpha2: v.alpha2,
        countryCode: C,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Nz.PHONE,
        error: Z
      }), (0, s.jsx)(E.II, {
        className: g.marginTop20,
        label: h.Z.Messages.CONFIRMATION_CODE,
        value: r,
        onChange: f,
        maxLength: I.z,
        error: S
      }), (0, s.jsx)(E.zx, {
        size: E.zx.Sizes.SMALL,
        look: E.zx.Looks.LINK,
        onClick: D,
        children: h.Z.Messages.RESEND_CODE
      }), (0, s.jsx)(E.zx, {
        className: g.marginTop20,
        onClick: P,
        submitting: N,
        children: h.Z.Messages.DONE
      })]
    })]
  })
}