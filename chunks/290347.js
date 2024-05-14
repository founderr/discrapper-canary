"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
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
  g = n("921944"),
  I = n("627583");
let T = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, a.jsx)(_.TextBadge, {
      className: l()(I.tag, n),
      text: t
    })
  },
  A = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: s,
      tagText: i,
      wideStyle: r
    } = e;
    return (0, a.jsxs)("div", {
      className: l()(I.featureCard, {
        [I.wideStyle]: r
      }),
      children: [null != i ? (0, a.jsx)(T, {
        tagText: i,
        className: I.featureCardTag
      }) : null, (0, a.jsx)("img", {
        alt: "",
        className: l()(I.featureCardImg, {
          [I.wideStyle]: r
        }),
        src: s
      }), (0, a.jsxs)("div", {
        className: I.featureCardTextGroup,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: I.featureCardTextHeader,
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
    heroArt: i,
    heroArtClassName: _,
    modalDismissibleContent: T,
    modalTopExtra: N,
    header: v,
    headerClassName: R,
    subHeader: L,
    subHeaderExtra: O,
    featureCards: y,
    changeLogId: M,
    button: P
  } = e, {
    onClose: x,
    transitionState: D
  } = n, b = (0, h.useUID)(), U = y.length % 2 == 0, j = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [G, k] = s.useState(Date.now()), [w, F] = s.useState(0), [B, H] = s.useState(0), [V, Y] = s.useState(!1), [W, K] = s.useState(!0), z = s.useRef(G), q = s.useRef(w), Q = s.useRef(B), Z = s.useRef(V), X = s.useRef(W);

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
    if ("video" === i.type || "embed" === i.type) {
      let [e, t] = J();
      m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: M,
        seconds_played: Math.round(e / 1e3)
      }), m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: M,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [M, i]), s.useEffect(() => {
    null != T && (0, d.requestMarkDismissibleContentAsShown)(T);
    let e = Date.now();
    return m.default.track(p.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: M
    }), () => {
      m.default.track(p.AnalyticEvents.CHANGE_LOG_CLOSED, {
        change_log_id: M,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != T && (0, d.markDismissibleContentAsDismissed)(T, {
        dismissAction: g.ContentDismissActionType.DISMISS
      })
    }
  }, [T, M]), (0, a.jsxs)(o.ModalRoot, {
    className: l()(I.root, t),
    transitionState: D,
    "aria-labelledby": b,
    children: [(0, a.jsx)(o.ModalCloseButton, {
      className: I.closeButton,
      onClick: x
    }), (0, a.jsx)(S.default, {
      className: I.splash
    }), null == N ? void 0 : N(), (0, a.jsxs)(o.ModalContent, {
      className: I.content,
      children: [(0, a.jsx)(o.Heading, {
        variant: "display-md",
        className: l()(I.headerText, R),
        children: v
      }), "video" === i.type ? (0, a.jsx)(C.default, {
        className: l()(I.video, _),
        autoPlay: !j,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: i.src,
        poster: i.poster,
        onPlay: e => {
          m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
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
      }) : "embed" === i.type ? (0, a.jsx)(f.EmbedVideo, {
        className: l()(I.video, _),
        allowFullScreen: !1,
        href: i.href,
        thumbnail: i.thumbnail,
        video: i.embed,
        provider: E.SupportedEmbedIFrame.YOUTUBE,
        maxWidth: i.embed.width,
        maxHeight: i.embed.height,
        renderVideoComponent: c.renderVideoComponent,
        renderImageComponent: c.renderImageComponent,
        renderLinkComponent: c.renderMaskedLinkComponent,
        onPlay: () => {
          m.default.track(p.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: M
          })
        }
      }) : "image" === i.type ? (0, a.jsx)("img", {
        alt: "",
        className: l()(I.video, _),
        src: i.src
      }) : null, (0, a.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: I.bodyText,
        children: L
      }), null == O ? void 0 : O(), (0, a.jsx)("div", {
        className: l()(I.featureCardGroup, {
          [I.wideStyle]: U
        }),
        children: y.map((e, t) => (0, a.jsx)(A, {
          ...e,
          wideStyle: U
        }, "".concat(e.header, "_").concat(t)))
      }), P()]
    })]
  })
}