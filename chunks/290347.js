n.d(t, {
  Z: function() {
return A;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(330711),
  o = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(605236),
  _ = n(524444),
  E = n(529815),
  h = n(250496),
  I = n(153124),
  m = n(810090),
  g = n(626135),
  p = n(565216),
  T = n(981631),
  f = n(921944),
  S = n(757601);
let C = e => {
let {
  tagText: t,
  className: n
} = e;
return (0, i.jsx)(c.TextBadge, {
  className: r()(S.tag, n),
  text: t
});
  },
  N = e => {
let {
  header: t,
  subHeader: n,
  imageSrc: a,
  tagText: s,
  wideStyle: l
} = e;
return (0, i.jsxs)('div', {
  className: r()(S.featureCard, {
    [S.wideStyle]: l
  }),
  children: [
    null != s ? (0, i.jsx)(C, {
      tagText: s,
      className: S.featureCardTag
    }) : null,
    (0, i.jsx)('img', {
      alt: '',
      className: r()(S.featureCardImg, {
        [S.wideStyle]: l
      }),
      src: a
    }),
    (0, i.jsxs)('div', {
      className: S.featureCardTextGroup,
      children: [
        (0, i.jsx)(c.Heading, {
          variant: 'heading-md/extrabold',
          className: S.featureCardTextHeader,
          children: t
        }),
        (0, i.jsx)(c.Text, {
          variant: 'text-sm/normal',
          children: n
        })
      ]
    })
  ]
});
  };

function A(e) {
  let {
className: t,
renderModalProps: n,
heroArt: s,
heroArtClassName: C,
modalDismissibleContent: A,
modalTopExtra: v,
header: Z,
headerClassName: L,
subHeader: O,
subHeaderExtra: R,
featureCards: x,
changeLogId: b,
button: P,
body: M
  } = e, {
onClose: D,
transitionState: y
  } = n, j = (0, I.Dt)(), U = x.length % 2 == 0, G = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [k, w] = a.useState(Date.now()), [B, H] = a.useState(0), [V, F] = a.useState(0), [Y, W] = a.useState(!1), [z, K] = a.useState(!0), q = a.useRef(k), Q = a.useRef(B), X = a.useRef(V), J = a.useRef(Y), $ = a.useRef(z);

  function ee() {
let e = Date.now(),
  t = e - q.current,
  n = Q.current,
  i = X.current;
return J.current && (H(n += t), !$.current && F(i += t)), w(e), [
  n,
  i
];
  }
  return a.useEffect(() => {
q.current = k, Q.current = B, X.current = V, J.current = Y, $.current = z;
  }, [
k,
B,
V,
Y,
z
  ]), a.useEffect(() => () => {
if ('video' === s.type || 'embed' === s.type) {
  let [e, t] = ee();
  g.default.track(T.rMx.CHANGE_LOG_VIDEO_PLAYED, {
    change_log_id: b,
    seconds_played: Math.round(e / 1000)
  }), g.default.track(T.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
    change_log_id: b,
    seconds_unmuted: Math.round(t / 1000)
  });
}
  }, [
b,
s
  ]), a.useEffect(() => {
null != A && (0, u.kk)(A);
let e = Date.now();
return g.default.track(T.rMx.CHANGE_LOG_OPENED, {
  change_log_id: b
}), () => {
  g.default.track(T.rMx.CHANGE_LOG_CLOSED, {
    change_log_id: b,
    seconds_open: Math.round((Date.now() - e) / 1000)
  }), null != A && (0, u.EW)(A, {
    dismissAction: f.L.DISMISS
  });
};
  }, [
A,
b
  ]), (0, i.jsxs)(c.ModalRoot, {
className: r()(S.root, t),
transitionState: y,
'aria-labelledby': j,
children: [
  (0, i.jsx)(c.ModalCloseButton, {
    className: S.closeButton,
    onClick: D
  }),
  (0, i.jsx)(p.Z, {
    className: S.splash
  }),
  null == v ? void 0 : v(),
  (0, i.jsxs)(c.ModalContent, {
    className: S.content,
    children: [
      (0, i.jsx)(c.Heading, {
        variant: 'display-md',
        className: r()(S.headerText, L),
        children: Z
      }),
      (() => {
        if ('video' === s.type) {
          var e;
          return (0, i.jsx)(m.Z, {
            className: r()(S.video, C),
            autoPlay: !G,
            loop: !0,
            muted: !0,
            controls: !0,
            controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
            src: s.src,
            poster: s.poster,
            onPlay: e => {
              g.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
                change_log_id: b
              }), w(Date.now()), W(!0), K(e.currentTarget.muted);
            },
            onEnded: e => {
              ee(), K(e.currentTarget.muted), W(!1);
            },
            onVolumeChange: e => {
              ee(), K(e.currentTarget.muted);
            },
            onPause: e => {
              ee(), K(e.currentTarget.muted), W(!1);
            },
            disablePictureInPicture: !0,
            children: null === (e = s.subtitles) || void 0 === e ? void 0 : e.map(e => {
              let t = l.Z.getLanguages().find(t => t.code === e.locale);
              return null == t ? null : (0, i.jsx)('track', {
                label: t.englishName,
                kind: 'subtitles',
                srcLang: t.code,
                src: e.src,
                default: e.isDefault
              }, e.locale);
            })
          });
        }
        return 'embed' === s.type ? (0, i.jsx)(E.BC, {
          className: r()(S.video, C),
          allowFullScreen: !1,
          href: s.href,
          thumbnail: s.thumbnail,
          video: s.embed,
          provider: h.pn.YOUTUBE,
          maxWidth: s.embed.width,
          maxHeight: s.embed.height,
          renderVideoComponent: _.lV,
          renderImageComponent: _.Yi,
          renderLinkComponent: _.iT,
          renderForwardComponent: T.VqG,
          onPlay: () => {
            g.default.track(T.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
              change_log_id: b
            });
          }
        }) : 'image' === s.type ? (0, i.jsx)('img', {
          alt: '',
          className: r()(S.video, C),
          src: s.src
        }) : null;
      })(),
      (0, i.jsxs)(c.Heading, {
        variant: 'heading-lg/semibold',
        className: S.subHeader,
        children: [
          O,
          null == R ? void 0 : R()
        ]
      }),
      null != M && (0, i.jsx)(c.Heading, {
        variant: 'heading-md/medium',
        className: S.bodyText,
        children: M
      }),
      (0, i.jsx)('div', {
        className: r()(S.featureCardGroup, {
          [S.wideStyle]: U
        }),
        children: x.map((e, t) => (0, i.jsx)(N, {
          ...e,
          wideStyle: U
        }, ''.concat(e.header, '_').concat(t)))
      }),
      P()
    ]
  })
]
  });
}