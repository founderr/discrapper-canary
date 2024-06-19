a.r(s), a.d(s, {
  default: function() {
    return y
  }
}), a(47120);
var n, t, l = a(735250),
  r = a(470079),
  c = a(120356),
  i = a.n(c),
  o = a(525654),
  d = a.n(o),
  u = a(873546),
  p = a(213919),
  f = a(442837),
  m = a(481060),
  x = a(391650),
  g = a(314897),
  O = a(594174),
  h = a(153124),
  N = a(626135),
  v = a(361207),
  D = a(792125),
  j = a(981631),
  A = a(689938),
  M = a(101934);
(t = n || (n = {}))[t.OSX = 0] = "OSX", t[t.WINDOWS = 1] = "WINDOWS", t[t.LINUX = 2] = "LINUX", t[t.IOS = 3] = "IOS", t[t.ANDROID = 4] = "ANDROID";
let L = [{
    getOs: () => A.Z.Messages.PLATFORM_MACOS,
    icon: M.apple,
    url: () => (0, v.w4)("osx", !1),
    platformKey: 0
  }, {
    getOs: () => A.Z.Messages.PLATFORM_WINDOWS,
    icon: M.windows,
    url: () => (0, v.w4)("win", !1),
    platformKey: 1
  }, {
    getOs: () => A.Z.Messages.PLATFORM_LINUX,
    icon: M.linux,
    url: [{
      url: () => (0, v.w4)("linux", !1, "deb"),
      getText: () => A.Z.Messages.DEB
    }, {
      url: () => (0, v.w4)("linux", !1, "tar.gz"),
      getText: () => A.Z.Messages.TAR_GZ
    }],
    platformKey: 2
  }],
  b = [{
    getOs: () => A.Z.Messages.PLATFORM_IOS,
    icon: M.ios,
    url: () => j.fzT.IOS,
    platformKey: 3
  }, {
    getOs: () => A.Z.Messages.PLATFORM_ANDROID,
    icon: M.android,
    url: () => j.fzT.ANDROID,
    platformKey: 4
  }],
  T = (0, D.Q)(j.BRd.LIGHT),
  _ = e => {
    let {
      url: s,
      text: a,
      onClick: n
    } = e;
    return (0, l.jsx)(m.Anchor, {
      useDefaultUnderlineStyles: !1,
      href: s,
      className: M.downloadButton,
      onClick: n,
      children: a
    })
  },
  S = e => {
    let s, {
        platform: a,
        onClick: n,
        onMouseEnter: t,
        isActive: r,
        claimed: c
      } = e,
      {
        getOs: o,
        icon: d,
        url: u,
        platformKey: p
      } = a,
      f = o(),
      x = i()(M.icon, d);
    if (Array.isArray(u)) s = u.map((e, s) => {
      let a = c ? e.url() : "";
      return (0, l.jsx)(_, {
        url: a,
        onClick: () => n(f),
        text: e.getText()
      }, "".concat(a, "-").concat(s))
    });
    else {
      let e = c ? u() : void 0;
      s = (0, l.jsx)(_, {
        url: e,
        onClick: () => n(f),
        text: A.Z.Messages.DOWNLOAD
      })
    }
    return (0, l.jsx)("li", {
      className: i()(M.platform, {
        [M.active]: r
      }),
      onMouseEnter: () => t(p),
      children: (0, l.jsxs)("div", {
        className: M.contentWrapper,
        children: [(0, l.jsxs)("div", {
          className: M.iconWrap,
          children: [(0, l.jsx)("div", {
            className: x
          }), (0, l.jsx)("div", {
            className: i()(M.active, x)
          })]
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsx)(m.Heading, {
            className: M.platformName,
            variant: "heading-lg/semibold",
            children: f
          }), (0, l.jsx)("div", {
            className: i()(M.downloadButtons, {
              [M.list]: Array.isArray(s)
            }),
            children: s
          })]
        })]
      })
    })
  };

function y(e) {
  let {
    source: s,
    onClose: a,
    transitionState: n
  } = e, t = (0, f.e7)([O.default], () => O.default.getCurrentUser()), c = (0, f.e7)([g.default], () => g.default.getFingerprint()), o = null == t || t.isClaimed(), [v, D] = r.useState(function() {
    var e;
    switch (null === (e = d().os) || void 0 === e ? void 0 : e.family) {
      case "OS X":
        return 0;
      case "Windows":
        return 1;
      case "Ubuntu":
      case "Debian":
      case "Fedora":
      case "Red Hat":
      case "SuSE":
      case "Linux":
        return 2;
      case "iOS":
        return 3;
      case "Android":
        return 4;
      default:
        return
    }
  }());

  function _(e) {
    (null != p.getToken() || null != c) && N.default.track(j.rMx.DOWNLOAD_APP, {
      platform: e,
      ptb: !1,
      released: !0,
      has_e_mail: o,
      referring_location: s,
      qr_code: !1
    }), !o && (a(), x.j())
  }

  function y(e) {
    D(e)
  }
  r.useEffect(() => {
    N.default.track(j.rMx.OPEN_MODAL, {
      type: "Download App",
      source: {
        location: s
      }
    })
  }, [s]);
  let I = (0, h.Dt)();
  return (0, l.jsx)(m.ModalRoot, {
    className: i()(M.downloadApps, T),
    transitionState: n,
    "aria-labelledby": I,
    children: (0, l.jsx)("div", {
      className: M.inner,
      children: (0, l.jsxs)(m.HeadingLevel, {
        component: (0, l.jsx)(m.HiddenVisually, {
          children: (0, l.jsx)(m.H, {
            id: I,
            children: A.Z.Messages.DOWNLOAD_APP
          })
        }),
        children: [(0, l.jsx)(m.ModalCloseButton, {
          onClick: a,
          className: M.modalCloseButton
        }), !u.tq && (0, l.jsx)("div", {
          className: M.platformsWrap,
          children: (0, l.jsx)(m.HeadingLevel, {
            component: (0, l.jsx)(m.Heading, {
              variant: "heading-lg/semibold",
              className: M.header,
              children: A.Z.Messages.DOWNLOAD_DESKTOP_TITLE
            }),
            children: (0, l.jsx)("ul", {
              className: M.platforms,
              children: L.map(e => (0, l.jsx)(S, {
                isActive: v === e.platformKey,
                platform: e,
                onClick: _,
                onMouseEnter: y,
                claimed: o
              }, e.platformKey))
            })
          })
        }), (0, l.jsx)("div", {
          className: M.platformsWrap,
          children: (0, l.jsxs)(m.HeadingLevel, {
            component: (0, l.jsx)(l.Fragment, {
              children: !u.tq && (0, l.jsx)(m.Heading, {
                variant: "heading-lg/semibold",
                className: M.header,
                children: A.Z.Messages.DOWNLOAD_MOBILE_TITLE
              })
            }),
            children: [(0, l.jsx)("ul", {
              className: M.platforms,
              children: b.map(e => (0, l.jsx)(S, {
                isActive: v === e.platformKey,
                platform: e,
                onClick: _,
                onMouseEnter: y,
                claimed: o
              }, e.platformKey))
            }), (0, l.jsx)(m.Text, {
              className: M.footer,
              variant: "text-sm/normal",
              children: A.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format()
            })]
          })
        })]
      })
    })
  })
}