let s;
l(47120), l(653041), l(411104);
var n, r, a, i, u = l(442837),
  o = l(570140),
  c = l(278323),
  d = l(212819),
  h = l(933557),
  I = l(592125),
  E = l(430824),
  p = l(293273),
  T = l(158776),
  _ = l(699516),
  N = l(594174),
  C = l(55589),
  m = l(981631);
let A = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
  v = null,
  g = null,
  L = [],
  S = [];

function x(e) {
  L = [...L, e], S = S.map(e => ({
    ...e,
    sent: L.includes(e.data.record.id)
  })), R.emitChange()
}

function f() {
  v = null, null != s && (s.destroy(), s = null), null != g && g()
}

function M() {
  let e = null != v && null != v.application_id ? p.Z.getApplicationActivity(v.application_id) : null;
  if (null != v && (null == e || null == e.party || null == e.party.id)) return f()
}
class y extends(n = u.ZP.Store) {
  initialize() {
    this.waitFor(p.Z)
  }
  getActivity() {
    return v
  }
  getQuery() {
    var e;
    return null !== (e = null == s ? void 0 : s.query) && void 0 !== e ? e : ""
  }
  getResults() {
    return S
  }
}
i = "ActivityInviteModalStore", (a = "displayName") in(r = y) ? Object.defineProperty(r, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = i;
let R = new y(o.Z, {
  ACTIVITY_INVITE_MODAL_OPEN: function(e) {
    v = e.activity, g = e.resolve, L = [], null == s && (s = new d.ZP((e, t) => {
      var l;
      return l = e, void(S = ("" === t.trim() ? function() {
        let e = [];
        return C.Z.getPrivateChannelIds().forEach(t => {
          let l = I.Z.getChannel(t);
          if (null != l)
            if (l.type === m.d4z.DM) {
              let t = l.getRecipientId(),
                s = null != t ? N.default.getUser(t) : null;
              null != s && e.push({
                type: d.h8.USER,
                record: s,
                score: 0
              })
            } else l.isMultiUserDM() && e.push({
              type: d.h8.GROUP_DM,
              record: l,
              score: 0
            })
        }), e
      }() : l).map(e => {
        switch (e.type) {
          case d.h8.USER: {
            let {
              record: t
            } = e;
            return {
              type: d.h8.USER,
              sent: L.includes(t.id),
              status: T.Z.getStatus(t.id),
              data: e
            }
          }
          case d.h8.TEXT_CHANNEL: {
            let {
              record: t
            } = e, l = I.Z.getChannel(t.parent_id), s = E.Z.getGuild(t.guild_id);
            return {
              type: d.h8.TEXT_CHANNEL,
              sent: L.includes(t.id),
              categoryName: null != l ? (0, h.F6)(l, N.default, _.Z) : "",
              guildName: null != s ? s.toString() : "",
              data: e
            }
          }
          case d.h8.GROUP_DM: {
            let {
              record: t
            } = e;
            return {
              type: d.h8.GROUP_DM,
              sent: L.includes(t.id),
              data: e
            }
          }
          default:
            throw Error("Unknown Result Type: ".concat(e.type))
        }
      }), R.emitChange())
    }, A, 100)), s.search("")
  },
  ACTIVITY_INVITE_MODAL_QUERY: function(e) {
    let {
      query: t
    } = e;
    null != s && s.search(t)
  },
  ACTIVITY_INVITE_MODAL_SEND: function(e) {
    if (null == v) return;
    let t = e.channelId,
      l = e.userId;
    null != t ? c.Z.sendActivityInvite({
      channelId: t,
      type: m.mFx.JOIN,
      activity: v,
      location: "Channel Text Area - Invite to Join Modal"
    }).then(() => x(t)) : null != l && c.Z.sendActivityInviteUser({
      userId: l,
      type: m.mFx.JOIN,
      activity: v,
      location: "Channel Text Area - Invite to Join Modal"
    }).then(() => x(l))
  },
  ACTIVITY_INVITE_MODAL_CLOSE: f,
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    return !!t && null != v && (f(), !0)
  },
  LOCAL_ACTIVITY_UPDATE: M,
  RPC_APP_DISCONNECTED: M
});
t.Z = R