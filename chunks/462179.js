"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
});
var n = l("735250");
l("470079");
var i = l("442837"),
  a = l("481060"),
  r = l("239091"),
  s = l("749210"),
  u = l("305325"),
  d = l("281956"),
  o = l("889161"),
  c = l("703656"),
  f = l("922482"),
  v = l("984933"),
  E = l("430824"),
  h = l("496675"),
  m = l("626135"),
  _ = l("572004"),
  g = l("482241"),
  I = l("951539"),
  S = l("894017"),
  x = l("274311"),
  N = l("854698"),
  T = l("118998"),
  j = l("139712"),
  C = l("765305"),
  p = l("981631"),
  L = l("689938");

function R(e) {
  let {
    guild: t,
    channel: R,
    guildScheduledEvent: y,
    isActive: M,
    recurrenceId: A,
    onActionTaken: D
  } = e, {
    scheduled_start_time: b,
    id: G,
    entity_type: k,
    guild_id: P
  } = y, {
    canManageGuildEvent: U
  } = (0, o.useManageResourcePermissions)(null != R ? R : t), V = U(y), F = (0, I.default)(y), O = (0, x.useIsChannelPublic)(null == R ? void 0 : R.id, y.id), {
    withinStartWindow: w
  } = (0, N.getEventTimeData)(b), B = (0, i.useStateFromStores)([h.default], () => (null == R ? !void 0 : !R.isGuildVocal()) || h.default.can(p.Permissions.CONNECT, R), [R]), H = (0, d.useShowMemberVerificationGate)(P), z = (0, S.default)(A, G);

  function X(e) {
    e.stopPropagation(), (0, j.default)(G, A, P)
  }
  async function Y(e) {
    e.stopPropagation(), await s.default.joinGuild(P), E.default.addConditionalChangeListener(() => null == E.default.getGuild(P) || (!M && X(e), K(e), !1))
  }

  function K(e) {
    e.stopPropagation();
    let t = v.default.getDefaultChannel(P);
    (0, a.closeAllModals)(), (0, c.transitionToGuild)(P, null == t ? void 0 : t.id)
  }
  return {
    onDeleteClick: V ? function(e) {
      e.stopPropagation(), V && !M && (0, a.openModal)(e => (0, n.jsx)(a.ConfirmModal, {
        ...e,
        header: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: L.default.Messages.DELETE,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: () => g.default.deleteGuildEvent(G, P),
        children: (0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, r.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("15450"), l.e("37133")]).then(l.bind(l, "215269"));
        return l => (0, n.jsx)(e, {
          guildEventId: G,
          recurrenceId: A,
          channel: R,
          guild: t,
          ...l
        })
      })
    },
    onJoinClick: B || H ? function(e) {
      if (e.stopPropagation(), H) {
        null == D || D(), (0, u.openMemberVerificationModal)(P);
        return
      }(null == R ? void 0 : R.isGuildStageVoice()) ? ((0, f.connectAndOpen)(R), null == D || D()) : (null == R ? void 0 : R.isGuildVoice()) && (g.default.joinVoiceEvent(R.guild_id, R.id), null == D || D())
    } : void 0,
    onRsvpClick: X,
    onStartClick: V && w && !(null == z ? void 0 : z.is_canceled) ? function(e) {
      e.stopPropagation(), (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("84722"), l.e("11992")]).then(l.bind(l, "296864"));
        return t => (0, n.jsx)(e, {
          ...t,
          event: y,
          onSuccess: D
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!F || !O) {
          let e = (0, T.SHARE_EVENT_DETAILS_LINK)({
            guildId: P,
            guildEventId: G
          });
          (0, _.copy)(e), m.default.track(p.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: P,
            guild_scheduled_event_id: G
          });
          return
        }(0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("49237"), l.e("99387"), l.e("43643"), l.e("7654"), l.e("96626")]).then(l.bind(l, "560114"));
          return l => (0, n.jsx)(e, {
            ...l,
            guild: t,
            channel: R,
            guildScheduledEvent: y,
            source: p.InstantInviteSources.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: V && k === C.GuildScheduledEventEntityTypes.EXTERNAL && M ? function(e) {
      if (e.stopPropagation(), !V) return;
      let t = () => {
        g.default.endEvent(G, P), (0, a.closeAllModals)()
      };
      (0, a.openModal)(e => (0, n.jsx)(a.ConfirmModal, {
        ...e,
        header: L.default.Messages.END_EVENT,
        confirmText: L.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: L.default.Messages.CANCEL,
        onConfirm: t,
        children: (0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          children: L.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: Y,
    onGoToGuildClick: K
  }
}