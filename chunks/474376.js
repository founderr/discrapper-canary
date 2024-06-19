n.d(t, {
  g: function() {
    return T
  }
}), n(653041);
var i = n(735250);
n(470079);
var s = n(442837),
  l = n(481060),
  a = n(44315),
  r = n(598077),
  o = n(246946),
  c = n(594174),
  u = n(626135),
  d = n(51144),
  E = n(480387),
  h = n(726745),
  _ = n(251423),
  I = n(383832),
  m = n(981631),
  g = n(689938),
  p = n(886085);

function T() {
  let e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
    t = (0, s.e7)([o.Z], () => o.Z.hidePersonalInformation),
    {
      multiAccountUsers: n
    } = (0, _.L)(),
    T = t => {
      if (t !== (null == e ? void 0 : e.id)) u.default.track(m.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: m.jXE.PROFILE_POPOUT
        }
      }), E.yD(t)
    },
    N = n.map(n => {
      let s = new r.Z(n),
        o = s.id === (null == e ? void 0 : e.id),
        c = n.tokenStatus === h.q.INVALID,
        u = t ? null : "#".concat(s.discriminator);
      return (0, i.jsx)(l.MenuItem, {
        id: s.id,
        focusedClassName: p.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, i.jsxs)("div", {
            className: p.userMenuItem,
            children: [(0, i.jsx)(l.Avatar, {
              src: s.getAvatarURL(void 0, 40),
              size: l.AvatarSizes.SIZE_24,
              "aria-label": n.username
            }), (0, i.jsxs)("div", {
              className: p.userMenuUsername,
              children: [(0, i.jsx)(l.Text, {
                className: p.userMenuText,
                variant: "text-sm/normal",
                children: d.ZP.getUserTag(s, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !s.isPomelo() && (0, i.jsx)(l.Text, {
                className: p.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, i.jsx)(l.CircleCheckIcon, {
              size: "sm",
              color: (0, a.Lq)(r ? m.Ilk.WHITE_500 : m.Ilk.BRAND_500),
              secondaryColor: (0, a.Lq)(r ? m.Ilk.BRAND_500 : m.Ilk.WHITE_500),
              className: p.activeIcon
            }), c && (0, i.jsx)(l.CircleExclamationPointIcon, {
              color: (0, a.Lq)(m.Ilk.RED_400),
              secondaryColor: (0, a.Lq)(m.Ilk.WHITE_500),
              size: "xs",
              className: p.activeIcon
            })]
          })
        },
        action: () => {
          c ? (0, I.Z)() : T(s.id)
        }
      }, s.id)
    });
  return N.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.MenuSeparator, {}), (0, i.jsx)(l.MenuItem, {
      id: "manage-accounts",
      label: g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: I.Z
    })]
  })), N
}