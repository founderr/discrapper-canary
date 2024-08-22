let i;
n(47120), n(724458), n(653041);
var a,
    s,
    l,
    r,
    o = n(392711),
    c = n.n(o),
    u = n(442837),
    d = n(570140),
    h = n(279779),
    p = n(353926),
    m = n(428598),
    _ = n(131704),
    f = n(624138),
    E = n(51144),
    g = n(592125),
    C = n(480294),
    I = n(580005),
    x = n(699516),
    T = n(594174),
    N = n(981631);
let S = !1,
    v = '',
    Z = 0,
    A = [],
    M = !1,
    b = new Set(),
    R = null;
function L() {
    (v = ''), (Z = 0), (A = []), (b = new Set()), (S = !1), (R = null);
}
function j(e) {
    (v = e), (Z = 0), O();
}
function O() {
    if (!S) return !1;
    let e = g.Z.getChannel(R);
    if (0 === v.trim().length)
        return (
            null != i && i.clearQuery(),
            (A = (function (e) {
                let t = x.Z.getFriendIDs();
                return (
                    (null == e ? void 0 : e.isPrivate()) && (t = t.filter((t) => !e.recipients.includes(t))),
                    t
                        .reduce((e, t) => {
                            let n = T.default.getUser(t);
                            return null == n ? e : (e.push({ user: n }), e);
                        }, [])
                        .sort(y)
                );
            })(e)),
            !0
        );
    let t = null != e ? e.recipients : [];
    return (
        null != i &&
            i.setQuery(
                v,
                { friends: !0 },
                t,
                (function () {
                    let e = I.Z.getFrequentlyWithoutFetchingLatest().filter((e) => e instanceof _.mn && e.isDM()),
                        t = Math.max(
                            ...e.map((e) => {
                                let { id: t } = e;
                                return I.Z.getScoreWithoutFetchingLatest(t);
                            })
                        ),
                        n = {};
                    return (
                        e.forEach((e) => {
                            let i = I.Z.getScoreWithoutFetchingLatest(e.id),
                                a = e.getRecipientId(),
                                s = x.Z.isFriend(a) ? 0.2 : 0,
                                l = null != g.Z.getDMFromUserId(a) ? 0.1 : 0;
                            n[a] = 1 + i / t + s + l;
                        }),
                        n
                    );
                })()
            ),
        !1
    );
}
function P() {
    if (!S) return !1;
    let e = M;
    return (M = c().some(x.Z.getRelationships(), (e) => e === N.OGo.FRIEND)) !== e;
}
function y(e, t) {
    if (C.Z.hasConsented(N.pjP.PERSONALIZATION)) {
        var n, i, a, s;
        let l = null !== (a = null === (n = m.Z.getUserAffinity(e.user.id)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== a ? a : 0,
            r = null !== (s = null === (i = m.Z.getUserAffinity(t.user.id)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== s ? s : 0;
        if (l !== r) return r - l;
    }
    return (0, f._I)(E.ZP.getName(e.user).toLocaleLowerCase()).localeCompare((0, f._I)(E.ZP.getName(t.user).toLocaleLowerCase()));
}
function D(e) {
    let { results: t } = e;
    if (!!S && '' !== v)
        (A = t
            .map((e) => {
                let { id: t } = e;
                return { user: T.default.getUser(t) };
            })
            .filter((e) => null != e.user)),
            G.emitChange();
}
function k() {
    return null != i && (i.destroy(), (i = null)), h.Z.getSearchContext(D, 1000);
}
function U(e) {
    if (e.key !== N.vTt) return !1;
    (S = !0), P(), (i = k()), (R = null), j('');
}
function w(e) {
    if (e.key !== N.vTt) return !1;
    B();
}
function B() {
    null != i && (i.destroy(), (i = null)), L();
}
class H extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(T.default, g.Z, x.Z, p.Z, C.Z), this.syncWith([T.default, g.Z], O), this.syncWith([x.Z], P);
    }
    getResults() {
        return A;
    }
    hasFriends() {
        return M;
    }
    getSelectedUsers() {
        return b;
    }
    getQuery() {
        return v;
    }
    getState() {
        return {
            query: v,
            selectedRow: Z,
            selectedUsers: b,
            results: A,
            hasFriends: M
        };
    }
}
(r = 'PrivateChannelRecipientsInviteStore'),
    (l = 'displayName') in (s = H)
        ? Object.defineProperty(s, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[l] = r);
let G = new H(d.Z, {
    CONNECTION_OPEN: function () {
        L();
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n } = e;
        if (null != t) return !1;
        let i = S;
        return L(), (S = i), (R = n), O();
    },
    MODAL_PUSH: U,
    SHOW_ACTION_SHEET: U,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN: function (e) {
        (S = !0), P(), (i = k()), (R = e.channelId), j('');
    },
    MODAL_POP: w,
    HIDE_ACTION_SHEET: w,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE: B,
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY: function (e) {
        (R = e.channelId), j(e.query);
    },
    PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT: function (e) {
        Z = e.row;
    },
    PRIVATE_CHANNEL_RECIPIENTS_ADD_USER: function (e) {
        let { userId: t } = e;
        b.add(t), (b = new Set(b));
    },
    PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER: function (e) {
        let { userId: t } = e;
        b.delete(t), (b = new Set(b));
    }
});
t.Z = G;
