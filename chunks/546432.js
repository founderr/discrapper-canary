n.d(t, {
  Ld: function() {
return P;
  },
  OB: function() {
return b;
  },
  R_: function() {
return j;
  },
  aw: function() {
return w;
  },
  pU: function() {
return S;
  }
}), n(789020), n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(481060),
  s = n(162609),
  u = n(370298),
  d = n(95398),
  c = n(167080),
  m = n(163268),
  p = n(25610),
  h = n(947849),
  x = n(124347),
  g = n(976853),
  I = n(592125),
  E = n(626135),
  _ = n(630388),
  C = n(956664),
  f = n(406432),
  M = n(169525),
  N = n(65838),
  T = n(217702),
  y = n(981631),
  v = n(689938),
  A = n(62233);
let O = /\.(mp3|m4a|ogg|wav|flac)$/i,
  j = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  P = e => 'IMAGE' === e || 'VIDEO' === e;

function b(e, t) {
  return {
uniqueId: e.id,
originalItem: e,
type: w(e, t),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function w(e, t) {
  let {
filename: n,
width: i,
height: o
  } = e;
  if (t && null != i && i > 0 && null != o && o > 0) {
if ((0, f.CO)(n))
  return 'IMAGE';
if (!(0, f.NU)(n) || null == e.proxy_url)
  return 'INVALID';
else {
  var a;
  return (0, _.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, y.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != t && O.test(n) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, N.O)(n))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function S(e, t) {
  let {
contentType: n,
width: i,
height: o
  } = e;
  if (t && i > 0 && o > 0)
return (0, f.tw)(n) ? 'IMAGE' : (0, f.X2)(n) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let R = e => {
  let t, n, a, {
mimeType: s,
downloadURL: d,
onRemoveItem: m,
showDownload: p,
showImageAppPicker: h,
isVisualMediaType: x,
channelId: g
  } = e;
  p && (t = (0, i.jsx)(r.Tooltip, {
text: v.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(c.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: A.hoverButton,
  iconClassName: A.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: d,
  mimeType: s
})
  })), null != m && (n = (0, i.jsx)(r.Tooltip, {
text: v.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(r.Clickable, {
  ...e,
  className: l()(A.hoverButton, A.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(r.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [I, E] = o.useState(!1), _ = o.useCallback(() => E(e => !e), []);
  return (h && (a = (0, i.jsx)(u.Z, {
toggleShowMenu: _,
showMenu: I,
channelId: g,
className: l()(A.hoverButton, {
  [A.selected]: I
}),
imageUrl: d,
mimeType: s
  })), null == n && null == t && null == a) ? null : (0, i.jsxs)('div', {
className: l()(A.hoverButtonGroup, {
  [A.nonMediaMosaicItem]: !x,
  [A.forceShowHover]: I
}),
children: [
  a,
  t,
  n
]
  });
};

function F(e) {
  let {
message: t,
item: n,
autoPlayGif: a,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: p,
renderImageComponent: _,
renderVideoComponent: f,
renderAudioComponent: M,
renderPlaintextFilePreview: N,
renderGenericFileComponent: O,
className: j,
imgContainerClassName: P,
imgClassName: b,
focusable: w,
hiddenSpoilers: S,
mediaLayoutType: F,
maxWidth: L,
maxHeight: D,
hasFooter: Z,
useFullWidth: k,
isVisualMediaType: H,
onVideoControlsShow: G,
onVideoControlsHide: U
  } = e, {
width: V,
height: B,
spoiler: W,
type: X,
contentType: $
  } = n, [q, z] = o.useState(!1), [J, Q] = o.useState(!1), Y = t.getChannelId(), K = I.Z.getChannel(Y), ee = (0, g.Z)(Y), et = s.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, en = o.useMemo(() => null != $ && -1 !== $.indexOf('/') ? $.split('/') : [
'unknown',
'unknown'
  ], [$]), ei = 'IMAGE' === X && !x.u.test(n.downloadUrl), eo = !1;
  if (H) {
(null == V || null == B) && (eo = !0);
let e = (0, C.Dc)({
  width: null != V ? V : 0,
  height: null != B ? B : 0,
  maxWidth: T.mT,
  maxHeight: T.Jj
});
!k && (e * (null != V ? V : 0) < T.OF || e * (null != B ? B : 0) < T.OF) && (eo = !0);
  }
  let ea = o.useCallback(() => {
  d(n);
}, [
  n,
  d
]),
el = o.useCallback(e => {
  ei && !eo && (e && !J ? (Q(!0), E.default.track(y.rMx.IMAGE_HOVERED, {
    guild_id: null == K ? void 0 : K.guild_id,
    channel_id: null == K ? void 0 : K.id,
    image_recommendations_shown: et
  })) : !e && J && Q(!1));
}, [
  J,
  K,
  et,
  ei,
  eo
]),
er = o.useCallback(() => {
  if (F === T.hV.MOSAIC) {
    let e = !ee && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(X) || 'OTHER' === X;
    return eo ? null : !q && (0, i.jsx)(R, {
      mimeType: en,
      downloadURL: n.downloadUrl,
      showDownload: e,
      showImageAppPicker: ei && et,
      onRemoveItem: u ? ea : void 0,
      isVisualMediaType: H,
      channelId: Y
    });
  }
  return u && (0, i.jsx)(r.Clickable, {
    className: W ? A.spoilerRemoveMosaicItemButton : A.removeMosaicItemButton,
    focusProps: {
      offset: {
        bottom: 4
      }
    },
    onClick: () => d(n),
    'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
    children: (0, i.jsx)(r.XSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  });
}, [
  F,
  u,
  W,
  X,
  H,
  q,
  n,
  en,
  ea,
  d,
  et,
  ee,
  Y,
  ei,
  eo
]);
  switch (X) {
case 'IMAGE':
  return (0, i.jsx)(h.h.Consumer, {
    children: e => (0, i.jsx)(_, {
      item: n,
      message: t,
      width: V,
      height: B,
      autoPlay: a && !S,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: ee,
      renderAccessory: e,
      renderAdjacentContent: er,
      containerClassName: j,
      className: P,
      imageClassName: b,
      shouldLink: w,
      hiddenSpoilers: S,
      responsive: !0,
      mediaLayoutType: F,
      maxWidth: L,
      maxHeight: D,
      useFullWidth: k,
      onMouseEnter: () => el(!0),
      onMouseLeave: () => el(!1)
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: n,
    message: t,
    width: V,
    height: B,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er,
    naturalWidth: V,
    naturalHeight: B,
    className: l()(j, {
      [A.hasFooter]: Z
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: F,
    maxWidth: L,
    maxHeight: D,
    useFullWidth: k,
    mimeType: en,
    onControlsShow: G,
    onControlsHide: U,
    downloadable: !ee,
    mediaPlayerClassName: Z ? A.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(M, {
    item: n,
    message: t,
    className: j,
    playable: w,
    mimeType: en,
    renderAdjacentContent: er,
    onVolumeShow: () => z(!0),
    onVolumeHide: () => z(!1),
    onPlay: p
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(N, {
    item: n,
    message: t,
    className: j,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er
  });
case 'OTHER':
  return (0, i.jsx)(O, {
    item: n,
    message: t,
    className: j,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: er
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
message: r,
getObscureReason: s,
useFullWidth: u,
mediaLayoutType: c,
isSingleMosaicItem: h,
footer: x,
...g
  } = e, {
width: I,
height: E,
type: _
  } = a, f = s(a, (0, p.V)(r.channel_id, r.author.id)), [N, y] = o.useState(null != f), v = c === T.hV.MOSAIC, O = !v && (null != I && I < 200 || null != E && E < 50);
  let P = 'IMAGE' === (t = _) || 'VIDEO' === t,
b = j(_),
w = h && null != f && (0, m.bR)(I, E),
[S, R] = o.useState(!1),
L = () => {
  R(!0);
},
D = () => {
  R(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(F, {
    ...g,
    item: a,
    message: r,
    getObscureReason: s,
    hiddenSpoilers: e,
    className: l()(n, A.mosaicItemContent, {
      [A.obscured]: N && !O,
      [A.hiddenSpoiler]: N && f === M.wk.SPOILER,
      [A.hiddenExplicit]: N && null != f && [
        M.wk.EXPLICIT_CONTENT,
        M.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(f),
      [A.hiddenMosaicItem]: N && e,
      [A.inline]: N && O
    }),
    focusable: !e,
    mediaLayoutType: c,
    hasFooter: null != x,
    useFullWidth: !!w || u,
    isVisualMediaType: b,
    onVideoControlsShow: L,
    onVideoControlsHide: D
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(A.mosaicItem, {
    [A.mosaicItemNoJustify]: P,
    [A.mosaicItemFullWidth]: u,
    [A.mosaicItemMediaMosaic]: v,
    [A.hideOverflow]: v && b,
    [A.mosaicItemWithFooter]: null != x
  }),
  children: [
    null != f ? (0, i.jsx)(d.Z, {
      type: d.Z.Types.ATTACHMENT,
      inline: O,
      reason: f,
      isSingleMosaicItem: h,
      obscured: N,
      containerStyles: function(e, t, n) {
        if (!t)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: t
          } = (0, C.Tj)({
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
      }(a, P, c),
      obscurityControlClassName: l()({
        [A.obscureVideoSpacing]: 'VIDEO' === _ && h && !N && S
      }),
      onToggleObscurity: () => y(e => !e),
      children: e => Z(e)
    }) : Z(),
    x
  ]
})
  });
};