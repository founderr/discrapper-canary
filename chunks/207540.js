"use strict";
n.r(t), n("47120");
var l = n("735250"),
  u = n("470079"),
  i = n("442837"),
  a = n("481060"),
  d = n("933557"),
  s = n("156699"),
  r = n("734893"),
  o = n("693196"),
  E = n("66999"),
  c = n("575830"),
  f = n("554747"),
  N = n("434404"),
  _ = n("144140"),
  S = n("314897"),
  T = n("430824"),
  h = n("496675"),
  C = n("981631"),
  g = n("689938"),
  m = n("893522");
t.default = e => {
  let {
    channel: t,
    onClose: n,
    onConfirm: v,
    transitionState: D
  } = e, I = (0, d.default)(t, !0), O = t.id, G = t.isForumPost(), A = (0, i.useStateFromStores)([T.default], () => T.default.getGuild(t.getGuildId())), L = (0, f.useGuildChannelScheduledEvents)(O), {
    isSubscriptionGated: M
  } = (0, E.default)(t.id), p = (0, c.default)(A, t), [x, U] = u.useState(), y = (0, i.useStateFromStores)([S.default], () => t.isOwner(S.default.getId()), [t]), H = (0, i.useStateFromStores)([h.default], () => h.default.can(t.isThread() ? C.Permissions.MANAGE_THREADS : C.Permissions.MANAGE_CHANNELS, t), [t]), R = (0, i.useStateFromStores)([_.default], () => {
    var e;
    return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
  }, [t.id]), B = G && (H || y && R < 1), F = L.length > 0 && (t.type === C.ChannelTypes.GUILD_VOICE || t.type === C.ChannelTypes.GUILD_STAGE_VOICE);
  if (u.useEffect(() => {
      (async () => {
        if (!await (0, s.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), O)) {
          U(r.ChannelEditBlockTypes.DEFAULT);
          return
        }
        let e = await (0, o.getBlockForChannelAlteration)(t.getGuildId(), O);
        if (null != e) {
          U(e);
          return
        }
      })()
    }, [t, O]), null != x) {
    let e;
    let t = g.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
    return e = x === r.ChannelEditBlockTypes.TODO ? g.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : x === r.ChannelEditBlockTypes.RESOURCE ? g.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : g.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(a.ModalRoot, {
      transitionState: D,
      "aria-label": g.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, l.jsx)(a.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: g.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, l.jsxs)(a.ModalContent, {
        className: m.modalContent,
        children: [(0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: t
        }), (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: e.format({
            onClick: () => {
              null != A && (N.default.open(A.id, C.GuildSettingsSections.ONBOARDING), null == n || n())
            }
          })
        })]
      }), (0, l.jsx)(a.ModalFooter, {
        children: (0, l.jsx)(a.Button, {
          onClick: n,
          children: g.default.Messages.OKAY
        })
      })]
    })
  }
  if (null == A) return null;
  if (A.hasFeature(C.GuildFeatures.COMMUNITY) && (A.rulesChannelId === O || A.publicUpdatesChannelId === O)) {
    let e = A.rulesChannelId === O,
      t = e ? g.default.Messages.DELETE_RULES_CHANNEL_BODY : g.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
    return (0, l.jsxs)(a.ModalRoot, {
      transitionState: D,
      "aria-label": g.default.Messages.CANNOT_DELETE_CHANNEL,
      children: [(0, l.jsx)(a.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: g.default.Messages.CANNOT_DELETE_CHANNEL
        })
      }), (0, l.jsxs)(a.ModalContent, {
        children: [(0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          className: m.__invalid_modalText,
          children: t
        }), (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          className: m.__invalid_modalText,
          children: g.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
            onClick: () => {
              N.default.open(A.id, C.GuildSettingsSections.COMMUNITY), null == n || n()
            }
          })
        })]
      }), (0, l.jsx)(a.ModalFooter, {
        children: (0, l.jsx)(a.Button, {
          onClick: n,
          children: g.default.Messages.OKAY
        })
      })]
    })
  } {
    let {
      deleteText: e,
      deleteBody: u
    } = (() => {
      if (t.type === C.ChannelTypes.GUILD_CATEGORY) return {
        deleteText: g.default.Messages.DELETE_CATEGORY,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: I
        })
      };
      if (t.isForumPost()) return {
        deleteText: B ? g.default.Messages.DELETE_FORUM_POST : g.default.Messages.DELETE_MESSAGE,
        deleteBody: B && y && !H ? g.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
          postName: I
        }) : B ? g.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
          postName: I
        }) : g.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
      };
      if (t.isThread()) return {
        deleteText: g.default.Messages.DELETE_THREAD,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: I
        })
      };
      else if (M && p > 0) return {
        deleteText: g.default.Messages.DELETE_CHANNEL,
        deleteBody: g.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
          channelName: I,
          numGuildRoleSubscriptionMembers: p
        })
      };
      return {
        deleteText: g.default.Messages.DELETE_CHANNEL,
        deleteBody: g.default.Messages.DELETE_CHANNEL_BODY.format({
          channelName: I
        })
      }
    })();
    return (0, l.jsxs)(a.ModalRoot, {
      transitionState: D,
      "aria-label": e,
      children: [(0, l.jsx)(a.ModalHeader, {
        separator: !1,
        children: (0, l.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: e
        })
      }), (0, l.jsxs)(a.ModalContent, {
        className: m.modalContent,
        children: [(0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: u
        }), F ? (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: m.warningText,
          children: g.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
            count: L.length
          })
        }) : null]
      }), (0, l.jsxs)(a.ModalFooter, {
        children: [(0, l.jsx)(a.Button, {
          onClick: v,
          color: a.Button.Colors.RED,
          children: e
        }), (0, l.jsx)(a.Button, {
          onClick: n,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          children: g.default.Messages.CANCEL
        })]
      })]
    })
  }
}