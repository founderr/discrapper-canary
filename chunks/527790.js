n.d(i, {
  Z: function() {
return A;
  }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  o = n(876215),
  a = n(481060),
  r = n(26033),
  d = n(91140),
  c = n(551228),
  u = n(278399),
  I = n(555672),
  _ = n(335326),
  f = n(297781),
  m = n(797342),
  E = n(810568),
  x = n(168524),
  v = n(502762),
  Z = n(60241),
  h = n(373826),
  S = n(228168),
  p = n(692184);
let {
  getAssetImage: g
} = n(81063);

function j(e) {
  let {
user: i,
entry: n,
className: l,
onClose: r
  } = e, {
iconUrl: c,
appName: u
  } = (0, m.n)(n), _ = (0, x.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: n.extra.application_id,
source: E.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  }), g = () => n.content_type === o.s.TOP_GAME ? I.Hs.map((e, i) => (0, s.jsx)(e, {
entry: n
  }, 'entry-'.concat(i))) : d.W.map((e, i) => (0, s.jsx)(e, {
entry: n
  }, 'entry-'.concat(i)));
  return null == _ ? (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, l),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: c
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(h.Z, {
              variant: 'heading-sm/semibold',
              text: u
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: g()
          })
        ]
      })
    ]
  })
})
  }) : (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, l),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: c
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)(a.Clickable, {
            className: p.clickable,
            onClick: () => {
              _(), null == r || r();
            },
            children: (0, s.jsx)(h.Z, {
              variant: 'heading-sm/semibold',
              text: u
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: g()
          })
        ]
      })
    ]
  })
})
  });
}

function T(e) {
  let {
entry: i,
className: n
  } = e;
  return (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, n),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: e => g(i.extra.application_id, i.extra.media_assets_large_image, e)
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(h.Z, {
                variant: 'heading-sm/semibold',
                text: i.extra.media_title
              }),
              (0, s.jsx)(h.Z, {
                variant: 'text-xs/normal',
                text: i.extra.media_subtitle
              })
            ]
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _.td.map((e, n) => (0, s.jsx)(e, {
              entry: i
            }, 'entry-'.concat(n)))
          })
        ]
      })
    ]
  })
})
  });
}

function N(e) {
  var i, n, l;
  let {
entry: o,
className: a
  } = e, r = null === (i = o.extra.entries[0]) || void 0 === i ? void 0 : i.media;
  return null == r ? null : (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, a),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: r.image_url
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(h.Z, {
              variant: 'heading-sm/semibold',
              text: null !== (l = null === (n = r.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : r.title
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: c.te.map((e, i) => (0, s.jsx)(e, {
              entry: o
            }, 'entry-'.concat(i)))
          })
        ]
      })
    ]
  })
})
  });
}

function C(e) {
  let {
entry: i,
className: n
  } = e;
  return (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, n),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: i.extra.media.image_url
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(h.Z, {
                variant: 'heading-sm/semibold',
                text: i.extra.media.title
              }),
              (0, s.jsx)(h.Z, {
                variant: 'text-xs/normal',
                text: i.extra.artist.name
              })
            ]
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: u.Ho.map((e, n) => (0, s.jsx)(e, {
              entry: i
            }, 'entry-'.concat(n)))
          })
        ]
      })
    ]
  })
})
  });
}

function A(e) {
  let {
user: i,
entry: n,
className: l,
onClose: t
  } = e;
  return (0, r.dX)(n) ? (0, s.jsx)(j, {
user: i,
entry: n,
className: l,
onClose: t
  }) : (0, r.r5)(n) ? (0, s.jsx)(T, {
entry: n,
className: l
  }) : (0, r.kx)(n) ? (0, s.jsx)(N, {
entry: n,
className: l
  }) : n.content_type === o.s.TOP_ARTIST ? (0, s.jsx)(C, {
entry: n,
className: l
  }) : null;
}