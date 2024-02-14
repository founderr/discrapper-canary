"use strict";
n.r(t), n.d(t, {
  remainingPathFromDiscordHostMatch: function() {
    return F
  },
  default: function() {
    return V
  },
  parseURLSafely: function() {
    return x
  },
  findCodedLink: function() {
    return H
  }
}), n("781738"), n("222007"), n("424973");
var r, i, l, u, a, o, s = n("746379"),
  d = n("810793");
n("355025");
var _ = n("9294");
n("42793");
var E = n("337543"),
  c = n("655518"),
  I = n("253981"),
  S = n("139514"),
  T = n("49111");
let f = /^\/([a-zA-Z0-9-]+)$/,
  N = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
  p = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
  A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
  R = /^\/application-directory\/([0-9-]+)\/?$/,
  C = /^\/activities\/([0-9-]+)\/?$/,
  L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  O = /^\/channels\/([0-9]+)\/shop$/,
  h = /^\/clyde-profiles\/([0-9-]+)\/?$/,
  P = /^dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+$/i,
  g = w(window.GLOBAL_ENV.INVITE_HOST),
  m = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
  y = w(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(T.PRIMARY_DOMAIN)),
  D = w("//canary.".concat(T.PRIMARY_DOMAIN)),
  v = w("//ptb.".concat(T.PRIMARY_DOMAIN)),
  U = w("discordapp.com"),
  M = w("discord.com"),
  G = [c.default.escape(null !== (i = g.host) && void 0 !== i ? i : ""), c.default.escape(null !== (l = m.host) && void 0 !== l ? l : ""), c.default.escape(null !== (u = y.host) && void 0 !== u ? u : ""), c.default.escape(null !== (a = U.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = M.host) && void 0 !== o ? o : "")].filter(Boolean),
  B = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(G.join("|"), ")"), "g");

function w(e) {
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

function b(e, t) {
  var n, r, i;
  if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
  let l = null !== (r = t.pathname) && void 0 !== r ? r : "",
    u = null !== (i = e.pathPrefix) && void 0 !== i ? i : "";
  if (!l.startsWith(u)) return null;
  let a = l.substring(u.length);
  return "" === a ? null : a
}

function F(e) {
  var t, n, r, i;
  return null !== (i = null !== (r = null !== (n = null !== (t = b(y, e)) && void 0 !== t ? t : b(D, e)) && void 0 !== n ? n : b(v, e)) && void 0 !== r ? r : b(U, e)) && void 0 !== i ? i : b(M, e)
}

function V(e) {
  if (null == e) return [];
  let t = new Set,
    n = [],
    r = (e = e.replace(B, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.default.URL_REGEX),
    i = e.match(P);
  if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
  for (let e of r) {
    var l, u, a, o;
    if (n.length >= 10) break;
    let r = x(e);
    if (null == r || null == r.pathname) continue;
    let i = b(g, r),
      s = b(m, r),
      c = null !== (o = null !== (a = null !== (u = null !== (l = b(y, r)) && void 0 !== l ? l : b(D, r)) && void 0 !== u ? u : b(v, r)) && void 0 !== a ? a : b(U, r)) && void 0 !== o ? o : b(M, r),
      I = (e, r) => {
        !t.has(r) && (t.add(r), n.push({
          type: e,
          code: r
        }))
      };
    if ((null == i ? void 0 : i.match(f)) != null) {
      let e = (0, _.generateInviteKeyFromUrlParams)(i.substring(1), r.search);
      E.default.getInvite(e), I(S.CodedLinkType.INVITE, e)
    }(null == s ? void 0 : s.match(f)) != null && I(S.CodedLinkType.TEMPLATE, s.substring(1));
    let T = null == c ? void 0 : c.match(p);
    if (null != T) {
      let e = T[1].toUpperCase();
      if (e === S.CodedLinkType.INVITE) {
        let e = (0, _.generateInviteKeyFromUrlParams)(T[2], r.search);
        I(S.CodedLinkType.INVITE, e)
      } else I(e, T[2])
    }(null == c ? void 0 : c.match(N)) != null && I(S.CodedLinkType.CHANNEL_LINK, c.replace("/channels/", ""));
    let P = function(e) {
      if (null == e) return null;
      let t = e.match(A);
      return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
      } : null
    }(r.pathname);
    null != P && I(S.CodedLinkType.EVENT, "".concat(P.guildId, "-").concat(P.guildEventId) + (null != P.recurrenceId ? "-".concat(P.recurrenceId) : ""));
    let G = null == c ? void 0 : c.match(R);
    if (null != G) {
      let e = G[1];
      I(S.CodedLinkType.APP_DIRECTORY_PROFILE, e)
    }
    let B = null == c ? void 0 : c.match(h);
    if (null != B) {
      let e = B[1];
      I(S.CodedLinkType.CLYDE_PROFILE, e)
    }
    let w = null == c ? void 0 : c.match(C),
      {
        activityBookmarkEmbedEnabled: F
      } = d.ActivityBookmarkEmbedExperiment.getCurrentConfig({
        location: "78afcf_1"
      }, {
        autoTrackExposure: !1
      });
    if (null != w && F) {
      let e = w[1];
      I(S.CodedLinkType.ACTIVITY_BOOKMARK, e)
    }
    let V = null == c ? void 0 : c.match(L);
    null != V && I(S.CodedLinkType.GUILD_PRODUCT, "".concat(V[1], "-").concat(V[2]));
    let H = null == c ? void 0 : c.match(O);
    null != H && I(S.CodedLinkType.SERVER_SHOP, H[1])
  }
  return n
}

function x(e) {
  try {
    return (0, s.parse)(e)
  } catch (e) {
    return null
  }
}

function H(e) {
  return V(e)[0]
}