n.d(t, {
  Z: function() {
return x;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(913527),
  u = n.n(c),
  d = n(481060),
  _ = n(595519),
  E = n(566620),
  I = n(403404),
  m = n(100527),
  T = n(906732),
  h = n(103575),
  N = n(768581),
  f = n(55935),
  C = n(739566),
  p = n(421399),
  g = n(310423),
  S = n(223021),
  A = n(981631),
  M = n(689938),
  R = n(475525);

function O(e) {
  let {
width: t = 6,
height: n = 10,
color: s = 'currentColor',
className: a,
foreground: r
  } = e;
  return (0, i.jsx)('svg', {
className: a,
width: t,
height: n,
viewBox: '0 0 6 10',
fill: 'none',
xmlns: 'http://www.w3.org/2000/svg',
children: (0, i.jsx)('path', {
  d: 'M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z',
  className: r,
  fill: s
})
  });
}

function x(e) {
  var t;
  let n;
  let {
message: a,
channel: l
  } = e, {
analyticsLocations: c
  } = (0, T.ZP)(m.Z.EXECUTED_COMMAND), x = s.useMemo(() => (e, t, n) => (o()(null != l && null != t, 'ExecuteCommand: user and channel cannot be undefined'), (0, i.jsx)(h.Z, {
...e,
location: 'ExecutedCommand',
channelId: l.id,
messageId: a.id,
guildId: l.guild_id,
userId: t.id,
newAnalyticsLocations: n
  })), [
l,
a.id
  ]), v = s.useMemo(() => e => (o()(null != l, 'ExecutedCommand: channel cannot be null'), (0, i.jsx)(g.Z, {
...e,
channel: l,
messageId: a.id,
interactionData: a.interactionData
  })), [
l,
a.id,
a.interactionData
  ]), Z = (0, C.Sw)(null === (t = a.interaction) || void 0 === t ? void 0 : t.user, l), L = s.useMemo(() => e.compact ? (0, S.Z)((0, f.vc)(u()(), 'LT')) : null, [e.compact]), P = (0, _.NX)(l.id, !0), D = a.interaction;
  if (null == D || null == Z)
return null;
  let b = () => {
let t = function(e, t) {
    let n, {
      message: s,
      compact: a,
      channel: l,
      isInteractionUserBlocked: o,
      showAvatarPopout: c,
      onClickAvatar: u,
      onUserContextMenu: _,
      onPopoutRequestClose: E
    } = e;
    if (a && null == s.activityInstance || o)
      return (0, i.jsx)('div', {
        className: R.replyBadge,
        children: (0, i.jsx)(O, {
          className: R.commandIcon
        })
      });
    if (null != s.interaction) {
      var I, m, T;
      let e = (0, C.ij)(s.interaction.user, l);
      n = null !== (T = N.ZP.getGuildMemberAvatarURL({
        avatar: null !== (I = e.guildMemberAvatar) && void 0 !== I ? I : void 0,
        userId: s.interaction.user.id,
        guildId: null !== (m = null == l ? void 0 : l.guild_id) && void 0 !== m ? m : ''
      })) && void 0 !== T ? T : void 0;
    }
    let h = () => null != s.interaction && function(e) {
      let {
        user: t,
        guildId: n,
        guildAvatar: s,
        onClick: a,
        onContextMenu: l,
        onMouseDown: o
      } = e;
      return (0, i.jsx)('img', {
        alt: '',
        src: null != s ? s : t.getAvatarURL(n, 16),
        onClick: a,
        onContextMenu: l,
        onMouseDown: o,
        className: r()({
          [R.executedCommandAvatar]: !0,
          [R.clickable]: null != a
        })
      });
    }({
      user: s.interaction.user,
      guildId: l.guild_id,
      guildAvatar: n,
      onClick: u,
      onContextMenu: _
    });
    return null != t && null != c ? (0, i.jsx)(d.Popout, {
      renderPopout: t,
      shouldShow: c,
      position: 'right',
      onRequestClose: E,
      children: h
    }) : h();
  }(e, e => x(e, D.user, [m.Z.AVATAR])),
  n = function(e, t, n) {
    var s;
    let {
      message: a,
      channel: r,
      showUsernamePopout: l,
      onClickUsername: o,
      onUserContextMenu: c,
      onPopoutRequestClose: u
    } = e;
    return (0, i.jsx)(p.Z, {
      compact: !0,
      author: t,
      message: a,
      channel: r,
      userOverride: null === (s = a.interaction) || void 0 === s ? void 0 : s.user,
      showPopout: l,
      renderPopout: n,
      onClick: o,
      onContextMenu: c,
      onPopoutRequestClose: u
    });
  }(e, Z, e => x(e, D.user));
return (0, i.jsxs)(s.Fragment, {
  children: [
    t,
    n
  ]
}, 'user');
  };
  if ((null == a ? void 0 : a.activityInstance) !== null) {
let e = () => {
  (0, I.Z)({
    channel: l,
    guildId: l.guild_id,
    locationObject: {
      page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
      section: A.jXE.CHANNEL_TEXT_AREA,
      object: A.qAy.APP_COMMAND,
      objectType: A.Qqv.ACTIVITY
    },
    openInPopout: !1,
    enableSelectedTextChannelInvite: !0,
    analyticsLocations: c
  }), (0, E.w1)({
    guildId: l.guild_id
  });
};
n = P ? M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
  userHook: b,
  activityHook: () => (0, i.jsx)(d.Clickable, {
    tag: 'span',
    onClick: e,
    children: (0, i.jsx)('div', {
      className: r()(R.commandName, R.clickable),
      children: M.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY
    })
  })
}) : M.Z.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED_CANNOT_LAUNCH.format({
  userHook: b
});
  } else
n = M.Z.Messages.APPLICATION_COMMAND_USED_SHORT.format({
  userHook: b,
  commandHook: () => {
    let t = function(e, t) {
      let {
        showDataPopout: n,
        message: s,
        onClickCommand: a,
        onPopoutRequestClose: l
      } = e, o = s.interaction.displayName;
      return (0, i.jsx)(d.Popout, {
        renderPopout: t,
        shouldShow: n,
        position: 'top',
        align: 'center',
        onRequestClose: l,
        animation: d.Popout.Animation.FADE,
        positionKey: null != s.interactionData ? 'ready' : 'loading',
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return s.type === A.uaV.CHAT_INPUT_COMMAND || s.type === A.uaV.INTERACTION_PREMIUM_UPSELL ? (0, i.jsx)(d.Clickable, {
            ...n,
            tag: 'span',
            onClick: a,
            children: (0, i.jsxs)('div', {
              className: r()(R.appLauncherOnboardingCommandName, R.clickable),
              children: [
                (0, i.jsx)(d.AppsIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  height: 10,
                  width: 10,
                  className: R.appsIcon
                }),
                o
              ]
            })
          }) : (0, i.jsx)('div', {
            className: R.commandName,
            children: o
          });
        }
      });
    }(e, v);
    return (0, i.jsx)(s.Fragment, {
      children: t
    }, 'command');
  }
});
  return (0, i.jsx)(T.Gt, {
value: c,
children: (0, i.jsx)('div', {
  className: r()(R.repliedMessage, R.executedCommand, L),
  'aria-hidden': !e.compact,
  children: n
})
  });
}