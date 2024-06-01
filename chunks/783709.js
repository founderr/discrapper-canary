"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("512722"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("481060"),
  E = n("867176"),
  f = n("566620"),
  _ = n("403404"),
  T = n("100527"),
  m = n("906732"),
  I = n("739566"),
  N = n("223021"),
  p = n("103575"),
  S = n("582404"),
  C = n("768581"),
  A = n("55935"),
  h = n("671219"),
  g = n("750858"),
  M = n("981631"),
  O = n("689938"),
  R = n("822545");

function v(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: a = "currentColor",
    className: l,
    foreground: i
  } = e;
  return (0, s.jsx)("svg", {
    className: l,
    width: t,
    height: n,
    viewBox: "0 0 6 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, s.jsx)("path", {
      d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
      className: i,
      fill: a
    })
  })
}

function L(e) {
  var t;
  let n;
  let {
    message: l,
    channel: r
  } = e, {
    analyticsLocations: u
  } = (0, m.default)(T.default.EXECUTED_COMMAND), L = a.useMemo(() => (e, t, n) => (o()(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(p.default, {
    ...e,
    location: "ExecutedCommand",
    channelId: r.id,
    messageId: l.id,
    guildId: r.guild_id,
    userId: t.id,
    newAnalyticsLocations: n
  })), [r, l.id]), x = a.useMemo(() => e => (o()(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(h.default, {
    ...e,
    channel: r,
    messageId: l.id,
    interactionData: l.interactionData
  })), [r, l.id, l.interactionData]), P = (0, I.useNullableUserAuthor)(null === (t = l.interaction) || void 0 === t ? void 0 : t.user, r), D = a.useMemo(() => e.compact ? (0, N.default)((0, A.dateFormat)(d()(), "LT")) : null, [e.compact]), y = (0, E.useIsActivitiesInTextEnabled)(r.id, !0, "ExecutedCommand"), U = l.interaction;
  if (null == U || null == P) return null;
  let j = () => {
    let t = function(e, t) {
        let n, {
          message: a,
          compact: l,
          channel: r,
          isInteractionUserBlocked: o,
          showAvatarPopout: u,
          onClickAvatar: d,
          onUserContextMenu: E,
          onPopoutRequestClose: f
        } = e;
        if (l && null == a.activityInstance || o) return (0, s.jsx)("div", {
          className: R.replyBadge,
          children: (0, s.jsx)(v, {
            className: R.commandIcon
          })
        });
        if (null != a.interaction) {
          var _, T, m;
          let e = (0, I.getUserAuthor)(a.interaction.user, r);
          n = null !== (m = C.default.getGuildMemberAvatarURL({
            avatar: null !== (_ = e.guildMemberAvatar) && void 0 !== _ ? _ : void 0,
            userId: a.interaction.user.id,
            guildId: null !== (T = null == r ? void 0 : r.guild_id) && void 0 !== T ? T : ""
          })) && void 0 !== m ? m : void 0
        }
        let N = () => null != a.interaction && function(e) {
          let {
            user: t,
            guildId: n,
            guildAvatar: a,
            onClick: l,
            onContextMenu: r,
            onMouseDown: o
          } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: null != a ? a : t.getAvatarURL(n, 16),
            onClick: l,
            onContextMenu: r,
            onMouseDown: o,
            className: i()({
              [R.executedCommandAvatar]: !0,
              [R.clickable]: null != l
            })
          })
        }({
          user: a.interaction.user,
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
      }(e, e => L(e, U.user, [T.default.AVATAR])),
      n = function(e, t, n) {
        var a;
        let {
          message: l,
          channel: i,
          showUsernamePopout: r,
          onClickUsername: o,
          onUserContextMenu: u,
          onPopoutRequestClose: d
        } = e;
        return (0, s.jsx)(g.default, {
          compact: !0,
          author: t,
          message: l,
          channel: i,
          userOverride: null === (a = l.interaction) || void 0 === a ? void 0 : a.user,
          showPopout: r,
          renderPopout: n,
          onClick: o,
          onContextMenu: u,
          onPopoutRequestClose: d
        })
      }(e, P, e => L(e, U.user));
    return (0, s.jsxs)(a.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == l ? void 0 : l.activityInstance) !== null) {
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
        analyticsLocations: u
      }), (0, f.fetchShelf)({
        guildId: r.guild_id
      })
    };
    n = y ? O.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
      userHook: j,
      activityHook: () => (0, s.jsx)(c.Clickable, {
        tag: "span",
        onClick: e,
        children: (0, s.jsx)("div", {
          className: i()(R.commandName, R.clickable),
          children: O.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
        })
      })
    }) : O.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
      userHook: j
    })
  } else n = O.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: j,
    commandHook: () => {
      let t = function(e, t) {
        let {
          showDataPopout: n,
          message: a,
          onClickCommand: l,
          onPopoutRequestClose: r
        } = e, o = a.interaction.displayName;
        return (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: n,
          position: "top",
          align: "center",
          onRequestClose: r,
          animation: c.Popout.Animation.FADE,
          positionKey: null != a.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return a.type === M.MessageTypes.CHAT_INPUT_COMMAND || a.type === M.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(c.Clickable, {
              ...n,
              tag: "span",
              onClick: l,
              children: (0, s.jsxs)("div", {
                className: i()(R.appLauncherOnboardingCommandName, R.clickable),
                children: [(0, s.jsx)(S.default, {
                  height: 10,
                  width: 10,
                  className: R.appsIcon
                }), o]
              })
            }) : (0, s.jsx)("div", {
              className: R.commandName,
              children: o
            })
          }
        })
      }(e, x);
      return (0, s.jsx)(a.Fragment, {
        children: t
      }, "command")
    }
  });
  return (0, s.jsx)(m.AnalyticsLocationProvider, {
    value: u,
    children: (0, s.jsx)("div", {
      className: i()(R.repliedMessage, R.executedCommand, D),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}