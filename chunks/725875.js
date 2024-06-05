"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("653041"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("139387"),
  r = l("933557"),
  o = l("699516"),
  d = l("594174"),
  u = l("491302"),
  c = l("936726"),
  f = l("981631"),
  I = l("689938"),
  m = l("365246");

function T(e) {
  let {
    webhooks: t,
    selectableWebhookChannels: l,
    lastCreatedWebhookId: T,
    editedWebhook: E,
    errors: N,
    canNavigate: _
  } = e, S = a.useMemo(() => Object.values(l).map(e => ({
    value: e.id,
    label: (0, r.computeChannelName)(e, d.default, o.default, !0)
  })), [l]), h = a.useMemo(() => {
    let e = {};
    for (let n of t)
      if (n.channel_id in e) e[n.channel_id].webhooks.push(n);
      else {
        let t = l[n.channel_id];
        null != t && (e[n.channel_id] = {
          channel: t,
          webhooks: [n]
        })
      } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
  }, [l, t]), g = a.useCallback(e => {
    _() && (e === (null == E ? void 0 : E.id) ? i.default.stopEditingWebhook() : i.default.startEditingWebhook(e))
  }, [_, E]);
  return (0, n.jsx)("div", {
    className: m.__invalid_list,
    children: h.map(e => {
      let {
        channel: t,
        webhooks: l
      } = e;
      return function(e) {
        let {
          channel: t,
          webhooks: l,
          channelOptions: a,
          lastCreatedWebhookId: i,
          editedWebhook: T,
          errors: E,
          toggleWebhookExpand: N
        } = e;
        return (0, n.jsxs)("div", {
          children: [(0, n.jsx)(s.FormTitle, {
            className: m.groupHeader,
            children: I.default.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
              channelHook: () => (0, n.jsx)("span", {
                className: m.channelName,
                children: (0, r.computeChannelName)(t, d.default, o.default, !0)
              }, t.id)
            })
          }), l.map(e => {
            var t;
            if (e.type === f.WebhookTypes.CHANNEL_FOLLOWER) return (0, n.jsx)(u.default, {
              webhook: e,
              editedWebhook: T,
              channelOptions: a,
              isExpanded: (null == T ? void 0 : T.id) === e.id,
              onToggleExpand: () => N(e.id),
              errors: E
            }, e.id);
            return (0, n.jsx)(c.default, {
              id: (t = e.id, "settings-integrations-webhook-".concat(t)),
              webhook: e,
              editedWebhook: T,
              channelOptions: a,
              isExpanded: (null == T ? void 0 : T.id) === e.id,
              isNew: i === e.id,
              onToggleExpand: () => N(e.id),
              errors: E
            }, e.id)
          })]
        }, t.id)
      }({
        channel: t,
        webhooks: l,
        channelOptions: S,
        lastCreatedWebhookId: T,
        editedWebhook: E,
        errors: N,
        toggleWebhookExpand: g
      })
    })
  })
}