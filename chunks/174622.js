"use strict";
t.r(n), t.d(n, {
  default: function() {
    return k
  }
}), t("424973"), t("222007");
var l = t("37983"),
  s = t("884691"),
  i = t("414456"),
  a = t.n(i),
  u = t("77078"),
  r = t("843962"),
  d = t("679653"),
  o = t("419830"),
  c = t("407063"),
  v = t("845579"),
  m = t("315102"),
  E = t("474293"),
  h = t("145131"),
  p = t("953109"),
  f = t("476263"),
  N = t("782340"),
  g = t("312679");
let C = e => {
    let {
      text: n,
      extra: t
    } = e;
    return (0, l.jsxs)(u.FormTitle, {
      className: g.header,
      children: [n, t]
    })
  },
  I = e => {
    let {
      resolving: n,
      children: t
    } = e;
    return (0, l.jsx)("div", {
      className: g.content,
      children: n ? (0, l.jsxs)("div", {
        className: g.resolvingWrapper,
        children: [(0, l.jsx)("div", {
          className: g.resolving,
          children: (0, l.jsx)("div", {
            className: g.resolvingBackground
          })
        }), (0, l.jsx)("div", {
          className: g.resolvingFakeButton,
          children: (0, l.jsx)("div", {
            className: g.resolvingBackground
          })
        })]
      }) : t
    })
  },
  x = e => {
    var n;
    let {
      application: t,
      guild: s,
      channel: i,
      onClick: o,
      expired: c = !1,
      user: m,
      className: h
    } = e, N = null !== (n = (0, d.default)(i)) && void 0 !== n ? n : "", C = v.GifAutoPlay.useSetting();
    if (c) return (0, l.jsx)("div", {
      className: g.guildIconExpired
    });
    let I = null == s || null != s.icon,
      x = a((0, E.getClass)(g, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), h);
    if (null != t) return (0, l.jsx)(p.default, {
      game: t,
      onClick: o,
      size: g.applicationIcon,
      className: x
    });
    if (null != s) return (0, l.jsx)(f.default, {
      onClick: o,
      active: !0,
      guild: s,
      className: x,
      animate: C
    });
    if (null != i) return (0, l.jsx)(u.Avatar, {
      onClick: o,
      src: (0, r.getChannelIconURL)(i),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": N
    });
    else if (null != m) return (0, l.jsx)(u.Avatar, {
      onClick: o,
      src: m.getAvatarURL(null, 56),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": N
    });
    return null
  },
  S = e => {
    let {
      title: n,
      onClick: t,
      expired: s,
      children: i
    } = e, a = (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: (0, E.getClass)(g, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
      children: n
    });
    return (0, l.jsxs)(h.default, {
      className: g.guildInfo,
      direction: h.default.Direction.VERTICAL,
      justify: h.default.Justify.CENTER,
      children: [null == t ? a : (0, l.jsx)(u.Clickable, {
        onClick: t,
        children: a
      }), (0, l.jsx)(u.Text, {
        tag: "strong",
        className: g.guildDetail,
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  _ = e => {
    let {
      membersOnline: n,
      members: t
    } = e, s = [];
    return null != n && n > 0 && s.push((0, l.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: g.statusOnline
      }), (0, l.jsx)("span", {
        className: g.count,
        children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: n
        })
      })]
    }, "onlineCount")), null != t && s.push((0, l.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, l.jsx)("i", {
        className: g.statusOffline
      }), (0, l.jsx)("span", {
        className: g.count,
        children: N.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: t
        })
      })]
    }, "memberCount")), (0, l.jsx)("div", {
      className: g.statusCounts,
      children: s
    })
  },
  j = e => {
    let {
      channel: n,
      guild: t
    } = e, s = (0, o.getChannelIconComponent)(n, t);
    return null == n || null == s ? null : (0, l.jsxs)("div", {
      className: g.channel,
      children: [(0, l.jsx)(s, {
        className: g.channelIcon,
        width: 20,
        height: 20
      }), (0, l.jsx)("span", {
        className: g.channelName,
        children: n.name
      })]
    })
  },
  L = e => {
    let {
      children: n,
      onClick: t,
      className: s,
      isDisabled: i,
      ...r
    } = e;
    return (0, l.jsx)(u.Button, {
      ...r,
      disabled: i,
      onClick: t,
      size: g.buttonSize,
      className: a(g.button, s),
      children: n
    })
  };
L.Colors = u.Button.Colors, L.Looks = u.Button.Looks, L.defaultProps = {
  className: null,
  isDisabled: !1
};
let T = e => {
    let {
      children: n,
      className: t,
      containerRef: s
    } = e;
    return (0, l.jsx)("div", {
      ref: s,
      className: a(g.wrapper, t),
      children: n
    })
  },
  R = e => {
    let {
      guild: n
    } = e, [t, i] = s.useState(!1), u = m.default.getGuildSplashURL({
      id: n.id,
      splash: n.splash,
      size: 400 * (0, c.getDevicePixelRatio)()
    });
    return null == u ? null : (0, l.jsx)("div", {
      className: g.inviteSplash,
      children: (0, l.jsx)("img", {
        src: u,
        alt: "",
        className: a(g.inviteSplashImage, {
          [g.inviteSplashImageLoaded]: t
        }),
        onLoad: () => i(!0)
      })
    })
  },
  B = e => {
    let {
      guild: n
    } = e;
    return (0, l.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, l.jsx)("span", {
        className: g.guildName,
        children: n.name
      })
    })
  },
  D = e => {
    let {
      guildTemplate: n
    } = e;
    return (0, l.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, l.jsx)("span", {
        className: g.guildName,
        children: n.serializedSourceGuild.name
      })
    })
  };
T.Header = C, T.Body = I, T.Icon = x, T.Info = S, T.Data = _, T.Channel = j, T.Button = L, T.GuildSplash = R, T.GuildName = B, T.GuildTemplateName = D, C.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", j.displayName = "InviteButton.Channel", L.displayName = "InviteButton.Button", R.displayName = "InviteButton.GuildSplash", B.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName";
var k = T