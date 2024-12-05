n.d(t, {
    Z: function () {
        return Z;
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
    L = n(373826),
    x = n(228168),
    w = n(616922),
    P = n(249942);
function M(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: c } = (0, D.z)(),
        d = { [P.fullSize]: c === x.y0.FULL_SIZE },
        { largeImage: f } = (0, _.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: p } = (0, y.n)(n),
        m = (0, N.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: A.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: g } = (0, u.ZP)(),
        v = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        I = (0, R.Z)({
            userId: t.id,
            onAction: v
        }),
        b = () => (n.content_type === o.s.TOP_GAME ? T.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : E.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == m
        ? (0, r.jsxs)(O.Z.Overlay, {
              className: a()(P.card, s),
              ref: I,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, d),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: f,
                                  size: h.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: p
                                          })
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: b()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(O.Z.Overlay, {
              className: a()(P.card, s),
              ref: I,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, d),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: f,
                                  onClick: (e) => {
                                      v({ action: 'PRESS_IMAGE' }), m(e);
                                  },
                                  size: h.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)(l.Clickable, {
                                          className: P.clickable,
                                          onClick: (e) => {
                                              v({ action: 'PRESS_TEXT' }), m(e);
                                          },
                                          children: (0, r.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: p
                                          })
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: b()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function k(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, D.z)(),
        c = { [P.fullSize]: o === x.y0.FULL_SIZE },
        { largeImage: d } = (0, _.rv)({ entry: n }),
        { url: f } = n.extra,
        { analyticsLocations: p } = (0, u.ZP)(),
        g = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: p
        }),
        E = (0, R.Z)({
            userId: t.id,
            onAction: g
        });
    return (0, r.jsxs)(O.Z.Overlay, {
        className: a()(P.card, s),
        ref: E,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, c),
                    children: [
                        (0, r.jsx)(h.E, {
                            aspectRatio: 'crunchyroll',
                            image: d,
                            size: h.J.SIZE_60,
                            onClick:
                                null == f || '' === f
                                    ? void 0
                                    : () => {
                                          g({ action: 'PRESS_IMAGE' }), (0, m.Y)(f);
                                      }
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                null == f || '' === f
                                    ? (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(l.Clickable, {
                                          className: P.clickable,
                                          onClick: () => {
                                              g({ action: 'PRESS_TEXT' }), (0, m.Y)(f);
                                          },
                                          children: [
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: P.badges,
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
function U(e) {
    var t, n;
    let { user: i, entry: s, header: o, className: l } = e,
        { profileType: c } = (0, D.z)(),
        d = { [P.fullSize]: c === x.y0.FULL_SIZE },
        { largeImage: f } = (0, _.rv)({ entry: s }),
        { analyticsLocations: p } = (0, u.ZP)(),
        g = (0, C.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: p
        }),
        E = (0, R.Z)({
            userId: i.id,
            onAction: g
        }),
        I = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == I
        ? null
        : (0, r.jsxs)(O.Z.Overlay, {
              className: a()(P.card, l),
              ref: E,
              children: [
                  o,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, d),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: f,
                                  size: h.J.SIZE_60,
                                  onClick: () => {
                                      g({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(w.Hw.ALBUM, I.external_parent_id);
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: I.title,
                                                  onClick: () => {
                                                      g({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(w.Hw.TRACK, I.external_id);
                                                  }
                                              }),
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = I.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      g({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(w.Hw.ARTIST, null === (e = I.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(S.Gk, {
                                          location: S.Gt.USER_PROFILE,
                                          className: P.badges,
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
function B(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, D.z)(),
        l = { [P.fullSize]: o === x.y0.FULL_SIZE },
        { largeImage: c } = (0, _.rv)({ entry: n }),
        { analyticsLocations: d } = (0, u.ZP)(),
        f = (0, C.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: d
        }),
        p = (0, R.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, r.jsxs)(O.Z.Overlay, {
        className: a()(P.card, s),
        ref: p,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, l),
                    children: [
                        (0, r.jsx)(h.E, {
                            image: c,
                            size: h.J.SIZE_60,
                            onClick: () => {
                                f({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(w.Hw.ALBUM, n.extra.media.external_parent_id);
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(L.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title,
                                            onClick: () => {
                                                f({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(w.Hw.TRACK, n.extra.media.external_id);
                                            }
                                        }),
                                        (0, r.jsx)(L.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name,
                                            onClick: () => {
                                                f({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(w.Hw.ARTIST, n.extra.artist.external_id);
                                            }
                                        })
                                    ]
                                }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: P.badges,
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
function G(e) {
    let { user: t, entry: n, header: i, onClose: s, className: o } = e,
        { profileType: l } = (0, D.z)(),
        p = { [P.fullSize]: l === x.y0.FULL_SIZE },
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
            null == s || s(), (0, c.__)(d._b.TEXT, f.I.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, r.jsxs)(O.Z.Overlay, {
        className: a()(P.card, o),
        ref: I,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, p),
                    children: [
                        (0, r.jsx)(h.E, {
                            image: m,
                            size: h.J.SIZE_60,
                            onClick: () => {
                                v({ action: 'PRESS_IMAGE' }), T();
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(L.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            v({ action: 'PRESS_TEXT' }), T();
                                        }
                                    })
                                }),
                                (0, r.jsx)(S.Gk, {
                                    location: S.Gt.USER_PROFILE,
                                    className: P.badges,
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
function Z(e) {
    let { entry: t, ...n } = e;
    return (0, s.EQ)(t)
        .when(p.dX, (e) =>
            (0, r.jsx)(M, {
                entry: e,
                ...n
            })
        )
        .when(p.y0, (e) =>
            (0, r.jsx)(k, {
                entry: e,
                ...n
            })
        )
        .when(p.dU, (e) =>
            (0, r.jsx)(U, {
                entry: e,
                ...n
            })
        )
        .when(p.KF, (e) =>
            (0, r.jsx)(B, {
                entry: e,
                ...n
            })
        )
        .when(p.Mq, (e) =>
            (0, r.jsx)(G, {
                entry: e,
                ...n
            })
        )
        .exhaustive();
}
