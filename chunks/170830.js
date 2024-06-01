    "use strict";
    var n, i;

    function o(r) {
      let t = 0,
        e = [];
      return async function() {
        if (2 !== t) {
          if (1 === t) return new Promise(r => {
            e.push(r)
          });
          for (t = 1, await r(), t = 2; e.length > 0;) {
            var n;
            null === (n = e.shift()) || void 0 === n || n()
          }
        }
      }
    }
    e.r(t), e.d(t, {
      createQueuedAsyncInitializer: function() {
        return o
      }
    }), e("653041"), (i = n || (n = {}))[i.UNINITIALIZED = 0] = "UNINITIALIZED", i[i.INITIALIZING = 1] = "INITIALIZING", i[i.READY = 2] = "READY"