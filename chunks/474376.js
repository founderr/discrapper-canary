n.d(t, {
  g: function() {
    return p
  }
}), n(653041);
var s = n(735250);
n(470079);
var i = n(442837),
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
  T = n(689938),
  g = n(886085);

function p() {
  let e = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
    t = (0, i.e7)([o.Z], () => o.Z.hidePersonalInformation),
    {
      multiAccountUsers: n
    } = (0, _.L)(),
    p = t => {
      if (t !== (null == e ? void 0 : e.id)) u.default.track(m.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: m.jXE.PROFILE_POPOUT
        }
      }), E.yD(t)
    },
    N = n.map(n => {
      let i = new r.Z(n),
        o = i.id === (null == e ? void 0 : e.id),
        c = n.tokenStatus === h.q.INVALID,
        u = t ? null : "#".concat(i.discriminator);
      return (0, s.jsx)(l.MenuItem, {
        id: i.id,
        focusedClassName: g.focused,
        label: e => {
          let {
            isFocused: r
          } = e;
          return (0, s.jsxs)("div", {
            className: g.userMenuItem,
            children: [(0, s.jsx)(l.Avatar, {
              src: i.getAvatarURL(void 0, 40),
              size: l.AvatarSizes.SIZE_24,
              "aria-label": n.username
            }), (0, s.jsxs)("div", {
              className: g.userMenuUsername,
              children: [(0, s.jsx)(l.Text, {
                className: g.userMenuText,
                variant: "text-sm/normal",
                children: d.ZP.getUserTag(i, {
                  mode: "username",
                  identifiable: t ? "never" : "always"
                })
              }), !i.isPomelo() && (0, s.jsx)(l.Text, {
                className: g.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, s.jsx)(l.CircleCheckIcon, {
              size: "sm",
              color: (0, a.Lq)(r ? m.Ilk.WHITE_500 : m.Ilk.BRAND_500),
              secondaryColor: (0, a.Lq)(r ? m.Ilk.BRAND_500 : m.Ilk.WHITE_500),
              className: g.activeIcon
            }), c && (0, s.jsx)(l.CircleExclamationPointIcon, {
              color: (0, a.Lq)(m.Ilk.RED_400),
              secondaryColor: (0, a.Lq)(m.Ilk.WHITE_500),
              size: "xs",
              className: g.activeIcon
            })]
          })
        },
        action: () => {
          c ? (0, I.Z)() : p(i.id)
        }
      }, i.id)
    });
  return N.push((0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.MenuSeparator, {}), (0, s.jsx)(l.MenuItem, {
      id: "manage-accounts",
      label: T.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
      action: I.Z
    })]
  })), N
}