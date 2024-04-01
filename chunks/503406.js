"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("392711"),
  o = s.n(r),
  c = s("481060"),
  d = s("231239"),
  u = s("881052"),
  _ = s("703656"),
  N = s("153124"),
  E = s("981631"),
  m = s("689938"),
  I = s("920326");
let f = (0, N.uid)();
t.default = e => {
  let {
    email: t,
    guildId: s,
    onClose: l
  } = e, [r, N] = n.useState(""), [C, T] = n.useState(null), S = n.useCallback(async () => {
    if (null != s) try {
      let e = await d.default.verifyCode(r, s, t);
      e.guild && (null == l || l(), (0, _.transitionTo)(E.Routes.CHANNEL(e.guild.id)))
    } catch (e) {
      T(new u.APIError(e))
    }
  }, [r, t, s, l]), g = o().throttle(() => {
    d.default.sendVerificationEmail(t, !0, s)
  }, 1e3), h = async e => {
    null != r && "" !== r && e.charCode === E.KeyboardKeys.ENTER && await S()
  };
  return (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.topImage
    }), (0, a.jsx)(c.Heading, {
      className: i()(I.centerText, I.header),
      variant: "heading-xl/semibold",
      children: m.default.Messages.HUB_VERIFY_EMAIL_ADDRESS
    }), (0, a.jsx)("div", {
      className: I.descriptionWidth,
      children: (0, a.jsx)(c.Text, {
        className: I.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.HUB_PIN_DESCRIPTION.format({
          email: t,
          onClick: g
        })
      })
    }), (0, a.jsxs)(c.FormItem, {
      className: I.formItem,
      children: [(0, a.jsx)(c.FormTitle, {
        id: f,
        children: m.default.Messages.HUB_ENTER_PIN
      }), (0, a.jsx)(c.TextInput, {
        onKeyPress: h,
        onChange: e => {
          null != e && "" !== e && N(e)
        },
        error: null == C ? void 0 : C.getAnyErrorMessage(),
        "aria-labelledby": f
      })]
    }), (0, a.jsx)(c.Button, {
      fullWidth: !0,
      onClick: S,
      size: c.Button.Sizes.LARGE,
      color: c.Button.Colors.BRAND,
      children: (0, a.jsx)(c.Text, {
        className: I.submitText,
        variant: "text-sm/normal",
        children: m.default.Messages.SUBMIT
      })
    })]
  })
}