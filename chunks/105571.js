"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("77078"),
  a = n("798609"),
  u = n("507217"),
  d = n("240249"),
  c = n("524768"),
  f = n("355263"),
  p = n("462274"),
  m = n("368639"),
  h = n("945330"),
  E = n("256170"),
  S = n("315102"),
  g = n("659500"),
  C = n("82372"),
  T = n("476606"),
  v = n("540843"),
  y = n("49111"),
  x = n("317041"),
  I = n("782340"),
  _ = n("253072"),
  N = n("632215");

function A(e) {
  let {
    channel: t,
    command: n,
    section: r
  } = e, o = i.useCallback(() => {
    C.dismissAppLauncherPopup(), u.setActiveCommand({
      channelId: t.id,
      command: n,
      section: r,
      location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
    }), g.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: t.id
    })
  }, [t, n, r]);
  return (0, l.jsxs)("li", {
    className: _.command,
    onClick: o,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: n.displayName
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/medium",
      lineClamp: 1,
      children: n.displayDescription
    })]
  })
}

function R(e) {
  var t, n;
  let {
    channel: r,
    appDetail: u
  } = e, {
    filterSection: c,
    commandsByActiveSection: g
  } = d.useDiscovery(r, {
    commandType: a.ApplicationCommandType.CHAT
  }, {
    placeholderCount: 0,
    limit: x.DISCOVERY_COMMANDS_QUERY_LIMIT,
    includeFrecency: !0
  }), {
    commands: y
  } = (0, T.default)({
    sectionId: u.id,
    commandsByActiveSection: g
  });
  i.useEffect(() => {
    c(u.id)
  }, [u.id, c]);
  let R = S.default.getApplicationIconSource({
      id: u.id,
      icon: u.icon,
      bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
      botIconFirst: !0
    }),
    O = i.useCallback(() => {
      C.dismissAppDetail()
    }, []),
    M = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(),
    b = (0, p.default)("number" == typeof R ? "" : null == R ? void 0 : R.uri, null != M ? M : ""),
    k = (0, f.getIconComponent)(u),
    P = i.useMemo(() => {
      var e, t;
      return (0, m.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
    }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
  return (0, l.jsxs)(s.ScrollerNone, {
    className: _.container,
    fade: !0,
    children: [(0, l.jsx)("div", {
      className: _.headerWhenSideCard,
      style: {
        backgroundColor: b
      },
      children: (0, l.jsx)(s.Clickable, {
        "aria-label": I.default.Messages.CLOSE,
        onClick: O,
        className: _.headerCloseButton,
        children: (0, l.jsx)(h.default, {})
      })
    }), (0, l.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, l.jsxs)("div", {
        className: _.appIcon,
        children: [(0, l.jsx)(k, {
          channel: r,
          section: u,
          width: 72,
          height: 72
        }), (0, l.jsx)("div", {
          className: _.appIconBorderThingy
        })]
      }), (0, l.jsxs)("section", {
        children: [(0, l.jsx)(s.Heading, {
          className: _.appName,
          variant: "heading-lg/bold",
          children: u.name
        }), (0, l.jsx)(s.Text, {
          className: o(_.appDescription, N.markup),
          variant: "text-sm/medium",
          lineClamp: 3,
          children: P
        })]
      }), (0, l.jsx)(v.default, {
        commands: y,
        channel: r
      }), (0, l.jsxs)("div", {
        className: _.commandListHeader,
        children: [(0, l.jsx)(s.Heading, {
          variant: "text-md/medium",
          children: "All Commands"
        }), (0, l.jsxs)(s.Text, {
          className: _.sortSelector,
          variant: "text-md/medium",
          children: ["Popular", (0, l.jsx)(E.default, {})]
        })]
      }), (0, l.jsx)("ul", {
        children: y.map(e => (0, l.jsx)(A, {
          channel: r,
          command: e,
          section: u
        }, e.id))
      })]
    })]
  })
}