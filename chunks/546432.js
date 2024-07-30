t.d(n, {
  Ld: function() {
return y;
  },
  OB: function() {
return S;
  },
  R_: function() {
return P;
  },
  aw: function() {
return w;
  },
  pU: function() {
return R;
  }
}), t(789020), t(47120);
var i = t(735250),
  o = t(470079),
  l = t(120356),
  a = t.n(l),
  s = t(481060),
  r = t(162609),
  u = t(370298),
  d = t(167080),
  c = t(163268),
  m = t(25610),
  h = t(124347),
  I = t(976853),
  E = t(592125),
  p = t(68588),
  x = t(941797),
  C = t(626135),
  M = t(630388),
  g = t(956664),
  f = t(406432),
  N = t(169525),
  T = t(65838),
  j = t(217702),
  _ = t(981631),
  v = t(689938),
  A = t(62233);
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  P = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  y = e => 'IMAGE' === e || 'VIDEO' === e;

function S(e, n) {
  return {
uniqueId: e.id,
originalItem: e,
type: w(e, n),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function w(e, n) {
  let {
filename: t,
width: i,
height: o
  } = e;
  if (n && null != i && i > 0 && null != o && o > 0) {
if ((0, f.CO)(t))
  return 'IMAGE';
if (!(0, f.NU)(t) || null == e.proxy_url)
  return 'INVALID';
else {
  var l;
  return (0, M.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, _.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != n && O.test(t) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, T.O)(t))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function R(e, n) {
  let {
contentType: t,
width: i,
height: o
  } = e;
  if (n && i > 0 && o > 0)
return (0, f.tw)(t) ? 'IMAGE' : (0, f.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let F = e => {
  let n, t, l, {
downloadURL: r,
downloadMimeType: c,
onRemoveItem: m,
showImageAppPicker: h,
isVisualMediaType: I,
channelId: E
  } = e;
  null != r && null != c && (n = (0, i.jsx)(s.Tooltip, {
text: v.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(d.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: A.hoverButton,
  iconClassName: A.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: r,
  mimeType: c
})
  })), null != m && (t = (0, i.jsx)(s.Tooltip, {
text: v.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: a()(A.hoverButton, A.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(s.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [p, x] = o.useState(!1), C = o.useCallback(() => x(e => !e), []);
  return (h && (l = (0, i.jsx)(u.Z, {
toggleShowMenu: C,
showMenu: p,
channelId: E,
className: a()(A.hoverButton, {
  [A.selected]: p
})
  })), null == t && null == n && null == l) ? null : (0, i.jsxs)('div', {
className: a()(A.hoverButtonGroup, {
  [A.nonMediaMosaicItem]: !I,
  [A.forceShowHover]: p
}),
children: [
  l,
  n,
  t
]
  });
};

function b(e) {
  let {
message: n,
item: t,
autoPlayGif: l,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: p,
renderImageComponent: M,
renderVideoComponent: f,
renderAudioComponent: N,
renderPlaintextFilePreview: T,
renderGenericFileComponent: O,
className: P,
imgContainerClassName: y,
imgClassName: S,
focusable: w,
hiddenSpoilers: R,
mediaLayoutType: b,
maxWidth: L,
maxHeight: D,
hasFooter: Z,
useFullWidth: H,
isVisualMediaType: G,
onVideoControlsShow: V,
onVideoControlsHide: k
  } = e, {
width: B,
height: U,
spoiler: W,
type: z,
contentType: q
  } = t, [X, J] = o.useState(!1), [$, K] = o.useState(!1), Q = n.getChannelId(), Y = E.Z.getChannel(Q), ee = (0, I.Z)(Q), en = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, et = o.useMemo(() => null != q && -1 !== q.indexOf('/') ? q.split('/') : [
'unknown',
'unknown'
  ], [q]), ei = 'IMAGE' === z && !h.u.test(t.downloadUrl), eo = !1;
  if (G) {
(null == B || null == U) && (eo = !0);
let e = (0, g.Dc)({
  width: null != B ? B : 0,
  height: null != U ? U : 0,
  maxWidth: j.mT,
  maxHeight: j.Jj
});
!H && (e * (null != B ? B : 0) < j.OF || e * (null != U ? U : 0) < j.OF) && (eo = !0);
  }
  let el = o.useCallback(() => {
  d(t);
}, [
  t,
  d
]),
ea = o.useCallback(e => {
  ei && !eo && (e && !$ ? (K(!0), C.default.track(_.rMx.IMAGE_HOVERED, {
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
es = o.useCallback(() => {
  if (b === j.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(z) || 'OTHER' === z;
    return eo ? null : !X && (0, i.jsx)(F, {
      downloadURL: e ? t.downloadUrl : void 0,
      downloadMimeType: e ? et : void 0,
      onRemoveItem: u ? el : void 0,
      showImageAppPicker: ei && en,
      isVisualMediaType: G,
      channelId: Q
    });
  }
  return u && (0, i.jsx)(s.Clickable, {
    className: W ? A.spoilerRemoveMosaicItemButton : A.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(t),
    'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  b,
  u,
  W,
  z,
  G,
  X,
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
  switch (z) {
case 'IMAGE':
  return (0, i.jsx)(x.h.Consumer, {
    children: e => (0, i.jsx)(M, {
      item: t,
      message: n,
      width: B,
      height: U,
      autoPlay: l && !R,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: es,
      containerClassName: P,
      className: y,
      imageClassName: S,
      shouldLink: w,
      hiddenSpoilers: R,
      responsive: !0,
      mediaLayoutType: b,
      maxWidth: L,
      maxHeight: D,
      useFullWidth: H,
      onMouseEnter: () => ea(!0),
      onMouseLeave: () => ea(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: t,
    message: n,
    width: B,
    height: U,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: B,
    naturalHeight: U,
    className: a()(P, {
      [A.hasFooter]: Z
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: b,
    maxWidth: L,
    maxHeight: D,
    useFullWidth: H,
    mimeType: et,
    onControlsShow: V,
    onControlsHide: k,
    downloadable: !ee,
    mediaPlayerClassName: Z ? A.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(N, {
    item: t,
    message: n,
    className: P,
    playable: w,
    mimeType: et,
    renderAdjacentContent: es,
    onVolumeShow: () => J(!0),
    onVolumeHide: () => J(!1),
    onPlay: p
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(T, {
    item: t,
    message: n,
    className: P,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'OTHER':
  return (0, i.jsx)(O, {
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
item: l,
message: s,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: d,
isSingleMosaicItem: h,
footer: I,
...E
  } = e, {
width: x,
height: C,
type: M
  } = l, f = r(l, (0, m.V)(s.channel_id, s.author.id)), [T, _] = o.useState(null != f), v = d === j.hV.MOSAIC, O = !v && (null != x && x < 200 || null != C && C < 50);
  let y = 'IMAGE' === (n = M) || 'VIDEO' === n,
S = P(M),
w = h && null != f && (0, c.bR)(x, C),
[R, F] = o.useState(!1),
L = () => {
  F(!0);
},
D = () => {
  F(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(b, {
    ...E,
    item: l,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: a()(t, A.mosaicItemContent, {
      [A.obscured]: T && !O,
      [A.hiddenSpoiler]: T && f === N.wk.SPOILER,
      [A.hiddenExplicit]: T && null != f && [
        N.wk.EXPLICIT_CONTENT,
        N.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(f),
      [A.hiddenMosaicItem]: T && e,
      [A.inline]: T && O
    }),
    focusable: !e,
    mediaLayoutType: d,
    hasFooter: null != I,
    useFullWidth: !!w || u,
    isVisualMediaType: S,
    onVideoControlsShow: L,
    onVideoControlsHide: D
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: a()(A.mosaicItem, {
    [A.mosaicItemNoJustify]: y,
    [A.mosaicItemFullWidth]: u,
    [A.mosaicItemMediaMosaic]: v,
    [A.hideOverflow]: v && S,
    [A.mosaicItemWithFooter]: null != I
  }),
  children: [
    null != f ? (0, i.jsx)(p.Z, {
      type: p.Z.Types.ATTACHMENT,
      inline: O,
      reason: f,
      isSingleMosaicItem: h,
      obscured: T,
      containerStyles: function(e, n, t) {
        if (!n)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: n
          } = (0, g.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = n;
        }
        return {
          ...t !== j.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(l, y, d),
      obscurityControlClassName: a()({
        [A.obscureVideoSpacing]: 'VIDEO' === M && h && !T && R
      }),
      onToggleObscurity: () => _(e => !e),
      children: e => Z(e)
    }) : Z(),
    I
  ]
})
  });
};