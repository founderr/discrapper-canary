"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("650461"),
  r = n("602014"),
  o = n("188837"),
  u = n("496376"),
  d = n("308083"),
  c = n("653196");
t.default = e => {
  let {
    guildId: t,
    onClose: n
  } = e, f = (0, l.useStateFromStores)([i.default], () => null == i.default.getState(t)), [E, h] = s.useState(f ? d.ClanSetupModalPages.INTRO : d.ClanSetupModalPages.SETUP), [_, C] = s.useState(d.ClanSetupSteps.GAMES);
  return (0, a.jsx)("div", {
    className: c.modal,
    children: (0, a.jsx)("div", {
      className: c.modalContents,
      children: (() => {
        switch (E) {
          case d.ClanSetupModalPages.INTRO:
            return (0, a.jsx)(r.ClanSetupIntro, {
              onClose: n,
              setPage: h
            });
          case d.ClanSetupModalPages.ANIMATE:
            return (0, a.jsx)(r.ClanSetupIntroAnimation, {
              guildId: t,
              setPage: h
            });
          case d.ClanSetupModalPages.SETUP:
            return (0, a.jsx)(u.default, {
              guildId: t,
              setPage: h,
              onClose: n,
              currentStep: _,
              setCurrentStep: C
            });
          case d.ClanSetupModalPages.SIGN:
            return (0, a.jsx)(o.default, {
              guildId: t,
              setPage: h,
              onClose: n
            });
          default:
            return null
        }
      })()
    })
  })
}