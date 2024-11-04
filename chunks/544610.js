let i;
n(47120), n(724458), n(653041);
var l,
    r,
    s,
    a,
    o = n(392711),
    c = n.n(o),
    u = n(442837),
    d = n(570140),
    h = n(279779),
    m = n(353926),
    p = n(428598),
    f = n(131704),
    g = n(624138),
    C = n(51144),
    x = n(592125),
    v = n(480294),
    _ = n(580005),
    I = n(699516),
    E = n(594174),
    b = n(981631);
let S = !1,
    Z = '',
    T = 0,
    N = [],
    j = !1,
    A = new Set(),
    y = null;
function P() {
    (Z = ''), (T = 0), (N = []), (A = new Set()), (S = !1), (y = null);
}
function M(e) {
    (Z = e), (T = 0), R();
}
function R() {
    if (!S) return !1;
    let e = x.Z.getChannel(y);
    if (0 === Z.trim().length)
        return (
            null != i && i.clearQuery(),
            (N = (function (e) {
                let t = I.Z.getFriendIDs();
                return (
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = E.default.getUser(t);
                            return null == n || n.isProvisional ? e : (e.push({ user: n }), e);
                        }, [])
                        .sort(k)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    return (
        null != i &&
            i.setQuery(
                Z,
                {
                    friends: !0,
                    provisional: !1
                },
                t,
                (function () {
                    let e = _.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof f.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return _.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let i = _.Z.getScoreWithoutFetchingLatest(e.id),
                                l = e.getRecipientId(),
                                r = I.Z.isFriend(l) ? 0.2 : 0,
                                s = null != x.Z.getDMFromUserId(l) ? 0.1 : 0;
                            n[l] = 1 + i / t + r + s;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function L() {
    if (!S) return !1;
    let e = j;
    return (j = c().some(I.Z.getRelationships(), (e) => e === b.OGo.FRIEND)) !== e;
}
function k(e, t) {
    if (v.Z.hasConsented(b.pjP.PERSONALIZATION)) {
        var n, i, l, r;
        let s = null !== (l = null === (n = p.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== l ? l : 0,
            a = null !== (r = null === (i = p.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== r ? r : 0;
        if (s !== a) return a - s;
    }
    return (0, g._I)(C.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, g._I)(C.ZP.getName(t.user).toLocaleLowerCase()));
}
function O(e) {
    let { results: t } = e;
    if (!!S && '' !== Z)
        (N = t
            .map((e) => {
                let { id: t } = e;
                return { user: E.default.getUser(t) };
            })
            .filter((e) => null != e.user)),
            F.emitChange();
}
function w() {
    return null != i && (i.destroy(), (i = null)), h.Z.getSearchContext(O, 1000);
}
function D(e) {
    if (e.key !== b.vTt) return !1;
    (S = !0), L(), (i = w()), (y = null), M('');
}
function U(e) {
    if (e.key !== b.vTt) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), P();
}
class H extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(E.default, x.Z, I.Z, m.Z, v.Z), this.syncWith([E.default, x.Z], R), this.syncWith([I.Z], L);
    }
    getResults() {
        return N;
    }
    hasFriends() {
        return j;
    }
    getSelectedUsers() {
        return A;
    }
    getQuery() {
        return Z;
    }
    getState() {
        return {
            query: Z,
            selectedRow: T,
            selectedUsers: A,
            results: N,
            hasFriends: j
        };
    }
}
(a = 'PrivateChannelRecipientsInviteStore'),
    (s = 'displayName') in (r = H)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a);
let F = new H(d.Z, {
    CONNECTION_OPEN: function () {
        P();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null != t) return !1;
        let i = S;
        return P(), (S = i), (y = n), R();
    },
    MODAL_PUSH: D,
    SHOW_ACTION_SHEET: D,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        (S = !0), L(), (i = w()), (y = e.channelId), M('');
    },
    MODAL_POP: U,
    HIDE_ACTION_SHEET: U,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        (y = e.channelId), M(e.query);
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        T = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let { userId: t } = e;
        A.add(t), (A = new Set(A));
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let { userId: t } = e;
        A.delete(t), (A = new Set(A));
    }
});
t.Z = F;
