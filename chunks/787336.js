"use strict";
n.r(t), n.d(t, {
  isAttachmentUrl: function() {
    return d
  },
  removeSignedUrlParameters: function() {
    return f
  },
  messageHasExpiredAttachmentUrl: function() {
    return v
  },
  maybeRefreshAttachmentUrl: function() {
    return y
  }
}), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
var r, a = n("872717"),
  i = n("718517"),
  o = n("519841"),
  l = n("49111");
let s = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
  c = new Set(["/attachments/", "/ephemeral-attachments/"]),
  u = 1 * i.default.Millis.HOUR;

function d(e) {
  return s.has(e.hostname) && Array.from(c).some(t => e.pathname.startsWith(t))
}

function f(e) {
  for (let t of (e = new URL(e), ["ex", "is", "hm"])) e.searchParams.delete(t);
  return e
}

function h(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : n * i.default.Millis.SECOND
  }(e);
  return null == t || t <= Date.now() + u
}

function m(e) {
  let t = new URL(e.url);
  return h(t)
}

function p(e) {
  if (null == e) return !1;
  let t = new URL(e.url);
  return !!d(t) && h(t)
}

function g(e) {
  var t;
  return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video)
}

function v(e) {
  return e.attachments.some(m) || e.embeds.some(g)
}
async function w(e) {
  let t = await a.default.post({
    url: l.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function y(e) {
  if (!o.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = new URL(e);
  if (!h(t)) return e;
  let n = await w(e);
  return null != n ? n : e
}