"use strict";
r.r(t), r.d(t, {
  isAttachmentUrl: function() {
    return d
  },
  removeSignedUrlParameters: function() {
    return h
  },
  messageHasExpiredAttachmentUrl: function() {
    return g
  },
  maybeRefreshAttachmentUrl: function() {
    return E
  }
}), r("222007"), r("511434"), r("313619"), r("654714"), r("287168"), r("956660");
var s, n = r("872717"),
  l = r("718517"),
  i = r("519841"),
  a = r("49111");
let o = new Set([window.GLOBAL_ENV.CDN_HOST, null === (s = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === s ? void 0 : s.substring(2)]),
  u = new Set(["/attachments/", "/ephemeral-attachments/"]),
  c = 1 * l.default.Millis.HOUR;

function d(e) {
  return o.has(e.hostname) && Array.from(u).some(t => e.pathname.startsWith(t))
}

function h(e) {
  for (let t of (e = new URL(e), ["ex", "is", "hm"])) e.searchParams.delete(t);
  return e
}

function f(e) {
  let t = function(e) {
    let t = e.searchParams.get("ex"),
      r = parseInt(null != t ? t : "", 16);
    return isNaN(r) ? void 0 : r * l.default.Millis.SECOND
  }(e);
  return null == t || t <= Date.now() + c
}

function m(e) {
  let t = new URL(e.url);
  return f(t)
}

function p(e) {
  if (null == e) return !1;
  let t = new URL(e.url);
  return !!d(t) && f(t)
}

function I(e) {
  var t;
  return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video)
}

function g(e) {
  return e.attachments.some(m) || e.embeds.some(I)
}
async function _(e) {
  let t = await n.default.post({
    url: a.Endpoints.ATTACHMENTS_REFRESH_URLS,
    body: {
      attachment_urls: [e]
    }
  });
  return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
}
async function E(e) {
  if (!i.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "link_clicked"
    }).enabled) return e;
  let t = new URL(e);
  if (!f(t)) return e;
  let r = await _(e);
  return null != r ? r : e
}