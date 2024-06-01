"use strict";
l.r(t), l.d(t, {
  default: function() {
    return H
  }
});
var n = l("735250"),
  i = l("470079"),
  r = l("120356"),
  a = l.n(r),
  s = l("392711"),
  o = l("153832"),
  c = l("873546"),
  u = l("481060"),
  d = l("425493"),
  C = l("612226"),
  f = l("714338"),
  p = l("782568"),
  h = l("252618"),
  m = l("434404"),
  v = l("703656"),
  g = l("292665"),
  A = l("671533"),
  E = l("626135"),
  x = l("63063"),
  _ = l("674588"),
  M = l("463571"),
  L = l("887706"),
  y = l("132871"),
  j = l("147890"),
  I = l("981631"),
  N = l("420212"),
  R = l("689938"),
  T = l("886190");
let S = x.default.getArticleURL(I.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

function D(e) {
  let {
    onClose: t
  } = e, l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: l,
    className: T.closeWrapper,
    children: (0, n.jsx)(u.FocusRingScope, {
      containerRef: l,
      children: (0, n.jsx)("div", {
        className: T.closeContent,
        children: (0, n.jsx)(d.default, {
          className: T.closeIcon,
          closeAction: t,
          keybind: "ESC"
        })
      })
    })
  })
}

function O(e) {
  let {
    onTitleClick: t,
    showsLearnMoreCta: l,
    guildId: r,
    children: s
  } = e, o = (0, n.jsxs)(i.Fragment, {
    children: [(0, n.jsx)(g.default, {
      title: R.default.Messages.APP_DIRECTORY
    }), l && (0, n.jsx)(u.Anchor, {
      onClick: function() {
        E.default.track(I.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "directory-help-center",
          current_page: y.ApplicationDirectoryViews.HOME,
          guild_id: r
        }), (0, p.default)(S)
      },
      children: R.default.Messages.LEARN_MORE
    })]
  });
  return (0, n.jsxs)("div", {
    className: T.header,
    children: [null != t ? (0, n.jsx)(M.default, {
      href: I.Routes.APPLICATION_DIRECTORY,
      children: (0, n.jsx)(u.Clickable, {
        onClick: t,
        className: a()(T.titleContainer, T.clickable),
        children: o
      })
    }) : (0, n.jsx)("div", {
      className: T.titleContainer,
      children: o
    }), s]
  })
}

function P(e) {
  let t, {
    view: l,
    onClick: i
  } = e;
  if (null == l) return null;
  switch (l.type) {
    case y.ApplicationDirectoryViews.HOME:
      t = R.default.Messages.HOME;
      break;
    case y.ApplicationDirectoryViews.SEARCH:
      t = R.default.Messages.SEARCH;
      break;
    case y.ApplicationDirectoryViews.APPLICATION:
      var r;
      t = null !== (r = null == l ? void 0 : l.applicationName) && void 0 !== r ? r : R.default.Messages.BACK;
      break;
    default:
      t = R.default.Messages.BACK
  }
  return (0, n.jsxs)(u.Clickable, {
    className: T.back,
    onClick: i,
    children: [(0, n.jsx)(A.default, {
      direction: A.default.Directions.LEFT,
      className: T.backIcon
    }), (0, n.jsx)(u.Heading, {
      className: T.backHeader,
      variant: "heading-sm/semibold",
      children: t
    })]
  })
}
let k = (0, s.debounce)(e => {
  let {
    scrollTop: t,
    scrollOffset: l,
    scrollHeight: n,
    location: i,
    guildId: r,
    sessionId: a
  } = e;
  t > 0 && E.default.track(I.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
    scroll_visible_percentile: (t + l) / n,
    guild_id: r,
    location: i,
    directory_session_id: a
  })
}, 200);

function H(e) {
  let {
    children: t
  } = e, l = i.useRef(null), r = (0, L.default)(), s = (0, y.useApplicationDirectoryHistory)(e => e.guildId), d = (0, y.useApplicationDirectoryHistory)(e => e.entrypoint), p = (0, y.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), g = (0, y.getCurrentView)(), A = (0, y.getPreviousView)(), x = i.useRef(), M = (null == g ? void 0 : g.type) !== y.ApplicationDirectoryViews.HOME, S = (null == g ? void 0 : g.type) === y.ApplicationDirectoryViews.APPLICATION ? null == g ? void 0 : g.applicationId : void 0;
  (0, h.usePageTitle)({
    location: R.default.Messages.APP_DIRECTORY
  });
  let H = (null == g ? void 0 : g.type) !== y.ApplicationDirectoryViews.HOME && null != A;
  i.useEffect(() => {
    !p && null == d && (E.default.track(I.AnalyticEvents.APP_DIRECTORY_OPENED, {
      source: y.ApplicationDirectoryEntrypointNames.EXTERNAL
    }), (0, y.setTrackedOpenedFromExternalEntrypoint)(!0))
  }, [d, p]), i.useEffect(() => {
    if (r) return f.default.setLayout(C.default), f.default.enable(), () => f.default.disable()
  }, [r]), i.useEffect(() => {
    _.getCategories()
  }, []), i.useEffect(() => {
    r && _.fetchIntegrationApplicationIdsForMyGuilds()
  }, [r]), i.useEffect(() => {
    x.current = (0, o.v4)()
  }, [null == g ? void 0 : g.type, S]);
  let b = i.useCallback(() => {
    var e, t;
    (0, v.transitionTo)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ""), null != d && d.name === y.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != s && m.default.open(s, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0)
  }, [d, s]);
  return i.useEffect(() => {
    let e = e => {
      e.key === N.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), b())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [b]), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(u.AdvancedScroller, {
      className: a()(T.directoryContainer, {
        [T.directoryContainerMobile]: c.isMobile,
        [T.directoryContainerTablet]: c.isTablet
      }),
      ref: l,
      onScroll: () => {
        var e, t, n;
        return k({
          scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
          scrollOffset: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
          scrollHeight: null === (n = l.current) || void 0 === n ? void 0 : n.getScrollerState().scrollHeight,
          location: null == g ? void 0 : g.type,
          guildId: s,
          sessionId: x.current
        })
      },
      children: (0, n.jsxs)("div", {
        className: T.content,
        children: [(0, n.jsx)(O, {
          onTitleClick: M ? j.goHome : void 0,
          showsLearnMoreCta: (null == g ? void 0 : g.type) === y.ApplicationDirectoryViews.HOME,
          guildId: s,
          children: r ? (0, n.jsx)(D, {
            onClose: b
          }) : null
        }), H && (0, n.jsx)(P, {
          view: A,
          onClick: () => {
            (0, v.back)()
          }
        }), t]
      })
    })
  })
}