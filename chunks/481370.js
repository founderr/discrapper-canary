"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  m = n("14770"),
  N = n("390905"),
  p = n("981631"),
  O = n("689079"),
  C = n("689938"),
  R = n("717784"),
  g = n("946278");

function L(e) {
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
    }), S.ComponentDispatch.dispatch(p.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, s]);
  return (0, i.jsxs)("li", {
    className: R.command,
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

function v(e) {
  var t, n;
  let {
    channel: s,
    appDetail: u
  } = e, {
    filterSection: _,
    commandsByActiveSection: S
  } = d.useDiscovery(s, {
    commandType: l.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: O.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), {
    sortOrder: p,
    setSortOrder: v,
    commands: D,
    canSort: M
  } = (0, A.default)({
    sectionId: u.id,
    commandsByActiveSection: S
  });
  r.useEffect(() => {
    _(u.id)
  }, [u.id, _]);
  let y = f.default.getApplicationIconSource({
      id: u.id,
      icon: u.icon,
      bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
      botIconFirst: !0
    }),
    P = r.useCallback(() => {
      h.dismissAppDetail()
    }, []),
    U = (0, o.useToken)(o.tokens.colors.BG_BASE_PRIMARY).hex(),
    b = (0, E.default)("number" == typeof y ? "" : null == y ? void 0 : y.uri, null != U ? U : ""),
    G = (0, c.getIconComponent)(u),
    w = r.useMemo(() => {
      var e, t;
      return (0, I.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
    }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
  return (0, i.jsxs)(o.ScrollerNone, {
    className: R.container,
    fade: !0,
    children: [(0, i.jsx)("div", {
      className: R.headerWhenSideCard,
      style: {
        backgroundColor: b
      },
      children: (0, i.jsx)(o.Clickable, {
        "aria-label": C.default.Messages.CLOSE,
        onClick: P,
        className: R.headerCloseButton,
        children: (0, i.jsx)(T.default, {})
      })
    }), (0, i.jsxs)("div", {
      className: R.contentContainer,
      children: [(0, i.jsxs)("div", {
        className: R.appIcon,
        children: [(0, i.jsx)(G, {
          channel: s,
          section: u,
          width: 72,
          height: 72
        }), (0, i.jsx)("div", {
          className: R.appIconBorderThingy
        })]
      }), (0, i.jsxs)("section", {
        children: [(0, i.jsx)(o.Heading, {
          className: R.appName,
          variant: "heading-lg/bold",
          children: u.name
        }), (0, i.jsx)(o.Text, {
          className: a()(R.__invalid_appDescription, g.markup),
          variant: "text-sm/medium",
          lineClamp: 3,
          children: w
        })]
      }), (0, i.jsx)(m.default, {
        commands: D,
        channel: s
      }), (0, i.jsxs)("div", {
        className: R.commandListHeader,
        children: [(0, i.jsx)(o.Heading, {
          variant: "text-md/medium",
          children: C.default.Messages.APP_LAUNCHER_ALL_COMMANDS_HEADER
        }), M && (0, i.jsx)(N.default, {
          sortOrder: p,
          onSortOptionClick: v
        })]
      }), (0, i.jsx)("ul", {
        children: D.map(e => (0, i.jsx)(L, {
          channel: s,
          command: e,
          section: u
        }, e.id))
      })]
    })]
  })
}