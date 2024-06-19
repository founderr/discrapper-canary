n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(605236),
  d = n(524444),
  E = n(529815),
  h = n(250496),
  _ = n(153124),
  I = n(810090),
  m = n(626135),
  g = n(565216),
  p = n(981631),
  T = n(921944),
  N = n(437738);
let S = e => {
    let {
      tagText: t,
      className: n
    } = e;
    return (0, i.jsx)(o.TextBadge, {
      className: a()(N.tag, n),
      text: t
    })
  },
  C = e => {
    let {
      header: t,
      subHeader: n,
      imageSrc: s,
      tagText: l,
      wideStyle: r
    } = e;
    return (0, i.jsxs)("div", {
      className: a()(N.featureCard, {
        [N.wideStyle]: r
      }),
      children: [null != l ? (0, i.jsx)(S, {
        tagText: l,
        className: N.featureCardTag
      }) : null, (0, i.jsx)("img", {
        alt: "",
        className: a()(N.featureCardImg, {
          [N.wideStyle]: r
        }),
        src: s
      }), (0, i.jsxs)("div", {
        className: N.featureCardTextGroup,
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-lg/extrabold",
          className: N.featureCardTextHeader,
          children: t
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: n
        })]
      })]
    })
  };

function A(e) {
  let {
    className: t,
    renderModalProps: n,
    heroArt: l,
    heroArtClassName: S,
    modalDismissibleContent: A,
    modalTopExtra: f,
    header: Z,
    headerClassName: v,
    subHeader: L,
    subHeaderExtra: O,
    featureCards: R,
    changeLogId: x,
    button: M
  } = e, {
    onClose: P,
    transitionState: D
  } = n, b = (0, _.Dt)(), y = R.length % 2 == 0, j = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), [U, G] = s.useState(Date.now()), [w, k] = s.useState(0), [B, H] = s.useState(0), [V, F] = s.useState(!1), [Y, z] = s.useState(!0), W = s.useRef(U), K = s.useRef(w), q = s.useRef(B), Q = s.useRef(V), X = s.useRef(Y);

  function J() {
    let e = Date.now(),
      t = e - W.current,
      n = K.current,
      i = q.current;
    return Q.current && (k(n += t), !X.current && H(i += t)), G(e), [n, i]
  }
  return s.useEffect(() => {
    W.current = U, K.current = w, q.current = B, Q.current = V, X.current = Y
  }, [U, w, B, V, Y]), s.useEffect(() => () => {
    if ("video" === l.type || "embed" === l.type) {
      let [e, t] = J();
      m.default.track(p.rMx.CHANGE_LOG_VIDEO_PLAYED, {
        change_log_id: x,
        seconds_played: Math.round(e / 1e3)
      }), m.default.track(p.rMx.CHANGE_LOG_VIDEO_UNMUTE, {
        change_log_id: x,
        seconds_unmuted: Math.round(t / 1e3)
      })
    }
  }, [x, l]), s.useEffect(() => {
    null != A && (0, u.kk)(A);
    let e = Date.now();
    return m.default.track(p.rMx.CHANGE_LOG_OPENED, {
      change_log_id: x
    }), () => {
      m.default.track(p.rMx.CHANGE_LOG_CLOSED, {
        change_log_id: x,
        seconds_open: Math.round((Date.now() - e) / 1e3)
      }), null != A && (0, u.EW)(A, {
        dismissAction: T.L.DISMISS
      })
    }
  }, [A, x]), (0, i.jsxs)(o.ModalRoot, {
    className: a()(N.root, t),
    transitionState: D,
    "aria-labelledby": b,
    children: [(0, i.jsx)(o.ModalCloseButton, {
      className: N.closeButton,
      onClick: P
    }), (0, i.jsx)(g.Z, {
      className: N.splash
    }), null == f ? void 0 : f(), (0, i.jsxs)(o.ModalContent, {
      className: N.content,
      children: [(0, i.jsx)(o.Heading, {
        variant: "display-md",
        className: a()(N.headerText, v),
        children: Z
      }), "video" === l.type ? (0, i.jsx)(I.Z, {
        className: a()(N.video, S),
        autoPlay: !j,
        loop: !0,
        muted: !0,
        controls: !0,
        controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
        src: l.src,
        poster: l.poster,
        onPlay: e => {
          m.default.track(p.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: x
          }), G(Date.now()), F(!0), z(e.currentTarget.muted)
        },
        onEnded: e => {
          J(), z(e.currentTarget.muted), F(!1)
        },
        onVolumeChange: e => {
          J(), z(e.currentTarget.muted)
        },
        onPause: e => {
          J(), z(e.currentTarget.muted), F(!1)
        },
        disablePictureInPicture: !0
      }) : "embed" === l.type ? (0, i.jsx)(E.BC, {
        className: a()(N.video, S),
        allowFullScreen: !1,
        href: l.href,
        thumbnail: l.thumbnail,
        video: l.embed,
        provider: h.pn.YOUTUBE,
        maxWidth: l.embed.width,
        maxHeight: l.embed.height,
        renderVideoComponent: d.lV,
        renderImageComponent: d.Yi,
        renderLinkComponent: d.iT,
        renderForwardComponent: p.VqG,
        onPlay: () => {
          m.default.track(p.rMx.CHANGE_LOG_VIDEO_INTERACTED, {
            change_log_id: x
          })
        }
      }) : "image" === l.type ? (0, i.jsx)("img", {
        alt: "",
        className: a()(N.video, S),
        src: l.src
      }) : null, (0, i.jsx)(o.Heading, {
        variant: "heading-lg/extrabold",
        className: N.bodyText,
        children: L
      }), null == O ? void 0 : O(), (0, i.jsx)("div", {
        className: a()(N.featureCardGroup, {
          [N.wideStyle]: y
        }),
        children: R.map((e, t) => (0, i.jsx)(C, {
          ...e,
          wideStyle: y
        }, "".concat(e.header, "_").concat(t)))
      }), M()]
    })]
  })
}