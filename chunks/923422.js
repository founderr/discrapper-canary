n.r(t), n(47120), n(757143);
var r = n(735250),
  u = n(470079),
  s = n(481060),
  a = n(239091),
  o = n(230711),
  i = n(493544),
  l = n(108843),
  c = n(100527),
  d = n(906732),
  E = n(386506),
  M = n(366953),
  I = n(394644),
  S = n(606669),
  T = n(53432),
  m = n(74869),
  Z = n(828064),
  p = n(308512),
  _ = n(594791),
  h = n(393431),
  f = n(981631),
  g = n(689938);
t.default = (0, l.Z)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n
  } = e, [l, c] = u.useState(!1), x = (0, Z.Z)(), C = (0, p.Z)(), j = (0, T.Z)(), A = (0, S.Z)(), R = (0, h.Z)(), b = (0, _.Z)(), L = (0, m.Z)(), {
    analyticsLocations: v
  } = (0, d.ZP)(), N = u.useMemo(() => (0, M.j)(), []);
  async function O() {
    try {
      c(!0), await (0, E.bF)(), window.location.reload(!0)
    } catch (e) {
      c(!1)
    }
  }
  let B = e => {
      switch (e) {
        case f.oAB.GAMES:
          return x;
        case f.oAB.STREAMER_MODE:
          return C;
        case f.oAB.APPEARANCE:
          return j;
        case f.oAB.ACCESSIBILITY:
          return A;
        case f.oAB.VOICE:
          return R;
        case f.oAB.TEXT:
          return b;
        case f.oAB.EXPERIMENTS:
          return L;
        default:
          return null
      }
    },
    G = (0, I.VO)().filter(e => {
      let {
        section: t
      } = e;
      return t !== i.ID.HEADER && t !== i.ID.CUSTOM && t !== i.ID.DIVIDER && "logout" !== t
    }).filter(e => null == e.predicate || e.predicate());
  return (0, r.jsx)(d.Gt, {
    value: v,
    children: (0, r.jsxs)(s.Menu, {
      navId: "user-settings-cog",
      onClose: a.Zy,
      "aria-label": g.Z.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [G.map(e => {
        let {
          section: t,
          label: n,
          onClick: u
        } = e, a = t.replace(/\W/gi, "_");
        return (0, r.jsx)(s.MenuItem, {
          id: a,
          label: n,
          action: () => null != u ? u() : function(e, t) {
            let n = Object.values(f.oAB).filter(t => t === e)[0];
            null != n && o.Z.open(n, void 0, {
              analyticsLocations: t
            })
          }(t, v),
          children: B(t)
        }, a)
      }), e.user.isStaff() && N.length > 0 ? (0, r.jsx)(s.MenuItem, {
        label: "Build overrides",
        id: "build_overrides",
        children: (0, r.jsx)(s.MenuGroup, {
          children: N.map(e => (0, r.jsx)(s.MenuRadioItem, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? void 0 : t.id) === e.id,
            action: async () => {
              if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, E.f0)(e.payload)).status && window.location.reload(!0)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, r.jsx)(s.MenuGroup, {
        children: (0, r.jsx)(s.MenuItem, {
          id: "clear-build-override",
          disabled: l,
          label: g.Z.Messages.CLEAR_BUILD_OVERRIDE,
          action: O,
          color: "danger"
        })
      }) : null]
    })
  })
}, [c.Z.CONTEXT_MENU, c.Z.USER_SETTINGS_MENU])