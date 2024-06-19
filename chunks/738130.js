t.d(n, {
  Z: function() {
    return V
  }
});
var l = t(735250),
  i = t(470079),
  r = t(120356),
  s = t.n(r),
  o = t(392711),
  a = t(772848),
  c = t(873546),
  u = t(481060),
  d = t(425493),
  C = t(612226),
  p = t(714338),
  h = t(782568),
  f = t(252618),
  m = t(434404),
  v = t(703656),
  E = t(292665),
  g = t(671533),
  A = t(626135),
  Z = t(63063),
  _ = t(674588),
  x = t(463571),
  M = t(887706),
  L = t(132871),
  N = t(147890),
  R = t(981631),
  j = t(420212),
  I = t(689938),
  y = t(232329);
let P = Z.Z.getArticleURL(R.BhN.APP_DIRECTORY_HEADER_LEARN_MORE);

function T(e) {
  let {
    onClose: n
  } = e, t = i.useRef(null);
  return (0, l.jsx)("div", {
    ref: t,
    className: y.closeWrapper,
    children: (0, l.jsx)(u.FocusRingScope, {
      containerRef: t,
      children: (0, l.jsx)("div", {
        className: y.closeContent,
        children: (0, l.jsx)(d.Z, {
          className: y.closeIcon,
          closeAction: n,
          keybind: "ESC"
        })
      })
    })
  })
}

function S(e) {
  let {
    onTitleClick: n,
    showsLearnMoreCta: t,
    guildId: r,
    children: o
  } = e, a = (0, l.jsxs)(i.Fragment, {
    children: [(0, l.jsx)(E.Z, {
      title: I.Z.Messages.APP_DIRECTORY
    }), t && (0, l.jsx)(u.Anchor, {
      onClick: function() {
        A.default.track(R.rMx.APP_DIRECTORY_CTA_CLICKED, {
          cta: "directory-help-center",
          current_page: L.ApplicationDirectoryViews.HOME,
          guild_id: r
        }), (0, h.Z)(P)
      },
      children: I.Z.Messages.LEARN_MORE
    })]
  });
  return (0, l.jsxs)("div", {
    className: y.header,
    children: [null != n ? (0, l.jsx)(x.Z, {
      href: R.Z5c.APPLICATION_DIRECTORY,
      children: (0, l.jsx)(u.Clickable, {
        onClick: n,
        className: s()(y.titleContainer, y.clickable),
        children: a
      })
    }) : (0, l.jsx)("div", {
      className: y.titleContainer,
      children: a
    }), o]
  })
}

function O(e) {
  let n, {
    view: t,
    onClick: i
  } = e;
  if (null == t) return null;
  switch (t.type) {
    case L.ApplicationDirectoryViews.HOME:
      n = I.Z.Messages.HOME;
      break;
    case L.ApplicationDirectoryViews.SEARCH:
      n = I.Z.Messages.SEARCH;
      break;
    case L.ApplicationDirectoryViews.APPLICATION:
      var r;
      n = null !== (r = null == t ? void 0 : t.applicationName) && void 0 !== r ? r : I.Z.Messages.BACK;
      break;
    default:
      n = I.Z.Messages.BACK
  }
  return (0, l.jsxs)(u.Clickable, {
    className: y.back,
    onClick: i,
    children: [(0, l.jsx)(g.Z, {
      direction: g.Z.Directions.LEFT,
      className: y.backIcon
    }), (0, l.jsx)(u.Heading, {
      className: y.backHeader,
      variant: "heading-sm/semibold",
      children: n
    })]
  })
}
let D = (0, o.debounce)(e => {
  let {
    scrollTop: n,
    scrollOffset: t,
    scrollHeight: l,
    location: i,
    guildId: r,
    sessionId: s
  } = e;
  n > 0 && A.default.track(R.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
    scroll_visible_percentile: (n + t) / l,
    guild_id: r,
    location: i,
    directory_session_id: s
  })
}, 200);

function V(e) {
  let {
    children: n
  } = e, t = i.useRef(null), r = (0, M.Z)(), o = (0, L.useApplicationDirectoryHistory)(e => e.guildId), d = (0, L.useApplicationDirectoryHistory)(e => e.entrypoint), h = (0, L.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), E = (0, L.getCurrentView)(), g = (0, L.getPreviousView)(), Z = i.useRef(), x = (null == E ? void 0 : E.type) !== L.ApplicationDirectoryViews.HOME, P = (null == E ? void 0 : E.type) === L.ApplicationDirectoryViews.APPLICATION ? null == E ? void 0 : E.applicationId : void 0;
  (0, f.Tt)({
    location: I.Z.Messages.APP_DIRECTORY
  });
  let V = (null == E ? void 0 : E.type) !== L.ApplicationDirectoryViews.HOME && null != g;
  i.useEffect(() => {
    !h && null == d && (A.default.track(R.rMx.APP_DIRECTORY_OPENED, {
      source: L.ApplicationDirectoryEntrypointNames.EXTERNAL
    }), (0, L.setTrackedOpenedFromExternalEntrypoint)(!0))
  }, [d, h]), i.useEffect(() => {
    if (r) return p.Z.setLayout(C.ZP), p.Z.enable(), () => p.Z.disable()
  }, [r]), i.useEffect(() => {
    _.CP()
  }, []), i.useEffect(() => {
    r && _.g5()
  }, [r]), i.useEffect(() => {
    Z.current = (0, a.Z)()
  }, [null == E ? void 0 : E.type, P]);
  let k = i.useCallback(() => {
    var e, n;
    (0, v.uL)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ""), null != d && d.name === L.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != o && m.Z.open(o, null !== (n = d.guildSettingsSection) && void 0 !== n ? n : void 0)
  }, [d, o]);
  return i.useEffect(() => {
    let e = e => {
      e.key === j.vn.ESCAPE && (e.stopPropagation(), k())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [k]), (0, l.jsx)(l.Fragment, {
    children: (0, l.jsx)(u.AdvancedScroller, {
      className: s()(y.directoryContainer, {
        [y.directoryContainerMobile]: c.tq,
        [y.directoryContainerTablet]: c.Em
      }),
      ref: t,
      onScroll: () => {
        var e, n, l;
        return D({
          scrollTop: null === (e = t.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
          scrollOffset: null === (n = t.current) || void 0 === n ? void 0 : n.getScrollerState().offsetHeight,
          scrollHeight: null === (l = t.current) || void 0 === l ? void 0 : l.getScrollerState().scrollHeight,
          location: null == E ? void 0 : E.type,
          guildId: o,
          sessionId: Z.current
        })
      },
      children: (0, l.jsxs)("div", {
        className: y.content,
        children: [(0, l.jsx)(S, {
          onTitleClick: x ? N.goHome : void 0,
          showsLearnMoreCta: (null == E ? void 0 : E.type) === L.ApplicationDirectoryViews.HOME,
          guildId: o,
          children: r ? (0, l.jsx)(T, {
            onClose: k
          }) : null
        }), V && (0, l.jsx)(O, {
          view: g,
          onClick: () => {
            (0, v.op)()
          }
        }), n]
      })
    })
  })
}