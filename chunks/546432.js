n.d(t, {
  Ld: function() {
return v;
  },
  OB: function() {
return P;
  },
  R_: function() {
return _;
  },
  aw: function() {
return y;
  },
  pU: function() {
return S;
  }
}), n(789020), n(47120);
var i = n(735250),
  o = n(470079),
  l = n(120356),
  a = n.n(l),
  s = n(481060),
  r = n(162609),
  u = n(370298),
  c = n(167080),
  d = n(163268),
  m = n(25610),
  h = n(124347),
  I = n(976853),
  p = n(68588),
  E = n(941797),
  C = n(630388),
  M = n(956664),
  x = n(406432),
  f = n(169525),
  g = n(65838),
  T = n(217702),
  N = n(981631),
  A = n(689938),
  O = n(670347);
let j = /\.(mp3|m4a|ogg|wav|flac)$/i,
  _ = e => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
  v = e => 'IMAGE' === e || 'VIDEO' === e;

function P(e, t) {
  return {
uniqueId: e.id,
originalItem: e,
type: y(e, t),
downloadUrl: e.url,
height: e.height,
width: e.width,
spoiler: e.spoiler,
contentType: e.content_type
  };
}

function y(e, t) {
  let {
filename: n,
width: i,
height: o
  } = e;
  if (t && null != i && i > 0 && null != o && o > 0) {
if ((0, x.CO)(n))
  return 'IMAGE';
if (!(0, x.NU)(n) || null == e.proxy_url)
  return 'INVALID';
else {
  var l;
  return (0, C.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, N.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
}
  }
  if (null != t && j.test(n) && null != e.url)
return 'AUDIO';
  if (null != e.url && (0, g.O)(n))
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
return (0, x.tw)(n) ? 'IMAGE' : (0, x.X2)(n) ? 'VIDEO' : 'INVALID';
  return 'OTHER';
}
let w = e => {
  let t, n, l, {
downloadURL: r,
downloadMimeType: d,
onRemoveItem: m,
showImageAppPicker: h,
isVisualMediaType: I,
channelId: p
  } = e;
  null != r && null != d && (t = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.DOWNLOAD,
children: e => (0, i.jsx)(c.Z, {
  ...e,
  target: '_blank',
  rel: 'noreferrer noopener',
  className: O.hoverButton,
  iconClassName: O.downloadHoverButtonIcon,
  focusProps: {
    offset: 2
  },
  href: r,
  mimeType: d
})
  })), null != m && (n = (0, i.jsx)(s.Tooltip, {
text: A.Z.Messages.REMOVE_ATTACHMENT_TOOLTIP_TEXT,
children: e => (0, i.jsx)(s.Clickable, {
  ...e,
  className: a()(O.hoverButton, O.removeMosaicItemHoverButton),
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
  let [E, C] = o.useState(!1), M = o.useCallback(() => C(e => !e), []);
  return (h && (l = (0, i.jsx)(u.Z, {
toggleShowMenu: M,
showMenu: E,
channelId: p,
className: a()(O.hoverButton, {
  [O.selected]: E
})
  })), null == n && null == t && null == l) ? null : (0, i.jsxs)('div', {
className: a()(O.hoverButtonGroup, {
  [O.nonMediaMosaicItem]: !I,
  [O.forceShowHover]: E
}),
children: [
  l,
  t,
  n
]
  });
};

function R(e) {
  let {
message: t,
item: n,
autoPlayGif: l,
canRemoveItem: u,
onRemoveItem: c,
onClick: d,
onContextMenu: m,
onPlay: p,
renderImageComponent: C,
renderVideoComponent: x,
renderAudioComponent: f,
renderPlaintextFilePreview: g,
renderGenericFileComponent: N,
className: j,
imgContainerClassName: _,
imgClassName: v,
focusable: P,
hiddenSpoilers: y,
mediaLayoutType: S,
maxWidth: R,
maxHeight: F,
hasFooter: L,
useFullWidth: b,
isVisualMediaType: D,
onVideoControlsShow: Z,
onVideoControlsHide: H
  } = e, {
width: G,
height: V,
spoiler: k,
type: B,
contentType: U
  } = n, [W, z] = o.useState(!1), q = t.getChannelId(), X = (0, I.Z)(q), J = r.P.useExperiment({
location: 'MediaMosaicItem'
  }, {
autoTrackExposure: !0
  }).imageRecsEnabled, $ = o.useMemo(() => null != U && -1 !== U.indexOf('/') ? U.split('/') : [
'unknown',
'unknown'
  ], [U]), K = o.useCallback(() => {
c(n);
  }, [
n,
c
  ]), Q = o.useCallback(() => {
if (S === T.hV.MOSAIC) {
  let e = !X && [
      'VIDEO',
      'CLIP',
      'AUDIO'
    ].includes(B) || 'OTHER' === B,
    t = 'IMAGE' === B && !h.u.test(n.downloadUrl);
  if (D) {
    if (null == G || null == V)
      return null;
    let e = (0, M.Dc)({
      width: G,
      height: V,
      maxWidth: T.mT,
      maxHeight: T.Jj
    });
    if (!b && (e * G < T.OF || e * V < T.OF))
      return null;
  }
  return !W && (0, i.jsx)(w, {
    downloadURL: e ? n.downloadUrl : void 0,
    downloadMimeType: e ? $ : void 0,
    onRemoveItem: u ? K : void 0,
    showImageAppPicker: t && J,
    isVisualMediaType: D,
    channelId: q
  });
}
return u && (0, i.jsx)(s.Clickable, {
  className: k ? O.spoilerRemoveMosaicItemButton : O.removeMosaicItemButton,
  focusProps: {
    offset: {
      bottom: 4
    }
  },
  onClick: () => c(n),
  'aria-label': A.Z.Messages.REMOVE_MESSAGE_ATTACHMENT,
  children: (0, i.jsx)(s.CloseSmallIcon, {
    size: 'xs',
    color: 'currentColor'
  })
});
  }, [
S,
u,
k,
B,
D,
W,
n,
$,
K,
G,
V,
b,
c,
J,
X,
q
  ]);
  switch (B) {
case 'IMAGE':
  return (0, i.jsx)(E.h.Consumer, {
    children: e => (0, i.jsx)(C, {
      item: n,
      message: t,
      width: G,
      height: V,
      autoPlay: l && !y,
      onClick: d,
      onContextMenu: m,
      shouldHideMediaOptions: X,
      renderAccessory: e,
      renderAdjacentContent: Q,
      containerClassName: j,
      className: _,
      imageClassName: v,
      shouldLink: P,
      hiddenSpoilers: y,
      responsive: !0,
      mediaLayoutType: S,
      maxWidth: R,
      maxHeight: F,
      useFullWidth: b
    })
  });
case 'VIDEO':
case 'CLIP':
  return (0, i.jsx)(x, {
    item: n,
    message: t,
    width: G,
    height: V,
    onClick: d,
    onContextMenu: m,
    renderAdjacentContent: Q,
    naturalWidth: G,
    naturalHeight: V,
    className: a()(j, {
      [O.hasFooter]: L
    }),
    playable: P,
    responsive: !0,
    mediaLayoutType: S,
    maxWidth: R,
    maxHeight: F,
    useFullWidth: b,
    mimeType: $,
    onControlsShow: Z,
    onControlsHide: H,
    downloadable: !X,
    mediaPlayerClassName: L ? O.hasFooter : void 0
  });
case 'AUDIO':
  return (0, i.jsx)(f, {
    item: n,
    message: t,
    className: j,
    playable: P,
    mimeType: $,
    renderAdjacentContent: Q,
    onVolumeShow: () => z(!0),
    onVolumeHide: () => z(!1),
    onPlay: p
  });
case 'PLAINTEXT_PREVIEW':
  return (0, i.jsx)(g, {
    item: n,
    message: t,
    className: j,
    onClick: d,
    onContextMenu: m,
    renderAdjacentContent: Q
  });
case 'OTHER':
  return (0, i.jsx)(N, {
    item: n,
    message: t,
    className: j,
    onClick: d,
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
item: l,
message: s,
getObscureReason: r,
useFullWidth: u,
mediaLayoutType: c,
isSingleMosaicItem: h,
footer: I,
...E
  } = e, {
width: C,
height: x,
type: g
  } = l, N = r(l, (0, m.V)(s.channel_id, s.author.id)), [A, j] = o.useState(null != N), v = c === T.hV.MOSAIC, P = !v && (null != C && C < 200 || null != x && x < 50);
  let y = 'IMAGE' === (t = g) || 'VIDEO' === t,
S = _(g),
w = h && null != N && (0, d.bR)(C, x),
[F, L] = o.useState(!1),
b = () => {
  L(!0);
},
D = () => {
  L(!1);
},
Z = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return (0, i.jsx)(R, {
    ...E,
    item: l,
    message: s,
    getObscureReason: r,
    hiddenSpoilers: e,
    className: a()(n, O.mosaicItemContent, {
      [O.obscured]: A && !P,
      [O.hiddenSpoiler]: A && N === f.wk.SPOILER,
      [O.hiddenExplicit]: A && null != N && [
        f.wk.EXPLICIT_CONTENT,
        f.wk.POTENTIAL_EXPLICIT_CONTENT
      ].includes(N),
      [O.hiddenMosaicItem]: A && e,
      [O.inline]: A && P
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
  className: a()(O.mosaicItem, {
    [O.mosaicItemNoJustify]: y,
    [O.mosaicItemFullWidth]: u,
    [O.mosaicItemMediaMosaic]: v,
    [O.hideOverflow]: v && S,
    [O.mosaicItemWithFooter]: null != I
  }),
  children: [
    null != N ? (0, i.jsx)(p.Z, {
      type: p.Z.Types.ATTACHMENT,
      inline: P,
      reason: N,
      isSingleMosaicItem: h,
      obscured: A,
      containerStyles: function(e, t, n) {
        if (!t)
          return;
        let i = e.width;
        if (void 0 !== e.width && void 0 !== e.height) {
          let {
            width: t
          } = (0, M.Tj)({
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
      }(l, y, c),
      obscurityControlClassName: a()({
        [O.obscureVideoSpacing]: 'VIDEO' === g && h && !A && F
      }),
      onToggleObscurity: () => j(e => !e),
      children: e => Z(e)
    }) : Z(),
    I
  ]
})
  });
};