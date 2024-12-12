var i = r(47120);
var a = r(653041);
var s = r(412788),
    o = r(594174),
    l = r(131681),
    u = r(932941),
    c = r(363072),
    d = r(526761);
function f(e, n, r) {
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
let _ = null;
function h() {
    let e = (0, l.U)() ? [...u.pF, ...u.wq, ...u.$u] : [],
        n = o.default.getCurrentUser();
    if (null == n ? void 0 : n.isStaff()) {
        let n = r(932941).Bk;
        e.push(...n);
    }
    (_ = new c.B()).addWords(e);
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    null == _ && (_ = new c.B()), _.addWords(e);
}
function m() {
    h();
}
function g() {
    h();
}
function E(e) {
    let { local: n, settings: r } = e;
    if (!n || r.type !== d.yP.PRELOADED_USER_SETTINGS) return !1;
    null != _ && _.clear(), h();
}
class v extends s.Z {
    loadCache() {
        let e = this.readSnapshot(v.LATEST_SNAPSHOT_VERSION);
        null != e && (_ = null != e.keywordTrie ? c.B.fromSnapshot(e.keywordTrie) : null);
    }
    takeSnapshot() {
        return {
            version: v.LATEST_SNAPSHOT_VERSION,
            data: { keywordTrie: _ }
        };
    }
    getKeywordTrie() {
        return _;
    }
    initializeForKeywordTests() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        p(e);
    }
    constructor() {
        super({
            CONNECTION_OPEN: m,
            CONNECTION_OPEN_SUPPLEMENTAL: m,
            CACHE_LOADED: () => this.loadCache(),
            OVERLAY_INITIALIZE: g,
            USER_SETTINGS_PROTO_UPDATE: E
        });
    }
}
f(v, 'displayName', 'KeywordFilterStore'), f(v, 'LATEST_SNAPSHOT_VERSION', 2), (n.Z = new v());
