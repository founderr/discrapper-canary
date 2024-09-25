n.d(t, {
    FO: function () {
        return S;
    },
    YC: function () {
        return A;
    },
    rv: function () {
        return g;
    }
});
var r = n(47120);
var i = n(726542),
    a = n(394821),
    o = n(841784),
    s = n(834353),
    l = n(802856),
    u = n(835473),
    c = n(210753),
    d = n(81063),
    _ = n(162461),
    E = n(26033),
    f = n(561308),
    h = n(981631),
    p = n(701488),
    m = n(689938);
function I(e) {
    return (0, E.dU)(e)
        ? { src: e.extra.entries[0].media.image_url }
        : (0, E.y0)(e)
          ? {
                src: (0, d.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, p.Si.LARGE),
                alt: e.extra.media_title
            }
          : (0, E.KF)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function T(e) {
    let t = null == e ? void 0 : e.getIconURL(p.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? m.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL : m.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: n })
        };
}
function g(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        i = (0, _.wh)('useImageForContentEntry'),
        { activity: a, activityApplication: o, fallbackApplication: s } = (0, f.qy)(n),
        { largeImage: l, smallImage: u } = A(a, o),
        { largeImage: d } = S(a, null != s ? s : o),
        { coverImageUrl: E } = (0, c.$)(null === (t = null != s ? s : o) || void 0 === t ? void 0 : t.id),
        h = I(n);
    return null != l && i
        ? {
              largeImage: l,
              smallImage: u
          }
        : null != h
          ? {
                largeImage: h,
                smallImage: void 0
            }
          : null != E && r
            ? {
                  largeImage: { src: E },
                  smallImage: void 0
              }
            : {
                  largeImage: d,
                  smallImage: void 0
              };
}
function S(e, t) {
    let { largeImage: n, smallImage: r } = A(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: r
        };
    if (null == n && (0, l.Z)(e))
        return {
            largeImage: {
                src: i.Z.get(h.ABu.XBOX).icon.customPNG,
                alt: m.Z.Messages.XBOX
            },
            smallImage: void 0
        };
    if (null == n && null == r && (0, s.Z)(e))
        return {
            largeImage: {
                src: i.Z.get(h.ABu.PLAYSTATION).icon.lightPNG,
                alt: m.Z.Messages.PLAYSTATION
            },
            smallImage: void 0
        };
    let a = T(t);
    return null != a
        ? {
              largeImage: a,
              smallImage: r
          }
        : {
              largeImage: r,
              smallImage: void 0
          };
}
function A(e, t) {
    var n, r, i, s, l, c;
    let _ = (0, u.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let E = T(null != t ? t : _);
    if ((0, o.Z)(e) && null != E)
        return {
            largeImage: E,
            smallImage: void 0
        };
    let f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        h =
            null != f
                ? {
                      src: (0, d.getAssetImage)(e.application_id, f, [p.Si.LARGE, p.Si.LARGE]),
                      text: null === (i = e.assets) || void 0 === i ? void 0 : null === (r = i.large_text) || void 0 === r ? void 0 : r.trim()
                  }
                : void 0,
        m = (0, a.Z)(e) ? void 0 : null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.small_image;
    return {
        largeImage: null != h ? h : E,
        smallImage:
            null != m
                ? {
                      src: (0, d.getAssetImage)(e.application_id, m, [p.Si.LARGE, p.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0
    };
}
