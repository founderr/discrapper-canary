"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  d = n("272030"),
  r = n("851387"),
  a = n("233322"),
  o = n("157186"),
  c = n("817963"),
  s = n("393414"),
  f = n("716214"),
  E = n("923959"),
  v = n("305961"),
  _ = n("957255"),
  g = n("599110"),
  h = n("306160"),
  p = n("322224"),
  T = n("152475"),
  I = n("397680"),
  C = n("613767"),
  N = n("822516"),
  S = n("669195"),
  y = n("936965"),
  m = n("745049"),
  D = n("49111"),
  M = n("782340");

function R(e) {
  let {
    guild: t,
    channel: R,
    guildScheduledEvent: G,
    isActive: L,
    recurrenceId: x,
    onActionTaken: V
  } = e, {
    scheduled_start_time: A,
    id: F,
    entity_type: O,
    guild_id: P
  } = G, {
    canManageGuildEvent: k
  } = (0, c.useManageResourcePermissions)(null != R ? R : t), w = k(G), j = (0, T.default)(G), U = (0, C.useIsChannelPublic)(null == R ? void 0 : R.id, G.id), {
    withinStartWindow: b
  } = (0, N.getEventTimeData)(A), B = (0, u.useStateFromStores)([_.default], () => (null == R ? !void 0 : !R.isGuildVocal()) || _.default.can(D.Permissions.CONNECT, R), [R]), H = (0, o.useShowMemberVerificationGate)(P), X = (0, I.default)(x, F);

  function Y(e) {
    e.stopPropagation(), (0, y.default)(F, x, P)
  }
  async function z(e) {
    e.stopPropagation(), await r.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!L && Y(e), K(e), !1)
    })
  }

  function K(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, i.closeAllModals)(), (0, s.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: w ? function(e) {
      e.stopPropagation(), w && !L && (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: M.default.Messages.DELETE,
        cancelText: M.default.Messages.CANCEL,
        onConfirm: () => p.default.deleteGuildEvent(F, P),
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, l.jsx)(e, {
          guildEventId: F,
          recurrenceId: x,
          channel: R,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: B || H ? function(e) {
      if (e.stopPropagation(), H) {
        null == V || V(), (0, a.openMemberVerificationModal)(P);
        return
      }(null == R ? void 0 : R.isGuildStageVoice()) ? ((0, f.connectAndOpen)(R), null == V || V()) : (null == R ? void 0 : R.isGuildVoice()) && (p.default.joinVoiceEvent(R.guild_id, R.id), null == V || V())
    } : void 0,
    onRsvpClick: Y,
    onStartClick: w && b && !(null == X ? void 0 : X.is_canceled) ? function(e) {
      e.stopPropagation(), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: G,
          onSuccess: V
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!j || !U) {
          let e = (0, S.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: F
          });
          (0, h.copy)(e), g.default.track(D.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: P,
            guild_scheduled_event_id: F
          });
          return
        }(0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: R,
            guildScheduledEvent: G,
            source: D.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: w && O === m.GuildScheduledEventEntityTypes.EXTERNAL && L ? function(e) {
      if (e.stopPropagation(), !w) return;
      let t = () => {
        p.default.endEvent(F, P), (0, i.closeAllModals)()
      };
      (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: M.default.Messages.END_EVENT,
        confirmText: M.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: M.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: M.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: z,
    onGoToGuildClick: K
  }
}