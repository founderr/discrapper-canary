n(47120);
var s = n(735250),
  a = n(470079),
  l = n(120356),
  i = n.n(l),
  r = n(481060),
  o = n(231239),
  c = n(881052),
  d = n(592125),
  u = n(153124),
  _ = n(888592),
  N = n(981631),
  E = n(689938),
  m = n(782664);
let I = (0, u.hQ)();
t.Z = e => {
  let {
    setStep: t,
    setGuildsInfo: n,
    email: l,
    setEmail: u,
    setGuildId: C,
    invite: T,
    onClose: h,
    isNUXFlow: x
  } = e, [g, v] = a.useState(null), [S, A] = a.useState(!1), f = async e => {
    e.preventDefault(), v(null), A(!0);
    try {
      var s, a, i, r, u;
      let e = null !== (u = null !== (r = null == T ? void 0 : null === (s = T.guild) || void 0 === s ? void 0 : s.id) && void 0 !== r ? r : null === (a = d.Z.getChannel(null == T ? void 0 : null === (i = T.channel) || void 0 === i ? void 0 : i.id)) || void 0 === a ? void 0 : a.getGuildId()) && void 0 !== u ? u : void 0;
      e === _.fQ && (e = void 0);
      let c = await o.Z.sendVerificationEmail(l, !0, e),
        N = c.guilds_info;
      c.has_matching_guild ? (C(e), t(_.tF.VERIFY_PIN)) : 0 === N.length ? t(_.tF.SUBMIT_SCHOOL) : 1 === N.length ? (C(N[0].id), await o.Z.sendVerificationEmail(l, !0, N[0].id), t(_.tF.VERIFY_PIN)) : (n(N), t(_.tF.SELECT_SCHOOL))
    } catch (e) {
      v(new c.Hx(e))
    } finally {
      A(!1)
    }
  }, p = E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_HEADER, O = E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_DESCRIPTION;
  if (x) p = E.Z.Messages.HUB_EMAIL_CONNECTION_NUX_HEADER, O = E.Z.Messages.HUB_EMAIL_CONNECTION_NUX_CONTENT_DESCRIPTION;
  else if ((null == T ? void 0 : T.guild) != null && T.guild.id !== _.fQ && (null == T ? void 0 : T.approximate_member_count) != null) {
    let {
      name: e
    } = T.guild;
    p = E.Z.Messages.HUB_EMAIL_CONNECTION_INVITE_HEADER.format({
      guildName: e,
      count: T.approximate_member_count
    })
  }
  return (0, s.jsxs)("div", {
    className: m.container,
    children: [(0, s.jsx)("div", {
      className: m.topImage
    }), (0, s.jsx)(r.Heading, {
      className: i()(m.centerText, m.header),
      variant: "heading-xl/semibold",
      children: p
    }), (0, s.jsx)("div", {
      className: m.descriptionWidth,
      children: (0, s.jsx)(r.Text, {
        className: m.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: O
      })
    }), (0, s.jsxs)("form", {
      className: m.formContent,
      onSubmit: f,
      children: [(0, s.jsxs)(r.FormItem, {
        children: [(0, s.jsx)(r.FormTitle, {
          id: I,
          children: E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_HEADER
        }), (0, s.jsx)(r.TextInput, {
          placeholder: E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_PLACEHOLDER,
          onChange: e => {
            u(e)
          },
          error: null == g ? void 0 : g.getAnyErrorMessage(),
          "aria-labelledby": I
        })]
      }), (0, s.jsx)(r.Text, {
        color: "header-secondary",
        className: m.formDescription,
        variant: "text-sm/normal",
        children: E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_INPUT_DESCRIPTION
      }), (0, s.jsx)(r.Button, {
        type: "submit",
        size: r.Button.Sizes.LARGE,
        color: r.Button.Colors.BRAND,
        className: m.submitButton,
        submitting: S,
        children: E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_BUTTON
      }), (0, s.jsx)(r.Text, {
        className: m.termsPhrase,
        color: "header-secondary",
        variant: "text-xs/normal",
        children: E.Z.Messages.HUB_EMAIL_CONNECTION_CONTENT_TOS_AND_PP.format({
          termsURL: N.EYA.TERMS,
          privacyURL: N.EYA.PRIVACY
        })
      }), x && (0, s.jsx)(r.Button, {
        look: r.Button.Looks.LINK,
        onClick: h,
        className: m.cancelButton,
        children: E.Z.Messages.HUB_EMAIL_CONNECTION_CANCEL
      })]
    })]
  })
}