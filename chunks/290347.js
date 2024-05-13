"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("607070"),
  d = n("605236"),
  c = n("524444"),
  f = n("529815"),
  E = n("250496"),
  h = n("153124"),
  _ = n("26290"),
  C = n("810090"),
  m = n("626135"),
  S = n("565216"),
  p = n("981631"),
  I = n("921944"),
  g = n("627583");
let T = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, a.jsx)(_.TextBadge, {
      className: i()(g.tag, n),
      text: t
    })
  },
  A = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: s,
      tagText: l,
      wideStyle: r
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(g.featureCard, {
        [g.wideStyle]: r
      }),
      children: [null != l ? (0, a.jsx)(T, {
        tagText: l,
        className: g.featureCardTag
      }) : null, (0, a.jsx)("img", {
        alt: "",
        className: i()(g.featureCardImg, {
          [g.wideStyle]: r
        }),
        src: s
      }), (0, a.jsxs)("div", {
        className: g.featureCardTextGroup,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: g.featureCardTextHeader,
          children: t
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })
  };

function N(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: l,
    heroArtClassName: _,
    modalDismissibleContent: T,
    modalTopExtra: N,
    header: v,
    headerClassName: R,
    subHeader: L,
    subHeaderExtra: O,
    featureCards: M,
    changeLogId: y,
    button: P
  } = e, {
    onClose: x,
    transitionState: D
  } = n, b = (0, h.useUID)(), U = M.length % 2 == 0, j = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [G, k] = s.useState(Date.now()), [w, F] = s.useState(0), [B, H] = s.useState(0), [V, Y] = s.useState(!1), [W, K] = s.useState(!0), z = s.useRef(G), q = s.useRef(w), Q = s.useRef(B), Z = s.useRef(V), X = s.useRef(W);

  function J() {
    let e = Date.now(),
      t = e - z.current,
      n = q.current,
      a = Q.current;
    return Z.current && (F(n += t), !X.current && H(a += t)), k(e), [n, a]
  }
  return s.useEffect(() => {
    z.current = G, q.current = w, Q.current = B, Z.current = V, X.current = W
  }, [G, w, B, V, W]), s.useEffect(() => () => {
    if ("video" === l.type || "embed" === l.type) {
      let [e, t] = J();
      m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: y,
        seconds_played: Math.round(e / 1e3)
      }), m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: y,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [y, l]), s.useEffect(() => {
    null != T && (0, d.requestMarkDismissibleContentAsShown)(T);
    let e = Date.now();
    return m.default.track(p.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: y
    }), () => {
      m.default.track(p.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: y,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != T && (0, d.markDismissibleContentAsDismissed)(T, {
        dismissAction: I.ContentDismissActionType.DISMISS
      })
    }
  }, [T, y]), (0, a.jsxs)(o.ModalRoot, {
    className: i()(g.root, t),
    transitionState: D,
    "aria-labelledby": b,
    children: [(0, a.jsx)(o.ModalCloseButton, {
      className: g.closeButton,
      onClick: x
    }), (0, a.jsx)(S.default, {
      className: g.splash
    }), null == N ? void 0 : N(), (0, a.jsxs)(o.ModalContent, {
      className: g.content,
      children: [(0, a.jsx)(o.Heading, {
        variant: "display-md",
        className: i()(g.headerText, R),
        children: v
      }), "video" === l.type ? (0, a.jsx)(C.default, {
        className: i()(g.video, _),
        autoPlay: !j,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: l.src,
        poster: l.poster,
        onPlay: e => {
          m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: y
          }), k(Date.now()), Y(!0), K(e.currentTarget.muted)
        },
        onEnded: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        onVolumeChange: e => {
          J(), K(e.currentTarget.muted)
        },
        onPause: e => {
          J(), K(e.currentTarget.muted), Y(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === l.type ? (0, a.jsx)(f.EmbedVideo, {
        className: i()(g.video, _),
        allowFullScreen: !1,
        href: l.href,
        thumbnail: l.thumbnail,
        video: l.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: l.embed.width,
        maxHeight: l.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: y
          })
        }
      }) : "image" === l.type ? (0, a.jsx)("img", {
        alt: "",
        className: i()(g.video, _),
        src: l.src
      }) : null, (0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: g.bodyText,
        children: L
      }), null == O ? void 0 : O(), (0, a.jsx)("div", {
        className: i()(g.featureCardGroup, {
          [g.wideStyle]: U
        }),
        children: M.map((e, t) => (0, a.jsx)(A, {
          ...e,
          wideStyle: U
        }, "".concat(e.header, "_").concat(t)))
      }), P()]
    })]
  })
}