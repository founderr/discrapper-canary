"use strict";
n.d(t, {
  Z: function() {
    return h
  }
}), n(653041);
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(100527),
  a = n(906732),
  l = n(299206),
  u = n(389052),
  _ = n(622724),
  c = n(314897),
  d = n(785717),
  E = n(993409),
  I = n(228168),
  T = n(689938);

function h(e) {
  let {
    user: t,
    profileType: n,
    guildId: h,
    viewProfileItem: f
  } = e, S = (0, r.e7)([c.default], () => c.default.getId() === t.id), {
    trackUserProfileAction: A
  } = (0, d.KZ)(), {
    analyticsLocations: N,
    newestAnalyticsLocation: m
  } = (0, a.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU), O = (0, u.Z)({
    user: t,
    color: "danger",
    location: m,
    onBlock: () => A({
      action: "BLOCK",
      analyticsLocations: N
    }),
    onUnblock: () => A({
      action: "UNBLOCK",
      analyticsLocations: N
    })
  }), p = (0, _.Z)({
    user: t,
    guildId: h,
    color: "danger",
    location: m,
    onAction: () => A({
      action: "REPORT",
      analyticsLocations: N
    })
  }), R = (0, l.Z)({
    id: t.id,
    label: T.Z.Messages.COPY_ID_USER,
    onSuccess: () => A({
      action: "COPY_USER_ID",
      analyticsLocations: N
    })
  });
  if (S && n !== I.y0.FULL_SIZE) return null;
  let g = [];
  return (null != f && g.push([f]), !S && (null != O || null != p) && g.push([O, p]), null != R && g.push([R]), 0 === g.length) ? null : (0, i.jsx)(a.Gt, {
    value: N,
    children: (0, i.jsx)(s.Popout, {
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(s.Menu, {
          navId: "user-profile-overflow-menu",
          onSelect: void 0,
          onClose: t,
          "aria-label": T.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: g.map((e, t) => (0, i.jsx)(s.MenuGroup, {
            children: e.map(e => e)
          }, t))
        })
      },
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, i.jsx)(E.Z, {
          variant: "banner",
          text: T.Z.Messages.MORE,
          icon: s.MoreHorizontalIcon,
          onClick: e => {
            A({
              action: "PRESS_OPTIONS"
            }), t(e)
          },
          ...n
        })
      }
    })
  })
}