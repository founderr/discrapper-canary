"use strict";
n.r(t), n("47120");
var i = n("695346"),
  r = n("412788"),
  s = n("932941"),
  a = n("363072"),
  o = n("526761");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = null;

function d() {
  let {
    profanity: e = !1,
    slurs: t = !1,
    sexualContent: n = !1
  } = i.KeywordFilterSettings.getSetting(), r = [...e ? s.PROFANITY_KEYWORD_LIST : [], ...t ? s.SLURS_KEYWORD_LIST : [], ...n ? s.SEXUAL_CONTENT_KEYWORD_LIST : []];
  (u = new a.Trie).addWords(r)
}

function _() {
  d()
}

function c() {
  d()
}

function E(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== o.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
  null != u && u.clear(), d()
}
class I extends r.default {
  loadCache() {
    let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
    null != e && (u = null != e.keywordTrie ? a.Trie.fromSnapshot(e.keywordTrie) : null)
  }
  takeSnapshot() {
    return {
      version: I.LATEST_SNAPSHOT_VERSION,
      data: {
        keywordTrie: u
      }
    }
  }
  getKeywordTrie() {
    return u
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      null == u && (u = new a.Trie), u.addWords(e)
    }(e)
  }
  constructor() {
    super({
      CONNECTION_OPEN: _,
      CONNECTION_OPEN_SUPPLEMENTAL: _,
      CACHE_LOADED: () => this.loadCache(),
      OVERLAY_INITIALIZE: c,
      USER_SETTINGS_PROTO_UPDATE: E
    })
  }
}
l(I, "displayName", "KeywordFilterStore"), l(I, "LATEST_SNAPSHOT_VERSION", 2), t.default = new I