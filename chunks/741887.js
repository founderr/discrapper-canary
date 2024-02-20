"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("913144"),
  a = n("689988"),
  l = n("393414"),
  s = n("718517"),
  r = n("799895"),
  o = n("979268"),
  u = n("520899"),
  d = n("49111");
class c extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }, this.handlePostConnectionOpen = () => {
      ! function e() {
        o.default.getCurrentConfig({
          location: "8fe27d_1"
        }, {
          autoTrackExposure: !1
        }).showReminders && (u.default.getMessageReminders().filter(e => null != e.dueAt && new Date > e.dueAt).filter(e => !u.default.hasSentNotification(e.messageId)).forEach(e => {
          var t, n;
          r.default.showNotification(null, "Overdue reminder in ".concat(e.channelSummary), null !== (n = null !== (t = e.notes) && void 0 !== t ? t : e.messageSummary) && void 0 !== n ? n : "", {
            notif_type: "OVERDUE_MESSAGE_REMINDER",
            notif_user_id: e.authorId,
            message_id: e.messageId,
            channel_id: e.channelId,
            guild_id: e.guildId
          }, {
            omitViewTracking: !0,
            tag: e.messageId,
            onClick() {
              (0, l.transitionTo)(d.Routes.CHANNEL(e.guildId, e.channelId, e.messageId))
            }
          }), i.default.dispatch({
            type: "MESSAGE_REMINDER_NOTIFIED",
            messageId: e.messageId
          })
        }), setTimeout(() => {
          e()
        }, 5 * s.default.Millis.MINUTE))
      }()
    }
  }
}
var f = new c