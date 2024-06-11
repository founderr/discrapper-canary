"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("442837"),
  d = l("704215"),
  o = l("692547"),
  u = l("481060"),
  c = l("252618"),
  h = l("605236"),
  f = l("473403"),
  m = l("984370"),
  C = l("216306"),
  N = l("104155"),
  x = l("22082"),
  g = l("703656"),
  p = l("433355"),
  S = l("592125"),
  E = l("430824"),
  I = l("944486"),
  _ = l("514342"),
  T = l("648414"),
  v = l("31445"),
  A = l("59350"),
  O = l("290511"),
  R = l("176505"),
  j = l("921944"),
  b = l("689938"),
  L = l("289327"),
  M = l("19340");

function D(e) {
  let {
    guild: t,
    previousChannel: l
  } = e, s = (0, v.default)(t);
  a.useEffect(() => {
    (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: j.ContentDismissActionType.DISMISS
    })
  });
  let i = s ? b.default.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
      guildName: t.name
    }) : b.default.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
      guildName: t.name
    }),
    r = s ? b.default.Messages.CHANNELS_AND_ROLES : b.default.Messages.CHANNEL_BROWSER_TITLE;
  return (0, c.usePageTitle)({
    location: i
  }), (0, n.jsxs)(m.default, {
    className: L.header,
    innerClassname: L.innerHeader,
    hideSearch: !0,
    channelId: R.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    toolbar: null != l ? (0, n.jsx)(u.Button, {
      className: L.returnButton,
      size: u.Button.Sizes.SMALL,
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.PRIMARY,
      onClick: () => {
        null != l && (0, g.transitionToGuild)(t.id, l.id)
      },
      children: (0, n.jsx)(u.Text, {
        className: L.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: b.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == l ? null : (0, n.jsxs)(a.Fragment, {
            children: [(0, n.jsx)(f.ChannelItemIcon, {
              className: L.returnIcon,
              guild: t,
              channel: l
            }), (0, n.jsx)(_.default, {
              children: (0, n.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l.name
              })
            })]
          }, l.id)
        })
      })
    }) : [],
    children: [(0, n.jsx)(m.default.Icon, {
      icon: T.default,
      "aria-hidden": !0
    }), (0, n.jsx)(m.default.Title, {
      children: r
    })]
  })
}

function B(e) {
  let {
    guildId: t,
    selectedSection: l
  } = e, s = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t)), d = (0, v.default)(s), [c, h] = a.useState(null != l ? l : O.GuildOnboardingTab.CUSTOMIZE);
  a.useEffect(() => {
    null != l && h(l)
  }, [l]);
  let f = (0, r.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)),
    m = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(R.StaticChannelRoute.CHANNEL_BROWSER)),
    g = null != m && c === O.GuildOnboardingTab.BROWSE,
    _ = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(f)),
    T = (0, r.useStateFromStores)([x.default], () => x.default.getNewChannelIds(t).size > 0),
    j = (0, C.useChannelBrowserChannelCount)(t);
  return null == s ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: i()(M.chat, {
        [M.threadSidebarOpen]: g
      }),
      children: [(0, n.jsx)(D, {
        guild: s,
        previousChannel: _
      }), (0, n.jsxs)("div", {
        className: i()(M.content, L.container),
        children: [d && (0, n.jsxs)(u.TabBar, {
          className: L.tabBar,
          type: "top",
          look: "brand",
          selectedItem: c,
          onItemSelect: e => h(e),
          children: [(0, n.jsx)(u.TabBar.Item, {
            className: L.tabBarItem,
            id: O.GuildOnboardingTab.CUSTOMIZE,
            children: b.default.Messages.OPT_IN_GUILD_NOTICE_CTA
          }, O.GuildOnboardingTab.CUSTOMIZE), (0, n.jsxs)(u.TabBar.Item, {
            className: L.tabBarItem,
            id: O.GuildOnboardingTab.BROWSE,
            "aria-label": b.default.Messages.CHANNEL_BROWSER_TITLE,
            children: [b.default.Messages.CHANNEL_BROWSER_TITLE, (0, n.jsx)(u.TextBadge, {
              text: T ? b.default.Messages.CHANNEL_TYPE_NEW : j,
              color: T ? o.default.unsafe_rawColors.BRAND_260.css : o.default.colors.BACKGROUND_ACCENT.css,
              className: i()({
                [L.newBadge]: T
              })
            })]
          }, O.GuildOnboardingTab.BROWSE)]
        }), (() => {
          switch (c) {
            case O.GuildOnboardingTab.CUSTOMIZE:
              return (0, n.jsx)(A.default, {
                guildId: t,
                onBrowseChannels: () => h(O.GuildOnboardingTab.BROWSE)
              });
            case O.GuildOnboardingTab.BROWSE:
            default:
              return (0, n.jsx)(N.default, {
                guildId: t
              })
          }
        })()]
      })]
    }), g && (0, n.jsx)(N.ChannelBrowserSidebar, {
      channelId: m
    })]
  })
}