var a = l(735250),
  i = l(470079),
  s = l(399606),
  r = l(481060),
  t = l(904245),
  d = l(368844),
  c = l(249842),
  o = l(838367),
  u = l(6025),
  h = l(592125),
  m = l(375954),
  g = l(496675),
  x = l(768581),
  Z = l(526120),
  C = l(825334),
  v = l(981631),
  f = l(689938),
  I = l(659073);
let j = i.memo(function(e) {
    let {
      guild: n
    } = e, l = (0, s.e7)([o.Z], () => o.Z.getGuild(n.id), [n]);
    return i.useEffect(() => {
      null == l && (0, c.P)(n.id)
    }, [n.id, l]), (0, a.jsx)("div", {
      className: I.sidebarCardWrapper,
      children: (0, a.jsxs)("div", {
        className: I.sidebarCard,
        children: [(0, a.jsx)(r.Heading, {
          className: I.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: f.Z.Messages.GUILD_HOME_ABOUT
        }), (0, a.jsx)(r.Text, {
          className: I.guildDescription,
          variant: "text-md/normal",
          color: "text-normal",
          children: n.description
        }), (0, a.jsx)("div", {
          className: I.guildInfo,
          children: (null == l ? void 0 : l.memberCount) != null && (null == l ? void 0 : l.presenceCount) != null && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("div", {
              className: I.dotOnline
            }), (0, a.jsx)(r.Text, {
              className: I.guildInfoText,
              variant: "text-xs/normal",
              color: "text-muted",
              children: f.Z.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                online: null == l ? void 0 : l.presenceCount,
                total: null == l ? void 0 : l.memberCount
              })
            })]
          })
        })]
      })
    })
  }),
  N = e => {
    let {
      channelId: n,
      title: l,
      icon: c
    } = e, o = (0, s.e7)([h.Z], () => h.Z.getChannel(n)), C = (0, s.e7)([m.Z], () => m.Z.getMessages(n)), f = (0, s.e7)([g.Z], () => g.Z.can(v.Plq.VIEW_CHANNEL, o)), j = C.first(), N = (0, d.zy)(j, !1), p = (null == N ? void 0 : N.length) > 0 ? N[0] : null, E = null != o && null == j && !C.loadingMore && !C.ready && !C.hasFetched && f;
    i.useEffect(() => {
      E && t.Z.fetchMessages({
        channelId: n,
        after: n,
        limit: 5
      })
    }, [n, E]);
    let _ = e => {
      null != o && (e.shiftKey ? (0, Z.C3)(o.guild_id, o.id) : u.Z.openResourceChannelAsSidebar({
        guildId: o.guild_id,
        channelId: o.id
      }))
    };
    return (0, a.jsx)(r.Clickable, {
      className: I.resourceChannel,
      onClick: e => _(e),
      children: (0, a.jsxs)(a.Fragment, {
        children: [(() => {
          let e = x.ZP.getResourceChannelIconURL({
            channelId: n,
            icon: c
          });
          return null != c && null != e ? (0, a.jsx)("img", {
            src: e,
            className: I.resourceImage,
            alt: "",
            "aria-hidden": !0
          }) : null != p ? (0, a.jsx)("img", {
            className: I.resourceImage,
            src: p.src,
            alt: p.alt
          }) : (0, a.jsx)("div", {
            className: I.placeholderImage,
            children: (0, a.jsx)(r.PaperIcon, {
              size: "xs",
              color: "currentColor"
            })
          })
        })(), (0, a.jsx)(r.Text, {
          className: I.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: l
        })]
      })
    }, n)
  },
  p = i.memo(function(e) {
    let {
      guild: n
    } = e, l = (0, C.Z)(n.id);
    return 0 === l.length ? null : (0, a.jsx)("div", {
      className: I.sidebarCardWrapper,
      children: (0, a.jsxs)("div", {
        className: I.sidebarCard,
        children: [(0, a.jsx)(r.Heading, {
          className: I.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "header-primary",
          children: f.Z.Messages.GUILD_HOME_RESOURCES
        }), (0, a.jsx)("div", {
          className: I.resourceChannelsList,
          children: l.map(e => (0, a.jsx)(N, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  E = i.memo(function(e) {
    let {
      guild: n,
      isNewMember: l
    } = e;
    return (0, a.jsxs)("aside", {
      className: I.sidebar,
      children: [(0, a.jsx)(j, {
        guild: n
      }), l && (0, a.jsx)(p, {
        guild: n
      })]
    })
  });
n.Z = E