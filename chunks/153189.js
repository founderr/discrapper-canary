"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("911969"),
  u = n("555573"),
  d = n("10718"),
  _ = n("895924"),
  c = n("826298"),
  E = n("220082"),
  I = n("240991"),
  T = n("465670"),
  f = n("768581"),
  S = n("585483"),
  h = n("499254"),
  A = n("660090"),
  m = n("176412"),
  N = n("870205"),
  p = n("442783"),
  O = n("981631"),
  C = n("689079"),
  R = n("689938"),
  g = n("666722"),
  L = n("946278");

function v(e) {
  let {
    channel: t,
    command: n,
    section: s
  } = e, a = r.useCallback(() => {
    h.dismissAppLauncherPopup(), u.setActiveCommand({
      channelId: t.id,
      command: n,
      section: s,
      location: _.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
    }), S.ComponentDispatch.dispatch(O.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, s]);
  return (0, i.jsxs)("li", {
    className: g.command,
    onClick: a,
    children: [(0, i.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: n.displayName
    }), (0, i.jsx)(o.Text, {
      variant: "text-xs/medium",
      lineClamp: 1,
      children: n.displayDescription
    })]
  })
}

function D(e) {
  var t, n, s;
  let {
    channel: u,
    application: _
  } = e, {
    filterSection: S,
    commandsByActiveSection: O,
    sectionDescriptors: D
  } = d.useDiscovery(u, {
    commandType: l.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: C.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), M = null !== (n = D.find(e => e.id === _.id)) && void 0 !== n ? n : null, {
    sortOrder: y,
    setSortOrder: P,
    commands: U,
    canSort: b
  } = (0, A.default)({
    sectionId: _.id,
    commandsByActiveSection: O
  });
  r.useEffect(() => {
    S(_.id)
  }, [_.id, S]);
  let G = f.default.getApplicationIconSource({
      id: _.id,
      icon: null == M ? void 0 : M.icon,
      bot: null == M ? void 0 : null === (t = M.application) || void 0 === t ? void 0 : t.bot,
      botIconFirst: !0
    }),
    w = r.useCallback(() => {
      h.dismissAppDetail()
    }, []),
    k = (0, o.useToken)(o.tokens.colors.BG_BASE_PRIMARY).hex(),
    B = (0, E.default)("number" == typeof G ? "" : null == G ? void 0 : G.uri, null != k ? k : ""),
    V = null != M ? (0, c.getIconComponent)(M) : null,
    x = r.useMemo(() => {
      var e;
      return (0, m.isRealApplication)(_) ? (0, I.parseBioReact)(null !== (e = _.description) && void 0 !== e ? e : "") : ""
    }, [_]);
  return (0, i.jsxs)(o.ScrollerNone, {
    className: g.container,
    fade: !0,
    children: [(0, i.jsx)("div", {
      className: g.headerWhenSideCard,
      style: {
        backgroundColor: B
      },
      children: (0, i.jsx)(o.Clickable, {
        "aria-label": R.default.Messages.CLOSE,
        onClick: w,
        className: g.headerCloseButton,
        children: (0, i.jsx)(T.default, {})
      })
    }), (0, i.jsxs)("div", {
      className: g.contentContainer,
      children: [(0, i.jsxs)("div", {
        className: g.appIcon,
        children: [null != M && null != V ? (0, i.jsx)(V, {
          channel: u,
          section: M,
          width: 72,
          height: 72
        }) : null, (0, i.jsx)("div", {
          className: g.appIconBorderThingy
        })]
      }), (0, i.jsxs)("section", {
        children: [(0, i.jsx)(o.Heading, {
          className: g.appName,
          variant: "heading-lg/bold",
          children: null !== (s = null == M ? void 0 : M.name) && void 0 !== s ? s : "Unnamed"
        }), (0, i.jsx)(o.Text, {
          className: a()(g.__invalid_appDescription, L.markup),
          variant: "text-sm/medium",
          lineClamp: 3,
          children: x
        })]
      }), (0, i.jsx)(p.default, {
        commands: U,
        channel: u
      }), (0, i.jsxs)("div", {
        className: g.commandListHeader,
        children: [(0, i.jsx)(o.Heading, {
          variant: "text-md/medium",
          children: R.default.Messages.APP_LAUNCHER_ALL_COMMANDS_HEADER
        }), b && (0, i.jsx)(N.default, {
          sortOrder: y,
          onSortOptionClick: P
        })]
      }), (0, i.jsx)("ul", {
        children: U.map(e => (0, i.jsx)(v, {
          channel: u,
          command: e,
          section: M
        }, e.id))
      })]
    })]
  })
}