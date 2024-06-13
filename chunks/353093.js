"use strict";
n.r(t), n.d(t, {
  formatSelectionList: function() {
    return A
  },
  getClanBadgeUrl: function() {
    return N
  },
  getClanBannerUrl: function() {
    return p
  },
  getUserClanData: function() {
    return T
  },
  isGuildAClan: function() {
    return f
  },
  isGuildAdoptedUserClanIdentity: function() {
    return h
  },
  isGuildAdoptedUserClanIdentityChanged: function() {
    return S
  },
  stableSortSet: function() {
    return I
  },
  useShouldDisplayClanTag: function() {
    return O
  }
}), n("47120");
var i = n("108131"),
  r = n.n(i),
  s = n("442837"),
  a = n("607070"),
  o = n("715903"),
  l = n("271383"),
  u = n("594174");
n("963202");
var d = n("954138"),
  _ = n("308083"),
  c = n("981631"),
  E = n("689938");

function I(e, t) {
  let n = Array.from(e);
  return n.sort((e, n) => {
    let i = r().v3("".concat(e).concat(t));
    return i - r().v3("".concat(n).concat(t))
  }), new Set(n)
}

function T(e) {
  return null != e && e.identityEnabled ? {
    guildId: e.identityGuildId,
    tag: e.tag,
    badge: e.badge
  } : {}
}

function f(e) {
  return null != e && e.hasFeature(c.GuildFeatures.CLAN)
}

function S(e, t) {
  var n, i;
  return null != t && t.identityGuildId === (null == e ? void 0 : e.id) && ((null == e ? void 0 : null === (n = e.clan) || void 0 === n ? void 0 : n.tag) != null && (null == e ? void 0 : null === (i = e.clan) || void 0 === i ? void 0 : i.tag) !== t.tag || null == t.identityEnabled)
}

function h(e, t) {
  return null != e && null != t && null != t.identityGuildId && t.identityGuildId === e && !!t.identityEnabled || !1
}
let A = (e, t) => {
    if (0 === e.length) return null;
    if (1 === e.length) return e[1];
    if (2 === e.length) return E.default.Messages.CLAN_OVERVIEW_LIST_TWO_ITEMS.format({
      item1: e[0],
      item2: e[1]
    });
    if (null != t && e.length > t) {
      let n = e.slice(0, t).join(", "),
        i = E.default.Messages.CLAN_OVERVIEW_LIST_OTHERS_COUNT.format({
          n: e.length - t
        });
      return E.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: n,
        last: i
      })
    } {
      let t = e.slice(0, -1).join(", "),
        n = e[e.length - 1];
      return E.default.Messages.CLAN_OVERVIEW_LIST_MULTIPLE_ITEMS.format({
        items: t,
        last: n
      })
    }
  },
  m = {
    [_.ClanTagBadgeSize.SIZE_12]: 16,
    [_.ClanTagBadgeSize.SIZE_16]: 16,
    [_.ClanTagBadgeSize.SIZE_24]: 24,
    [_.ClanTagBadgeSize.SIZE_32]: 32,
    [_.ClanTagBadgeSize.SIZE_36]: 40
  };

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.ClanTagBadgeSize.SIZE_12;
  if (null == t) return;
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  if (null != i) return "".concat(location.protocol, "//").concat(i, "/clan-badges/").concat(e, "/").concat(t, ".png?size=").concat(m[n])
}

function p(e, t) {
  if (null == t) return;
  let {
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  if (null != n) return "".concat(location.protocol, "//").concat(n, "/clan-banners/").concat(e, "/").concat(t, ".png?size=512")
}

function O(e, t) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.hideTags),
    i = (0, s.useStateFromStores)([u.default], () => u.default.getUser(e), [e]),
    r = (0, s.useStateFromStores)([l.default], () => {
      if (null == t || null == e) return null;
      let n = l.default.getMember(t, e);
      return (0, o.hasAutomodQuarantinedProfile)(n)
    }, [t, e]),
    {
      tag: _,
      guildId: c
    } = T(null == i ? void 0 : i.clan),
    E = (0, d.default)("clan_tag_chiplet");
  return !n && !!E && null != c && null != _ && !r && !0
}