n.d(e, {
  O1: function() {
    return l
  }
});
var r = n(499833),
  i = n(50074);

function a(t) {
  return new Promise((e, n) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
  })
}

function s(t) {
  return a(t.getAllKeys())
}

function o(t) {
  let e;

  function n() {
    return void 0 == e && (e = function(t, e) {
      let n = indexedDB.open(t);
      n.onupgradeneeded = () => n.result.createObjectStore(e);
      let r = a(n);
      return t => r.then(n => t(n.transaction(e, "readwrite").objectStore(e)))
    }(t.dbName || "sentry-offline", t.storeName || "queue")), e
  }
  return {
    insert: async e => {
      try {
        var r, o, l;
        let u = await (0, i.V$)(e, t.textEncoder);
        await (r = n(), o = u, l = t.maxQueueSize || 30, r(t => s(t).then(e => {
          if (!(e.length >= l)) return t.put(o, Math.max(...e, 0) + 1), a(t.transaction)
        })))
      } catch (t) {}
    },
    pop: async () => {
      try {
        let e = await n()(t => s(t).then(e => {
          if (0 !== e.length) return a(t.get(e[0])).then(n => (t.delete(e[0]), a(t.transaction).then(() => n)))
        }));
        if (e) return (0, i.f4)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
      } catch (t) {}
    }
  }
}

function l(t) {
  var e;
  return e = (0, r.Pd)(t), t => e({
    ...t,
    createStore: o
  })
}