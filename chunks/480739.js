"use strict";
n.r(t), n.d(t, {
  AnalyticsFeedItemSeenManager: function() {
    return _
  },
  AnalyticsFeedTypes: function() {
    return i
  },
  ForceFlushType: function() {
    return r
  }
}), n("653041"), n("47120");
var i, r, s, a = n("512722"),
  o = n.n(a),
  l = n("570140");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i || (i = {})).FORUM_CHANNEL = "forum_channel", (s = r || (r = {}))[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", s[s.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
class d {
  maybeMarkSeen(e) {
    let t = this.seenIntervals[this.seenIntervals.length - 1];
    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
      startTimeMillis: e
    }), !0)
  }
  maybeMarkUnseen(e) {
    let t = this.seenIntervals[this.seenIntervals.length - 1];
    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
  }
  isVisible() {
    let e = this.seenIntervals[this.seenIntervals.length - 1];
    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
  }
  computeSeenTimeDestructive(e) {
    let t = 0,
      n = [];
    for (let i of this.seenIntervals) {
      if (null != i.endTimeMillis) {
        t += i.endTimeMillis - i.startTimeMillis;
        continue
      }
      if (e) {
        let e = Date.now();
        t += e - i.startTimeMillis, n.push({
          startTimeMillis: e
        });
        continue
      }
      n.push(i)
    }
    return o()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
  }
  constructor() {
    u(this, "seenIntervals", void 0), this.seenIntervals = []
  }
}
class _ {
  maybeFlushSeenItems(e) {
    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
    let t = this.createFlushSeenItemsFunction(e);
    return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
      await t(), e()
    }) : new Promise(e => {
      setTimeout(async () => {
        await t(), e()
      }, 100)
    })
  }
  constructor({
    id: e,
    windowId: t,
    isPaused: n
  }) {
    u(this, "trackedFeedItems", void 0), u(this, "_lastFlushTimeMillis", void 0), u(this, "_pausedFeedItemIds", void 0), u(this, "_paused", void 0), u(this, "_windowId", void 0), u(this, "_isReactNavigationFocused", void 0), u(this, "_id", void 0), u(this, "onInitialize", void 0), u(this, "onTerminate", void 0), u(this, "onFeedItemSeen", void 0), u(this, "onFeedItemUnseen", void 0), u(this, "initialize", () => {
      var e;
      l.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), l.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), l.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), l.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), l.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), l.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), l.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
    }), u(this, "terminate", () => {
      var e;
      l.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), l.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), l.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), l.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), l.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), l.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), l.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
    }), u(this, "handleFeedItemFlush", e => {
      let {
        id: t,
        force: n
      } = e;
      this._id === t && this.maybeFlushSeenItems(n)
    }), u(this, "handleFeedItemSeen", e => {
      var t;
      let n = e.id,
        i = e.timestampMillis,
        r = e.feedItemId;
      if (n !== this._id) return;
      if (this._paused) {
        this._pausedFeedItemIds.add(r);
        return
      }
      let s = this.getTrackedFeedItem(r).maybeMarkSeen(i);
      null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, r, s)
    }), u(this, "handleFeedItemUnseen", e => {
      var t;
      let n = e.id,
        i = e.timestampMillis,
        r = e.feedItemId;
      if (n !== this._id) return;
      this._paused && this._pausedFeedItemIds.delete(r);
      let s = this.getTrackedFeedItem(r).maybeMarkUnseen(i);
      null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, r, s), this.maybeFlushSeenItems()
    }), u(this, "getTrackedFeedItem", e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new d), this.trackedFeedItems[e])), u(this, "getVisibleFeedItemIds", () => {
      let e = Object.keys(this.trackedFeedItems);
      return new Set(e.filter(e => {
        var t;
        return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
      }))
    }), u(this, "handleDrawerClose", () => {
      this._isReactNavigationFocused && this.resume()
    }), u(this, "handleDrawerOpen", () => {
      this._isReactNavigationFocused && this.pause()
    }), u(this, "handleAppStateUpdate", e => {
      let {
        state: t
      } = e;
      "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
    }), u(this, "clearPausedFeedItemIds", () => {
      this._pausedFeedItemIds = new Set, this._paused = !1
    }), u(this, "pause", () => {
      if (this._paused) return;
      let e = this.getVisibleFeedItemIds();
      e.forEach(e => {
        this.handleFeedItemUnseen({
          id: this._id,
          feedItemId: e,
          timestampMillis: Date.now(),
          type: "ANALYTICS_FEED_ITEM_UNSEEN"
        })
      }), this._paused = !0, this._pausedFeedItemIds = e
    }), u(this, "resume", () => {
      this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
        this.handleFeedItemSeen({
          id: this._id,
          feedItemId: e,
          timestampMillis: Date.now(),
          type: "ANALYTICS_FEED_ITEM_SEEN"
        })
      }), this.clearPausedFeedItemIds())
    }), u(this, "handleReactNavigationFocus", (e, t) => {
      this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
    }), u(this, "handleWindowFocus", e => {
      this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
    }), this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
  }
}