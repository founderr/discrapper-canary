n.d(t, {
    Z: function () {
        return F;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(278074),
    o = n(876215),
    l = n(481060),
    u = n(906732),
    c = n(499254),
    d = n(827498),
    f = n(541716),
    _ = n(379357),
    p = n(26033),
    h = n(358696),
    m = n(740605),
    g = n(370370),
    E = n(91140),
    v = n(551228),
    I = n(278399),
    T = n(555672),
    b = n(335326),
    S = n(297781),
    y = n(797342),
    A = n(810568),
    N = n(168524),
    C = n(960870),
    R = n(139793),
    O = n(502762),
    D = n(652853),
    L = n(336383),
    x = n(373826),
    w = n(228168),
    P = n(616922),
    M = n(249942);
function k(e) {
    let { user: t, entry: n, header: i, className: s, onClose: c } = e,
        { profileType: d } = (0, D.z)(),
        f = { [M.fullSize]: d === w.y0.FULL_SIZE },
        { largeImage: p } = (0, _.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: m } = (0, y.n)(n),
        g = (0, N.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: A.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: v } = (0, u.ZP)(),
        I = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: v
        }),
        b = (0, R.Z)({
            userId: t.id,
            onAction: I
        }),
        P = () => (n.content_type === o.s.TOP_GAME ? T.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : E.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == g
        ? (0, r.jsxs)(O.Z.Overlay, {
              className: a()(M.card, s),
              ref: b,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: M.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(M.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(x.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: P()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(L.Z, {
              ref: b,
              className: s,
              subsection: w.Tb.RECENT_ACTIVITY,
              onAction: I,
              onClose: c,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: M.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(M.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: (e) => {
                                      I({ action: 'PRESS_IMAGE' }), g(e), d !== w.y0.FULL_SIZE && (null == c || c());
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, r.jsx)(l.Clickable, {
                                          className: M.clickableText,
                                          onClick: (e) => {
                                              I({ action: 'PRESS_TEXT' }), g(e), d !== w.y0.FULL_SIZE && (null == c || c());
                                          },
                                          children: (0, r.jsx)(x.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: P()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function U(e) {
    let { user: t, entry: n, header: i, className: s, onClose: o } = e,
        { profileType: c } = (0, D.z)(),
        d = { [M.fullSize]: c === w.y0.FULL_SIZE },
        { largeImage: f } = (0, _.rv)({ entry: n }),
        { url: p } = n.extra,
        { analyticsLocations: g } = (0, u.ZP)(),
        E = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        v = (0, R.Z)({
            userId: t.id,
            onAction: E
        });
    return (0, r.jsxs)(L.Z, {
        ref: v,
        className: s,
        subsection: w.Tb.RECENT_ACTIVITY,
        onAction: E,
        onClose: o,
        children: [
            i,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, d),
                    children: [
                        null == p || '' === p
                            ? (0, r.jsx)(h.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: f,
                                  size: h.J.SIZE_60
                              })
                            : (0, r.jsx)(h.E, {
                                  aspectRatio: 'crunchyroll',
                                  image: f,
                                  size: h.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: () => {
                                      E({ action: 'PRESS_IMAGE' }), (0, m.Y)(p);
                                  }
                              }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                null == p || '' === p
                                    ? (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(l.Clickable, {
                                          className: M.clickableText,
                                          onClick: () => {
                                              E({ action: 'PRESS_TEXT' }), (0, m.Y)(p);
                                          },
                                          children: [
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: b.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function B(e) {
    var t, n;
    let { user: i, entry: s, header: o, className: l, onClose: c } = e,
        { profileType: d } = (0, D.z)(),
        f = { [M.fullSize]: d === w.y0.FULL_SIZE },
        { largeImage: p } = (0, _.rv)({ entry: s }),
        { analyticsLocations: g } = (0, u.ZP)(),
        E = (0, C.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: g
        }),
        I = (0, R.Z)({
            userId: i.id,
            onAction: E
        }),
        T = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == T
        ? null
        : (0, r.jsxs)(L.Z, {
              ref: I,
              className: l,
              subsection: w.Tb.RECENT_ACTIVITY,
              onAction: E,
              onClose: c,
              children: [
                  o,
                  (0, r.jsx)('div', {
                      className: M.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(M.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60,
                                  className: M.clickableImage,
                                  onClick: () => {
                                      E({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(P.Hw.ALBUM, T.external_parent_id);
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: T.title,
                                                  onClick: () => {
                                                      E({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(P.Hw.TRACK, T.external_id);
                                                  }
                                              }),
                                              (0, r.jsx)(x.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = T.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      E({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(P.Hw.ARTIST, null === (e = T.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: M.badges,
                                          children: v.te.map((e, t) => (0, r.jsx)(e, { entry: s }, 'entry-'.concat(t)))
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function G(e) {
    let { user: t, entry: n, header: i, className: s, onClose: o } = e,
        { profileType: l } = (0, D.z)(),
        c = { [M.fullSize]: l === w.y0.FULL_SIZE },
        { largeImage: d } = (0, _.rv)({ entry: n }),
        { analyticsLocations: f } = (0, u.ZP)(),
        p = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: f
        }),
        g = (0, R.Z)({
            userId: t.id,
            onAction: p
        });
    return (0, r.jsxs)(L.Z, {
        ref: g,
        className: s,
        subsection: w.Tb.RECENT_ACTIVITY,
        onAction: p,
        onClose: o,
        children: [
            i,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, c),
                    children: [
                        (0, r.jsx)(h.E, {
                            image: d,
                            size: h.J.SIZE_60,
                            className: M.clickableImage,
                            onClick: () => {
                                p({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(P.Hw.ALBUM, n.extra.media.external_parent_id);
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title,
                                            onClick: () => {
                                                p({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(P.Hw.TRACK, n.extra.media.external_id);
                                            }
                                        }),
                                        (0, r.jsx)(x.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name,
                                            onClick: () => {
                                                p({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(P.Hw.ARTIST, n.extra.artist.external_id);
                                            }
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: I.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function Z(e) {
    let { user: t, entry: n, header: i, className: s, onClose: o } = e,
        { profileType: l } = (0, D.z)(),
        p = { [M.fullSize]: l === w.y0.FULL_SIZE },
        { largeImage: m } = (0, _.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { analyticsLocations: E } = (0, u.ZP)(),
        v = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        }),
        I = (0, R.Z)({
            userId: t.id,
            onAction: v
        }),
        T = () => {
            null == o || o(), (0, c.__)(d._b.TEXT, f.I.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, r.jsxs)(L.Z, {
        ref: I,
        className: s,
        subsection: w.Tb.RECENT_ACTIVITY,
        onAction: v,
        onClose: o,
        children: [
            i,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, p),
                    children: [
                        (0, r.jsx)(h.E, {
                            image: m,
                            size: h.J.SIZE_60,
                            className: M.clickableImage,
                            onClick: () => {
                                v({ action: 'PRESS_IMAGE' }), T();
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(x.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            v({ action: 'PRESS_TEXT' }), T();
                                        }
                                    })
                                }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: g.j.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function F(e) {
    let { entry: t, ...n } = e;
    return (0, s.EQ)(t)
        .when(p.dX, (e) =>
            (0, r.jsx)(k, {
                entry: e,
                ...n
            })
        )
        .when(p.y0, (e) =>
            (0, r.jsx)(U, {
                entry: e,
                ...n
            })
        )
        .when(p.dU, (e) =>
            (0, r.jsx)(B, {
                entry: e,
                ...n
            })
        )
        .when(p.KF, (e) =>
            (0, r.jsx)(G, {
                entry: e,
                ...n
            })
        )
        .when(p.Mq, (e) =>
            (0, r.jsx)(Z, {
                entry: e,
                ...n
            })
        )
        .exhaustive();
}
