let n;
l(47120), l(653041), l(411104);
var s,
    r,
    a,
    i,
    u = l(442837),
    o = l(570140),
    c = l(278323),
    d = l(212819),
    h = l(933557),
    f = l(592125),
    p = l(430824),
    _ = l(293273),
    m = l(158776),
    N = l(699516),
    v = l(594174),
    g = l(55589),
    C = l(981631);
let E = [d.h8.TEXT_CHANNEL, d.h8.GROUP_DM, d.h8.USER],
    I = null,
    S = null,
    T = [],
    x = [];
function A(e) {
    (T = [...T, e]),
        (x = x.map((e) => ({
            ...e,
            sent: T.includes(e.data.record.id)
        }))),
        j.emitChange();
}
function L() {
    (I = null), null != n && (n.destroy(), (n = null)), null != S && S();
}
function y() {
    let e = null != I && null != I.application_id ? _.Z.getApplicationActivity(I.application_id) : null;
    if (null != I && (null == e || null == e.party || null == e.party.id)) return L();
}
class R extends (s = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    getActivity() {
        return I;
    }
    getQuery() {
        var e;
        return null !== (e = null == n ? void 0 : n.query) && void 0 !== e ? e : '';
    }
    getResults() {
        return x;
    }
}
(i = 'ActivityInviteModalStore'),
    (a = 'displayName') in (r = R)
        ? Object.defineProperty(r, a, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[a] = i);
let j = new R(o.Z, {
    ACTIVITY_INVITE_MODAL_OPEN: function (e) {
        (I = e.activity),
            (S = e.resolve),
            (T = []),
            null == n &&
                (n = new d.ZP(
                    (e, t) => {
                        var l;
                        return (
                            (l = e),
                            void ((x = (
                                '' === t.trim()
                                    ? (function () {
                                          let e = [];
                                          return (
                                              g.Z.getPrivateChannelIds().forEach((t) => {
                                                  let l = f.Z.getChannel(t);
                                                  if (null != l)
                                                      if (l.type === C.d4z.DM) {
                                                          let t = l.getRecipientId(),
                                                              n = null != t ? v.default.getUser(t) : null;
                                                          null != n &&
                                                              e.push({
                                                                  type: d.h8.USER,
                                                                  record: n,
                                                                  score: 0
                                                              });
                                                      } else
                                                          l.isMultiUserDM() &&
                                                              e.push({
                                                                  type: d.h8.GROUP_DM,
                                                                  record: l,
                                                                  score: 0
                                                              });
                                              }),
                                              e
                                          );
                                      })()
                                    : l
                            ).map((e) => {
                                switch (e.type) {
                                    case d.h8.USER: {
                                        let { record: t } = e;
                                        return {
                                            type: d.h8.USER,
                                            sent: T.includes(t.id),
                                            status: m.Z.getStatus(t.id),
                                            data: e
                                        };
                                    }
                                    case d.h8.TEXT_CHANNEL: {
                                        let { record: t } = e,
                                            l = f.Z.getChannel(t.parent_id),
                                            n = p.Z.getGuild(t.guild_id);
                                        return {
                                            type: d.h8.TEXT_CHANNEL,
                                            sent: T.includes(t.id),
                                            categoryName: null != l ? (0, h.F6)(l, v.default, N.Z) : '',
                                            guildName: null != n ? n.toString() : '',
                                            data: e
                                        };
                                    }
                                    case d.h8.GROUP_DM: {
                                        let { record: t } = e;
                                        return {
                                            type: d.h8.GROUP_DM,
                                            sent: T.includes(t.id),
                                            data: e
                                        };
                                    }
                                    default:
                                        throw Error('Unknown Result Type: '.concat(e.type));
                                }
                            })),
                            j.emitChange())
                        );
                    },
                    E,
                    100
                )),
            n.search('');
    },
    ACTIVITY_INVITE_MODAL_QUERY: function (e) {
        let { query: t } = e;
        null != n && n.search(t);
    },
    ACTIVITY_INVITE_MODAL_SEND: function (e) {
        if (null == I) return;
        let t = e.channelId,
            l = e.userId;
        null != t
            ? c.Z.sendActivityInvite({
                  channelId: t,
                  type: C.mFx.JOIN,
                  activity: I,
                  location: 'Channel Text Area - Invite to Join Modal'
              }).then(() => A(t))
            : null != l &&
              c.Z.sendActivityInviteUser({
                  userId: l,
                  type: C.mFx.JOIN,
                  activity: I,
                  location: 'Channel Text Area - Invite to Join Modal'
              }).then(() => A(l));
    },
    ACTIVITY_INVITE_MODAL_CLOSE: L,
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        return !!t && null != I && (L(), !0);
    },
    LOCAL_ACTIVITY_UPDATE: y,
    RPC_APP_DISCONNECTED: y
});
t.Z = j;
