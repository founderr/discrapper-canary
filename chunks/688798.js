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
  f = n("709054"),
  S = n("839627"),
  h = n("802098"),
  A = n("128014"),
  m = n("163379"),
  N = n("596401"),
  p = n("981631"),
  O = n("930441");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function R(e) {
  let t = I.LastReceivedChangelogId.getSetting(),
    n = f.default.extractTimestamp(e);
  if (t >= e || r()().diff(n, "days") > 30) return;
  let i = await o.default.getOrEnsurePrivateChannel(N.SYSTEM_UPDATES_USER_ID);
  if (null == i) return;
  await l.default.fetchMessages({
    channelId: i,
    limit: 1
  });
  let s = T.default.getLastMessage(i);
  if (null == s) return;
  let a = (0, _.default)({
    ...s,
    channelId: i,
    messageReference: void 0,
    poll: void 0,
    changelogId: s.changelogId
  });
  l.default.receiveMessage(i, {
    ...a,
    state: p.MessageStates.SENT,
    channel_id: i
  }, !0, {})
}
class g extends d.default {
  constructor(...e) {
    super(...e), C(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), C(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = S.default.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      }), n = await a.default.fetchChangelogConfig(), i = n.body, r = function(e, t) {
        let n = 0,
          i = null;
        for (var [r, {
            min_version: s
          }] of Object.entries(e)) s <= t && s > n && (n = s, i = r);
        return i
      }(i, (0, A.getClientVersionForChangelog)());
      if (s.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: r
        }), null == r) return;
      let o = await (0, c.fetchEmailSettings)();
      if (t && (null == o ? void 0 : o.categories[O.EmailCategories.UPDATES_AND_ANNOUNCEMENTS])) {
        (0, u.getUser)(N.SYSTEM_UPDATES_USER_ID), R(r);
        return
      }
      if (!0 !== i[r].show_on_startup) return;
      let l = h.default.lastSeenChangelogId(),
        d = h.default.lastSeenChangelogDate();
      if (null != l && 0 >= f.default.compare(r, l)) return;
      let _ = await a.default.fetchChangelog(r, E.default.locale);
      if (null != _) {
        if (null == d || null == h.default.lastSeenChangelogDate()) {
          a.default.markChangelogAsSeen(r, _.date);
          return
        }!h.default.isLocked() && new Date(_.date) > new Date(d) && (0, m.openChangelog)()
      }
    })
  }
}
t.default = new g