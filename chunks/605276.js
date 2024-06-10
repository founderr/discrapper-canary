"use strict";
t.r(l);
var a = t("735250"),
  n = t("470079"),
  s = t("399606"),
  i = t("481060"),
  d = t("904245"),
  r = t("368844"),
  u = t("249842"),
  o = t("838367"),
  c = t("6025"),
  f = t("592125"),
  m = t("375954"),
  h = t("496675"),
  g = t("760053"),
  x = t("768581"),
  C = t("526120"),
  v = t("825334"),
  I = t("981631"),
  S = t("689938"),
  N = t("253533");
let j = n.memo(function(e) {
    let {
      guild: l
    } = e, t = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(l.id), [l]);
    return n.useEffect(() => {
      null == t && (0, u.fetchGuildForPopout)(l.id)
    }, [l.id, t]), (0, a.jsx)("div", {
      className: N.sidebarCardWrapper,
      children: (0, a.jsxs)("div", {
        className: N.sidebarCard,
        children: [(0, a.jsx)(i.Heading, {
          className: N.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: S.default.Messages.GUILD_HOME_ABOUT
        }), (0, a.jsx)(i.Text, {
          className: N.guildDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: l.description
        }), (0, a.jsx)("div", {
          className: N.guildInfo,
          children: (null == t ? void 0 : t.memberCount) != null && (null == t ? void 0 : t.presenceCount) != null && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: N.dotOnline
            }), (0, a.jsx)(i.Text, {
              className: N.guildInfoText,
              variant: "text-xs/normal",
              color: "text-muted",
              children: S.default.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                online: null == t ? void 0 : t.presenceCount,
                total: null == t ? void 0 : t.memberCount
              })
            })]
          })
        })]
      })
    })
  }),
  p = e => {
    let {
      channelId: l,
      title: t,
      icon: u
    } = e, o = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(l)), v = (0, s.useStateFromStores)([m.default], () => m.default.getMessages(l)), S = (0, s.useStateFromStores)([h.default], () => h.default.can(I.Permissions.VIEW_CHANNEL, o)), j = v.first(), p = (0, r.useForumPostMediaProperties)(j, !1), E = (null == p ? void 0 : p.length) > 0 ? p[0] : null, _ = null != o && null == j && !v.loadingMore && !v.ready && !v.hasFetched && S;
    n.useEffect(() => {
      _ && d.default.fetchMessages({
        channelId: l,
        after: l,
        limit: 5
      })
    }, [l, _]);
    let M = e => {
      null != o && (e.shiftKey ? (0, C.selectHomeResourceChannel)(o.guild_id, o.id) : c.default.openResourceChannelAsSidebar({
        guildId: o.guild_id,
        channelId: o.id
      }))
    };
    return (0, a.jsx)(i.Clickable, {
      className: N.resourceChannel,
      onClick: e => M(e),
      children: (0, a.jsxs)(a.Fragment, {
        children: [(() => {
          let e = x.default.getResourceChannelIconURL({
            channelId: l,
            icon: u
          });
          return null != u && null != e ? (0, a.jsx)("img", {
            src: e,
            className: N.resourceImage,
            alt: "",
            "aria-hidden": !0
          }) : null != E ? (0, a.jsx)("img", {
            className: N.resourceImage,
            src: E.src,
            alt: E.alt
          }) : (0, a.jsx)("div", {
            className: N.placeholderImage,
            children: (0, a.jsx)(g.default, {})
          })
        })(), (0, a.jsx)(i.Text, {
          className: N.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: t
        })]
      })
    }, l)
  },
  E = n.memo(function(e) {
    let {
      guild: l
    } = e, t = (0, v.default)(l.id);
    return 0 === t.length ? null : (0, a.jsx)("div", {
      className: N.sidebarCardWrapper,
      children: (0, a.jsxs)("div", {
        className: N.sidebarCard,
        children: [(0, a.jsx)(i.Heading, {
          className: N.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: S.default.Messages.GUILD_HOME_RESOURCES
        }), (0, a.jsx)("div", {
          className: N.resourceChannelsList,
          children: t.map(e => (0, a.jsx)(p, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  _ = n.memo(function(e) {
    let {
      guild: l,
      isNewMember: t
    } = e;
    return (0, a.jsxs)("aside", {
      className: N.sidebar,
      children: [(0, a.jsx)(j, {
        guild: l
      }), t && (0, a.jsx)(E, {
        guild: l
      })]
    })
  });
l.default = _