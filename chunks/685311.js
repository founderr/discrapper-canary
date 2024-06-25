n(47120);
var s, i, r = n(735250),
  a = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(536285),
  u = n(857458),
  d = n(388905),
  _ = n(703656),
  E = n(689938),
  I = n(331651);
(i = s || (s = {}))[i.INITIAL = 0] = "INITIAL", i[i.RPC_CONNECTED = 1] = "RPC_CONNECTED", i[i.APP_OPENING = 2] = "APP_OPENING", i[i.APP_OPENED = 3] = "APP_OPENED";
t.Z = function(e) {
  let {
    match: t,
    location: n,
    attemptDeepLink: s
  } = e, [i, l] = a.useState(0);
  a.useEffect(() => {
    c.default.once("connected", () => {
      l(1)
    }), c.default.once("disconnected", () => {
      (0, _.uL)((0, u.M)())
    }), c.default.connect()
  }, []), a.useEffect(() => {
    if (0 !== i) return;
    let e = setTimeout(() => (0, _.uL)((0, u.M)()), 3e3);
    return () => clearTimeout(e)
  }, [i]);
  let h = a.useCallback(async (e, t) => {
    try {
      l(2), await s(e, t), l(3)
    } catch (e) {
      console.error("Error opening deeplink", e)
    }
  }, [s]);
  if ((0, _.DB)()) return null;
  switch (i) {
    case 1:
      return (0, r.jsxs)(d.ZP, {
        children: [(0, r.jsx)(d.Dx, {
          className: I.marginBottom8,
          children: E.Z.Messages.DEEPLINK_BROWSER_TITLE
        }), (0, r.jsx)(d.DK, {
          children: E.Z.Messages.DEEPLINK_BROWSER_PROMPT
        }), (0, r.jsx)(d.zx, {
          className: I.marginTop40,
          onClick: () => h(t, n),
          children: E.Z.Messages.OPEN_IN_APP
        }), (0, r.jsx)(d.zx, {
          className: o()(I.marginTop8, I.marginCenterHorz),
          color: d.zx.Colors.LINK,
          look: d.zx.Looks.LINK,
          onClick: () => (0, _.uL)((0, u.M)()),
          children: E.Z.Messages.CONTINUE_IN_BROWSER
        })]
      });
    case 0:
    case 2:
      return (0, r.jsxs)(d.ZP, {
        children: [(0, r.jsx)(d.Dx, {
          children: E.Z.Messages.APP_OPENING
        }), (0, r.jsx)(d.Hh, {})]
      });
    case 3:
      return (0, r.jsxs)(d.ZP, {
        children: [(0, r.jsx)(d.Dx, {
          className: I.marginBottom8,
          children: E.Z.Messages.APP_OPENED_TITLE
        }), (0, r.jsx)(d.DK, {
          children: E.Z.Messages.DEEPLINK_BROWSER_APP_OPENED
        })]
      })
  }
}