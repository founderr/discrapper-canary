"use strict";
l.r(t), l.d(t, {
  ChannelSettingsIntegrationsNotice: function() {
    return h
  },
  default: function() {
    return c
  }
});
var s = l("735250");
l("470079");
var a = l("442837"),
  n = l("139387"),
  i = l("852860"),
  r = l("490655"),
  o = l("533947"),
  d = l("388610"),
  u = l("430824");

function c(e) {
  let {
    refToScroller: t
  } = e, {
    channel: l
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps(), []), n = (0, a.useStateFromStores)([u.default], () => null != l ? u.default.getGuild(l.getGuildId()) : null, [l]), {
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: m,
    isFetching: f,
    errors: E
  } = (0, a.useStateFromStores)([o.default], () => o.default.getProps(), []);
  return null == n || null == l ? null : (0, s.jsx)(r.default, {
    guild: n,
    channel: l,
    section: i,
    sectionId: c,
    webhooks: h,
    editedWebhook: m,
    isFetching: f,
    hasChanges: o.default.hasChanges,
    errors: E,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, a.useStateFromStores)([d.default], () => d.default.getProps()), l = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getGuild(e.getGuildId()) : null, [e]);
  return (0, s.jsx)(i.default, {
    submitting: t,
    onReset: () => {
      n.default.init()
    },
    onSave: () => {
      null != l && null != o.default.editedWebhook && n.default.saveWebhook(l.id, o.default.editedWebhook)
    }
  })
}