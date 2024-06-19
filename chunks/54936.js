n.d(t, {
  n: function() {
    return T
  }
}), n(411104);
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(910111),
  o = n(732559),
  c = n(723851),
  u = n(981631),
  d = n(689938),
  E = n(968406);
let _ = {
  [u.TaA.WINDOWS]: {
    icon: c.Z,
    getLabel: () => d.Z.Messages.WINDOWS
  },
  [u.TaA.MACOS]: {
    icon: o.Z,
    getLabel: () => d.Z.Messages.MACOS
  },
  [u.TaA.LINUX]: {
    icon: r.Z,
    getLabel: () => d.Z.Messages.LINUX
  }
};

function I(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = _[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let l = i.icon;
  return (0, s.jsx)(a.Tooltip, {
    text: i.getLabel(),
    children: e => (0, s.jsx)(l, {
      ...e,
      className: n
    })
  })
}
let T = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, s.jsx)("div", {
    className: l()(E.OSSection, n),
    children: t.map(e => (0, s.jsx)(I, {
      operatingSystem: e,
      className: l()(E.purchaseUnitOperatingSystem, i)
    }, e))
  })
}