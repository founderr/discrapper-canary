"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("661869"),
  o = n("876215"),
  u = n("423875"),
  d = n("442837"),
  c = n("570140"),
  f = n("158776"),
  h = n("146282"),
  m = n("26033"),
  p = n("561308"),
  E = n("981631"),
  C = n("616922");
let g = new Map;

function S(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function _(e) {
  let t = new Set;
  for (let n of e) {
    let e = function(e) {
      return (0, p.isEntryExpired)(e) ? null : (0, p.isEntryActive)(e) && e.author_type === r.ContentInventoryAuthorType.USER ? f.default.getActivities(e.author_id).find(t => {
        if (t.type === E.ActivityTypes.PLAYING && (0, m.isGamingLikeEntry)(e)) return function(e, t) {
          let n = e.extra;
          return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
        }(e, t);
        if (t.type === E.ActivityTypes.LISTENING && e.content_type === o.ContentInventoryEntryType.LISTENED_SESSION) {
          var n, a, l, s, i;
          return n = e, a = t, (null === (s = n.extra.entries[0]) || void 0 === s ? void 0 : null === (l = s.media) || void 0 === l ? void 0 : l.provider) === u.ContentInventoryListenedMediaProvider.SPOTIFY && (0, C.isSpotifyParty)(null === (i = a.party) || void 0 === i ? void 0 : i.id)
        }
        return !1
      }) : void 0
    }(n.content);
    if (void 0 !== e) {
      let a = S(n.content);
      e !== g.get(a) && (t.add(a), g.set(a, e))
    }
  }
  return t
}

function T() {
  let e = !1,
    t = new Set;
  for (let n of h.default.getFeeds().values()) {
    let a = _(t.size > 0 ? n.entries.filter(e => !t.has(S(e.content))) : n.entries);
    for (let e of a) t.add(e);
    e = e || a.size > 0
  }
  return e
}
class I extends(a = d.default.Store) {
  initialize() {
    this.waitFor(h.default, f.default), this.syncWith([f.default], T)
  }
  getMatchingActivity(e) {
    return (0, p.isEntryExpired)(e) ? null : g.get(S(e))
  }
}
i = "ContentInventoryActivityStore", (s = "displayName") in(l = I) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new I(c.default, {
  CONNECTION_OPEN: function() {
    g.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feed: t
    } = e;
    return _(t.entries).size > 0
  }
})