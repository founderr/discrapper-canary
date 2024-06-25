n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  r = n(442837),
  a = n(231239),
  l = n(129293),
  o = n(388905),
  c = n(703656),
  u = n(108427),
  d = n(844800),
  _ = n(580497),
  E = n(981631),
  I = n(689938),
  h = n(530392);

function p(e) {
  let {
    location: t
  } = e, [p, g] = i.useState(!1), {
    verifySuccess: f,
    verifyErrors: N,
    redirectGuildId: m
  } = (0, r.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, l.Z)(t);
    a.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let T = () => {
    (0, _.Z)(m), g(!0)
  };
  return p ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Dx, {
      className: h.title,
      children: I.Z.Messages.APP_OPENED_TITLE
    }), (0, s.jsx)(o.DK, {
      className: h.subtitle,
      children: I.Z.Messages.APP_OPENED_BODY
    }), (0, s.jsx)(o.zx, {
      className: h.spacedButton,
      onClick: () => (0, c.uL)(E.Z5c.CHANNEL(m)),
      children: I.Z.Messages.CONTINUE_TO_WEBAPP
    })]
  }) : f ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: h.image,
      src: n(73962)
    }), (0, s.jsx)(o.Dx, {
      className: h.title,
      children: I.Z.Messages.VERIFICATION_VERIFIED
    }), (0, s.jsx)(o.zx, {
      onClick: T,
      children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
    })]
  }) : null != N ? (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: h.image,
      src: n(375673)
    }), (0, s.jsx)(o.Dx, {
      className: h.title,
      children: I.Z.Messages.VERFICATION_EXPIRED
    }), (0, s.jsx)(o.DK, {
      className: h.subtitle,
      children: I.Z.Messages._AUTH_VERFICATION_EXPIRED_SUGGESTION
    }), (0, s.jsx)(o.zx, {
      onClick: T,
      children: I.Z.Messages.VERIFICATION_OPEN_DISCORD
    })]
  }) : (0, s.jsxs)(o.ZP, {
    children: [(0, s.jsx)(o.Ee, {
      className: h.image,
      src: n(892235)
    }), (0, s.jsx)(o.Dx, {
      className: h.title,
      children: I.Z.Messages.VERIFICATION_VERIFYING
    }), (0, s.jsx)(o.DK, {
      className: h.subtitle,
      children: I.Z.Messages.ACTION_MAY_TAKE_A_MOMENT
    }), (0, s.jsx)(o.zx, {
      submitting: !0,
      color: o.zx.Colors.PRIMARY
    })]
  })
}
r.ZP.initialize()