var r = n(47120);
var i = n(653041);
var a = n(412788),
    o = n(594174),
    s = n(131681),
    l = n(932941),
    u = n(363072),
    c = n(526761);
function d(e, t, n) {
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
let _ = null;
function E() {
    let e = (0, s.U)() ? [...l.pF, ...l.wq, ...l.$u] : [],
        t = o.default.getCurrentUser();
    if (null == t ? void 0 : t.isStaff()) {
        let t = n(932941).Bk;
        e.push(...t);
    }
    (_ = new u.B()).addWords(e);
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    null == _ && (_ = new u.B()), _.addWords(e);
}
function h() {
    E();
}
function p() {
    E();
}
function m(e) {
    let { local: t, settings: n } = e;
    if (!t || n.type !== c.yP.PRELOADED_USER_SETTINGS) return !1;
    null != _ && _.clear(), E();
}
class I extends a.Z {
    loadCache() {
        let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
        null != e && (_ = null != e.keywordTrie ? u.B.fromSnapshot(e.keywordTrie) : null);
    }
    takeSnapshot() {
        return {
            version: I.LATEST_SNAPSHOT_VERSION,
            data: { keywordTrie: _ }
        };
    }
    getKeywordTrie() {
        return _;
    }
    initializeForKeywordTests() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        f(e);
    }
    constructor() {
        super({
            CONNECTION_OPEN: h,
            CONNECTION_OPEN_SUPPLEMENTAL: h,
            CACHE_LOADED: () => this.loadCache(),
            OVERLAY_INITIALIZE: p,
            USER_SETTINGS_PROTO_UPDATE: m
        });
    }
}
d(I, 'displayName', 'KeywordFilterStore'), d(I, 'LATEST_SNAPSHOT_VERSION', 2), (t.Z = new I());
