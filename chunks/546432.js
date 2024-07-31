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
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(481060),
  r = t(162609),
  d = t(370298),
  u = t(167080),
  c = t(163268),
  m = t(25610),
  h = t(124347),
  I = t(976853),
  E = t(592125),
  p = t(68588),
  C = t(941797),
  x = t(626135),
  M = t(630388),
  g = t(956664),
  f = t(406432),
  N = t(169525),
  T = t(65838),
  v = t(217702),
  _ = t(981631),
  A = t(689938),
  j = t(62233);
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
height: l
  } = e;
  if (n && null != i && i > 0 && null != l && l > 0) {
if ((0, f.CO)(t))
  return 'IMAGE';
if (!(0, f.NU)(t) || null == e.proxy_url)
  return 'INVALID';
else {
  var o;
  return (0, M.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, _.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
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
height: l
  } = e;
  if (n && i > 0 && l > 0)
return (0, f.tw)(t) ? 'IMAGE' : (0, f.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let L = e => {
  let n, t, o, {
downloadURL: r,
downloadMimeType: c,
onRemoveItem: m,
showImageAppPicker: h,
isVisualMediaType: I,
channelId: E,
messageId: p
  } = e;
  null != r && null != c && (n = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(u.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: j.hoverButton,
  iconClassName: j.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: r,
  mimeType: c
})
  })), null != m && (t = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: a()(j.hoverButton, j.removeMosaicItemHoverButton),
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
  let [C, x] = l.useState(!1), M = l.useCallback(() => x(e => !e), []);
  return (h && (o = (0, i.jsx)(d.Z, {
toggleShowMenu: M,
showMenu: C,
channelId: E,
className: a()(j.hoverButton, {
  [j.selected]: C
}),
commandTargetId: p
  })), null == t && null == n && null == o) ? null : (0, i.jsxs)('div', {
className: a()(j.hoverButtonGroup, {
  [j.nonMediaMosaicItem]: !I,
  [j.forceShowHover]: C
}),
children: [
  o,
  n,
  t
]
  });
};

function b(e) {
  let {
message: n,
item: t,
autoPlayGif: o,
canRemoveItem: d,
onRemoveItem: u,
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
maxWidth: Z,
maxHeight: F,
hasFooter: D,
useFullWidth: H,
isVisualMediaType: G,
onVideoControlsShow: V,
onVideoControlsHide: k
  } = e, {
width: U,
height: B,
spoiler: W,
type: q,
contentType: X
  } = t, [z, J] = l.useState(!1), [Y, $] = l.useState(!1), K = n.getChannelId(), Q = E.Z.getChannel(K), ee = (0, I.Z)(K), en = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, et = l.useMemo(() => null != X && -1 !== X.indexOf('/') ? X.split('/') : [
'unknown',
'unknown'
  ], [X]), ei = 'IMAGE' === q && !h.u.test(t.downloadUrl), el = !1;
  if (G) {
(null == U || null == B) && (el = !0);
let e = (0, g.Dc)({
  width: null != U ? U : 0,
  height: null != B ? B : 0,
  maxWidth: v.mT,
  maxHeight: v.Jj
});
!H && (e * (null != U ? U : 0) < v.OF || e * (null != B ? B : 0) < v.OF) && (el = !0);
  }
  let eo = l.useCallback(() => {
  u(t);
}, [
  t,
  u
]),
ea = l.useCallback(e => {
  ei && !el && (e && !Y ? ($(!0), x.default.track(_.rMx.IMAGE_HOVERED, {
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
  if (b === v.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(q) || 'OTHER' === q;
    return el ? null : !z && (0, i.jsx)(L, {
      downloadURL: e ? t.downloadUrl : void 0,
      downloadMimeType: e ? et : void 0,
      onRemoveItem: d ? eo : void 0,
      showImageAppPicker: ei && en,
      isVisualMediaType: G,
      channelId: K,
      messageId: n.id
    });
  }
  return d && (0, i.jsx)(s.Clickable, {
    className: W ? j.spoilerRemoveMosaicItemButton : j.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => u(t),
    'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(s.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  b,
  d,
  W,
  q,
  G,
  z,
  t,
  et,
  eo,
  u,
  en,
  ee,
  K,
  ei,
  el,
  n.id
]);
  switch (q) {
case 'IMAGE':
  return (0, i.jsx)(C.h.Consumer, {
    children: e => (0, i.jsx)(M, {
      item: t,
      message: n,
      width: U,
      height: B,
      autoPlay: o && !R,
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
      maxWidth: Z,
      maxHeight: F,
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
    width: U,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: U,
    naturalHeight: B,
    className: a()(P, {
      [j.hasFooter]: D
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: b,
    maxWidth: Z,
    maxHeight: F,
    useFullWidth: H,
    mimeType: et,
    onControlsShow: V,
    onControlsHide: k,
    downloadable: !ee,
    mediaPlayerClassName: D ? j.hasFooter : void 0
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
item: o,
message: s,
getObscureReason: r,
useFullWidth: d,
mediaLayoutType: u,
isSingleMosaicItem: h,
footer: I,
...E
  } = e, {
width: C,
height: x,
type: M
  } = o, f = r(o, (0, m.V)(s.channel_id, s.author.id)), [T, _] = l.useState(null != f), A = u === v.hV.MOSAIC, O = !A && (null != C && C < 200 || null != x && x < 50);
  let y = 'IMAGE' === (n = M) || 'VIDEO' === n,
S = P(M),
w = h && null != f && (0, c.bR)(C, x),
[R, L] = l.useState(!1),
Z = () => {
  L(!0);
},
F = () => {
  L(!1);
},
D = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(b, {
    ...E,
    item: o,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: a()(t, j.mosaicItemContent, {
      [j.obscured]: T && !O,
      [j.hiddenSpoiler]: T && f === N.wk.SPOILER,
      [j.hiddenExplicit]: T && null != f && [
        N.wk.EXPLICIT_CONTENT,
        N.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(f),
      [j.hiddenMosaicItem]: T && e,
      [j.inline]: T && O
    }),
    focusable: !e,
    mediaLayoutType: u,
    hasFooter: null != I,
    useFullWidth: !!w || d,
    isVisualMediaType: S,
    onVideoControlsShow: Z,
    onVideoControlsHide: F
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: a()(j.mosaicItem, {
    [j.mosaicItemNoJustify]: y,
    [j.mosaicItemFullWidth]: d,
    [j.mosaicItemMediaMosaic]: A,
    [j.hideOverflow]: A && S,
    [j.mosaicItemWithFooter]: null != I
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
          ...t !== v.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(o, y, u),
      obscurityControlClassName: a()({
        [j.obscureVideoSpacing]: 'VIDEO' === M && h && !T && R
      }),
      onToggleObscurity: () => _(e => !e),
      children: e => D(e)
    }) : D(),
    I
  ]
})
  });
};