"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("424973");
var r, i, o = n("627445"),
  l = n.n(o),
  u = n("446674"),
  a = n("95410"),
  s = n("913144");
(r = class e extends u.default.Store {
  static clearAll() {
    e.allStores.forEach(e => e.clear())
  }
  registerActionHandlers(e) {
    return l(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), l(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), super.registerActionHandlers({
      ...e,
      CLEAR_CACHES: () => this.clear(),
      WRITE_CACHES: () => this.save()
    })
  }
  get persistKey() {
    return "".concat(this.getClass().displayName, "-snapshot")
  }
  clear() {
    a.default.remove(this.persistKey)
  }
  save() {
    a.default.set(this.persistKey, this.takeSnapshot())
  }
  readSnapshot(e) {
    let t = a.default.get(this.persistKey);
    return null == t || t.version !== e ? null : t.data
  }
  getClass() {
    return this.constructor
  }
  constructor() {
    super(s.default, null), l(null != this.getClass().displayName, "Snapshot stores need a display name"), e.allStores.push(this)
  }
}).allStores = [], i = r