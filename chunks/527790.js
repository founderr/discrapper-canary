n.d(t, {
    Z: function () {
        return G;
    }
}),
    n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(876215),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(379357),
    d = n(26033),
    _ = n(358696),
    E = n(91140),
    f = n(551228),
    h = n(278399),
    p = n(555672),
    I = n(335326),
    m = n(297781),
    T = n(797342),
    g = n(810568),
    S = n(168524),
    A = n(502762),
    N = n(652853),
    O = n(194811),
    R = n(373826),
    v = n(582123),
    C = n(622058),
    y = n(290274),
    D = n(318134),
    L = n(228168),
    b = n(689938),
    M = n(139665);
function P(e) {
    let { user: t, entry: n, header: i, className: l, onClose: d } = e,
        { profileType: f } = (0, N.z)(),
        h = { [M.fullSize]: f === L.y0.FULL_SIZE },
        { largeImage: I } = (0, c.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: O } = (0, T.n)(n),
        v = (0, S.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: g.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: C } = (0, u.ZP)(),
        { onAction: y, trackViewRef: b } = (0, D.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: C
        }),
        P = () => (n.content_type === s.s.TOP_GAME ? p.Hs.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))) : E.W.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == v
        ? (0, r.jsxs)(A.Z.Overlay, {
              className: a()(M.card, l),
              ref: b,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: M.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(M.content, h),
                          children: [
                              (0, r.jsx)(_.E, {
                                  image: I,
                                  size: _.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, r.jsx)('div', {
                                          children: (0, r.jsx)(R.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: O
                                          })
                                      }),
                                      (0, r.jsx)(m.Gk, {
                                          location: m.Gt.USER_PROFILE,
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
        : (0, r.jsxs)(A.Z.Overlay, {
              className: a()(M.card, l),
              ref: b,
              children: [
                  i,
                  (0, r.jsx)('div', {
                      className: M.body,
                      children: (0, r.jsxs)('div', {
                          className: a()(M.content, h),
                          children: [
                              (0, r.jsx)(_.E, {
                                  image: I,
                                  onClick: () => {
                                      y({ action: 'PRESS_GAME_IMAGE' }), v();
                                  },
                                  size: _.J.SIZE_60
                              }),
                              (0, r.jsxs)('div', {
                                  className: M.details,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: M.clickable,
                                          onClick: () => {
                                              y({ action: 'OPEN_GAME_PROFILE' }), v(), null == d || d();
                                          },
                                          children: (0, r.jsx)(R.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: O
                                          })
                                      }),
                                      (0, r.jsx)(m.Gk, {
                                          location: m.Gt.USER_PROFILE,
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
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, N.z)(),
        l = { [M.fullSize]: o === L.y0.FULL_SIZE },
        { largeImage: d } = (0, c.rv)({ entry: n }),
        { analyticsLocations: E } = (0, u.ZP)(),
        { trackViewRef: f } = (0, D.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        });
    return (0, r.jsxs)(A.Z.Overlay, {
        className: a()(M.card, s),
        ref: f,
        children: [
            i,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, l),
                    children: [
                        (0, r.jsx)(_.E, {
                            aspectRatio: 'crunchyroll',
                            image: d,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(R.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media_title
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.media_subtitle
                                        })
                                    ]
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: I.t.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function w(e) {
    var t, n, i;
    let { user: s, entry: o, header: l, className: d } = e,
        { profileType: E } = (0, N.z)(),
        h = { [M.fullSize]: E === L.y0.FULL_SIZE },
        { largeImage: p } = (0, c.rv)({ entry: o }),
        { analyticsLocations: I } = (0, u.ZP)(),
        { trackViewRef: T } = (0, D.Z)({
            display: 'recent',
            user: s,
            entry: o,
            analyticsLocations: I
        }),
        g = null === (t = o.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    if (null == g) return null;
    let S = null !== (i = null === (n = g.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : g.title;
    return (0, r.jsxs)(A.Z.Overlay, {
        className: a()(M.card, d),
        ref: T,
        children: [
            l,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, h),
                    children: [
                        (0, r.jsx)(_.E, {
                            image: p,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsx)('div', {
                                    children: (0, r.jsx)(R.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: S
                                    })
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: f.te.map((e, t) => (0, r.jsx)(e, { entry: o }, 'entry-'.concat(t)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function x(e) {
    let { user: t, entry: n, header: i, className: s } = e,
        { profileType: o } = (0, N.z)(),
        l = { [M.fullSize]: o === L.y0.FULL_SIZE },
        { largeImage: d } = (0, c.rv)({ entry: n }),
        { analyticsLocations: E } = (0, u.ZP)(),
        { trackViewRef: f } = (0, D.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: E
        });
    return (0, r.jsxs)(A.Z.Overlay, {
        className: a()(M.card, s),
        ref: f,
        children: [
            i,
            (0, r.jsx)('div', {
                className: M.body,
                children: (0, r.jsxs)('div', {
                    className: a()(M.content, l),
                    children: [
                        (0, r.jsx)(_.E, {
                            image: d,
                            size: _.J.SIZE_60
                        }),
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsxs)('div', {
                                    children: [
                                        (0, r.jsx)(R.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title
                                        }),
                                        (0, r.jsx)(R.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name
                                        })
                                    ]
                                }),
                                (0, r.jsx)(m.Gk, {
                                    location: m.Gt.USER_PROFILE,
                                    className: M.badges,
                                    children: h.Ho.map((e, t) => (0, r.jsx)(e, { entry: n }, 'entry-'.concat(t)))
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
    let { user: t, entry: n, className: i, onClose: a, hideContextMenu: s = !1 } = e,
        { analyticsLocations: o } = (0, u.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: c } = (0, N.z)();
    return (0, C.R)(n)
        ? (0, r.jsx)(u.Gt, {
              value: o,
              children: (0, r.jsx)(v.Z, {
                  user: t,
                  onClose: a,
                  children: (e) => {
                      let { onAutoDismiss: o } = e,
                          l = (e) =>
                              (0, r.jsx)(O.Z, {
                                  text: c === L.y0.FULL_SIZE ? null : e,
                                  tags: s
                                      ? null
                                      : (0, r.jsx)(y.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: a,
                                            onRequestOpen: o
                                        })
                              });
                      return (0, d.dX)(n)
                          ? (0, r.jsx)(P, {
                                header: l(b.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                                user: t,
                                entry: n,
                                className: i
                            })
                          : (0, d.y0)(n)
                            ? (0, r.jsx)(U, {
                                  header: l(b.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                                  user: t,
                                  entry: n,
                                  className: i
                              })
                            : (0, d.dU)(n)
                              ? (0, r.jsx)(w, {
                                    header: l(b.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                    user: t,
                                    entry: n,
                                    className: i
                                })
                              : (0, d.KF)(n)
                                ? (0, r.jsx)(x, {
                                      header: l(b.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                      user: t,
                                      entry: n,
                                      className: i
                                  })
                                : null;
                  }
              })
          })
        : null;
}
