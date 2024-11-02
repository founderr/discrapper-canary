n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(131704),
    f = n(592125);
let _ = {};
function h(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(p);
}
function p(e) {
    if (!d.AW.has(e.type)) return !1;
    let t = (function (e) {
        if (!(e.id in _)) {
            var t, n;
            _[e.id] = {
                guildId: e.guild_id,
                parentId: e.parent_id,
                memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
            };
        }
        return _[e.id];
    })(e);
    null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function m(e) {
    let { channel: t } = e;
    return p(t);
}
function g(e) {
    let { threads: t } = e;
    t.forEach(v);
}
function E(e) {
    let t = !1;
    for (let n of e.messages) for (let e of n) t = v(e.thread) || t;
    return (
        e.threads.forEach((e) => {
            t = v(e) || t;
        }),
        t
    );
}
function v(e) {
    if (null != e && !(e.id in _)) {
        let t = f.Z.getChannel(e.id);
        if (null != t) return p(t), !0;
    }
    return !1;
}
class I extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z);
    }
    getMemberCount(e) {
        var t, n;
        return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null;
    }
    getMemberIdsPreview(e) {
        var t, n;
        return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null;
    }
    getInitialOverlayState() {
        return _;
    }
}
(s = 'ThreadMembersStore'),
    (a = 'displayName') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new I(c.Z, {
        CONNECTION_OPEN: function (e) {
            (_ = {}), e.guilds.forEach(h);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { threadMembers: t } = e;
            _ = { ...t };
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            h(t);
        },
        GUILD_DELETE: function (e) {
            var t;
            let { guild: n } = e;
            (t = n.id), (_ = l().omitBy(_, (e) => e.guildId === t));
        },
        CHANNEL_DELETE: function (e) {
            var t;
            let { channel: n } = e;
            (t = n.id), (_ = l().omitBy(_, (e) => e.parentId === t));
        },
        THREAD_CREATE: m,
        THREAD_UPDATE: m,
        THREAD_LIST_SYNC: function (e) {
            let { threads: t } = e;
            t.forEach(p);
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let t = _[e.id];
            if (null == t) return !1;
            null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
        },
        SEARCH_FINISH: E,
        MOD_VIEW_SEARCH_FINISH: E,
        LOAD_THREADS_SUCCESS: g,
        LOAD_ARCHIVED_THREADS_SUCCESS: g,
        THREAD_DELETE: function (e) {
            let { channel: t } = e;
            delete _[t.id];
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = v(n.thread) || t;
            return t;
        }
    }));
