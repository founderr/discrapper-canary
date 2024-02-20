"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  u = n("878720"),
  o = n("345327"),
  d = n("25033"),
  c = n("589252"),
  f = n("124969"),
  E = n("578706"),
  I = n("482931"),
  _ = n("782340"),
  p = n("125047"),
  h = n("890957"),
  T = () => {
    let [e, t] = a.useState(""), [l, T] = a.useState(""), [N, g] = a.useState(!1), [m, A] = a.useState(!1), [S, v] = a.useState(null), [C, R] = a.useState(null), O = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), x = O.code.split(" ")[0], L = async () => {
      try {
        await u.default.resendCode(e)
      } catch (e) {
        R(e.body.message)
      }
    }, M = async () => {
      g(!0);
      try {
        let {
          token: t
        } = await u.default.verifyPhone(x + e, l);
        v(null), R(null), A(!0), u.default.validatePhoneForSupport(t)
      } catch (e) {
        e.body.message ? (v(null), R(e.body.message)) : (v(e.body.phone), R(e.body.code))
      } finally {
        g(!1)
      }
    }, D = (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Image, {
        src: n("229483")
      }), (0, s.jsxs)(f.Title, {
        className: i(h.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
        children: [_.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
          className: h.marginLeft8
        })]
      })]
    });
    return m ? D : (0, s.jsxs)(f.default, {
      children: [(0, s.jsx)(f.Title, {
        children: _.default.Messages.ENTER_CODE
      }), (0, s.jsx)(f.SubTitle, {
        className: h.marginTop8,
        children: _.default.Messages.VERIFY_PHONE_FOR_SUPPORT
      }), (0, s.jsxs)(f.Block, {
        className: h.marginTop20,
        children: [(0, s.jsx)(c.default, {
          label: _.default.Messages.FORM_LABEL_PHONE_NUMBER,
          alpha2: O.alpha2,
          countryCode: x,
          value: e,
          autoComplete: "off",
          spellCheck: "false",
          onChange: t,
          forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
          error: S
        }), (0, s.jsx)(f.Input, {
          className: h.marginTop20,
          label: _.default.Messages.CONFIRMATION_CODE,
          value: l,
          onChange: T,
          maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
          error: C
        }), (0, s.jsx)(f.Button, {
          size: f.Button.Sizes.SMALL,
          look: f.Button.Looks.LINK,
          onClick: L,
          children: _.default.Messages.RESEND_CODE
        }), (0, s.jsx)(f.Button, {
          className: h.marginTop20,
          onClick: M,
          submitting: N,
          children: _.default.Messages.DONE
        })]
      })]
    })
  }