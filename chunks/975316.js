t.d(s, {
  B: function() {
    return h
  },
  Z: function() {
    return u
  }
});
var l = t(735250);
t(470079);
var n = t(442837),
  i = t(139387),
  a = t(852860),
  r = t(490655),
  o = t(533947),
  d = t(388610),
  c = t(430824);

function u(e) {
  let {
    refToScroller: s
  } = e, {
    channel: t
  } = (0, n.e7)([d.Z], () => d.Z.getProps(), []), i = (0, n.e7)([c.Z], () => null != t ? c.Z.getGuild(t.getGuildId()) : null, [t]), {
    section: a,
    sectionId: u,
    webhooks: h,
    editedWebhook: m,
    isFetching: g,
    errors: E
  } = (0, n.e7)([o.Z], () => o.Z.getProps(), []);
  return null == i || null == t ? null : (0, l.jsx)(r.Z, {
    guild: i,
    channel: t,
    section: a,
    sectionId: u,
    webhooks: h,
    editedWebhook: m,
    isFetching: g,
    hasChanges: o.Z.hasChanges,
    errors: E,
    refToScroller: s
  })
}

function h() {
  let {
    channel: e,
    submitting: s
  } = (0, n.e7)([d.Z], () => d.Z.getProps()), t = (0, n.e7)([c.Z], () => null != e ? c.Z.getGuild(e.getGuildId()) : null, [e]);
  return (0, l.jsx)(a.Z, {
    submitting: s,
    onReset: () => {
      i.Z.init()
    },
    onSave: () => {
      if (null != t) null != o.Z.editedWebhook && i.Z.saveWebhook(t.id, o.Z.editedWebhook)
    }
  })
}