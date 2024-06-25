"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250),
  r = n(470079),
  s = n(481060),
  o = n(367907),
  a = n(10718),
  l = n(69626),
  u = n(626135),
  _ = n(659101),
  c = n(981631),
  d = n(689938),
  E = n(712543),
  I = n(546136);

function T(e) {
  let {
    applicationId: t,
    commandIds: n,
    channel: T,
    guildId: h,
    onClick: S
  } = e, {
    commands: f
  } = a.Qm(T, t, n), N = r.useMemo(() => null == f ? void 0 : f.filter(e => !0 !== e.nsfw), [f]), A = r.useCallback(e => {
    null == S || S(), u.default.track(c.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, {
      application_id: t,
      command_id: e,
      guild_id: h,
      ...(0, o.JS)(T.id)
    })
  }, [t, T.id, h, S]);
  return null == N || 0 === N.length ? null : (0, i.jsxs)(_.Z, {
    children: [(0, i.jsx)(s.Heading, {
      variant: "eyebrow",
      className: I.title,
      children: d.Z.Messages.BOT_PROFILE_SLASH_COMMANDS
    }), (0, i.jsx)("ul", {
      className: E.popularApplicationCommandsList,
      children: N.map(e => (0, i.jsx)("li", {
        children: (0, i.jsx)(l.wz, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: A,
          guildId: h,
          channelId: T.id
        })
      }, e.id))
    })]
  })
}