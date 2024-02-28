"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007");
var l = n("37983"),
  u = n("884691"),
  r = n("446674"),
  i = n("77078"),
  a = n("679653"),
  d = n("929278"),
  o = n("347895"),
  s = n("848848"),
  c = n("735251"),
  E = n("534222"),
  f = n("592407"),
  _ = n("610730"),
  N = n("271938"),
  T = n("305961"),
  h = n("957255"),
  m = n("49111"),
  S = n("782340"),
  R = n("221640"),
  v = e => {
    let {
      channel: t,
      onClose: n,
      onConfirm: v,
      transitionState: C
    } = e, g = (0, a.default)(t, !0), D = t.id, I = t.isForumPost(), M = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(t.getGuildId())), L = (0, E.useGuildChannelScheduledEvents)(D), {
      isSubscriptionGated: y
    } = (0, s.default)(t.id), A = (0, c.default)(M, t), [O, p] = u.useState(null), G = (0, r.useStateFromStores)([N.default], () => t.isOwner(N.default.getId()), [t]), U = (0, r.useStateFromStores)([h.default], () => h.default.can(t.isThread() ? m.Permissions.MANAGE_THREADS : m.Permissions.MANAGE_CHANNELS, t), [t]), w = (0, r.useStateFromStores)([_.default], () => {
      var e;
      return null !== (e = _.default.getCount(t.id)) && void 0 !== e ? e : 0
    }, [t.id]), H = I && (U || G && w < 1), F = L.length > 0 && (t.type === m.ChannelTypes.GUILD_VOICE || t.type === m.ChannelTypes.GUILD_STAGE_VOICE);
    if (u.useEffect(() => {
        (async () => {
          let e = await (0, d.isDefaultChannelThresholdMetAfterDelete)(t.getGuildId(), D);
          if (!e) {
            p("default");
            return
          }
          let n = await (0, o.getBlockForChannelDeletion)(t.getGuildId(), D);
          if (!1 !== n) {
            p(n);
            return
          }
        })()
      }, [t, D]), null != O) {
      let e;
      let t = S.default.Messages.DELETE_DEFAULT_CHANNEL_BODY;
      return e = "todo" === O ? S.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : "resource" === O ? S.default.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : S.default.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(i.ModalRoot, {
        transitionState: C,
        "aria-label": S.default.Messages.CANNOT_DELETE_CHANNEL,
        children: [(0, l.jsx)(i.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: S.default.Messages.CANNOT_DELETE_CHANNEL
          })
        }), (0, l.jsxs)(i.ModalContent, {
          className: R.modalContent,
          children: [(0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            children: t
          }), (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            children: e.format({
              onClick: () => {
                null != M && (f.default.open(M.id, m.GuildSettingsSections.ONBOARDING), null == n || n())
              }
            })
          })]
        }), (0, l.jsx)(i.ModalFooter, {
          children: (0, l.jsx)(i.Button, {
            onClick: n,
            children: S.default.Messages.OKAY
          })
        })]
      })
    }
    if (null == M) return null;
    if (M.hasFeature(m.GuildFeatures.COMMUNITY) && (M.rulesChannelId === D || M.publicUpdatesChannelId === D)) {
      let e = M.rulesChannelId === D,
        t = e ? S.default.Messages.DELETE_RULES_CHANNEL_BODY : S.default.Messages.DELETE_UPDATES_CHANNEL_BODY;
      return (0, l.jsxs)(i.ModalRoot, {
        transitionState: C,
        "aria-label": S.default.Messages.CANNOT_DELETE_CHANNEL,
        children: [(0, l.jsx)(i.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: S.default.Messages.CANNOT_DELETE_CHANNEL
          })
        }), (0, l.jsxs)(i.ModalContent, {
          children: [(0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            className: R.modalText,
            children: t
          }), (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            className: R.modalText,
            children: S.default.Messages.DESIGNATE_OTHER_CHANNEL.format({
              onClick: () => {
                f.default.open(M.id, m.GuildSettingsSections.COMMUNITY), null == n || n()
              }
            })
          })]
        }), (0, l.jsx)(i.ModalFooter, {
          children: (0, l.jsx)(i.Button, {
            onClick: n,
            children: S.default.Messages.OKAY
          })
        })]
      })
    } {
      let {
        deleteText: e,
        deleteBody: u
      } = (() => {
        if (t.type === m.ChannelTypes.GUILD_CATEGORY) return {
          deleteText: S.default.Messages.DELETE_CATEGORY,
          deleteBody: S.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        };
        if (t.isForumPost()) return {
          deleteText: H ? S.default.Messages.DELETE_FORUM_POST : S.default.Messages.DELETE_MESSAGE,
          deleteBody: H && G && !U ? S.default.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({
            postName: g
          }) : H ? S.default.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({
            postName: g
          }) : S.default.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
        };
        if (t.isThread()) return {
          deleteText: S.default.Messages.DELETE_THREAD,
          deleteBody: S.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        };
        else if (y && A > 0) return {
          deleteText: S.default.Messages.DELETE_CHANNEL,
          deleteBody: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
            channelName: g,
            numGuildRoleSubscriptionMembers: A
          })
        };
        return {
          deleteText: S.default.Messages.DELETE_CHANNEL,
          deleteBody: S.default.Messages.DELETE_CHANNEL_BODY.format({
            channelName: g
          })
        }
      })();
      return (0, l.jsxs)(i.ModalRoot, {
        transitionState: C,
        "aria-label": e,
        children: [(0, l.jsx)(i.ModalHeader, {
          separator: !1,
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            children: e
          })
        }), (0, l.jsxs)(i.ModalContent, {
          className: R.modalContent,
          children: [(0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-primary",
            children: u
          }), F ? (0, l.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            className: R.warningText,
            children: S.default.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({
              count: L.length
            })
          }) : null]
        }), (0, l.jsxs)(i.ModalFooter, {
          children: [(0, l.jsx)(i.Button, {
            onClick: v,
            color: i.Button.Colors.RED,
            children: e
          }), (0, l.jsx)(i.Button, {
            onClick: n,
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            children: S.default.Messages.CANCEL
          })]
        })]
      })
    }
  }