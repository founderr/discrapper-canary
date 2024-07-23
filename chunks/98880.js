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
  f = t(792125),
  N = t(541099),
  C = t(783097),
  v = t(695676),
  I = t(176412),
  x = t(226026),
  P = t(753972),
  T = t(981631),
  S = t(217702),
  L = t(231338),
  g = t(689938),
  R = t(126152),
  M = t(413097);

function y(e) {
  let {
application: n,
look: t = 'large_banner',
isPartner: i,
onClick: l,
bannerImageStyle: r,
enableVideoBanner: s = !0,
children: o,
sectionName: c,
resultsPosition: u,
tracksImpression: d = !0,
disabled: m = !1
  } = e;
  return (0, a.jsx)(j, {
application: n,
onClick: l,
sectionName: c,
resultsPosition: u,
disabled: m,
tracksImpression: d,
containerStyle: 'icon' === t ? R.iconCard : void 0,
children: 'icon' === t ? (0, a.jsx)(O, {
  application: n
}) : (0, a.jsx)(b, {
  application: n,
  look: t,
  isPartner: i,
  bannerImageStyle: r,
  enableVideoBanner: s,
  children: o
})
  });
}

function j(e) {
  let {
application: n,
onClick: t,
children: i,
sectionName: l,
resultsPosition: s,
tracksImpression: u,
disabled: d,
containerStyle: m
  } = e, {
name: p,
description: _
  } = r.useMemo(() => (0, C.sl)(n, {
fakeAppIconURL: M
  }), [n]), {
trackItemImpressionRef: E
  } = (0, x.Z)({
applicationId: n.id,
sectionName: l,
sectionPosition: s
  }), A = r.useMemo(() => {
let e = d ? R.containerDisabled : R.container;
return o()(e, m);
  }, [
m,
d
  ]);
  return d ? (0, a.jsx)('div', {
ref: u ? E : void 0,
className: A,
children: i
  }) : (0, a.jsx)(c.Clickable, {
innerRef: u ? E : void 0,
className: A,
onClick: t,
'aria-label': g.Z.Messages.APP_LAUNCHER_APP_CARD_ARIA_LABEL.format({
  applicationName: p,
  applicationDescription: _
}),
children: i
  });
}

function O(e) {
  let {
application: n
  } = e, {
iconURL: t
  } = r.useMemo(() => (0, C.sl)(n, {
fakeAppIconURL: M
  }), [n]);
  return (0, a.jsx)(P.Z, {
src: t,
className: R.iconCard,
'aria-hidden': !0,
rendersPlaceholder: !0
  });
}

function b(e) {
  let {
application: n,
look: t,
isPartner: i,
bannerImageStyle: l,
enableVideoBanner: s,
children: u
  } = e, {
iconURL: d,
name: m,
description: p
  } = r.useMemo(() => (0, C.sl)(n, {
fakeAppIconURL: M
  }), [n]), _ = (0, E.ZP)(d, ''), [A, h] = r.useState(!1), N = r.useCallback(() => {
!0 === s && h(!0);
  }, [s]), v = r.useCallback(() => h(!1), []);
  return (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)('div', {
    onMouseEnter: N,
    onFocus: N,
    onMouseLeave: v,
    onBlur: v,
    className: o()(R.bannerImageContainer, {
      [R.mediumBanner]: 'medium_banner' === t,
      [R.largeBanner]: 'large_banner' === t
    }),
    children: [
      (0, a.jsx)('span', {
        className: l,
        children: (0, a.jsx)(Z, {
          application: n,
          fallbackColor: _,
          showVideo: A
        })
      }),
      i && (0, a.jsx)('div', {
        className: R.partnerLabelWrapper,
        children: (0, a.jsx)(c.Text, {
          className: (0, f.Q)(L.BR.DARK),
          variant: 'text-sm/medium',
          color: 'text-normal',
          children: g.Z.Messages.APP_DIRECTORY_PARTNER
        })
      }),
      'large_banner' === t || 'medium_banner' === t ? (0, a.jsx)('div', {
        className: R.bannerImageChildContainer,
        children: u
      }) : null
    ]
  }),
  (0, a.jsxs)('div', {
    className: R.appDetailsContainer,
    children: [
      (0, a.jsx)(P.Z, {
        src: d,
        className: R.icon,
        'aria-hidden': !0,
        rendersPlaceholder: !0
      }),
      (0, a.jsxs)('div', {
        className: R.appDetails,
        children: [
          (0, a.jsx)(c.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            lineClamp: 1,
            children: m
          }),
          (0, a.jsx)(c.Text, {
            variant: 'text-sm/normal',
            color: 'text-secondary',
            lineClamp: 1,
            children: p
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
  if ((0, C.BQ)(n)) {
if ((0, C.ye)({
    application: n
  }))
  return (0, a.jsx)(H, {
    application: n,
    showVideo: i
  });
if (null != n.bot)
  return (0, a.jsx)(U, {
    bot: n.bot,
    fallbackColor: t
  });
  }
  return (0, a.jsx)(D, {
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
  }), l = r.useMemo(() => {
let e = (0, C.yJ)(n);
return null != e && null != e.activity_preview_video_asset_id ? (0, u.Z)(n.id, e.activity_preview_video_asset_id) : null;
  }, [n]), [s, c] = r.useState(t);
  return r.useEffect(() => {
t && c(!0);
  }, [t]), (0, a.jsxs)(a.Fragment, {
children: [
  null != l && s ? (0, a.jsx)('div', {
    className: R.activityVideoContainer,
    children: (0, a.jsx)('div', {
      className: o()(R.activityVideo, {
        [R.videoFadeOut]: !t
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
  return null == i ? (0, a.jsx)(D, {
fallbackColor: t
  }) : (0, a.jsx)('img', {
src: i,
alt: '',
className: R.bannerImage
  });
}

function D(e) {
  let {
fallbackColor: n
  } = e;
  return (0, a.jsx)('div', {
className: R.bannerImage,
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
  source: N.Z.entrypoint(),
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

function k(e) {
  let n = B(e);
  return (0, a.jsx)(y, {
...e,
onClick: n
  });
}

function w(e) {
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
}) : (0, a.jsx)(k, {
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
bannerImageStyle: R.darkenBannerImage,
enableVideoBanner: !1,
disabled: !0,
children: (0, a.jsx)('div', {
  className: R.voiceLauncherAppCardContainer,
  children: (0, a.jsx)(c.Button, {
    className: R.voiceLauncherAppCardButton,
    type: 'submit',
    size: c.Button.Sizes.LARGE,
    color: m,
    disabled: !1,
    onClick: o,
    'aria-label': g.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: p,
      applicationName: t.name
    }),
    children: p
  })
})
  });
}
(l = i || (i = {})).ICON = 'icon', l.NO_BANNER = 'no_banner', l.MEDIUM_BANNER = 'medium_banner', l.LARGE_BANNER = 'large_banner';