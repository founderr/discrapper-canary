n.d(t, {
    Z: function () {
        return B;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(876215),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(379357),
    _ = n(26033),
    E = n(358696),
    f = n(91140),
    h = n(551228),
    p = n(278399),
    m = n(555672),
    I = n(335326),
    T = n(297781),
    g = n(797342),
    S = n(810568),
    A = n(168524),
    v = n(960870),
    N = n(139793),
    O = n(579264),
    R = n(502762),
    C = n(652853),
    y = n(194811),
    b = n(373826),
    L = n(582123),
    D = n(290274),
    M = n(228168),
    P = n(689938),
    U = n(676411);
function w(e) {
    let { user: t, entry: n, header: r, className: a, onClose: u } = e,
        { profileType: _ } = (0, C.z)(),
        h = { [U.fullSize]: _ === M.y0.FULL_SIZE },
        { largeImage: p } = (0, d.rv)({
            entry: n,
            showCoverImage: !1
        }),
        { appName: I } = (0, g.n)(n),
        O = (0, A.Z)({
            location: 'UserProfileRecentActivityCard',
            applicationId: n.extra.application_id,
            source: S.m1.UserProfile,
            sourceUserId: t.id,
            trackEntryPointImpression: !0
        }),
        { analyticsLocations: y } = (0, c.ZP)(),
        L = (0, v.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: y
        }),
        D = (0, N.Z)({
            userId: t.id,
            onAction: L
        }),
        P = () => (n.content_type === s.s.TOP_GAME ? m.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t))) : f.W.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t))));
    return null == O
        ? (0, i.jsxs)(R.Z.Overlay, {
              className: o()(U.card, a),
              ref: D,
              children: [
                  r,
                  (0, i.jsx)('div', {
                      className: U.body,
                      children: (0, i.jsxs)('div', {
                          className: o()(U.content, h),
                          children: [
                              (0, i.jsx)(E.E, {
                                  image: p,
                                  size: E.J.SIZE_60
                              }),
                              (0, i.jsxs)('div', {
                                  className: U.details,
                                  children: [
                                      (0, i.jsx)('div', {
                                          children: (0, i.jsx)(b.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: I
                                          })
                                      }),
                                      (0, i.jsx)(T.Gk, {
                                          location: T.Gt.USER_PROFILE,
                                          className: U.badges,
                                          children: P()
                                      })
                                  ]
                              })
                          ]
                      })
                  })
              ]
          })
        : (0, i.jsxs)(R.Z.Overlay, {
              className: o()(U.card, a),
              ref: D,
              children: [
                  r,
                  (0, i.jsx)('div', {
                      className: U.body,
                      children: (0, i.jsxs)('div', {
                          className: o()(U.content, h),
                          children: [
                              (0, i.jsx)(E.E, {
                                  image: p,
                                  onClick: () => {
                                      L({ action: 'PRESS_GAME_IMAGE' }), O();
                                  },
                                  size: E.J.SIZE_60
                              }),
                              (0, i.jsxs)('div', {
                                  className: U.details,
                                  children: [
                                      (0, i.jsx)(l.Clickable, {
                                          className: U.clickable,
                                          onClick: () => {
                                              L({ action: 'OPEN_GAME_PROFILE' }), O(), null == u || u();
                                          },
                                          children: (0, i.jsx)(b.Z, {
                                              variant: 'heading-sm/semibold',
                                              text: I
                                          })
                                      }),
                                      (0, i.jsx)(T.Gk, {
                                          location: T.Gt.USER_PROFILE,
                                          className: U.badges,
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
function x(e) {
    let { user: t, entry: n, header: r, className: a } = e,
        { profileType: s } = (0, C.z)(),
        l = { [U.fullSize]: s === M.y0.FULL_SIZE },
        { largeImage: u } = (0, d.rv)({ entry: n }),
        { analyticsLocations: _ } = (0, c.ZP)(),
        f = (0, v.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: _
        }),
        h = (0, N.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, i.jsxs)(R.Z.Overlay, {
        className: o()(U.card, a),
        ref: h,
        children: [
            r,
            (0, i.jsx)('div', {
                className: U.body,
                children: (0, i.jsxs)('div', {
                    className: o()(U.content, l),
                    children: [
                        (0, i.jsx)(E.E, {
                            aspectRatio: 'crunchyroll',
                            image: u,
                            size: E.J.SIZE_60
                        }),
                        (0, i.jsxs)('div', {
                            className: U.details,
                            children: [
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media_title
                                        }),
                                        (0, i.jsx)(b.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.media_subtitle
                                        })
                                    ]
                                }),
                                (0, i.jsx)(T.Gk, {
                                    location: T.Gt.USER_PROFILE,
                                    className: U.badges,
                                    children: I.t.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t)))
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
    var t, n, r;
    let { user: a, entry: s, header: l, className: u } = e,
        { profileType: _ } = (0, C.z)(),
        f = { [U.fullSize]: _ === M.y0.FULL_SIZE },
        { largeImage: p } = (0, d.rv)({ entry: s }),
        { analyticsLocations: m } = (0, c.ZP)(),
        I = (0, v.Z)({
            display: 'recent',
            user: a,
            entry: s,
            analyticsLocations: m
        }),
        g = (0, N.Z)({
            userId: a.id,
            onAction: I
        }),
        S = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
    if (null == S) return null;
    let A = null !== (r = null === (n = S.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : S.title;
    return (0, i.jsxs)(R.Z.Overlay, {
        className: o()(U.card, u),
        ref: g,
        children: [
            l,
            (0, i.jsx)('div', {
                className: U.body,
                children: (0, i.jsxs)('div', {
                    className: o()(U.content, f),
                    children: [
                        (0, i.jsx)(E.E, {
                            image: p,
                            size: E.J.SIZE_60
                        }),
                        (0, i.jsxs)('div', {
                            className: U.details,
                            children: [
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(b.Z, {
                                        variant: 'heading-sm/semibold',
                                        text: A
                                    })
                                }),
                                (0, i.jsx)(T.Gk, {
                                    location: T.Gt.USER_PROFILE,
                                    className: U.badges,
                                    children: h.te.map((e, t) => (0, i.jsx)(e, { entry: s }, 'entry-'.concat(t)))
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
    let { user: t, entry: n, header: r, className: a } = e,
        { profileType: s } = (0, C.z)(),
        l = { [U.fullSize]: s === M.y0.FULL_SIZE },
        { largeImage: u } = (0, d.rv)({ entry: n }),
        { analyticsLocations: _ } = (0, c.ZP)(),
        f = (0, v.Z)({
            display: 'recent',
            user: t,
            entry: n,
            analyticsLocations: _
        }),
        h = (0, N.Z)({
            userId: t.id,
            onAction: f
        });
    return (0, i.jsxs)(R.Z.Overlay, {
        className: o()(U.card, a),
        ref: h,
        children: [
            r,
            (0, i.jsx)('div', {
                className: U.body,
                children: (0, i.jsxs)('div', {
                    className: o()(U.content, l),
                    children: [
                        (0, i.jsx)(E.E, {
                            image: u,
                            size: E.J.SIZE_60
                        }),
                        (0, i.jsxs)('div', {
                            className: U.details,
                            children: [
                                (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            variant: 'heading-sm/semibold',
                                            text: n.extra.media.title
                                        }),
                                        (0, i.jsx)(b.Z, {
                                            variant: 'text-xs/normal',
                                            text: n.extra.artist.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(T.Gk, {
                                    location: T.Gt.USER_PROFILE,
                                    className: U.badges,
                                    children: p.Ho.map((e, t) => (0, i.jsx)(e, { entry: n }, 'entry-'.concat(t)))
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
    let { user: t, entry: n, className: r, onClose: a, hideContextMenu: o = !1 } = e,
        { analyticsLocations: s } = (0, c.ZP)(u.Z.USER_PROFILE_RECENT_ACTIVITY_CARD),
        { profileType: l } = (0, C.z)();
    return (0, O.Z)(n)
        ? (0, i.jsx)(c.Gt, {
              value: s,
              children: (0, i.jsx)(L.Z, {
                  user: t,
                  onClose: a,
                  children: (e) => {
                      let { onAutoDismiss: s } = e,
                          u = (e) =>
                              (0, i.jsx)(y.Z, {
                                  text: l === M.y0.FULL_SIZE ? null : e,
                                  contextMenu: o
                                      ? null
                                      : (0, i.jsx)(D.Z, {
                                            display: 'recent',
                                            entry: n,
                                            user: t,
                                            onClose: a,
                                            onRequestOpen: s
                                        })
                              });
                      return (0, _.dX)(n)
                          ? (0, i.jsx)(w, {
                                header: u(P.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
                                user: t,
                                entry: n,
                                className: r
                            })
                          : (0, _.y0)(n)
                            ? (0, i.jsx)(x, {
                                  header: u(P.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
                                  user: t,
                                  entry: n,
                                  className: r
                              })
                            : (0, _.dU)(n)
                              ? (0, i.jsx)(G, {
                                    header: u(P.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                    user: t,
                                    entry: n,
                                    className: r
                                })
                              : (0, _.KF)(n)
                                ? (0, i.jsx)(k, {
                                      header: u(P.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
                                      user: t,
                                      entry: n,
                                      className: r
                                  })
                                : null;
                  }
              })
          })
        : null;
}
