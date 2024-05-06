"use strict";
n.r(t), n.d(t, {
  formatSelectionList: function() {
    return c
  },
  getAccessibleTextColor: function() {
    return E
  },
  getClanBadgeUrl: function() {
    return T
  },
  getUserClanData: function() {
    return u
  },
  isGuildAClan: function() {
    return d
  },
  isGuildAdoptedUserClanIdentity: function() {
    return _
  }
});
var i = n("688619"),
  r = n.n(i),
  a = n("481060"),
  s = n("308083"),
  o = n("981631"),
  l = n("689938");

function u(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function d(e) {
  return null != e && e.hasFeature(o.GuildFeatures.CLAN)
}

function _(e, t) {
  return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
}
let c = (e, t) => {
  if (0 === e.length) return null;
  if (1 === e.length) return e[1];
  if (2 === e.length) return l.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
    item1: e[0],
    item2: e[1]
  });
  if (null != t && e.length > t) {
    let n = e.slice(0, t).join(", "),
      i = l.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
        n: e.length - t
      });
    return l.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
      items: n,
      last: i
    })
  } {
    let t = e.slice(0, -1).join(", "),
      n = e[e.length - 1];
    return l.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
      items: t,
      last: n
    })
  }
};

function E(e) {
  let t = r()(e),
    n = t.get("rgb.r"),
    i = t.get("rgb.g"),
    s = t.get("rgb.b");
  return (299 * n + 587 * i + 114 * s) / 1e3 < 128 ? a.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "dark",
    saturation: 1
  }) : a.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "light",
    saturation: 1
  })
}
let I = {
  [s.ClanTagBadgeSize.SIZE_12]: 16,
  [s.ClanTagBadgeSize.SIZE_16]: 16,
  [s.ClanTagBadgeSize.SIZE_24]: 24,
  [s.ClanTagBadgeSize.SIZE_36]: 40
};

function T(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.ClanTagBadgeSize.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  if (null != i) return "".concat(location.protocol, "//").concat(i, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(I[n])
}