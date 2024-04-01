"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("994640"),
  i = s("247007"),
  r = s("999464"),
  o = s("503406"),
  c = s("463115"),
  d = s("888592");
t.default = e => {
  let {
    onClose: t,
    invite: s,
    forceGuildScrollHeight: u = !0,
    isNUXFlow: _
  } = e, [N, E] = n.useState([d.HubEmailConnectionSteps.VERIFY_EMAIL]), [m, I] = n.useState(""), [f, C] = n.useState(""), [T, S] = n.useState(void 0), [g, h] = n.useState([]), p = e => {
    E(N.concat(e).slice(-4))
  };
  switch (N[N.length - 1]) {
    case d.HubEmailConnectionSteps.VERIFY_EMAIL:
      return (0, a.jsx)(l.default, {
        setGuildsInfo: h,
        setStep: p,
        email: m,
        setEmail: I,
        setGuildId: S,
        invite: s,
        onClose: t,
        isNUXFlow: _
      });
    case d.HubEmailConnectionSteps.SELECT_SCHOOL:
      return (0, a.jsx)(i.default, {
        guildsInfo: g,
        setStep: p,
        email: m,
        setGuildId: S,
        forceGuildScrollHeight: u
      });
    case d.HubEmailConnectionSteps.SUBMIT_SCHOOL:
      return (0, a.jsx)(r.default, {
        onBack: () => {
          N.length > 1 && E(N.slice(0, -1).slice(-4))
        },
        setStep: p,
        email: m,
        school: f,
        setSchool: C
      });
    case d.HubEmailConnectionSteps.VERIFY_PIN:
      return (0, a.jsx)(o.default, {
        email: m,
        onClose: t,
        guildId: T
      });
    case d.HubEmailConnectionSteps.EMAIL_WAITLIST:
      return (0, a.jsx)(c.default, {
        setStep: p,
        school: f
      });
    default:
      return null
  }
}