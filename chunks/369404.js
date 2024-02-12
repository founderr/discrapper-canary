"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
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
  g = n("599110"),
  h = n("306160"),
  p = n("322224"),
  I = n("152475"),
  T = n("397680"),
  N = n("613767"),
  C = n("822516"),
  y = n("669195"),
  R = n("936965"),
  m = n("745049"),
  S = n("49111"),
  L = n("782340");

function M(e) {
  let {
    guild: t,
    channel: M,
    guildScheduledEvent: A,
    isActive: x,
    recurrenceId: V,
    onActionTaken: D
  } = e, {
    scheduled_start_time: G,
    id: w,
    entity_type: O,
    guild_id: P
  } = A, {
    canManageGuildEvent: j
  } = (0, c.useManageResourcePermissions)(null != M ? M : t), H = j(A), B = (0, I.default)(A), F = (0, N.useIsChannelPublic)(null == M ? void 0 : M.id, A.id), {
    withinStartWindow: k
  } = (0, C.getEventTimeData)(G), b = (0, i.useStateFromStores)([_.default], () => (null == M ? !void 0 : !M.isGuildVocal()) || _.default.can(S.Permissions.CONNECT, M), [M]), U = (0, d.useShowMemberVerificationGate)(P), z = (0, T.default)(V, w);

  function W(e) {
    e.stopPropagation(), (0, R.default)(w, V, P)
  }
  async function Z(e) {
    e.stopPropagation(), await o.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!x && W(e), X(e), !1)
    })
  }

  function X(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, u.closeAllModals)(), (0, s.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: H ? function(e) {
      e.stopPropagation(), H && !x && (0, u.openModal)(e => (0, l.jsx)(u.ConfirmModal, {
        ...e,
        header: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: L.default.Messages.DELETE,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: () => p.default.deleteGuildEvent(w, P),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
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
          recurrenceId: V,
          channel: M,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: b || U ? function(e) {
      if (e.stopPropagation(), U) {
        null == D || D(), (0, r.openMemberVerificationModal)(P);
        return
      }(null == M ? void 0 : M.isGuildStageVoice()) ? ((0, f.connectAndOpen)(M), null == D || D()) : (null == M ? void 0 : M.isGuildVoice()) && (p.default.joinVoiceEvent(M.guild_id, M.id), null == D || D())
    } : void 0,
    onRsvpClick: W,
    onStartClick: H && k && !(null == z ? void 0 : z.is_canceled) ? function(e) {
      e.stopPropagation(), (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: A,
          onSuccess: D
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!B || !F) {
          let e = (0, y.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: w
          });
          (0, h.copy)(e), g.default.track(S.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
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
            channel: M,
            guildScheduledEvent: A,
            source: S.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: H && O === m.GuildScheduledEventEntityTypes.EXTERNAL && x ? function(e) {
      if (e.stopPropagation(), !H) return;
      let t = () => {
        p.default.endEvent(w, P), (0, u.closeAllModals)()
      };
      (0, u.openModal)(e => (0, l.jsx)(u.ConfirmModal, {
        ...e,
        header: L.default.Messages.END_EVENT,
        confirmText: L.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: Z,
    onGoToGuildClick: X
  }
}