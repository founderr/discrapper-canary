l.r(n), l.d(n, {
  default: function() {
    return B
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  s = l(120356),
  a = l.n(s),
  r = l(442837),
  d = l(704215),
  o = l(692547),
  c = l(481060),
  u = l(252618),
  h = l(605236),
  m = l(473403),
  x = l(984370),
  N = l(216306),
  C = l(104155),
  g = l(22082),
  E = l(703656),
  p = l(433355),
  f = l(592125),
  Z = l(430824),
  _ = l(944486),
  I = l(514342),
  v = l(31445),
  j = l(59350),
  S = l(290511),
  R = l(176505),
  T = l(921944),
  O = l(689938),
  A = l(553003),
  L = l(175803);

function M(e) {
  let {
    guild: n,
    previousChannel: l
  } = e, s = (0, v.Z)(n);
  i.useEffect(() => {
    (0, h.EW)(d.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: T.L.DISMISS
    })
  });
  let a = s ? O.Z.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
      guildName: n.name
    }) : O.Z.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
      guildName: n.name
    }),
    r = s ? O.Z.Messages.CHANNELS_AND_ROLES : O.Z.Messages.CHANNEL_BROWSER_TITLE;
  return (0, u.Tt)({
    location: a
  }), (0, t.jsxs)(x.Z, {
    className: A.header,
    innerClassname: A.innerHeader,
    hideSearch: !0,
    channelId: R.oC.CUSTOMIZE_COMMUNITY,
    guildId: n.id,
    toolbar: null != l ? (0, t.jsx)(c.Button, {
      className: A.returnButton,
      size: c.Button.Sizes.SMALL,
      look: c.Button.Looks.OUTLINED,
      color: c.Button.Colors.PRIMARY,
      onClick: () => {
        null != l && (0, E.XU)(n.id, l.id)
      },
      children: (0, t.jsx)(c.Text, {
        className: A.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: O.Z.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == l ? null : (0, t.jsxs)(i.Fragment, {
            children: [(0, t.jsx)(m._, {
              className: A.returnIcon,
              guild: n,
              channel: l
            }), (0, t.jsx)(I.Z, {
              children: (0, t.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l.name
              })
            })]
          }, l.id)
        })
      })
    }) : [],
    children: [(0, t.jsx)(x.Z.Icon, {
      icon: c.ChannelListMagnifyingGlassIcon,
      "aria-hidden": !0
    }), (0, t.jsx)(x.Z.Title, {
      children: r
    })]
  })
}

function B(e) {
  let {
    guildId: n,
    selectedSection: l
  } = e, s = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)), d = (0, v.Z)(s), [u, h] = i.useState(null != l ? l : S.l7.CUSTOMIZE);
  i.useEffect(() => {
    null != l && h(l)
  }, [l]);
  let m = (0, r.e7)([_.Z], () => _.Z.getLastSelectedChannelId(n)),
    x = (0, r.e7)([p.ZP], () => p.ZP.getCurrentSidebarChannelId(R.oC.CHANNEL_BROWSER)),
    E = null != x && u === S.l7.BROWSE,
    I = (0, r.e7)([f.Z], () => f.Z.getChannel(m)),
    T = (0, r.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
    B = (0, N.fU)(n);
  return null == s ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)("div", {
      className: a()(L.chat, {
        [L.threadSidebarOpen]: E
      }),
      children: [(0, t.jsx)(M, {
        guild: s,
        previousChannel: I
      }), (0, t.jsxs)("div", {
        className: a()(L.content, A.container),
        children: [d && (0, t.jsxs)(c.TabBar, {
          className: A.tabBar,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => h(e),
          children: [(0, t.jsx)(c.TabBar.Item, {
            className: A.tabBarItem,
            id: S.l7.CUSTOMIZE,
            children: O.Z.Messages.OPT_IN_GUILD_NOTICE_CTA
          }, S.l7.CUSTOMIZE), (0, t.jsxs)(c.TabBar.Item, {
            className: A.tabBarItem,
            id: S.l7.BROWSE,
            "aria-label": O.Z.Messages.CHANNEL_BROWSER_TITLE,
            children: [O.Z.Messages.CHANNEL_BROWSER_TITLE, (0, t.jsx)(c.TextBadge, {
              text: T ? O.Z.Messages.CHANNEL_TYPE_NEW : B,
              color: T ? o.Z.unsafe_rawColors.BRAND_260.css : o.Z.colors.BACKGROUND_ACCENT.css,
              className: a()({
                [A.newBadge]: T
              })
            })]
          }, S.l7.BROWSE)]
        }), (() => {
          switch (u) {
            case S.l7.CUSTOMIZE:
              return (0, t.jsx)(j.Z, {
                guildId: n,
                onBrowseChannels: () => h(S.l7.BROWSE)
              });
            case S.l7.BROWSE:
            default:
              return (0, t.jsx)(C.Z, {
                guildId: n
              })
          }
        })()]
      })]
    }), E && (0, t.jsx)(C.I, {
      channelId: x
    })]
  })
}