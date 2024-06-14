"use strict";
n.r(t), n.d(t, {
  DEVLINK_REGEX: function() {
    return L
  },
  default: function() {
    return F
  },
  findCodedLink: function() {
    return j
  },
  parseQuestsEmbedCode: function() {
    return H
  },
  parseURLSafely: function() {
    return Y
  },
  remainingPathFromDiscordHostMatch: function() {
    return V
  }
}), n("757143"), n("47120"), n("653041");
var i, r, s, a, o, l, u = n("729594"),
  d = n("421474");
n("865427");
var _ = n("264229");
n("413605");
var c = n("701190"),
  E = n("226951"),
  I = n("591759"),
  T = n("960904"),
  f = n("981631");
let S = /^\/([a-zA-Z0-9-]+)$/,
  h = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  A = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
  m = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  N = /^\/application-directory\/([0-9-]+)\/?$/,
  p = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  O = /^\/activities\/([0-9-]+)\/?$/,
  C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  R = /^\/channels\/([0-9]+)\/shop$/,
  g = /^\/quests\/([0-9-]+)\/?$/,
  L = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  v = k(window.GLOBAL_ENV.INVITE_HOST),
  D = k(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  M = k(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(f.PRIMARY_DOMAIN)),
  y = k("//canary.".concat(f.PRIMARY_DOMAIN)),
  P = k("//ptb.".concat(f.PRIMARY_DOMAIN)),
  U = k("discordapp.com"),
  b = k("discord.com"),
  G = [E.default.escape(null !== (r = v.host) && void 0 !== r ? r : ""), E.default.escape(null !== (s = D.host) && void 0 !== s ? s : ""), E.default.escape(null !== (a = M.host) && void 0 !== a ? a : ""), E.default.escape(null !== (o = U.host) && void 0 !== o ? o : ""), E.default.escape(null !== (l = b.host) && void 0 !== l ? l : "")].filter(Boolean),
  w = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(G.join("|"), ")"), "g");

function k(e) {
  if (null == e) return {
    host: null,
    pathPrefix: null
  };
  if (e.indexOf("/") >= 0) {
    let t = (0, u.parse)(e, void 0, !0);
    return {
      host: t.host,
      pathPrefix: t.pathname
    }
  }
  return {
    host: e,
    pathPrefix: null
  }
}

function B(e, t) {
  var n, i, r;
  if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
  let s = null !== (i = t.pathname) && void 0 !== i ? i : "",
    a = null !== (r = e.pathPrefix) && void 0 !== r ? r : "";
  if (!s.startsWith(a)) return null;
  let o = s.substring(a.length);
  return "" === o ? null : o
}

function V(e) {
  var t, n, i, r;
  return null !== (r = null !== (i = null !== (n = null !== (t = B(M, e)) && void 0 !== t ? t : B(y, e)) && void 0 !== n ? n : B(P, e)) && void 0 !== i ? i : B(U, e)) && void 0 !== r ? r : B(b, e)
}

function x(e) {
  var t, n, i, r;
  let s = Y(e);
  if (null == s || null == s.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let a = B(v, s),
    o = B(D, s),
    l = null !== (r = null !== (i = null !== (n = null !== (t = B(M, s)) && void 0 !== t ? t : B(y, s)) && void 0 !== n ? n : B(P, s)) && void 0 !== i ? i : B(U, s)) && void 0 !== r ? r : B(b, s);
  return {
    url: s,
    inviteHostRemainingPath: a,
    templateHostRemainingPath: o,
    primaryHostRemainingPath: l
  }
}

function F(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    i = (e = e.replace(w, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e)).match(I.default.URL_REGEX),
    r = e.match(L);
  if (null == (i = (null != i ? i : []).concat(null != r ? r : [])) || 0 === i.length) return [];
  for (let e of i) {
    if (n.length >= 10) break;
    let {
      url: i,
      inviteHostRemainingPath: r,
      templateHostRemainingPath: s,
      primaryHostRemainingPath: a
    } = x(e);
    if (null == i || null == i.pathname) continue;
    let o = (e, i) => {
      !t.has(i) && (t.add(i), n.push({
        type: e,
        code: i
      }))
    };
    if ((null == r ? void 0 : r.match(S)) != null) {
      let e = (0, _.generateInviteKeyFromUrlParams)(r.substring(1), i.search);
      c.default.getInvite(e), o(T.CodedLinkType.INVITE, e)
    }(null == s ? void 0 : s.match(S)) != null && o(T.CodedLinkType.TEMPLATE, s.substring(1));
    let l = null == a ? void 0 : a.match(A);
    if (null != l) {
      let e = l[1].toUpperCase();
      if (e === T.CodedLinkType.INVITE) {
        let e = (0, _.generateInviteKeyFromUrlParams)(l[2], i.search);
        o(T.CodedLinkType.INVITE, e)
      } else o(e, l[2])
    }(null == a ? void 0 : a.match(h)) != null && o(T.CodedLinkType.CHANNEL_LINK, a.replace("/channels/", ""));
    let u = function(e) {
      if (null == e) return null;
      let t = e.match(m);
      return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
      } : null
    }(i.pathname);
    null != u && o(T.CodedLinkType.EVENT, "".concat(u.guildId, "-").concat(u.guildEventId) + (null != u.recurrenceId ? "-".concat(u.recurrenceId) : ""));
    let E = null == a ? void 0 : a.match(N);
    if (null != E) {
      let e = E[1];
      o(T.CodedLinkType.APP_DIRECTORY_PROFILE, e)
    }
    let I = null == a ? void 0 : a.match(p);
    if (null != I) {
      let e = I[1],
        t = I[2];
      if (null != t) {
        let n = (0, d.makeStorefrontSKUCodedLink)(e, t);
        o(T.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else o(T.CodedLinkType.APP_DIRECTORY_STOREFRONT, e)
    }
    let f = null == a ? void 0 : a.match(O);
    if (null != f) {
      let e = f[1];
      o(T.CodedLinkType.ACTIVITY_BOOKMARK, e)
    }
    let g = null == a ? void 0 : a.match(C);
    null != g && o(T.CodedLinkType.GUILD_PRODUCT, "".concat(g[1], "-").concat(g[2]));
    let L = null == a ? void 0 : a.match(R);
    null != L && o(T.CodedLinkType.SERVER_SHOP, L[1]);
    let v = H(e);
    null != v && o(T.CodedLinkType.QUESTS_EMBED, v)
  }
  return n
}

function H(e) {
  var t, n;
  let i = x(e),
    r = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(g);
  return null !== (n = null == r ? void 0 : r[1]) && void 0 !== n ? n : null
}

function Y(e) {
  try {
    return (0, u.parse)(e)
  } catch (e) {
    return null
  }
}

function j(e) {
  return F(e)[0]
}