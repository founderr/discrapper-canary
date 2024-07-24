i.d(s, {
  Z: function() {
return A;
  }
}), i(47120);
var n = i(735250);
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
  Z = i(502762),
  S = i(373826),
  h = i(228168),
  p = i(692184);
let {
  getAssetImage: j
} = i(81063);

function T(e) {
  let {
user: s,
entry: i,
onClose: l
  } = e, {
iconUrl: r,
appName: c
  } = (0, E.n)(i), u = (0, v.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: i.extra.application_id,
source: x.m1.UserProfile,
sourceUserId: s.id,
trackEntryPointImpression: !0
  }), _ = () => i.content_type === o.s.TOP_GAME ? I.Hs.map((e, s) => (0, n.jsx)(e, {
entry: i
  }, 'entry-'.concat(s))) : d.W.map((e, s) => (0, n.jsx)(e, {
entry: i
  }, 'entry-'.concat(s)));
  return null == u ? (0, n.jsx)(Z.Z.Overlay, {
className: p.card,
children: (0, n.jsx)('div', {
  className: p.body,
  children: (0, n.jsxs)('div', {
    className: t()(p.content, h.y0.FULL_SIZE),
    children: [
      (0, n.jsx)(m.f, {
        src: r,
        size: 64
      }),
      (0, n.jsxs)('div', {
        className: p.details,
        children: [
          (0, n.jsx)(S.Z, {
            variant: 'heading-sm/semibold',
            text: c
          }),
          (0, n.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _()
          })
        ]
      })
    ]
  })
})
  }) : (0, n.jsx)(Z.Z.Overlay, {
className: p.card,
children: (0, n.jsx)('div', {
  className: p.body,
  children: (0, n.jsxs)('div', {
    className: t()(p.content, h.y0.FULL_SIZE),
    children: [
      (0, n.jsx)(m.f, {
        src: r,
        size: 64
      }),
      (0, n.jsxs)('div', {
        className: p.details,
        children: [
          (0, n.jsx)(a.Clickable, {
            className: p.clickable,
            onClick: () => {
              u(), null == l || l();
            },
            children: (0, n.jsx)(S.Z, {
              variant: 'heading-sm/semibold',
              text: c
            })
          }),
          (0, n.jsx)(f.Gk, {
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

function g(e) {
  let {
entry: s
  } = e;
  return (0, n.jsx)(Z.Z.Overlay, {
className: p.card,
children: (0, n.jsx)('div', {
  className: p.body,
  children: (0, n.jsxs)('div', {
    className: t()(p.content, h.y0.FULL_SIZE),
    children: [
      (0, n.jsx)(m.f, {
        src: j(s.extra.application_id, s.extra.media_assets_large_image, 86),
        size: 86
      }),
      (0, n.jsxs)('div', {
        className: p.details,
        children: [
          (0, n.jsx)(S.Z, {
            variant: 'heading-sm/semibold',
            text: s.extra.media_title
          }),
          (0, n.jsx)('div', {
            className: p.subdetails,
            children: (0, n.jsx)(S.Z, {
              variant: 'text-xs/normal',
              text: s.extra.media_subtitle
            })
          }),
          (0, n.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: _.td.map((e, i) => (0, n.jsx)(e, {
              entry: s
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
  var s, i, l;
  let {
entry: o
  } = e, a = null === (s = o.extra.entries[0]) || void 0 === s ? void 0 : s.media;
  return null == a ? null : (0, n.jsx)(Z.Z.Overlay, {
className: p.card,
children: (0, n.jsx)('div', {
  className: p.body,
  children: (0, n.jsxs)('div', {
    className: t()(p.content, h.y0.FULL_SIZE),
    children: [
      (0, n.jsx)(m.f, {
        src: a.image_url,
        size: 64
      }),
      (0, n.jsxs)('div', {
        className: p.details,
        children: [
          (0, n.jsx)(S.Z, {
            variant: 'heading-sm/semibold',
            text: null !== (l = null === (i = a.artists[0]) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : a.title
          }),
          (0, n.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: c.te.map((e, s) => (0, n.jsx)(e, {
              entry: o
            }, 'entry-'.concat(s)))
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
entry: s
  } = e;
  return (0, n.jsx)(Z.Z.Overlay, {
className: p.card,
children: (0, n.jsx)('div', {
  className: p.body,
  children: (0, n.jsxs)('div', {
    className: t()(p.content, h.y0.FULL_SIZE),
    children: [
      (0, n.jsx)(m.f, {
        src: s.extra.media.image_url,
        size: 64
      }),
      (0, n.jsxs)('div', {
        className: p.details,
        children: [
          (0, n.jsx)(S.Z, {
            variant: 'heading-sm/semibold',
            text: s.extra.media.title
          }),
          (0, n.jsx)('div', {
            className: p.subdetails,
            children: (0, n.jsx)(S.Z, {
              variant: 'text-xs/normal',
              text: s.extra.artist.name
            })
          }),
          (0, n.jsx)(f.Gk, {
            location: f.Gt.USER_PROFILE,
            className: p.badges,
            children: u.Ho.map((e, i) => (0, n.jsx)(e, {
              entry: s
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
user: s,
entry: i,
onClose: l
  } = e;
  return (0, r.dX)(i) ? (0, n.jsx)(T, {
user: s,
entry: i,
onClose: l
  }) : (0, r.r5)(i) ? (0, n.jsx)(g, {
entry: i
  }) : (0, r.kx)(i) ? (0, n.jsx)(N, {
entry: i
  }) : i.content_type === o.s.TOP_ARTIST ? (0, n.jsx)(C, {
entry: i
  }) : null;
}