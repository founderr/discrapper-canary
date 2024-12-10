n.d(t, {
    Z: function () {
        return G;
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
    I = n(555672),
    T = n(335326),
    b = n(297781),
    S = n(797342),
    y = n(810568),
    A = n(168524),
    N = n(960870),
    C = n(139793),
    R = n(502762),
    O = n(652853),
    D = n(336383),
    L = n(373826),
    x = n(228168),
    w = n(616922),
    P = n(249942);
function M(e) {
    let { user: t, entry: n, header: i, className: s, onClose: c } = e,
        { profileType: d } = (0, O.z)(),
        f = { [P.fullSize]: d === x.y0.FULL_SIZE },
        { largeImage: p } = (0, _.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: m } = (0, S.n)(n),
        g = (0, A.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: y.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: v } = (0, u.ZP)(),
        T = (0, N.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: v
        }),
        w = (0, C.Z)({
            userId: t.id,
            onAction: T
        }),
        M = () => (n.content_type === o.s.TOP_GAME ? I.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : E.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == g
        ? (0, r.jsxs)(R.Z.Overlay, {
              className: a()(P.card, s),
              ref: w,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, r.jsx)(b.Gk, {
                                          location: b.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: M()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(D.Z, {
              ref: w,
              className: s,
              subsection: x.Tb.RECENT_ACTIVITY,
              onAction: T,
              onClose: c,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60,
                                  className: P.clickableImage,
                                  onClick: (e) => {
                                      T({ action: 'PRESS_IMAGE' }), g(e), d !== x.y0.FULL_SIZE && (null == c || c());
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsx)(l.Clickable, {
                                          className: P.clickableText,
                                          onClick: (e) => {
                                              T({ action: 'PRESS_TEXT' }), g(e), d !== x.y0.FULL_SIZE && (null == c || c());
                                          },
                                          children: (0, r.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: m
                                          })
                                      }),
                                      (0, r.jsx)(b.Gk, {
                                          location: b.Gt.USER_PROFILE,
                                          className: P.badges,
                                          children: M()
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
    let { user: t, entry: n, header: i, className: s, onClose: o } = e,
        { profileType: c } = (0, O.z)(),
        d = { [P.fullSize]: c === x.y0.FULL_SIZE },
        { largeImage: f } = (0, _.rv)({ entry: n }),
        { url: p } = n.extra,
        { analyticsLocations: g } = (0, u.ZP)(),
        E = (0, N.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        v = (0, C.Z)({
            userId: t.id,
            onAction: E
        });
    return (0, r.jsxs)(D.Z, {
        ref: v,
        className: s,
        subsection: x.Tb.RECENT_ACTIVITY,
        onAction: E,
        onClose: o,
        children: [
            i,
            (0, r.jsx)('div', {
                className: P.body,
                children: (0, r.jsxs)('div', {
                    className: a()(P.content, d),
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
                                  className: P.clickableImage,
                                  onClick: () => {
                                      E({ action: 'PRESS_IMAGE' }), (0, m.Y)(p);
                                  }
                              }),
                        (0, r.jsxs)('div', {
                            className: P.details,
                            children: [
                                null == p || '' === p
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
                                          className: P.clickableText,
                                          onClick: () => {
                                              E({ action: 'PRESS_TEXT' }), (0, m.Y)(p);
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
                                (0, r.jsx)(b.Gk, {
                                    location: b.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: T.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
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
    let { user: i, entry: s, header: o, className: l, onClose: c } = e,
        { profileType: d } = (0, O.z)(),
        f = { [P.fullSize]: d === x.y0.FULL_SIZE },
        { largeImage: p } = (0, _.rv)({ entry: s }),
        { analyticsLocations: g } = (0, u.ZP)(),
        E = (0, N.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: g
        }),
        I = (0, C.Z)({
            userId: i.id,
            onAction: E
        }),
        T = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == T
        ? null
        : (0, r.jsxs)(D.Z, {
              ref: I,
              className: l,
              subsection: x.Tb.RECENT_ACTIVITY,
              onAction: E,
              onClose: c,
              children: [
                  o,
                  (0, r.jsx)('div', {
                      className: P.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(P.content, f),
                          children: [
                              (0, r.jsx)(h.E, {
                                  image: p,
                                  size: h.J.SIZE_60,
                                  className: P.clickableImage,
                                  onClick: () => {
                                      E({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, m.o)(w.Hw.ALBUM, T.external_parent_id);
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: T.title,
                                                  onClick: () => {
                                                      E({ action: 'OPEN_SPOTIFY_TRACK' }), (0, m.o)(w.Hw.TRACK, T.external_id);
                                                  }
                                              }),
                                              (0, r.jsx)(L.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = T.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      E({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, m.o)(w.Hw.ARTIST, null === (e = T.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(b.Gk, {
                                          location: b.Gt.USER_PROFILE,
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
    let { user: t, entry: n, header: i, className: s, onClose: o } = e,
        { profileType: l } = (0, O.z)(),
        p = { [P.fullSize]: l === x.y0.FULL_SIZE },
        { largeImage: m } = (0, _.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { analyticsLocations: E } = (0, u.ZP)(),
        v = (0, N.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        }),
        I = (0, C.Z)({
            userId: t.id,
            onAction: v
        }),
        T = () => {
            null == o || o(), (0, c.__)(d._b.TEXT, f.I.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, r.jsxs)(D.Z, {
        ref: I,
        className: s,
        subsection: x.Tb.RECENT_ACTIVITY,
        onAction: v,
        onClose: o,
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
                            className: P.clickableImage,
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
                                (0, r.jsx)(b.Gk, {
                                    location: b.Gt.USER_PROFILE,
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
function G(e) {
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
        .when(p.Mq, (e) =>
            (0, r.jsx)(B, {
                entry: e,
                ...n
            })
        )
        .exhaustive();
}
