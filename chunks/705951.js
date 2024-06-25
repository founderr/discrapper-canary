"use strict";
n(47120);
var i = n(147913),
  r = n(70956),
  s = n(272008),
  o = n(569984),
  a = n(918701),
  l = n(5881),
  u = n(46140);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = 1 * r.Z.Millis.SECOND,
  d = (0, l.T)({
    location: u.dr.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER
  });
class E extends i.Z {
  constructor(...e) {
    super(...e), _(this, "optimisticUpdatesMap", new Map), _(this, "optimisticUpdatesInterval", null), _(this, "_shouldHaveOptimisticUpdates", e => {
      let t = o.Z.getQuest(e);
      if (null == t || null == t.userStatus) return !1;
      let n = null != t.userStatus.completedAt,
        i = null != t.userStatus.enrolledAt,
        r = null != t.userStatus.claimedAt;
      return i && !r && !n && (0, a.$J)(t) && (0, a.Bz)(t)
    }), _(this, "_initiateOptimisticUpdatesIfNeeded", e => {
      let t = o.Z.getQuest(e);
      if (null == t || !this._shouldHaveOptimisticUpdates(e)) return;
      let n = (0, a.Gh)(t);
      null != n && (this.optimisticUpdatesMap.set(e, {
        updateAt: Date.now(),
        taskType: n.taskType
      }), null == this.optimisticUpdatesInterval && this.optimisticUpdatesMap.size > 0 && (this.optimisticUpdatesInterval = window.setInterval(this._optimisticUpdatesLoop, c)))
    }), _(this, "_optimisticUpdatesLoop", () => {
      if (this.optimisticUpdatesMap.forEach((e, t) => {
          let n = o.Z.getQuest(t);
          (null == n || null == n.userStatus || !this._shouldHaveOptimisticUpdates(t)) && this.optimisticUpdatesMap.delete(t)
        }), 0 === this.optimisticUpdatesMap.size) {
        clearInterval(this.optimisticUpdatesInterval), this.optimisticUpdatesInterval = null;
        return
      }
      this.optimisticUpdatesMap.forEach((e, t) => {
        let n = o.Z.getQuest(t);
        if (null == n || null == n.userStatus) return;
        let i = (0, a.Gh)(n);
        if (null != i && Date.now() >= e.updateAt) {
          let {
            targetSeconds: o,
            progressSeconds: a,
            taskType: l
          } = i, u = (Date.now() - e.updateAt) / r.Z.Millis.SECOND, _ = Math.min(a + u, o), c = {
            ...n.userStatus,
            progress: {
              [l]: {
                ...n.userStatus.progress[l],
                eventName: l,
                value: _
              }
            }
          };
          if ((0, s.kP)(c), d.log("Dispatching optimistic update:", {
              secondsSinceLastUpdate: u,
              optimisticProgressValue: _,
              optimisticUpdatesMap: this.optimisticUpdatesMap
            }), _ >= .995 * o) {
            this.optimisticUpdatesMap.delete(t);
            return
          }
          this.optimisticUpdatesMap.set(t, {
            updateAt: Date.now(),
            taskType: l
          })
        }
      })
    }), _(this, "handleFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      t.forEach(e => {
        this._initiateOptimisticUpdatesIfNeeded(e.id)
      })
    }), _(this, "handleQuestUserStatusUpdate", e => {
      let {
        user_status: t
      } = e;
      this._initiateOptimisticUpdatesIfNeeded(t.quest_id)
    }), _(this, "handleEnrollSuccess", e => {
      let {
        enrolledQuestUserStatus: t
      } = e;
      this._initiateOptimisticUpdatesIfNeeded(t.questId)
    }), _(this, "handleClaimRewardSuccess", e => {
      let {
        questId: t
      } = e;
      this.optimisticUpdatesMap.has(t) && this.optimisticUpdatesMap.delete(t)
    }), _(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleFetchCurrentQuestsSuccess,
      QUESTS_ENROLL_SUCCESS: this.handleEnrollSuccess,
      QUESTS_USER_STATUS_UPDATE: this.handleQuestUserStatusUpdate,
      QUESTS_CLAIM_REWARD_SUCCESS: this.handleClaimRewardSuccess
    })
  }
}
t.Z = new E