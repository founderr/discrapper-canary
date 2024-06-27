"use strict";
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(367907),
  l = n(829883),
  u = n(623624),
  _ = n(973542),
  c = n(703656),
  d = n(592125),
  E = n(430824),
  I = n(944486),
  T = n(514342),
  h = n(709586),
  f = n(176278),
  S = n(626135),
  A = n(524444),
  N = n(981631),
  m = n(176505),
  O = n(689938),
  R = n(493633);
t.Z = e => {
  let {
    roleIcon: t,
    guild: n
  } = e, {
    name: p
  } = t;
  r.useEffect(() => {
    S.default.track(N.rMx.OPEN_POPOUT, {
      type: "Role Icon Popout",
      guild_id: n.id,
      ...(0, a.v_)(d.Z.getChannel(I.Z.getChannelId(n.id)))
    })
  }, []);
  let g = (0, s.e7)([E.Z], () => null != t.roleId ? E.Z.getRole(n.id, t.roleId) : void 0),
    C = (0, _.Z)(g),
    v = C ? O.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
      name: p
    }) : O.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
      name: p
    }),
    L = {
      ...t,
      src: null == t.src ? t.src : (0, l.o)(t.src, 40),
      size: 40
    },
    D = C ? () => {
      (0, c.uL)(N.Z5c.CHANNEL(n.id, m.oC.ROLE_SUBSCRIPTIONS))
    } : () => {
      (0, u.f)({
        guildId: n.id,
        location: {
          section: N.jXE.ROLE_ICON_POPOUT
        }
      })
    };
  return (0, i.jsx)(o.Dialog, {
    children: (0, i.jsx)(A.W_, {
      children: (0, i.jsxs)("div", {
        className: R.popoutContainer,
        children: [(0, i.jsxs)("div", {
          className: R.mainContent,
          children: [(0, i.jsx)("div", {
            className: R.roleIconContainer,
            children: (0, i.jsx)(f.Z, {
              ...L,
              enableTooltip: !1,
              className: R.__invalid_roleIcon,
              enableHeight: !1
            })
          }), (0, i.jsxs)("div", {
            className: R.truncatingText,
            children: [(0, i.jsx)(o.Heading, {
              variant: "heading-md/semibold",
              className: R.roleName,
              children: (0, i.jsx)(T.Z, {
                children: p
              })
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              children: v
            })]
          })]
        }), (0, i.jsxs)(o.Button, {
          size: o.Button.Sizes.SMALL,
          color: o.Button.Colors.PRIMARY,
          className: R.ctaButton,
          innerClassName: R.ctaButtonContent,
          fullWidth: !0,
          onClick: D,
          autoFocus: !0,
          children: [(0, i.jsx)(h.Z, {
            width: 14,
            height: 14,
            className: R.boosterBadge
          }), O.Z.Messages.ROLE_ICON_POPOUT_CTA]
        })]
      })
    })
  })
}