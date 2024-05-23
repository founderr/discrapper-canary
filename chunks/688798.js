"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("661111"),
  s = n("493683"),
  a = n("904245"),
  o = n("147913"),
  l = n("3148"),
  u = n("706454"),
  d = n("695346"),
  _ = n("375954"),
  c = n("709054"),
  E = n("839627"),
  I = n("802098"),
  T = n("128014"),
  f = n("163379"),
  S = n("596401"),
  h = n("981631");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function m(e) {
  if (d.LastReceivedChangelogId.getSetting() >= e) return;
  let t = await s.default.getOrEnsurePrivateChannel(S.SYSTEM_UPDATES_USER_ID);
  if (null == t) return;
  await a.default.fetchMessages({
    channelId: t,
    limit: 1
  });
  let n = _.default.getLastMessage(t);
  if (null == n) return;
  let i = (0, l.default)({
    ...n,
    channelId: t,
    messageReference: void 0,
    poll: void 0,
    changelogId: n.changelogId
  });
  a.default.receiveMessage(t, {
    ...i,
    state: h.MessageStates.SENT,
    channel_id: t
  }, !0, {})
}
class N extends o.default {
  constructor(...e) {
    super(...e), A(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), A(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = E.default.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      }), n = await r.default.fetchChangelogConfig(), s = n.body, a = function(e, t) {
        let n = 0,
          i = null;
        for (var [r, {
            min_version: s
          }] of Object.entries(e)) s <= t && s > n && (n = s, i = r);
        return i
      }(s, (0, T.getClientVersionForChangelog)());
      if (i.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: a
        }), null == a) return;
      if (t) {
        m(a);
        return
      }
      if (!0 !== s[a].show_on_startup) return;
      let o = I.default.lastSeenChangelogId(),
        l = I.default.lastSeenChangelogDate();
      if (null != o && 0 >= c.default.compare(a, o)) return;
      let d = await r.default.fetchChangelog(a, u.default.locale);
      if (null != d) {
        if (null == l || null == I.default.lastSeenChangelogDate()) {
          r.default.markChangelogAsSeen(a, d.date);
          return
        }!I.default.isLocked() && new Date(d.date) > new Date(l) && (0, f.openChangelog)()
      }
    })
  }
}
t.default = new N