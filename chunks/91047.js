"use strict";
n.r(t), n.d(t, {
  openModerateRoleContextMenu: function() {
    return i
  },
  openModerateUserContextMenu: function() {
    return a
  },
  openModerationRaidContextMenu: function() {
    return o
  },
  openUserContextMenu: function() {
    return r
  }
}), n("411104");
var u = n("735250");
n("470079");
var l = n("239091");

function r(e, t, r) {
  r.isGroupDM() ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("36441"), n.e("82882"), n.e("60677"), n.e("78185")]).then(n.bind(n, "354589"));
    return n => (0, u.jsx)(e, {
      ...n,
      user: t,
      channel: r
    })
  }) : r.isDM() ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("36441"), n.e("82882"), n.e("59743"), n.e("22036"), n.e("56826"), n.e("45746")]).then(n.bind(n, "131404"));
    return n => (0, u.jsx)(e, {
      ...n,
      user: t,
      channel: r,
      showMute: !1,
      targetIsUser: !0
    })
  }) : null != r.guild_id ? (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("36441"), n.e("82882"), n.e("12435"), n.e("7717"), n.e("80869")]).then(n.bind(n, "757387"));
    return n => (0, u.jsx)(e, {
      ...n,
      user: t,
      channel: r,
      guildId: r.guild_id
    })
  }) : (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("36441"), n.e("15421")]).then(n.bind(n, "881351"));
    return n => (0, u.jsx)(e, {
      ...n,
      user: t
    })
  })
}

function a(e, t) {
  let {
    user: r,
    channel: a,
    moderationAlertId: i,
    guildId: o,
    ...s
  } = t;
  if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error("Cannot moderate user in DM or group DM");
  let d = null != o ? o : null == a ? void 0 : a.getGuildId();
  null != d && (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("3084"), n.e("12435"), n.e("85351")]).then(n.bind(n, "833737"));
    return t => (0, u.jsx)(e, {
      ...t,
      user: r,
      channelId: null == a ? void 0 : a.id,
      guildId: d,
      moderationAlertId: i,
      ...s
    })
  })
}

function i(e, t) {
  let {
    user: r,
    guildId: a,
    analyticsLocations: i,
    onCloseContextMenu: o
  } = t;
  (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("45130")]).then(n.bind(n, "246389"));
    return t => (0, u.jsx)(e, {
      ...t,
      user: r,
      guildId: a,
      analyticsLocations: i,
      onCloseContextMenu: o
    })
  })
}

function o(e, t, r) {
  null != r && (0, l.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.e("50331").then(n.bind(n, "158195"));
    return t => (0, u.jsx)(e, {
      ...t,
      guildId: r
    })
  })
}