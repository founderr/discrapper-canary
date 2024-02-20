"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var i = n("913144"),
  a = n("689988"),
  l = n("1405"),
  s = n("68720"),
  r = n("265596"),
  o = n("709377");
let u = o.ContentInventoryFeedKey.GLOBAL_FEED,
  d = null,
  c = !1,
  f = 0;

function E() {
  C()
}

function h() {
  _()
}

function _() {
  clearTimeout(d), d = null
}

function C() {
  if (_(), !(0, l.isEligibleForContentInventoryV1)("ContentInventoryManager") || c) return;
  let e = r.default.getFeed(u),
    t = null == e ? void 0 : e.expired_at,
    n = null == t ? 0 : new Date(t).getTime() - Date.now();
  d = setTimeout(() => S(), n)
}
async function S() {
  if (!c) try {
    c = !0;
    let e = await (0, s.getMyContentInventory)();
    i.default.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: u,
      feed: e
    }), f = 0, c = !1, C()
  } catch (e) {
    if (f < 3) {
      let e = 1e3 * Math.pow(5, f);
      d = setTimeout(() => S(), e), f += 1
    }
    c = !1
  }
}
class g extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: E,
      CONNECTION_CLOSED: h
    }
  }
}
var T = new g