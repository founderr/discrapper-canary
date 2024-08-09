t.d(n, {
  Ld: function() {
return L;
  },
  OB: function() {
return S;
  },
  R_: function() {
return _;
  },
  aw: function() {
return V;
  },
  pU: function() {
return P;
  }
}), t(789020), t(47120);
var i = t(735250),
  o = t(470079),
  l = t(120356),
  s = t.n(l),
  a = t(481060),
  r = t(162609),
  u = t(370298),
  d = t(95398),
  m = t(167080),
  c = t(163268),
  h = t(25610),
  I = t(947849),
  x = t(124347),
  p = t(976853),
  g = t(592125),
  C = t(626135),
  f = t(630388),
  j = t(956664),
  M = t(406432),
  T = t(169525),
  y = t(65838),
  E = t(217702),
  v = t(981631),
  N = t(689938),
  O = t(62233),
  w = t(94866);
let A = /\.(mp3|m4a|ogg|wav|flac)$/i,
  _ = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  L = e => 'IMAGE' === e || 'VIDEO' === e;

function S(e, n) {
  return {
uniqueId: e.id,
originalItem: e,
type: V(e, n),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function V(e, n) {
  let {
filename: t,
width: i,
height: o
  } = e;
  if (n && null != i && i > 0 && null != o && o > 0) {
if ((0, M.CO)(t))
  return 'IMAGE';
if (!(0, M.NU)(t) || null == e.proxy_url)
  return 'INVALID';
else {
  var l;
  return (0, f.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, v.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != n && A.test(t) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, y.O)(t))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function P(e, n) {
  let {
contentType: t,
width: i,
height: o
  } = e;
  if (n && i > 0 && o > 0)
return (0, M.tw)(t) ? 'IMAGE' : (0, M.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let b = e => {
  let n, t, l, {
mimeType: r,
downloadURL: d,
onRemoveItem: c,
showDownload: h,
showImageAppPicker: I,
isVisualMediaType: x,
channelId: p
  } = e;
  h && (n = (0, i.jsx)(a.Tooltip, {
text: N.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(m.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: w.hoverButton,
  iconClassName: O.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: d,
  mimeType: r
})
  })), null != c && (t = (0, i.jsx)(a.Tooltip, {
text: N.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: s()(w.hoverButton, O.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: c,
  'aria-label': N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [g, C] = o.useState(!1), f = o.useCallback(() => C(e => !e), []);
  return (I && (l = (0, i.jsx)(u.Z, {
toggleShowMenu: f,
showMenu: g,
channelId: p,
className: s()(w.hoverButton, {
  [w.selected]: g
}),
imageUrl: d,
mimeType: r
  })), null == t && null == n && null == l) ? null : (0, i.jsxs)('div', {
className: s()(w.hoverButtonGroup, {
  [w.nonMediaMosaicItem]: !x,
  [w.forceShowHover]: g
}),
children: [
  l,
  n,
  t
]
  });
};

function F(e) {
  let {
message: n,
item: t,
autoPlayGif: l,
canRemoveItem: u,
onRemoveItem: d,
onClick: m,
onContextMenu: c,
onPlay: h,
renderImageComponent: f,
renderVideoComponent: M,
renderAudioComponent: T,
renderPlaintextFilePreview: y,
renderGenericFileComponent: w,
className: A,
imgContainerClassName: _,
imgClassName: L,
focusable: S,
hiddenSpoilers: V,
mediaLayoutType: P,
maxWidth: F,
maxHeight: k,
hasFooter: H,
useFullWidth: D,
isVisualMediaType: B,
onVideoControlsShow: G,
onVideoControlsHide: R
  } = e, {
width: W,
height: Z,
spoiler: U,
type: q,
contentType: X
  } = t, [z, J] = o.useState(!1), [$, K] = o.useState(!1), Q = n.getChannelId(), Y = g.Z.getChannel(Q), ee = (0, p.Z)(Q), en = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, et = o.useMemo(() => null != X && -1 !== X.indexOf('/') ? X.split('/') : [
'unknown',
'unknown'
  ], [X]), ei = 'IMAGE' === q && !x.u.test(t.downloadUrl), eo = !1;
  if (B) {
(null == W || null == Z) && (eo = !0);
let e = (0, j.Dc)({
  width: null != W ? W : 0,
  height: null != Z ? Z : 0,
  maxWidth: E.mT,
  maxHeight: E.Jj
});
!D && (e * (null != W ? W : 0) < E.OF || e * (null != Z ? Z : 0) < E.OF) && (eo = !0);
  }
  let el = o.useCallback(() => {
  d(t);
}, [
  t,
  d
]),
es = o.useCallback(e => {
  ei && !eo && (e && !$ ? (K(!0), C.default.track(v.rMx.IMAGE_HOVERED, {
    guild_id: null == Y ? void 0 : Y.guild_id,
    channel_id: null == Y ? void 0 : Y.id,
    image_recommendations_shown: en
  })) : !e && $ && K(!1));
}, [
  $,
  Y,
  en,
  ei,
  eo
]),
ea = o.useCallback(() => {
  if (P === E.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(q) || 'OTHER' === q;
    return eo ? null : !z && (0, i.jsx)(b, {
      mimeType: et,
      downloadURL: t.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && en,
      onRemoveItem: u ? el : void 0,
      isVisualMediaType: B,
      channelId: Q
    });
  }
  return u && (0, i.jsx)(a.Clickable, {
    className: U ? O.spoilerRemoveMosaicItemButton : O.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(t),
    'aria-label': N.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(a.XSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  P,
  u,
  U,
  q,
  B,
  z,
  t,
  et,
  el,
  d,
  en,
  ee,
  Q,
  ei,
  eo
]);
  switch (q) {
case 'IMAGE':
  return (0, i.jsx)(I.h.Consumer, {
    children: e => (0, i.jsx)(f, {
      item: t,
      message: n,
      width: W,
      height: Z,
      autoPlay: l && !V,
      onClick: m,
      onContextMenu: c,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: ea,
      containerClassName: A,
      className: _,
      imageClassName: L,
      shouldLink: S,
      hiddenSpoilers: V,
      responsive: !0,
      mediaLayoutType: P,
      maxWidth: F,
      maxHeight: k,
      useFullWidth: D,
      onMouseEnter: () => es(!0),
      onMouseLeave: () => es(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(M, {
    item: t,
    message: n,
    width: W,
    height: Z,
    onClick: m,
    onContextMenu: c,
    renderAdjacentContent: ea,
    naturalWidth: W,
    naturalHeight: Z,
    className: s()(A, {
      [O.hasFooter]: H
    }),
    playable: S,
    responsive: !0,
    mediaLayoutType: P,
    maxWidth: F,
    maxHeight: k,
    useFullWidth: D,
    mimeType: et,
    onControlsShow: G,
    onControlsHide: R,
    downloadable: !ee,
    mediaPlayerClassName: H ? O.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(T, {
    item: t,
    message: n,
    className: A,
    playable: S,
    mimeType: et,
    renderAdjacentContent: ea,
    onVolumeShow: () => J(!0),
    onVolumeHide: () => J(!1),
    onPlay: h
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(y, {
    item: t,
    message: n,
    className: A,
    onClick: m,
    onContextMenu: c,
    renderAdjacentContent: ea
  });
case 'OTHER':
  return (0, i.jsx)(w, {
    item: t,
    message: n,
    className: A,
    onClick: m,
    onContextMenu: c,
    renderAdjacentContent: ea
  });
case 'INVALID':
  return null;
  }
}
n.ZP = function(e) {
  var n;
  let {
className: t,
item: l,
message: a,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: m,
isSingleMosaicItem: I,
footer: x,
...p
  } = e, {
width: g,
height: C,
type: f
  } = l, M = r(l, (0, h.V)(a.channel_id, a.author.id)), [y, v] = o.useState(null != M), N = m === E.hV.MOSAIC, w = !N && (null != g && g < 200 || null != C && C < 50);
  let A = 'IMAGE' === (n = f) || 'VIDEO' === n,
L = _(f),
S = I && null != M && (0, c.bR)(g, C),
[V, P] = o.useState(!1),
b = () => {
  P(!0);
},
k = () => {
  P(!1);
},
H = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(F, {
    ...p,
    item: l,
    message: a,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: s()(t, O.mosaicItemContent, {
      [O.obscured]: y && !w,
      [O.hiddenSpoiler]: y && M === T.wk.SPOILER,
      [O.hiddenExplicit]: y && null != M && [
        T.wk.EXPLICIT_CONTENT,
        T.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(M),
      [O.hiddenMosaicItem]: y && e,
      [O.inline]: y && w
    }),
    focusable: !e,
    mediaLayoutType: m,
    hasFooter: null != x,
    useFullWidth: !!S || u,
    isVisualMediaType: L,
    onVideoControlsShow: b,
    onVideoControlsHide: k
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: s()(O.mosaicItem, {
    [O.mosaicItemNoJustify]: A,
    [O.mosaicItemFullWidth]: u,
    [O.mosaicItemMediaMosaic]: N,
    [O.hideOverflow]: N && L,
    [O.mosaicItemWithFooter]: null != x
  }),
  children: [
    null != M ? (0, i.jsx)(d.Z, {
      type: d.Z.Types.ATTACHMENT,
      inline: w,
      reason: M,
      isSingleMosaicItem: I,
      obscured: y,
      containerStyles: function(e, n, t) {
        if (!n)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: n
          } = (0, j.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = n;
        }
        return {
          ...t !== E.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(l, A, m),
      obscurityControlClassName: s()({
        [O.obscureVideoSpacing]: 'VIDEO' === f && I && !y && V
      }),
      onToggleObscurity: () => v(e => !e),
      children: e => H(e)
    }) : H(),
    x
  ]
})
  });
};