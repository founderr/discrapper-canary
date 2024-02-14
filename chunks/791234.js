"use strict";
n.r(t), n.d(t, {
  getEmbedColor: function() {
    return h
  },
  ForumPostMediaTypes: function() {
    return l
  },
  useForumPostMediaThumbnail: function() {
    return v
  },
  useForumPostMediaProperties: function() {
    return I
  },
  useFindFirstMediaProperties: function() {
    return _
  },
  useFirstMediaIsEmbed: function() {
    return N
  },
  shouldShowAddMediaToOriginalPostModal: function() {
    return A
  },
  messageContainsGifOrVideo: function() {
    return y
  }
}), n("702976"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("808653");
var l, i, a = n("884691"),
  s = n("651693"),
  r = n("610730"),
  o = n("845579"),
  u = n("42203"),
  d = n("377253"),
  c = n("697218"),
  f = n("568734"),
  m = n("449008"),
  p = n("49111");

function h(e, t) {
  if (null == e || null == e.embeds[0]) return;
  let {
    color: n
  } = e.embeds[0];
  return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
}

function E(e) {
  if (null == e) return !1;
  let {
    filename: t,
    height: n,
    width: l
  } = e;
  return (0, s.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
}

function g(e) {
  return null != e && null != e && (0, s.isVideoFile)(e.filename) && null != e.proxy_url
}

function S(e) {
  return E(e) || g(e)
}(i = l || (l = {})).EMBED = "embed", i.ATTACHMENT = "attachment";

function C(e) {
  let t = o.InlineAttachmentMedia.useSetting();
  return function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n ? [] : n.filter(S).map(e => {
      let {
        proxy_url: t,
        url: n,
        description: l,
        spoiler: i,
        flags: a,
        width: r,
        height: o,
        filename: u,
        content_scan_version: d
      } = e;
      if (null == r || null == o) return null;
      let c = (0, s.isVideoFile)(u),
        m = null != e.flags && (0, f.hasFlag)(e.flags, p.MessageAttachmentFlags.IS_THUMBNAIL),
        h = null != t ? t : n;
      if (c) {
        let e = new URL(t);
        e.searchParams.append("format", "jpeg"), h = e.toString()
      }
      return {
        src: h,
        width: r,
        height: o,
        spoiler: null != i && i,
        flags: a,
        contentScanVersion: d,
        alt: l,
        isVideo: c,
        isThumbnail: m,
        type: "attachment"
      }
    }).filter(m.isNotNullish)
  }(e, t)
}

function T(e, t) {
  let n = o.InlineEmbedMedia.useSetting(),
    l = o.RenderEmbeds.useSetting();
  if (null == e) return [];
  let i = e.embeds;
  return n && l && null != i ? i.map(e => {
    var n;
    let l = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
    if (null == l && null != e.images && (l = e.images[0]), null != l && null != l.url) {
      let {
        height: n,
        proxyURL: i,
        url: a,
        width: r
      } = l, o = null != i && (0, s.isVideoUrl)(i);
      return {
        src: null != i && "" !== i ? i : a,
        height: n,
        width: r,
        spoiler: t,
        flags: e.flags,
        contentScanVersion: e.contentScanVersion,
        isVideo: o,
        type: "embed"
      }
    }
  }).filter(m.isNotNullish) : []
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = I(e, n);
  return a.useMemo(() => {
    if (null == t) return [];
    if (!t.isMediaChannel()) return l;
    {
      let e = l.find(e => e.isThumbnail);
      return null != e ? [e] : l
    }
  }, [t, l])
}

function I(e, t) {
  let n = C(e),
    l = T(e, t);
  return [...n, ...l]
}

function _(e, t) {
  var n, l;
  let i = C(e),
    a = T(e, t);
  return null !== (l = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== l ? l : null
}

function N(e, t) {
  let n = C(e),
    l = T(e, t);
  return null == n[0] && null != l[0]
}

function A(e, t) {
  var n;
  let l = u.default.getChannel(t);
  if (null == l) return !1;
  let i = d.default.getMessage(l.id, l.id);
  return null != i && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && l.isForumPost() && l.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(l.id) && (0 === i.attachments.length || null == i.attachments.find(e => E(e) || g(e)))
}

function y(e) {
  return e.reduce((e, t) => ({
    containsVideo: e.containsVideo || t.isVideo,
    containsGif: e.containsGif || (0, s.isAnimatedImageUrl)(t.src)
  }), {
    containsVideo: !1,
    containsGif: !1
  })
}