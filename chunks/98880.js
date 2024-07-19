t.d(n, {
  U4: function() {
return i;
  },
  cG: function() {
return H;
  },
  kA: function() {
return U;
  },
  qR: function() {
return D;
  }
}), t(47120), t(411104);
var i, l, a = t(735250),
  r = t(470079),
  s = t(120356),
  o = t.n(s),
  c = t(481060),
  u = t(361213),
  d = t(542094),
  m = t(778569),
  p = t(182906),
  _ = t(367907),
  E = t(220082),
  A = t(810090),
  h = t(768581),
  N = t(792125),
  f = t(541099),
  C = t(783097),
  v = t(695676),
  I = t(176412),
  P = t(226026),
  x = t(753972),
  T = t(981631),
  S = t(217702),
  L = t(231338),
  R = t(689938),
  g = t(126152),
  M = t(413097);

function y(e) {
  let {
application: n,
look: t = 'large_banner',
isPartner: i,
onClick: l,
bannerImageStyle: s,
enableVideoBanner: u = !0,
children: d,
sectionName: m,
resultsPosition: p,
tracksImpression: _ = !0
  } = e, {
iconURL: A,
name: h,
description: f
  } = r.useMemo(() => (0, C.sl)(n, {
fakeAppIconURL: M
  }), [n]), v = (0, E.ZP)(A, ''), {
trackItemImpressionRef: I
  } = (0, P.Z)({
applicationId: n.id,
sectionName: m,
sectionPosition: p
  }), [T, S] = r.useState(!1), y = r.useCallback(() => {
!0 === u && S(!0);
  }, [u]), j = r.useCallback(() => S(!1), []);
  return 'icon' === t ? (0, a.jsx)(c.Clickable, {
innerRef: _ ? e => I.current = e : void 0,
className: o()(g.container, g.iconCard),
onClick: l,
'aria-label': R.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: h,
  applicationDescription: f
}),
children: (0, a.jsx)(x.Z, {
  src: A,
  className: g.iconCard,
  'aria-hidden': !0,
  rendersPlaceholder: !0
})
  }) : (0, a.jsxs)(c.Clickable, {
innerRef: _ ? e => I.current = e : void 0,
className: g.container,
onClick: l,
'aria-label': R.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: h,
  applicationDescription: f
}),
children: [
  (0, a.jsxs)('div', {
    onMouseEnter: y,
    onFocus: y,
    onMouseLeave: j,
    onBlur: j,
    className: o()(g.bannerImageContainer, {
      [g.mediumBanner]: 'medium_banner' === t,
      [g.largeBanner]: 'large_banner' === t
    }),
    children: [
      (0, a.jsx)('span', {
        className: s,
        children: (0, a.jsx)(O, {
          application: n,
          fallbackColor: v,
          showVideo: T
        })
      }),
      i && (0, a.jsx)('div', {
        className: g.partnerLabelWrapper,
        children: (0, a.jsx)(c.Text, {
          className: (0, N.Q)(L.BR.DARK),
          variant: 'text-sm/medium',
          color: 'text-normal',
          children: R.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }),
      'large_banner' === t || 'medium_banner' === t ? (0, a.jsx)('div', {
        className: g.bannerImageChildContainer,
        children: d
      }) : null
    ]
  }),
  (0, a.jsxs)('div', {
    className: g.appDetailsContainer,
    children: [
      (0, a.jsx)(x.Z, {
        src: A,
        className: g.icon,
        'aria-hidden': !0,
        rendersPlaceholder: !0
      }),
      (0, a.jsxs)('div', {
        className: g.appDetails,
        children: [
          (0, a.jsx)(c.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            lineClamp: 1,
            children: h
          }),
          (0, a.jsx)(c.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            lineClamp: 1,
            children: f
          })
        ]
      })
    ]
  })
]
  });
}

function O(e) {
  let {
application: n,
fallbackColor: t,
showVideo: i
  } = e;
  if ((0, C.BQ)(n)) {
if ((0, C.ye)({
    application: n
  }))
  return (0, a.jsx)(j, {
    application: n,
    showVideo: i
  });
if (null != n.bot)
  return (0, a.jsx)(b, {
    bot: n.bot,
    fallbackColor: t
  });
  }
  return (0, a.jsx)(Z, {
fallbackColor: t
  });
}

function j(e) {
  let {
application: n,
showVideo: t
  } = e, i = (0, m.Z)({
applicationId: n.id,
size: 600,
names: ['embedded_cover']
  }), l = r.useMemo(() => {
let e = (0, C.yJ)(n);
return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
  }, [n]), [s, c] = r.useState(t);
  return r.useEffect(() => {
t && c(!0);
  }, [t]), (0, a.jsxs)(a.Fragment, {
children: [
  null != l && s ? (0, a.jsx)('div', {
    className: g.activityVideoContainer,
    children: (0, a.jsx)('div', {
      className: o()(g.activityVideo, {
        [g.videoFadeOut]: !t
      }),
      onAnimationEnd: () => t ? null : c(!1),
      children: (0, a.jsx)(A.Z, {
        src: l,
        mediaLayoutType: S.hV.MOSAIC,
        loop: !0,
        autoPlay: !0,
        muted: !0
      })
    })
  }) : null,
  (0, a.jsx)(p.Z, {
    imageBackground: i,
    applicationName: n.name,
    imageClassName: g.bannerImage,
    imageNotFoundClassName: g.bannerImage
  })
]
  });
}

function b(e) {
  let {
bot: n,
fallbackColor: t
  } = e, i = (0, h.aN)({
id: n.id,
banner: n.banner,
canAnimate: !1,
size: 600
  });
  return null == i ? (0, a.jsx)(Z, {
fallbackColor: t
  }) : (0, a.jsx)('img', {
src: i,
alt: '',
className: g.bannerImage
  });
}

function Z(e) {
  let {
fallbackColor: n
  } = e;
  return (0, a.jsx)('div', {
className: g.bannerImage,
style: {
  backgroundColor: n
}
  });
}

function H(e) {
  let {
application: n,
sectionName: t,
resultsPosition: i,
query: l,
installOnDemand: a,
location: s
  } = e, {
pushHistory: o
  } = (0, v.hH)();
  return r.useCallback(e => {
e.stopPropagation(), (0, _.yw)(T.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
  application_id: n.id,
  section_name: t,
  search_results_position: i,
  source: f.Z.entrypoint(),
  location: s,
  query: l
}), o({
  type: v.gc.APPLICATION,
  application: n,
  installOnDemand: a,
  sectionName: t
});
  }, [
n,
a,
s,
o,
l,
i,
t
  ]);
}

function U(e) {
  let n = H(e);
  return (0, a.jsx)(y, {
...e,
onClick: n
  });
}

function D(e) {
  let {
channel: n,
application: t,
location: i,
sectionName: l,
isOneClickCTA: r,
...s
  } = e;
  if (!(0, C.BQ)(t))
throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
  let {
onActivityItemSelected: o,
activityAction: u,
buttonColor: m,
buttonText: p
  } = (0, I.P7)(n, t, i, l);
  if (u === d.JS.START)
return r ? (0, a.jsx)(y, {
  ...s,
  sectionName: l,
  application: t,
  onClick: o,
  enableVideoBanner: !0
}) : (0, a.jsx)(U, {
  ...s,
  sectionName: l,
  application: t,
  location: i
});
  return (0, a.jsx)(y, {
...s,
sectionName: l,
application: t,
onClick: e => {
  e.stopPropagation();
},
bannerImageStyle: g.darkenBannerImage,
enableVideoBanner: !1,
children: (0, a.jsx)('div', {
  className: g.voiceLauncherAppCardContainer,
  children: (0, a.jsx)(c.Button, {
    className: g.voiceLauncherAppCardButton,
    type: 'submit',
    size: c.Button.Sizes.LARGE,
    color: m,
    disabled: !1,
    onClick: o,
    children: p
  })
})
  });
}
(l = i || (i = {})).ICON = 'icon', l.NO_BANNER = 'no_banner', l.MEDIUM_BANNER = 'medium_banner', l.LARGE_BANNER = 'large_banner';