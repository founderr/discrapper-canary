"use strict";
n.r(t), n.d(t, {
  sanitizeEmbed: function() {
    return p
  },
  mergeEmbedsOnURL: function() {
    return y
  },
  isEmbedInline: function() {
    return T
  },
  isServerShopArticleEmbed: function() {
    return C
  },
  isQuestsEmbed: function() {
    return S
  },
  getMaxEmbedMediaSize: function() {
    return I
  }
}), n("222007"), n("702976"), n("424973");
var s = n("917351"),
  i = n.n(s),
  r = n("866227"),
  a = n.n(r),
  o = n("509043"),
  d = n("312016"),
  u = n("299039"),
  l = n("49111");
let f = /sketchfab/i,
  _ = /^https:\/\/sketchfab\.com/i,
  c = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
  g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
  m = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
  h = new Set([l.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, l.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, l.MessageEmbedTypes.RICH, l.MessageEmbedTypes.SAFETY_POLICY_NOTICE, l.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, l.MessageEmbedTypes.VOICE_CHANNEL]);

function v(e) {
  let {
    width: t,
    height: n
  } = e;
  return t > 0 && n > 0
}

function E(e) {
  let {
    url: t,
    proxy_url: n,
    width: s,
    height: i,
    placeholder: r,
    placeholder_version: a
  } = e;
  return {
    url: t,
    proxyURL: n,
    width: s,
    height: i,
    placeholder: r,
    placeholderVersion: a
  }
}

function p(e, t, n) {
  let s = {
    id: i.uniqueId("embed_"),
    url: n.url,
    type: n.type,
    rawTitle: n.title,
    rawDescription: n.description,
    referenceId: n.reference_id,
    flags: n.flags,
    contentScanVersion: n.content_scan_version
  };
  if (null != n.footer && (s.footer = {
      text: n.footer.text,
      iconURL: n.footer.icon_url,
      iconProxyURL: n.footer.proxy_icon_url
    }), null != n.author && null != n.author.name && (s.author = {
      name: n.author.name,
      url: n.author.url,
      iconURL: n.author.icon_url,
      iconProxyURL: n.author.proxy_icon_url
    }), null != n.provider && null != n.provider.name && (s.provider = {
      name: n.provider.name,
      url: n.provider.url
    }), null != n.timestamp && (s.timestamp = a(new Date(n.timestamp))), null != n.color && (s.color = (0, o.int2hsl)(n.color, !0)), null != n.thumbnail && v(n.thumbnail)) switch (s.type) {
    case l.MessageEmbedTypes.ARTICLE:
    case l.MessageEmbedTypes.IMAGE:
      s.image = E(n.thumbnail);
      break;
    default:
      s.thumbnail = E(n.thumbnail)
  }
  if (null != n.image && v(n.image) && (s.image = E(n.image)), null != n.video && (null == s.thumbnail && null != n.video.proxy_url && v(n.video) && (s.thumbnail = {
      width: n.video.width,
      height: n.video.height,
      url: "".concat(n.video.proxy_url, "?format=jpeg")
    }), null != s.thumbnail && v(n.video) && function(e, t, n) {
      if (null != t && f.test(t.name) || _.test(n.url)) return !1;
      let s = null != n.proxy_url || /^https:/i.test(n.url);
      return 1492472454139 > u.default.extractTimestamp(e) && (s = s && null != t && c.test(t.name)), s
    }(t, n.provider, n.video) && (s.video = E(n.video))), h.has(s.type)) {
    var r;
    let e = null !== (r = n.fields) && void 0 !== r ? r : [];
    s.fields = e.map(e => {
      let {
        name: t,
        value: n,
        inline: s
      } = e;
      return {
        rawName: t,
        rawValue: n,
        inline: s
      }
    })
  } else s.fields = [];
  return s
}

function y(e) {
  let t = new Map,
    n = [];
  return e.forEach(e => {
    if (null == e.url) {
      n.push(e);
      return
    }
    let s = t.get(e.url);
    if (null == s) {
      n.push(e), t.set(e.url, e);
      return
    }
    null != e.image && (null == s.images && (s.images = [], null != s.image && s.images.push(s.image)), s.images.push(e.image))
  }), n
}

function T(e) {
  let {
    image: t,
    video: n,
    type: s,
    author: i,
    rawTitle: r
  } = e;
  return (null != t || null != n) && (s === l.MessageEmbedTypes.GIFV || s !== l.MessageEmbedTypes.RICH && null == i && null == r)
}

function C(e) {
  return e.type === l.MessageEmbedTypes.ARTICLE && null != e.url && (m.test(e.url) || g.test(e.url))
}

function S(e) {
  return e.type === l.MessageEmbedTypes.ARTICLE && null != e.url && null != (0, d.parseQuestsEmbedCode)(e.url)
}

function I(e, t, n) {
  var s;
  return null != t && null != n ? {
    maxMediaWidth: t,
    maxMediaHeight: n
  } : (null === (s = e.provider) || void 0 === s ? void 0 : s.name) === "TikTok" ? {
    maxMediaWidth: 400,
    maxMediaHeight: 450
  } : {
    maxMediaWidth: 400,
    maxMediaHeight: 300
  }
}