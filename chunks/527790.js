n.d(t, {
  Z: function() {
return L;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(876215),
  o = n(481060),
  l = n(26033),
  u = n(91140),
  c = n(551228),
  d = n(278399),
  _ = n(555672),
  E = n(335326),
  f = n(297781),
  h = n(797342),
  p = n(810568),
  m = n(168524),
  I = n(502762),
  T = n(652853),
  g = n(60241),
  S = n(373826),
  A = n(228168),
  N = n(689938),
  v = n(692184);
let {
  getAssetImage: O
} = n(81063);

function R(e) {
  let {
user: t,
entry: n,
className: i,
onClose: l
  } = e, {
profileType: c
  } = (0, T.z)(), d = {
[v.fullSize]: c === A.y0.FULL_SIZE
  }, {
iconUrl: E,
appName: O
  } = (0, h.n)(n), R = (0, m.Z)({
location: 'UserProfileRecentActivityCard',
applicationId: n.extra.application_id,
source: p.m1.UserProfile,
sourceUserId: t.id,
trackEntryPointImpression: !0
  }), C = () => n.content_type === s.s.TOP_GAME ? _.Hs.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t))) : u.W.map((e, t) => (0, r.jsx)(e, {
entry: n
  }, 'entry-'.concat(t)));
  return null == R ? (0, r.jsxs)(I.Z.Overlay, {
className: a()(v.card, i),
children: [
  c === A.y0.BITE_SIZE && (0, r.jsx)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: v.header,
    children: N.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED
  }),
  (0, r.jsx)('div', {
    className: v.body,
    children: (0, r.jsxs)('div', {
      className: a()(v.content, d),
      children: [
        (0, r.jsx)(g.Z, {
          src: E
        }),
        (0, r.jsxs)('div', {
          className: v.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(S.Z, {
                variant: 'heading-sm/semibold',
                text: O
              })
            }),
            (0, r.jsx)(f.Gk, {
              location: f.Gt.USER_PROFILE,
              className: v.badges,
              children: C()
            })
          ]
        })
      ]
    })
  })
]
  }) : (0, r.jsxs)(I.Z.Overlay, {
className: a()(v.card, i),
children: [
  c === A.y0.BITE_SIZE && (0, r.jsx)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: v.header,
    children: N.Z.Messages.USER_ACTIVITY_RECENTLY_PLAYED
  }),
  (0, r.jsx)('div', {
    className: v.body,
    children: (0, r.jsxs)('div', {
      className: a()(v.content, d),
      children: [
        (0, r.jsx)(g.Z, {
          src: E
        }),
        (0, r.jsxs)('div', {
          className: v.details,
          children: [
            (0, r.jsx)(o.Clickable, {
              className: v.clickable,
              onClick: () => {
                R(), null == l || l();
              },
              children: (0, r.jsx)(S.Z, {
                variant: 'heading-sm/semibold',
                text: O
              })
            }),
            (0, r.jsx)(f.Gk, {
              location: f.Gt.USER_PROFILE,
              className: v.badges,
              children: C()
            })
          ]
        })
      ]
    })
  })
]
  });
}

function C(e) {
  let {
entry: t,
className: n
  } = e, {
profileType: i
  } = (0, T.z)(), s = {
[v.fullSize]: i === A.y0.FULL_SIZE
  };
  return (0, r.jsxs)(I.Z.Overlay, {
className: a()(v.card, n),
children: [
  i === A.y0.BITE_SIZE && (0, r.jsx)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: v.header,
    children: N.Z.Messages.USER_ACTIVITY_RECENTLY_WATCHED
  }),
  (0, r.jsx)('div', {
    className: v.body,
    children: (0, r.jsxs)('div', {
      className: a()(v.content, s),
      children: [
        (0, r.jsx)(g.Z, {
          src: e => O(t.extra.application_id, t.extra.media_assets_large_image, e)
        }),
        (0, r.jsxs)('div', {
          className: v.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(S.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media_title
                }),
                (0, r.jsx)(S.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.media_subtitle
                })
              ]
            }),
            (0, r.jsx)(f.Gk, {
              location: f.Gt.USER_PROFILE,
              className: v.badges,
              children: E.td.map((e, n) => (0, r.jsx)(e, {
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

function y(e) {
  var t, n, i;
  let {
entry: s,
className: l
  } = e, {
profileType: u
  } = (0, T.z)(), d = {
[v.fullSize]: u === A.y0.FULL_SIZE
  }, _ = null === (t = s.extra.entries[0]) || void 0 === t ? void 0 : t.media;
  return null == _ ? null : (0, r.jsxs)(I.Z.Overlay, {
className: a()(v.card, l),
children: [
  u === A.y0.BITE_SIZE && (0, r.jsx)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: v.header,
    children: N.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO
  }),
  (0, r.jsx)('div', {
    className: v.body,
    children: (0, r.jsxs)('div', {
      className: a()(v.content, d),
      children: [
        (0, r.jsx)(g.Z, {
          src: _.image_url
        }),
        (0, r.jsxs)('div', {
          className: v.details,
          children: [
            (0, r.jsx)('div', {
              children: (0, r.jsx)(S.Z, {
                variant: 'heading-sm/semibold',
                text: null !== (i = null === (n = _.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : _.title
              })
            }),
            (0, r.jsx)(f.Gk, {
              location: f.Gt.USER_PROFILE,
              className: v.badges,
              children: c.te.map((e, t) => (0, r.jsx)(e, {
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

function D(e) {
  let {
entry: t,
className: n
  } = e, {
profileType: i
  } = (0, T.z)(), s = {
[v.fullSize]: i === A.y0.FULL_SIZE
  };
  return (0, r.jsxs)(I.Z.Overlay, {
className: a()(v.card, n),
children: [
  i === A.y0.BITE_SIZE && (0, r.jsx)(o.Heading, {
    variant: 'text-xs/medium',
    color: 'header-primary',
    className: v.header,
    children: N.Z.Messages.USER_ACTIVITY_RECENTLY_LISTENED_TO
  }),
  (0, r.jsx)('div', {
    className: v.body,
    children: (0, r.jsxs)('div', {
      className: a()(v.content, s),
      children: [
        (0, r.jsx)(g.Z, {
          src: t.extra.media.image_url
        }),
        (0, r.jsxs)('div', {
          className: v.details,
          children: [
            (0, r.jsxs)('div', {
              children: [
                (0, r.jsx)(S.Z, {
                  variant: 'heading-sm/semibold',
                  text: t.extra.media.title
                }),
                (0, r.jsx)(S.Z, {
                  variant: 'text-xs/normal',
                  text: t.extra.artist.name
                })
              ]
            }),
            (0, r.jsx)(f.Gk, {
              location: f.Gt.USER_PROFILE,
              className: v.badges,
              children: d.Ho.map((e, n) => (0, r.jsx)(e, {
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

function L(e) {
  let {
user: t,
entry: n,
className: i,
onClose: a
  } = e;
  return (0, l.dX)(n) ? (0, r.jsx)(R, {
user: t,
entry: n,
className: i,
onClose: a
  }) : (0, l.r5)(n) ? (0, r.jsx)(C, {
entry: n,
className: i
  }) : (0, l.kx)(n) ? (0, r.jsx)(y, {
entry: n,
className: i
  }) : n.content_type === s.s.TOP_ARTIST ? (0, r.jsx)(D, {
entry: n,
className: i
  }) : null;
}