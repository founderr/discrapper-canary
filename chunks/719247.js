"use strict";
n.r(t), n.d(t, {
  entryToKey: function() {
    return N
  }
}), n("47120");
var i, a = n("392711"),
  s = n.n(a),
  r = n("661869"),
  l = n("876215"),
  u = n("423875"),
  o = n("442837"),
  d = n("570140"),
  c = n("158776"),
  f = n("146282"),
  E = n("26033"),
  _ = n("561308"),
  T = n("981631"),
  I = n("616922");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = new Set([l.ContentInventoryEntryType.LISTENED_SESSION]),
  m = new Map;

function N(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function R(e) {
  let t = new Set,
    n = new Set;
  for (let i of e) {
    let e = function(e) {
      return (0, _.isEntryExpired)(e) ? null : (0, _.isEntryActive)(e) && e.author_type === r.ContentInventoryAuthorType.USER ? c.default.getActivities(e.author_id).find(t => {
        if (t.type === T.ActivityTypes.PLAYING && (0, E.isGamingLikeEntry)(e)) return function(e, t) {
          let n = e.extra;
          return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
        }(e, t);
        if (t.type === T.ActivityTypes.LISTENING && e.content_type === l.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, i, a, s, r;
          return n = e, i = t, (null === (s = n.extra.entries[0]) || void 0 === s ? void 0 : null === (a = s.media) || void 0 === a ? void 0 : a.provider) === u.ContentInventoryListenedMediaProvider.SPOTIFY && (0, I.isSpotifyParty)(null === (r = i.party) || void 0 === r ? void 0 : r.id)
        }
        return !1
      }) : void 0
    }(i.content);
    if (void 0 !== e) {
      let a = N(i.content);
      n.add(a), e !== m.get(a) && (t.add(a), m.set(a, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function v() {
  let e = !1,
    t = Array.from(m.keys()),
    n = new Set,
    i = new Set;
  for (let t of f.default.getFeeds().values()) {
    let {
      updatedKeys: a,
      matchedKeys: s
    } = R(n.size > 0 ? t.entries.filter(e => !n.has(N(e.content))) : t.entries);
    for (let e of a) n.add(e);
    for (let e of s) i.add(e);
    e = e || a.size > 0
  }
  for (let n of s().difference(t, [...i])) m.delete(n), e = !0;
  return e
}
class g extends(i = o.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default), this.syncWith([c.default], v)
  }
  getMatchingActivity(e) {
    return (0, _.isEntryExpired)(e) ? null : m.get(N(e))
  }
  constructor(...e) {
    super(...e), S(this, "canRenderContent", e => !(0, _.isEntryExpired)(e) && (!C.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
S(g, "displayName", "ContentInventoryActivityStore"), t.default = new g(d.default, {
  CONNECTION_OPEN: function() {
    m.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feed: t
    } = e, {
      updatedKeys: n
    } = R(t.entries);
    return n.size > 0
  }
})