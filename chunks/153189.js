"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("270292"),
  l = n("481060"),
  u = n("911969"),
  d = n("555573"),
  _ = n("10718"),
  c = n("895924"),
  E = n("826298"),
  I = n("220082"),
  T = n("240991"),
  f = n("768581"),
  S = n("585483"),
  h = n("499254"),
  A = n("660090"),
  m = n("783097"),
  N = n("695676"),
  p = n("870205"),
  O = n("442783"),
  C = n("981631"),
  R = n("689079"),
  g = n("689938"),
  L = n("666722"),
  v = n("946278");

function D(e) {
  let {
    channel: t,
    command: n,
    section: s
  } = e, a = r.useCallback(() => {
    h.dismissAppLauncherPopup(), d.setActiveCommand({
      channelId: t.id,
      command: n,
      section: s,
      location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
    }), S.ComponentDispatch.dispatch(C.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, s]);
  return (0, i.jsxs)("li", {
    className: L.command,
    onClick: a,
    children: [(0, i.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: n.displayName
    }), (0, i.jsx)(l.Text, {
      variant: "text-xs/medium",
      lineClamp: 1,
      children: n.displayDescription
    })]
  })
}

function M(e) {
  var t, n, s;
  let {
    channel: d,
    application: c
  } = e, {
    goBack: S
  } = (0, N.useAppLauncherHistoryContext)(), {
    filterSection: h,
    commandsByActiveSection: C,
    sectionDescriptors: M
  } = _.useDiscovery(d, {
    commandType: u.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: R.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), y = null !== (n = M.find(e => e.id === c.id)) && void 0 !== n ? n : null, {
    sortOrder: P,
    setSortOrder: U,
    commands: b,
    canSort: G
  } = (0, A.default)({
    sectionId: c.id,
    commandsByActiveSection: C
  });
  r.useEffect(() => {
    h(c.id)
  }, [c.id, h]);
  let w = f.default.getApplicationIconSource({
      id: c.id,
      icon: null == y ? void 0 : y.icon,
      bot: null == y ? void 0 : null === (t = y.application) || void 0 === t ? void 0 : t.bot,
      botIconFirst: !0
    }),
    k = r.useCallback(() => {
      S()
    }, [S]),
    B = (0, l.useToken)(l.tokens.colors.BG_BASE_PRIMARY).hex(),
    V = (0, I.default)("number" == typeof w ? "" : null == w ? void 0 : w.uri, null != B ? B : ""),
    x = null != y ? (0, E.getIconComponent)(y) : null,
    F = r.useMemo(() => {
      var e;
      return (0, m.isRealApplication)(c) ? (0, T.parseBioReact)(null !== (e = c.description) && void 0 !== e ? e : "") : ""
    }, [c]);
  return (0, i.jsxs)(l.ScrollerNone, {
    className: L.container,
    fade: !0,
    children: [(0, i.jsx)("div", {
      className: L.header,
      style: {
        backgroundColor: V
      },
      children: (0, i.jsx)(l.Clickable, {
        "aria-label": g.default.Messages.BACK,
        onClick: k,
        className: L.headerBackButton,
        children: (0, i.jsx)(o.ArrowLargeLeftIcon, {
          color: l.tokens.colors.INTERACTIVE_ACTIVE,
          width: 18,
          height: 18
        })
      })
    }), (0, i.jsxs)("div", {
      className: L.contentContainer,
      children: [(0, i.jsxs)("div", {
        className: L.appIcon,
        children: [null != y && null != x ? (0, i.jsx)(x, {
          channel: d,
          section: y,
          width: 72,
          height: 72
        }) : null, (0, i.jsx)("div", {
          className: L.appIconBorderThingy
        })]
      }), (0, i.jsxs)("section", {
        children: [(0, i.jsx)(l.Heading, {
          className: L.appName,
          variant: "heading-lg/bold",
          children: null !== (s = null == y ? void 0 : y.name) && void 0 !== s ? s : "Unnamed"
        }), (0, i.jsx)(l.Text, {
          className: a()(L.__invalid_appDescription, v.markup),
          variant: "text-sm/medium",
          lineClamp: 3,
          children: F
        })]
      }), (0, i.jsx)(O.default, {
        commands: b,
        channel: d
      }), (0, i.jsxs)("div", {
        className: L.commandListHeader,
        children: [(0, i.jsx)(l.Heading, {
          variant: "text-md/medium",
          children: g.default.Messages.APP_LAUNCHER_ALL_COMMANDS_HEADER
        }), G && (0, i.jsx)(p.default, {
          sortOrder: P,
          onSortOptionClick: U
        })]
      }), (0, i.jsx)("ul", {
        children: b.map(e => (0, i.jsx)(D, {
          channel: d,
          command: e,
          section: y
        }, e.id))
      })]
    })]
  })
}