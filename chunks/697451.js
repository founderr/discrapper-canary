n.d(t, {
  Z: function() {
    return x
  }
});
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(913527),
  u = n.n(c),
  d = n(481060),
  E = n(867176),
  _ = n(566620),
  I = n(403404),
  T = n(100527),
  N = n(906732),
  m = n(103575),
  h = n(768581),
  C = n(55935),
  S = n(739566),
  A = n(421399),
  p = n(310423),
  g = n(223021),
  f = n(981631),
  O = n(689938),
  R = n(425577);

function M(e) {
  let {
    width: t = 6,
    height: n = 10,
    color: i = "currentColor",
    className: l,
    foreground: a
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
      className: a,
      fill: i
    })
  })
}

function x(e) {
  var t;
  let n;
  let {
    message: l,
    channel: r
  } = e, {
    analyticsLocations: c
  } = (0, N.ZP)(T.Z.EXECUTED_COMMAND), x = i.useMemo(() => (e, t, n) => (o()(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, s.jsx)(m.Z, {
    ...e,
    location: "ExecutedCommand",
    channelId: r.id,
    messageId: l.id,
    guildId: r.guild_id,
    userId: t.id,
    newAnalyticsLocations: n
  })), [r, l.id]), v = i.useMemo(() => e => (o()(null != r, "ExecutedCommand: channel cannot be null"), (0, s.jsx)(p.Z, {
    ...e,
    channel: r,
    messageId: l.id,
    interactionData: l.interactionData
  })), [r, l.id, l.interactionData]), L = (0, S.Sw)(null === (t = l.interaction) || void 0 === t ? void 0 : t.user, r), Z = i.useMemo(() => e.compact ? (0, g.Z)((0, C.vc)(u()(), "LT")) : null, [e.compact]), P = (0, E.NX)(r.id, !0, "ExecutedCommand"), D = l.interaction;
  if (null == D || null == L) return null;
  let j = () => {
    let t = function(e, t) {
        let n, {
          message: i,
          compact: l,
          channel: r,
          isInteractionUserBlocked: o,
          showAvatarPopout: c,
          onClickAvatar: u,
          onUserContextMenu: E,
          onPopoutRequestClose: _
        } = e;
        if (l && null == i.activityInstance || o) return (0, s.jsx)("div", {
          className: R.replyBadge,
          children: (0, s.jsx)(M, {
            className: R.commandIcon
          })
        });
        if (null != i.interaction) {
          var I, T, N;
          let e = (0, S.ij)(i.interaction.user, r);
          n = null !== (N = h.ZP.getGuildMemberAvatarURL({
            avatar: null !== (I = e.guildMemberAvatar) && void 0 !== I ? I : void 0,
            userId: i.interaction.user.id,
            guildId: null !== (T = null == r ? void 0 : r.guild_id) && void 0 !== T ? T : ""
          })) && void 0 !== N ? N : void 0
        }
        let m = () => null != i.interaction && function(e) {
          let {
            user: t,
            guildId: n,
            guildAvatar: i,
            onClick: l,
            onContextMenu: r,
            onMouseDown: o
          } = e;
          return (0, s.jsx)("img", {
            alt: "",
            src: null != i ? i : t.getAvatarURL(n, 16),
            onClick: l,
            onContextMenu: r,
            onMouseDown: o,
            className: a()({
              [R.executedCommandAvatar]: !0,
              [R.clickable]: null != l
            })
          })
        }({
          user: i.interaction.user,
          guildId: r.guild_id,
          guildAvatar: n,
          onClick: u,
          onContextMenu: E
        });
        return null != t && null != c ? (0, s.jsx)(d.Popout, {
          renderPopout: t,
          shouldShow: c,
          position: "right",
          onRequestClose: _,
          children: m
        }) : m()
      }(e, e => x(e, D.user, [T.Z.AVATAR])),
      n = function(e, t, n) {
        var i;
        let {
          message: l,
          channel: a,
          showUsernamePopout: r,
          onClickUsername: o,
          onUserContextMenu: c,
          onPopoutRequestClose: u
        } = e;
        return (0, s.jsx)(A.Z, {
          compact: !0,
          author: t,
          message: l,
          channel: a,
          userOverride: null === (i = l.interaction) || void 0 === i ? void 0 : i.user,
          showPopout: r,
          renderPopout: n,
          onClick: o,
          onContextMenu: c,
          onPopoutRequestClose: u
        })
      }(e, L, e => x(e, D.user));
    return (0, s.jsxs)(i.Fragment, {
      children: [t, n]
    }, "user")
  };
  if ((null == l ? void 0 : l.activityInstance) !== null) {
    let e = () => {
      (0, I.Z)({
        channel: r,
        guildId: r.guild_id,
        locationObject: {
          page: r.isPrivate() ? f.ZY5.DM_CHANNEL : f.ZY5.GUILD_CHANNEL,
          section: f.jXE.CHANNEL_TEXT_AREA,
          object: f.qAy.APP_COMMAND,
          objectType: f.Qqv.ACTIVITY
        },
        openInPopout: !1,
        enableSelectedTextChannelInvite: !0,
        analyticsLocations: c
      }), (0, _.w1)({
        guildId: r.guild_id
      })
    };
    n = P ? O.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
      userHook: j,
      activityHook: () => (0, s.jsx)(d.Clickable, {
        tag: "span",
        onClick: e,
        children: (0, s.jsx)("div", {
          className: a()(R.commandName, R.clickable),
          children: O.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
        })
      })
    }) : O.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
      userHook: j
    })
  } else n = O.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
    userHook: j,
    commandHook: () => {
      let t = function(e, t) {
        let {
          showDataPopout: n,
          message: i,
          onClickCommand: l,
          onPopoutRequestClose: r
        } = e, o = i.interaction.displayName;
        return (0, s.jsx)(d.Popout, {
          renderPopout: t,
          shouldShow: n,
          position: "top",
          align: "center",
          onRequestClose: r,
          animation: d.Popout.Animation.FADE,
          positionKey: null != i.interactionData ? "ready" : "loading",
          children: e => {
            let {
              onClick: t,
              ...n
            } = e;
            return i.type === f.uaV.CHAT_INPUT_COMMAND || i.type === f.uaV.INTERACTION_PREMIUM_UPSELL ? (0, s.jsx)(d.Clickable, {
              ...n,
              tag: "span",
              onClick: l,
              children: (0, s.jsxs)("div", {
                className: a()(R.appLauncherOnboardingCommandName, R.clickable),
                children: [(0, s.jsx)(d.AppsIcon, {
                  size: "custom",
                  color: "currentColor",
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
      }(e, v);
      return (0, s.jsx)(i.Fragment, {
        children: t
      }, "command")
    }
  });
  return (0, s.jsx)(N.Gt, {
    value: c,
    children: (0, s.jsx)("div", {
      className: a()(R.repliedMessage, R.executedCommand, Z),
      "aria-hidden": !e.compact,
      children: n
    })
  })
}