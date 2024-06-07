"use strict";
n.r(e), n("47120");
var r, i = n("392711"),
  o = n.n(i),
  u = n("661869"),
  a = n("876215"),
  s = n("423875"),
  l = n("442837"),
  E = n("570140"),
  T = n("158776"),
  d = n("146282"),
  c = n("26033"),
  f = n("561308"),
  _ = n("981631"),
  L = n("616922");

function C(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let S = new Set([a.ContentInventoryEntryType.LISTENED_SESSION]),
  I = new Map;

function N(t) {
  return "".concat(t.author_id, ":").concat(t.id)
}

function p(t) {
  let e = new Set,
    n = new Set;
  for (let r of t) {
    let t = function(t) {
      return (0, f.isEntryExpired)(t) ? null : (0, f.isEntryActive)(t) && t.author_type === u.ContentInventoryAuthorType.USER ? T.default.getActivities(t.author_id).find(e => {
        if (e.type === _.ActivityTypes.PLAYING && (0, c.isGamingLikeEntry)(t)) return function(t, e) {
          let n = t.extra;
          return null != n && ("application_id" in e && e.application_id === n.application_id || "game_name" in n && e.name === n.game_name)
        }(t, e);
        if (e.type === _.ActivityTypes.LISTENING && t.content_type === a.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, r, i, o, u;
          return n = t, r = e, (null === (o = n.extra.entries[0]) || void 0 === o ? void 0 : null === (i = o.media) || void 0 === i ? void 0 : i.provider) === s.ContentInventoryListenedMediaProvider.SPOTIFY && (0, L.isSpotifyParty)(null === (u = r.party) || void 0 === u ? void 0 : u.id)
        }
        return !1
      }) : void 0
    }(r.content);
    if (void 0 !== t) {
      let i = N(r.content);
      n.add(i), t !== I.get(i) && (e.add(i), I.set(i, t))
    }
  }
  return {
    updatedKeys: e,
    matchedKeys: n
  }
}

function A() {
  let t = !1,
    e = Array.from(I.keys()),
    n = new Set,
    r = new Set;
  for (let e of d.default.getFeeds().values()) {
    let {
      updatedKeys: i,
      matchedKeys: o
    } = p(n.size > 0 ? e.entries.filter(t => !n.has(N(t.content))) : e.entries);
    for (let t of i) n.add(t);
    for (let t of o) r.add(t);
    t = t || i.size > 0
  }
  for (let n of o().difference(e, [...r])) I.delete(n), t = !0;
  return t
}
class M extends(r = l.default.Store) {
  initialize() {
    this.waitFor(d.default, T.default), this.syncWith([T.default], A)
  }
  getMatchingActivity(t) {
    return (0, f.isEntryExpired)(t) ? null : I.get(N(t))
  }
  constructor(...t) {
    super(...t), C(this, "canRenderContent", t => !(0, f.isEntryExpired)(t) && (!S.has(t.content_type) || null != this.getMatchingActivity(t)))
  }
}
C(M, "displayName", "ContentInventoryActivityStore"), e.default = new M(E.default, {
  CONNECTION_OPEN: function() {
    I.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(t) {
    let {
      feed: e
    } = t, {
      updatedKeys: n
    } = p(e.entries);
    return n.size > 0
  }
})