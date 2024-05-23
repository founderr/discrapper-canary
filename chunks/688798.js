"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("661111"),
  s = n("493683"),
  a = n("904245"),
  o = n("147913"),
  l = n("3148"),
  u = n("960412"),
  d = n("706454"),
  _ = n("695346"),
  c = n("375954"),
  E = n("709054"),
  I = n("839627"),
  T = n("802098"),
  f = n("128014"),
  S = n("163379"),
  h = n("596401"),
  A = n("981631"),
  m = n("930441");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function p(e) {
  if (_.LastReceivedChangelogId.getSetting() >= e) return;
  let t = await s.default.getOrEnsurePrivateChannel(h.SYSTEM_UPDATES_USER_ID);
  if (null == t) return;
  await a.default.fetchMessages({
    channelId: t,
    limit: 1
  });
  let n = c.default.getLastMessage(t);
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
    state: A.MessageStates.SENT,
    channel_id: t
  }, !0, {})
}
class O extends o.default {
  constructor(...e) {
    super(...e), N(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), N(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = I.default.getCurrentConfig({
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
      }(s, (0, f.getClientVersionForChangelog)());
      if (i.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: a
        }), null == a) return;
      let o = await (0, u.fetchEmailSettings)();
      if (t && (null == o ? void 0 : o.categories[m.EmailCategories.UPDATES_AND_ANNOUNCEMENTS])) {
        p(a);
        return
      }
      if (!0 !== s[a].show_on_startup) return;
      let l = T.default.lastSeenChangelogId(),
        _ = T.default.lastSeenChangelogDate();
      if (null != l && 0 >= E.default.compare(a, l)) return;
      let c = await r.default.fetchChangelog(a, d.default.locale);
      if (null != c) {
        if (null == _ || null == T.default.lastSeenChangelogDate()) {
          r.default.markChangelogAsSeen(a, c.date);
          return
        }!T.default.isLocked() && new Date(c.date) > new Date(_) && (0, S.openChangelog)()
      }
    })
  }
}
t.default = new O