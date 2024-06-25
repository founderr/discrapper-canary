n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  l = n(231239),
  a = n(129293),
  o = n(388905),
  u = n(703656),
  c = n(108427),
  d = n(844800),
  E = n(580497),
  _ = n(981631),
  h = n(689938),
  I = n(530392);

function N(e) {
  let {
    location: t
  } = e, [N, p] = r.useState(!1), {
    verifySuccess: g,
    verifyErrors: m,
    redirectGuildId: T
  } = (0, i.e7)([d.Z], () => d.Z.getState());
  r.useEffect(() => {
    let e = (0, a.Z)(t);
    l.Z.verify(e), (0, c.e)("verify_hub_email")
  }, [t]);
  let f = () => {
    (0, E.Z)(T), p(!0)
  };
  return N ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Dx, {
      className: I.title,
      children: h.Z.Messages.APP_OPENED_TITLE
    }), (0, s.jsx)(o.DK, {
      className: I.subtitle,
      children: h.Z.Messages.APP_OPENED_BODY
    }), (0, s.jsx)(o.zx, {
      className: I.spacedButton,
      onClick: () => (0, u.uL)(_.Z5c.CHANNEL(T)),
      children: h.Z.Messages.CONTINUE_TO_WEBAPP
    })]
  }) : g ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: I.image,
      src: n(73962)
    }), (0, s.jsx)(o.Dx, {
      className: I.title,
      children: h.Z.Messages.VERIFICATION_VERIFIED
    }), (0, s.jsx)(o.zx, {
      onClick: f,
      children: h.Z.Messages.VERIFICATION_OPEN_DISCORD
    })]
  }) : null != m ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: I.image,
      src: n(375673)
    }), (0, s.jsx)(o.Dx, {
      className: I.title,
      children: h.Z.Messages.VERFICATION_EXPIRED
    }), (0, s.jsx)(o.DK, {
      className: I.subtitle,
      children: h.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
    }), (0, s.jsx)(o.zx, {
      onClick: f,
      children: h.Z.Messages.VERIFICATION_OPEN_DISCORD
    })]
  }) : (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: I.image,
      src: n(892235)
    }), (0, s.jsx)(o.Dx, {
      className: I.title,
      children: h.Z.Messages.VERIFICATION_VERIFYING
    }), (0, s.jsx)(o.DK, {
      className: I.subtitle,
      children: h.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
    }), (0, s.jsx)(o.zx, {
      submitting: !0,
      color: o.zx.Colors.PRIMARY
    })]
  })
}
i.ZP.initialize()