"use strict";
n.r(t), n.d(t, {
  fetchBlockedDomainList: function() {
    return f
  }
}), n("70102");
var i = n("102053"),
  a = n("872717"),
  l = n("913144"),
  s = n("605250"),
  r = n("618421"),
  o = n("352266");
let {
  WEBAPP_ENDPOINT: u
} = window.GLOBAL_ENV, d = "https:".concat(u, "/bad-hash-delta"), c = new s.default("FetchBlockedDomain");

function f() {
  return i.default.timeAsync("\uD83D\uDCBE", "fetchBlockedDomainList", E)
}
async function E() {
  c.verbose("Fetching blocked domain list");
  try {
    let e;
    let t = parseInt((await a.default.get("https://cdn.discordapp.com/bad-domains/current_revision.txt")).text),
      n = o.default.getCurrentRevision();
    if (c.verbose("Server revision: ".concat(t, ", Client revision: ").concat(n)), null === n || n !== t) {
      try {
        if (null === n || n > t) {
          let e = null === n ? "null" : "greater than server revision number";
          throw Error("Client revision number is " + e)
        }
        if (t - n > 15) throw Error("Client revision number is more than ".concat(15, " behind the server revision number"));
        let l = (await a.default.get({
          url: d,
          query: {
            revision: n
          }
        })).body;
        if (0 === l.ADDED.length && 0 === l.REMOVED.length) {
          c.verbose("No changes to blocked domains list.");
          return
        }
        c.verbose("Retrieved delta, domains added: ".concat(l.ADDED.length, ", domains removed: ").concat(l.REMOVED.length));
        let s = await i.default.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => o.default.getBlockedDomainList());
        if (null === s) throw Error("Blocked domain list is null");
        c.verbose("Blocked domains list length: ".concat(s.size, " before update")), l.ADDED.forEach(e => {
          if (s.has(e)) throw Error("Unable to add domain which is already in the blockedDomains set: ".concat(e));
          s.add(e)
        }), l.REMOVED.forEach(e => {
          if (!s.has(e)) throw Error("Unable to removed domain which is not in the blockedDomains set: ".concat(e));
          s.delete(e)
        }), e = Array.from(s), c.verbose("Delta applied successfully")
      } catch (t) {
        if (c.verbose("Unable to process domain list delta: ".concat(t.message)), (0, r.isSlowNetwork)()) {
          c.verbose("Slow network detected, not downloading full list");
          return
        }
        c.verbose("Downloading the full bad domains file"), e = (await a.default.get({
          url: "https://cdn.discordapp.com/bad-domains/updated_hashes.json"
        })).body
      }
      c.verbose("Blocked domains list length: ".concat(e.length, " after update")), i.default.time("\uD83D\uDCBE", "Save Blocked Domain List", () => l.default.dispatch({
        type: "BLOCKED_DOMAIN_LIST_FETCHED",
        list: e,
        revision: t
      }))
    }
  } catch (e) {
    c.error(e)
  }
}