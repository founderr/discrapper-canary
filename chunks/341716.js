"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("627445"),
  o = n.n(r),
  u = n("866227"),
  d = n.n(u),
  c = n("77078"),
  E = n("427953"),
  f = n("550766"),
  _ = n("478272"),
  T = n("685665"),
  I = n("996554"),
  m = n("574073"),
  N = n("38600"),
  p = n("981601"),
  S = n("64791"),
  A = n("315102"),
  C = n("888400"),
  h = n("927632"),
  g = n("195483"),
  M = n("49111"),
  O = n("406291"),
  R = n("782340"),
  L = n("356296");

function v(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: l = "currentColor",
    className: a,
    foreground: i
  } = e;
  return (0, s.jsx)("svg", {
    className: a,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, s.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: i,
      fill: l
    })
  })
}

function P(e) {
  var t;
  let n;
  let {
    message: a,
    channel: r
  } = e, u = l.useMemo(() => (e, t) => (o(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(p.default, {
    ...e,
    channelId: r.id,
    guildId: r.guild_id,
    userId: t.id
  })), [r]), P = l.useMemo(() => e => (o(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(h.default, {
    ...e,
    channel: r,
    messageId: a.id,
    interactionData: a.interactionData
  })), [r, a.id, a.interactionData]), D = (0, m.useNullableUserAuthor)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, r), x = l.useMemo(() => e.compact ? (0, N.default)((0, C.dateFormat)(d(), "LT")) : null, [e.compact]), {
    analyticsLocations: y
  } = (0, T.default)(), U = (0, E.useIsActivitiesInTextEnabled)(r.id, "ExecutedCommand"), {
    enabled: j
  } = I.AppLauncherOnboardingExperiment.useExperiment({
    location: "Executed Command"
  }, {
    autoTrackExposure: !1
  }), b = a.interaction;
  if (null == b || null == D) return null;
  let G = () => {
    let t = function(e, t) {
        let n, {
          message: l,
          compact: a,
          channel: r,
          isInteractionUserBlocked: o,
          showAvatarPopout: u,
          onClickAvatar: d,
          onUserContextMenu: E,
          onPopoutRequestClose: f
        } = e;
        if (a && null == l.activityInstance || o) return (0, s.jsx)("div", {
          className: L.replyBadge,
          children: (0, s.jsx)(v, {
            className: L.commandIcon
          })
        });
        if (null != l.interaction) {
          var _, T, I;
          let e = (0, m.getUserAuthor)(l.interaction.user, r);
          n = null !== (I = A.default.getGuildMemberAvatarURL({
            avatar: null !== (_ = e.guildMemberAvatar) && void 0 !== _ ? _ : void 0,
            userId: l.interaction.user.id,
            guildId: null !== (T = null == r ? void 0 : r.guild_id) && void 0 !== T ? T : ""
          })) && void 0 !== I ? I : void 0
        }
        let N = () => null != l.interaction && function(e) {
          let {
            user: t,
            guildId: n,
            guildAvatar: l,
            onClick: a,
            onContextMenu: r,
            onMouseDown: o
          } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: null != l ? l : t.getAvatarURL(n, 16),
            onClick: a,
            onContextMenu: r,
            onMouseDown: o,
            className: i({
              [L.executedCommandAvatar]: !0,
              [L.clickable]: null != a
            })
          })
        }({
          user: l.interaction.user,
          guildId: r.guild_id,
          guildAvatar: n,
          onClick: d,
          onContextMenu: E
        });
        return null != t && null != u ? (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: u,
          position: "right",
          onRequestClose: f,
          children: N
        }) : N()
      }(e, e => u(e, b.user)),
      n = function(e, t, n) {
        var l;
        let {
          message: a,
          channel: i,
          showUsernamePopout: r,
          onClickUsername: o,
          onUserContextMenu: u,
          onPopoutRequestClose: d
        } = e;
        return (0, s.jsx)(g.default, {
          compact: !0,
          author: t,
          message: a,
          channel: i,
          userOverride: null === (l = a.interaction) || void 0 === l ? void 0 : l.user,
          showPopout: r,
          renderPopout: n,
          onClick: o,
          onContextMenu: u,
          onPopoutRequestClose: d
        })
      }(e, D, e => u(e, b.user));
    return (0, s.jsxs)(l.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == a ? void 0 : a.activityInstance) !== null) {
    let e = () => {
      (0, _.default)({
        channel: r,
        guildId: r.guild_id,
        locationObject: {
          page: r.isPrivate() ? M.AnalyticsPages.DM_CHANNEL : M.AnalyticsPages.GUILD_CHANNEL,
          section: M.AnalyticsSections.CHANNEL_TEXT_AREA,
          object: M.AnalyticsObjects.APP_COMMAND,
          objectType: M.AnalyticsObjectTypes.ACTIVITY
        },
        openInPopout: !1,
        enableSelectedTextChannelInvite: !0,
        analyticsLocations: y
      }), (0, f.fetchShelf)({
        guildId: r.guild_id
      })
    };
    n = U ? R.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
      userHook: G,
      activityHook: () => (0, s.jsx)(c.Clickable, {
        tag: "span",
        onClick: e,
        children: (0, s.jsx)("div", {
          className: i(L.commandName, L.clickable),
          children: R.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
        })
      })
    }) : R.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
      userHook: G
    })
  } else n = R.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: G,
    commandHook: () => {
      let t = function(e, t, n) {
        let {
          showDataPopout: l,
          message: a,
          onClickCommand: r,
          onPopoutRequestClose: o
        } = e, u = a.interaction.displayName;
        return (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: l,
          position: "top",
          align: "center",
          onRequestClose: o,
          animation: c.Popout.Animation.FADE,
          positionKey: null != a.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...l
            } = e;
            return a.type === M.MessageTypes.CHAT_INPUT_COMMAND || a.type === M.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(c.Clickable, {
              ...l,
              tag: "span",
              onClick: r,
              children: (0, s.jsxs)("div", {
                className: i({
                  [L.commandName]: !n
                }, {
                  [L.appLauncherOnboardingCommandName]: n
                }, L.clickable),
                children: [(0, s.jsx)(S.default, {
                  height: 10,
                  width: 10,
                  className: L.appsIcon
                }), n ? u : O.COMMAND_SENTINEL + u]
              })
            }) : (0, s.jsx)("div", {
              className: L.commandName,
              children: u
            })
          }
        })
      }(e, P, j);
      return (0, s.jsx)(l.Fragment, {
        children: t
      }, "command")
    }
  });
  return (0, s.jsx)("div", {
    className: i(L.repliedMessage, L.executedCommand, x),
    "aria-hidden": !e.compact,
    children: n
  })
}