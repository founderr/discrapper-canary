"use strict";
n.r(e), n.d(e, {
  entryToKey: function() {
    return M
  }
}), n("47120");
var r, i = n("392711"),
  u = n.n(i),
  o = n("661869"),
  a = n("876215"),
  l = n("423875"),
  s = n("442837"),
  E = n("570140"),
  d = n("158776"),
  T = n("146282"),
  c = n("26033"),
  f = n("561308"),
  _ = n("981631"),
  S = n("616922");

function I(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let A = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
  N = new Map;

function M(t) {
  return "".concat(t.author_id, ":").concat(t.id)
}

function v(t) {
  let e = new Set,
    n = new Set;
  for (let r of t) {
    let t = function(t) {
      return (0, f.isEntryExpired)(t) ? null : (0, f.isEntryActive)(t) && t.author_type === o.ContentInventoryAuthorType.USER ? d.default.getActivities(t.author_id).find(e => {
        if (e.type === _.ActivityTypes.PLAYING && (0, c.isGamingLikeEntry)(t)) return function(t, e) {
          let n = t.extra;
          return null != n && ("application_id" in e && e.application_id === n.application_id || "game_name" in n && e.name === n.game_name)
        }(t, e);
        if (e.type === _.ActivityTypes.LISTENING && t.content_type === a.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, r, i, u, o;
          return n = t, r = e, (null === (u = n.extra.entries[0]) || void 0 === u ? void 0 : null === (i = u.media) || void 0 === i ? void 0 : i.provider) === l.ContentInventoryListenedMediaProvider.SPOTIFY && (0, S.isSpotifyParty)(null === (o = r.party) || void 0 === o ? void 0 : o.id)
        }
        return !1
      }) : void 0
    }(r.content);
    if (void 0 !== t) {
      let i = M(r.content);
      n.add(i), t !== N.get(i) && (e.add(i), N.set(i, t))
    }
  }
  return {
    updatedKeys: e,
    matchedKeys: n
  }
}

function y() {
  let t = !1,
    e = Array.from(N.keys()),
    n = new Set,
    r = new Set;
  for (let e of T.default.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: u
    } = v(n.size > 0 ? e.entries.filter(t => !n.has(M(t.content))) : e.entries);
    for (let t of i) n.add(t);
    for (let t of u) r.add(t);
    t = t || i.size > 0
  }
  for (let n of u().difference(e, [...r])) N.delete(n), t = !0;
  return t
}
class p extends(r = s.default.Store) {
  initialize() {
    this.waitFor(T.default, d.default), this.syncWith([d.default], y)
  }
  getMatchingActivity(t) {
    return (0, f.isEntryExpired)(t) ? null : N.get(M(t))
  }
  constructor(...t) {
    super(...t), I(this, "canRenderContent", t => !(0, f.isEntryExpired)(t) && (!A.has(t.content_type) || null != this.getMatchingActivity(t)))
  }
}
I(p, "displayName", "ContentInventoryActivityStore"), e.default = new p(E.default, {
  CONNECTION_OPEN: function() {
    N.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(t) {
    let {
      feed: e
    } = t, {
      updatedKeys: n
    } = v(e.entries);
    return n.size > 0
  }
})