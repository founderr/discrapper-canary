t.d(n, {
  Ld: function() {
return O;
  },
  OB: function() {
return A;
  },
  R_: function() {
return N;
  },
  aw: function() {
return w;
  },
  pU: function() {
return P;
  }
}), t(789020), t(47120);
var i = t(735250),
  o = t(470079),
  s = t(120356),
  l = t.n(s),
  a = t(481060),
  r = t(162609),
  u = t(167080),
  d = t(163268),
  m = t(25610),
  c = t(124347),
  h = t(976853),
  I = t(68588),
  x = t(941797),
  p = t(630388),
  g = t(956664),
  C = t(406432),
  f = t(169525),
  j = t(65838),
  T = t(217702),
  M = t(981631),
  E = t(689938),
  y = t(62233);
let v = /\.(mp3|m4a|ogg|wav|flac)$/i,
  N = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  O = e => 'IMAGE' === e || 'VIDEO' === e;

function A(e, n) {
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
if ((0, C.CO)(t))
  return 'IMAGE';
if (!(0, C.NU)(t) || null == e.proxy_url)
  return 'INVALID';
else {
  var s;
  return (0, p.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, M.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != n && v.test(t) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, j.O)(t))
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
return (0, C.tw)(t) ? 'IMAGE' : (0, C.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let _ = e => {
  let n, t, o, {
downloadURL: s,
downloadMimeType: r,
onRemoveItem: d,
onOpenImageAppPicker: m,
isVisualMediaType: c
  } = e;
  return (null != s && null != r && (n = (0, i.jsx)(a.Tooltip, {
text: E.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(u.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: y.hoverButton,
  iconClassName: y.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: s,
  mimeType: r
})
  })), null != d && (t = (0, i.jsx)(a.Tooltip, {
text: E.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: l()(y.hoverButton, y.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: d,
  'aria-label': E.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  })), null != m && (o = (0, i.jsx)(a.Tooltip, {
text: E.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: y.hoverButton,
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': E.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
  children: (0, i.jsx)(a.AppsIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  })), null == t && null == n && null == o) ? null : (0, i.jsxs)('div', {
className: l()(y.hoverButtonGroup, {
  [y.nonMediaMosaicItem]: !c
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
autoPlayGif: s,
canRemoveItem: u,
onRemoveItem: d,
onClick: m,
onContextMenu: I,
onPlay: p,
renderImageComponent: C,
renderVideoComponent: f,
renderAudioComponent: j,
renderPlaintextFilePreview: M,
renderGenericFileComponent: v,
className: N,
imgContainerClassName: O,
imgClassName: A,
focusable: w,
hiddenSpoilers: P,
mediaLayoutType: L,
maxWidth: S,
maxHeight: V,
hasFooter: b,
useFullWidth: F,
isVisualMediaType: k,
onVideoControlsShow: G,
onVideoControlsHide: B
  } = e, {
width: H,
height: R,
spoiler: D,
type: W,
contentType: Z
  } = t, [U, q] = o.useState(!1), z = n.getChannelId(), X = (0, h.Z)(z), J = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, $ = o.useMemo(() => null != Z && -1 !== Z.indexOf('/') ? Z.split('/') : [
'unknown',
'unknown'
  ], [Z]), K = o.useCallback(() => {
d(t);
  }, [
t,
d
  ]), Q = o.useCallback(() => () => {}, []), Y = o.useCallback(() => {
if (L === T.hV.MOSAIC) {
  let e = !X && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(W) || 'OTHER' === W,
    n = 'IMAGE' === W && !('gif' === $[1] || c.u.test(t.downloadUrl));
  if (k) {
    if (null == H || null == R)
      return null;
    let e = (0, g.Dc)({
      width: H,
      height: R,
      maxWidth: T.mT,
      maxHeight: T.Jj
    });
    if (!F && (e * H < T.OF || e * R < T.OF))
      return null;
  }
  return !U && (0, i.jsx)(_, {
    downloadURL: e ? t.downloadUrl : void 0,
    downloadMimeType: e ? $ : void 0,
    onRemoveItem: u ? K : void 0,
    onOpenImageAppPicker: n && J ? Q : void 0,
    isVisualMediaType: k
  });
}
return u && (0, i.jsx)(a.Clickable, {
  className: D ? y.spoilerRemoveMosaicItemButton : y.removeMosaicItemButton,
  focusProps: {
    offset: {
      bottom: 4
    }
  },
  onClick: () => d(t),
  'aria-label': E.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor'
  })
});
  }, [
L,
u,
D,
W,
k,
U,
t,
$,
K,
H,
R,
F,
d,
J,
Q,
X
  ]);
  switch (W) {
case 'IMAGE':
  return (0, i.jsx)(x.h.Consumer, {
    children: e => (0, i.jsx)(C, {
      item: t,
      message: n,
      width: H,
      height: R,
      autoPlay: s && !P,
      onClick: m,
      onContextMenu: I,
      shouldHideMediaOptions: X,
      renderAccessory: e,
      renderAdjacentContent: Y,
      containerClassName: N,
      className: O,
      imageClassName: A,
      shouldLink: w,
      hiddenSpoilers: P,
      responsive: !0,
      mediaLayoutType: L,
      maxWidth: S,
      maxHeight: V,
      useFullWidth: F
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: t,
    message: n,
    width: H,
    height: R,
    onClick: m,
    onContextMenu: I,
    renderAdjacentContent: Y,
    naturalWidth: H,
    naturalHeight: R,
    className: l()(N, {
      [y.hasFooter]: b
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: L,
    maxWidth: S,
    maxHeight: V,
    useFullWidth: F,
    mimeType: $,
    onControlsShow: G,
    onControlsHide: B,
    downloadable: !X,
    mediaPlayerClassName: b ? y.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(j, {
    item: t,
    message: n,
    className: N,
    playable: w,
    mimeType: $,
    renderAdjacentContent: Y,
    onVolumeShow: () => q(!0),
    onVolumeHide: () => q(!1),
    onPlay: p
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(M, {
    item: t,
    message: n,
    className: N,
    onClick: m,
    onContextMenu: I,
    renderAdjacentContent: Y
  });
case 'OTHER':
  return (0, i.jsx)(v, {
    item: t,
    message: n,
    className: N,
    onClick: m,
    onContextMenu: I,
    renderAdjacentContent: Y
  });
case 'INVALID':
  return null;
  }
}
n.ZP = function(e) {
  var n;
  let {
className: t,
item: s,
message: a,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: c,
isSingleMosaicItem: h,
footer: x,
...p
  } = e, {
width: C,
height: j,
type: M
  } = s, E = r(s, (0, m.V)(a.channel_id, a.author.id)), [v, O] = o.useState(null != E), A = c === T.hV.MOSAIC, w = !A && (null != C && C < 200 || null != j && j < 50);
  let P = 'IMAGE' === (n = M) || 'VIDEO' === n,
_ = N(M),
S = h && null != E && (0, d.bR)(C, j),
[V, b] = o.useState(!1),
F = () => {
  b(!0);
},
k = () => {
  b(!1);
},
G = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(L, {
    ...p,
    item: s,
    message: a,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: l()(t, y.mosaicItemContent, {
      [y.obscured]: v && !w,
      [y.hiddenSpoiler]: v && E === f.wk.SPOILER,
      [y.hiddenExplicit]: v && null != E && [
        f.wk.EXPLICIT_CONTENT,
        f.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(E),
      [y.hiddenMosaicItem]: v && e,
      [y.inline]: v && w
    }),
    focusable: !e,
    mediaLayoutType: c,
    hasFooter: null != x,
    useFullWidth: !!S || u,
    isVisualMediaType: _,
    onVideoControlsShow: F,
    onVideoControlsHide: k
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(y.mosaicItem, {
    [y.mosaicItemNoJustify]: P,
    [y.mosaicItemFullWidth]: u,
    [y.mosaicItemMediaMosaic]: A,
    [y.hideOverflow]: A && _,
    [y.mosaicItemWithFooter]: null != x
  }),
  children: [
    null != E ? (0, i.jsx)(I.Z, {
      type: I.Z.Types.ATTACHMENT,
      inline: w,
      reason: E,
      isSingleMosaicItem: h,
      obscured: v,
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
          ...t !== T.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(s, P, c),
      obscurityControlClassName: l()({
        [y.obscureVideoSpacing]: 'VIDEO' === M && h && !v && V
      }),
      onToggleObscurity: () => O(e => !e),
      children: e => G(e)
    }) : G(),
    x
  ]
})
  });
};