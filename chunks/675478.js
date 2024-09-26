n.d(t, {
    BU: function () {
        return Z;
    },
    Bn: function () {
        return H;
    },
    C9: function () {
        return j;
    },
    DZ: function () {
        return k;
    },
    PS: function () {
        return F;
    },
    T6: function () {
        return w;
    },
    aj: function () {
        return B;
    },
    bE: function () {
        return K;
    },
    fy: function () {
        return L.fy;
    },
    hW: function () {
        return G;
    },
    nm: function () {
        return V;
    },
    sr: function () {
        return W;
    },
    w9: function () {
        return Y;
    }
});
var r = n(411104);
var i = n(47120);
var a = n(518263);
var o = n(970173);
var s = n(520712);
var l = n(268111);
var u = n(941497);
var c = n(32026);
var d = n(480839);
var _ = n(744285);
var E = n(492257);
var f = n(873817);
var h = n(512722),
    p = n.n(h),
    m = n(259443),
    I = n(544891),
    T = n(704215),
    g = n(377108),
    S = n(524437),
    A = n(433517),
    v = n(570140),
    N = n(70956),
    O = n(915486),
    R = n(262847),
    C = n(581883),
    y = n(48481),
    L = n(526761),
    b = n(981631);
function D(e, t, n) {
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
let M = 5000,
    P = 'UserSettingsProtoLastWriteTimes',
    U = Date.now();
function w() {}
v.Z.subscribe('CONNECTION_OPEN', () => {
    U = Date.now();
}),
    v.Z.subscribe('CONNECTION_CLOSED', () => {
        U = Date.now();
    }),
    'undefined' != typeof document &&
        (document.addEventListener('mousedown', () => {
            U = 0;
        }),
        document.addEventListener('keydown', () => {
            U = 0;
        }));
class x {
    getEditInfo() {
        return C.Z.getFullState()[this.type];
    }
    getCurrentValue() {
        return this.getEditInfo().proto;
    }
    async updateAsync(e, t, n) {
        await this.loadIfNecessary();
        let r = this.ProtoClass.fields.find((t) => t.localName === e);
        if (null == r) throw Error('Unknown proto field name '.concat(String(e)));
        let i = r.T(),
            a = this.getCurrentValue()[e],
            o = null != a ? i.fromBinary(i.toBinary(a), y.Uc) : i.create();
        if (!1 === t(o)) return;
        let s = this.ProtoClass.create();
        (s[e] = o),
            __OVERLAY__
                ? v.Z.dispatch({
                      type: 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE',
                      settings: {
                          type: this.type,
                          proto: s
                      },
                      delaySeconds: n,
                      jitter: n === L.fy.AUTOMATED || n === L.fy.DAILY,
                      partial: !0,
                      resetEditInfo: !1,
                      local: !0
                  })
                : (this.logger.log('Updating '.concat(String(e), ' with delay ').concat(n)),
                  this.markDirty(s, {
                      delaySeconds: n,
                      jitter: n === L.fy.AUTOMATED || n === L.fy.DAILY
                  }));
    }
    markDirty(e, t) {
        var n;
        p()(!__OVERLAY__, 'this cannot run in the overlay');
        let { editInfo: r } = this.getEditInfo(),
            i = { timeout: r.timeout };
        if (!r.loaded) throw Error('Cannot edit user settings proto because we have not yet loaded the stored version from the DB');
        !1 !== t.dispatch &&
            v.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    type: this.type,
                    proto: e
                },
                partial: !0,
                local: !0
            });
        let a = null !== (n = t.delaySeconds) && void 0 !== n ? n : 0;
        if ((null != i.timeout && a < r.timeoutDelay && !r.rateLimited && (clearTimeout(i.timeout), (i.timeout = void 0)), null == i.timeout)) {
            let e = a * N.Z.Millis.SECOND;
            t.jitter && (e += Math.floor(Math.random() * Math.min(e, 30 * N.Z.Millis.SECOND))), this.logger.log('Scheduling save from markDirty'), (i.timeout = setTimeout(this.persistChanges, e)), (i.timeoutDelay = a);
        }
        null != t.cleanup && (i.cleanupFuncs = [...r.cleanupFuncs, ...t.cleanup]), null == r.protoToSave ? (i.protoToSave = e) : (i.protoToSave = (0, y.re)(this.ProtoClass, r.protoToSave, e)), this.dispatchChanges(i);
    }
    dispatchChanges(e) {
        v.Z.dispatch({
            type: 'USER_SETTINGS_PROTO_UPDATE_EDIT_INFO',
            settings: {
                changes: e,
                type: this.type
            }
        });
    }
    saveLastSendTime() {
        var e;
        let t = null !== (e = A.K.get(P)) && void 0 !== e ? e : {};
        (t[this.type] = Date.now()), A.K.set(P, t);
    }
    async loadIfNecessary(e) {
        if (__OVERLAY__) {
            v.Z.dispatch({
                type: 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY',
                settingsType: this.type
            });
            return;
        }
        let { editInfo: t } = this.getEditInfo();
        if (e || (!t.loaded && !t.loading)) {
            this.logger.log('Loading proto'), this.dispatchChanges({ loading: !0 });
            try {
                let {
                        body: { settings: t }
                    } = await I.tn.get({ url: b.ANM.USER_SETTINGS_PROTO(this.type) }),
                    n = (0, y.d5)(this.ProtoClass, t);
                if (null == n) {
                    this.dispatchChanges({
                        loading: !1,
                        loaded: !0
                    });
                    return;
                }
                let r = R.Z[this.type],
                    { proto: i, isDirty: a, cleanupFuncs: o } = (0, y.xt)(n, r);
                return (
                    await v.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            type: this.type,
                            proto: n
                        },
                        resetEditInfo: a || e,
                        local: !1
                    }),
                    a && this.markDirtyFromMigration(i, o),
                    n
                );
            } catch (e) {
                throw (this.dispatchChanges({ loading: !1 }), e);
            }
        }
    }
    markDirtyFromMigration(e, t) {
        p()(!__OVERLAY__, 'this cannot run in the overlay'),
            this.logger.log('Marking dirty due to migrates'),
            p()(null == this.getEditInfo().editInfo.offlineEditDataVersion, 'offline changes are not supported with migrations'),
            this.markDirty(e, {
                cleanup: t,
                dispatch: !1,
                delaySeconds: L.fy.AUTOMATED,
                jitter: !0
            });
    }
    markDirtyIfHasPendingChange(e) {
        this.beforeSendCallbacks.some((e) => {
            let { hasChanges: t } = e;
            return t();
        }) &&
            this.markDirty(this.ProtoClass.create(), {
                dispatch: !1,
                delaySeconds: 0,
                cleanup: e
            });
    }
    scheduleSaveFromOfflineEdit() {
        p()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Scheduling save from offline edit');
        let { editInfo: e } = this.getEditInfo();
        p()(null != e.protoToSave, 'protoToSave cannot be null'), p()(null != e.offlineEditDataVersion, 'offlineEditDataVersion cannot be null'), p()(null == e.timeout, 'timeout must not be set already');
        let t = M + Math.floor(Math.random() * M),
            n = setTimeout(this.persistChanges, t);
        this.dispatchChanges({
            timeout: n,
            timeoutDelay: t
        });
    }
    constructor(e, t) {
        D(this, 'ProtoClass', void 0),
            D(this, 'type', void 0),
            D(this, 'logger', void 0),
            D(this, 'beforeSendCallbacks', void 0),
            D(this, 'lastSendTime', void 0),
            D(this, 'persistChanges', void 0),
            (this.ProtoClass = e),
            (this.type = t),
            (this.beforeSendCallbacks = []),
            (this.lastSendTime = 0),
            (this.persistChanges = async () => {
                p()(!__OVERLAY__, 'this cannot run in the overlay'), this.logger.log('Persisting proto');
                let { editInfo: e } = this.getEditInfo();
                if (null == e.protoToSave) {
                    this.logger.log('Not persisting proto because the proto was null');
                    return;
                }
                this.beforeSendCallbacks.forEach((t) => {
                    let { processProto: n } = t;
                    return n(e.protoToSave);
                });
                let t = (0, y.xU)(this.ProtoClass, e.protoToSave);
                if (null == t || '' === t) {
                    this.logger.log('Not persisting proto because there is nothing to change');
                    return;
                }
                try {
                    this.saveLastSendTime();
                    let { body: n } = await I.tn.patch({
                        url: b.ANM.USER_SETTINGS_PROTO(this.type),
                        body: {
                            settings: t,
                            required_data_version: e.offlineEditDataVersion
                        }
                    });
                    n.out_of_date && this.logger.log('Proto was out of date, discarding changes'), this.getEditInfo().editInfo.cleanupFuncs.forEach((e) => e());
                    let r = (0, y.d5)(this.ProtoClass, n.settings);
                    if (null == r) return;
                    v.Z.dispatch({
                        type: 'USER_SETTINGS_PROTO_UPDATE',
                        settings: {
                            proto: r,
                            type: this.type
                        },
                        resetEditInfo: !0,
                        wasSaved: !0,
                        local: !1
                    });
                } catch (e) {
                    var n;
                    if (429 === e.status) {
                        this.logger.log('Rate limited, scheduling retry');
                        let t = parseInt(e.headers['retry-after']);
                        isNaN(t) && (t = 60);
                        let n = setTimeout(this.persistChanges, Math.min(30 * N.Z.Millis.SECOND, t * N.Z.Millis.SECOND));
                        this.dispatchChanges({
                            rateLimited: !0,
                            timeout: n
                        });
                    } else if (400 === e.status && (null === (n = e.body) || void 0 === n ? void 0 : n.code) === b.evJ.INVALID_USER_SETTINGS_DATA) throw (this.logger.log('Reloading do to invalid data'), this.loadIfNecessary(!0), e);
                    else throw (this.logger.log('Unknown user settings error'), e);
                }
            }),
            (this.logger = new m.Y(this.ProtoClass.typeName));
    }
}
let G = new x(S.o8, L.yP.PRELOADED_USER_SETTINGS),
    k = new x(g.ji, L.yP.FRECENCY_AND_FAVORITES_SETTINGS),
    B = {
        [L.yP.PRELOADED_USER_SETTINGS]: G,
        [L.yP.FRECENCY_AND_FAVORITES_SETTINGS]: k
    };
function F(e, t, n) {
    return G.updateAsync('guilds', (n) => (0, y.u0)(n, e, t), n);
}
function Z(e, t, n, r) {
    return F(e, (e) => (0, y.uL)(e, t, n), r);
}
function V(e) {
    return G.updateAsync(
        'userContent',
        (t) => {
            if ((0, O.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, O.GV)(t.dismissedContents, e);
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
function H(e, t) {
    return G.updateAsync(
        'userContent',
        (n) => {
            null == n.recurringDismissibleContentStates[e] ? (n.recurringDismissibleContentStates[e] = { lastDismissedVersion: t }) : (n.recurringDismissibleContentStates[e].lastDismissedVersion = t);
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
function Y(e) {
    return G.updateAsync(
        'userContent',
        (t) => {
            if (!(0, O.jl)(t.dismissedContents, e)) return !1;
            t.dismissedContents = (0, O.jx)(t.dismissedContents, e);
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
function j(e) {
    return G.updateAsync(
        'userContent',
        (t) => {
            if (null == t.recurringDismissibleContentStates[e]) return !1;
            t.recurringDismissibleContentStates[e].lastDismissedVersion = 0;
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
function W() {
    return G.updateAsync(
        'userContent',
        (e) => {
            (e.dismissedContents = new Uint8Array()), (e.recurringDismissibleContentStates = {});
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
function K() {
    return G.updateAsync(
        'userContent',
        (e) => {
            let t = new Uint8Array();
            for (let e of Object.keys(T.z)) t = (0, O.GV)(t, T.z[e]);
            e.dismissedContents = t;
        },
        L.fy.INFREQUENT_USER_ACTION
    );
}
