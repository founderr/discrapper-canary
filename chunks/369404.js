"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  a = n("272030"),
  o = n("851387"),
  r = n("233322"),
  d = n("157186"),
  c = n("817963"),
  s = n("393414"),
  f = n("716214"),
  E = n("923959"),
  v = n("305961"),
  _ = n("957255"),
  h = n("599110"),
  g = n("306160"),
  p = n("322224"),
  I = n("152475"),
  T = n("397680"),
  C = n("613767"),
  N = n("822516"),
  y = n("669195"),
  R = n("936965"),
  m = n("745049"),
  S = n("49111"),
  A = n("782340");

function L(e) {
  let {
    guild: t,
    channel: L,
    guildScheduledEvent: M,
    isActive: x,
    recurrenceId: D,
    onActionTaken: V
  } = e, {
    scheduled_start_time: G,
    id: w,
    entity_type: O,
    guild_id: P
  } = M, {
    canManageGuildEvent: j
  } = (0, c.useManageResourcePermissions)(null != L ? L : t), b = j(M), k = (0, I.default)(M), F = (0, C.useIsChannelPublic)(null == L ? void 0 : L.id, M.id), {
    withinStartWindow: H
  } = (0, N.getEventTimeData)(G), B = (0, i.useStateFromStores)([_.default], () => (null == L ? !void 0 : !L.isGuildVocal()) || _.default.can(S.Permissions.CONNECT, L), [L]), U = (0, d.useShowMemberVerificationGate)(P), K = (0, T.default)(D, w);

  function z(e) {
    e.stopPropagation(), (0, R.default)(w, D, P)
  }
  async function W(e) {
    e.stopPropagation(), await o.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!x && z(e), Z(e), !1)
    })
  }

  function Z(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, u.closeAllModals)(), (0, s.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: b ? function(e) {
      e.stopPropagation(), b && !x && (0, u.openModal)(e => (0, l.jsx)(u.ConfirmModal, {
        ...e,
        header: A.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: A.default.Messages.DELETE,
        cancelText: A.default.Messages.CANCEL,
        onConfirm: () => p.default.deleteGuildEvent(w, P),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: A.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, a.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, l.jsx)(e, {
          guildEventId: w,
          recurrenceId: D,
          channel: L,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: B || U ? function(e) {
      if (e.stopPropagation(), U) {
        null == V || V(), (0, r.openMemberVerificationModal)(P);
        return
      }(null == L ? void 0 : L.isGuildStageVoice()) ? ((0, f.connectAndOpen)(L), null == V || V()) : (null == L ? void 0 : L.isGuildVoice()) && (p.default.joinVoiceEvent(L.guild_id, L.id), null == V || V())
    } : void 0,
    onRsvpClick: z,
    onStartClick: b && H && !(null == K ? void 0 : K.is_canceled) ? function(e) {
      e.stopPropagation(), (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: M,
          onSuccess: V
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!k || !F) {
          let e = (0, y.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: w
          });
          (0, g.copy)(e), h.default.track(S.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: P,
            guild_scheduled_event_id: w
          });
          return
        }(0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: L,
            guildScheduledEvent: M,
            source: S.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: b && O === m.GuildScheduledEventEntityTypes.EXTERNAL && x ? function(e) {
      if (e.stopPropagation(), !b) return;
      let t = () => {
        p.default.endEvent(w, P), (0, u.closeAllModals)()
      };
      (0, u.openModal)(e => (0, l.jsx)(u.ConfirmModal, {
        ...e,
        header: A.default.Messages.END_EVENT,
        confirmText: A.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: A.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: A.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: W,
    onGoToGuildClick: Z
  }
}