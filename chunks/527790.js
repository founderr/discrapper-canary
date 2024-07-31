i.d(n, {
  Z: function() {
return A;
  }
}), i(47120);
var s = i(735250);
i(470079);
var l = i(120356),
  t = i.n(l),
  o = i(876215),
  a = i(481060),
  r = i(26033),
  d = i(91140),
  c = i(551228),
  u = i(278399),
  I = i(555672),
  _ = i(335326),
  f = i(297781),
  m = i(797342),
  E = i(810568),
  x = i(168524),
  v = i(502762),
  Z = i(60241),
  h = i(373826),
  S = i(228168),
  p = i(692184);
let {
  getAssetImage: g
} = i(81063);

function j(e) {
  let {
user: n,
entry: i,
className: l,
onClose: r
  } = e, {
iconUrl: c,
appName: u
  } = (0, m.n)(i), _ = (0, x.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: i.extra.application_id,
source: E.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  }), g = () => i.content_type === o.s.TOP_GAME ? I.Hs.map((e, n) => (0, s.jsx)(e, {
entry: i
  }, 'entry-'.concat(n))) : d.W.map((e, n) => (0, s.jsx)(e, {
entry: i
  }, 'entry-'.concat(n)));
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
entry: n,
className: i
  } = e;
  return (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, i),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: e => g(n.extra.application_id, n.extra.media_assets_large_image, e)
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(h.Z, {
                variant: 'heading-sm/semibold',
                text: n.extra.media_title
              }),
              (0, s.jsx)(h.Z, {
                variant: 'text-xs/normal',
                text: n.extra.media_subtitle
              })
            ]
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _.td.map((e, i) => (0, s.jsx)(e, {
              entry: n
            }, 'entry-'.concat(i)))
          })
        ]
      })
    ]
  })
})
  });
}

function N(e) {
  var n, i, l;
  let {
entry: o,
className: a
  } = e, r = null === (n = o.extra.entries[0]) || void 0 === n ? void 0 : n.media;
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
              text: null !== (l = null === (i = r.artists[0]) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : r.title
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: c.te.map((e, n) => (0, s.jsx)(e, {
              entry: o
            }, 'entry-'.concat(n)))
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
entry: n,
className: i
  } = e;
  return (0, s.jsx)(v.Z.Overlay, {
className: t()(p.card, i),
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, {
      [p.fullSize]: S.y0.FULL_SIZE
    }),
    children: [
      (0, s.jsx)(Z.Z, {
        src: n.extra.media.image_url
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(h.Z, {
                variant: 'heading-sm/semibold',
                text: n.extra.media.title
              }),
              (0, s.jsx)(h.Z, {
                variant: 'text-xs/normal',
                text: n.extra.artist.name
              })
            ]
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: u.Ho.map((e, i) => (0, s.jsx)(e, {
              entry: n
            }, 'entry-'.concat(i)))
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
user: n,
entry: i,
className: l,
onClose: t
  } = e;
  return (0, r.dX)(i) ? (0, s.jsx)(j, {
user: n,
entry: i,
className: l,
onClose: t
  }) : (0, r.r5)(i) ? (0, s.jsx)(T, {
entry: i,
className: l
  }) : (0, r.kx)(i) ? (0, s.jsx)(N, {
entry: i,
className: l
  }) : i.content_type === o.s.TOP_ARTIST ? (0, s.jsx)(C, {
entry: i,
className: l
  }) : null;
}