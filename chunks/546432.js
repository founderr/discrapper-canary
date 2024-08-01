t.d(n, {
  Ld: function() {
return S;
  },
  OB: function() {
return y;
  },
  R_: function() {
return P;
  },
  aw: function() {
return R;
  },
  pU: function() {
return w;
  }
}), t(789020), t(47120);
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(481060),
  r = t(162609),
  u = t(370298),
  d = t(167080),
  c = t(163268),
  m = t(25610),
  h = t(124347),
  E = t(976853),
  I = t(592125),
  p = t(68588),
  C = t(941797),
  M = t(626135),
  _ = t(630388),
  N = t(956664),
  T = t(406432),
  x = t(169525),
  f = t(65838),
  g = t(217702),
  A = t(981631),
  O = t(689938),
  v = t(62233);
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  P = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  S = e => 'IMAGE' === e || 'VIDEO' === e;

function y(e, n) {
  return {
uniqueId: e.id,
originalItem: e,
type: R(e, n),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function R(e, n) {
  let {
filename: t,
width: i,
height: l
  } = e;
  if (n && null != i && i > 0 && null != l && l > 0) {
if ((0, T.CO)(t))
  return 'IMAGE';
if (!(0, T.NU)(t) || null == e.proxy_url)
  return 'INVALID';
else {
  var o;
  return (0, _.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, A.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != n && j.test(t) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, f.O)(t))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function w(e, n) {
  let {
contentType: t,
width: i,
height: l
  } = e;
  if (n && i > 0 && l > 0)
return (0, T.tw)(t) ? 'IMAGE' : (0, T.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let D = e => {
  let n, t, o, {
mimeType: r,
downloadURL: c,
onRemoveItem: m,
showDownload: h,
showImageAppPicker: E,
isVisualMediaType: I,
channelId: p
  } = e;
  h && (n = (0, i.jsx)(s.Tooltip, {
text: O.Z.Messages.DOWNLOAD,
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
  })), null != m && (t = (0, i.jsx)(s.Tooltip, {
text: O.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: a()(v.hoverButton, v.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': O.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(s.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [C, M] = l.useState(!1), _ = l.useCallback(() => M(e => !e), []);
  return (E && (o = (0, i.jsx)(u.Z, {
toggleShowMenu: _,
showMenu: C,
channelId: p,
className: a()(v.hoverButton, {
  [v.selected]: C
}),
imageUrl: c,
mimeType: r
  })), null == t && null == n && null == o) ? null : (0, i.jsxs)('div', {
className: a()(v.hoverButtonGroup, {
  [v.nonMediaMosaicItem]: !I,
  [v.forceShowHover]: C
}),
children: [
  o,
  n,
  t
]
  });
};

function L(e) {
  let {
message: n,
item: t,
autoPlayGif: o,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: p,
renderImageComponent: _,
renderVideoComponent: T,
renderAudioComponent: x,
renderPlaintextFilePreview: f,
renderGenericFileComponent: j,
className: P,
imgContainerClassName: S,
imgClassName: y,
focusable: R,
hiddenSpoilers: w,
mediaLayoutType: L,
maxWidth: b,
maxHeight: F,
hasFooter: H,
useFullWidth: Z,
isVisualMediaType: V,
onVideoControlsShow: G,
onVideoControlsHide: U
  } = e, {
width: k,
height: B,
spoiler: W,
type: X,
contentType: q
  } = t, [z, J] = l.useState(!1), [Y, $] = l.useState(!1), K = n.getChannelId(), Q = I.Z.getChannel(K), ee = (0, E.Z)(K), en = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, et = l.useMemo(() => null != q && -1 !== q.indexOf('/') ? q.split('/') : [
'unknown',
'unknown'
  ], [q]), ei = 'IMAGE' === X && !h.u.test(t.downloadUrl), el = !1;
  if (V) {
(null == k || null == B) && (el = !0);
let e = (0, N.Dc)({
  width: null != k ? k : 0,
  height: null != B ? B : 0,
  maxWidth: g.mT,
  maxHeight: g.Jj
});
!Z && (e * (null != k ? k : 0) < g.OF || e * (null != B ? B : 0) < g.OF) && (el = !0);
  }
  let eo = l.useCallback(() => {
  d(t);
}, [
  t,
  d
]),
ea = l.useCallback(e => {
  ei && !el && (e && !Y ? ($(!0), M.default.track(A.rMx.IMAGE_HOVERED, {
    guild_id: null == Q ? void 0 : Q.guild_id,
    channel_id: null == Q ? void 0 : Q.id,
    image_recommendations_shown: en
  })) : !e && Y && $(!1));
}, [
  Y,
  Q,
  en,
  ei,
  el
]),
es = l.useCallback(() => {
  if (L === g.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(X) || 'OTHER' === X;
    return el ? null : !z && (0, i.jsx)(D, {
      mimeType: et,
      downloadURL: t.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && en,
      onRemoveItem: u ? eo : void 0,
      isVisualMediaType: V,
      channelId: K
    });
  }
  return u && (0, i.jsx)(s.Clickable, {
    className: W ? v.spoilerRemoveMosaicItemButton : v.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(t),
    'aria-label': O.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  L,
  u,
  W,
  X,
  V,
  z,
  t,
  et,
  eo,
  d,
  en,
  ee,
  K,
  ei,
  el
]);
  switch (X) {
case 'IMAGE':
  return (0, i.jsx)(C.h.Consumer, {
    children: e => (0, i.jsx)(_, {
      item: t,
      message: n,
      width: k,
      height: B,
      autoPlay: o && !w,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: es,
      containerClassName: P,
      className: S,
      imageClassName: y,
      shouldLink: R,
      hiddenSpoilers: w,
      responsive: !0,
      mediaLayoutType: L,
      maxWidth: b,
      maxHeight: F,
      useFullWidth: Z,
      onMouseEnter: () => ea(!0),
      onMouseLeave: () => ea(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(T, {
    item: t,
    message: n,
    width: k,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: k,
    naturalHeight: B,
    className: a()(P, {
      [v.hasFooter]: H
    }),
    playable: R,
    responsive: !0,
    mediaLayoutType: L,
    maxWidth: b,
    maxHeight: F,
    useFullWidth: Z,
    mimeType: et,
    onControlsShow: G,
    onControlsHide: U,
    downloadable: !ee,
    mediaPlayerClassName: H ? v.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(x, {
    item: t,
    message: n,
    className: P,
    playable: R,
    mimeType: et,
    renderAdjacentContent: es,
    onVolumeShow: () => J(!0),
    onVolumeHide: () => J(!1),
    onPlay: p
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(f, {
    item: t,
    message: n,
    className: P,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'OTHER':
  return (0, i.jsx)(j, {
    item: t,
    message: n,
    className: P,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'INVALID':
  return null;
  }
}
n.ZP = function(e) {
  var n;
  let {
className: t,
item: o,
message: s,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: d,
isSingleMosaicItem: h,
footer: E,
...I
  } = e, {
width: C,
height: M,
type: _
  } = o, T = r(o, (0, m.V)(s.channel_id, s.author.id)), [f, A] = l.useState(null != T), O = d === g.hV.MOSAIC, j = !O && (null != C && C < 200 || null != M && M < 50);
  let S = 'IMAGE' === (n = _) || 'VIDEO' === n,
y = P(_),
R = h && null != T && (0, c.bR)(C, M),
[w, D] = l.useState(!1),
b = () => {
  D(!0);
},
F = () => {
  D(!1);
},
H = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(L, {
    ...I,
    item: o,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: a()(t, v.mosaicItemContent, {
      [v.obscured]: f && !j,
      [v.hiddenSpoiler]: f && T === x.wk.SPOILER,
      [v.hiddenExplicit]: f && null != T && [
        x.wk.EXPLICIT_CONTENT,
        x.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(T),
      [v.hiddenMosaicItem]: f && e,
      [v.inline]: f && j
    }),
    focusable: !e,
    mediaLayoutType: d,
    hasFooter: null != E,
    useFullWidth: !!R || u,
    isVisualMediaType: y,
    onVideoControlsShow: b,
    onVideoControlsHide: F
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: a()(v.mosaicItem, {
    [v.mosaicItemNoJustify]: S,
    [v.mosaicItemFullWidth]: u,
    [v.mosaicItemMediaMosaic]: O,
    [v.hideOverflow]: O && y,
    [v.mosaicItemWithFooter]: null != E
  }),
  children: [
    null != T ? (0, i.jsx)(p.Z, {
      type: p.Z.Types.ATTACHMENT,
      inline: j,
      reason: T,
      isSingleMosaicItem: h,
      obscured: f,
      containerStyles: function(e, n, t) {
        if (!n)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: n
          } = (0, N.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = n;
        }
        return {
          ...t !== g.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(o, S, d),
      obscurityControlClassName: a()({
        [v.obscureVideoSpacing]: 'VIDEO' === _ && h && !f && w
      }),
      onToggleObscurity: () => A(e => !e),
      children: e => H(e)
    }) : H(),
    E
  ]
})
  });
};