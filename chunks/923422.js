n.r(t), n(47120), n(757143);
var r = n(735250),
  u = n(470079),
  l = n(481060),
  a = n(239091),
  i = n(230711),
  s = n(493544),
  o = n(108843),
  c = n(100527),
  d = n(906732),
  E = n(386506),
  I = n(366953),
  T = n(394644),
  S = n(606669),
  _ = n(53432),
  M = n(74869),
  Z = n(828064),
  N = n(308512),
  m = n(594791),
  f = n(393431),
  A = n(981631),
  g = n(689938);
t.default = (0, o.Z)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n
  } = e, [o, c] = u.useState(!1), R = (0, Z.Z)(), p = (0, N.Z)(), G = (0, _.Z)(), C = (0, S.Z)(), h = (0, f.Z)(), O = (0, m.Z)(), x = (0, M.Z)(), {
    analyticsLocations: v
  } = (0, d.ZP)(), j = u.useMemo(() => (0, I.j)(), []);
  async function D() {
    try {
      c(!0), await (0, E.bF)(), window.location.reload(!0)
    } catch (e) {
      c(!1)
    }
  }
  let L = e => {
      switch (e) {
        case A.oAB.GAMES:
          return R;
        case A.oAB.STREAMER_MODE:
          return p;
        case A.oAB.APPEARANCE:
          return G;
        case A.oAB.ACCESSIBILITY:
          return C;
        case A.oAB.VOICE:
          return h;
        case A.oAB.TEXT:
          return O;
        case A.oAB.EXPERIMENTS:
          return x;
        default:
          return null
      }
    },
    b = (0, T.VO)().filter(e => {
      let {
        section: t
      } = e;
      return t !== s.ID.HEADER && t !== s.ID.CUSTOM && t !== s.ID.DIVIDER && "logout" !== t
    }).filter(e => null == e.predicate || e.predicate());
  return (0, r.jsx)(d.Gt, {
    value: v,
    children: (0, r.jsxs)(l.Menu, {
      navId: "user-settings-cog",
      onClose: a.Zy,
      "aria-label": g.Z.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [b.map(e => {
        let {
          section: t,
          label: n,
          onClick: u
        } = e, a = t.replace(/\W/gi, "_");
        return (0, r.jsx)(l.MenuItem, {
          id: a,
          label: n,
          action: () => null != u ? u() : function(e, t) {
            let n = Object.values(A.oAB).filter(t => t === e)[0];
            null != n && i.Z.open(n, void 0, {
              analyticsLocations: t
            })
          }(t, v),
          children: L(t)
        }, a)
      }), e.user.isStaff() && j.length > 0 ? (0, r.jsx)(l.MenuItem, {
        label: "Build overrides",
        id: "build_overrides",
        children: (0, r.jsx)(l.MenuGroup, {
          children: j.map(e => (0, r.jsx)(l.MenuRadioItem, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? void 0 : t.id) === e.id,
            action: async () => {
              if ((null == t ? void 0 : t.id) !== e.id) 200 === (await (0, E.f0)(e.payload)).status && window.location.reload(!0)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, r.jsx)(l.MenuGroup, {
        children: (0, r.jsx)(l.MenuItem, {
          id: "clear-build-override",
          disabled: o,
          label: g.Z.Messages.CLEAR_BUILD_OVERRIDE,
          action: D,
          color: "danger"
        })
      }) : null]
    })
  })
}, [c.Z.CONTEXT_MENU, c.Z.USER_SETTINGS_MENU])