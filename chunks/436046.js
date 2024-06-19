n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  r = n(512722),
  l = n.n(r),
  o = n(442837),
  i = n(692547),
  c = n(481060),
  d = n(771308),
  u = n(13430),
  E = n(594174),
  p = n(63063),
  h = n(981631),
  m = n(723359),
  _ = n(689938),
  f = n(160610);

function N(e) {
  let {
    onComplete: t,
    onClose: n
  } = e, [r, N] = a.useState(null), [T, v] = a.useState(null), [x, A] = a.useState(!1), I = (0, o.e7)([E.default], () => E.default.getCurrentUser()), C = a.createRef();
  async function g(e) {
    e.preventDefault(), l()(null != r, "Cannot submit null birthday."), A(!0);
    try {
      await d.Av(r, m.L0.NEW_USER_FLOW), t()
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth) d.wE(m.L0.NEW_USER_FLOW), d.hp(m.L0.NEW_USER_FLOW), n();
      else {
        var s;
        (null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.username) != null ? v(_.Z.Messages.USER_SETTINGS_UPDATE_FAILURE) : v(null == e ? void 0 : e.body.message)
      }
    }
    A(!1)
  }
  a.useEffect(() => {
    null != I && null != I.nsfwAllowed && t()
  }, [I, t]);
  let b = a.useCallback(e => {
      N(e)
    }, [N]),
    M = a.useCallback(() => {
      var e;
      null === (e = C.current) || void 0 === e || e.focus()
    }, [C]);
  return null == I ? null : (0, s.jsxs)("form", {
    className: f.content,
    onSubmit: g,
    children: [(0, s.jsx)(c.ClydeIcon, {
      size: "custom",
      width: 56,
      height: 40,
      className: f.logo,
      color: i.Z.unsafe_rawColors.BRAND_500.css
    }), (0, s.jsx)(c.Heading, {
      className: f.title,
      variant: "heading-xl/semibold",
      children: _.Z.Messages.NUF_JOIN_SERVER_TITLE_2
    }), (0, s.jsx)(c.Text, {
      color: "text-normal",
      className: f.description,
      variant: "text-md/normal",
      children: _.Z.Messages.NUF_AGE_GATE_BODY.format({
        helpURL: p.Z.getArticleURL(h.BhN.AGE_GATE)
      })
    }), (0, s.jsx)(c.ThemeContextProvider, {
      theme: h.BRd.LIGHT,
      children: (0, s.jsx)(u.Z, {
        required: !0,
        autoFocus: !0,
        wrapperClassName: f.formItem,
        label: _.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
        name: "birthday",
        onChange: b,
        onPopulated: M,
        error: T,
        value: r
      })
    }), (0, s.jsx)("div", {
      className: f.footer,
      children: (0, s.jsx)("div", {
        className: f.buttonWrapper,
        children: (0, s.jsx)(c.Button, {
          buttonRef: C,
          type: "submit",
          size: c.Button.Sizes.LARGE,
          submitting: x,
          disabled: null == r,
          fullWidth: !0,
          children: _.Z.Messages.NEXT
        })
      })
    })]
  })
}