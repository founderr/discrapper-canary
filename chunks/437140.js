"use strict";
n.r(e), n.d(e, {
  default: function() {
    return h
  }
}), n("70102");
var i = n("759843"),
  r = n("627929"),
  l = n("913144"),
  s = n("81732"),
  a = n("282109"),
  o = n("34676"),
  u = n("840707"),
  c = n("519705"),
  d = n("49111"),
  f = n("397336"),
  h = {
    createChannel(t) {
      let {
        guildId: e,
        type: n,
        name: h,
        permissionOverwrites: p = [],
        bitrate: _,
        userLimit: v,
        parentId: C,
        skuId: E,
        branchId: g
      } = t;
      l.default.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT"
      });
      let I = {
        type: n,
        name: h,
        permission_overwrites: p
      };
      if (null != _ && _ !== d.BITRATE_DEFAULT && (I.bitrate = _), null != v && v > 0 && (I.user_limit = v), null != C && (I.parent_id = C), n === d.ChannelTypes.GUILD_STORE) {
        if (null == E) throw Error("Unexpected missing SKU");
        I.sku_id = E, I.branch_id = g
      }
      return u.default.post({
        url: d.Endpoints.GUILD_CHANNELS(e),
        body: I,
        oldFormErrors: !0,
        trackedActionData: {
          event: i.NetworkActionNames.CHANNEL_CREATE,
          properties: t => {
            var e, n;
            return (0, r.exact)({
              is_private: p.length > 0,
              channel_id: null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.id,
              channel_type: null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.type
            })
          }
        }
      }).then(t => (a.default.isOptInEnabled(e) && c.default.updateChannelOverrideSettings(e, t.body.id, {
        flags: f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED
      }, o.NotificationLabels.OptedIn), s.default.checkGuildTemplateDirty(e), t), t => {
        throw l.default.dispatch({
          type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
          errors: t.body
        }), t
      })
    },
    createRoleSubscriptionTemplateChannel: (t, e, n, l) => u.default.post({
      url: d.Endpoints.GUILD_CHANNELS(t),
      body: {
        name: e,
        type: n,
        topic: l
      },
      oldFormErrors: !0,
      trackedActionData: {
        event: i.NetworkActionNames.CHANNEL_CREATE,
        properties: t => {
          var e, n;
          return (0, r.exact)({
            is_private: !0,
            channel_id: null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.id,
            channel_type: null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.type
          })
        }
      }
    })
  }