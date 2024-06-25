t.d(n, {
  Z: function() {
    return T
  }
}), t(653041), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(481060),
  a = t(139387),
  r = t(933557),
  o = t(699516),
  c = t(594174),
  d = t(491302),
  u = t(936726),
  I = t(981631),
  N = t(689938),
  E = t(390499);

function T(e) {
  let {
    webhooks: n,
    selectableWebhookChannels: t,
    lastCreatedWebhookId: T,
    editedWebhook: m,
    errors: _,
    canNavigate: h
  } = e, g = l.useMemo(() => Object.values(t).map(e => ({
    value: e.id,
    label: (0, r.F6)(e, c.default, o.Z, !0)
  })), [t]), O = l.useMemo(() => {
    let e = {};
    for (let i of n)
      if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
      else {
        let n = t[i.channel_id];
        null != n && (e[i.channel_id] = {
          channel: n,
          webhooks: [i]
        })
      } return Object.values(e).sort((e, n) => e.channel.name.localeCompare(n.channel.name))
  }, [t, n]), A = l.useCallback(e => {
    h() && (e === (null == m ? void 0 : m.id) ? a.Z.stopEditingWebhook() : a.Z.startEditingWebhook(e))
  }, [h, m]);
  return (0, i.jsx)("div", {
    className: E.__invalid_list,
    children: O.map(e => {
      let {
        channel: n,
        webhooks: t
      } = e;
      return function(e) {
        let {
          channel: n,
          webhooks: t,
          channelOptions: l,
          lastCreatedWebhookId: a,
          editedWebhook: T,
          errors: m,
          toggleWebhookExpand: _
        } = e;
        return (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.FormTitle, {
            className: E.groupHeader,
            children: N.Z.Messages.INTEGRATIONS_CHANNEL_FOLLOWING_SECTION.format({
              channelHook: () => (0, i.jsx)("span", {
                className: E.channelName,
                children: (0, r.F6)(n, c.default, o.Z, !0)
              }, n.id)
            })
          }), t.map(e => {
            var n;
            if (e.type === I.ylB.CHANNEL_FOLLOWER) return (0, i.jsx)(d.Z, {
              webhook: e,
              editedWebhook: T,
              channelOptions: l,
              isExpanded: (null == T ? void 0 : T.id) === e.id,
              onToggleExpand: () => _(e.id),
              errors: m
            }, e.id);
            return (0, i.jsx)(u.Z, {
              id: (n = e.id, "settings-integrations-webhook-".concat(n)),
              webhook: e,
              editedWebhook: T,
              channelOptions: l,
              isExpanded: (null == T ? void 0 : T.id) === e.id,
              isNew: a === e.id,
              onToggleExpand: () => _(e.id),
              errors: m
            }, e.id)
          })]
        }, n.id)
      }({
        channel: n,
        webhooks: t,
        channelOptions: g,
        lastCreatedWebhookId: T,
        editedWebhook: m,
        errors: _,
        toggleWebhookExpand: A
      })
    })
  })
}