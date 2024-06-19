l(653041), l(47120);
var s = l(735250),
  t = l(470079),
  i = l(120356),
  a = l.n(i),
  o = l(481060),
  r = l(43267),
  u = l(933557),
  c = l(471445),
  d = l(134432),
  m = l(695346),
  N = l(768581),
  v = l(153066),
  p = l(285952),
  C = l(366695),
  E = l(346656),
  h = l(689938),
  g = l(386907);
let I = e => {
    let {
      text: n,
      extra: l
    } = e;
    return (0, s.jsxs)(o.FormTitle, {
      className: g.header,
      children: [n, l]
    })
  },
  x = e => {
    let {
      resolving: n,
      children: l
    } = e;
    return (0, s.jsx)("div", {
      className: g.content,
      children: n ? (0, s.jsxs)("div", {
        className: g.resolvingWrapper,
        children: [(0, s.jsx)("div", {
          className: g.resolving,
          children: (0, s.jsx)("div", {
            className: g.resolvingBackground
          })
        }), (0, s.jsx)("div", {
          className: g.resolvingFakeButton,
          children: (0, s.jsx)("div", {
            className: g.resolvingBackground
          })
        })]
      }) : l
    })
  },
  j = e => {
    var n;
    let {
      application: l,
      guild: t,
      channel: i,
      onClick: c,
      expired: d = !1,
      user: N,
      className: p
    } = e, h = null !== (n = (0, u.ZP)(i)) && void 0 !== n ? n : "", I = m.QK.useSetting();
    if (d) return (0, s.jsx)("div", {
      className: g.guildIconExpired
    });
    let x = null == t || null != t.icon,
      j = a()((0, v.l)(g, "guildIcon", x ? "Image" : "", null != c ? "Joined" : ""), p);
    if (null != l) return (0, s.jsx)(C.Z, {
      game: l,
      onClick: c,
      size: g.applicationIcon,
      className: j
    });
    if (null != t) return (0, s.jsx)(E.Z, {
      onClick: c,
      active: !0,
      guild: t,
      className: j,
      animate: I
    });
    if (null != i) return (0, s.jsx)(o.Avatar, {
      onClick: c,
      src: (0, r.x)(i),
      size: o.AvatarSizes.SIZE_56,
      className: j,
      "aria-label": h
    });
    else if (null != N) return (0, s.jsx)(o.Avatar, {
      onClick: c,
      src: N.getAvatarURL(null, 56),
      size: o.AvatarSizes.SIZE_56,
      className: j,
      "aria-label": h
    });
    return null
  },
  L = e => {
    let {
      title: n,
      onClick: l,
      expired: t,
      children: i
    } = e, a = (0, s.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: (0, v.l)(g, "inviteDestination", t ? "Expired" : null != l ? "Joined" : ""),
      children: n
    });
    return (0, s.jsxs)(p.Z, {
      className: g.guildInfo,
      direction: p.Z.Direction.VERTICAL,
      justify: p.Z.Justify.CENTER,
      children: [null == l ? a : (0, s.jsx)(o.Clickable, {
        onClick: l,
        children: a
      }), (0, s.jsx)(o.Text, {
        tag: "strong",
        className: g.guildDetail,
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  f = e => {
    let {
      membersOnline: n,
      members: l
    } = e, t = [];
    return null != n && n > 0 && t.push((0, s.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, s.jsx)("i", {
        className: g.statusOnline
      }), (0, s.jsx)("span", {
        className: g.count,
        children: h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: n
        })
      })]
    }, "onlineCount")), null != l && t.push((0, s.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, s.jsx)("i", {
        className: g.statusOffline
      }), (0, s.jsx)("span", {
        className: g.count,
        children: h.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: l
        })
      })]
    }, "memberCount")), (0, s.jsx)("div", {
      className: g.statusCounts,
      children: t
    })
  },
  _ = e => {
    let {
      channel: n,
      guild: l
    } = e, t = (0, c.KS)(n, l);
    return null == n || null == t ? null : (0, s.jsxs)("div", {
      className: g.channel,
      children: [(0, s.jsx)(t, {
        className: g.channelIcon,
        color: "currentColor",
        size: "custom",
        width: 20,
        height: 20
      }), (0, s.jsx)("span", {
        className: g.channelName,
        children: n.name
      })]
    })
  },
  S = e => {
    let {
      children: n,
      onClick: l,
      className: t,
      isDisabled: i,
      ...r
    } = e;
    return (0, s.jsx)(o.Button, {
      ...r,
      disabled: i,
      onClick: l,
      size: g.buttonSize,
      className: a()(g.button, t),
      children: n
    })
  };
S.Colors = o.Button.Colors, S.Looks = o.Button.Looks, S.defaultProps = {
  className: null,
  isDisabled: !1
};
let T = e => {
    let {
      children: n,
      className: l,
      containerRef: t
    } = e;
    return (0, s.jsx)("div", {
      ref: t,
      className: a()(g.wrapper, l),
      children: n
    })
  },
  B = e => {
    let {
      guild: n
    } = e, [l, i] = t.useState(!1), o = N.ZP.getGuildSplashURL({
      id: n.id,
      splash: n.splash,
      size: 400 * (0, d.x_)()
    });
    return null == o ? null : (0, s.jsx)("div", {
      className: g.inviteSplash,
      children: (0, s.jsx)("img", {
        src: o,
        alt: "",
        className: a()(g.inviteSplashImage, {
          [g.inviteSplashImageLoaded]: l
        }),
        onLoad: () => i(!0)
      })
    })
  },
  Z = e => {
    let {
      guild: n
    } = e;
    return (0, s.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, s.jsx)("span", {
        className: g.guildName,
        children: n.name
      })
    })
  },
  k = e => {
    let {
      guildTemplate: n
    } = e;
    return (0, s.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, s.jsx)("span", {
        className: g.guildName,
        children: n.serializedSourceGuild.name
      })
    })
  };
T.Header = I, T.Body = x, T.Icon = j, T.Info = L, T.Data = f, T.Channel = _, T.Button = S, T.GuildSplash = B, T.GuildName = Z, T.GuildTemplateName = k, I.displayName = "InviteButton.Header", x.displayName = "InviteButton.Body", j.displayName = "InviteButton.Icon", L.displayName = "InviteButton.Info", f.displayName = "InviteButton.Data", _.displayName = "InviteButton.Channel", S.displayName = "InviteButton.Button", B.displayName = "InviteButton.GuildSplash", Z.displayName = "InviteButton.GuildName", k.displayName = "InviteButton.GuildTemplateName", n.Z = T