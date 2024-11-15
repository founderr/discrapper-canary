n.d(t, {
    Ah: function () {
        return r;
    },
    CB: function () {
        return N;
    },
    aU: function () {
        return S;
    },
    cp: function () {
        return C;
    },
    eL: function () {
        return y;
    },
    vg: function () {
        return A;
    },
    zy: function () {
        return T;
    }
}),
    n(789020),
    n(47120),
    n(724458);
var r,
    i,
    a = n(192379),
    s = n(406432),
    o = n(144140),
    l = n(695346),
    u = n(592125),
    c = n(375954),
    d = n(594174),
    f = n(630388),
    _ = n(823379),
    p = n(709054),
    h = n(591759),
    m = n(981631);
function g(e) {
    if (null == e) return !1;
    let { filename: t, height: n, width: r } = e;
    return (0, s.CO)(t) && null != n && n > 0 && null != r && r > 0;
}
function E(e) {
    return null != e && null != e && (0, s.NU)(e.filename) && null != e.proxy_url;
}
function v(e) {
    return g(e) || E(e);
}
((i = r || (r = {})).EMBED = 'embed'), (i.ATTACHMENT = 'attachment');
function b(e) {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.x4.getSetting();
        if (!t) return [];
        let n = null == e ? void 0 : e.attachments;
        return null == e || null == n
            ? []
            : n
                  .filter(v)
                  .map((e, t) => {
                      let { proxy_url: n, url: r, description: i, spoiler: a, flags: o, width: l, height: u, filename: c, content_scan_version: d } = e;
                      if (null == l || null == u) return null;
                      let _ = (0, s.NU)(c),
                          p = null != e.flags && (0, f.yE)(e.flags, m.J0y.IS_THUMBNAIL),
                          g = null != n ? n : r;
                      if (_) {
                          let e = h.Z.toURLSafe(n);
                          if (null == e) return null;
                          e.searchParams.append('format', 'webp'), (g = e.toString());
                      }
                      return {
                          src: g,
                          width: l,
                          height: u,
                          spoiler: null != a && a,
                          flags: o,
                          contentScanVersion: d,
                          alt: i,
                          isVideo: _,
                          isThumbnail: p,
                          type: 'attachment',
                          attachmentId: e.id,
                          mediaIndex: t
                      };
                  })
                  .filter(_.lm);
    })(e, l.x4.useSetting());
}
function I(e, t) {
    let n = l.RS.useSetting(),
        r = l.NA.useSetting();
    if (null == e) return [];
    let i = e.embeds;
    return n && r && null != i
        ? i
              .map((e, n) => {
                  var r;
                  let i = null !== (r = e.image) && void 0 !== r ? r : e.thumbnail;
                  if ((null == i && null != e.images && (i = e.images[0]), null != i && null != i.url)) {
                      let { height: r, proxyURL: a, url: o, width: l } = i,
                          u = null != a && (0, s.cb)(a);
                      return {
                          src: null != a && '' !== a ? a : o,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: u,
                          type: 'embed',
                          mediaIndex: n
                      };
                  }
              })
              .filter(_.lm)
        : [];
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = T(e, n);
    return a.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return r;
        {
            let e = r.find((e) => e.isThumbnail);
            return null != e ? [e] : r;
        }
    }, [t, r]);
}
function T(e, t) {
    let n = b(e);
    return [...n, ...I(e, t)];
}
function y(e, t) {
    var n, r;
    let i = b(e),
        a = I(e, t);
    return null !== (r = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== r ? r : null;
}
function A(e, t) {
    let n = b(e),
        r = I(e, t);
    return null == n[0] && null != r[0];
}
function N(e, t) {
    var n;
    let r = u.Z.getChannel(t);
    if (null == r) return !1;
    let i = c.Z.getMessage(r.id, p.default.castChannelIdAsMessageId(r.id));
    return null != i && e.length > 0 && null != e.find((e) => e.isImage || e.isVideo) && r.isForumPost() && r.ownerId === (null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === o.Z.getCount(r.id) && (0 === i.attachments.length || null == i.attachments.find((e) => g(e) || E(e)));
}
function C(e) {
    return e.reduce(
        (e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, s.d$)(t.src)
        }),
        {
            containsVideo: !1,
            containsGif: !1
        }
    );
}
