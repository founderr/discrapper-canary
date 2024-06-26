"use strict";
var i = n(544891),
  r = n(570140),
  s = n(960048),
  o = n(207205),
  a = n(981631);
t.Z = {
  async fetchDehydrated() {
    if (!!(0, o.rK)("fetchDehydrated")) try {
      let e = Date.now(),
        t = await i.tn.get({
          url: a.ANM.GRAVITY_ITEMS_DEHYDRATED
        });
      await r.Z.dispatch({
        type: "LOAD_GRAVITY_DEHYDRATED",
        items: t.body.items,
        loadId: t.body.load_id,
        startTime: e
      })
    } catch (e) {
      s.Z.captureException(e)
    }
  },
  async fetchHydrated(e, t, n, l, u) {
    if (!!(0, o.rK)("fetchHydrated")) {
      if (0 === e.length && 0 === t.length && 0 === n.length) {
        r.Z.dispatch({
          type: "LOAD_GRAVITY_HYDRATED",
          requestMessageItems: e,
          requestSummaryItems: t,
          requestActivityItems: n,
          messageItems: [],
          summaryItems: [],
          activityItems: [],
          startingIndex: l,
          endingIndex: u
        });
        return
      }
      try {
        let s = await i.tn.post({
          url: a.ANM.GRAVITY_ITEMS_HYDRATE,
          body: {
            message_items: e,
            summary_items: t,
            activity_items: n
          }
        });
        r.Z.dispatch({
          type: "LOAD_GRAVITY_HYDRATED",
          requestMessageItems: e,
          requestSummaryItems: t,
          requestActivityItems: n,
          messageItems: s.body.message_items,
          summaryItems: s.body.summary_items,
          activityItems: s.body.activity_items,
          startingIndex: l,
          endingIndex: u
        })
      } catch (e) {
        s.Z.captureException(e)
      }
    }
  },
  async getGuildChannelScores() {
    if (!!(0, o.rK)("guildChannelScores")) try {
      let e = await i.tn.get({
        url: a.ANM.GRAVITY_CUSTOM_SCORES
      });
      r.Z.dispatch({
        type: "LOAD_GRAVITY_CUSTOM_SCORES",
        scores: e.body
      })
    } catch (e) {
      s.Z.captureException(e)
    }
  },
  reloadICYMITab() {
    r.Z.dispatch({
      type: "RELOAD_GRAVITY"
    })
  },
  openICYMITab() {
    r.Z.dispatch({
      type: "GRAVITY_TAB_OPENED"
    })
  },
  ackGravityItems: e => r.Z.dispatch({
    type: "GRAVITY_ACK_ITEMS",
    items: e
  }),
  setFilters: e => r.Z.dispatch({
    type: "SET_GRAVITY_FILTERS",
    filters: e
  }),
  giveFeedback: () => r.Z.dispatch({
    type: "GRAVITY_FEEDBACK_GIVEN"
  })
}