"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("481060"),
  d = n("249842"),
  u = n("838367"),
  r = n("83474");

function o(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: o,
    ...c
  } = e, {
    unavailable: h,
    guild: f
  } = (0, s.useStateFromStoresObject)([u.default], () => ({
    guild: u.default.getGuild(t),
    unavailable: u.default.hasFetchFailed(t)
  }), [t]), g = null != f, m = a.useCallback(async () => {
    try {
      !g && await (0, d.fetchGuildForPopout)(t)
    } catch {}
  }, [g, t]);
  return h ? (0, l.jsx)(i.Popout, {
    position: "right",
    renderPopout: e => (0, l.jsx)(r.GuildUnavilableDialog, {}),
    ...c
  }) : (0, l.jsx)(i.Popout, {
    position: "right",
    preload: m,
    renderPopout: e => null == f ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(r.GuildDialog, {
      ...e,
      guild: f,
      channelId: n,
      messageId: o
    }),
    ...c
  })
}