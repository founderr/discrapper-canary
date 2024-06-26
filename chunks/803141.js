"use strict";
n(47120), n(653041);
var i = n(412788),
  r = n(594174),
  s = n(131681),
  o = n(932941),
  a = n(363072),
  l = n(526761);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = null;

function c() {
  let e = (0, s.U)() ? [...o.pF, ...o.wq, ...o.$u] : [],
    t = r.default.getCurrentUser();
  if (null == t ? void 0 : t.isStaff()) {
    let t = n(932941).Bk;
    e.push(...t)
  }(_ = new a.B).addWords(e)
}

function d() {
  c()
}

function E() {
  c()
}

function I(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== l.yP.PRELOADED_USER_SETTINGS) return !1;
  null != _ && _.clear(), c()
}
class T extends i.Z {
  loadCache() {
    let e = this.readSnapshot(T.LATEST_SNAPSHOT_VERSION);
    null != e && (_ = null != e.keywordTrie ? a.B.fromSnapshot(e.keywordTrie) : null)
  }
  takeSnapshot() {
    return {
      version: T.LATEST_SNAPSHOT_VERSION,
      data: {
        keywordTrie: _
      }
    }
  }
  getKeywordTrie() {
    return _
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      null == _ && (_ = new a.B), _.addWords(e)
    }(e)
  }
  constructor() {
    super({
      CONNECTION_OPEN: d,
      CONNECTION_OPEN_SUPPLEMENTAL: d,
      CACHE_LOADED: () => this.loadCache(),
      OVERLAY_INITIALIZE: E,
      USER_SETTINGS_PROTO_UPDATE: I
    })
  }
}
u(T, "displayName", "KeywordFilterStore"), u(T, "LATEST_SNAPSHOT_VERSION", 2), t.Z = new T