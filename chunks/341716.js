"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
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
  I = n("574073"),
  m = n("38600"),
  N = n("981601"),
  p = n("315102"),
  S = n("888400"),
  A = n("927632"),
  C = n("195483"),
  h = n("49111"),
  g = n("406291"),
  M = n("782340"),
  O = n("356296");

function R(e) {
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

function L(e) {
  var t;
  let n;
  let {
    message: a,
    channel: r
  } = e, u = l.useMemo(() => (e, t) => (o(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(N.default, {
    ...e,
    channelId: r.id,
    guildId: r.guild_id,
    userId: t.id
  })), [r]), L = l.useMemo(() => e => (o(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(A.default, {
    ...e,
    channel: r,
    messageId: a.id,
    interactionData: a.interactionData
  })), [r, a.id, a.interactionData]), v = (0, I.useNullableUserAuthor)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, r), P = l.useMemo(() => e.compact ? (0, m.default)((0, S.dateFormat)(d(), "LT")) : null, [e.compact]), {
    analyticsLocations: D
  } = (0, T.default)(), x = (0, E.useIsActivitiesInTextEnabled)(r.id, "ExecutedCommand"), y = a.interaction;
  if (null == y || null == v) return null;
  let U = () => {
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
          className: O.replyBadge,
          children: (0, s.jsx)(R, {
            className: O.commandIcon
          })
        });
        if (null != l.interaction) {
          var _, T, m;
          let e = (0, I.getUserAuthor)(l.interaction.user, r);
          n = null !== (m = p.default.getGuildMemberAvatarURL({
            avatar: null !== (_ = e.guildMemberAvatar) && void 0 !== _ ? _ : void 0,
            userId: l.interaction.user.id,
            guildId: null !== (T = null == r ? void 0 : r.guild_id) && void 0 !== T ? T : ""
          })) && void 0 !== m ? m : void 0
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
              [O.executedCommandAvatar]: !0,
              [O.clickable]: null != a
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
      }(e, e => u(e, y.user)),
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
        return (0, s.jsx)(C.default, {
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
      }(e, v, e => u(e, y.user));
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
          page: r.isPrivate() ? h.AnalyticsPages.DM_CHANNEL : h.AnalyticsPages.GUILD_CHANNEL,
          section: h.AnalyticsSections.CHANNEL_TEXT_AREA,
          object: h.AnalyticsObjects.APP_COMMAND,
          objectType: h.AnalyticsObjectTypes.ACTIVITY
        },
        openInPopout: !1,
        enableSelectedTextChannelInvite: !0,
        analyticsLocations: D
      }), (0, f.fetchShelf)({
        guildId: r.guild_id
      })
    };
    n = x ? M.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
      userHook: U,
      activityHook: () => (0, s.jsx)(c.Clickable, {
        tag: "span",
        onClick: e,
        children: (0, s.jsx)("div", {
          className: i(O.commandName, O.clickable),
          children: M.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
        })
      })
    }) : M.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
      userHook: U
    })
  } else n = M.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: U,
    commandHook: () => {
      let t = function(e, t) {
        let {
          showDataPopout: n,
          message: l,
          onClickCommand: a,
          onPopoutRequestClose: r
        } = e, o = l.interaction.displayName;
        return (0, s.jsx)(c.Popout, {
          renderPopout: t,
          shouldShow: n,
          position: "top",
          align: "center",
          onRequestClose: r,
          animation: c.Popout.Animation.FADE,
          positionKey: null != l.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return l.type === h.MessageTypes.CHAT_INPUT_COMMAND || l.type === h.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(c.Clickable, {
              ...n,
              tag: "span",
              onClick: a,
              children: (0, s.jsx)("div", {
                className: i(O.commandName, O.clickable),
                children: g.COMMAND_SENTINEL + o
              })
            }) : (0, s.jsx)("div", {
              className: O.commandName,
              children: o
            })
          }
        })
      }(e, L);
      return (0, s.jsx)(l.Fragment, {
        children: t
      }, "command")
    }
  });
  return (0, s.jsx)("div", {
    className: i(O.repliedMessage, O.executedCommand, P),
    "aria-hidden": !e.compact,
    children: n
  })
}