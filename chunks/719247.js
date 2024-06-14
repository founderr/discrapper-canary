"use strict";
n.r(t), n.d(t, {
  entryToKey: function() {
    return c
  }
}), n("47120");
var r, s = n("392711"),
  a = n.n(s),
  E = n("661869"),
  u = n("876215"),
  T = n("423875"),
  _ = n("442837"),
  A = n("570140"),
  I = n("158776"),
  l = n("146282"),
  i = n("26033"),
  S = n("561308"),
  o = n("981631"),
  R = n("616922");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = new Set([u.ContentInventoryEntryType.LISTENED_SESSION]),
  d = new Map;

function c(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function f(e) {
  let t = new Set,
    n = new Set;
  for (let r of e) {
    let e = function(e) {
      return (0, S.isEntryExpired)(e) ? null : (0, S.isEntryActive)(e) && e.author_type === E.ContentInventoryAuthorType.USER ? I.default.getActivities(e.author_id).find(t => {
        if (t.type === o.ActivityTypes.PLAYING && (0, i.isGamingLikeEntry)(e)) return function(e, t) {
          let n = e.extra;
          return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
        }(e, t);
        if (t.type === o.ActivityTypes.LISTENING && e.content_type === u.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, r, s, a, E;
          return n = e, r = t, (null === (a = n.extra.entries[0]) || void 0 === a ? void 0 : null === (s = a.media) || void 0 === s ? void 0 : s.provider) === T.ContentInventoryListenedMediaProvider.SPOTIFY && (0, R.isSpotifyParty)(null === (E = r.party) || void 0 === E ? void 0 : E.id)
        }
        return !1
      }) : void 0
    }(r.content);
    if (void 0 !== e) {
      let s = c(r.content);
      n.add(s), e !== d.get(s) && (t.add(s), d.set(s, e))
    }
  }
  return {
    updatedKeys: t,
    matchedKeys: n
  }
}

function M() {
  let e = !1,
    t = Array.from(d.keys()),
    n = new Set,
    r = new Set;
  for (let t of l.default.getFeeds().values()) {
    let {
      updatedKeys: s,
      matchedKeys: a
    } = f(n.size > 0 ? t.entries.filter(e => !n.has(c(e.content))) : t.entries);
    for (let e of s) n.add(e);
    for (let e of a) r.add(e);
    e = e || s.size > 0
  }
  for (let n of a().difference(t, [...r])) d.delete(n), e = !0;
  return e
}
class G extends(r = _.default.Store) {
  initialize() {
    this.waitFor(l.default, I.default), this.syncWith([I.default], M)
  }
  getMatchingActivity(e) {
    return (0, S.isEntryExpired)(e) ? null : d.get(c(e))
  }
  constructor(...e) {
    super(...e), N(this, "canRenderContent", e => !(0, S.isEntryExpired)(e) && (!O.has(e.content_type) || null != this.getMatchingActivity(e)))
  }
}
N(G, "displayName", "ContentInventoryActivityStore"), t.default = new G(A.default, {
  CONNECTION_OPEN: function() {
    d.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feed: t
    } = e, {
      updatedKeys: n
    } = f(t.entries);
    return n.size > 0
  }
})