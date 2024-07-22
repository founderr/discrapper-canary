n.d(t, {
  Ld: function() {
return A;
  },
  OB: function() {
return w;
  },
  R_: function() {
return O;
  },
  aw: function() {
return P;
  },
  pU: function() {
return _;
  }
}), n(789020), n(47120);
var i = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  a = n(481060),
  r = n(162609),
  u = n(370298),
  d = n(167080),
  c = n(163268),
  m = n(25610),
  h = n(124347),
  p = n(976853),
  I = n(68588),
  x = n(941797),
  g = n(630388),
  C = n(956664),
  f = n(406432),
  j = n(169525),
  M = n(65838),
  T = n(217702),
  E = n(981631),
  v = n(689938),
  y = n(62233);
let N = /\.(mp3|m4a|ogg|wav|flac)$/i,
  O = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  A = e => 'IMAGE' === e || 'VIDEO' === e;

function w(e, t) {
  return {
uniqueId: e.id,
originalItem: e,
type: P(e, t),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function P(e, t) {
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
  var s;
  return (0, g.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, E.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != t && N.test(n) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, M.O)(n))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function _(e, t) {
  let {
contentType: n,
width: i,
height: o
  } = e;
  if (t && i > 0 && o > 0)
return (0, f.tw)(n) ? 'IMAGE' : (0, f.X2)(n) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let L = e => {
  let t, n, s, {
downloadURL: r,
downloadMimeType: c,
onRemoveItem: m,
showImageAppPicker: h,
isVisualMediaType: p
  } = e;
  null != r && null != c && (t = (0, i.jsx)(a.Tooltip, {
text: v.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(d.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: y.hoverButton,
  iconClassName: y.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: r,
  mimeType: c
})
  })), null != m && (n = (0, i.jsx)(a.Tooltip, {
text: v.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: l()(y.hoverButton, y.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  }));
  let [I, x] = o.useState(!1), g = o.useCallback(() => x(e => !e), []);
  return (h && (s = (0, i.jsx)(u.Z, {
toggleShowMenu: g,
showMenu: I,
className: l()(y.hoverButton, {
  [y.selected]: I
})
  })), null == n && null == t && null == s) ? null : (0, i.jsxs)('div', {
className: l()(y.hoverButtonGroup, {
  [y.nonMediaMosaicItem]: !p,
  [y.forceShowHover]: I
}),
children: [
  s,
  t,
  n
]
  });
};

function S(e) {
  let {
message: t,
item: n,
autoPlayGif: s,
canRemoveItem: u,
onRemoveItem: d,
onClick: c,
onContextMenu: m,
onPlay: I,
renderImageComponent: g,
renderVideoComponent: f,
renderAudioComponent: j,
renderPlaintextFilePreview: M,
renderGenericFileComponent: E,
className: N,
imgContainerClassName: O,
imgClassName: A,
focusable: w,
hiddenSpoilers: P,
mediaLayoutType: _,
maxWidth: S,
maxHeight: b,
hasFooter: V,
useFullWidth: F,
isVisualMediaType: k,
onVideoControlsShow: R,
onVideoControlsHide: G
  } = e, {
width: B,
height: H,
spoiler: D,
type: W,
contentType: Z
  } = n, [U, q] = o.useState(!1), z = t.getChannelId(), X = (0, p.Z)(z), J = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, $ = o.useMemo(() => null != Z && -1 !== Z.indexOf('/') ? Z.split('/') : [
'unknown',
'unknown'
  ], [Z]), K = o.useCallback(() => {
d(n);
  }, [
n,
d
  ]), Q = o.useCallback(() => {
if (_ === T.hV.MOSAIC) {
  let e = !X && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(W) || 'OTHER' === W,
    t = 'IMAGE' === W && !h.u.test(n.downloadUrl);
  if (k) {
    if (null == B || null == H)
      return null;
    let e = (0, C.Dc)({
      width: B,
      height: H,
      maxWidth: T.mT,
      maxHeight: T.Jj
    });
    if (!F && (e * B < T.OF || e * H < T.OF))
      return null;
  }
  return !U && (0, i.jsx)(L, {
    downloadURL: e ? n.downloadUrl : void 0,
    downloadMimeType: e ? $ : void 0,
    onRemoveItem: u ? K : void 0,
    showImageAppPicker: t && J,
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
  onClick: () => d(n),
  'aria-label': v.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor'
  })
});
  }, [
_,
u,
D,
W,
k,
U,
n,
$,
K,
B,
H,
F,
d,
J,
X
  ]);
  switch (W) {
case 'IMAGE':
  return (0, i.jsx)(x.h.Consumer, {
    children: e => (0, i.jsx)(g, {
      item: n,
      message: t,
      width: B,
      height: H,
      autoPlay: s && !P,
      onClick: c,
      onContextMenu: m,
      shouldHideMediaOptions: X,
      renderAccessory: e,
      renderAdjacentContent: Q,
      containerClassName: N,
      className: O,
      imageClassName: A,
      shouldLink: w,
      hiddenSpoilers: P,
      responsive: !0,
      mediaLayoutType: _,
      maxWidth: S,
      maxHeight: b,
      useFullWidth: F
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(f, {
    item: n,
    message: t,
    width: B,
    height: H,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: Q,
    naturalWidth: B,
    naturalHeight: H,
    className: l()(N, {
      [y.hasFooter]: V
    }),
    playable: w,
    responsive: !0,
    mediaLayoutType: _,
    maxWidth: S,
    maxHeight: b,
    useFullWidth: F,
    mimeType: $,
    onControlsShow: R,
    onControlsHide: G,
    downloadable: !X,
    mediaPlayerClassName: V ? y.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(j, {
    item: n,
    message: t,
    className: N,
    playable: w,
    mimeType: $,
    renderAdjacentContent: Q,
    onVolumeShow: () => q(!0),
    onVolumeHide: () => q(!1),
    onPlay: I
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(M, {
    item: n,
    message: t,
    className: N,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: Q
  });
case 'OTHER':
  return (0, i.jsx)(E, {
    item: n,
    message: t,
    className: N,
    onClick: c,
    onContextMenu: m,
    renderAdjacentContent: Q
  });
case 'INVALID':
  return null;
  }
}
t.ZP = function(e) {
  var t;
  let {
className: n,
item: s,
message: a,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: d,
isSingleMosaicItem: h,
footer: p,
...x
  } = e, {
width: g,
height: f,
type: M
  } = s, E = r(s, (0, m.V)(a.channel_id, a.author.id)), [v, N] = o.useState(null != E), A = d === T.hV.MOSAIC, w = !A && (null != g && g < 200 || null != f && f < 50);
  let P = 'IMAGE' === (t = M) || 'VIDEO' === t,
_ = O(M),
L = h && null != E && (0, c.bR)(g, f),
[b, V] = o.useState(!1),
F = () => {
  V(!0);
},
k = () => {
  V(!1);
},
R = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(S, {
    ...x,
    item: s,
    message: a,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: l()(n, y.mosaicItemContent, {
      [y.obscured]: v && !w,
      [y.hiddenSpoiler]: v && E === j.wk.SPOILER,
      [y.hiddenExplicit]: v && null != E && [
        j.wk.EXPLICIT_CONTENT,
        j.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(E),
      [y.hiddenMosaicItem]: v && e,
      [y.inline]: v && w
    }),
    focusable: !e,
    mediaLayoutType: d,
    hasFooter: null != p,
    useFullWidth: !!L || u,
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
    [y.mosaicItemWithFooter]: null != p
  }),
  children: [
    null != E ? (0, i.jsx)(I.Z, {
      type: I.Z.Types.ATTACHMENT,
      inline: w,
      reason: E,
      isSingleMosaicItem: h,
      obscured: v,
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
      }(s, P, d),
      obscurityControlClassName: l()({
        [y.obscureVideoSpacing]: 'VIDEO' === M && h && !v && b
      }),
      onToggleObscurity: () => N(e => !e),
      children: e => R(e)
    }) : R(),
    p
  ]
})
  });
};