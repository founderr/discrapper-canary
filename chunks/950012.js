n(47120);
var s = n(735250),
  a = n(470079),
  l = n(994640),
  i = n(247007),
  r = n(999464),
  o = n(503406),
  c = n(463115),
  d = n(888592);
t.Z = e => {
  let {
    onClose: t,
    invite: n,
    forceGuildScrollHeight: u = !0,
    isNUXFlow: _
  } = e, [N, E] = a.useState([d.tF.VERIFY_EMAIL]), [m, I] = a.useState(""), [C, T] = a.useState(""), [h, x] = a.useState(void 0), [g, v] = a.useState([]), S = e => {
    E(N.concat(e).slice(-4))
  };
  switch (N[N.length - 1]) {
    case d.tF.VERIFY_EMAIL:
      return (0, s.jsx)(l.Z, {
        setGuildsInfo: v,
        setStep: S,
        email: m,
        setEmail: I,
        setGuildId: x,
        invite: n,
        onClose: t,
        isNUXFlow: _
      });
    case d.tF.SELECT_SCHOOL:
      return (0, s.jsx)(i.Z, {
        guildsInfo: g,
        setStep: S,
        email: m,
        setGuildId: x,
        forceGuildScrollHeight: u
      });
    case d.tF.SUBMIT_SCHOOL:
      return (0, s.jsx)(r.Z, {
        onBack: () => {
          N.length > 1 && E(N.slice(0, -1).slice(-4))
        },
        setStep: S,
        email: m,
        school: C,
        setSchool: T
      });
    case d.tF.VERIFY_PIN:
      return (0, s.jsx)(o.Z, {
        email: m,
        onClose: t,
        guildId: h
      });
    case d.tF.EMAIL_WAITLIST:
      return (0, s.jsx)(c.Z, {
        setStep: S,
        school: C
      });
    default:
      return null
  }
}