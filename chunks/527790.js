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
  m = i(43205),
  E = i(797342),
  x = i(810568),
  v = i(168524),
  h = i(502762),
  Z = i(373826),
  S = i(228168),
  p = i(692184);
let {
  getAssetImage: g
} = i(81063);

function j(e) {
  let {
user: n,
entry: i,
onClose: l
  } = e, {
iconUrl: r,
appName: c
  } = (0, E.n)(i), u = (0, v.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: i.extra.application_id,
source: x.m1.UserProfile,
sourceUserId: n.id,
trackEntryPointImpression: !0
  }), _ = () => i.content_type === o.s.TOP_GAME ? I.Hs.map((e, n) => (0, s.jsx)(e, {
entry: i
  }, 'entry-'.concat(n))) : d.W.map((e, n) => (0, s.jsx)(e, {
entry: i
  }, 'entry-'.concat(n)));
  return null == u ? (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, S.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: r,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(Z.Z, {
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
    className: t()(p.content, S.y0.FULL_SIZE),
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
            children: (0, s.jsx)(Z.Z, {
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
entry: n
  } = e;
  return (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, S.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: g(n.extra.application_id, n.extra.media_assets_large_image, 86),
        size: 86
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(Z.Z, {
                variant: 'heading-sm/semibold',
                text: n.extra.media_title
              }),
              (0, s.jsx)(Z.Z, {
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
entry: o
  } = e, a = null === (n = o.extra.entries[0]) || void 0 === n ? void 0 : n.media;
  return null == a ? null : (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, S.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: a.image_url,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsx)('div', {
            children: (0, s.jsx)(Z.Z, {
              variant: 'heading-sm/semibold',
              text: null !== (l = null === (i = a.artists[0]) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : a.title
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
entry: n
  } = e;
  return (0, s.jsx)(h.Z.Overlay, {
className: p.card,
children: (0, s.jsx)('div', {
  className: p.body,
  children: (0, s.jsxs)('div', {
    className: t()(p.content, S.y0.FULL_SIZE),
    children: [
      (0, s.jsx)(m.f, {
        src: n.extra.media.image_url,
        size: 64
      }),
      (0, s.jsxs)('div', {
        className: p.details,
        children: [
          (0, s.jsxs)('div', {
            children: [
              (0, s.jsx)(Z.Z, {
                variant: 'heading-sm/semibold',
                text: n.extra.media.title
              }),
              (0, s.jsx)(Z.Z, {
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
onClose: l
  } = e;
  return (0, r.dX)(i) ? (0, s.jsx)(j, {
user: n,
entry: i,
onClose: l
  }) : (0, r.r5)(i) ? (0, s.jsx)(T, {
entry: i
  }) : (0, r.kx)(i) ? (0, s.jsx)(N, {
entry: i
  }) : i.content_type === o.s.TOP_ARTIST ? (0, s.jsx)(C, {
entry: i
  }) : null;
}