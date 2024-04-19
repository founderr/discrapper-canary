"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("231239"),
  c = s("881052"),
  d = s("153124"),
  u = s("888592"),
  _ = s("981631"),
  N = s("689938"),
  E = s("670809");
let m = (0, d.uid)();
t.default = e => {
  let {
    email: t,
    setStep: s,
    onBack: l,
    school: d,
    setSchool: I
  } = e, [f, C] = n.useState(null), [T, S] = n.useState(!1), g = async () => {
    C(null), S(!0);
    try {
      await o.default.signup(t, d), s(u.HubEmailConnectionSteps.EMAIL_WAITLIST)
    } catch (e) {
      C(new c.APIError(e))
    } finally {
      S(!1)
    }
  }, h = async e => {
    null != d && "" !== d && e.charCode === _.KeyboardKeys.ENTER && await g()
  };
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.__invalid_topImage
    }), (0, a.jsx)(r.Heading, {
      className: i()(E.centerText, E.header),
      variant: "heading-xl/semibold",
      children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
    }), (0, a.jsx)("div", {
      className: E.descriptionWidth,
      children: (0, a.jsx)(r.Text, {
        className: E.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
      })
    }), (0, a.jsxs)(r.FormItem, {
      className: E.formItem,
      children: [(0, a.jsx)(r.FormTitle, {
        id: m,
        children: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
      }), (0, a.jsx)(r.TextInput, {
        onKeyPress: h,
        placeholder: N.default.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
        onChange: e => {
          I(e)
        },
        error: null == f ? void 0 : f.getAnyErrorMessage(),
        "aria-labelledby": m
      })]
    }), (0, a.jsxs)("div", {
      className: E.footer,
      children: [(0, a.jsx)(r.Button, {
        className: E.backButton,
        onClick: l,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.NONE,
        color: r.Button.Colors.PRIMARY,
        children: N.default.Messages.BACK
      }), (0, a.jsx)(r.Button, {
        onClick: g,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        className: E.__invalid_submitButton,
        submitting: T,
        children: N.default.Messages.JOIN_WAITLIST
      })]
    })]
  })
}