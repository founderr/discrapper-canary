r.d(n, {
    FO: function () {
        return I;
    },
    YC: function () {
        return T;
    },
    rv: function () {
        return v;
    }
});
var i = r(47120);
var a = r(726542),
    s = r(394821),
    o = r(834353),
    l = r(802856),
    u = r(835473),
    c = r(210753),
    d = r(81063),
    f = r(26033),
    _ = r(593294),
    h = r(981631),
    p = r(701488),
    m = r(388032);
function g(e) {
    return (0, f.dU)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, f.y0)(e)
          ? {
                src: (0, d.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, p.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, f.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let n = null == e ? void 0 : e.getIconURL(p.Si.LARGE),
        r = null == e ? void 0 : e.name;
    if (null != n)
        return {
            src: n,
            alt: null == r ? m.intl.string(m.t['2B/phI']) : m.intl.formatToPlainString(m.t.tiKyYm, { applicationName: r })
        };
}
function v(e) {
    var n;
    let { entry: r, showCoverImage: i = !0 } = e,
        { activity: a, activityApplication: s, fallbackApplication: o } = (0, _.Z)(r),
        { largeImage: l, smallImage: u } = T(a, s),
        { largeImage: d } = I(a, null != o ? o : s),
        { coverImageUrl: f } = (0, c.$)(null === (n = null != o ? o : s) || void 0 === n ? void 0 : n.id),
        h = g(r);
    return null != l
        ? {
              largeImage: l,
              smallImage: u
          }
        : null != h
          ? {
                largeImage: h,
                smallImage: void 0
            }
          : null != f && i
            ? {
                  largeImage: { src: f },
                  smallImage: void 0
              }
            : {
                  largeImage: d,
                  smallImage: void 0
              };
}
function I(e, n) {
    let { largeImage: r, smallImage: i } = T(e, n);
    if (null != r)
        return {
            largeImage: r,
            smallImage: i
        };
    if (null == r && (0, l.Z)(e))
        return {
            largeImage: {
                src: a.Z.get(h.ABu.XBOX).icon.customPNG,
                alt: m.intl.string(m.t['Nfvo7+'])
            },
            smallImage: void 0
        };
    if (null == r && null == i && (0, o.Z)(e))
        return {
            largeImage: {
                src: a.Z.get(h.ABu.PLAYSTATION).icon.lightPNG,
                alt: m.intl.string(m.t.fFl4jo)
            },
            smallImage: void 0
        };
    let s = E(n);
    return null != s
        ? {
              largeImage: s,
              smallImage: i
          }
        : {
              largeImage: i,
              smallImage: void 0
          };
}
function T(e, n) {
    var r, i, a, o, l, c;
    let f = (0, u.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let _ = null == e ? void 0 : null === (r = e.assets) || void 0 === r ? void 0 : r.large_image,
        h =
            null != _
                ? {
                      src: (0, d.getAssetImage)(e.application_id, _, [p.Si.LARGE, p.Si.LARGE]),
                      text: null === (a = e.assets) || void 0 === a ? void 0 : null === (i = a.large_text) || void 0 === i ? void 0 : i.trim()
                  }
                : void 0,
        m = (0, s.Z)(e) ? void 0 : null == e ? void 0 : null === (o = e.assets) || void 0 === o ? void 0 : o.small_image,
        g =
            null != m
                ? {
                      src: (0, d.getAssetImage)(e.application_id, m, [p.Si.LARGE, p.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != h ? h : E(null != n ? n : f),
        smallImage: g
    };
}
