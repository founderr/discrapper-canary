t.d(n, {
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
  I = t(592125),
  x = t(68588),
  p = t(941797),
  g = t(630388),
  C = t(956664),
  f = t(406432),
  j = t(169525),
  T = t(65838),
  M = t(217702),
  E = t(981631),
  y = t(689938),
  v = t(62233);
let N = /\.(mp3|m4a|ogg|wav|flac)$/i,
  O = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  A = e => 'IMAGE' === e || 'VIDEO' === e;

function w(e, n) {
  return {
uniqueId: e.id,
originalItem: e,
type: P(e, n),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function P(e, n) {
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
  var s;
  return (0, g.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, E.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != n && N.test(t) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, T.O)(t))
return 'PLAINTEXT_PREVIEW';
  return 'OTHER';
}

function _(e, n) {
  let {
contentType: t,
width: i,
height: o
  } = e;
  if (n && i > 0 && o > 0)
return (0, f.tw)(t) ? 'IMAGE' : (0, f.X2)(t) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let L = e => {
  let n, t, o, {
downloadURL: s,
downloadMimeType: r,
onRemoveItem: d,
onOpenImageAppPicker: m,
isVisualMediaType: c
  } = e;
  return (null != s && null != r && (n = (0, i.jsx)(a.Tooltip, {
text: y.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(u.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: v.hoverButton,
  iconClassName: v.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: s,
  mimeType: r
})
  })), null != d && (t = (0, i.jsx)(a.Tooltip, {
text: y.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: l()(v.hoverButton, v.removeMosaicItemHoverButton),
  focusProps: {
    offset: 2
  },
  onClick: d,
  'aria-label': y.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.TrashIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  })), null != m && (o = (0, i.jsx)(a.Tooltip, {
text: y.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
children: e => (0, i.jsx)(a.Clickable, {
  ...e,
  className: v.hoverButton,
  focusProps: {
    offset: 2
  },
  onClick: m,
  'aria-label': y.Z.Messages.APP_IMAGE_REC_USE_APP_TOOLTIP,
  children: (0, i.jsx)(a.AppsIcon, {
    size: 'custom',
    color: 'currentColor',
    width: 20,
    height: 20
  })
})
  })), null == t && null == n && null == o) ? null : (0, i.jsxs)('div', {
className: l()(v.hoverButtonGroup, {
  [v.nonMediaMosaicItem]: !c
}),
children: [
  o,
  n,
  t
]
  });
};

function S(e) {
  let {
message: n,
item: t,
autoPlayGif: s,
canRemoveItem: u,
onRemoveItem: d,
onClick: m,
onContextMenu: x,
onPlay: g,
renderImageComponent: f,
renderVideoComponent: j,
renderAudioComponent: T,
renderPlaintextFilePreview: E,
renderGenericFileComponent: N,
className: O,
imgContainerClassName: A,
imgClassName: w,
focusable: P,
hiddenSpoilers: _,
mediaLayoutType: S,
maxWidth: V,
maxHeight: b,
hasFooter: F,
useFullWidth: k,
isVisualMediaType: G,
onVideoControlsShow: B,
onVideoControlsHide: H
  } = e, {
width: R,
height: D,
spoiler: W,
type: Z,
contentType: U
  } = t, [q, z] = o.useState(!1), X = n.getChannelId(), J = (0, h.Z)(X), $ = I.Z.getChannel(X), K = r.P.useExperiment({
location: 'MediaMosaicItem',
guildId: null == $ ? void 0 : $.guild_id
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, Q = o.useMemo(() => null != U && -1 !== U.indexOf('/') ? U.split('/') : [
'unknown',
'unknown'
  ], [U]), Y = o.useCallback(() => {
d(t);
  }, [
t,
d
  ]), ee = o.useCallback(() => () => {}, []), en = o.useCallback(() => {
if (S === M.hV.MOSAIC) {
  let e = !J && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(Z) || 'OTHER' === Z,
    n = 'IMAGE' === Z && !('gif' === Q[1] || c.u.test(t.downloadUrl));
  if (G) {
    if (null == R || null == D)
      return null;
    let e = (0, C.Dc)({
      width: R,
      height: D,
      maxWidth: M.mT,
      maxHeight: M.Jj
    });
    if (!k && (e * R < M.OF || e * D < M.OF))
      return null;
  }
  return !q && (0, i.jsx)(L, {
    downloadURL: e ? t.downloadUrl : void 0,
    downloadMimeType: e ? Q : void 0,
    onRemoveItem: u ? Y : void 0,
    onOpenImageAppPicker: n && K ? ee : void 0,
    isVisualMediaType: G
  });
}
return u && (0, i.jsx)(a.Clickable, {
  className: W ? v.spoilerRemoveMosaicItemButton : v.removeMosaicItemButton,
  focusProps: {
    offset: {
      bottom: 4
    }
  },
  onClick: () => d(t),
  'aria-label': y.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(a.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor'
  })
});
  }, [
S,
u,
W,
Z,
G,
q,
t,
Q,
Y,
R,
D,
k,
d,
K,
ee,
J
  ]);
  switch (Z) {
case 'IMAGE':
  return (0, i.jsx)(p.h.Consumer, {
    children: e => (0, i.jsx)(f, {
      item: t,
      message: n,
      width: R,
      height: D,
      autoPlay: s && !_,
      onClick: m,
      onContextMenu: x,
      shouldHideMediaOptions: J,
      renderAccessory: e,
      renderAdjacentContent: en,
      containerClassName: O,
      className: A,
      imageClassName: w,
      shouldLink: P,
      hiddenSpoilers: _,
      responsive: !0,
      mediaLayoutType: S,
      maxWidth: V,
      maxHeight: b,
      useFullWidth: k
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(j, {
    item: t,
    message: n,
    width: R,
    height: D,
    onClick: m,
    onContextMenu: x,
    renderAdjacentContent: en,
    naturalWidth: R,
    naturalHeight: D,
    className: l()(O, {
      [v.hasFooter]: F
    }),
    playable: P,
    responsive: !0,
    mediaLayoutType: S,
    maxWidth: V,
    maxHeight: b,
    useFullWidth: k,
    mimeType: Q,
    onControlsShow: B,
    onControlsHide: H,
    downloadable: !J,
    mediaPlayerClassName: F ? v.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(T, {
    item: t,
    message: n,
    className: O,
    playable: P,
    mimeType: Q,
    renderAdjacentContent: en,
    onVolumeShow: () => z(!0),
    onVolumeHide: () => z(!1),
    onPlay: g
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(E, {
    item: t,
    message: n,
    className: O,
    onClick: m,
    onContextMenu: x,
    renderAdjacentContent: en
  });
case 'OTHER':
  return (0, i.jsx)(N, {
    item: t,
    message: n,
    className: O,
    onClick: m,
    onContextMenu: x,
    renderAdjacentContent: en
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
footer: I,
...p
  } = e, {
width: g,
height: f,
type: T
  } = s, E = r(s, (0, m.V)(a.channel_id, a.author.id)), [y, N] = o.useState(null != E), A = c === M.hV.MOSAIC, w = !A && (null != g && g < 200 || null != f && f < 50);
  let P = 'IMAGE' === (n = T) || 'VIDEO' === n,
_ = O(T),
L = h && null != E && (0, d.bR)(g, f),
[V, b] = o.useState(!1),
F = () => {
  b(!0);
},
k = () => {
  b(!1);
},
G = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(S, {
    ...p,
    item: s,
    message: a,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: l()(t, v.mosaicItemContent, {
      [v.obscured]: y && !w,
      [v.hiddenSpoiler]: y && E === j.wk.SPOILER,
      [v.hiddenExplicit]: y && null != E && [
        j.wk.EXPLICIT_CONTENT,
        j.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(E),
      [v.hiddenMosaicItem]: y && e,
      [v.inline]: y && w
    }),
    focusable: !e,
    mediaLayoutType: c,
    hasFooter: null != I,
    useFullWidth: !!L || u,
    isVisualMediaType: _,
    onVideoControlsShow: F,
    onVideoControlsHide: k
  });
};
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: l()(v.mosaicItem, {
    [v.mosaicItemNoJustify]: P,
    [v.mosaicItemFullWidth]: u,
    [v.mosaicItemMediaMosaic]: A,
    [v.hideOverflow]: A && _,
    [v.mosaicItemWithFooter]: null != I
  }),
  children: [
    null != E ? (0, i.jsx)(x.Z, {
      type: x.Z.Types.ATTACHMENT,
      inline: w,
      reason: E,
      isSingleMosaicItem: h,
      obscured: y,
      containerStyles: function(e, n, t) {
        if (!n)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: n
          } = (0, C.Tj)({
            width: e.width,
            height: e.height,
            maxWidth: 400,
            maxHeight: 300
          });
          i = n;
        }
        return {
          ...t !== M.hV.MOSAIC && {
            maxWidth: null != i ? i : '400px'
          },
          width: '100%',
          height: '100%',
          justifySelf: 'auto'
        };
      }(s, P, c),
      obscurityControlClassName: l()({
        [v.obscureVideoSpacing]: 'VIDEO' === T && h && !y && V
      }),
      onToggleObscurity: () => N(e => !e),
      children: e => G(e)
    }) : G(),
    I
  ]
})
  });
};