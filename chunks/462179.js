l.d(n, {
  Z: function() {
    return S
  }
});
var t = l(735250);
l(470079);
var i = l(442837),
  r = l(481060),
  s = l(239091),
  a = l(749210),
  o = l(305325),
  u = l(281956),
  c = l(889161),
  d = l(703656),
  v = l(922482),
  h = l(984933),
  E = l(430824),
  g = l(496675),
  f = l(626135),
  m = l(572004),
  x = l(482241),
  _ = l(951539),
  I = l(894017),
  Z = l(274311),
  N = l(854698),
  T = l(118998),
  j = l(139712),
  C = l(765305),
  p = l(981631),
  L = l(689938);

function S(e) {
  let {
    guild: n,
    channel: S,
    guildScheduledEvent: M,
    isActive: P,
    recurrenceId: R,
    onActionTaken: b
  } = e, {
    scheduled_start_time: y,
    id: k,
    entity_type: D,
    guild_id: A
  } = M, {
    canManageGuildEvent: G
  } = (0, c.XJ)(null != S ? S : n), U = G(M), O = (0, _.ZP)(M), V = (0, Z.T)(null == S ? void 0 : S.id, M.id), {
    withinStartWindow: w
  } = (0, N.ub)(y), B = (0, i.e7)([g.Z], () => (null == S ? !void 0 : !S.isGuildVocal()) || g.Z.can(p.Plq.CONNECT, S), [S]), F = (0, u.J)(A), H = (0, I.Z)(R, k);

  function z(e) {
    e.stopPropagation(), (0, j.Z)(k, R, A)
  }
  async function X(e) {
    e.stopPropagation(), await a.Z.joinGuild(A), E.Z.addConditionalChangeListener(() => null == E.Z.getGuild(A) || (!P && z(e), W(e), !1))
  }

  function W(e) {
    e.stopPropagation();
    let n = h.ZP.getDefaultChannel(A);
    (0, r.closeAllModals)(), (0, d.XU)(A, null == n ? void 0 : n.id)
  }
  return {
    onDeleteClick: U ? function(e) {
      if (e.stopPropagation(), !!U && !P)(0, r.openModal)(e => (0, t.jsx)(r.ConfirmModal, {
        ...e,
        header: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
        confirmText: L.Z.Messages.DELETE,
        cancelText: L.Z.Messages.CANCEL,
        onConfirm: () => x.Z.deleteGuildEvent(k, A),
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/normal",
          children: L.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
        })
      }))
    } : void 0,
    onContextMenu: function(e) {
      e.stopPropagation(), null != n && (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([l.e("15450"), l.e("37133")]).then(l.bind(l, 215269));
        return l => (0, t.jsx)(e, {
          guildEventId: k,
          recurrenceId: R,
          channel: S,
          guild: n,
          ...l
        })
      })
    },
    onJoinClick: B || F ? function(e) {
      if (e.stopPropagation(), F) {
        null == b || b(), (0, o.hk)(A);
        return
      }(null == S ? void 0 : S.isGuildStageVoice()) ? ((0, v.Cq)(S), null == b || b()) : (null == S ? void 0 : S.isGuildVoice()) && (x.Z.joinVoiceEvent(S.guild_id, S.id), null == b || b())
    } : void 0,
    onRsvpClick: z,
    onStartClick: U && w && !(null == H ? void 0 : H.is_canceled) ? function(e) {
      e.stopPropagation(), (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("84722"), l.e("48526")]).then(l.bind(l, 296864));
        return n => (0, t.jsx)(e, {
          ...n,
          event: M,
          onSuccess: b
        })
      })
    } : void 0,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != n) {
        if (!O || !V) {
          let e = (0, T.H)({
            guildId: A,
            guildEventId: k
          });
          (0, m.JG)(e), f.default.track(p.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: A,
            guild_scheduled_event_id: k
          });
          return
        }(0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("49237"), l.e("99387"), l.e("7654"), l.e("1187"), l.e("30987")]).then(l.bind(l, 560114));
          return l => (0, t.jsx)(e, {
            ...l,
            guild: n,
            channel: S,
            guildScheduledEvent: M,
            source: p.t4x.GUILD_EVENTS
          })
        })
      }
    },
    onEndClick: U && D === C.WX.EXTERNAL && P ? function(e) {
      if (e.stopPropagation(), !U) return;
      let n = () => {
        x.Z.endEvent(k, A), (0, r.closeAllModals)()
      };
      (0, r.openModal)(e => (0, t.jsx)(r.ConfirmModal, {
        ...e,
        header: L.Z.Messages.END_EVENT,
        confirmText: L.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: L.Z.Messages.CANCEL,
        onConfirm: n,
        children: (0, t.jsx)(r.Text, {
          variant: "text-md/normal",
          children: L.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    } : void 0,
    onJoinGuildClick: X,
    onGoToGuildClick: W
  }
}