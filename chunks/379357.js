n.d(t, {
    FO: function () {
        return g;
    },
    YC: function () {
        return E;
    },
    rv: function () {
        return m;
    }
}),
    n(47120);
var r = n(726542),
    i = n(394821),
    a = n(834353),
    s = n(802856),
    o = n(835473),
    l = n(210753),
    u = n(81063),
    c = n(26033),
    d = n(561308),
    f = n(981631),
    _ = n(701488),
    p = n(388032);
function h(e) {
    let t = null == e ? void 0 : e.getIconURL(_.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? p.intl.string(p.t['2B/phI']) : p.intl.formatToPlainString(p.t.tiKyYm, { applicationName: n })
        };
}
function m(e) {
    var t, n;
    let { entry: r, showCoverImage: i = !0 } = e,
        { activity: a, activityApplication: s, fallbackApplication: o } = (0, d.qy)(r),
        { largeImage: f, smallImage: p } = E(a, s),
        { largeImage: h } = g(a, null != o ? o : s),
        { coverImageUrl: m } = (0, l.$)(null === (t = null != o ? o : s) || void 0 === t ? void 0 : t.id);
    let v =
        ((n = r),
        (0, c.dU)(n) && n.extra.entries.length > 0
            ? { src: n.extra.entries[0].media.image_url }
            : (0, c.y0)(n)
              ? {
                    src: (0, u.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, _.Si.LARGE),
                    alt: n.extra.media_title
                }
              : (0, c.KF)(n)
                ? { src: n.extra.media.image_url }
                : void 0);
    return null != f
        ? {
              largeImage: f,
              smallImage: p
          }
        : null != v
          ? {
                largeImage: v,
                smallImage: void 0
            }
          : null != m && i
            ? {
                  largeImage: { src: m },
                  smallImage: void 0
              }
            : {
                  largeImage: h,
                  smallImage: void 0
              };
}
function g(e, t) {
    let { largeImage: n, smallImage: i } = E(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if (null == n && (0, s.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.XBOX).icon.customPNG,
                alt: p.intl.string(p.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.PLAYSTATION).icon.lightPNG,
                alt: p.intl.string(p.t.fFl4jo)
            },
            smallImage: void 0
        };
    let o = h(t);
    return null != o
        ? {
              largeImage: o,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function E(e, t) {
    var n, r, a, s, l, c;
    let d = (0, o.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        p =
            null != f
                ? {
                      src: (0, u.getAssetImage)(e.application_id, f, [_.Si.LARGE, _.Si.LARGE]),
                      text: null === (a = e.assets) || void 0 === a ? void 0 : null === (r = a.large_text) || void 0 === r ? void 0 : r.trim()
                  }
                : void 0,
        m = (0, i.Z)(e) ? void 0 : null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.small_image,
        g =
            null != m
                ? {
                      src: (0, u.getAssetImage)(e.application_id, m, [_.Si.LARGE, _.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != p ? p : h(null != t ? t : d),
        smallImage: g
    };
}
