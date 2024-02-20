"use strict";
n.r(t), n.d(t, {
  asap: function() {
    return s
  }
});
var r = n("576225"),
  a = n("897025");
let o = new r.AsapQueue,
  i = new a.TaskFactory(o.registerPendingError);

function s(e) {
  o.enqueueTask(i.create(e))
}