n.d(t, {
  R: function() {
    return R
  }
}), n(411104);
var s = n(735250),
  r = n(470079),
  i = n(442837),
  a = n(481060),
  l = n(388905),
  o = n(726745),
  u = n(973616),
  c = n(131704),
  d = n(601964),
  h = n(598077),
  E = n(594174),
  _ = n(366695),
  m = n(940627),
  g = n(806519),
  p = n(51144),
  f = n(981631),
  I = n(888592),
  N = n(245335),
  A = n(689938),
  T = n(53154);
let R = () => (0, s.jsxs)(r.Fragment, {
    children: [(0, s.jsx)(l.qE, {
      src: null,
      size: a.AvatarSizes.DEPRECATED_SIZE_100,
      className: T.avatar
    }), (0, s.jsx)(l.DK, {
      children: A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
    }), (0, s.jsx)(l.Dx, {
      className: T.inviteResolvingGuildName,
      children: A.Z.Messages.LOADING
    })]
  }),
  S = e => {
    let {
      guild: t,
      user: n,
      application: r,
      compact: i
    } = e;
    if (null != r) return (0, s.jsx)(_.Z, {
      className: T.appIcon,
      game: r,
      size: T.appIconSize
    });
    if (null != n) return (0, s.jsx)(l.qE, {
      src: null != n ? n.getAvatarURL(void 0, 80) : null,
      size: a.AvatarSizes.SIZE_80,
      className: i ? T.compactAvatar : T.avatar
    });
    if (null != t) return (0, s.jsx)(g.ZP, {
      mask: g.ZP.Masks.SQUIRCLE,
      width: 64,
      height: 64,
      className: T.guildIcon,
      children: (0, s.jsx)(l.Vj, {
        guild: t,
        size: l.Vj.Sizes.LARGER,
        animate: !0
      })
    });
    else return null
  };
t.Z = e => {
  var t;
  let n, r, _, {
      invite: g,
      disableUser: R = !1,
      error: C,
      flatActivityCount: x = !1,
      isRegister: O = !1
    } = e,
    {
      currentUser: v,
      multiAccounts: Z
    } = (0, i.cj)([o.Z, E.default], () => ({
      currentUser: E.default.getCurrentUser(),
      multiAccounts: o.Z.getUsers()
    }));
  if (null == g) return null;
  let L = null != g.guild ? new d.ZP(g.guild) : null,
    M = null != g.channel ? (0, c.jD)(g.channel) : null,
    b = null != g.target_application ? new u.Z(g.target_application) : null,
    D = R || null == g.inviter ? null : new h.Z(g.inviter),
    y = !(null != g.approximate_member_count && g.approximate_member_count > 100 || null != L && L.hasFeature(f.oNc.COMMUNITY)) && null != D,
    j = null,
    P = !1;
  if (null != L) j = null == D ? A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : A.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
    username: p.ZP.getFormattedName(D)
  }), g.target_type === N.Iq.STREAM && null != g.target_user && (j = A.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
    username: p.ZP.getFormattedName(g.target_user)
  })), g.target_type === N.Iq.EMBEDDED_APPLICATION && null != g.target_application && (j = null != D ? A.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
    username: p.ZP.getFormattedName(D)
  }) : A.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), y && null == b && (n = (0, s.jsx)(l.Vj, {
    className: T.icon,
    guild: L,
    size: l.Vj.Sizes.SMALL
  })), r = L.name, null != b && (r = b.name, _ = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(l.DK, {
      className: T.appIn,
      children: A.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
    }), (0, s.jsxs)("div", {
      className: T.guildContainer,
      children: [(0, s.jsx)(l.Vj, {
        guild: L,
        size: l.Vj.Sizes.SMALL
      }), (0, s.jsx)(a.Text, {
        tag: "span",
        variant: "text-lg/normal",
        color: "header-primary",
        className: T.appGuildName,
        children: L.name
      })]
    })]
  }));
  else if (null != M) {
    if (null == D) throw Error("no inviter in group DM invite");
    let e = p.ZP.getFormattedName(D);
    null != M.name && "" !== M.name ? (j = A.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
      username: e
    }), r = M.name, null != M.icon && (n = (0, s.jsx)(l.MC, {
      channel: M,
      size: a.AvatarSizes.SIZE_32
    }))) : (j = A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, r = e)
  } else if (null != D) {
    let e = p.ZP.getFormattedName(D, !0);
    r = A.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
      username: e
    }), P = !0, _ = null != C ? null : (0, s.jsx)(l.DK, {
      className: T.directInviteSubTitle,
      children: O ? A.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
        username: e
      }) : A.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
        username: e
      })
    })
  }
  return (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsx)(S, {
      application: b,
      guild: L,
      user: y ? D : null,
      compact: P
    }), null != C ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(l.DK, {
        children: A.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(l.Dx, {
        children: C
      })]
    }) : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(l.DK, {
        children: j
      }), (0, s.jsxs)(l.Dx, {
        className: T.title,
        children: [null != L ? (0, s.jsx)(m.Z, {
          guild: L,
          className: T.guildBadge,
          tooltipPosition: "left"
        }) : null, n, r]
      })]
    }), _, null != b || P || (null == g ? void 0 : null === (t = g.guild) || void 0 === t ? void 0 : t.id) === I.fQ ? null : (0, s.jsx)(l.EJ, {
      className: T.activityCount,
      online: g.approximate_presence_count,
      total: g.approximate_member_count,
      flat: x
    }), Z.length > 1 ? (0, s.jsx)(l.jQ, {
      user: v
    }) : null]
  })
}