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
  m = n(43205),
  E = n(797342),
  x = n(810568),
  v = n(168524),
  h = n(502762),
  S = n(373826),
  Z = n(228168),
  p = n(692184);
let {
  getAssetImage: g
} = n(81063);

function j(e) {
  let {
user: i,
entry: n,
onClose: l
  } = e, {
iconUrl: r,
appName: c
  } = (0, E.n)(n), u = (0, v.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: n.extra.application_id,
source: x.m1.UserProfile,
sourceUserId: i.id,
trackEntryPointImpression: !0
  }), _ = () => n.content_type === o.s.TOP_GAME ? I.Hs.map((e, i) => (0, s.jsx)(e, {
entry: n
  }, 'entry-'.concat(i))) : d.W.map((e, i) => (0, s.jsx)(e, {
entry: n
  }, 'entry-'.concat(i)));
  return null == u ? (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, Z.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: r,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(S.Z, {
              variant: 'heading-sm/semibold',
              text: c
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _()
          })
        ]
      })
    ]
  })
})
  }) : (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, Z.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: r,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)(a.Clickable, {
            className: p.clickable,
            onClick: () => {
              u(), null == l || l();
            },
            children: (0, s.jsx)(S.Z, {
              variant: 'heading-sm/semibold',
              text: c
            })
          }),
          (0, s.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _()
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
entry: i
  } = e;
  return (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, Z.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: g(i.extra.application_id, i.extra.media_assets_large_image, 86),
        size: 86
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(S.Z, {
                variant: 'heading-sm/semibold',
                text: i.extra.media_title
              }),
              (0, s.jsx)(S.Z, {
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
entry: o
  } = e, a = null === (i = o.extra.entries[0]) || void 0 === i ? void 0 : i.media;
  return null == a ? null : (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, Z.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: a.image_url,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(S.Z, {
              variant: 'heading-sm/semibold',
              text: null !== (l = null === (n = a.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : a.title
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
entry: i
  } = e;
  return (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, Z.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: i.extra.media.image_url,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(S.Z, {
                variant: 'heading-sm/semibold',
                text: i.extra.media.title
              }),
              (0, s.jsx)(S.Z, {
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
onClose: l
  } = e;
  return (0, r.dX)(n) ? (0, s.jsx)(j, {
user: i,
entry: n,
onClose: l
  }) : (0, r.r5)(n) ? (0, s.jsx)(T, {
entry: n
  }) : (0, r.kx)(n) ? (0, s.jsx)(N, {
entry: n
  }) : n.content_type === o.s.TOP_ARTIST ? (0, s.jsx)(C, {
entry: n
  }) : null;
}