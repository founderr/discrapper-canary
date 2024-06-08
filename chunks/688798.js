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
  let i = await (0, c.fetchEmailSettings)();
  if (!(null == i ? void 0 : i.categories[O.EmailCategories.UPDATES_AND_ANNOUNCEMENTS])) return;
  let s = await o.default.getOrEnsurePrivateChannel(N.SYSTEM_UPDATES_USER_ID);
  if (null == s) return;
  await l.default.fetchMessages({
    channelId: s,
    limit: 1
  });
  let a = T.default.getLastMessage(s);
  if (null == a) return;
  let u = (0, _.default)({
    ...a,
    channelId: s,
    messageReference: void 0,
    poll: void 0,
    changelogId: a.changelogId
  });
  l.default.receiveMessage(s, {
    ...u,
    state: p.MessageStates.SENT,
    channel_id: s
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
      if (t) {
        (0, u.getUser)(N.SYSTEM_UPDATES_USER_ID), R(r);
        return
      }
      if (!0 !== i[r].show_on_startup) return;
      let o = h.default.lastSeenChangelogId(),
        l = h.default.lastSeenChangelogDate();
      if (null != o && 0 >= f.default.compare(r, o)) return;
      let d = await a.default.fetchChangelog(r, E.default.locale);
      if (null != d) {
        if (null == l || null == h.default.lastSeenChangelogDate()) {
          a.default.markChangelogAsSeen(r, d.date);
          return
        }!h.default.isLocked() && new Date(d.date) > new Date(l) && (0, m.openChangelog)()
      }
    })
  }
}
t.default = new g