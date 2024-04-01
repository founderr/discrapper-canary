"use strict";
n.r(t), n.d(t, {
  OperatingSystemSection: function() {
    return T
  }
}), n("411104");
var s = n("735250");
n("470079");
var l = n("803997"),
  a = n.n(l),
  i = n("481060"),
  r = n("910111"),
  o = n("732559"),
  u = n("723851"),
  d = n("981631"),
  c = n("689938"),
  E = n("294549");
let f = {
  [d.OperatingSystems.WINDOWS]: {
    icon: u.default,
    getLabel: () => c.default.Messages.WINDOWS
  },
  [d.OperatingSystems.MACOS]: {
    icon: o.default,
    getLabel: () => c.default.Messages.MACOS
  },
  [d.OperatingSystems.LINUX]: {
    icon: r.default,
    getLabel: () => c.default.Messages.LINUX
  }
};

function _(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, l = f[t];
  if (null == l) throw Error("Unexpected operating system: ".concat(t));
  let a = l.icon;
  return (0, s.jsx)(i.Tooltip, {
    text: l.getLabel(),
    children: e => (0, s.jsx)(a, {
      ...e,
      className: n
    })
  })
}
let T = e => {
  let {
    systems: t,
    className: n,
    iconClassName: l
  } = e;
  return (0, s.jsx)("div", {
    className: a()(E.OSSection, n),
    children: t.map(e => (0, s.jsx)(_, {
      operatingSystem: e,
      className: a()(E.purchaseUnitOperatingSystem, l)
    }, e))
  })
}