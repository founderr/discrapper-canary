n.d(t, {
    AT: function () {
        return r;
    },
    cs: function () {
        return i;
    },
    zQ: function () {
        return f;
    }
});
var r,
    i,
    a = n(653041);
var o = n(47120);
var s = n(512722),
    l = n.n(s),
    u = n(570140);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = 60000,
    _ = 3000;
!(function (e) {
    e.FORUM_CHANNEL = 'forum_channel';
})(r || (r = {})),
    !(function (e) {
        (e[(e.IMMEDIATE = 0)] = 'IMMEDIATE'), (e[(e.IMMEDIATE_WITH_COOLDOWN = 1)] = 'IMMEDIATE_WITH_COOLDOWN'), (e[(e.IMMEDIATE_WITH_DELAY = 2)] = 'IMMEDIATE_WITH_DELAY');
    })(i || (i = {}));
class E {
    maybeMarkSeen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({ startTimeMillis: e }), !0);
    }
    maybeMarkUnseen(e) {
        let t = this.seenIntervals[this.seenIntervals.length - 1];
        return null != t && null == t.endTimeMillis && ((t.endTimeMillis = e), !0);
    }
    isVisible() {
        let e = this.seenIntervals[this.seenIntervals.length - 1];
        return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null;
    }
    computeSeenTimeDestructive(e) {
        let t = 0,
            n = [];
        for (let r of this.seenIntervals) {
            if (null != r.endTimeMillis) {
                t += r.endTimeMillis - r.startTimeMillis;
                continue;
            }
            if (e) {
                let e = Date.now();
                (t += e - r.startTimeMillis), n.push({ startTimeMillis: e });
                continue;
            }
            n.push(r);
        }
        return l()(n.length < 2, 'there should only be a single left over data'), (this.seenIntervals = n), Math.round(t);
    }
    constructor() {
        c(this, 'seenIntervals', void 0), (this.seenIntervals = []);
    }
}
class f {
    maybeFlushSeenItems(e) {
        if ((null == e && Date.now() - this._lastFlushTimeMillis < d) || (1 === e && Date.now() - this._lastFlushTimeMillis < _)) return Promise.resolve();
        let t = this.createFlushSeenItemsFunction(e);
        return null == t
            ? Promise.resolve()
            : ((this._lastFlushTimeMillis = Date.now()), 0 === e || 1 === e)
              ? new Promise(async (e) => {
                    await t(), e();
                })
              : new Promise((e) => {
                    setTimeout(async () => {
                        await t(), e();
                    }, 100);
                });
    }
    constructor({ id: e, windowId: t, isPaused: n }) {
        c(this, 'trackedFeedItems', void 0),
            c(this, '_lastFlushTimeMillis', void 0),
            c(this, '_pausedFeedItemIds', void 0),
            c(this, '_paused', void 0),
            c(this, '_windowId', void 0),
            c(this, '_isReactNavigationFocused', void 0),
            c(this, '_id', void 0),
            c(this, 'onInitialize', void 0),
            c(this, 'onTerminate', void 0),
            c(this, 'onFeedItemSeen', void 0),
            c(this, 'onFeedItemUnseen', void 0),
            c(this, 'initialize', () => {
                var e, t;
                u.Z.subscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), u.Z.subscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), u.Z.subscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), u.Z.subscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), u.Z.subscribe('DRAWER_OPEN', this.handleDrawerOpen), u.Z.subscribe('DRAWER_CLOSE', this.handleDrawerClose), u.Z.subscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (t = this).onInitialize) || void 0 === e || e.call(t);
            }),
            c(this, 'terminate', () => {
                var e, t;
                u.Z.unsubscribe('ANALYTICS_FEED_ITEM_SEEN', this.handleFeedItemSeen), u.Z.unsubscribe('ANALYTICS_FEED_ITEM_UNSEEN', this.handleFeedItemUnseen), u.Z.unsubscribe('ANALYTICS_FEED_FLUSH', this.handleFeedItemFlush), u.Z.unsubscribe('APP_STATE_UPDATE', this.handleAppStateUpdate), u.Z.unsubscribe('DRAWER_OPEN', this.handleDrawerOpen), u.Z.unsubscribe('DRAWER_CLOSE', this.handleDrawerClose), u.Z.unsubscribe('WINDOW_FOCUS', this.handleWindowFocus), null === (e = (t = this).onTerminate) || void 0 === e || e.call(t), this.maybeFlushSeenItems(0);
            }),
            c(this, 'handleFeedItemFlush', (e) => {
                let { id: t, force: n } = e;
                if (this._id === t) this.maybeFlushSeenItems(n);
            }),
            c(this, 'handleFeedItemSeen', (e) => {
                var t, n;
                let r = e.id,
                    i = e.timestampMillis,
                    a = e.feedItemId;
                if (r !== this._id) return;
                if (this._paused) {
                    this._pausedFeedItemIds.add(a);
                    return;
                }
                let o = this.getTrackedFeedItem(a).maybeMarkSeen(i);
                null === (t = (n = this).onFeedItemSeen) || void 0 === t || t.call(n, a, o);
            }),
            c(this, 'handleFeedItemUnseen', (e) => {
                var t, n;
                let r = e.id,
                    i = e.timestampMillis,
                    a = e.feedItemId;
                if (r !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(a);
                let o = this.getTrackedFeedItem(a).maybeMarkUnseen(i);
                null === (t = (n = this).onFeedItemUnseen) || void 0 === t || t.call(n, a, o), this.maybeFlushSeenItems();
            }),
            c(this, 'getTrackedFeedItem', (e) => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new E()), this.trackedFeedItems[e])),
            c(
                this,
                'getVisibleFeedItemIds',
                () =>
                    new Set(
                        Object.keys(this.trackedFeedItems).filter((e) => {
                            var t;
                            return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible();
                        })
                    )
            ),
            c(this, 'handleDrawerClose', () => {
                this._isReactNavigationFocused && this.resume();
            }),
            c(this, 'handleDrawerOpen', () => {
                this._isReactNavigationFocused && this.pause();
            }),
            c(this, 'handleAppStateUpdate', (e) => {
                let { state: t } = e;
                'active' === t && this._isReactNavigationFocused && this.resume(), 'background' === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0));
            }),
            c(this, 'clearPausedFeedItemIds', () => {
                (this._pausedFeedItemIds = new Set()), (this._paused = !1);
            }),
            c(this, 'pause', () => {
                if (this._paused) return;
                let e = this.getVisibleFeedItemIds();
                e.forEach((e) => {
                    this.handleFeedItemUnseen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: 'ANALYTICS_FEED_ITEM_UNSEEN'
                    });
                }),
                    (this._paused = !0),
                    (this._pausedFeedItemIds = e);
            }),
            c(this, 'resume', () => {
                if (!!this._paused)
                    (this._paused = !1),
                        this._pausedFeedItemIds.forEach((e) => {
                            this.handleFeedItemSeen({
                                id: this._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: 'ANALYTICS_FEED_ITEM_SEEN'
                            });
                        }),
                        this.clearPausedFeedItemIds();
            }),
            c(this, 'handleReactNavigationFocus', (e, t) => {
                (this._isReactNavigationFocused = e), this._isReactNavigationFocused && !t ? this.resume() : this.pause();
            }),
            c(this, 'handleWindowFocus', (e) => {
                if (this._windowId === e.windowId) e.focused ? this.resume() : this.pause();
            }),
            (this.trackedFeedItems = {}),
            (this._id = e),
            (this._windowId = t),
            (this._pausedFeedItemIds = new Set()),
            (this._paused = null != n && n),
            (this._isReactNavigationFocused = !0),
            (this._lastFlushTimeMillis = Date.now());
    }
}
