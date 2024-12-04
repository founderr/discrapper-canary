n.d(t, {
    Z: function () {
        return H;
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
    u = n(100527),
    c = n(906732),
    d = n(499254),
    f = n(827498),
    _ = n(541716),
    p = n(379357),
    h = n(26033),
    m = n(358696),
    g = n(740605),
    E = n(370370),
    v = n(91140),
    I = n(551228),
    T = n(278399),
    b = n(555672),
    S = n(335326),
    y = n(297781),
    A = n(797342),
    N = n(810568),
    C = n(168524),
    R = n(960870),
    O = n(139793),
    D = n(502762),
    L = n(652853),
    x = n(194811),
    w = n(373826),
    P = n(582123),
    M = n(290274),
    k = n(228168),
    U = n(616922),
    B = n(249942);
function G(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: u } = (0, L.z)(),
        d = { [B.fullSize]: u === k.y0.FULL_SIZE },
        { largeImage: f } = (0, p.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: _ } = (0, A.n)(n),
        h = (0, C.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: N.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: g } = (0, c.ZP)(),
        E = (0, R.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        I = (0, O.Z)({
            userId: t.id,
            onAction: E
        }),
        T = () => (n.content_type === o.s.TOP_GAME ? b.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : v.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == h
        ? (0, r.jsxs)(D.Z.Overlay, {
              className: a()(B.card, s),
              ref: I,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(B.content, d),
                          children: [
                              (0, r.jsx)(m.E, {
                                  image: f,
                                  size: m.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(w.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: _
                                          })
                                      }),
                                      (0, r.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: T()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, r.jsxs)(D.Z.Overlay, {
              className: a()(B.card, s),
              ref: I,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(B.content, d),
                          children: [
                              (0, r.jsx)(m.E, {
                                  image: f,
                                  onClick: (e) => {
                                      E({ action: 'PRESS_IMAGE' }), h(e);
                                  },
                                  size: m.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsx)(l.Clickable, {
                                          className: B.clickable,
                                          onClick: (e) => {
                                              E({ action: 'PRESS_TEXT' }), h(e);
                                          },
                                          children: (0, r.jsx)(w.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: _
                                          })
                                      }),
                                      (0, r.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: T()
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
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, L.z)(),
        u = { [B.fullSize]: o === k.y0.FULL_SIZE },
        { largeImage: d } = (0, p.rv)({ entry: n }),
        { url: f } = n.extra,
        { analyticsLocations: _ } = (0, c.ZP)(),
        h = (0, R.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: _
        }),
        E = (0, O.Z)({
            userId: t.id,
            onAction: h
        });
    return (0, r.jsxs)(D.Z.Overlay, {
        className: a()(B.card, s),
        ref: E,
        children: [
            i,
            (0, r.jsx)('div', {
                className: B.body,
                children: (0, r.jsxs)('div', {
                    className: a()(B.content, u),
                    children: [
                        (0, r.jsx)(m.E, {
                            aspectRatio: 'crunchyroll',
                            image: d,
                            size: m.J.SIZE_60,
                            onClick:
                                null == f || '' === f
                                    ? void 0
                                    : () => {
                                          h({ action: 'PRESS_IMAGE' }), (0, g.Y)(f);
                                      }
                        }),
                        (0, r.jsxs)('div', {
                            className: B.details,
                            children: [
                                null == f || '' === f
                                    ? (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      })
                                    : (0, r.jsxs)(l.Clickable, {
                                          className: B.clickable,
                                          onClick: () => {
                                              h({ action: 'PRESS_TEXT' }), (0, g.Y)(f);
                                          },
                                          children: [
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: n.extra.media_title
                                              }),
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: n.extra.media_subtitle
                                              })
                                          ]
                                      }),
                                (0, r.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: B.badges,
                                    children: S.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
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
    var t, n;
    let { user: i, entry: s, header: o, className: l } = e,
        { profileType: u } = (0, L.z)(),
        d = { [B.fullSize]: u === k.y0.FULL_SIZE },
        { largeImage: f } = (0, p.rv)({ entry: s }),
        { analyticsLocations: _ } = (0, c.ZP)(),
        h = (0, R.Z)({
            display: 'recent',
            user: i,
            entry: s,
            analyticsLocations: _
        }),
        E = (0, O.Z)({
            userId: i.id,
            onAction: h
        }),
        v = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    return null == v
        ? null
        : (0, r.jsxs)(D.Z.Overlay, {
              className: a()(B.card, l),
              ref: E,
              children: [
                  o,
                  (0, r.jsx)('div', {
                      className: B.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(B.content, d),
                          children: [
                              (0, r.jsx)(m.E, {
                                  image: f,
                                  size: m.J.SIZE_60,
                                  onClick: () => {
                                      h({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, g.o)(U.Hw.ALBUM, v.external_parent_id);
                                  }
                              }),
                              (0, r.jsxs)('div', {
                                  className: B.details,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          children: [
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'heading-sm/semibold',
                                                  text: v.title,
                                                  onClick: () => {
                                                      h({ action: 'OPEN_SPOTIFY_TRACK' }), (0, g.o)(U.Hw.TRACK, v.external_id);
                                                  }
                                              }),
                                              (0, r.jsx)(w.Z, {
                                                  variant: 'text-xs/normal',
                                                  text: null === (n = v.artists[0]) || void 0 === n ? void 0 : n.name,
                                                  onClick: () => {
                                                      var e;
                                                      h({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, g.o)(U.Hw.ARTIST, null === (e = v.artists[0]) || void 0 === e ? void 0 : e.external_id);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, r.jsx)(y.Gk, {
                                          location: y.Gt.USER_PROFILE,
                                          className: B.badges,
                                          children: I.te.map((e, t) => (0, r.jsx)(e, { entry: s }, 'entry-'.concat(t)))
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          });
}
function V(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, L.z)(),
        l = { [B.fullSize]: o === k.y0.FULL_SIZE },
        { largeImage: u } = (0, p.rv)({ entry: n }),
        { analyticsLocations: d } = (0, c.ZP)(),
        f = (0, R.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: d
        }),
        _ = (0, O.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, r.jsxs)(D.Z.Overlay, {
        className: a()(B.card, s),
        ref: _,
        children: [
            i,
            (0, r.jsx)('div', {
                className: B.body,
                children: (0, r.jsxs)('div', {
                    className: a()(B.content, l),
                    children: [
                        (0, r.jsx)(m.E, {
                            image: u,
                            size: m.J.SIZE_60,
                            onClick: () => {
                                f({ action: 'OPEN_SPOTIFY_ALBUM' }), (0, g.o)(U.Hw.ALBUM, n.extra.media.external_parent_id);
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: B.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(w.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title,
                                            onClick: () => {
                                                f({ action: 'OPEN_SPOTIFY_TRACK' }), (0, g.o)(U.Hw.TRACK, n.extra.media.external_id);
                                            }
                                        }),
                                        (0, r.jsx)(w.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name,
                                            onClick: () => {
                                                f({ action: 'OPEN_SPOTIFY_ARTIST' }), (0, g.o)(U.Hw.ARTIST, n.extra.artist.external_id);
                                            }
                                        })
                                    ]
                                }),
                                (0, r.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: B.badges,
                                    children: T.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function j(e) {
    let { user: t, entry: n, header: i, onClose: s, className: o } = e,
        { profileType: l } = (0, L.z)(),
        u = { [B.fullSize]: l === k.y0.FULL_SIZE },
        { largeImage: h } = (0, p.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { analyticsLocations: g } = (0, c.ZP)(),
        v = (0, R.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: g
        }),
        I = (0, O.Z)({
            userId: t.id,
            onAction: v
        }),
        T = () => {
            null == s || s(), (0, d.__)(f._b.TEXT, _.I.NORMAL, { applicationId: n.extra.application_id });
        };
    return (0, r.jsxs)(D.Z.Overlay, {
        className: a()(B.card, o),
        ref: I,
        children: [
            i,
            (0, r.jsx)('div', {
                className: B.body,
                children: (0, r.jsxs)('div', {
                    className: a()(B.content, u),
                    children: [
                        (0, r.jsx)(m.E, {
                            image: h,
                            size: m.J.SIZE_60,
                            onClick: () => {
                                v({ action: 'PRESS_IMAGE' }), T();
                            }
                        }),
                        (0, r.jsxs)('div', {
                            className: B.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(w.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: n.extra.activity_name,
                                        onClick: () => {
                                            v({ action: 'PRESS_TEXT' }), T();
                                        }
                                    })
                                }),
                                (0, r.jsx)(y.Gk, {
                                    location: y.Gt.USER_PROFILE,
                                    className: B.badges,
                                    children: E.j.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function H(e) {
    let { user: t, entry: n, className: i, onClose: a, hideContextMenu: o = !1 } = e,
        { analyticsLocations: l } = (0, c.ZP)(u.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, h.LP)(n)
        ? (0, r.jsx)(c.Gt, {
              value: l,
              children: (0, r.jsx)(P.Z, {
                  user: t,
                  onClose: a,
                  children: (e) => {
                      let { onAutoDismiss: l } = e,
                          u = {
                              user: t,
                              className: i,
                              onClose: a,
                              header: (0, r.jsx)(x.Z, {
                                  contextMenu: o
                                      ? null
                                      : (0, r.jsx)(M.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: a,
                                            onRequestOpen: l
                                        })
                              })
                          };
                      return (0, s.EQ)(n)
                          .when(h.dX, (e) =>
                              (0, r.jsx)(G, {
                                  entry: e,
                                  ...u
                              })
                          )
                          .when(h.y0, (e) =>
                              (0, r.jsx)(Z, {
                                  entry: e,
                                  ...u
                              })
                          )
                          .when(h.dU, (e) =>
                              (0, r.jsx)(F, {
                                  entry: e,
                                  ...u
                              })
                          )
                          .when(h.KF, (e) =>
                              (0, r.jsx)(V, {
                                  entry: e,
                                  ...u
                              })
                          )
                          .when(h.Mq, (e) =>
                              (0, r.jsx)(j, {
                                  entry: e,
                                  ...u
                              })
                          )
                          .exhaustive();
                  }
              })
          })
        : null;
}
