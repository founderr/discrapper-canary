"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("661111"),
  s = n("493683"),
  a = n("904245"),
  o = n("232567"),
  l = n("147913"),
  u = n("3148"),
  d = n("960412"),
  _ = n("706454"),
  c = n("695346"),
  E = n("375954"),
  I = n("709054"),
  T = n("839627"),
  f = n("802098"),
  S = n("128014"),
  h = n("163379"),
  A = n("596401"),
  m = n("981631"),
  N = n("930441");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function O(e) {
  if (c.LastReceivedChangelogId.getSetting() >= e) return;
  let t = await s.default.getOrEnsurePrivateChannel(A.SYSTEM_UPDATES_USER_ID);
  if (null == t) return;
  await a.default.fetchMessages({
    channelId: t,
    limit: 1
  });
  let n = E.default.getLastMessage(t);
  if (null == n) return;
  let i = (0, u.default)({
    ...n,
    channelId: t,
    messageReference: void 0,
    poll: void 0,
    changelogId: n.changelogId
  });
  a.default.receiveMessage(t, {
    ...i,
    state: m.MessageStates.SENT,
    channel_id: t
  }, !0, {})
}
class C extends l.default {
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), p(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = T.default.getCurrentConfig({
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
      }(s, (0, S.getClientVersionForChangelog)());
      if (i.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: a
        }), null == a) return;
      let l = await (0, d.fetchEmailSettings)();
      if (t && (null == l ? void 0 : l.categories[N.EmailCategories.UPDATES_AND_ANNOUNCEMENTS])) {
        (0, o.getUser)(A.SYSTEM_UPDATES_USER_ID), O(a);
        return
      }
      if (!0 !== s[a].show_on_startup) return;
      let u = f.default.lastSeenChangelogId(),
        c = f.default.lastSeenChangelogDate();
      if (null != u && 0 >= I.default.compare(a, u)) return;
      let E = await r.default.fetchChangelog(a, _.default.locale);
      if (null != E) {
        if (null == c || null == f.default.lastSeenChangelogDate()) {
          r.default.markChangelogAsSeen(a, E.date);
          return
        }!f.default.isLocked() && new Date(E.date) > new Date(c) && (0, h.openChangelog)()
      }
    })
  }
}
t.default = new C