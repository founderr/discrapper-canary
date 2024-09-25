let r;
var i,
    a = n(653041);
var o = n(47120);
var s = n(733860);
var l = n(724458);
var u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(433517),
    E = n(570140),
    f = n(212819),
    h = n(938078),
    p = n(220444),
    m = n(601070),
    I = n(210887),
    T = n(314897),
    g = n(592125),
    S = n(703558),
    A = n(984933),
    v = n(271383),
    N = n(430824),
    O = n(496675),
    R = n(306680),
    C = n(944486),
    y = n(914010),
    b = n(9156),
    L = n(483360),
    D = n(823379),
    M = n(981631),
    P = n(689938);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let w = 'seenQSTutorial',
    x = 5,
    G = 100,
    k = [f.h8.USER, f.h8.GROUP_DM, f.h8.TEXT_CHANNEL, f.h8.GUILD, f.h8.APPLICATION, f.h8.LINK, f.h8.IN_APP_NAVIGATION],
    B = 0,
    F = !1,
    Z = !1,
    V = null,
    H = [],
    Y = null,
    j = 0,
    W = [],
    K = [];
function z() {
    (Z = N.Z.getGuildCount() >= 3 || c().size(g.Z.getMutablePrivateChannels()) >= 20), (W = []);
}
function q(e) {
    let t = [];
    return (
        S.Z.getRecentlyEditedDrafts(S.d.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = Q(r);
            null != i && t.push(i);
        }),
        t
    );
}
function Q(e) {
    let t = (0, h.Z)(e);
    return null == t || (null != V && V !== t.type) ? null : t;
}
function X() {
    var e, t;
    let n = null !== (e = y.Z.getGuildId()) && void 0 !== e ? e : void 0,
        r = null !== (t = C.Z.getChannelId()) && void 0 !== t ? t : void 0;
    switch (V) {
        case f.h8.USER: {
            let e = T.default.getId();
            return L.ZP.getRecentlyTalked(r, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case f.h8.APPLICATION:
            return L.ZP.queryApplications({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case f.h8.GUILD:
            return L.ZP.queryGuilds({
                query: '',
                limit: 100,
                fuzzy: !0
            });
        case f.h8.TEXT_CHANNEL:
            return L.ZP.queryChannels({
                query: '',
                guildId: y.Z.getGuildId(),
                limit: 100,
                fuzzy: !0
            });
        case f.h8.VOICE_CHANNEL:
            return L.ZP.queryChannels({
                query: '',
                guildId: y.Z.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: A.Zb
            });
    }
    let i = [],
        a = [];
    for (let e = 1; e < K.length; e += 1) {
        let t = Q(K[e]);
        if (null != t) ((t.type !== f.h8.TEXT_CHANNEL && t.type !== f.h8.VOICE_CHANNEL) || O.Z.can(M.Plq.VIEW_CHANNEL, t.record)) && a.push(t);
    }
    a.length > 0 && i.push((0, f.o6)(P.Z.Messages.QUICKSWITCHER_LAST_CHANNEL), ...a);
    let o = q((e) => e === r || K.includes(e));
    o.length > 0 && i.push((0, f.o6)(P.Z.Messages.QUICKSWITCHER_DRAFTS), ...o);
    let s = R.ZP.getMentionChannelIds()
        .filter((e) => e !== r && !K.includes(e))
        .map((e) => Q(e))
        .filter(D.lm)
        .reverse();
    if ((s.length > 0 && (i.push((0, f.o6)(P.Z.Messages.QUICKSWITCHER_MENTIONS)), (i = i.concat(s))), null != n)) {
        let e = A.ZP.getSelectableChannelIds(n)
            .filter((e) => {
                let t = g.Z.getChannel(e);
                return !(null == t || e === r || K.includes(e) || b.ZP.isChannelMuted(t.guild_id, e) || (null != t.parent_id && b.ZP.isChannelMuted(t.guild_id, t.parent_id))) && (0, p.d)(t);
            })
            .map((e) => Q(e))
            .filter((e) => e);
        Object.values(m.Z.getActiveJoinedUnreadThreadsForGuild(n)).forEach((t) => {
            for (let n in t) {
                let t = Q(n);
                null != t && e.push(t);
            }
        }),
            e.length > 0 && (i.push((0, f.o6)(P.Z.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), (i = i.concat(e)));
    }
    return c()(i)
        .uniqBy((e) => e.record.id)
        .value();
}
function $(e, t) {
    switch (V) {
        case f.h8.USER: {
            let t = N.Z.getGuild(y.Z.getGuildId());
            e.unshift((0, f.o6)(null != t ? P.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({ name: t.name }) : P.Z.Messages.QUICKSWITCHER_QUERYMODE_USERS)), (H = e);
            break;
        }
        case f.h8.TEXT_CHANNEL:
            e.unshift((0, f.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), (H = e);
            break;
        case f.h8.VOICE_CHANNEL:
            e.unshift((0, f.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), (H = e);
            break;
        case f.h8.GUILD:
            e.unshift((0, f.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), (H = e);
            break;
        case f.h8.APPLICATION:
            e.unshift((0, f.o6)(P.Z.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), (H = e);
            break;
        default:
            H = e;
    }
    if (t !== Y) (Y = t), (j = Math.max(t.length, j)), (B = (0, f.gJ)(f.a8.DOWN, -1, H));
    else {
        let e = H[B];
        null != e && e.type === f.h8.HEADER && (B = (0, f.gJ)(f.a8.DOWN, B, H));
    }
    el.emitChange();
}
function J(e) {
    var t;
    let { query: n, queryMode: i } = e,
        a = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : void 0,
        o = new Set(['user:'.concat(T.default.getId())]);
    null != a && o.add('guild:'.concat(a)),
        (r =
            null != r
                ? r
                : new f.ZP(en, k, null != i ? G : x, {
                      frecencyBoosters: !0,
                      blacklist: o
                  })),
        (Y = null),
        (j = n.length),
        (V = i),
        r.search(n);
}
function ee(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (K = K.filter((e) => e !== t)).unshift(t), K.length > 4 && (K.length = 4);
}
function et(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function en(e, t) {
    if (!et((e = '' === (t = t.trim()).trim() ? X() : e), W)) (W = e), $(e, t);
}
function er() {
    (Y = null), (j = 0), (W = []), null != r && (r.destroy(), (r = null));
}
function ei(e) {
    var t, n;
    let { query: i, queryMode: a } = e;
    if (null == r) return !1;
    let o = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : null;
    if (V !== a) {
        r.setResultTypes(null != a ? [a] : k), r.setLimit(null != a ? G : x);
        let e = null !== (n = y.Z.getGuildId()) && void 0 !== n ? n : void 0;
        a === f.h8.USER && null != e
            ? r.setOptions(
                  {
                      userFilters: {
                          guild: e,
                          friends: !0
                      }
                  },
                  !0
              )
            : a === f.h8.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions(
                    {
                        userFilters: null,
                        voiceChannelGuildFilter: void 0
                    },
                    !0
                );
    }
    (V = a), r.search(i, V === f.h8.USER ? o : void 0);
}
function ea(e) {
    B = e.selectedIndex;
}
function eo() {
    if (F) return !1;
    (F = !0), _.K.set(w, !0);
}
class es extends (i = d.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(v.ZP, N.Z, g.Z), this.syncWith([I.Z], () => !0), (F = _.K.get(w) || !1), (K = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []);
    }
    getState() {
        return { channelHistory: K };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r ? 0 : null == e ? r.results.reduce((e, t) => (t.type !== f.h8.HEADER ? e + 1 : e), 0) : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= M.Hqc;
        return Z && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds('', 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds('', 100).length : 0;
    }
    getChannelHistory() {
        return K;
    }
    getProps() {
        return {
            theme: I.Z.theme,
            query: null != r ? r.query : '',
            queryMode: V,
            results: H,
            selectedIndex: B,
            seenTutorial: F,
            maxQueryLength: j
        };
    }
}
U(es, 'displayName', 'QuickSwitcherStore'), U(es, 'persistKey', 'QuickSwitcherStore');
let el = new es(E.Z, {
    CONNECTION_OPEN: z,
    CONNECTION_OPEN_SUPPLEMENTAL: z,
    QUICKSWITCHER_SHOW: J,
    SHOW_ACTION_SHEET_QUICK_SWITCHER: J,
    QUICKSWITCHER_HIDE: er,
    OVERLAY_SET_INPUT_LOCKED: er,
    HIDE_ACTION_SHEET_QUICK_SWITCHER: er,
    QUICKSWITCHER_SEARCH: ei,
    QUICKSWITCHER_SELECT: ea,
    QUICKSWITCHER_SWITCH_TO: eo,
    CHANNEL_SELECT: ee
});
t.Z = el;
