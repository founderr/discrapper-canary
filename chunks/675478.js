"use strict";
n.r(t), n.d(t, {
  FrecencyUserSettingsActionCreators: function() {
    return C
  },
  PreloadedUserSettingsActionCreators: function() {
    return O
  },
  UserSettingsActionCreatorsByType: function() {
    return R
  },
  UserSettingsDelay: function() {
    return S.UserSettingsDelay
  },
  addDismissedContent: function() {
    return v
  },
  checkAllDismissedContents: function() {
    return y
  },
  clearDismissedContents: function() {
    return M
  },
  removeDismissedContent: function() {
    return D
  },
  updateUserChannelSettings: function() {
    return L
  },
  updateUserGuildSettings: function() {
    return g
  }
}), n("411104"), n("47120"), n("518263"), n("970173"), n("520712"), n("268111"), n("941497"), n("32026"), n("480839"), n("744285"), n("492257"), n("873817");
var i = n("512722"),
  r = n.n(i),
  s = n("259443"),
  a = n("544891"),
  o = n("704215"),
  l = n("377108"),
  u = n("524437"),
  d = n("433517"),
  _ = n("570140"),
  c = n("70956"),
  E = n("915486"),
  I = n("262847"),
  T = n("581883"),
  f = n("48481"),
  S = n("526761"),
  h = n("981631");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = "UserSettingsProtoLastWriteTimes",
  N = Date.now();
_.default.subscribe("CONNECTION_OPEN", () => {
  Date.now()
}), _.default.subscribe("CONNECTION_CLOSED", () => {
  Date.now()
}), "undefined" != typeof document && (document.addEventListener("mousedown", () => {}), document.addEventListener("keydown", () => {}));
class p {
  getEditInfo() {
    return T.default.getFullState()[this.type]
  }
  getCurrentValue() {
    return this.getEditInfo().proto
  }
  async updateAsync(e, t, n) {
    await this.loadIfNecessary();
    let i = this.ProtoClass.fields.find(t => t.localName === e);
    if (null == i) throw Error("Unknown proto field name ".concat(String(e)));
    let r = i.T(),
      s = this.getCurrentValue()[e],
      a = null != s ? r.fromBinary(r.toBinary(s), f.BINARY_READ_OPTIONS) : r.create();
    if (!1 === t(a)) return;
    let o = this.ProtoClass.create();
    o[e] = a, __OVERLAY__ ? _.default.dispatch({
      type: "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
      settings: {
        type: this.type,
        proto: o
      },
      delaySeconds: n,
      jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY,
      partial: !0,
      resetEditInfo: !1,
      local: !0
    }) : (this.logger.log("Updating ".concat(String(e), " with delay ").concat(n)), this.markDirty(o, {
      delaySeconds: n,
      jitter: n === S.UserSettingsDelay.AUTOMATED || n === S.UserSettingsDelay.DAILY
    }))
  }
  markDirty(e, t) {
    var n;
    r()(!__OVERLAY__, "this cannot run in the overlay");
    let {
      editInfo: i
    } = this.getEditInfo(), s = {
      timeout: i.timeout
    };
    if (!i.loaded) throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
    !1 !== t.dispatch && _.default.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        type: this.type,
        proto: e
      },
      partial: !0,
      local: !0
    });
    let a = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
    if (null != s.timeout && a < i.timeoutDelay && !i.rateLimited && (clearTimeout(s.timeout), s.timeout = void 0), null == s.timeout) {
      let e = a * c.default.Millis.SECOND;
      t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * c.default.Millis.SECOND))), this.logger.log("Scheduling save from markDirty"), s.timeout = setTimeout(this.persistChanges, e), s.timeoutDelay = a
    }
    null != t.cleanup && (s.cleanupFuncs = [...i.cleanupFuncs, ...t.cleanup]), null == i.protoToSave ? s.protoToSave = e : s.protoToSave = (0, f.mergeTopLevelFields)(this.ProtoClass, i.protoToSave, e), this.dispatchChanges(s)
  }
  dispatchChanges(e) {
    _.default.dispatch({
      type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO",
      settings: {
        changes: e,
        type: this.type
      }
    })
  }
  saveLastSendTime() {
    var e;
    let t = null !== (e = d.Storage.get(m)) && void 0 !== e ? e : {};
    t[this.type] = Date.now(), d.Storage.set(m, t)
  }
  async loadIfNecessary(e) {
    if (__OVERLAY__) {
      _.default.dispatch({
        type: "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
        settingsType: this.type
      });
      return
    }
    let {
      editInfo: t
    } = this.getEditInfo();
    if (e || !t.loaded && !t.loading) {
      this.logger.log("Loading proto"), this.dispatchChanges({
        loading: !0
      });
      try {
        let {
          body: {
            settings: t
          }
        } = await a.HTTP.get({
          url: h.Endpoints.USER_SETTINGS_PROTO(this.type)
        }), n = (0, f.b64ToProto)(this.ProtoClass, t);
        if (null == n) {
          this.dispatchChanges({
            loading: !1,
            loaded: !0
          });
          return
        }
        let i = I.default[this.type],
          {
            proto: r,
            isDirty: s,
            cleanupFuncs: o
          } = (0, f.runMigrations)(n, i);
        return await _.default.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            type: this.type,
            proto: n
          },
          resetEditInfo: s || e,
          local: !1
        }), s && this.markDirtyFromMigration(r, o), n
      } catch (e) {
        throw this.dispatchChanges({
          loading: !1
        }), e
      }
    }
  }
  markDirtyFromMigration(e, t) {
    r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Marking dirty due to migrates"), r()(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations"), this.markDirty(e, {
      cleanup: t,
      dispatch: !1,
      delaySeconds: S.UserSettingsDelay.AUTOMATED,
      jitter: !0
    })
  }
  markDirtyIfHasPendingChange(e) {
    this.beforeSendCallbacks.some(e => {
      let {
        hasChanges: t
      } = e;
      return t()
    }) && this.markDirty(this.ProtoClass.create(), {
      dispatch: !1,
      delaySeconds: 0,
      cleanup: e
    })
  }
  scheduleSaveFromOfflineEdit() {
    r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Scheduling save from offline edit");
    let {
      editInfo: e
    } = this.getEditInfo();
    r()(null != e.protoToSave, "protoToSave cannot be null"), r()(null != e.offlineEditDataVersion, "offlineEditDataVersion cannot be null"), r()(null == e.timeout, "timeout must not be set already");
    let t = 5e3 + Math.floor(5e3 * Math.random()),
      n = setTimeout(this.persistChanges, t);
    this.dispatchChanges({
      timeout: n,
      timeoutDelay: t
    })
  }
  constructor(e, t) {
    A(this, "ProtoClass", void 0), A(this, "type", void 0), A(this, "logger", void 0), A(this, "beforeSendCallbacks", void 0), A(this, "lastSendTime", void 0), A(this, "persistChanges", void 0), this.ProtoClass = e, this.type = t, this.beforeSendCallbacks = [], this.lastSendTime = 0, this.persistChanges = async () => {
      r()(!__OVERLAY__, "this cannot run in the overlay"), this.logger.log("Persisting proto");
      let {
        editInfo: e
      } = this.getEditInfo();
      if (null == e.protoToSave) {
        this.logger.log("Not persisting proto because the proto was null");
        return
      }
      this.beforeSendCallbacks.forEach(t => {
        let {
          processProto: n
        } = t;
        return n(e.protoToSave)
      });
      let t = (0, f.protoToB64)(this.ProtoClass, e.protoToSave);
      if (null == t || "" === t) {
        this.logger.log("Not persisting proto because there is nothing to change");
        return
      }
      try {
        this.saveLastSendTime();
        let {
          body: n
        } = await a.HTTP.patch({
          url: h.Endpoints.USER_SETTINGS_PROTO(this.type),
          body: {
            settings: t,
            required_data_version: e.offlineEditDataVersion
          }
        });
        n.out_of_date && this.logger.log("Proto was out of date, discarding changes"), this.getEditInfo().editInfo.cleanupFuncs.forEach(e => e());
        let i = (0, f.b64ToProto)(this.ProtoClass, n.settings);
        if (null == i) return;
        _.default.dispatch({
          type: "USER_SETTINGS_PROTO_UPDATE",
          settings: {
            proto: i,
            type: this.type
          },
          resetEditInfo: !0,
          wasSaved: !0,
          local: !1
        })
      } catch (e) {
        var n, i;
        if (429 === e.status) {
          this.logger.log("Rate limited, scheduling retry");
          let t = setTimeout(this.persistChanges, Math.min(30 * c.default.Millis.SECOND, (null !== (i = e.body.retry_after) && void 0 !== i ? i : 60) * c.default.Millis.SECOND));
          this.dispatchChanges({
            rateLimited: !0,
            timeout: t
          })
        } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === h.AbortCodes.INVALID_USER_SETTINGS_DATA) throw this.logger.log("Reloading do to invalid data"), this.loadIfNecessary(!0), e;
        else throw this.logger.log("Unknown user settings error"), e
      }
    }, this.logger = new s.Logger(this.ProtoClass.typeName)
  }
}
let O = new p(u.PreloadedUserSettings, S.UserSettingsTypes.PRELOADED_USER_SETTINGS),
  C = new p(l.FrecencyUserSettings, S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
  R = {
    [S.UserSettingsTypes.PRELOADED_USER_SETTINGS]: O,
    [S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: C
  };

function g(e, t, n) {
  return O.updateAsync("guilds", n => (0, f.mutateUserGuildSettingsInternal)(n, e, t), n)
}

function L(e, t, n, i) {
  return g(e, e => (0, f.mutateUserChannelSettingsInternal)(e, t, n), i)
}

function v(e) {
  return O.updateAsync("userContent", t => {
    if ((0, E.hasBit)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, E.addBit)(t.dismissedContents, e)
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function D(e) {
  return O.updateAsync("userContent", t => {
    if (!(0, E.hasBit)(t.dismissedContents, e)) return !1;
    t.dismissedContents = (0, E.removeBit)(t.dismissedContents, e)
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function M() {
  return O.updateAsync("userContent", e => {
    e.dismissedContents = new Uint8Array
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function y() {
  return O.updateAsync("userContent", e => {
    let t = new Uint8Array;
    for (let e of Object.keys(o.DismissibleContent)) t = (0, E.addBit)(t, o.DismissibleContent[e]);
    e.dismissedContents = t
  }, S.UserSettingsDelay.INFREQUENT_USER_ACTION)
}