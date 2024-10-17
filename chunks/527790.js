t.d(s, {
    Z: function () {
        return Y;
    }
}),
    t(47120);
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(876215),
    l = t(481060),
    c = t(100527),
    d = t(906732),
    o = t(379357),
    E = t(26033),
    u = t(358696),
    x = t(91140),
    _ = t(551228),
    m = t(278399),
    h = t(555672),
    j = t(335326),
    I = t(297781),
    N = t(797342),
    Z = t(810568),
    R = t(168524),
    v = t(960870),
    S = t(139793),
    T = t(579264),
    f = t(502762),
    y = t(652853),
    C = t(194811),
    L = t(373826),
    p = t(582123),
    g = t(290274),
    O = t(228168),
    A = t(689938),
    P = t(676411);
function M(e) {
    let { user: s, entry: t, header: a, className: c, onClose: E } = e,
        { profileType: _ } = (0, y.z)(),
        m = { [P.fullSize]: _ === O.y0.FULL_SIZE },
        { largeImage: j } = (0, o.rv)({
            entry: t,
            showCoverImage: !1
        }),
        { appName: T } = (0, N.n)(t),
        C = (0, R.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: t.extra.application_id,
            source: Z.m1.UserProfile,
            sourceUserId: s.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: p } = (0, d.ZP)(),
        g = (0, v.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: p
        }),
        A = (0, S.Z)({
            userId: s.id,
            onAction: g
        }),
        M = () => (t.content_type === r.s.TOP_GAME ? h.Hs.map((e, s) => (0, n.jsx)(e, { entry: t }, 'entry-'.concat(s))) : x.W.map((e, s) => (0, n.jsx)(e, { entry: t }, 'entry-'.concat(s))));
    return null == C
        ? (0, n.jsxs)(f.Z.Overlay, {
              className: i()(P.card, c),
              ref: A,
              children: [
                  a,
                  (0, n.jsx)('div', {
                      className: P.body,
                      children: (0, n.jsxs)('div', {
                          className: i()(P.content, m),
                          children: [
                              (0, n.jsx)(u.E, {
                                  image: j,
                                  size: u.J.SIZE_60
                              }),
                              (0, n.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, n.jsx)('div', {
                                          children: (0, n.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: T
                                          })
                                      }),
                                      (0, n.jsx)(I.Gk, {
                                          location: I.Gt.USER_PROFILE,
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
        : (0, n.jsxs)(f.Z.Overlay, {
              className: i()(P.card, c),
              ref: A,
              children: [
                  a,
                  (0, n.jsx)('div', {
                      className: P.body,
                      children: (0, n.jsxs)('div', {
                          className: i()(P.content, m),
                          children: [
                              (0, n.jsx)(u.E, {
                                  image: j,
                                  onClick: () => {
                                      g({ action: 'PRESS_GAME_IMAGE' }), C();
                                  },
                                  size: u.J.SIZE_60
                              }),
                              (0, n.jsxs)('div', {
                                  className: P.details,
                                  children: [
                                      (0, n.jsx)(l.Clickable, {
                                          className: P.clickable,
                                          onClick: () => {
                                              g({ action: 'OPEN_GAME_PROFILE' }), C(), null == E || E();
                                          },
                                          children: (0, n.jsx)(L.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: T
                                          })
                                      }),
                                      (0, n.jsx)(I.Gk, {
                                          location: I.Gt.USER_PROFILE,
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
function b(e) {
    let { user: s, entry: t, header: a, className: r } = e,
        { profileType: l } = (0, y.z)(),
        c = { [P.fullSize]: l === O.y0.FULL_SIZE },
        { largeImage: E } = (0, o.rv)({ entry: t }),
        { analyticsLocations: x } = (0, d.ZP)(),
        _ = (0, v.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: x
        }),
        m = (0, S.Z)({
            userId: s.id,
            onAction: _
        });
    return (0, n.jsxs)(f.Z.Overlay, {
        className: i()(P.card, r),
        ref: m,
        children: [
            a,
            (0, n.jsx)('div', {
                className: P.body,
                children: (0, n.jsxs)('div', {
                    className: i()(P.content, c),
                    children: [
                        (0, n.jsx)(u.E, {
                            aspectRatio: 'crunchyroll',
                            image: E,
                            size: u.J.SIZE_60
                        }),
                        (0, n.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(L.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: t.extra.media_title
                                        }),
                                        (0, n.jsx)(L.Z, {
                                            variant: 'text-xs/normal',
                                            text: t.extra.media_subtitle
                                        })
                                    ]
                                }),
                                (0, n.jsx)(I.Gk, {
                                    location: I.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: j.t.map((e, s) => (0, n.jsx)(e, { entry: t }, 'entry-'.concat(s)))
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
    var s, t, a;
    let { user: r, entry: l, header: c, className: E } = e,
        { profileType: x } = (0, y.z)(),
        m = { [P.fullSize]: x === O.y0.FULL_SIZE },
        { largeImage: h } = (0, o.rv)({ entry: l }),
        { analyticsLocations: j } = (0, d.ZP)(),
        N = (0, v.Z)({
            display: 'recent',
            user: r,
            entry: l,
            analyticsLocations: j
        }),
        Z = (0, S.Z)({
            userId: r.id,
            onAction: N
        }),
        R = null === (s = l.extra.entries[0]) || void 0 === s ? void 0 : s.media;
    if (null == R) return null;
    let T = null !== (a = null === (t = R.artists[0]) || void 0 === t ? void 0 : t.name) && void 0 !== a ? a : R.title;
    return (0, n.jsxs)(f.Z.Overlay, {
        className: i()(P.card, E),
        ref: Z,
        children: [
            c,
            (0, n.jsx)('div', {
                className: P.body,
                children: (0, n.jsxs)('div', {
                    className: i()(P.content, m),
                    children: [
                        (0, n.jsx)(u.E, {
                            image: h,
                            size: u.J.SIZE_60
                        }),
                        (0, n.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, n.jsx)('div', {
                                    children: (0, n.jsx)(L.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: T
                                    })
                                }),
                                (0, n.jsx)(I.Gk, {
                                    location: I.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: _.te.map((e, s) => (0, n.jsx)(e, { entry: l }, 'entry-'.concat(s)))
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
    let { user: s, entry: t, header: a, className: r } = e,
        { profileType: l } = (0, y.z)(),
        c = { [P.fullSize]: l === O.y0.FULL_SIZE },
        { largeImage: E } = (0, o.rv)({ entry: t }),
        { analyticsLocations: x } = (0, d.ZP)(),
        _ = (0, v.Z)({
            display: 'recent',
            user: s,
            entry: t,
            analyticsLocations: x
        }),
        h = (0, S.Z)({
            userId: s.id,
            onAction: _
        });
    return (0, n.jsxs)(f.Z.Overlay, {
        className: i()(P.card, r),
        ref: h,
        children: [
            a,
            (0, n.jsx)('div', {
                className: P.body,
                children: (0, n.jsxs)('div', {
                    className: i()(P.content, c),
                    children: [
                        (0, n.jsx)(u.E, {
                            image: E,
                            size: u.J.SIZE_60
                        }),
                        (0, n.jsxs)('div', {
                            className: P.details,
                            children: [
                                (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(L.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: t.extra.media.title
                                        }),
                                        (0, n.jsx)(L.Z, {
                                            variant: 'text-xs/normal',
                                            text: t.extra.artist.name
                                        })
                                    ]
                                }),
                                (0, n.jsx)(I.Gk, {
                                    location: I.Gt.USER_PROFILE,
                                    className: P.badges,
                                    children: m.Ho.map((e, s) => (0, n.jsx)(e, { entry: t }, 'entry-'.concat(s)))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function Y(e) {
    let { user: s, entry: t, className: a, onClose: i, hideHeader: r = !1, hideContextMenu: l = !1 } = e,
        { analyticsLocations: o } = (0, d.ZP)(c.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, T.Z)(t)
        ? (0, n.jsx)(d.Gt, {
              value: o,
              children: (0, n.jsx)(p.Z, {
                  user: s,
                  onClose: i,
                  children: (e) => {
                      let { onAutoDismiss: c } = e,
                          d = (e) =>
                              (0, n.jsx)(C.Z, {
                                  text: r ? null : e,
                                  contextMenu: l
                                      ? null
                                      : (0, n.jsx)(g.Z, {
                                            display: 'recent',
                                            entry: t,
                                            user: s,
                                            onClose: i,
                                            onRequestOpen: c
                                        })
                              });
                      return (0, E.dX)(t)
                          ? (0, n.jsx)(M, {
                                header: d(A.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                                user: s,
                                entry: t,
                                className: a
                            })
                          : (0, E.y0)(t)
                            ? (0, n.jsx)(b, {
                                  header: d(A.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                                  user: s,
                                  entry: t,
                                  className: a
                              })
                            : (0, E.dU)(t)
                              ? (0, n.jsx)(k, {
                                    header: d(A.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                    user: s,
                                    entry: t,
                                    className: a
                                })
                              : (0, E.KF)(t)
                                ? (0, n.jsx)(U, {
                                      header: d(A.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                      user: s,
                                      entry: t,
                                      className: a
                                  })
                                : null;
                  }
              })
          })
        : null;
}
