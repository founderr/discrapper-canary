t.d(n, {
  U4: function() {
return i;
  },
  cG: function() {
return B;
  },
  kA: function() {
return k;
  },
  qR: function() {
return w;
  }
}), t(47120), t(411104);
var i, a, l = t(735250),
  o = t(470079),
  r = t(120356),
  s = t.n(r),
  c = t(481060),
  u = t(361213),
  d = t(542094),
  m = t(778569),
  p = t(182906),
  _ = t(367907),
  C = t(220082),
  f = t(810090),
  h = t(768581),
  A = t(792125),
  E = t(541099),
  N = t(783097),
  v = t(695676),
  x = t(176412),
  I = t(226026),
  g = t(753972),
  P = t(981631),
  S = t(217702),
  L = t(231338),
  R = t(689938),
  T = t(126152),
  b = t(413097);

function M(e) {
  let {
application: n,
look: t = 'large_banner',
isPartner: i,
onClick: a,
bannerImageStyle: o,
enableVideoBanner: r = !0,
children: s,
sectionName: c,
resultsPosition: u,
tracksImpression: d = !0,
disabled: m = !1
  } = e;
  return (0, l.jsx)(y, {
application: n,
onClick: a,
sectionName: c,
resultsPosition: u,
disabled: m,
tracksImpression: d,
look: t,
children: 'icon' === t ? (0, l.jsx)(j, {
  application: n
}) : (0, l.jsx)(O, {
  application: n,
  look: t,
  isPartner: i,
  bannerImageStyle: o,
  enableVideoBanner: r,
  children: s
})
  });
}

function y(e) {
  let {
application: n,
onClick: t,
children: i,
sectionName: a,
resultsPosition: r,
tracksImpression: u,
disabled: d,
containerStyle: m,
look: p
  } = e, {
name: _,
description: C
  } = o.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]), {
trackItemImpressionRef: f
  } = (0, I.Z)({
applicationId: n.id,
sectionName: a,
sectionPosition: r
  }), h = o.useMemo(() => {
let e = d ? T.containerDisabled : T.container;
return s()(e, {
  [T.containerBorderRadius]: 'row' !== p,
  [T.rowContainer]: 'row' === p,
  [T.iconCard]: 'icon' === p
}, m);
  }, [
m,
d,
p
  ]);
  return d ? (0, l.jsx)('div', {
ref: u ? f : void 0,
className: h,
children: i
  }) : (0, l.jsx)(c.Clickable, {
innerRef: u ? f : void 0,
className: h,
onClick: t,
'aria-label': R.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: _,
  applicationDescription: C
}),
children: (0, l.jsx)(c.FocusBlock, {
  children: i
})
  });
}

function j(e) {
  let {
application: n
  } = e, {
name: t,
iconURL: i
  } = o.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]);
  return (0, l.jsx)(c.Tooltip, {
tooltipContentClassName: T.tooltipContent,
text: t,
children: e => {
  let {
    ...n
  } = e;
  return (0, l.jsx)('div', {
    ...n,
    children: (0, l.jsx)(g.Z, {
      src: i,
      className: T.iconCard,
      'aria-hidden': !0,
      rendersPlaceholder: !0
    })
  });
}
  });
}

function O(e) {
  let {
application: n,
look: t,
isPartner: i,
bannerImageStyle: a,
enableVideoBanner: r,
children: u
  } = e, {
iconURL: d,
name: m,
description: p
  } = o.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]), _ = o.useMemo(() => null == p ? null : (0, x.ae)(p), [p]), f = (0, C.ZP)(d, ''), [h, E] = o.useState(!1), v = o.useCallback(() => {
!0 === r && E(!0);
  }, [r]), I = o.useCallback(() => E(!1), []);
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsxs)('div', {
    onMouseEnter: v,
    onFocus: v,
    onMouseLeave: I,
    onBlur: I,
    className: s()(T.bannerImageContainer, {
      [T.mediumBanner]: 'medium_banner' === t,
      [T.largeBanner]: 'large_banner' === t
    }),
    children: [
      (0, l.jsx)('span', {
        className: a,
        children: (0, l.jsx)(Z, {
          application: n,
          fallbackColor: f,
          showVideo: h
        })
      }),
      i && (0, l.jsx)('div', {
        className: T.partnerLabelWrapper,
        children: (0, l.jsx)(c.Text, {
          className: (0, A.Q)(L.BR.DARK),
          variant: 'text-sm/medium',
          color: 'text-normal',
          children: R.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }),
      'large_banner' === t || 'medium_banner' === t ? (0, l.jsx)('div', {
        className: T.bannerImageChildContainer,
        children: u
      }) : null
    ]
  }),
  (0, l.jsxs)('div', {
    className: s()(T.appDetailsContainer, {
      [T.appDetailsRowContainer]: 'row' === t
    }),
    children: [
      (0, l.jsx)(g.Z, {
        src: d,
        className: s()(T.icon, {
          [T.rowIcon]: 'row' === t
        }),
        'aria-hidden': !0,
        rendersPlaceholder: !0
      }),
      (0, l.jsxs)('div', {
        className: T.appDetails,
        children: [
          (0, l.jsx)(c.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            lineClamp: 1,
            children: m
          }),
          (0, l.jsx)(c.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            lineClamp: 1,
            children: _
          })
        ]
      }),
      'row' === t ? (0, l.jsx)('div', {
        className: T.rowDivider
      }) : null
    ]
  })
]
  });
}

function Z(e) {
  let {
application: n,
fallbackColor: t,
showVideo: i
  } = e;
  if ((0, N.BQ)(n)) {
if ((0, N.ye)({
    application: n
  }))
  return (0, l.jsx)(H, {
    application: n,
    showVideo: i
  });
if (null != n.bot)
  return (0, l.jsx)(U, {
    bot: n.bot,
    fallbackColor: t
  });
  }
  return (0, l.jsx)(D, {
fallbackColor: t
  });
}

function H(e) {
  let {
application: n,
showVideo: t
  } = e, i = (0, m.Z)({
applicationId: n.id,
size: 600,
names: ['embedded_cover']
  }), a = o.useMemo(() => {
let e = (0, N.yJ)(n);
return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
  }, [n]), [r, c] = o.useState(t);
  return o.useEffect(() => {
t && c(!0);
  }, [t]), (0, l.jsxs)(l.Fragment, {
children: [
  null != a && r ? (0, l.jsx)('div', {
    className: T.activityVideoContainer,
    children: (0, l.jsx)('div', {
      className: s()(T.activityVideo, {
        [T.videoFadeOut]: !t
      }),
      onAnimationEnd: () => t ? null : c(!1),
      children: (0, l.jsx)(f.Z, {
        src: a,
        mediaLayoutType: S.hV.MOSAIC,
        loop: !0,
        autoPlay: !0,
        muted: !0
      })
    })
  }) : null,
  (0, l.jsx)(p.Z, {
    imageBackground: i,
    applicationName: n.name,
    imageClassName: T.bannerImage,
    imageNotFoundClassName: T.bannerImage
  })
]
  });
}

function U(e) {
  let {
bot: n,
fallbackColor: t
  } = e, i = (0, h.aN)({
id: n.id,
banner: n.banner,
canAnimate: !1,
size: 600
  });
  return null == i ? (0, l.jsx)(D, {
fallbackColor: t
  }) : (0, l.jsx)('img', {
src: i,
alt: '',
className: T.bannerImage
  });
}

function D(e) {
  let {
fallbackColor: n
  } = e;
  return (0, l.jsx)('div', {
className: T.bannerImage,
style: {
  backgroundColor: n
}
  });
}

function B(e) {
  let {
application: n,
sectionName: t,
resultsPosition: i,
query: a,
installOnDemand: l,
location: r
  } = e, {
pushHistory: s
  } = (0, v.hH)();
  return o.useCallback(e => {
e.stopPropagation(), (0, _.yw)(P.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
  application_id: n.id,
  section_name: t,
  search_results_position: i,
  source: E.Z.entrypoint(),
  location: r,
  query: a
}), s({
  type: v.gc.APPLICATION,
  application: n,
  installOnDemand: l,
  sectionName: t
});
  }, [
n,
l,
r,
s,
a,
i,
t
  ]);
}

function k(e) {
  let n = B(e);
  return (0, l.jsx)(M, {
...e,
onClick: n
  });
}

function w(e) {
  let {
channel: n,
application: t,
location: i,
sectionName: a,
isOneClickCTA: o,
...r
  } = e;
  if (!(0, N.BQ)(t))
throw Error('PerformActivityActionAppCard was passed the Built-in App, which is not supported.');
  let {
onActivityItemSelected: s,
activityAction: u,
buttonColor: m,
buttonText: p
  } = (0, x.P7)({
channel: n,
application: t,
location: i,
sectionName: a
  });
  if (u === d.JS.START)
return o ? (0, l.jsx)(M, {
  ...r,
  sectionName: a,
  application: t,
  onClick: s,
  enableVideoBanner: !0
}) : (0, l.jsx)(k, {
  ...r,
  sectionName: a,
  application: t,
  location: i
});
  return (0, l.jsx)(M, {
...r,
sectionName: a,
application: t,
onClick: e => {
  e.stopPropagation();
},
bannerImageStyle: T.darkenBannerImage,
enableVideoBanner: !1,
disabled: !0,
children: (0, l.jsx)('div', {
  className: T.voiceLauncherAppCardContainer,
  children: (0, l.jsx)(c.Button, {
    className: T.voiceLauncherAppCardButton,
    type: 'submit',
    size: c.Button.Sizes.LARGE,
    color: m,
    disabled: !1,
    onClick: s,
    'aria-label': R.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: p,
      applicationName: t.name
    }),
    children: p
  })
})
  });
}
(a = i || (i = {})).ICON = 'icon', a.ROW = 'row', a.NO_BANNER = 'no_banner', a.MEDIUM_BANNER = 'medium_banner', a.LARGE_BANNER = 'large_banner';