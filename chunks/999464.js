n(47120);
var s = n(735250),
  a = n(470079),
  l = n(120356),
  i = n.n(l),
  r = n(481060),
  o = n(231239),
  c = n(881052),
  d = n(153124),
  u = n(888592),
  _ = n(981631),
  N = n(689938),
  E = n(541261);
let m = (0, d.hQ)();
t.Z = e => {
  let {
    email: t,
    setStep: n,
    onBack: l,
    school: d,
    setSchool: I
  } = e, [C, T] = a.useState(null), [h, x] = a.useState(!1), g = async () => {
    T(null), x(!0);
    try {
      await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST)
    } catch (e) {
      T(new c.Hx(e))
    } finally {
      x(!1)
    }
  }, v = async e => {
    null != d && "" !== d && e.charCode === _.yXg.ENTER && await g()
  };
  return (0, s.jsxs)("div", {
    className: E.container,
    children: [(0, s.jsx)("div", {
      className: E.__invalid_topImage
    }), (0, s.jsx)(r.Heading, {
      className: i()(E.centerText, E.header),
      variant: "heading-xl/semibold",
      children: N.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_HEADER
    }), (0, s.jsx)("div", {
      className: E.descriptionWidth,
      children: (0, s.jsx)(r.Text, {
        className: E.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: N.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_DESCRIPTION
      })
    }), (0, s.jsxs)(r.FormItem, {
      className: E.formItem,
      children: [(0, s.jsx)(r.FormTitle, {
        id: m,
        children: N.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_HEADER
      }), (0, s.jsx)(r.TextInput, {
        onKeyPress: v,
        placeholder: N.Z.Messages.HUB_EMAIL_CONNECTION_SCHOOL_SUBMIT_INPUT_PLACEHOLDER,
        onChange: e => {
          I(e)
        },
        error: null == C ? void 0 : C.getAnyErrorMessage(),
        "aria-labelledby": m
      })]
    }), (0, s.jsxs)("div", {
      className: E.footer,
      children: [(0, s.jsx)(r.Button, {
        className: E.backButton,
        onClick: l,
        look: r.Button.Looks.LINK,
        size: r.Button.Sizes.NONE,
        color: r.Button.Colors.PRIMARY,
        children: N.Z.Messages.BACK
      }), (0, s.jsx)(r.Button, {
        onClick: g,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        className: E.__invalid_submitButton,
        submitting: h,
        children: N.Z.Messages.JOIN_WAITLIST
      })]
    })]
  })
}