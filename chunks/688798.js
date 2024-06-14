"use strict";
n.r(t), n("47120");
var i = n("913527"),
  r = n.n(i),
  s = n("570140"),
  a = n("661111"),
  o = n("493683"),
  l = n("904245"),
  u = n("232567"),
  d = n("147913"),
  _ = n("3148"),
  c = n("960412"),
  E = n("706454"),
  I = n("695346"),
  T = n("375954"),
  f = n("306680"),
  S = n("709054"),
  h = n("839627"),
  A = n("802098"),
  m = n("128014"),
  N = n("163379"),
  p = n("596401"),
  O = n("981631"),
  C = n("930441");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function g(e, t) {
  let n = I.LastReceivedChangelogId.getSetting(),
    i = S.default.extractTimestamp(e);
  if ((n >= e || r()().diff(i, "days") > 30) && !t) return;
  let s = await (0, c.fetchEmailSettings)();
  if (!(null == s ? void 0 : s.categories[C.EmailCategories.UPDATES_AND_ANNOUNCEMENTS])) return;
  let a = await o.default.getOrEnsurePrivateChannel(p.SYSTEM_UPDATES_USER_ID);
  if (null == a) return;
  await l.default.fetchMessages({
    channelId: a,
    limit: 1
  });
  let u = T.default.getLastMessage(a),
    d = f.default.getOldestUnreadMessageId(a),
    E = f.default.hasUnread(a);
  if (null == u || null == d || E || u.id > d) return;
  let h = (0, _.default)({
    ...u,
    channelId: a,
    messageReference: void 0,
    poll: void 0,
    changelogId: u.changelogId
  });
  l.default.receiveMessage(a, {
    ...h,
    state: O.MessageStates.SENT,
    channel_id: a
  }, !0, {})
}
class L extends d.default {
  constructor(...e) {
    super(...e), R(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), R(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t,
        canReceiveUnpublishedMessages: n
      } = h.default.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      }), i = await a.default.fetchChangelogConfig(), r = i.body, o = function(e, t) {
        let n = 0,
          i = null;
        for (var [r, {
            min_version: s
          }] of Object.entries(e)) s <= t && s > n && (n = s, i = r);
        return i
      }(r, (0, m.getClientVersionForChangelog)());
      if (s.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: i.body,
          latestChangelogId: o
        }), null == o) return;
      if (t) {
        (0, u.getUser)(p.SYSTEM_UPDATES_USER_ID), g(o, n);
        return
      }
      if (!0 !== r[o].show_on_startup) return;
      let l = A.default.lastSeenChangelogId(),
        d = A.default.lastSeenChangelogDate();
      if (null != l && 0 >= S.default.compare(o, l)) return;
      let _ = await a.default.fetchChangelog(o, E.default.locale);
      if (null != _) {
        if (null == d || null == A.default.lastSeenChangelogDate()) {
          a.default.markChangelogAsSeen(o, _.date);
          return
        }!A.default.isLocked() && new Date(_.date) > new Date(d) && (0, N.openChangelog)()
      }
    })
  }
}
t.default = new L