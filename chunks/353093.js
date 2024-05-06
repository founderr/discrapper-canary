"use strict";
n.r(t), n.d(t, {
  formatSelectionList: function() {
    return u
  },
  getClanBadgeUrl: function() {
    return _
  },
  getUserClanData: function() {
    return s
  },
  isGuildAClan: function() {
    return o
  },
  isGuildAdoptedUserClanIdentity: function() {
    return l
  }
});
var i = n("308083"),
  r = n("981631"),
  a = n("689938");

function s(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function o(e) {
  return null != e && e.hasFeature(r.GuildFeatures.CLAN)
}

function l(e, t) {
  return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
}
let u = (e, t) => {
    if (0 === e.length) return null;
    if (1 === e.length) return e[1];
    if (2 === e.length) return a.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
      item1: e[0],
      item2: e[1]
    });
    if (null != t && e.length > t) {
      let n = e.slice(0, t).join(", "),
        i = a.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
          n: e.length - t
        });
      return a.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: n,
        last: i
      })
    } {
      let t = e.slice(0, -1).join(", "),
        n = e[e.length - 1];
      return a.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: t,
        last: n
      })
    }
  },
  d = {
    [i.ClanTagBadgeSize.SIZE_12]: 16,
    [i.ClanTagBadgeSize.SIZE_16]: 16,
    [i.ClanTagBadgeSize.SIZE_24]: 24,
    [i.ClanTagBadgeSize.SIZE_36]: 40
  };

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.ClanTagBadgeSize.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: r
  } = window.GLOBAL_ENV;
  if (null != r) return "".concat(location.protocol, "//").concat(r, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(d[n])
}