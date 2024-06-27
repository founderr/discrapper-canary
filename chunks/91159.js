"use strict";
n.d(t, {
  A_: function() {
    return S
  },
  Ok: function() {
    return O
  },
  U4: function() {
    return A
  },
  Ye: function() {
    return T.Z
  },
  ZJ: function() {
    return m
  },
  q: function() {
    return N
  }
}), n(789020);
var i = n(913527),
  r = n.n(i),
  s = n(442837),
  o = n(367907),
  a = n(731429),
  l = n(306680),
  u = n(9156),
  _ = n(626135),
  c = n(630388),
  d = n(621600),
  E = n(709054),
  I = n(569471),
  T = n(814391),
  h = n(124368),
  f = n(981631);

function S() {
  (0, o.yw)(f.rMx.THREAD_BROWSER_TAB_CHANGED)
}

function A() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
  (0, o.yw)(f.rMx.OPEN_MODAL, {
    type: "Thread Browser",
    location_section: e
  })
}

function N() {
  _.default.track(f.rMx.OPEN_POPOUT, {
    type: "Active Threads Popout"
  })
}

function m(e, t) {
  var n, i;
  let r = (0, a.K)(e);
  if (null == r) return;
  let s = e.getGuildId(),
    o = e.parent_id,
    l = (0, d.I)(s, o),
    E = e => {
      if ((0, c.yE)(e, h.iN.ALL_MESSAGES)) return d.$R[f.bL.ALL_MESSAGES];
      if ((0, c.yE)(e, h.iN.ONLY_MENTIONS)) return d.$R[f.bL.ONLY_MENTIONS];
      if ((0, c.yE)(e, h.iN.NO_MESSAGES)) return d.$R[f.bL.NO_MESSAGES];
      return d.$R[f.bL.NULL]
    },
    T = null !== (n = I.Z.flags(e.id)) && void 0 !== n ? n : 0,
    S = E(T),
    A = I.Z.isMuted(e.id),
    N = (0, d.sK)(I.Z.getMuteConfig(e.id)),
    {
      can_send_message: m,
      ...O
    } = r,
    R = {
      ...O,
      channel_id: e.id,
      guild_id: s,
      parent_id: o,
      channel_type: e.type,
      has_interacted_with_thread: (T & h.iN.HAS_INTERACTED) != 0,
      parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(s, o),
      old_thread_notification_setting: S,
      new_thread_notification_setting: null != t.flags ? E(t.flags) : S,
      parent_notification_setting: l.channel_message_notification_settings,
      old_thread_is_muted: A,
      new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : A,
      old_thread_muted_until: N,
      new_thread_muted_until: null != t.mute_config ? (0, d.sK)(t.mute_config) : N
    };
  _.default.track(f.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, R)
}
n(689938);
let O = e => {
  var t, n;
  let i = (0, s.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
    o = null != i ? E.default.extractTimestamp(i) : null,
    a = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
    u = null != a ? r()(a).valueOf() : null;
  return null !== (n = null != o ? o : u) && void 0 !== n ? n : E.default.extractTimestamp(e.id)
}