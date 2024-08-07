n.d(t, {
  Z: function() {
return x;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(876215),
  o = n(481060),
  l = n(100527),
  u = n(906732),
  c = n(26033),
  d = n(91140),
  _ = n(551228),
  E = n(278399),
  f = n(555672),
  h = n(335326),
  p = n(297781),
  m = n(797342),
  I = n(810568),
  T = n(168524),
  g = n(502762),
  S = n(652853),
  A = n(194811),
  N = n(60241),
  v = n(373826),
  O = n(582123),
  R = n(622058),
  C = n(290274),
  y = n(228168),
  D = n(689938),
  L = n(692184);
let {
  getAssetImage: b
} = n(81063);

function M(e) {
  let {
user: t,
entry: n,
header: i,
className: l,
onClose: u
  } = e, {
profileType: c
  } = (0, S.z)(), _ = {
[L.fullSize]: c === y.y0.FULL_SIZE
  }, {
iconUrl: E,
appName: h
  } = (0, m.n)(n), A = (0, T.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: n.extra.application_id,
source: I.m1.UserProfile,
sourceUserId: t.id,
trackEntryPointImpression: !0
  }), O = () => n.content_type === s.s.TOP_GAME ? f.Hs.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t))) : d.W.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t)));
  return null == A ? (0, r.jsxs)(g.Z.Overlay, {
className: a()(L.card, l),
children: [
  i,
  (0, r.jsx)('div', {
    className: L.body,
    children: (0, r.jsxs)('div', {
      className: a()(L.content, _),
      children: [
        (0, r.jsx)(N.ZP, {
          image: {
            src: E,
            alt: h
          }
        }),
        (0, r.jsxs)('div', {
          className: L.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: h
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: L.badges,
              children: O()
            })
          ]
        })
      ]
    })
  })
]
  }) : (0, r.jsxs)(g.Z.Overlay, {
className: a()(L.card, l),
children: [
  i,
  (0, r.jsx)('div', {
    className: L.body,
    children: (0, r.jsxs)('div', {
      className: a()(L.content, _),
      children: [
        (0, r.jsx)(N.ZP, {
          image: {
            src: E,
            alt: h
          },
          onClick: A
        }),
        (0, r.jsxs)('div', {
          className: L.details,
          children: [
            (0, r.jsx)(o.Clickable, {
              className: L.clickable,
              onClick: () => {
                A(), null == u || u();
              },
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: h
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: L.badges,
              children: O()
            })
          ]
        })
      ]
    })
  })
]
  });
}

function P(e) {
  let {
entry: t,
header: n,
className: i
  } = e, {
profileType: s
  } = (0, S.z)(), o = {
[L.fullSize]: s === y.y0.FULL_SIZE
  };
  return (0, r.jsxs)(g.Z.Overlay, {
className: a()(L.card, i),
children: [
  n,
  (0, r.jsx)('div', {
    className: L.body,
    children: (0, r.jsxs)('div', {
      className: a()(L.content, o),
      children: [
        (0, r.jsx)(N.ZP, {
          image: {
            src: b(t.extra.application_id, t.extra.media_assets_large_image, N.WQ),
            alt: t.extra.media_title
          }
        }),
        (0, r.jsxs)('div', {
          className: L.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(v.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media_title
                }),
                (0, r.jsx)(v.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.media_subtitle
                })
              ]
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: L.badges,
              children: h.td.map((e, n) => (0, r.jsx)(e, {
                entry: t
              }, 'entry-'.concat(n)))
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
  var t, n, i;
  let {
entry: s,
header: o,
className: l
  } = e, {
profileType: u
  } = (0, S.z)(), c = {
[L.fullSize]: u === y.y0.FULL_SIZE
  }, d = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
  if (null == d)
return null;
  let E = null !== (i = null === (n = d.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : d.title;
  return (0, r.jsxs)(g.Z.Overlay, {
className: a()(L.card, l),
children: [
  o,
  (0, r.jsx)('div', {
    className: L.body,
    children: (0, r.jsxs)('div', {
      className: a()(L.content, c),
      children: [
        (0, r.jsx)(N.ZP, {
          image: {
            src: d.image_url,
            alt: E
          }
        }),
        (0, r.jsxs)('div', {
          className: L.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(v.Z, {
                variant: 'heading-sm/semibold',
                text: E
              })
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: L.badges,
              children: _.te.map((e, t) => (0, r.jsx)(e, {
                entry: s
              }, 'entry-'.concat(t)))
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
  let {
entry: t,
header: n,
className: i
  } = e, {
profileType: s
  } = (0, S.z)(), o = {
[L.fullSize]: s === y.y0.FULL_SIZE
  };
  return (0, r.jsxs)(g.Z.Overlay, {
className: a()(L.card, i),
children: [
  n,
  (0, r.jsx)('div', {
    className: L.body,
    children: (0, r.jsxs)('div', {
      className: a()(L.content, o),
      children: [
        (0, r.jsx)(N.ZP, {
          image: {
            src: t.extra.media.image_url,
            alt: t.extra.media.title
          }
        }),
        (0, r.jsxs)('div', {
          className: L.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(v.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media.title
                }),
                (0, r.jsx)(v.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.artist.name
                })
              ]
            }),
            (0, r.jsx)(p.Gk, {
              location: p.Gt.USER_PROFILE,
              className: L.badges,
              children: E.Ho.map((e, n) => (0, r.jsx)(e, {
                entry: t
              }, 'entry-'.concat(n)))
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
  let {
user: t,
entry: n,
className: i,
onClose: a,
hideContextMenu: s = !1
  } = e, {
analyticsLocations: o
  } = (0, u.ZP)(l.Z.USER_PROFILE_RECENT_ACTIVITY_CARD), {
profileType: d
  } = (0, S.z)();
  return (0, R.R)(n) ? (0, r.jsx)(u.Gt, {
value: o,
children: (0, r.jsx)(O.Z, {
  user: t,
  onClose: a,
  children: e => {
    let {
      onAutoDismiss: o
    } = e, l = e => (0, r.jsx)(A.Z, {
      text: d === y.y0.FULL_SIZE ? null : e,
      tags: s ? null : (0, r.jsx)(C.Z, {
        display: 'recent',
        entry: n,
        user: t,
        onClose: a,
        onRequestOpen: o
      })
    });
    return (0, c.dX)(n) ? (0, r.jsx)(M, {
      header: l(D.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED),
      user: t,
      entry: n,
      className: i
    }) : (0, c.y0)(n) ? (0, r.jsx)(P, {
      header: l(D.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED),
      user: t,
      entry: n,
      className: i
    }) : (0, c.dU)(n) ? (0, r.jsx)(U, {
      header: l(D.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
      user: t,
      entry: n,
      className: i
    }) : (0, c.KF)(n) ? (0, r.jsx)(w, {
      header: l(D.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO),
      user: t,
      entry: n,
      className: i
    }) : null;
  }
})
  }) : null;
}