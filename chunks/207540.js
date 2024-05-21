"use strict";
l.r(t), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("442837"),
  d = l("481060"),
  r = l("933557"),
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
  M = l("689938"),
  g = l("893522");
t.default = e => {
  let {
    channel: t,
    onClose: l,
    onConfirm: D,
    transitionState: m
  } = e, A = (0, r.default)(t, !0), L = t.id, S = t.isForumPost(), x = (0, n.useStateFromStores)([C.default], () => C.default.getGuild(t.getGuildId())), I = (0, c.useGuildChannelScheduledEvents)(L), {
    isSubscriptionGated: R
  } = (0, E.default)(t.id), H = (0, f.default)(x, t), [p, B] = a.useState(), G = (0, n.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), j = (0, n.useStateFromStores)([h.default], () => h.default.can(t.isThread() ? O.Permissions.MANAGE_THREADS : O.Permissions.MANAGE_CHANNELS, t), [t]), v = (0, n.useStateFromStores)([T.default], () => {
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
    }, [t, L]), null != p) {
    let e;
    let t = M.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
    return e = p === o.ChannelEditBlockTypes.TODO ? M.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : p === o.ChannelEditBlockTypes.RESOURCE ? M.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : M.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, s.jsxs)(d.ModalRoot, {
      transitionState: m,
      "aria-label": M.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, s.jsx)(d.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          children: M.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, s.jsxs)(d.ModalContent, {
        className: g.modalContent,
        children: [(0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          children: e.format({
            onClick: () => {
              null != x && (_.default.open(x.id, O.GuildSettingsSections.ONBOARDING), null == l || l())
            }
          })
        })]
      }), (0, s.jsx)(d.ModalFooter, {
        children: (0, s.jsx)(d.Button, {
          onClick: l,
          children: M.default.Messages.OKAY
        })
      })]
    })
  }
  if (null == x) return null;
  if (x.hasFeature(O.GuildFeatures.COMMUNITY) && (x.rulesChannelId === L || x.publicUpdatesChannelId === L)) {
    let e = x.rulesChannelId === L,
      t = e ? M.default.Messages.DELETE_RULES_CHANNEL_BODY : M.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
    return (0, s.jsxs)(d.ModalRoot, {
      transitionState: m,
      "aria-label": M.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, s.jsx)(d.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          children: M.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, s.jsxs)(d.ModalContent, {
        children: [(0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          className: g.__invalid_modalText,
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          className: g.__invalid_modalText,
          children: M.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
            onClick: () => {
              _.default.open(x.id, O.GuildSettingsSections.COMMUNITY), null == l || l()
            }
          })
        })]
      }), (0, s.jsx)(d.ModalFooter, {
        children: (0, s.jsx)(d.Button, {
          onClick: l,
          children: M.default.Messages.OKAY
        })
      })]
    })
  } {
    let {
      deleteText: e,
      deleteBody: a
    } = (() => {
      if (t.type === O.ChannelTypes.GUILD_CATEGORY) return {
        deleteText: M.default.Messages.DELETE_CATEGORY,
        deleteBody: M.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      };
      if (t.isForumPost()) return {
        deleteText: y ? M.default.Messages.DELETE_FORUM_POST : M.default.Messages.DELETE_MESSAGE,
        deleteBody: y && G && !j ? M.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
          postName: A
        }) : y ? M.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
          postName: A
        }) : M.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
      };
      if (t.isThread()) return {
        deleteText: M.default.Messages.DELETE_THREAD,
        deleteBody: M.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      };
      else if (R && H > 0) return {
        deleteText: M.default.Messages.DELETE_CHANNEL,
        deleteBody: M.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
          channelName: A,
          numGuildRoleSubscriptionMembers: H
        })
      };
      return {
        deleteText: M.default.Messages.DELETE_CHANNEL,
        deleteBody: M.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: A
        })
      }
    })();
    return (0, s.jsxs)(d.ModalRoot, {
      transitionState: m,
      "aria-label": e,
      children: [(0, s.jsx)(d.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          children: e
        })
      }), (0, s.jsxs)(d.ModalContent, {
        className: g.modalContent,
        children: [(0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: a
        }), F ? (0, s.jsx)(d.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: g.warningText,
          children: M.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
            count: I.length
          })
        }) : null]
      }), (0, s.jsxs)(d.ModalFooter, {
        children: [(0, s.jsx)(d.Button, {
          onClick: D,
          color: d.Button.Colors.RED,
          children: e
        }), (0, s.jsx)(d.Button, {
          onClick: l,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          children: M.default.Messages.CANCEL
        })]
      })]
    })
  }
}