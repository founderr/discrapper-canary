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
  h = n("153066"),
  p = n("285952"),
  N = n("366695"),
  E = n("346656"),
  g = n("689938"),
  C = n("809384");
let f = e => {
    let {
      text: l,
      extra: n
    } = e;
    return (0, t.jsxs)(u.FormTitle, {
      className: C.header,
      children: [l, n]
    })
  },
  I = e => {
    let {
      resolving: l,
      children: n
    } = e;
    return (0, t.jsx)("div", {
      className: C.content,
      children: l ? (0, t.jsxs)("div", {
        className: C.resolvingWrapper,
        children: [(0, t.jsx)("div", {
          className: C.resolving,
          children: (0, t.jsx)("div", {
            className: C.resolvingBackground
          })
        }), (0, t.jsx)("div", {
          className: C.resolvingFakeButton,
          children: (0, t.jsx)("div", {
            className: C.resolvingBackground
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
      className: p
    } = e, g = null !== (l = (0, r.default)(a)) && void 0 !== l ? l : "", f = v.GifAutoPlay.useSetting();
    if (c) return (0, t.jsx)("div", {
      className: C.guildIconExpired
    });
    let I = null == s || null != s.icon,
      x = i()((0, h.getClass)(C, "guildIcon", I ? "Image" : "", null != d ? "Joined" : ""), p);
    if (null != n) return (0, t.jsx)(N.default, {
      game: n,
      onClick: d,
      size: C.applicationIcon,
      className: x
    });
    if (null != s) return (0, t.jsx)(E.default, {
      onClick: d,
      active: !0,
      guild: s,
      className: x,
      animate: f
    });
    if (null != a) return (0, t.jsx)(u.Avatar, {
      onClick: d,
      src: (0, o.getChannelIconURL)(a),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": g
    });
    else if (null != m) return (0, t.jsx)(u.Avatar, {
      onClick: d,
      src: m.getAvatarURL(null, 56),
      size: u.AvatarSizes.SIZE_56,
      className: x,
      "aria-label": g
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
      className: (0, h.getClass)(C, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
      children: l
    });
    return (0, t.jsxs)(p.default, {
      className: C.guildInfo,
      direction: p.default.Direction.VERTICAL,
      justify: p.default.Justify.CENTER,
      children: [null == n ? i : (0, t.jsx)(u.Clickable, {
        onClick: n,
        children: i
      }), (0, t.jsx)(u.Text, {
        tag: "strong",
        className: C.guildDetail,
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
      className: C.statusWrapper,
      children: [(0, t.jsx)("i", {
        className: C.statusOnline
      }), (0, t.jsx)("span", {
        className: C.count,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: l
        })
      })]
    }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
      className: C.statusWrapper,
      children: [(0, t.jsx)("i", {
        className: C.statusOffline
      }), (0, t.jsx)("span", {
        className: C.count,
        children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
          count: n
        })
      })]
    }, "memberCount")), (0, t.jsx)("div", {
      className: C.statusCounts,
      children: s
    })
  },
  L = e => {
    let {
      channel: l,
      guild: n
    } = e, s = (0, d.getChannelIconComponent)(l, n);
    return null == l || null == s ? null : (0, t.jsxs)("div", {
      className: C.channel,
      children: [(0, t.jsx)(s, {
        className: C.channelIcon,
        width: 20,
        height: 20
      }), (0, t.jsx)("span", {
        className: C.channelName,
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
      size: C.buttonSize,
      className: i()(C.button, s),
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
      className: i()(C.wrapper, n),
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
      className: C.inviteSplash,
      children: (0, t.jsx)("img", {
        src: u,
        alt: "",
        className: i()(C.inviteSplashImage, {
          [C.inviteSplashImageLoaded]: n
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
      className: C.guildNameWrapper,
      children: (0, t.jsx)("span", {
        className: C.guildName,
        children: l.name
      })
    })
  },
  D = e => {
    let {
      guildTemplate: l
    } = e;
    return (0, t.jsx)("div", {
      className: C.guildNameWrapper,
      children: (0, t.jsx)("span", {
        className: C.guildName,
        children: l.serializedSourceGuild.name
      })
    })
  };
T.Header = f, T.Body = I, T.Icon = x, T.Info = S, T.Data = j, T.Channel = L, T.Button = R, T.GuildSplash = _, T.GuildName = B, T.GuildTemplateName = D, f.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", j.displayName = "InviteButton.Data", L.displayName = "InviteButton.Channel", R.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", B.displayName = "InviteButton.GuildName", D.displayName = "InviteButton.GuildTemplateName", l.default = T