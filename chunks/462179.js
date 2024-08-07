t.d(n, {
  Z: function() {
return S;
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(239091),
  o = t(749210),
  c = t(305325),
  s = t(281956),
  d = t(889161),
  u = t(703656),
  _ = t(922482),
  g = t(984933),
  v = t(430824),
  h = t(496675),
  f = t(626135),
  m = t(572004),
  I = t(482241),
  p = t(951539),
  x = t(894017),
  b = t(274311),
  E = t(854698),
  N = t(118998),
  C = t(139712),
  Z = t(765305),
  T = t(981631),
  j = t(689938);

function S(e) {
  let {
guild: n,
channel: S,
guildScheduledEvent: L,
isActive: k,
recurrenceId: D,
onActionTaken: R
  } = e, {
scheduled_start_time: M,
id: B,
entity_type: P,
guild_id: y
  } = L, {
canManageGuildEvent: w
  } = (0, d.XJ)(null != S ? S : n), A = w(L), G = (0, p.ZP)(L), O = (0, b.T)(null == S ? void 0 : S.id, L.id), {
withinStartWindow: U
  } = (0, E.ub)(M), V = (0, a.e7)([h.Z], () => (null == S ? !void 0 : !S.isGuildVocal()) || h.Z.can(T.Plq.CONNECT, S), [S]), F = (0, s.J)(y), z = (0, x.Z)(D, B);

  function H(e) {
e.stopPropagation(), (0, C.Z)(B, D, y);
  }
  async function W(e) {
e.stopPropagation(), await o.Z.joinGuild(y), v.Z.addConditionalChangeListener(() => null == v.Z.getGuild(y) || (!k && H(e), X(e), !1));
  }

  function X(e) {
e.stopPropagation();
let n = g.ZP.getDefaultChannel(y);
(0, l.closeAllModals)(), (0, u.XU)(y, null == n ? void 0 : n.id);
  }
  return {
onDeleteClick: A ? function(e) {
  if (e.stopPropagation(), !!A && !k)
    (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
      ...e,
      header: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
      confirmText: j.Z.Messages.DELETE,
      cancelText: j.Z.Messages.CANCEL,
      onConfirm: () => I.Z.deleteGuildEvent(B, y),
      children: (0, i.jsx)(l.Text, {
        variant: 'text-md/normal',
        children: j.Z.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
      })
    }));
} : void 0,
onContextMenu: function(e) {
  e.stopPropagation(), null != n && (0, r.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('15450'),
      t.e('37133')
    ]).then(t.bind(t, 215269));
    return t => (0, i.jsx)(e, {
      guildEventId: B,
      recurrenceId: D,
      channel: S,
      guild: n,
      ...t
    });
  });
},
onJoinClick: V || F ? function(e) {
  if (e.stopPropagation(), F) {
    null == R || R(), (0, c.hk)(y);
    return;
  }
  (null == S ? void 0 : S.isGuildStageVoice()) ? ((0, _.Cq)(S), null == R || R()) : (null == S ? void 0 : S.isGuildVoice()) && (I.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R());
} : void 0,
onRsvpClick: H,
onStartClick: A && U && !(null == z ? void 0 : z.is_canceled) ? function(e) {
  e.stopPropagation(), (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([
      t.e('84722'),
      t.e('89635')
    ]).then(t.bind(t, 296864));
    return n => (0, i.jsx)(e, {
      ...n,
      event: L,
      onSuccess: R
    });
  });
} : void 0,
onInviteClick: function(e) {
  if (e.stopPropagation(), null != n) {
    if (!G || !O) {
      let e = (0, N.H)({
        guildId: y,
        guildEventId: B
      });
      (0, m.JG)(e), f.default.track(T.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
        guild_id: y,
        guild_scheduled_event_id: B
      });
      return;
    }
    (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        t.e('7654'),
        t.e('1187'),
        t.e('54531')
      ]).then(t.bind(t, 560114));
      return t => (0, i.jsx)(e, {
        ...t,
        guild: n,
        channel: S,
        guildScheduledEvent: L,
        source: T.t4x.GUILD_EVENTS
      });
    });
  }
},
onEndClick: A && P === Z.WX.EXTERNAL && k ? function(e) {
  if (e.stopPropagation(), !A)
    return;
  let n = () => {
    I.Z.endEvent(B, y), (0, l.closeAllModals)();
  };
  (0, l.openModal)(e => (0, i.jsx)(l.ConfirmModal, {
    ...e,
    header: j.Z.Messages.END_EVENT,
    confirmText: j.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
    cancelText: j.Z.Messages.CANCEL,
    onConfirm: n,
    children: (0, i.jsx)(l.Text, {
      variant: 'text-md/normal',
      children: j.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
    })
  }));
} : void 0,
onJoinGuildClick: W,
onGoToGuildClick: X
  };
}