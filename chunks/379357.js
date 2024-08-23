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
    a = n(841784),
    s = n(834353),
    o = n(802856),
    l = n(835473),
    u = n(210753),
    c = n(81063),
    d = n(162461),
    _ = n(26033),
    E = n(561308),
    f = n(981631),
    h = n(701488),
    p = n(689938);
function I(e) {
    var t, n;
    let { entry: r, showCoverImage: i = !0 } = e,
        a = (0, d.wh)('useImageForContentEntry'),
        { activity: s, activityApplication: o, fallbackApplication: l } = (0, E.qy)(r),
        { largeImage: f, smallImage: p } = T(s, o),
        { largeImage: I } = m(s, null != l ? l : o),
        { coverImageUrl: g } = (0, u.$)(null === (t = null != l ? l : o) || void 0 === t ? void 0 : t.id);
    let S =
        ((n = r),
        (0, _.dU)(n)
            ? { src: n.extra.entries[0].media.image_url }
            : (0, _.y0)(n)
              ? {
                    src: (0, c.getAssetImage)(n.extra.application_id, n.extra.media_assets_large_image, h.Si.LARGE),
                    alt: n.extra.media_title
                }
              : (0, _.KF)(n)
                ? { src: n.extra.media.image_url }
                : void 0);
    return null != f && a
        ? {
              largeImage: f,
              smallImage: p
          }
        : null != S
          ? {
                largeImage: S,
                smallImage: void 0
            }
          : null != g && i
            ? {
                  largeImage: { src: g },
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
    if (null == n && (0, o.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.XBOX).icon.customPNG,
                alt: p.Z.Messages.XBOX
            },
            smallImage: void 0
        };
    if (null == n && (0, s.Z)(e))
        return {
            largeImage: {
                src: r.Z.get(f.ABu.PLAYSTATION).icon.customPNG,
                alt: p.Z.Messages.PLAYSTATION
            },
            smallImage: void 0
        };
    let a = null == t ? void 0 : t.getIconURL(h.Si.LARGE);
    return null == a
        ? {
              largeImage: void 0,
              smallImage: void 0
          }
        : {
              largeImage: {
                  src: a,
                  alt: p.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: null == t ? void 0 : t.name })
              },
              smallImage: void 0
          };
}
function T(e, t) {
    var n, r, s, o, u, d, _;
    let E = (0, i.Z)(e),
        f = null == e ? void 0 : null === (n = e.assets) || void 0 === n ? void 0 : n.large_image,
        I = E ? void 0 : null == e ? void 0 : null === (r = e.assets) || void 0 === r ? void 0 : r.small_image,
        m = null == e ? void 0 : null === (s = e.assets) || void 0 === s ? void 0 : s.large_text,
        T = null == e ? void 0 : null === (o = e.assets) || void 0 === o ? void 0 : o.small_text,
        [g] = (0, l.Z)([null == e ? void 0 : e.application_id]),
        S = null === (u = null != t ? t : g) || void 0 === u ? void 0 : u.getIconURL(h.Si.LARGE);
    return null == e
        ? {
              largeImage: void 0,
              smallImage: void 0
          }
        : (0, a.Z)(e) && null != t
          ? {
                largeImage: {
                    src: S,
                    alt: p.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: null === (d = null != t ? t : g) || void 0 === d ? void 0 : d.name })
                },
                smallImage: void 0
            }
          : null != f && null != I
            ? {
                  largeImage: {
                      src: (0, c.getAssetImage)(e.application_id, f, h.Si.LARGE),
                      text: m
                  },
                  smallImage: {
                      src: (0, c.getAssetImage)(e.application_id, I, h.Si.LARGE),
                      text: T
                  }
              }
            : null != f && null == I
              ? {
                    largeImage: {
                        src: (0, c.getAssetImage)(e.application_id, f, h.Si.LARGE),
                        text: m
                    },
                    smallImage: void 0
                }
              : null == f && null != I && null != S
                ? {
                      largeImage: {
                          src: S,
                          alt: p.Z.Messages.APPLICATION_ICON_A11Y_LABEL.format({ applicationName: null === (_ = null != t ? t : g) || void 0 === _ ? void 0 : _.name })
                      },
                      smallImage: {
                          src: (0, c.getAssetImage)(e.application_id, I, h.Si.LARGE),
                          text: T
                      }
                  }
                : {
                      largeImage: void 0,
                      smallImage: void 0
                  };
}
