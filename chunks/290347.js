a.d(t, {
  Z: function() {
    return f
  }
}), a(47120);
var r = a(735250),
  n = a(470079),
  s = a(120356),
  o = a.n(s),
  l = a(442837),
  c = a(481060),
  d = a(607070),
  i = a(605236),
  u = a(524444),
  _ = a(529815),
  N = a(250496),
  E = a(153124),
  h = a(810090),
  g = a(626135),
  m = a(565216),
  O = a(981631),
  M = a(921944),
  C = a(437738);
let A = e => {
    let {
      tagText: t,
      className: a
    } = e;
    return (0, r.jsx)(c.TextBadge, {
      className: o()(C.tag, a),
      text: t
    })
  },
  p = e => {
    let {
      header: t,
      subHeader: a,
      imageSrc: n,
      tagText: s,
      wideStyle: l
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(C.featureCard, {
        [C.wideStyle]: l
      }),
      children: [null != s ? (0, r.jsx)(A, {
        tagText: s,
        className: C.featureCardTag
      }) : null, (0, r.jsx)("img", {
        alt: "",
        className: o()(C.featureCardImg, {
          [C.wideStyle]: l
        }),
        src: n
      }), (0, r.jsxs)("div", {
        className: C.featureCardTextGroup,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-lg/extrabold",
          className: C.featureCardTextHeader,
          children: t
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: a
        })]
      })]
    })
  };

function f(e) {
  let {
    className: t,
    renderModalProps: a,
    heroArt: s,
    heroArtClassName: A,
    modalDismissibleContent: f,
    modalTopExtra: x,
    header: D,
    headerClassName: T,
    subHeader: b,
    subHeaderExtra: R,
    featureCards: G,
    changeLogId: L,
    button: v
  } = e, {
    onClose: y,
    transitionState: B
  } = a, S = (0, E.Dt)(), j = G.length % 2 == 0, H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [w, I] = n.useState(Date.now()), [Z, U] = n.useState(0), [k, P] = n.useState(0), [V, Y] = n.useState(!1), [z, F] = n.useState(!0), W = n.useRef(w), q = n.useRef(Z), K = n.useRef(k), X = n.useRef(V), Q = n.useRef(z);

  function J() {
    let e = Date.now(),
      t = e - W.current,
      a = q.current,
      r = K.current;
    return X.current && (U(a += t), !Q.current && P(r += t)), I(e), [a, r]
  }
  return n.useEffect(() => {
    W.current = w, q.current = Z, K.current = k, X.current = V, Q.current = z
  }, [w, Z, k, V, z]), n.useEffect(() => () => {
    if ("video" === s.type || "embed" === s.type) {
      let [e, t] = J();
      g.default.track(O.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: L,
        seconds_played: Math.round(e / 1e3)
      }), g.default.track(O.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: L,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [L, s]), n.useEffect(() => {
    null != f && (0, i.kk)(f);
    let e = Date.now();
    return g.default.track(O.rMx.CHANGE_LOG_OPENED, {
      change_log_id: L
    }), () => {
      g.default.track(O.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: L,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != f && (0, i.EW)(f, {
        dismissAction: M.L.DISMISS
      })
    }
  }, [f, L]), (0, r.jsxs)(c.ModalRoot, {
    className: o()(C.root, t),
    transitionState: B,
    "aria-labelledby": S,
    children: [(0, r.jsx)(c.ModalCloseButton, {
      className: C.closeButton,
      onClick: y
    }), (0, r.jsx)(m.Z, {
      className: C.splash
    }), null == x ? void 0 : x(), (0, r.jsxs)(c.ModalContent, {
      className: C.content,
      children: [(0, r.jsx)(c.Heading, {
        variant: "display-md",
        className: o()(C.headerText, T),
        children: D
      }), "video" === s.type ? (0, r.jsx)(h.Z, {
        className: o()(C.video, A),
        autoPlay: !H,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: s.src,
        poster: s.poster,
        onPlay: e => {
          g.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: L
          }), I(Date.now()), Y(!0), F(e.currentTarget.muted)
        },
        onEnded: e => {
          J(), F(e.currentTarget.muted), Y(!1)
        },
        onVolumeChange: e => {
          J(), F(e.currentTarget.muted)
        },
        onPause: e => {
          J(), F(e.currentTarget.muted), Y(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === s.type ? (0, r.jsx)(_.BC, {
        className: o()(C.video, A),
        allowFullScreen: !1,
        href: s.href,
        thumbnail: s.thumbnail,
        video: s.embed,
        provider: N.pn.YOUTUBE,
        maxWidth: s.embed.width,
        maxHeight: s.embed.height,
        renderVideoComponent: u.lV,
        renderImageComponent: u.Yi,
        renderLinkComponent: u.iT,
        renderForwardComponent: O.VqG,
        onPlay: () => {
          g.default.track(O.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: L
          })
        }
      }) : "image" === s.type ? (0, r.jsx)("img", {
        alt: "",
        className: o()(C.video, A),
        src: s.src
      }) : null, (0, r.jsx)(c.Heading, {
        variant: "heading-lg/extrabold",
        className: C.bodyText,
        children: b
      }), null == R ? void 0 : R(), (0, r.jsx)("div", {
        className: o()(C.featureCardGroup, {
          [C.wideStyle]: j
        }),
        children: G.map((e, t) => (0, r.jsx)(p, {
          ...e,
          wideStyle: j
        }, "".concat(e.header, "_").concat(t)))
      }), v()]
    })]
  })
}