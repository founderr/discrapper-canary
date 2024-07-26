n.d(t, {
  Z: function() {
return Z;
  }
}), n(47120), n(411104), n(315314), n(610138), n(216116), n(78328), n(815648);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(330711),
  o = n(442837),
  c = n(481060),
  d = n(607070),
  u = n(446411),
  _ = n(468846),
  h = n(605236),
  E = n(524444),
  I = n(153124),
  m = n(810090),
  g = n(626135),
  p = n(960048),
  T = n(565216),
  f = n(981631),
  S = n(921944),
  C = n(757601);
let N = [],
  A = e => {
let {
  tagText: t,
  className: n
} = e;
return (0, i.jsx)(c.TextBadge, {
  className: r()(C.tag, n),
  text: t
});
  },
  v = e => {
let {
  header: t,
  subHeader: n,
  imageSrc: s,
  tagText: a,
  wideStyle: l
} = e;
return (0, i.jsxs)('div', {
  className: r()(C.featureCard, {
    [C.wideStyle]: l
  }),
  children: [
    null != a ? (0, i.jsx)(A, {
      tagText: a,
      className: C.featureCardTag
    }) : null,
    (0, i.jsx)('img', {
      alt: '',
      className: r()(C.featureCardImg, {
        [C.wideStyle]: l
      }),
      src: s
    }),
    (0, i.jsxs)('div', {
      className: C.featureCardTextGroup,
      children: [
        (0, i.jsx)(c.Heading, {
          variant: 'heading-md/extrabold',
          className: C.featureCardTextHeader,
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

function Z(e) {
  let {
className: t,
renderModalProps: n,
heroArt: a,
heroArtClassName: A,
modalDismissibleContent: Z,
modalTopExtra: L,
header: O,
headerClassName: R,
subHeader: x,
subHeaderExtra: b,
featureCards: P,
changeLogId: M,
button: D,
body: y
  } = e, {
onClose: j,
transitionState: U
  } = n, G = (0, I.Dt)(), k = P.length % 2 == 0, w = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [B, H] = s.useState(Date.now()), [V, F] = s.useState(0), [Y, W] = s.useState(0), [z, K] = s.useState(!1), [q, Q] = s.useState(!0), X = s.useRef(B), J = s.useRef(V), $ = s.useRef(Y), ee = s.useRef(z), et = s.useRef(q), [en, ei] = s.useState(N), es = s.useRef(!1);

  function ea() {
let e = Date.now(),
  t = e - X.current,
  n = J.current,
  i = $.current;
return ee.current && (F(n += t), !et.current && W(i += t)), H(e), [
  n,
  i
];
  }
  return s.useEffect(() => {
let e = async () => {
  try {
    var e;
    if ('video' !== a.type || null == a.subtitles)
      return;
    let t = null === (e = a.subtitles) || void 0 === e ? void 0 : e.map(async e => {
      let t = await fetch(e.src);
      if (!t.ok)
        throw Error('Failed to fetch the subtitle file '.concat(e.src));
      let n = await t.text(),
        i = new Blob([n], {
          type: 'text/vtt'
        }),
        s = URL.createObjectURL(i);
      return {
        ...e,
        src: s
      };
    });
    ei(await Promise.all(t));
  } catch (e) {
    p.Z.captureException(e), ei(N);
  }
};
!0 !== es.current && e(), es.current = !0;
  }, [
a,
en
  ]), s.useEffect(() => () => {
null != en && en.forEach(e => {
  URL.revokeObjectURL(e.src);
});
  }, [en]), s.useEffect(() => {
X.current = B, J.current = V, $.current = Y, ee.current = z, et.current = q;
  }, [
B,
V,
Y,
z,
q
  ]), s.useEffect(() => () => {
if ('video' === a.type || 'embed' === a.type) {
  let [e, t] = ea();
  g.default.track(f.rMx.CHANGE_LOG_VIDEO_PLAYED, {
    change_log_id: M,
    seconds_played: Math.round(e / 1000)
  }), g.default.track(f.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
    change_log_id: M,
    seconds_unmuted: Math.round(t / 1000)
  });
}
  }, [
M,
a.type
  ]), s.useEffect(() => {
null != Z && (0, h.kk)(Z);
let e = Date.now();
return g.default.track(f.rMx.CHANGE_LOG_OPENED, {
  change_log_id: M
}), () => {
  g.default.track(f.rMx.CHANGE_LOG_CLOSED, {
    change_log_id: M,
    seconds_open: Math.round((Date.now() - e) / 1000)
  }), null != Z && (0, h.EW)(Z, {
    dismissAction: S.L.DISMISS
  });
};
  }, [
Z,
M
  ]), (0, i.jsxs)(c.ModalRoot, {
className: r()(C.root, t),
transitionState: U,
'aria-labelledby': G,
children: [
  (0, i.jsx)(c.ModalCloseButton, {
    className: C.closeButton,
    onClick: j
  }),
  (0, i.jsx)(T.Z, {
    className: C.splash
  }),
  null == L ? void 0 : L(),
  (0, i.jsxs)(c.ModalContent, {
    className: C.content,
    children: [
      (0, i.jsx)(c.Heading, {
        variant: 'display-md',
        className: r()(C.headerText, R),
        children: O
      }),
      'video' === a.type ? (0, i.jsx)(m.Z, {
        className: r()(C.video, A),
        autoPlay: !w,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: 'nofullscreen nodownload noremoteplayback noplaybackrate',
        src: a.src,
        poster: a.poster,
        onPlay: e => {
          g.default.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
          }), H(Date.now()), K(!0), Q(e.currentTarget.muted);
        },
        onEnded: e => {
          ea(), Q(e.currentTarget.muted), K(!1);
        },
        onVolumeChange: e => {
          ea(), Q(e.currentTarget.muted);
        },
        onPause: e => {
          ea(), Q(e.currentTarget.muted), K(!1);
        },
        disablePictureInPicture: !0,
        children: null == en ? void 0 : en.map(e => {
          let t = l.Z.getLanguages().find(t => t.code === e.locale);
          return null == t ? null : (0, i.jsx)('track', {
            label: t.englishName,
            kind: 'captions',
            srcLang: t.code,
            src: e.src,
            default: e.isDefault
          }, e.locale);
        })
      }) : 'embed' === a.type ? (0, i.jsx)(u.BC, {
        className: r()(C.video, A),
        allowFullScreen: !1,
        href: a.href,
        thumbnail: a.thumbnail,
        video: a.embed,
        provider: _.pn.YOUTUBE,
        maxWidth: a.embed.width,
        maxHeight: a.embed.height,
        renderVideoComponent: E.lV,
        renderImageComponent: E.Yi,
        renderLinkComponent: E.iT,
        renderForwardComponent: f.VqG,
        onPlay: () => {
          g.default.track(f.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
          });
        }
      }) : 'image' === a.type ? (0, i.jsx)('img', {
        alt: '',
        className: r()(C.video, A),
        src: a.src
      }) : null,
      (0, i.jsxs)(c.Heading, {
        variant: 'heading-lg/semibold',
        className: C.subHeader,
        children: [
          x,
          null == b ? void 0 : b()
        ]
      }),
      null != y && (0, i.jsx)(c.Heading, {
        variant: 'heading-md/medium',
        className: C.bodyText,
        children: y
      }),
      (0, i.jsx)('div', {
        className: r()(C.featureCardGroup, {
          [C.wideStyle]: k
        }),
        children: P.map((e, t) => (0, i.jsx)(v, {
          ...e,
          wideStyle: k
        }, ''.concat(e.header, '_').concat(t)))
      }),
      D()
    ]
  })
]
  });
}