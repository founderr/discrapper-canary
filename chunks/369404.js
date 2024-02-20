"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  u = n("272030"),
  r = n("851387"),
  s = n("233322"),
  d = n("157186"),
  o = n("817963"),
  c = n("393414"),
  f = n("716214"),
  E = n("923959"),
  v = n("305961"),
  g = n("957255"),
  h = n("599110"),
  p = n("306160"),
  m = n("322224"),
  C = n("152475"),
  S = n("397680"),
  _ = n("613767"),
  N = n("822516"),
  I = n("669195"),
  T = n("936965"),
  x = n("745049"),
  R = n("49111"),
  M = n("782340");

function L(e) {
  let {
    guild: t,
    channel: L,
    guildScheduledEvent: G,
    isActive: D,
    recurrenceId: j,
    onActionTaken: k
  } = e, {
    scheduled_start_time: A,
    id: y,
    entity_type: P,
    guild_id: V
  } = G, {
    canManageGuildEvent: U
  } = (0, o.useManageResourcePermissions)(null != L ? L : t), b = U(G), F = (0, C.default)(G), O = (0, _.useIsChannelPublic)(null == L ? void 0 : L.id, G.id), {
    withinStartWindow: w
  } = (0, N.getEventTimeData)(A), H = (0, a.useStateFromStores)([g.default], () => (null == L ? !void 0 : !L.isGuildVocal()) || g.default.can(R.Permissions.CONNECT, L), [L]), B = (0, d.useShowMemberVerificationGate)(V), z = (0, S.default)(j, y);

  function K(e) {
    e.stopPropagation(), (0, T.default)(y, j, V)
  }
  async function q(e) {
    e.stopPropagation(), await r.default.joinGuild(V), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(V);
      return null == t || (!D && K(e), Y(e), !1)
    })
  }

  function Y(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(V);
    (0, i.closeAllModals)(), (0, c.transitionToGuild)(V, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: b ? function(e) {
      e.stopPropagation(), b && !D && (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: M.default.Messages.DELETE,
        cancelText: M.default.Messages.CANCEL,
        onConfirm: () => m.default.deleteGuildEvent(y, V),
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, u.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, l.jsx)(e, {
          guildEventId: y,
          recurrenceId: j,
          channel: L,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: H || B ? function(e) {
      if (e.stopPropagation(), B) {
        null == k || k(), (0, s.openMemberVerificationModal)(V);
        return
      }(null == L ? void 0 : L.isGuildStageVoice()) ? ((0, f.connectAndOpen)(L), null == k || k()) : (null == L ? void 0 : L.isGuildVoice()) && (m.default.joinVoiceEvent(L.guild_id, L.id), null == k || k())
    } : void 0,
    onRsvpClick: K,
    onStartClick: b && w && !(null == z ? void 0 : z.is_canceled) ? function(e) {
      e.stopPropagation(), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: G,
          onSuccess: k
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!F || !O) {
          let e = (0, I.SHARE_EVENT_DETAILS_LINK)({
            guildId: V,
            guildEventId: y
          });
          (0, p.copy)(e), h.default.track(R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: V,
            guild_scheduled_event_id: y
          });
          return
        }(0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: L,
            guildScheduledEvent: G,
            source: R.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: b && P === x.GuildScheduledEventEntityTypes.EXTERNAL && D ? function(e) {
      if (e.stopPropagation(), !b) return;
      let t = () => {
        m.default.endEvent(y, V), (0, i.closeAllModals)()
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
    onJoinGuildClick: q,
    onGoToGuildClick: Y
  }
}