n.d(t, {
    Ah: function () {
        return r;
    },
    CB: function () {
        return N;
    },
    aU: function () {
        return T;
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
        return S;
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
function I(e) {
    return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.x4.getSetting();
        if (!t) return [];
        let n = null == e ? void 0 : e.attachments;
        return null == e || null == n
            ? []
            : n
                  .filter(v)
                  .map((e, t) => {
                      var n;
                      let { proxy_url: r, url: i, description: a, spoiler: o, flags: l, width: u, height: c, filename: d, content_scan_version: _ } = e;
                      if (null == u || null == c) return null;
                      let p = (0, s.NU)(d),
                          g = null != e.flags && (0, f.yE)(e.flags, m.J0y.IS_THUMBNAIL),
                          E = null != r ? r : i;
                      if (p) {
                          let e = h.Z.toURLSafe(r);
                          if (null == e) return null;
                          e.searchParams.append('format', 'webp'), (E = e.toString());
                      }
                      return {
                          src: E,
                          width: u,
                          height: c,
                          spoiler: null != o && o,
                          flags: l,
                          contentScanVersion: _,
                          alt: a,
                          isVideo: p,
                          isThumbnail: g,
                          type: 'attachment',
                          attachmentId: e.id,
                          mediaIndex: t,
                          srcIsAnimated: (0, f.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, m.J0y.IS_ANIMATED)
                      };
                  })
                  .filter(_.lm);
    })(e, l.x4.useSetting());
}
function b(e, t) {
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
                      let { height: r, proxyURL: a, url: o, width: l, flags: u } = i,
                          c = null != a && (0, s.cb)(a);
                      return {
                          src: null != a && '' !== a ? a : o,
                          height: r,
                          width: l,
                          spoiler: t,
                          flags: e.flags,
                          contentScanVersion: e.contentScanVersion,
                          isVideo: c,
                          type: 'embed',
                          mediaIndex: n,
                          srcIsAnimated: (0, f.yE)(null != u ? u : 0, m.FoC.IS_ANIMATED)
                      };
                  }
              })
              .filter(_.lm)
        : [];
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = S(e, n);
    return a.useMemo(() => {
        if (null == t) return [];
        if (!t.isMediaChannel()) return r;
        {
            let e = r.find((e) => e.isThumbnail);
            return null != e ? [e] : r;
        }
    }, [t, r]);
}
function S(e, t) {
    let n = I(e);
    return [...n, ...b(e, t)];
}
function y(e, t) {
    var n, r;
    let i = I(e),
        a = b(e, t);
    return null !== (r = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== r ? r : null;
}
function A(e, t) {
    let n = I(e),
        r = b(e, t);
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
