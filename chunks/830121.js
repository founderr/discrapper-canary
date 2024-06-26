"use strict";
n.d(t, {
  FO: function() {
    return F
  },
  Sq: function() {
    return k
  },
  ZP: function() {
    return Z
  },
  el: function() {
    return H
  },
  oO: function() {
    return v
  },
  zO: function() {
    return Y
  }
}), n(757143), n(47120), n(653041);
var i, r, s, o, a, l, u = n(729594),
  _ = n(421474);
n(865427);
var c = n(264229);
n(413605);
var d = n(701190),
  E = n(226951),
  I = n(591759),
  T = n(960904),
  h = n(981631);
let f = /^\/([a-zA-Z0-9-]+)$/,
  S = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
  A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  m = /^\/application-directory\/([0-9-]+)\/?$/,
  O = /^\/application-directory\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
  p = /^\/activities\/([0-9-]+)\/?$/,
  R = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  g = /^\/channels\/([0-9]+)\/shop$/,
  C = /^\/quests\/([0-9-]+)\/?$/,
  v = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  L = x(window.GLOBAL_ENV.INVITE_HOST),
  D = x(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  M = x(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(h.$R1)),
  P = x("//canary.".concat(h.$R1)),
  y = x("//ptb.".concat(h.$R1)),
  U = x("discordapp.com"),
  b = x("discord.com"),
  G = [E.Z.escape(null !== (r = L.host) && void 0 !== r ? r : ""), E.Z.escape(null !== (s = D.host) && void 0 !== s ? s : ""), E.Z.escape(null !== (o = M.host) && void 0 !== o ? o : ""), E.Z.escape(null !== (a = U.host) && void 0 !== a ? a : ""), E.Z.escape(null !== (l = b.host) && void 0 !== l ? l : "")].filter(Boolean),
  w = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(G.join("|"), ")"), "g");

function x(e) {
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
    o = null !== (r = e.pathPrefix) && void 0 !== r ? r : "";
  if (!s.startsWith(o)) return null;
  let a = s.substring(o.length);
  return "" === a ? null : a
}

function k(e) {
  var t, n, i, r;
  return null !== (r = null !== (i = null !== (n = null !== (t = B(M, e)) && void 0 !== t ? t : B(P, e)) && void 0 !== n ? n : B(y, e)) && void 0 !== i ? i : B(U, e)) && void 0 !== r ? r : B(b, e)
}

function V(e) {
  var t, n, i, r;
  let s = F(e);
  if (null == s || null == s.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let o = B(L, s),
    a = B(D, s),
    l = null !== (r = null !== (i = null !== (n = null !== (t = B(M, s)) && void 0 !== t ? t : B(P, s)) && void 0 !== n ? n : B(y, s)) && void 0 !== i ? i : B(U, s)) && void 0 !== r ? r : B(b, s);
  return {
    url: s,
    inviteHostRemainingPath: o,
    templateHostRemainingPath: a,
    primaryHostRemainingPath: l
  }
}

function Z(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    i = (e = e.replace(w, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e)).match(I.Z.URL_REGEX),
    r = e.match(v);
  if (null == (i = (null != i ? i : []).concat(null != r ? r : [])) || 0 === i.length) return [];
  for (let e of i) {
    if (n.length >= 10) break;
    let {
      url: i,
      inviteHostRemainingPath: r,
      templateHostRemainingPath: s,
      primaryHostRemainingPath: o
    } = V(e);
    if (null == i || null == i.pathname) continue;
    let a = (e, i) => {
      !t.has(i) && (t.add(i), n.push({
        type: e,
        code: i
      }))
    };
    if ((null == r ? void 0 : r.match(f)) != null) {
      let e = (0, c.mb)(r.substring(1), i.search);
      d.Z.getInvite(e);
      a(T.g.INVITE, e)
    }(null == s ? void 0 : s.match(f)) != null && a(T.g.TEMPLATE, s.substring(1));
    let l = null == o ? void 0 : o.match(N);
    if (null != l) {
      let e = l[1].toUpperCase();
      if (e === T.g.INVITE) {
        let e = (0, c.mb)(l[2], i.search);
        a(T.g.INVITE, e)
      } else a(e, l[2])
    }(null == o ? void 0 : o.match(S)) != null && a(T.g.CHANNEL_LINK, o.replace("/channels/", ""));
    let u = function(e) {
      if (null == e) return null;
      let t = e.match(A);
      return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
      } : null
    }(i.pathname);
    null != u && a(T.g.EVENT, "".concat(u.guildId, "-").concat(u.guildEventId) + (null != u.recurrenceId ? "-".concat(u.recurrenceId) : ""));
    let E = null == o ? void 0 : o.match(m);
    if (null != E) {
      let e = E[1];
      a(T.g.APP_DIRECTORY_PROFILE, e)
    }
    let I = null == o ? void 0 : o.match(O);
    if (null != I) {
      let e = I[1],
        t = I[2];
      if (null != t) {
        let n = (0, _.l)(e, t);
        a(T.g.APP_DIRECTORY_STOREFRONT_SKU, n)
      } else a(T.g.APP_DIRECTORY_STOREFRONT, e)
    }
    let h = null == o ? void 0 : o.match(p);
    if (null != h) {
      let e = h[1];
      a(T.g.ACTIVITY_BOOKMARK, e)
    }
    let C = null == o ? void 0 : o.match(R);
    null != C && a(T.g.GUILD_PRODUCT, "".concat(C[1], "-").concat(C[2]));
    let v = null == o ? void 0 : o.match(g);
    null != v && a(T.g.SERVER_SHOP, v[1]);
    let L = H(e);
    null != L && a(T.g.QUESTS_EMBED, L)
  }
  return n
}

function H(e) {
  var t, n;
  let i = V(e),
    r = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(C);
  return null !== (n = null == r ? void 0 : r[1]) && void 0 !== n ? n : null
}

function F(e) {
  try {
    return (0, u.parse)(e)
  } catch (e) {
    return null
  }
}

function Y(e) {
  return Z(e)[0]
}