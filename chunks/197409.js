"use strict";
n.r(l), n("653041"), n("47120");
var t = n("735250"),
  s = n("470079"),
  a = n("120356"),
  i = n.n(a),
  u = n("481060"),
  o = n("43267"),
  r = n("933557"),
  d = n("471445"),
  c = n("134432"),
  v = n("695346"),
  m = n("768581"),
  p = n("153066"),
  h = n("285952"),
  E = n("366695"),
  N = n("346656"),
  f = n("689938"),
  g = n("809384");
let C = e => {
    let {
      text: l,
      extra: n
    } = e;
    return (0, t.jsxs)(u.FormTitle, {
      className: g.header,
      children: [l, n]
    })
  },
  I = e => {
    let {
      resolving: l,
      children: n
    } = e;
    return (0, t.jsx)("div", {
      className: g.content,
      children: l ? (0, t.jsxs)("div", {
        className: g.resolvingWrapper,
        children: [(0, t.jsx)("div", {
          className: g.resolving,
          children: (0, t.jsx)("div", {
            className: g.resolvingBackground
          })
        }), (0, t.jsx)("div", {
          className: g.resolvingFakeButton,
          children: (0, t.jsx)("div", {
            className: g.resolvingBackground
          })
        })]
      }) : n
    })
  },
  x = e => {
    var l;
    let {
      application: n,
      guild: s,
      channel: a,
      onClick: d,
      expired: c = !1,
      user: m,
      className: h
    } = e, f = null !== (l = (0, r.default)(a)) && void 0 !== l ? l : "", C = v.GifAutoPlay.useSetting();
    if (c) return (0, t.jsx)("div", {
      className: g.guildIconExpired
    });
    let I = null == s || null != s.icon,
      x = i()((0, p.getClass)(g, "guildIcon", I ? "Image" : "", null != d ? "Joined" : ""), h);
    if (null != n) return (0, t.jsx)(E.default, {
      game: n,
      onClick: d,
      size: g.applicationIcon,
      className: x
    });
    if (null != s) return (0, t.jsx)(N.default, {
      onClick: d,
      active: !0,
      guild: s,
      className: x,
      animate: C
    });
    if (null != a) return (0, t.jsx)(u.Avatar, {
      onClick: d,
      src: (0, o.getChannelIconURL)(a),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": f
    });
    else if (null != m) return (0, t.jsx)(u.Avatar, {
      onClick: d,
      src: m.getAvatarURL(null, 56),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": f
    });
    return null
  },
  S = e => {
    let {
      title: l,
      onClick: n,
      expired: s,
      children: a
    } = e, i = (0, t.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: (0, p.getClass)(g, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
      children: l
    });
    return (0, t.jsxs)(h.default, {
      className: g.guildInfo,
      direction: h.default.Direction.VERTICAL,
      justify: h.default.Justify.CENTER,
      children: [null == n ? i : (0, t.jsx)(u.Clickable, {
        onClick: n,
        children: i
      }), (0, t.jsx)(u.Text, {
        tag: "strong",
        className: g.guildDetail,
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  j = e => {
    let {
      membersOnline: l,
      members: n
    } = e, s = [];
    return null != l && l > 0 && s.push((0, t.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, t.jsx)("i", {
        className: g.statusOnline
      }), (0, t.jsx)("span", {
        className: g.count,
        children: f.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: l
        })
      })]
    }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
      className: g.statusWrapper,
      children: [(0, t.jsx)("i", {
        className: g.statusOffline
      }), (0, t.jsx)("span", {
        className: g.count,
        children: f.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: n
        })
      })]
    }, "memberCount")), (0, t.jsx)("div", {
      className: g.statusCounts,
      children: s
    })
  },
  L = e => {
    let {
      channel: l,
      guild: n
    } = e, s = (0, d.getChannelIconComponent)(l, n);
    return null == l || null == s ? null : (0, t.jsxs)("div", {
      className: g.channel,
      children: [(0, t.jsx)(s, {
        className: g.channelIcon,
        width: 20,
        height: 20
      }), (0, t.jsx)("span", {
        className: g.channelName,
        children: l.name
      })]
    })
  },
  R = e => {
    let {
      children: l,
      onClick: n,
      className: s,
      isDisabled: a,
      ...o
    } = e;
    return (0, t.jsx)(u.Button, {
      ...o,
      disabled: a,
      onClick: n,
      size: g.buttonSize,
      className: i()(g.button, s),
      children: l
    })
  };
R.Colors = u.Button.Colors, R.Looks = u.Button.Looks, R.defaultProps = {
  className: null,
  isDisabled: !1
};
let T = e => {
    let {
      children: l,
      className: n,
      containerRef: s
    } = e;
    return (0, t.jsx)("div", {
      ref: s,
      className: i()(g.wrapper, n),
      children: l
    })
  },
  _ = e => {
    let {
      guild: l
    } = e, [n, a] = s.useState(!1), u = m.default.getGuildSplashURL({
      id: l.id,
      splash: l.splash,
      size: 400 * (0, c.getDevicePixelRatio)()
    });
    return null == u ? null : (0, t.jsx)("div", {
      className: g.inviteSplash,
      children: (0, t.jsx)("img", {
        src: u,
        alt: "",
        className: i()(g.inviteSplashImage, {
          [g.inviteSplashImageLoaded]: n
        }),
        onLoad: () => a(!0)
      })
    })
  },
  B = e => {
    let {
      guild: l
    } = e;
    return (0, t.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, t.jsx)("span", {
        className: g.guildName,
        children: l.name
      })
    })
  },
  D = e => {
    let {
      guildTemplate: l
    } = e;
    return (0, t.jsx)("div", {
      className: g.guildNameWrapper,
      children: (0, t.jsx)("span", {
        className: g.guildName,
        children: l.serializedSourceGuild.name
      })
    })
  };
T.Header = C, T.Body = I, T.Icon = x, T.Info = S, T.Data = j, T.Channel = L, T.Button = R, T.GuildSplash = _, T.GuildName = B, T.GuildTemplateName = D, C.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", j.displayName = "InviteButton.Data", L.displayName = "InviteButton.Channel", R.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", B.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName", l.default = T