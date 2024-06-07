"use strict";
l.r(t), l.d(t, {
  openModerateRoleContextMenu: function() {
    return r
  },
  openModerateUserContextMenu: function() {
    return s
  },
  openModerationRaidContextMenu: function() {
    return o
  },
  openUserContextMenu: function() {
    return a
  }
}), l("411104");
var i = l("735250");
l("470079");
var n = l("239091");

function a(e, t, a) {
  a.isGroupDM() ? (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("36441"), l.e("82882"), l.e("60677"), l.e("78185")]).then(l.bind(l, "354589"));
    return l => (0, i.jsx)(e, {
      ...l,
      user: t,
      channel: a
    })
  }) : a.isDM() ? (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("36441"), l.e("82882"), l.e("22036"), l.e("59743"), l.e("56826"), l.e("45746")]).then(l.bind(l, "131404"));
    return l => (0, i.jsx)(e, {
      ...l,
      user: t,
      channel: a,
      showMute: !1,
      targetIsUser: !0
    })
  }) : null != a.guild_id ? (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("36441"), l.e("82882"), l.e("12435"), l.e("7717"), l.e("80869")]).then(l.bind(l, "757387"));
    return l => (0, i.jsx)(e, {
      ...l,
      user: t,
      channel: a,
      guildId: a.guild_id
    })
  }) : (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("36441"), l.e("15421")]).then(l.bind(l, "881351"));
    return l => (0, i.jsx)(e, {
      ...l,
      user: t
    })
  })
}

function s(e, t) {
  let {
    user: a,
    channel: s,
    moderationAlertId: r,
    guildId: o,
    ...u
  } = t;
  if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let d = null != o ? o : null == s ? void 0 : s.getGuildId();
  null != d && (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("3084"), l.e("12435"), l.e("85351")]).then(l.bind(l, "833737"));
    return t => (0, i.jsx)(e, {
      ...t,
      user: a,
      channelId: null == s ? void 0 : s.id,
      guildId: d,
      moderationAlertId: r,
      ...u
    })
  })
}

function r(e, t) {
  let {
    user: a,
    guildId: s,
    analyticsLocations: r,
    onCloseContextMenu: o
  } = t;
  (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("45130")]).then(l.bind(l, "246389"));
    return t => (0, i.jsx)(e, {
      ...t,
      user: a,
      guildId: s,
      analyticsLocations: r,
      onCloseContextMenu: o
    })
  })
}

function o(e, t, a) {
  null != a && (0, n.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("50331")]).then(l.bind(l, "158195"));
    return t => (0, i.jsx)(e, {
      ...t,
      guildId: a
    })
  })
}