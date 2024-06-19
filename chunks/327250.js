n.d(t, {
  Z: function() {
    return L
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(399606),
  r = n(481060),
  o = n(493683),
  c = n(906732),
  u = n(69882),
  d = n(251794),
  h = n(386696),
  m = n(910693),
  p = n(314897),
  E = n(271383),
  g = n(430824),
  f = n(496675),
  C = n(158776),
  _ = n(885110),
  I = n(594174),
  x = n(572004),
  T = n(5192),
  N = n(51144),
  Z = n(991570),
  S = n(981631),
  v = n(689938),
  A = n(342821);

function M(e) {
  let {
    user: t,
    backgroundColor: n,
    guildId: i,
    onClose: s
  } = e, o = t.id, c = (0, a.e7)([_.Z, C.Z, p.default], () => o === p.default.getId() ? _.Z.getStatus() : C.Z.getStatus(o, i), [o, i]);
  return (0, l.jsxs)("div", {
    className: A.topRow,
    style: {
      backgroundColor: n
    },
    children: [(0, l.jsxs)("div", {
      className: A.memberNameContainer,
      children: [(0, l.jsx)("div", {
        className: A.memberAvatar,
        children: (0, l.jsx)(r.Avatar, {
          src: t.getAvatarURL(i, 48),
          "aria-label": t.username,
          size: r.AvatarSizes.SIZE_48,
          status: c
        })
      }), (0, l.jsx)("div", {
        className: A.memberName,
        children: (0, l.jsx)(r.Text, {
          variant: "text-lg/medium",
          children: (0, l.jsx)(r.NameWithRole, {
            name: T.ZP.getName(i, null, t),
            color: r.tokens.colors.HEADER_PRIMARY.css
          })
        })
      }), (0, l.jsx)("div", {
        className: A.__invalid_memberGlobalName,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: N.ZP.getUserTag(t)
        })
      })]
    }), (0, l.jsx)("div", {
      className: A.__invalid_close,
      children: (0, l.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        children: (0, l.jsx)(r.Clickable, {
          className: A.closeAction,
          onClick: s,
          children: (0, l.jsx)(r.CloseSmallIcon, {
            size: "md",
            color: "currentColor"
          })
        })
      })
    })]
  })
}

function R(e) {
  let {
    tag: t = "div",
    disabled: n,
    children: i,
    onClick: a,
    ...o
  } = e;
  return (0, l.jsx)(r.Clickable, {
    ...o,
    tag: t,
    className: s()(A.bottomRowAction, {
      [A.bottomRowActionDisabled]: n
    }),
    onClick: n ? void 0 : a,
    children: (0, l.jsx)("div", {
      className: A.innerBottomRowAction,
      children: i
    })
  })
}

function j(e) {
  let {
    backgroundColor: t,
    user: i,
    member: s,
    guildId: p
  } = e, E = (0, a.e7)([g.Z], () => g.Z.getGuild(p)), {
    canKickUser: C,
    canBanUser: _,
    canModerateMembers: T
  } = (0, a.cj)([f.Z, I.default, g.Z], () => ({
    canKickUser: null != E && f.Z.canManageUser(S.Plq.KICK_MEMBERS, i, E),
    canBanUser: null != E && f.Z.canManageUser(S.Plq.BAN_MEMBERS, i, E),
    canModerateMembers: null != E && (0, h.F)(E.id, i.id, [I.default, g.Z, f.Z])
  }), [i, E]), N = (0, u.b)(s), {
    analyticsLocations: Z,
    newestAnalyticsLocation: M
  } = (0, c.ZP)(), j = (0, m.sE)(p, {
    targetUserId: i.id,
    location: M,
    locations: Z
  });
  return (0, l.jsxs)("div", {
    className: A.bottomRow,
    children: [(0, l.jsxs)(R, {
      "aria-label": v.Z.Messages.SEND_DM,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        o.Z.openPrivateChannel(i.id)
      },
      children: [(0, l.jsx)(r.ChatIcon, {
        size: "custom",
        color: "currentColor",
        width: 22,
        height: 22
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: v.Z.Messages.SEND_DM
      })]
    }), (0, l.jsxs)(R, {
      disabled: !C,
      "aria-label": v.Z.Messages.KICK,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("5454")]).then(n.bind(n, 854360));
          return t => (0, l.jsx)(e, {
            ...t,
            location: M,
            guildId: p,
            user: i
          })
        })
      },
      children: [(0, l.jsx)(r.UserMinusIcon, {
        size: "custom",
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: v.Z.Messages.KICK
      })]
    }), (0, l.jsxs)(R, {
      disabled: !_,
      "aria-label": v.Z.Messages.BAN,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("43350")]).then(n.bind(n, 98746));
          return t => (0, l.jsx)(e, {
            ...t,
            location: M,
            guildId: p,
            user: i
          })
        })
      },
      children: [(0, l.jsx)(r.HammerIcon, {
        size: "custom",
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: v.Z.Messages.BAN
      })]
    }), (0, l.jsxs)(R, {
      disabled: !T,
      "aria-label": v.Z.Messages.TIMEOUT_USER,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        N ? (0, d.q)(s.guildId, s.userId, Z) : (0, d.z)(s.guildId, s.userId, Z)
      },
      children: [(0, l.jsx)(r.ClockWarningIcon, {
        size: "custom",
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: N ? v.Z.Messages.REMOVE : v.Z.Messages.TIMEOUT_USER
      })]
    }), (0, l.jsxs)(R, {
      "aria-label": v.Z.Messages.COPY_ID,
      style: {
        backgroundColor: t
      },
      onClick: () => {
        j(m.jQ.COPY_ID), (0, x.JG)(i.id)
      },
      disabled: !x.wS,
      children: [(0, l.jsx)(r.IdIcon, {
        size: "custom",
        width: 22,
        height: 22,
        color: r.tokens.colors.TEXT_NORMAL.css
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: v.Z.Messages.COPY_ID
      })]
    })]
  })
}

function L(e) {
  let {
    userId: t,
    guildId: n,
    onClose: i
  } = e, s = (0, a.e7)([I.default], () => I.default.getUser(t), [t]), o = (0, a.e7)([E.ZP], () => E.ZP.getMember(n, t), [n, t]), c = (0, Z.f)(t, n, .8, r.tokens.colors.BACKGROUND_SECONDARY);
  return null == s || null == o ? null : (0, l.jsxs)("div", {
    className: A.container,
    children: [(0, l.jsx)(M, {
      user: s,
      guildId: n,
      onClose: i,
      backgroundColor: c
    }), (0, l.jsx)(j, {
      user: s,
      member: o,
      guildId: n,
      backgroundColor: c
    })]
  })
}