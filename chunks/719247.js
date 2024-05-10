"use strict";
n.r(t), n("47120");
var a, l, s, i, r = n("392711"),
  o = n.n(r),
  u = n("661869"),
  d = n("876215"),
  c = n("423875"),
  f = n("442837"),
  h = n("570140"),
  m = n("158776"),
  p = n("146282"),
  E = n("26033"),
  C = n("561308"),
  g = n("981631"),
  S = n("616922");
let _ = new Map;

function T(e) {
  return "".concat(e.author_id, ":").concat(e.id)
}

function I(e) {
  let t = new Set,
    n = new Set;
  for (let a of e) {
    let e = function(e) {
        return (0, C.isEntryExpired)(e) ? null : (0, C.isEntryActive)(e) && e.author_type === u.ContentInventoryAuthorType.USER ? m.default.getActivities(e.author_id).find(t => {
          if (t.type === g.ActivityTypes.PLAYING && (0, E.isGamingLikeEntry)(e)) return function(e, t) {
            let n = e.extra;
            return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
          }(e, t);
          if (t.type === g.ActivityTypes.LISTENING && e.content_type === d.ContentInventoryEntryType.LISTENED_SESSION) {
            var n, a, l, s, i;
            return n = e, a = t, (null === (s = n.extra.entries[0]) || void 0 === s ? void 0 : null === (l = s.media) || void 0 === l ? void 0 : l.provider) === c.ContentInventoryListenedMediaProvider.SPOTIFY && (0, S.isSpotifyParty)(null === (i = a.party) || void 0 === i ? void 0 : i.id)
          }
          return !1
        }) : void 0
      }(a.content),
      l = T(a.content);
    n.add(l), void 0 !== e && e !== _.get(l) && (t.add(l), _.set(l, e))
  }
  return {
    updatedKeys: t,
    visitedKeys: n
  }
}

function A() {
  let e = !1,
    t = Array.from(_.keys()),
    n = new Set,
    a = new Set;
  for (let t of p.default.getFeeds().values()) {
    let {
      updatedKeys: l,
      visitedKeys: s
    } = I(n.size > 0 ? t.entries.filter(e => !n.has(T(e.content))) : t.entries);
    for (let e of l) n.add(e);
    for (let e of s) a.add(e);
    e = e || l.size > 0
  }
  for (let n of o().difference(t, [...a])) _.delete(n), e = !0;
  return e
}
class N extends(a = f.default.Store) {
  initialize() {
    this.waitFor(p.default, m.default), this.syncWith([m.default], A)
  }
  getMatchingActivity(e) {
    return (0, C.isEntryExpired)(e) ? null : _.get(T(e))
  }
}
i = "ContentInventoryActivityStore", (s = "displayName") in(l = N) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new N(h.default, {
  CONNECTION_OPEN: function() {
    _.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feed: t
    } = e, {
      updatedKeys: n
    } = I(t.entries);
    return n.size > 0
  }
})