"use strict";
E.r(_), E.d(_, {
  default: function() {
    return M
  }
});
var t = E("627445"),
  o = E.n(t),
  I = E("917351"),
  T = E.n(I),
  r = E("446674"),
  a = E("713349"),
  n = E("151426"),
  i = E("801340"),
  A = E("913144"),
  s = E("275877"),
  R = E("116949"),
  N = E("397336");
let O = {
    ProtoClass: n.PreloadedUserSettings,
    proto: n.PreloadedUserSettings.create(),
    lazyLoaded: !1,
    editInfo: (0, N.createEmptyEditInfo)()
  },
  S = {
    ProtoClass: a.FrecencyUserSettings,
    proto: a.FrecencyUserSettings.create(),
    lazyLoaded: !0,
    editInfo: (0, N.createEmptyEditInfo)()
  },
  L = {
    [N.UserSettingsTypes.PRELOADED_USER_SETTINGS]: O,
    [N.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: S
  },
  l = !1;

function D() {
  C()
}

function C() {
  Object.values(L).forEach(e => {
    if (null != e.editInfo.timeout) {
      var _, E;
      clearTimeout(e.editInfo.timeout), e.editInfo.timeout = void 0, e.editInfo.timeoutDelay = Number.MAX_SAFE_INTEGER, e.editInfo.rateLimited = !1, e.editInfo.offlineEditDataVersion = null !== (E = null === (_ = e.proto.versions) || void 0 === _ ? void 0 : _.dataVersion) && void 0 !== E ? E : 0
    }
  })
}

function c(e) {
  null != e.editInfo.timeout && clearTimeout(e.editInfo.timeout), e.editInfo = (0, N.createEmptyEditInfo)()
}

function u(e) {
  let {
    settings: {
      proto: _,
      type: E
    },
    partial: t,
    resetEditInfo: I,
    local: T
  } = e;
  l = !T;
  let r = L[E];
  I && c(r), t ? (r.proto = (0, R.mergeTopLevelFields)(r.ProtoClass, r.proto, _), o("string" != typeof r.proto, "UserSettingsProto cannot be a string")) : (r.proto = _, o("string" != typeof r.proto, "UserSettingsProto cannot be a string"), r.editInfo.loaded = !0, r.editInfo.loading = !1)
}

function d(e) {
  null != e && T.forEach(L, (_, E) => {
    var t, I;
    let T = e[Number(E)];
    if (null == T) return;
    let r = null !== (t = null == T ? void 0 : T.proto) && void 0 !== t ? t : "",
      a = (0, R.b64ToProto)(_.ProtoClass, r);
    if (null == a) return;
    _.proto = a, o("string" != typeof _.proto, "UserSettingsProto cannot be a string");
    let n = null !== (I = null == T ? void 0 : T.protoToSave) && void 0 !== I ? I : null;
    if (null == n || null == T.offlineEditDataVersion) return;
    let i = (0, R.b64ToProto)(_.ProtoClass, n);
    null != i && (_.editInfo.protoToSave = i, _.editInfo.offlineEditDataVersion = T.offlineEditDataVersion)
  })
}
class U extends r.default.PersistedStore {
  initialize(e) {
    d(e)
  }
  getState() {
    return this.computeState()
  }
  computeState() {
    return T.mapValues(L, e => {
      let _ = {
        proto: (0, R.protoToB64)(e.ProtoClass, e.proto)
      };
      return null != e.editInfo.offlineEditDataVersion && null != e.editInfo.protoToSave && (_.protoToSave = (0, R.protoToB64)(e.ProtoClass, e.editInfo.protoToSave), _.offlineEditDataVersion = e.editInfo.offlineEditDataVersion), _
    })
  }
  hasLoaded(e) {
    return L[e].editInfo.loaded
  }
  get settings() {
    return O.proto
  }
  get frecencyWithoutFetchingLatest() {
    return S.proto
  }
  get wasMostRecentUpdateFromServer() {
    return l
  }
  getFullState() {
    return L
  }
  getGuildFolders() {
    var e;
    let _ = null === (e = O.proto.guildFolders) || void 0 === e ? void 0 : e.folders;
    return null == _ ? null : _.map(e => {
      var _, E, t;
      let o = null === (_ = e.id) || void 0 === _ ? void 0 : _.value,
        I = null === (E = e.color) || void 0 === E ? void 0 : E.value;
      return {
        guildIds: e.guildIds,
        folderId: null == o ? void 0 : Number(o),
        folderName: null === (t = e.name) || void 0 === t ? void 0 : t.value,
        folderColor: null == I ? void 0 : Number(I)
      }
    })
  }
  getGuildRecentsDismissedAt(e) {
    var _, E;
    if (null == e) return 0;
    let t = null === (E = this.settings.guilds) || void 0 === E ? void 0 : null === (_ = E.guilds[e]) || void 0 === _ ? void 0 : _.guildRecentsDismissedAt;
    return null == t ? 0 : i.Timestamp.toDate(t).getTime()
  }
  getDismissedGuildContent(e) {
    var _, E, t;
    return null == e ? null : null === (t = this.settings.guilds) || void 0 === t ? void 0 : null === (E = t.guilds) || void 0 === E ? void 0 : null === (_ = E[e]) || void 0 === _ ? void 0 : _.dismissedGuildContent
  }
  getGuildsProto() {
    var e, _;
    return null !== (_ = null === (e = this.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== _ ? _ : null
  }
}
U.displayName = "UserSettingsProtoStore", U.persistKey = "UserSettingsProtoStore-Cache";
var M = new U(A.default, {
  CACHE_LOADED: function(e) {
    let {
      userSettings: _
    } = e;
    d(_)
  },
  USER_SETTINGS_PROTO_UPDATE: u,
  USER_SETTINGS_PROTO_ENQUEUE_UPDATE: u,
  USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: function(e) {
    let {
      settings: {
        type: _,
        changes: E
      }
    } = e;
    o(!__OVERLAY__, "this cannot run in the overlay");
    let t = L[_];
    return t.editInfo = {
      ...t.editInfo,
      ...E
    }, !1
  },
  CONNECTION_OPEN: function(e) {
    let {
      userSettingsProto: _
    } = e;
    null != _ && (O.proto = _, o("string" != typeof O.proto, "UserSettingsProto cannot be a string"));
    let {
      proto: E,
      isDirty: t,
      cleanupFuncs: I
    } = (0, R.runMigrations)(O.proto, s.default[N.UserSettingsTypes.PRELOADED_USER_SETTINGS]);
    t && c(O), O.proto = E, o("string" != typeof O.proto, "UserSettingsProto cannot be a string"), O.editInfo.triggeredMigrations = t, O.editInfo.cleanupFuncs = I, O.editInfo.loaded = !0, Object.values(L).forEach(e => {
      e.lazyLoaded && (e.editInfo.loaded = !1, e.editInfo.loading = !1)
    }), C()
  },
  CONNECTION_CLOSED: D,
  CONNECTION_RESUMED: D,
  OVERLAY_INITIALIZE: function(e) {
    let {
      userSettingsProto: _
    } = e;
    O.proto = (0, R.b64ToPreloadedUserSettingsProto)(_), o("string" != typeof O.proto, "UserSettingsProto cannot be a string")
  },
  LOGOUT: function() {
    C(), Object.values(L).forEach(e => {
      e.proto = e.ProtoClass.create(), e.editInfo = (0, N.createEmptyEditInfo)()
    })
  }
})