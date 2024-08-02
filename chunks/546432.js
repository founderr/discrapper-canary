n.d(t, {
  Ld: function() {
return P;
  },
  OB: function() {
return S;
  },
  R_: function() {
return y;
  },
  aw: function() {
return R;
  },
  pU: function() {
return w;
  }
}), n(789020), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  s = n(481060),
  r = n(162609),
  u = n(370298),
  d = n(167080),
  c = n(163268),
  m = n(25610),
  h = n(124347),
  p = n(976853),
  E = n(592125),
  I = n(68588),
  _ = n(941797),
  C = n(626135),
  g = n(630388),
  x = n(956664),
  M = n(406432),
  f = n(169525),
  N = n(65838),
  T = n(217702),
  O = n(981631),
  A = n(689938),
  v = n(62233);
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  y = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  P = e => 'IMAGE' === e || 'VIDEO' === e;

function S(e, t) {
  return {
uniqueId: e.id,
originalItem: e,
type: R(e, t),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function R(e, t) {
  let {
filename: n,
width: i,
height: o
  } = e;
  if (t && null != i && i > 0 && null != o && o > 0) {
if ((0, M.CO)(n))
  return 'IMAGE';
if (!(0, M.NU)(n) || null == e.proxy_url)
  return 'INVALID';
else {
  var a;
  return (0, g.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, O.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != t && j.test(n) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, N.O)(n))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function w(e, t) {
  let {
contentType: n,
width: i,
height: o
  } = e;
  if (t && i > 0 && o > 0)
return (0, M.tw)(n) ? 'IMAGE' : (0, M.X2)(n) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let b = e => {
  let t, n, a, {
mimeType: r,
downloadURL: c,
onRemoveItem: m,
showDownload: h,
showImageAppPicker: p,
isVisualMediaType: E,
channelId: I
  } = e;
  h && (t = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(d.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: v.hoverButton,
  iconClassName: v.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: c,
  mimeType: r
})
  })), null != m && (n = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: l()(v.hoverButton, v.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(s.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [_, C] = o.useState(!1), g = o.useCallback(() => C(e => !e), []);
  return (p && (a = (0, i.jsx)(u.Z, {
toggleShowMenu: g,
showMenu: _,
channelId: I,
className: l()(v.hoverButton, {
  [v.selected]: _
}),
imageUrl: c,
mimeType: r
  })), null == n && null == t && null == a) ? null : (0, i.jsxs)('div', {
className: l()(v.hoverButtonGroup, {
  [v.nonMediaMosaicItem]: !E,
  [v.forceShowHover]: _
}),
children: [
  a,
  t,
  n
]
  });
};

function D(e) {
  let {
message: t,
item: n,
autoPlayGif: a,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: I,
renderImageComponent: g,
renderVideoComponent: M,
renderAudioComponent: f,
renderPlaintextFilePreview: N,
renderGenericFileComponent: j,
className: y,
imgContainerClassName: P,
imgClassName: S,
focusable: R,
hiddenSpoilers: w,
mediaLayoutType: D,
maxWidth: L,
maxHeight: F,
hasFooter: Z,
useFullWidth: H,
isVisualMediaType: V,
onVideoControlsShow: G,
onVideoControlsHide: k
  } = e, {
width: U,
height: B,
spoiler: W,
type: X,
contentType: q
  } = n, [z, J] = o.useState(!1), [$, Y] = o.useState(!1), Q = t.getChannelId(), K = E.Z.getChannel(Q), ee = (0, p.Z)(Q), et = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, en = o.useMemo(() => null != q && -1 !== q.indexOf('/') ? q.split('/') : [
'unknown',
'unknown'
  ], [q]), ei = 'IMAGE' === X && !h.u.test(n.downloadUrl), eo = !1;
  if (V) {
(null == U || null == B) && (eo = !0);
let e = (0, x.Dc)({
  width: null != U ? U : 0,
  height: null != B ? B : 0,
  maxWidth: T.mT,
  maxHeight: T.Jj
});
!H && (e * (null != U ? U : 0) < T.OF || e * (null != B ? B : 0) < T.OF) && (eo = !0);
  }
  let ea = o.useCallback(() => {
  d(n);
}, [
  n,
  d
]),
el = o.useCallback(e => {
  ei && !eo && (e && !$ ? (Y(!0), C.default.track(O.rMx.IMAGE_HOVERED, {
    guild_id: null == K ? void 0 : K.guild_id,
    channel_id: null == K ? void 0 : K.id,
    image_recommendations_shown: et
  })) : !e && $ && Y(!1));
}, [
  $,
  K,
  et,
  ei,
  eo
]),
es = o.useCallback(() => {
  if (D === T.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(X) || 'OTHER' === X;
    return eo ? null : !z && (0, i.jsx)(b, {
      mimeType: en,
      downloadURL: n.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && et,
      onRemoveItem: u ? ea : void 0,
      isVisualMediaType: V,
      channelId: Q
    });
  }
  return u && (0, i.jsx)(s.Clickable, {
    className: W ? v.spoilerRemoveMosaicItemButton : v.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(n),
    'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  D,
  u,
  W,
  X,
  V,
  z,
  n,
  en,
  ea,
  d,
  et,
  ee,
  Q,
  ei,
  eo
]);
  switch (X) {
case 'IMAGE':
  return (0, i.jsx)(_.h.Consumer, {
    children: e => (0, i.jsx)(g, {
      item: n,
      message: t,
      width: U,
      height: B,
      autoPlay: a && !w,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: es,
      containerClassName: y,
      className: P,
      imageClassName: S,
      shouldLink: R,
      hiddenSpoilers: w,
      responsive: !0,
      mediaLayoutType: D,
      maxWidth: L,
      maxHeight: F,
      useFullWidth: H,
      onMouseEnter: () => el(!0),
      onMouseLeave: () => el(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(M, {
    item: n,
    message: t,
    width: U,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: U,
    naturalHeight: B,
    className: l()(y, {
      [v.hasFooter]: Z
    }),
    playable: R,
    responsive: !0,
    mediaLayoutType: D,
    maxWidth: L,
    maxHeight: F,
    useFullWidth: H,
    mimeType: en,
    onControlsShow: G,
    onControlsHide: k,
    downloadable: !ee,
    mediaPlayerClassName: Z ? v.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(f, {
    item: n,
    message: t,
    className: y,
    playable: R,
    mimeType: en,
    renderAdjacentContent: es,
    onVolumeShow: () => J(!0),
    onVolumeHide: () => J(!1),
    onPlay: I
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(N, {
    item: n,
    message: t,
    className: y,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'OTHER':
  return (0, i.jsx)(j, {
    item: n,
    message: t,
    className: y,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'INVALID':
  return null;
  }
}
t.ZP = function(e) {
  var t;
  let {
className: n,
item: a,
message: s,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: d,
isSingleMosaicItem: h,
footer: p,
...E
  } = e, {
width: _,
height: C,
type: g
  } = a, M = r(a, (0, m.V)(s.channel_id, s.author.id)), [N, O] = o.useState(null != M), A = d === T.hV.MOSAIC, j = !A && (null != _ && _ < 200 || null != C && C < 50);
  let P = 'IMAGE' === (t = g) || 'VIDEO' === t,
S = y(g),
R = h && null != M && (0, c.bR)(_, C),
[w, b] = o.useState(!1),
L = () => {
  b(!0);
},
F = () => {
  b(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(D, {
    ...E,
    item: a,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: l()(n, v.mosaicItemContent, {
      [v.obscured]: N && !j,
      [v.hiddenSpoiler]: N && M === f.wk.SPOILER,
      [v.hiddenExplicit]: N && null != M && [
        f.wk.EXPLICIT_CONTENT,
        f.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(M),
      [v.hiddenMosaicItem]: N && e,
      [v.inline]: N && j
    }),
    focusable: !e,
    mediaLayoutType: d,
    hasFooter: null != p,
    useFullWidth: !!R || u,
    isVisualMediaType: S,
    onVideoControlsShow: L,
    onVideoControlsHide: F
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(v.mosaicItem, {
    [v.mosaicItemNoJustify]: P,
    [v.mosaicItemFullWidth]: u,
    [v.mosaicItemMediaMosaic]: A,
    [v.hideOverflow]: A && S,
    [v.mosaicItemWithFooter]: null != p
  }),
  children: [
    null != M ? (0, i.jsx)(I.Z, {
      type: I.Z.Types.ATTACHMENT,
      inline: j,
      reason: M,
      isSingleMosaicItem: h,
      obscured: N,
      containerStyles: function(e, t, n) {
        if (!t)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: t
          } = (0, x.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = t;
        }
        return {
          ...n !== T.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(a, P, d),
      obscurityControlClassName: l()({
        [v.obscureVideoSpacing]: 'VIDEO' === g && h && !N && w
      }),
      onToggleObscurity: () => O(e => !e),
      children: e => Z(e)
    }) : Z(),
    p
  ]
})
  });
};