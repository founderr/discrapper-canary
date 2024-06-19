n(47120);
var s = n(735250),
  a = n(470079),
  l = n(120356),
  i = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(481060),
  d = n(231239),
  u = n(881052),
  _ = n(703656),
  N = n(153124),
  E = n(981631),
  m = n(689938),
  I = n(192690);
let C = (0, N.hQ)();
t.Z = e => {
  let {
    email: t,
    guildId: n,
    onClose: l
  } = e, [r, N] = a.useState(""), [T, h] = a.useState(null), x = a.useCallback(async () => {
    if (null != n) try {
      let e = await d.Z.verifyCode(r, n, t);
      e.guild && (null == l || l(), (0, _.uL)(E.Z5c.CHANNEL(e.guild.id)))
    } catch (e) {
      h(new u.Hx(e))
    }
  }, [r, t, n, l]), g = o().throttle(() => {
    d.Z.sendVerificationEmail(t, !0, n)
  }, 1e3), v = async e => {
    null != r && "" !== r && e.charCode === E.yXg.ENTER && await x()
  };
  return (0, s.jsxs)("div", {
    className: I.container,
    children: [(0, s.jsx)("div", {
      className: I.topImage
    }), (0, s.jsx)(c.Heading, {
      className: i()(I.centerText, I.header),
      variant: "heading-xl/semibold",
      children: m.Z.Messages.HUB_VERIFY_EMAIL_ADDRESS
    }), (0, s.jsx)("div", {
      className: I.descriptionWidth,
      children: (0, s.jsx)(c.Text, {
        className: I.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.Z.Messages.HUB_PIN_DESCRIPTION.format({
          email: t,
          onClick: g
        })
      })
    }), (0, s.jsxs)(c.FormItem, {
      className: I.formItem,
      children: [(0, s.jsx)(c.FormTitle, {
        id: C,
        children: m.Z.Messages.HUB_ENTER_PIN
      }), (0, s.jsx)(c.TextInput, {
        onKeyPress: v,
        onChange: e => {
          null != e && "" !== e && N(e)
        },
        error: null == T ? void 0 : T.getAnyErrorMessage(),
        "aria-labelledby": C
      })]
    }), (0, s.jsx)(c.Button, {
      fullWidth: !0,
      onClick: x,
      size: c.Button.Sizes.LARGE,
      color: c.Button.Colors.BRAND,
      children: (0, s.jsx)(c.Text, {
        className: I.submitText,
        variant: "text-sm/normal",
        children: m.Z.Messages.SUBMIT
      })
    })]
  })
}