t.d(n, {
  Ld: function() {
return y;
  },
  OB: function() {
return w;
  },
  R_: function() {
return P;
  },
  aw: function() {
return S;
  },
  pU: function() {
return R;
  }
}), t(789020), t(47120);
var i = t(735250),
  l = t(470079),
  a = t(120356),
  o = t.n(a),
  s = t(481060),
  r = t(162609),
  d = t(370298),
  u = t(167080),
  c = t(163268),
  m = t(25610),
  h = t(124347),
  I = t(976853),
  p = t(592125),
  E = t(68588),
  C = t(941797),
  x = t(626135),
  g = t(630388),
  M = t(956664),
  f = t(406432),
  N = t(169525),
  T = t(65838),
  _ = t(217702),
  v = t(981631),
  A = t(689938),
  j = t(62233);
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  P = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  y = e => 'IMAGE' === e || 'VIDEO' === e;

function w(e, n) {
  return {
uniqueId: e.id,
originalItem: e,
type: S(e, n),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function S(e, n) {
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
  var a;
  return (0, g.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, v.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
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
  let n, t, a, {
mimeType: r,
downloadURL: c,
onRemoveItem: m,
showDownload: h,
showImageAppPicker: I,
isVisualMediaType: p,
channelId: E
  } = e;
  h && (n = (0, i.jsx)(s.Tooltip, {
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
  href: c,
  mimeType: r
})
  })), null != m && (t = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: o()(j.hoverButton, j.removeMosaicItemHoverButton),
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
  let [C, x] = l.useState(!1), g = l.useCallback(() => x(e => !e), []);
  return (I && (a = (0, i.jsx)(d.Z, {
toggleShowMenu: g,
showMenu: C,
channelId: E,
className: o()(j.hoverButton, {
  [j.selected]: C
}),
imageUrl: c,
mimeType: r
  })), null == t && null == n && null == a) ? null : (0, i.jsxs)('div', {
className: o()(j.hoverButtonGroup, {
  [j.nonMediaMosaicItem]: !p,
  [j.forceShowHover]: C
}),
children: [
  a,
  n,
  t
]
  });
};

function b(e) {
  let {
message: n,
item: t,
autoPlayGif: a,
canRemoveItem: d,
onRemoveItem: u,
onClick: c,
onContextMenu: m,
onPlay: E,
renderImageComponent: g,
renderVideoComponent: f,
renderAudioComponent: N,
renderPlaintextFilePreview: T,
renderGenericFileComponent: O,
className: P,
imgContainerClassName: y,
imgClassName: w,
focusable: S,
hiddenSpoilers: R,
mediaLayoutType: b,
maxWidth: F,
maxHeight: Z,
hasFooter: D,
useFullWidth: H,
isVisualMediaType: G,
onVideoControlsShow: U,
onVideoControlsHide: V
  } = e, {
width: k,
height: B,
spoiler: W,
type: q,
contentType: X
  } = t, [z, J] = l.useState(!1), [Y, $] = l.useState(!1), K = n.getChannelId(), Q = p.Z.getChannel(K), ee = (0, I.Z)(K), en = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, et = l.useMemo(() => null != X && -1 !== X.indexOf('/') ? X.split('/') : [
'unknown',
'unknown'
  ], [X]), ei = 'IMAGE' === q && !h.u.test(t.downloadUrl), el = !1;
  if (G) {
(null == k || null == B) && (el = !0);
let e = (0, M.Dc)({
  width: null != k ? k : 0,
  height: null != B ? B : 0,
  maxWidth: _.mT,
  maxHeight: _.Jj
});
!H && (e * (null != k ? k : 0) < _.OF || e * (null != B ? B : 0) < _.OF) && (el = !0);
  }
  let ea = l.useCallback(() => {
  u(t);
}, [
  t,
  u
]),
eo = l.useCallback(e => {
  ei && !el && (e && !Y ? ($(!0), x.default.track(v.rMx.IMAGE_HOVERED, {
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
  if (b === _.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(q) || 'OTHER' === q;
    return el ? null : !z && (0, i.jsx)(L, {
      mimeType: et,
      downloadURL: t.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && en,
      onRemoveItem: d ? ea : void 0,
      isVisualMediaType: G,
      channelId: K
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
  ea,
  u,
  en,
  ee,
  K,
  ei,
  el
]);
  switch (q) {
case 'IMAGE':
  return (0, i.jsx)(C.h.Consumer, {
    children: e => (0, i.jsx)(g, {
      item: t,
      message: n,
      width: k,
      height: B,
      autoPlay: a && !R,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: es,
      containerClassName: P,
      className: y,
      imageClassName: w,
      shouldLink: S,
      hiddenSpoilers: R,
      responsive: !0,
      mediaLayoutType: b,
      maxWidth: F,
      maxHeight: Z,
      useFullWidth: H,
      onMouseEnter: () => eo(!0),
      onMouseLeave: () => eo(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: t,
    message: n,
    width: k,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: es,
    naturalWidth: k,
    naturalHeight: B,
    className: o()(P, {
      [j.hasFooter]: D
    }),
    playable: S,
    responsive: !0,
    mediaLayoutType: b,
    maxWidth: F,
    maxHeight: Z,
    useFullWidth: H,
    mimeType: et,
    onControlsShow: U,
    onControlsHide: V,
    downloadable: !ee,
    mediaPlayerClassName: D ? j.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(N, {
    item: t,
    message: n,
    className: P,
    playable: S,
    mimeType: et,
    renderAdjacentContent: es,
    onVolumeShow: () => J(!0),
    onVolumeHide: () => J(!1),
    onPlay: E
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
item: a,
message: s,
getObscureReason: r,
useFullWidth: d,
mediaLayoutType: u,
isSingleMosaicItem: h,
footer: I,
...p
  } = e, {
width: C,
height: x,
type: g
  } = a, f = r(a, (0, m.V)(s.channel_id, s.author.id)), [T, v] = l.useState(null != f), A = u === _.hV.MOSAIC, O = !A && (null != C && C < 200 || null != x && x < 50);
  let y = 'IMAGE' === (n = g) || 'VIDEO' === n,
w = P(g),
S = h && null != f && (0, c.bR)(C, x),
[R, L] = l.useState(!1),
F = () => {
  L(!0);
},
Z = () => {
  L(!1);
},
D = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(b, {
    ...p,
    item: a,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: o()(t, j.mosaicItemContent, {
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
    useFullWidth: !!S || d,
    isVisualMediaType: w,
    onVideoControlsShow: F,
    onVideoControlsHide: Z
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: o()(j.mosaicItem, {
    [j.mosaicItemNoJustify]: y,
    [j.mosaicItemFullWidth]: d,
    [j.mosaicItemMediaMosaic]: A,
    [j.hideOverflow]: A && w,
    [j.mosaicItemWithFooter]: null != I
  }),
  children: [
    null != f ? (0, i.jsx)(E.Z, {
      type: E.Z.Types.ATTACHMENT,
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
          } = (0, M.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = n;
        }
        return {
          ...t !== _.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(a, y, u),
      obscurityControlClassName: o()({
        [j.obscureVideoSpacing]: 'VIDEO' === g && h && !T && R
      }),
      onToggleObscurity: () => v(e => !e),
      children: e => D(e)
    }) : D(),
    I
  ]
})
  });
};