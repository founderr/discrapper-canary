"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  r = a("120356"),
  l = a.n(r),
  o = a("442837"),
  d = a("481060"),
  i = a("607070"),
  u = a("605236"),
  c = a("524444"),
  _ = a("529815"),
  E = a("250496"),
  m = a("153124"),
  M = a("26290"),
  A = a("810090"),
  I = a("626135"),
  R = a("565216"),
  f = a("981631"),
  O = a("921944"),
  g = a("816277");
let T = e => {
    let {
      tagText: t,
      className: a
    } = e;
    return (0, s.jsx)(M.TextBadge, {
      className: l()(g.tag, a),
      text: t
    })
  },
  h = e => {
    let {
      header: t,
      subHeader: a,
      imageSrc: n,
      tagText: r,
      wideStyle: o
    } = e;
    return (0, s.jsxs)("div", {
      className: l()(g.featureCard, {
        [g.wideStyle]: o
      }),
      children: [null != r ? (0, s.jsx)(T, {
        tagText: r,
        className: g.featureCardTag
      }) : null, (0, s.jsx)("img", {
        alt: "",
        className: l()(g.featureCardImg, {
          [g.wideStyle]: o
        }),
        src: n
      }), (0, s.jsxs)("div", {
        className: g.featureCardTextGroup,
        children: [(0, s.jsx)(d.Heading, {
          variant: "heading-lg/extrabold",
          className: g.featureCardTextHeader,
          children: t
        }), (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: a
        })]
      })]
    })
  };

function p(e) {
  let {
    className: t,
    renderModalProps: a,
    heroArt: r,
    heroArtClassName: M,
    modalDismissibleContent: T,
    modalTopExtra: p,
    header: L,
    headerClassName: C,
    subHeader: N,
    subHeaderExtra: P,
    featureCards: x,
    changeLogId: D,
    button: b
  } = e, {
    onClose: S,
    transitionState: y
  } = a, v = (0, m.useUID)(), j = x.length % 2 == 0, H = (0, o.useStateFromStores)([i.default], () => i.default.useReducedMotion), [U, F] = n.useState(Date.now()), [k, G] = n.useState(0), [w, B] = n.useState(0), [V, K] = n.useState(!1), [Y, W] = n.useState(!0), z = n.useRef(U), q = n.useRef(k), Z = n.useRef(w), J = n.useRef(V), Q = n.useRef(Y);

  function X() {
    let e = Date.now(),
      t = e - z.current,
      a = q.current,
      s = Z.current;
    return J.current && (G(a += t), !Q.current && B(s += t)), F(e), [a, s]
  }
  return n.useEffect(() => {
    z.current = U, q.current = k, Z.current = w, J.current = V, Q.current = Y
  }, [U, k, w, V, Y]), n.useEffect(() => () => {
    let [e, t] = X();
    I.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
      change_log_id: D,
      seconds_played: Math.round(e / 1e3)
    }), I.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
      change_log_id: D,
      seconds_unmuted: Math.round(t / 1e3)
    })
  }, [D]), n.useEffect(() => {
    null != T && (0, u.requestMarkDismissibleContentAsShown)(T);
    let e = Date.now();
    return I.default.track(f.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: D
    }), () => {
      I.default.track(f.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: D,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != T && (0, u.markDismissibleContentAsDismissed)(T, {
        dismissAction: O.ContentDismissActionType.DISMISS
      })
    }
  }, [T, D]), (0, s.jsxs)(d.ModalRoot, {
    className: l()(g.root, t),
    transitionState: y,
    "aria-labelledby": v,
    children: [(0, s.jsx)(d.ModalCloseButton, {
      className: g.closeButton,
      onClick: S
    }), (0, s.jsx)(R.default, {
      className: g.splash
    }), null == p ? void 0 : p(), (0, s.jsxs)(d.ModalContent, {
      className: g.content,
      children: [(0, s.jsx)(d.Heading, {
        variant: "display-md",
        className: l()(g.headerText, C),
        children: L
      }), "video" === r.type ? (0, s.jsx)(A.default, {
        className: l()(g.video, M),
        autoPlay: !H,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: r.src,
        poster: r.poster,
        onPlay: e => {
          I.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: D
          }), F(Date.now()), K(!0), W(e.currentTarget.muted)
        },
        onEnded: e => {
          X(), W(e.currentTarget.muted), K(!1)
        },
        onVolumeChange: e => {
          X(), W(e.currentTarget.muted)
        },
        onPause: e => {
          X(), W(e.currentTarget.muted), K(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === r.type ? (0, s.jsx)(_.EmbedVideo, {
        className: l()(g.video, M),
        allowFullScreen: !1,
        href: r.href,
        thumbnail: r.thumbnail,
        video: r.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: r.embed.width,
        maxHeight: r.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          I.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: D
          })
        }
      }) : "image" === r.type ? (0, s.jsx)("img", {
        alt: "",
        className: l()(g.video, M),
        src: r.src
      }) : null, (0, s.jsx)(d.Heading, {
        variant: "heading-lg/extrabold",
        className: g.bodyText,
        children: N
      }), null == P ? void 0 : P(), (0, s.jsx)("div", {
        className: l()(g.featureCardGroup, {
          [g.wideStyle]: j
        }),
        children: x.map((e, t) => (0, s.jsx)(h, {
          ...e,
          wideStyle: j
        }, "".concat(e.header, "_").concat(t)))
      }), b()]
    })]
  })
}