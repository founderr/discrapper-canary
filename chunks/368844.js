n.d(t, {
    Ah: function () {
        return r;
    },
    CB: function () {
        return b;
    },
    aU: function () {
        return O;
    },
    cp: function () {
        return L;
    },
    eL: function () {
        return C;
    },
    vg: function () {
        return y;
    },
    zy: function () {
        return R;
    }
});
var r,
    i = n(789020);
var a = n(47120);
var o = n(724458);
var s = n(470079),
    l = n(406432),
    u = n(144140),
    c = n(695346),
    d = n(592125),
    _ = n(375954),
    E = n(594174),
    f = n(630388),
    h = n(823379),
    p = n(709054),
    m = n(591759),
    I = n(981631);
function T(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, l.CO)(t) && null != n && n > 0 && null != r && r > 0;
}
function g(e) {
    return null != e && null != e && (0, l.NU)(e.filename) && null != e.proxy_url;
}
function S(e) {
    return T(e) || g(e);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x4.getSetting();
    if (!t) return [];
    let n = null == e ? void 0 : e.attachments;
    return null == e || null == n
        ? []
        : n
              .filter(S)
              .map((e, t) => {
                  let { proxy_url: n, url: r, description: i, spoiler: a, flags: o, width: s, height: u, filename: c, content_scan_version: d } = e;
                  if (null == s || null == u) return null;
                  let _ = (0, l.NU)(c),
                      E = null != e.flags && (0, f.yE)(e.flags, I.J0y.IS_THUMBNAIL),
                      h = null != n ? n : r;
                  if (_) {
                      let e = m.Z.toURLSafe(n);
                      if (null == e) return null;
                      e.searchParams.append('format', 'webp'), (h = e.toString());
                  }
                  return {
                      src: h,
                      width: s,
                      height: u,
                      spoiler: null != a && a,
                      flags: o,
                      contentScanVersion: d,
                      alt: i,
                      isVideo: _,
                      isThumbnail: E,
                      type: 'attachment',
                      attachmentId: e.id,
                      mediaIndex: t
                  };
              })
              .filter(h.lm);
}
function v(e) {
    return A(e, c.x4.useSetting());
}
function N(e, t) {
    let n = c.RS.useSetting(),
        r = c.NA.useSetting();
    if (null == e) return [];
    let i = e.embeds;
    return n && r && null != i
        ? i
              .map((e, n) => {
                  var r;
                  let i = null !== (r = e.image) && void 0 !== r ? r : e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: a, url: o, width: s } = i,
                          u = null != a && (0, l.cb)(a);
                      return {
                          src: null != a && '' !== a ? a : o,
                          height: r,
                          width: s,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: u,
                          type: 'embed',
                          mediaIndex: n
                      };
                  }
              })
              .filter(h.lm)
        : [];
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = R(e, n);
    return s.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return r;
        {
            let e = r.find((e) => e.isThumbnail);
            return null != e ? [e] : r;
        }
    }, [t, r]);
}
function R(e, t) {
    let n = v(e);
    return [...n, ...N(e, t)];
}
function C(e, t) {
    var n, r;
    let i = v(e),
        a = N(e, t);
    return null !== (r = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== r ? r : null;
}
function y(e, t) {
    let n = v(e),
        r = N(e, t);
    return null == n[0] && null != r[0];
}
function b(e, t) {
    var n;
    let r = d.Z.getChannel(t);
    if (null == r) return !1;
    let i = _.Z.getMessage(r.id, p.default.castChannelIdAsMessageId(r.id));
    return null != i && e.length > 0 && null != e.find((e) => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === u.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find((e) => T(e) || g(e)));
}
function L(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, l.d$)(t.src)
        }),
        {
            containsVideo: !1,
            containsGif: !1
        }
    );
}
!(function (e) {
    (e.EMBED = 'embed'), (e.ATTACHMENT = 'attachment');
})(r || (r = {}));
