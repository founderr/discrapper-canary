"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  r = n("272030"),
  a = n("851387"),
  o = n("233322"),
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
  m = n("669195"),
  S = n("936965"),
  y = n("745049"),
  R = n("49111"),
  x = n("782340");

function A(e) {
  let {
    guild: t,
    channel: A,
    guildScheduledEvent: D,
    isActive: L,
    recurrenceId: M,
    onActionTaken: V
  } = e, {
    scheduled_start_time: G,
    id: w,
    entity_type: O,
    guild_id: P
  } = D, {
    canManageGuildEvent: F
  } = (0, c.useManageResourcePermissions)(null != A ? A : t), j = F(D), B = (0, I.default)(D), H = (0, N.useIsChannelPublic)(null == A ? void 0 : A.id, D.id), {
    withinStartWindow: b
  } = (0, C.getEventTimeData)(G), k = (0, u.useStateFromStores)([_.default], () => (null == A ? !void 0 : !A.isGuildVocal()) || _.default.can(R.Permissions.CONNECT, A), [A]), U = (0, d.useShowMemberVerificationGate)(P), z = (0, T.default)(M, w);

  function W(e) {
    e.stopPropagation(), (0, S.default)(w, M, P)
  }
  async function Z(e) {
    e.stopPropagation(), await a.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!L && W(e), X(e), !1)
    })
  }

  function X(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, i.closeAllModals)(), (0, s.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: j ? function(e) {
      e.stopPropagation(), j && !L && (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: x.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: x.default.Messages.DELETE,
        cancelText: x.default.Messages.CANCEL,
        onConfirm: () => p.default.deleteGuildEvent(w, P),
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: x.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("110374").then(n.bind(n, "110374"));
        return n => (0, l.jsx)(e, {
          guildEventId: w,
          recurrenceId: M,
          channel: A,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: k || U ? function(e) {
      if (e.stopPropagation(), U) {
        null == V || V(), (0, o.openMemberVerificationModal)(P);
        return
      }(null == A ? void 0 : A.isGuildStageVoice()) ? ((0, f.connectAndOpen)(A), null == V || V()) : (null == A ? void 0 : A.isGuildVoice()) && (p.default.joinVoiceEvent(A.guild_id, A.id), null == V || V())
    } : void 0,
    onRsvpClick: W,
    onStartClick: j && b && !(null == z ? void 0 : z.is_canceled) ? function(e) {
      e.stopPropagation(), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: D,
          onSuccess: V
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!B || !H) {
          let e = (0, m.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: w
          });
          (0, h.copy)(e), g.default.track(R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: P,
            guild_scheduled_event_id: w
          });
          return
        }(0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: A,
            guildScheduledEvent: D,
            source: R.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: j && O === y.GuildScheduledEventEntityTypes.EXTERNAL && L ? function(e) {
      if (e.stopPropagation(), !j) return;
      let t = () => {
        p.default.endEvent(w, P), (0, i.closeAllModals)()
      };
      (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
        ...e,
        header: x.default.Messages.END_EVENT,
        confirmText: x.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: x.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: x.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: Z,
    onGoToGuildClick: X
  }
}