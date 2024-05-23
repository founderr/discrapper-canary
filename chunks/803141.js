"use strict";
n.r(t), n("47120");
var i = n("695346"),
  r = n("581883"),
  s = n("412788"),
  a = n("592204"),
  o = n("932941"),
  l = n("363072"),
  u = n("526761");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new l.Trie;

function c() {
  let {
    profanity: e = !1,
    slurs: t = !1,
    sexualContent: n = !1
  } = i.KeywordFilterSettings.getSetting(), r = [...e ? o.PROFANITY_KEYWORD_LIST : [], ...t ? o.SLURS_KEYWORD_LIST : [], ...n ? o.SEXUAL_CONTENT_KEYWORD_LIST : []];
  _.addWords(r)
}

function E() {
  if (!(0, a.isEligibleForKeywordFiltering)({
      location: "connection_open"
    })) return !1;
  c()
}

function I() {
  if (!(0, a.isEligibleForKeywordFiltering)({
      location: "overlay_initialize"
    })) return !1;
  c()
}

function T(e) {
  let {
    local: t,
    settings: n
  } = e;
  if (!t || n.type !== u.UserSettingsTypes.PRELOADED_USER_SETTINGS || !(0, a.isEligibleForKeywordFiltering)({
      location: "user_settings_proto_update"
    })) return !1;
  _.clear(), c()
}
class f extends s.default {
  initialize() {
    this.waitFor(r.default)
  }
  loadCache() {
    let e = this.readSnapshot(f.LATEST_SNAPSHOT_VERSION);
    null != e && (_ = l.Trie.fromSnapshot(e))
  }
  takeSnapshot() {
    return {
      version: f.LATEST_SNAPSHOT_VERSION,
      data: _
    }
  }
  getKeywordTrie() {
    return _
  }
  initializeForKeywordTests() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    _.clear(), ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      _.addWords(e)
    }(e)
  }
  constructor() {
    super({
      CONNECTION_OPEN: E,
      CONNECTION_OPEN_SUPPLEMENTAL: E,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      OVERLAY_INITIALIZE: I,
      USER_SETTINGS_PROTO_UPDATE: T
    })
  }
}
d(f, "displayName", "KeywordFilterStore"), d(f, "LATEST_SNAPSHOT_VERSION", 1), t.default = new f