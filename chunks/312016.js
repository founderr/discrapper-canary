"use strict";
n.r(t), n.d(t, {
  remainingPathFromDiscordHostMatch: function() {
    return V
  },
  default: function() {
    return G
  },
  parseURLSafely: function() {
    return F
  },
  findCodedLink: function() {
    return x
  }
}), n("781738"), n("222007"), n("424973");
var i, s, r, a, o, l, u = n("746379"),
  d = n("810793");
n("355025");
var c = n("9294");
n("42793");
var f = n("337543"),
  _ = n("655518"),
  h = n("253981"),
  g = n("139514"),
  m = n("49111");
let E = /^\/([a-zA-Z0-9-]+)$/,
  p = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  v = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
  S = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  T = /^\/application-directory\/([0-9-]+)\/?$/,
  I = /^\/activities\/([0-9-]+)\/?$/,
  C = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  A = /^\/channels\/([0-9]+)\/shop$/,
  y = /^\/clyde-profiles\/([0-9-]+)\/?$/,
  N = w(window.GLOBAL_ENV.INVITE_HOST),
  R = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  O = w(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(m.PRIMARY_DOMAIN)),
  D = w("//canary.".concat(m.PRIMARY_DOMAIN)),
  P = w("//ptb.".concat(m.PRIMARY_DOMAIN)),
  b = w("discordapp.com"),
  L = w("discord.com"),
  M = [_.default.escape(null !== (s = N.host) && void 0 !== s ? s : ""), _.default.escape(null !== (r = R.host) && void 0 !== r ? r : ""), _.default.escape(null !== (a = O.host) && void 0 !== a ? a : ""), _.default.escape(null !== (o = b.host) && void 0 !== o ? o : ""), _.default.escape(null !== (l = L.host) && void 0 !== l ? l : "")].filter(Boolean),
  U = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(M.join("|"), ")"), "g");

function w(e) {
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

function k(e, t) {
  var n, i, s;
  if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
  let r = null !== (i = t.pathname) && void 0 !== i ? i : "",
    a = null !== (s = e.pathPrefix) && void 0 !== s ? s : "";
  if (!r.startsWith(a)) return null;
  let o = r.substring(a.length);
  return "" === o ? null : o
}

function V(e) {
  var t, n, i, s;
  return null !== (s = null !== (i = null !== (n = null !== (t = k(O, e)) && void 0 !== t ? t : k(D, e)) && void 0 !== n ? n : k(P, e)) && void 0 !== i ? i : k(b, e)) && void 0 !== s ? s : k(L, e)
}

function G(e) {
  if (null == e) return [];
  let t = new Set,
    n = [];
  e = e.replace(U, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e);
  let i = e.match(h.default.URL_REGEX);
  if (null == i) return [];
  for (let e of i) {
    var s, r, a, o;
    if (n.length >= 10) break;
    let i = F(e);
    if (null == i || null == i.pathname) continue;
    let l = k(N, i),
      u = k(R, i),
      _ = null !== (o = null !== (a = null !== (r = null !== (s = k(O, i)) && void 0 !== s ? s : k(D, i)) && void 0 !== r ? r : k(P, i)) && void 0 !== a ? a : k(b, i)) && void 0 !== o ? o : k(L, i),
      h = (e, i) => {
        !t.has(i) && (t.add(i), n.push({
          type: e,
          code: i
        }))
      };
    if ((null == l ? void 0 : l.match(E)) != null) {
      let e = (0, c.generateInviteKeyFromUrlParams)(l.substring(1), i.search);
      f.default.getInvite(e), h(g.CodedLinkType.INVITE, e)
    }(null == u ? void 0 : u.match(E)) != null && h(g.CodedLinkType.TEMPLATE, u.substring(1));
    let m = null == _ ? void 0 : _.match(v);
    if (null != m) {
      let e = m[1].toUpperCase();
      if (e === g.CodedLinkType.INVITE) {
        let e = (0, c.generateInviteKeyFromUrlParams)(m[2], i.search);
        h(g.CodedLinkType.INVITE, e)
      } else h(e, m[2])
    }(null == _ ? void 0 : _.match(p)) != null && h(g.CodedLinkType.CHANNEL_LINK, _.replace("/channels/", ""));
    let M = function(e) {
      if (null == e) return null;
      let t = e.match(S);
      return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
      } : null
    }(i.pathname);
    null != M && h(g.CodedLinkType.EVENT, "".concat(M.guildId, "-").concat(M.guildEventId) + (null != M.recurrenceId ? "-".concat(M.recurrenceId) : ""));
    let U = null == _ ? void 0 : _.match(T);
    if (null != U) {
      let e = U[1];
      h(g.CodedLinkType.APP_DIRECTORY_PROFILE, e)
    }
    let w = null == _ ? void 0 : _.match(y);
    if (null != w) {
      let e = w[1];
      h(g.CodedLinkType.CLYDE_PROFILE, e)
    }
    let V = null == _ ? void 0 : _.match(I),
      {
        activityBookmarkEmbedEnabled: G
      } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
        location: "78afcf_1"
      }, {
        autoTrackExposure: !1
      });
    if (null != V && G) {
      let e = V[1];
      h(g.CodedLinkType.ACTIVITY_BOOKMARK, e)
    }
    let x = null == _ ? void 0 : _.match(C);
    null != x && h(g.CodedLinkType.GUILD_PRODUCT, "".concat(x[1], "-").concat(x[2]));
    let B = null == _ ? void 0 : _.match(A);
    null != B && h(g.CodedLinkType.SERVER_SHOP, B[1])
  }
  return n
}

function F(e) {
  try {
    return (0, u.parse)(e)
  } catch (e) {
    return null
  }
}

function x(e) {
  return G(e)[0]
}