"use strict";
n.d(t, {
  Ah: function() {
    return i
  },
  CB: function() {
    return C
  },
  aU: function() {
    return O
  },
  cp: function() {
    return v
  },
  eL: function() {
    return p
  },
  vg: function() {
    return g
  },
  zy: function() {
    return R
  }
}), n(789020), n(47120), n(724458);
var i, r, s = n(470079),
  o = n(406432),
  a = n(144140),
  l = n(695346),
  u = n(592125),
  _ = n(375954),
  c = n(594174),
  d = n(630388),
  E = n(823379),
  I = n(709054),
  T = n(591759),
  h = n(981631);

function f(e) {
  if (null == e) return !1;
  let {
    filename: t,
    height: n,
    width: i
  } = e;
  return (0, o.CO)(t) && null != n && n > 0 && null != i && i > 0
}

function S(e) {
  return null != e && null != e && (0, o.NU)(e.filename) && null != e.proxy_url
}

function A(e) {
  return f(e) || S(e)
}(r = i || (i = {})).EMBED = "embed", r.ATTACHMENT = "attachment";

function N(e) {
  return function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.x4.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n ? [] : n.filter(A).map((e, t) => {
      let {
        proxy_url: n,
        url: i,
        description: r,
        spoiler: s,
        flags: a,
        width: l,
        height: u,
        filename: _,
        content_scan_version: c
      } = e;
      if (null == l || null == u) return null;
      let E = (0, o.NU)(_),
        I = null != e.flags && (0, d.yE)(e.flags, h.J0y.IS_THUMBNAIL),
        f = null != n ? n : i;
      if (E) {
        let e = T.Z.toURLSafe(n);
        if (null == e) return null;
        e.searchParams.append("format", "jpeg"), f = e.toString()
      }
      return {
        src: f,
        width: l,
        height: u,
        spoiler: null != s && s,
        flags: a,
        contentScanVersion: c,
        alt: r,
        isVideo: E,
        isThumbnail: I,
        type: "attachment",
        attachmentId: e.id,
        mediaIndex: t
      }
    }).filter(E.lm)
  }(e, l.x4.useSetting())
}

function m(e, t) {
  let n = l.RS.useSetting(),
    i = l.NA.useSetting();
  if (null == e) return [];
  let r = e.embeds;
  return n && i && null != r ? r.map((e, n) => {
    var i;
    let r = null !== (i = e.image) && void 0 !== i ? i : e.thumbnail;
    if (null == r && null != e.images && (r = e.images[0]), null != r && null != r.url) {
      let {
        height: i,
        proxyURL: s,
        url: a,
        width: l
      } = r, u = null != s && (0, o.cb)(s);
      return {
        src: null != s && "" !== s ? s : a,
        height: i,
        width: l,
        spoiler: t,
        flags: e.flags,
        contentScanVersion: e.contentScanVersion,
        isVideo: u,
        type: "embed",
        mediaIndex: n
      }
    }
  }).filter(E.lm) : []
}

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = R(e, n);
  return s.useMemo(() => {
    if (null == t) return [];
    if (!t.isMediaChannel()) return i;
    {
      let e = i.find(e => e.isThumbnail);
      return null != e ? [e] : i
    }
  }, [t, i])
}

function R(e, t) {
  let n = N(e);
  return [...n, ...m(e, t)]
}

function p(e, t) {
  var n, i;
  let r = N(e),
    s = m(e, t);
  return null !== (i = null !== (n = r[0]) && void 0 !== n ? n : s[0]) && void 0 !== i ? i : null
}

function g(e, t) {
  let n = N(e),
    i = m(e, t);
  return null == n[0] && null != i[0]
}

function C(e, t) {
  var n;
  let i = u.Z.getChannel(t);
  if (null == i) return !1;
  let r = _.Z.getMessage(i.id, I.default.castChannelIdAsMessageId(i.id));
  return null != r && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === a.Z.getCount(i.id) && (0 === r.attachments.length || null == r.attachments.find(e => f(e) || S(e)))
}

function v(e) {
  return e.reduce((e, t) => ({
    containsVideo: e.containsVideo || t.isVideo,
    containsGif: e.containsGif || (0, o.d$)(t.src)
  }), {
    containsVideo: !1,
    containsGif: !1
  })
}