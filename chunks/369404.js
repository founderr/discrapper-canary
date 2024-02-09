"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  h = n("599110"),
  g = n("306160"),
  p = n("322224"),
  I = n("152475"),
  T = n("397680"),
  C = n("613767"),
  N = n("822516"),
  y = n("669195"),
  m = n("936965"),
  S = n("745049"),
  R = n("49111"),
  x = n("782340");

function D(e) {
  let {
    guild: t,
    channel: D,
    guildScheduledEvent: A,
    isActive: L,
    recurrenceId: M,
    onActionTaken: V
  } = e, {
    scheduled_start_time: G,
    id: w,
    entity_type: O,
    guild_id: P
  } = A, {
    canManageGuildEvent: j
  } = (0, c.useManageResourcePermissions)(null != D ? D : t), F = j(A), b = (0, I.default)(A), k = (0, C.useIsChannelPublic)(null == D ? void 0 : D.id, A.id), {
    withinStartWindow: B
  } = (0, N.getEventTimeData)(G), H = (0, u.useStateFromStores)([_.default], () => (null == D ? !void 0 : !D.isGuildVocal()) || _.default.can(R.Permissions.CONNECT, D), [D]), U = (0, d.useShowMemberVerificationGate)(P), K = (0, T.default)(M, w);

  function z(e) {
    e.stopPropagation(), (0, m.default)(w, M, P)
  }
  async function W(e) {
    e.stopPropagation(), await a.default.joinGuild(P), v.default.addConditionalChangeListener(() => {
      let t = v.default.getGuild(P);
      return null == t || (!L && z(e), Z(e), !1)
    })
  }

  function Z(e) {
    e.stopPropagation();
    let t = E.default.getDefaultChannel(P);
    (0, i.closeAllModals)(), (0, s.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: F ? function(e) {
      e.stopPropagation(), F && !L && (0, i.openModal)(e => (0, l.jsx)(i.ConfirmModal, {
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
          channel: D,
          guild: t,
          ...n
        })
      })
    },
    onJoinClick: H || U ? function(e) {
      if (e.stopPropagation(), U) {
        null == V || V(), (0, o.openMemberVerificationModal)(P);
        return
      }(null == D ? void 0 : D.isGuildStageVoice()) ? ((0, f.connectAndOpen)(D), null == V || V()) : (null == D ? void 0 : D.isGuildVoice()) && (p.default.joinVoiceEvent(D.guild_id, D.id), null == V || V())
    } : void 0,
    onRsvpClick: z,
    onStartClick: F && B && !(null == K ? void 0 : K.is_canceled) ? function(e) {
      e.stopPropagation(), (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: A,
          onSuccess: V
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!b || !k) {
          let e = (0, y.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: w
          });
          (0, g.copy)(e), h.default.track(R.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
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
            channel: D,
            guildScheduledEvent: A,
            source: R.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: F && O === S.GuildScheduledEventEntityTypes.EXTERNAL && L ? function(e) {
      if (e.stopPropagation(), !F) return;
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
    onJoinGuildClick: W,
    onGoToGuildClick: Z
  }
}