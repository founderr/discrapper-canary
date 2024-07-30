t.d(n, {
  U4: function() {
return i;
  },
  cG: function() {
return k;
  },
  kA: function() {
return D;
  },
  qR: function() {
return w;
  }
}), t(47120), t(411104);
var i, a, l = t(735250),
  r = t(470079),
  o = t(120356),
  s = t.n(o),
  c = t(481060),
  u = t(361213),
  d = t(542094),
  m = t(778569),
  p = t(182906),
  _ = t(367907),
  f = t(220082),
  C = t(810090),
  h = t(768581),
  A = t(792125),
  E = t(541099),
  N = t(783097),
  v = t(695676),
  x = t(176412),
  I = t(226026),
  g = t(753972),
  P = t(981631),
  L = t(217702),
  S = t(231338),
  T = t(689938),
  R = t(126152),
  b = t(413097);

function M(e) {
  let {
application: n,
look: t = 'large_banner',
isPartner: i,
onClick: a,
bannerImageStyle: r,
enableVideoBanner: o = !0,
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
containerStyle: 'icon' === t ? R.iconCard : void 0,
children: 'icon' === t ? (0, l.jsx)(j, {
  application: n
}) : (0, l.jsx)(O, {
  application: n,
  look: t,
  isPartner: i,
  bannerImageStyle: r,
  enableVideoBanner: o,
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
resultsPosition: o,
tracksImpression: u,
disabled: d,
containerStyle: m
  } = e, {
name: p,
description: _
  } = r.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]), {
trackItemImpressionRef: f
  } = (0, I.Z)({
applicationId: n.id,
sectionName: a,
sectionPosition: o
  }), C = r.useMemo(() => {
let e = d ? R.containerDisabled : R.container;
return s()(e, m);
  }, [
m,
d
  ]);
  return d ? (0, l.jsx)('div', {
ref: u ? f : void 0,
className: C,
children: i
  }) : (0, l.jsx)(c.Clickable, {
innerRef: u ? f : void 0,
className: C,
onClick: t,
'aria-label': T.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: p,
  applicationDescription: _
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
  } = r.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]);
  return (0, l.jsx)(c.Tooltip, {
tooltipContentClassName: R.tooltipContent,
text: t,
children: e => {
  let {
    ...n
  } = e;
  return (0, l.jsx)('div', {
    ...n,
    children: (0, l.jsx)(g.Z, {
      src: i,
      className: R.iconCard,
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
enableVideoBanner: o,
children: u
  } = e, {
iconURL: d,
name: m,
description: p
  } = r.useMemo(() => (0, N.sl)(n, {
fakeAppIconURL: b
  }), [n]), _ = r.useMemo(() => null == p ? null : (0, x.ae)(p), [p]), C = (0, f.ZP)(d, ''), [h, E] = r.useState(!1), v = r.useCallback(() => {
!0 === o && E(!0);
  }, [o]), I = r.useCallback(() => E(!1), []);
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsxs)('div', {
    onMouseEnter: v,
    onFocus: v,
    onMouseLeave: I,
    onBlur: I,
    className: s()(R.bannerImageContainer, {
      [R.mediumBanner]: 'medium_banner' === t,
      [R.largeBanner]: 'large_banner' === t
    }),
    children: [
      (0, l.jsx)('span', {
        className: a,
        children: (0, l.jsx)(Z, {
          application: n,
          fallbackColor: C,
          showVideo: h
        })
      }),
      i && (0, l.jsx)('div', {
        className: R.partnerLabelWrapper,
        children: (0, l.jsx)(c.Text, {
          className: (0, A.Q)(S.BR.DARK),
          variant: 'text-sm/medium',
          color: 'text-normal',
          children: T.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }),
      'large_banner' === t || 'medium_banner' === t ? (0, l.jsx)('div', {
        className: R.bannerImageChildContainer,
        children: u
      }) : null
    ]
  }),
  (0, l.jsxs)('div', {
    className: R.appDetailsContainer,
    children: [
      (0, l.jsx)(g.Z, {
        src: d,
        className: R.icon,
        'aria-hidden': !0,
        rendersPlaceholder: !0
      }),
      (0, l.jsxs)('div', {
        className: R.appDetails,
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
      })
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
  return (0, l.jsx)(B, {
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
  }), a = r.useMemo(() => {
let e = (0, N.yJ)(n);
return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
  }, [n]), [o, c] = r.useState(t);
  return r.useEffect(() => {
t && c(!0);
  }, [t]), (0, l.jsxs)(l.Fragment, {
children: [
  null != a && o ? (0, l.jsx)('div', {
    className: R.activityVideoContainer,
    children: (0, l.jsx)('div', {
      className: s()(R.activityVideo, {
        [R.videoFadeOut]: !t
      }),
      onAnimationEnd: () => t ? null : c(!1),
      children: (0, l.jsx)(C.Z, {
        src: a,
        mediaLayoutType: L.hV.MOSAIC,
        loop: !0,
        autoPlay: !0,
        muted: !0
      })
    })
  }) : null,
  (0, l.jsx)(p.Z, {
    imageBackground: i,
    applicationName: n.name,
    imageClassName: R.bannerImage,
    imageNotFoundClassName: R.bannerImage
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
  return null == i ? (0, l.jsx)(B, {
fallbackColor: t
  }) : (0, l.jsx)('img', {
src: i,
alt: '',
className: R.bannerImage
  });
}

function B(e) {
  let {
fallbackColor: n
  } = e;
  return (0, l.jsx)('div', {
className: R.bannerImage,
style: {
  backgroundColor: n
}
  });
}

function k(e) {
  let {
application: n,
sectionName: t,
resultsPosition: i,
query: a,
installOnDemand: l,
location: o
  } = e, {
pushHistory: s
  } = (0, v.hH)();
  return r.useCallback(e => {
e.stopPropagation(), (0, _.yw)(P.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
  application_id: n.id,
  section_name: t,
  search_results_position: i,
  source: E.Z.entrypoint(),
  location: o,
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
o,
s,
a,
i,
t
  ]);
}

function D(e) {
  let n = k(e);
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
isOneClickCTA: r,
...o
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
return r ? (0, l.jsx)(M, {
  ...o,
  sectionName: a,
  application: t,
  onClick: s,
  enableVideoBanner: !0
}) : (0, l.jsx)(D, {
  ...o,
  sectionName: a,
  application: t,
  location: i
});
  return (0, l.jsx)(M, {
...o,
sectionName: a,
application: t,
onClick: e => {
  e.stopPropagation();
},
bannerImageStyle: R.darkenBannerImage,
enableVideoBanner: !1,
disabled: !0,
children: (0, l.jsx)('div', {
  className: R.voiceLauncherAppCardContainer,
  children: (0, l.jsx)(c.Button, {
    className: R.voiceLauncherAppCardButton,
    type: 'submit',
    size: c.Button.Sizes.LARGE,
    color: m,
    disabled: !1,
    onClick: s,
    'aria-label': T.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: p,
      applicationName: t.name
    }),
    children: p
  })
})
  });
}
(a = i || (i = {})).ICON = 'icon', a.NO_BANNER = 'no_banner', a.MEDIUM_BANNER = 'medium_banner', a.LARGE_BANNER = 'large_banner';