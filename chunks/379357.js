n.d(t, {
    FO: function () {
        return m;
    },
    YC: function () {
        return T;
    },
    rv: function () {
        return I;
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
    c = n(162461),
    d = n(26033),
    _ = n(561308),
    E = n(981631),
    f = n(701488),
    h = n(689938);
function p(e) {
    let t = null == e ? void 0 : e.getIconURL(f.Si.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt: null == n ? h.Z.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL : h.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: n })
        };
}
function I(e) {
    var t, n;
    let { entry: r, showCoverImage: i = !0 } = e,
        a = (0, c.wh)('useImageForContentEntry'),
        { activity: s, activityApplication: o, fallbackApplication: E } = (0, _.qy)(r),
        { largeImage: h, smallImage: p } = T(s, o),
        { largeImage: I } = m(s, null != E ? E : o),
        { coverImageUrl: S } = (0, l.$)(null === (t = null != E ? E : o) || void 0 === t ? void 0 : t.id);
    let g =
        ((n = r),
        (0, d.dU)(n)
            ? { src: n.extra.entries[0].media.image_url }
            : (0, d.y0)(n)
              ? {
                    src: (0, u.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, f.Si.LARGE),
                    alt: n.extra.media_title
                }
              : (0, d.KF)(n)
                ? { src: n.extra.media.image_url }
                : void 0);
    return null != h && a
        ? {
              largeImage: h,
              smallImage: p
          }
        : null != g
          ? {
                largeImage: g,
                smallImage: void 0
            }
          : null != S && i
            ? {
                  largeImage: { src: S },
                  smallImage: void 0
              }
            : {
                  largeImage: I,
                  smallImage: void 0
              };
}
function m(e, t) {
    let { largeImage: n, smallImage: i } = T(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i
        };
    if (null == n && (0, s.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(E.ABu.XBOX).icon.customPNG,
                alt: h.Z.Messages.XBOX
            },
            smallImage: void 0
        };
    if (null == n && null == i && (0, a.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(E.ABu.PLAYSTATION).icon.lightPNG,
                alt: h.Z.Messages.PLAYSTATION
            },
            smallImage: void 0
        };
    let o = p(t);
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
function T(e, t) {
    var n, r, a, s, l, c;
    let d = (0, o.q)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0
        };
    let _ = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        E =
            null != _
                ? {
                      src: (0, u.getAssetImage)(e.application_id, _, [f.Si.LARGE, f.Si.LARGE]),
                      text: null === (a = e.assets) || void 0 === a ? void 0 : null === (r = a.large_text) || void 0 === r ? void 0 : r.trim()
                  }
                : void 0,
        h = (0, i.Z)(e) ? void 0 : null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.small_image,
        I =
            null != h
                ? {
                      src: (0, u.getAssetImage)(e.application_id, h, [f.Si.LARGE, f.Si.LARGE]),
                      text: null === (c = e.assets) || void 0 === c ? void 0 : null === (l = c.small_text) || void 0 === l ? void 0 : l.trim()
                  }
                : void 0;
    return {
        largeImage: null != E ? E : p(null != t ? t : d),
        smallImage: I
    };
}
