"use strict";
n.r(t), n.d(t, {
  remainingPathFromDiscordHostMatch: function() {
    return V
  },
  default: function() {
    return H
  },
  parseQuestsEmbedCode: function() {
    return k
  },
  parseURLSafely: function() {
    return Y
  },
  findCodedLink: function() {
    return K
  }
}), n("781738"), n("222007"), n("424973");
var r, i, l, u, a, o, s = n("746379"),
  d = n("810793");
n("355025");
var E = n("9294");
n("42793");
var _ = n("337543"),
  c = n("655518"),
  I = n("253981"),
  S = n("139514"),
  T = n("49111");
let f = /^\/([a-zA-Z0-9-]+)$/,
  p = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
  A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  R = /^\/application-directory\/([0-9-]+)\/?$/,
  C = /^\/activities\/([0-9-]+)\/?$/,
  L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  O = /^\/channels\/([0-9]+)\/shop$/,
  h = /^\/clyde-profiles\/([0-9-]+)\/?$/,
  P = /^\/quests\/([0-9-]+)\/?$/,
  g = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
  m = b(window.GLOBAL_ENV.INVITE_HOST),
  y = b(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  D = b(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(T.PRIMARY_DOMAIN)),
  v = b("//canary.".concat(T.PRIMARY_DOMAIN)),
  U = b("//ptb.".concat(T.PRIMARY_DOMAIN)),
  M = b("discordapp.com"),
  G = b("discord.com"),
  B = [c.default.escape(null !== (i = m.host) && void 0 !== i ? i : ""), c.default.escape(null !== (l = y.host) && void 0 !== l ? l : ""), c.default.escape(null !== (u = D.host) && void 0 !== u ? u : ""), c.default.escape(null !== (a = M.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = G.host) && void 0 !== o ? o : "")].filter(Boolean),
  w = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(B.join("|"), ")"), "g");

function b(e) {
  if (null == e) return {
    host: null,
    pathPrefix: null
  };
  if (e.indexOf("/") >= 0) {
    let t = (0, s.parse)(e, void 0, !0);
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

function F(e, t) {
  var n, r, i;
  if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
  let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
    u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
  if (!l.startsWith(u)) return null;
  let a = l.substring(u.length);
  return "" === a ? null : a
}

function V(e) {
  var t, n, r, i;
  return null !== (i = null !== (r = null !== (n = null !== (t = F(D, e)) && void 0 !== t ? t : F(v, e)) && void 0 !== n ? n : F(U, e)) && void 0 !== r ? r : F(M, e)) && void 0 !== i ? i : F(G, e)
}

function x(e) {
  var t, n, r, i;
  let l = Y(e);
  if (null == l || null == l.pathname) return {
    url: null,
    inviteHostRemainingPath: null,
    templateHostRemainingPath: null,
    primaryHostRemainingPath: null
  };
  let u = F(m, l),
    a = F(y, l),
    o = null !== (i = null !== (r = null !== (n = null !== (t = F(D, l)) && void 0 !== t ? t : F(v, l)) && void 0 !== n ? n : F(U, l)) && void 0 !== r ? r : F(M, l)) && void 0 !== i ? i : F(G, l);
  return {
    url: l,
    inviteHostRemainingPath: u,
    templateHostRemainingPath: a,
    primaryHostRemainingPath: o
  }
}

function H(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = (e = e.replace(w, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.default.URL_REGEX),
    i = e.match(g);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    if (n.length >= 10) break;
    let {
      url: r,
      inviteHostRemainingPath: i,
      templateHostRemainingPath: l,
      primaryHostRemainingPath: u
    } = x(e);
    if (null == r || null == r.pathname) continue;
    let a = (e, r) => {
      !t.has(r) && (t.add(r), n.push({
        type: e,
        code: r
      }))
    };
    if ((null == i ? void 0 : i.match(f)) != null) {
      let e = (0, E.generateInviteKeyFromUrlParams)(i.substring(1), r.search);
      _.default.getInvite(e), a(S.CodedLinkType.INVITE, e)
    }(null == l ? void 0 : l.match(f)) != null && a(S.CodedLinkType.TEMPLATE, l.substring(1));
    let o = null == u ? void 0 : u.match(N);
    if (null != o) {
      let e = o[1].toUpperCase();
      if (e === S.CodedLinkType.INVITE) {
        let e = (0, E.generateInviteKeyFromUrlParams)(o[2], r.search);
        a(S.CodedLinkType.INVITE, e)
      } else a(e, o[2])
    }(null == u ? void 0 : u.match(p)) != null && a(S.CodedLinkType.CHANNEL_LINK, u.replace("/channels/", ""));
    let s = function(e) {
      if (null == e) return null;
      let t = e.match(A);
      return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
      } : null
    }(r.pathname);
    null != s && a(S.CodedLinkType.EVENT, "".concat(s.guildId, "-").concat(s.guildEventId) + (null != s.recurrenceId ? "-".concat(s.recurrenceId) : ""));
    let c = null == u ? void 0 : u.match(R);
    if (null != c) {
      let e = c[1];
      a(S.CodedLinkType.APP_DIRECTORY_PROFILE, e)
    }
    let I = null == u ? void 0 : u.match(h);
    if (null != I) {
      let e = I[1];
      a(S.CodedLinkType.CLYDE_PROFILE, e)
    }
    let T = null == u ? void 0 : u.match(C),
      {
        activityBookmarkEmbedEnabled: P
      } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
        location: "78afcf_1"
      }, {
        autoTrackExposure: !1
      });
    if (null != T && P) {
      let e = T[1];
      a(S.CodedLinkType.ACTIVITY_BOOKMARK, e)
    }
    let g = null == u ? void 0 : u.match(L);
    null != g && a(S.CodedLinkType.GUILD_PRODUCT, "".concat(g[1], "-").concat(g[2]));
    let m = null == u ? void 0 : u.match(O);
    null != m && a(S.CodedLinkType.SERVER_SHOP, m[1]);
    let y = k(e);
    null != y && a(S.CodedLinkType.QUESTS_EMBED, y)
  }
  return n
}

function k(e) {
  var t, n;
  let r = x(e),
    i = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(P);
  return null !== (n = null == i ? void 0 : i[1]) && void 0 !== n ? n : null
}

function Y(e) {
  try {
    return (0, s.parse)(e)
  } catch (e) {
    return null
  }
}

function K(e) {
  return H(e)[0]
}