"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
  }
});
var n = l("735250"),
  i = l("470079"),
  r = l("120356"),
  a = l.n(r),
  s = l("392711"),
  o = l("153832"),
  u = l("873546"),
  c = l("481060"),
  d = l("425493"),
  C = l("612226"),
  f = l("714338"),
  p = l("782568"),
  h = l("252618"),
  m = l("434404"),
  v = l("703656"),
  g = l("292665"),
  E = l("671533"),
  A = l("626135"),
  _ = l("63063"),
  x = l("674588"),
  M = l("463571"),
  N = l("887706"),
  R = l("132871"),
  L = l("147890"),
  y = l("981631"),
  S = l("420212"),
  I = l("689938"),
  j = l("886190");
let T = _.default.getArticleURL(y.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

function P(e) {
  let {
    onClose: t
  } = e, l = i.useRef(null);
  return (0, n.jsx)("div", {
    ref: l,
    className: j.closeWrapper,
    children: (0, n.jsx)(c.FocusRingScope, {
      containerRef: l,
      children: (0, n.jsx)("div", {
        className: j.closeContent,
        children: (0, n.jsx)(d.default, {
          className: j.closeIcon,
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
      title: I.default.Messages.APP_DIRECTORY
    }), l && (0, n.jsx)(c.Anchor, {
      onClick: function() {
        A.default.track(y.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
          cta: "directory-help-center",
          current_page: R.ApplicationDirectoryViews.HOME,
          guild_id: r
        }), (0, p.default)(T)
      },
      children: I.default.Messages.LEARN_MORE
    })]
  });
  return (0, n.jsxs)("div", {
    className: j.header,
    children: [null != t ? (0, n.jsx)(M.default, {
      href: y.Routes.APPLICATION_DIRECTORY,
      children: (0, n.jsx)(c.Clickable, {
        onClick: t,
        className: a()(j.titleContainer, j.clickable),
        children: o
      })
    }) : (0, n.jsx)("div", {
      className: j.titleContainer,
      children: o
    }), s]
  })
}

function D(e) {
  let t, {
    view: l,
    onClick: i
  } = e;
  if (null == l) return null;
  switch (l.type) {
    case R.ApplicationDirectoryViews.HOME:
      t = I.default.Messages.HOME;
      break;
    case R.ApplicationDirectoryViews.SEARCH:
      t = I.default.Messages.SEARCH;
      break;
    case R.ApplicationDirectoryViews.APPLICATION:
      var r;
      t = null !== (r = null == l ? void 0 : l.applicationName) && void 0 !== r ? r : I.default.Messages.BACK;
      break;
    default:
      t = I.default.Messages.BACK
  }
  return (0, n.jsxs)(c.Clickable, {
    className: j.back,
    onClick: i,
    children: [(0, n.jsx)(E.default, {
      direction: E.default.Directions.LEFT,
      className: j.backIcon
    }), (0, n.jsx)(c.Heading, {
      className: j.backHeader,
      variant: "heading-sm/semibold",
      children: t
    })]
  })
}
let V = (0, s.debounce)(e => {
  let {
    scrollTop: t,
    scrollOffset: l,
    scrollHeight: n,
    location: i,
    guildId: r,
    sessionId: a
  } = e;
  t > 0 && A.default.track(y.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
    scroll_visible_percentile: (t + l) / n,
    guild_id: r,
    location: i,
    directory_session_id: a
  })
}, 200);

function k(e) {
  let {
    children: t
  } = e, l = i.useRef(null), r = (0, N.default)(), s = (0, R.useApplicationDirectoryHistory)(e => e.guildId), d = (0, R.useApplicationDirectoryHistory)(e => e.entrypoint), p = (0, R.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), g = (0, R.getCurrentView)(), E = (0, R.getPreviousView)(), _ = i.useRef(), M = (null == g ? void 0 : g.type) !== R.ApplicationDirectoryViews.HOME, T = (null == g ? void 0 : g.type) === R.ApplicationDirectoryViews.APPLICATION ? null == g ? void 0 : g.applicationId : void 0;
  (0, h.usePageTitle)({
    location: I.default.Messages.APP_DIRECTORY
  });
  let k = (null == g ? void 0 : g.type) !== R.ApplicationDirectoryViews.HOME && null != E;
  i.useEffect(() => {
    !p && null == d && (A.default.track(y.AnalyticEvents.APP_DIRECTORY_OPENED, {
      source: R.ApplicationDirectoryEntrypointNames.EXTERNAL
    }), (0, R.setTrackedOpenedFromExternalEntrypoint)(!0))
  }, [d, p]), i.useEffect(() => {
    if (r) return f.default.setLayout(C.default), f.default.enable(), () => f.default.disable()
  }, [r]), i.useEffect(() => {
    x.getCategories()
  }, []), i.useEffect(() => {
    r && x.fetchIntegrationApplicationIdsForMyGuilds()
  }, [r]), i.useEffect(() => {
    _.current = (0, o.v4)()
  }, [null == g ? void 0 : g.type, T]);
  let b = i.useCallback(() => {
    var e, t;
    (0, v.transitionTo)(null !== (e = null == d ? void 0 : d.pathname) && void 0 !== e ? e : ""), null != d && d.name === R.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != s && m.default.open(s, null !== (t = d.guildSettingsSection) && void 0 !== t ? t : void 0)
  }, [d, s]);
  return i.useEffect(() => {
    let e = e => {
      e.key === S.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), b())
    };
    return document.addEventListener("keydown", e), () => {
      document.removeEventListener("keydown", e)
    }
  }, [b]), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(c.AdvancedScroller, {
      className: a()(j.directoryContainer, {
        [j.directoryContainerMobile]: u.isMobile,
        [j.directoryContainerTablet]: u.isTablet
      }),
      ref: l,
      onScroll: () => {
        var e, t, n;
        return V({
          scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
          scrollOffset: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
          scrollHeight: null === (n = l.current) || void 0 === n ? void 0 : n.getScrollerState().scrollHeight,
          location: null == g ? void 0 : g.type,
          guildId: s,
          sessionId: _.current
        })
      },
      children: (0, n.jsxs)("div", {
        className: j.content,
        children: [(0, n.jsx)(O, {
          onTitleClick: M ? L.goHome : void 0,
          showsLearnMoreCta: (null == g ? void 0 : g.type) === R.ApplicationDirectoryViews.HOME,
          guildId: s,
          children: r ? (0, n.jsx)(P, {
            onClose: b
          }) : null
        }), k && (0, n.jsx)(D, {
          view: E,
          onClick: () => {
            (0, v.back)()
          }
        }), t]
      })
    })
  })
}