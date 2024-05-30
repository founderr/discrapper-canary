"use strict";
l.r(t), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("442837"),
  r = l("481060"),
  d = l("933557"),
  i = l("156699"),
  o = l("734893"),
  u = l("693196"),
  E = l("66999"),
  f = l("575830"),
  c = l("554747"),
  _ = l("434404"),
  T = l("144140"),
  N = l("314897"),
  C = l("430824"),
  h = l("496675"),
  O = l("981631"),
  g = l("689938"),
  M = l("893522");
t.default = e => {
  let {
    channel: t,
    onClose: l,
    onConfirm: D,
    transitionState: m
  } = e, A = (0, d.default)(t, !0), L = t.id, S = t.isForumPost(), x = (0, n.useStateFromStores)([C.default], () => C.default.getGuild(t.getGuildId())), I = (0, c.useGuildChannelScheduledEvents)(L), {
    isSubscriptionGated: R
  } = (0, E.default)(t.id), p = (0, f.default)(x, t), [H, B] = a.useState(), G = (0, n.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), j = (0, n.useStateFromStores)([h.default], () => h.default.can(t.isThread() ? O.Permissions.MANAGE_THREADS : O.Permissions.MANAGE_CHANNELS, t), [t]), v = (0, n.useStateFromStores)([T.default], () => {
    var e;
    return null !== (e = T.default.getCount(t.id)) && void 0 !== e ? e : 0
  }, [t.id]), y = S && (j || G && v < 1), F = I.length > 0 && (t.type === O.ChannelTypes.GUILD_VOICE || t.type === O.ChannelTypes.GUILD_STAGE_VOICE);
  if (a.useEffect(() => {
      (async () => {
        if (!await (0, i.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), L)) {
          B(o.ChannelEditBlockTypes.DEFAULT);
          return
        }
        let e = await (0, u.getBlockForChannelAlteration)(t.getGuildId(), L);
        if (null != e) {
          B(e);
          return
        }
      })()
    }, [t, L]), null != H) {
    let e;
    let t = g.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
    return e = H === o.ChannelEditBlockTypes.TODO ? g.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : H === o.ChannelEditBlockTypes.RESOURCE ? g.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : g.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, s.jsxs)(r.ModalRoot, {
      transitionState: m,
      "aria-label": g.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, s.jsx)(r.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          children: g.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, s.jsxs)(r.ModalContent, {
        className: M.modalContent,
        children: [(0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          children: t
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          children: e.format({
            onClick: () => {
              null != x && (_.default.open(x.id, O.GuildSettingsSections.ONBOARDING), null == l || l())
            }
          })
        })]
      }), (0, s.jsx)(r.ModalFooter, {
        children: (0, s.jsx)(r.Button, {
          onClick: l,
          children: g.default.Messages.OKAY
        })
      })]
    })
  }
  if (null == x) return null;
  if (x.hasFeature(O.GuildFeatures.COMMUNITY) && (x.rulesChannelId === L || x.publicUpdatesChannelId === L)) {
    let e = x.rulesChannelId === L,
      t = e ? g.default.Messages.DELETE_RULES_CHANNEL_BODY : g.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
    return (0, s.jsxs)(r.ModalRoot, {
      transitionState: m,
      "aria-label": g.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, s.jsx)(r.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          children: g.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, s.jsxs)(r.ModalContent, {
        children: [(0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: M.__invalid_modalText,
          children: t
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          className: M.__invalid_modalText,
          children: g.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
            onClick: () => {
              _.default.open(x.id, O.GuildSettingsSections.COMMUNITY), null == l || l()
            }
          })
        })]
      }), (0, s.jsx)(r.ModalFooter, {
        children: (0, s.jsx)(r.Button, {
          onClick: l,
          children: g.default.Messages.OKAY
        })
      })]
    })
  } {
    let {
      deleteText: e,
      deleteBody: a
    } = (() => {
      if (t.type === O.ChannelTypes.GUILD_CATEGORY) return {
        deleteText: g.default.Messages.DELETE_CATEGORY,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      };
      if (t.isForumPost()) return {
        deleteText: y ? g.default.Messages.DELETE_FORUM_POST : g.default.Messages.DELETE_MESSAGE,
        deleteBody: y && G && !j ? g.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
          postName: A
        }) : y ? g.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
          postName: A
        }) : g.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
      };
      if (t.isThread()) return {
        deleteText: g.default.Messages.DELETE_THREAD,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      };
      else if (R && p > 0) return {
        deleteText: g.default.Messages.DELETE_CHANNEL,
        deleteBody: g.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
          channelName: A,
          numGuildRoleSubscriptionMembers: p
        })
      };
      return {
        deleteText: g.default.Messages.DELETE_CHANNEL,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      }
    })();
    return (0, s.jsxs)(r.ModalRoot, {
      transitionState: m,
      "aria-label": e,
      children: [(0, s.jsx)(r.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(r.Heading, {
          variant: "heading-lg/semibold",
          children: e
        })
      }), (0, s.jsxs)(r.ModalContent, {
        className: M.modalContent,
        children: [(0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: a
        }), F ? (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: M.warningText,
          children: g.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
            count: I.length
          })
        }) : null]
      }), (0, s.jsxs)(r.ModalFooter, {
        children: [(0, s.jsx)(r.Button, {
          onClick: D,
          color: r.Button.Colors.RED,
          children: e
        }), (0, s.jsx)(r.Button, {
          onClick: l,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          children: g.default.Messages.CANCEL
        })]
      })]
    })
  }
}