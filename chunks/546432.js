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
  a = t(120356),
  l = t.n(a),
  s = t(481060),
  r = t(162609),
  u = t(370298),
  c = t(167080),
  d = t(163268),
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
  v = t(981631),
  A = t(689938),
  _ = t(62233);
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
  var a;
  return (0, M.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, v.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
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
  let n, t, a, {
downloadURL: r,
downloadMimeType: d,
onRemoveItem: m,
showImageAppPicker: h,
isVisualMediaType: I,
channelId: E
  } = e;
  null != r && null != d && (n = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(c.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: _.hoverButton,
  iconClassName: _.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: r,
  mimeType: d
})
  })), null != m && (t = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: l()(_.hoverButton, _.removeMosaicItemHoverButton),
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
  let [p, x] = o.useState(!1), C = o.useCallback(() => x(e => !e), []);
  return (h && (a = (0, i.jsx)(u.Z, {
toggleShowMenu: C,
showMenu: p,
channelId: E,
className: l()(_.hoverButton, {
  [_.selected]: p
})
  })), null == t && null == n && null == a) ? null : (0, i.jsxs)('div', {
className: l()(_.hoverButtonGroup, {
  [_.nonMediaMosaicItem]: !I,
  [_.forceShowHover]: p
}),
children: [
  a,
  n,
  t
]
  });
};

function L(e) {
  let {
message: n,
item: t,
autoPlayGif: a,
canRemoveItem: u,
onRemoveItem: c,
onClick: d,
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
mediaLayoutType: L,
maxWidth: b,
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
  let ea = o.useCallback(() => {
  c(t);
}, [
  t,
  c
]),
el = o.useCallback(e => {
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
es = o.useCallback(() => {
  if (L === j.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(z) || 'OTHER' === z;
    return eo ? null : !X && (0, i.jsx)(F, {
      downloadURL: e ? t.downloadUrl : void 0,
      downloadMimeType: e ? et : void 0,
      onRemoveItem: u ? ea : void 0,
      showImageAppPicker: ei && en,
      isVisualMediaType: G,
      channelId: Q
    });
  }
  return u && (0, i.jsx)(s.Clickable, {
    className: W ? _.spoilerRemoveMosaicItemButton : _.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => c(t),
    'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  L,
  u,
  W,
  z,
  G,
  X,
  t,
  et,
  ea,
  c,
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
      autoPlay: a && !R,
      onClick: d,
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
      mediaLayoutType: L,
      maxWidth: b,
      maxHeight: D,
      useFullWidth: H,
      onMouseEnter: () => el(!0),
      onMouseLeave: () => el(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: t,
    message: n,
    width: B,
    height: U,
    onClick: d,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: B,
    naturalHeight: U,
    className: l()(P, {
      [_.hasFooter]: Z
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: L,
    maxWidth: b,
    maxHeight: D,
    useFullWidth: H,
    mimeType: et,
    onControlsShow: V,
    onControlsHide: k,
    downloadable: !ee,
    mediaPlayerClassName: Z ? _.hasFooter : void 0
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
    onClick: d,
    onContextMenu: m,
    renderAdjacentContent: es
  });
case 'OTHER':
  return (0, i.jsx)(O, {
    item: t,
    message: n,
    className: P,
    onClick: d,
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
item: a,
message: s,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: c,
isSingleMosaicItem: h,
footer: I,
...E
  } = e, {
width: x,
height: C,
type: M
  } = a, f = r(a, (0, m.V)(s.channel_id, s.author.id)), [T, v] = o.useState(null != f), A = c === j.hV.MOSAIC, O = !A && (null != x && x < 200 || null != C && C < 50);
  let y = 'IMAGE' === (n = M) || 'VIDEO' === n,
S = P(M),
w = h && null != f && (0, d.bR)(x, C),
[R, F] = o.useState(!1),
b = () => {
  F(!0);
},
D = () => {
  F(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(L, {
    ...E,
    item: a,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: l()(t, _.mosaicItemContent, {
      [_.obscured]: T && !O,
      [_.hiddenSpoiler]: T && f === N.wk.SPOILER,
      [_.hiddenExplicit]: T && null != f && [
        N.wk.EXPLICIT_CONTENT,
        N.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(f),
      [_.hiddenMosaicItem]: T && e,
      [_.inline]: T && O
    }),
    focusable: !e,
    mediaLayoutType: c,
    hasFooter: null != I,
    useFullWidth: !!w || u,
    isVisualMediaType: S,
    onVideoControlsShow: b,
    onVideoControlsHide: D
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(_.mosaicItem, {
    [_.mosaicItemNoJustify]: y,
    [_.mosaicItemFullWidth]: u,
    [_.mosaicItemMediaMosaic]: A,
    [_.hideOverflow]: A && S,
    [_.mosaicItemWithFooter]: null != I
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
      }(a, y, c),
      obscurityControlClassName: l()({
        [_.obscureVideoSpacing]: 'VIDEO' === M && h && !T && R
      }),
      onToggleObscurity: () => v(e => !e),
      children: e => Z(e)
    }) : Z(),
    I
  ]
})
  });
};