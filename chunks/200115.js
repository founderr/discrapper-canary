"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var i = s("735250");
s("470079");
var n = s("913527"),
  a = s.n(n),
  l = s("399606"),
  r = s("481060"),
  o = s("92114"),
  d = s("430824"),
  u = s("9156"),
  c = s("621600"),
  h = s("423589"),
  S = s("969943"),
  N = s("689938"),
  f = s("510230");

function g(e) {
  var t;
  let {
    guildId: s
  } = e, n = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(s)), g = (0, l.useStateFromStores)([u.default], () => u.default.isMuted(s)), m = (0, l.useStateFromStores)([u.default], () => u.default.getMuteConfig(s));
  return null == n ? null : (0, i.jsxs)(r.FormItem, {
    children: [(0, i.jsx)(r.FormSwitch, {
      hideBorder: !0,
      value: g,
      onChange: e => {
        o.default.updateGuildNotificationSettings(s, {
          muted: e
        }, c.NotificationLabel.muted(e))
      },
      style: {
        marginBottom: 0
      },
      note: N.default.Messages.FOR_LABEL_MUTE_SEVER_DESCRIPTION_V2,
      children: N.default.Messages.FORM_LABEL_MUTE_SERVER.format({
        name: n.name
      })
    }), g && (0, i.jsxs)("div", {
      className: f.mutedConfig,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.FormTitle, {
          tag: "h3",
          children: N.default.Messages.MUTE_UNTIL
        }), (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: function(e) {
            return null == e || null == e.end_time ? null : N.default.Messages.MUTED_UNTIL_TIME.format({
              endTime: new Date(e.end_time).toLocaleString(N.default.getLocale(), {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
            })
          }(m)
        })]
      }), (0, i.jsx)(r.SingleSelect, {
        onChange: e => {
          let t = e > 0 ? a()().add(e, "second").toISOString() : null;
          o.default.updateGuildNotificationSettings(s, {
            mute_config: {
              selected_time_window: e,
              end_time: t
            },
            muted: !0
          }, c.NotificationLabels.Muted)
        },
        options: (0, h.getMuteTimeOptions)(),
        value: null !== (t = null == m ? void 0 : m.selected_time_window) && void 0 !== t ? t : S.MuteUntilSeconds.ALWAYS
      })]
    })]
  })
}