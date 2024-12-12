var i,
    a = r(512722),
    s = r.n(a),
    o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(377108),
    d = r(524437),
    f = r(835913),
    _ = r(570140),
    h = r(262847),
    p = r(48481),
    m = r(526761);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = {
        ProtoClass: d.o8,
        proto: d.o8.create(),
        lazyLoaded: !1,
        editInfo: (0, m.JC)()
    },
    v = {
        ProtoClass: c.ji,
        proto: c.ji.create(),
        lazyLoaded: !0,
        editInfo: (0, m.JC)()
    },
    I = {
        [m.yP.PRELOADED_USER_SETTINGS]: E,
        [m.yP.FRECENCY_AND_FAVORITES_SETTINGS]: v
    },
    T = !1;
function b(e) {
    let { userSettingsProto: n } = e;
    null != n && ((E.proto = n), s()('string' != typeof E.proto, 'UserSettingsProto cannot be a string'));
    let { proto: r, isDirty: i, cleanupFuncs: a } = (0, p.xt)(E.proto, h.Z[m.yP.PRELOADED_USER_SETTINGS]);
    i && N(E),
        (E.proto = r),
        s()('string' != typeof E.proto, 'UserSettingsProto cannot be a string'),
        (E.editInfo.triggeredMigrations = i),
        (E.editInfo.cleanupFuncs = a),
        (E.editInfo.loaded = !0),
        Object.values(I).forEach((e) => {
            e.lazyLoaded && ((e.editInfo.loaded = !1), (e.editInfo.loading = !1));
        }),
        A();
}
function y() {
    A();
}
function S() {
    A(),
        Object.values(I).forEach((e) => {
            (e.proto = e.ProtoClass.create()), (e.editInfo = (0, m.JC)());
        });
}
function A() {
    Object.values(I).forEach((e) => {
        if (null != e.editInfo.timeout) {
            var n, r;
            clearTimeout(e.editInfo.timeout), (e.editInfo.timeout = void 0), (e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER), (e.editInfo.rateLimited = !1), (e.editInfo.offlineEditDataVersion = null !== (r = null === (n = e.proto.versions) || void 0 === n ? void 0 : n.dataVersion) && void 0 !== r ? r : 0);
        }
    });
}
function N(e) {
    null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), (e.editInfo = (0, m.JC)());
}
function C(e) {
    let { userSettingsProto: n } = e;
    (E.proto = (0, p.ac)(n)), s()('string' != typeof E.proto, 'UserSettingsProto cannot be a string');
}
function R(e) {
    let {
        settings: { proto: n, type: r },
        partial: i,
        resetEditInfo: a,
        local: o
    } = e;
    T = !o;
    let l = I[r];
    a && N(l), i ? ((l.proto = (0, p.re)(l.ProtoClass, l.proto, n)), s()('string' != typeof l.proto, 'UserSettingsProto cannot be a string')) : ((l.proto = n), s()('string' != typeof l.proto, 'UserSettingsProto cannot be a string'), (l.editInfo.loaded = !0), (l.editInfo.loading = !1));
}
function O(e) {
    let {
        settings: { type: n, changes: r }
    } = e;
    s()(!__OVERLAY__, 'this cannot run in the overlay');
    let i = I[n];
    return (
        (i.editInfo = {
            ...i.editInfo,
            ...r
        }),
        !1
    );
}
function D(e) {
    let { userSettings: n } = e;
    L(n);
}
function L(e) {
    null != e &&
        l().forEach(I, (n, r) => {
            var i, a;
            let o = e[Number(r)];
            if (null == o) return;
            let l = null !== (i = null == o ? void 0 : o.proto) && void 0 !== i ? i : '',
                u = (0, p.d5)(n.ProtoClass, l);
            if (null == u) return;
            (n.proto = u), s()('string' != typeof n.proto, 'UserSettingsProto cannot be a string');
            let c = null !== (a = null == o ? void 0 : o.protoToSave) && void 0 !== a ? a : null;
            if (null == c || null == o.offlineEditDataVersion) return;
            let d = (0, p.d5)(n.ProtoClass, c);
            null != d && ((n.editInfo.protoToSave = d), (n.editInfo.offlineEditDataVersion = o.offlineEditDataVersion));
        });
}
class x extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        L(e);
    }
    getState() {
        return this.computeState();
    }
    computeState() {
        return l().mapValues(I, (e) => {
            let n = { proto: (0, p.xU)(e.ProtoClass, e.proto) };
            return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && ((n.protoToSave = (0, p.xU)(e.ProtoClass, e.editInfo.protoToSave)), (n.offlineEditDataVersion = e.editInfo.offlineEditDataVersion)), n;
        });
    }
    hasLoaded(e) {
        return I[e].editInfo.loaded;
    }
    get settings() {
        return E.proto;
    }
    get frecencyWithoutFetchingLatest() {
        return v.proto;
    }
    get wasMostRecentUpdateFromServer() {
        return T;
    }
    getFullState() {
        return I;
    }
    getGuildFolders() {
        var e;
        let n = null === (e = E.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
        return null == n
            ? null
            : n.map((e) => {
                  var n, r, i;
                  let a = null === (n = e.id) || void 0 === n ? void 0 : n.value,
                      s = null === (r = e.color) || void 0 === r ? void 0 : r.value;
                  return {
                      guildIds: e.guildIds,
                      folderId: null == a ? void 0 : Number(a),
                      folderName: null === (i = e.name) || void 0 === i ? void 0 : i.value,
                      folderColor: null == s ? void 0 : Number(s)
                  };
              });
    }
    getGuildRecentsDismissedAt(e) {
        var n, r;
        if (null == e) return 0;
        let i = null === (r = this.settings.guilds) || void 0 === r ? void 0 : null === (n = r.guilds[e]) || void 0 === n ? void 0 : n.guildRecentsDismissedAt;
        return null == i ? 0 : f.E.toDate(i).getTime();
    }
    getDismissedGuildContent(e) {
        var n, r, i;
        return null == e ? null : null === (i = this.settings.guilds) || void 0 === i ? void 0 : null === (r = i.guilds) || void 0 === r ? void 0 : null === (n = r[e]) || void 0 === n ? void 0 : n.dismissedGuildContent;
    }
    getGuildsProto() {
        var e, n;
        return null !== (n = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : null;
    }
}
g(x, 'displayName', 'UserSettingsProtoStore'),
    g(x, 'persistKey', 'UserSettingsProtoStore-Cache'),
    (n.Z = new x(_.Z, {
        CACHE_LOADED: D,
        USER_SETTINGS_PROTO_UPDATE: R,
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: R,
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: O,
        CONNECTION_OPEN: b,
        CONNECTION_CLOSED: y,
        CONNECTION_RESUMED: y,
        OVERLAY_INITIALIZE: C,
        LOGOUT: S
    }));
