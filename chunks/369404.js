"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var i = n("37983");
n("884691");
var r = n("446674"),
  l = n("77078"),
  u = n("272030"),
  a = n("851387"),
  s = n("233322"),
  o = n("157186"),
  d = n("817963"),
  c = n("393414"),
  f = n("716214"),
  E = n("923959"),
  _ = n("305961"),
  S = n("957255"),
  T = n("599110"),
  I = n("306160"),
  h = n("322224"),
  v = n("152475"),
  N = n("397680"),
  C = n("613767"),
  p = n("822516"),
  g = n("669195"),
  A = n("936965"),
  m = n("745049"),
  R = n("49111"),
  L = n("782340");

function P(e) {
  let {
    guild: t,
    channel: P,
    guildScheduledEvent: D,
    isActive: y,
    recurrenceId: U,
    onActionTaken: G
  } = e, {
    scheduled_start_time: O,
    id: x,
    entity_type: M,
    guild_id: b
  } = D, {
    canManageGuildEvent: w
  } = (0, d.useManageResourcePermissions)(null != P ? P : t), F = w(D), V = (0, v.default)(D), j = (0, C.useIsChannelPublic)(null == P ? void 0 : P.id, D.id), {
    withinStartWindow: H
  } = (0, p.getEventTimeData)(O), B = (0, r.useStateFromStores)([S.default], () => (null == P ? !void 0 : !P.isGuildVocal()) || S.default.can(R.Permissions.CONNECT, P), [P]), k = (0, o.useShowMemberVerificationGate)(b), Y = (0, N.default)(U, x);

  function Z(e) {
    e.stopPropagation(), (0, A.default)(x, U, b)
  }
  async function W(e) {
    e.stopPropagation(), await a.default.joinGuild(b), _.default.addConditionalChangeListener(() => {
      let t = _.default.getGuild(b);
      return null == t || (!y && Z(e), z(e), !1)
    })
  }

  function z(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(b);
    (0, l.closeAllModals)(), (0, c.transitionToGuild)(b, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: F ? function(e) {
      e.stopPropagation(), F && !y && (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
        ...e,
        header: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: L.default.Messages.DELETE,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: () => h.default.deleteGuildEvent(x, b),
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, i.jsx)(e, {
          guildEventId: x,
          recurrenceId: U,
          channel: P,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: B || k ? function(e) {
      if (e.stopPropagation(), k) {
        null == G || G(), (0, s.openMemberVerificationModal)(b);
        return
      }(null == P ? void 0 : P.isGuildStageVoice()) ? ((0, f.connectAndOpen)(P), null == G || G()) : (null == P ? void 0 : P.isGuildVoice()) && (h.default.joinVoiceEvent(P.guild_id, P.id), null == G || G())
    } : void 0,
    onRsvpClick: Z,
    onStartClick: F && H && !(null == Y ? void 0 : Y.is_canceled) ? function(e) {
      e.stopPropagation(), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, i.jsx)(e, {
          ...t,
          event: D,
          onSuccess: G
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!V || !j) {
          let e = (0, g.SHARE_EVENT_DETAILS_LINK)({
            guildId: b,
            guildEventId: x
          });
          (0, I.copy)(e), T.default.track(R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: b,
            guild_scheduled_event_id: x
          });
          return
        }(0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, i.jsx)(e, {
            ...n,
            guild: t,
            channel: P,
            guildScheduledEvent: D,
            source: R.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: F && M === m.GuildScheduledEventEntityTypes.EXTERNAL && y ? function(e) {
      if (e.stopPropagation(), !F) return;
      let t = () => {
        h.default.endEvent(x, b), (0, l.closeAllModals)()
      };
      (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
        ...e,
        header: L.default.Messages.END_EVENT,
        confirmText: L.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: W,
    onGoToGuildClick: z
  }
}