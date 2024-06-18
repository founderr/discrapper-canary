"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(512722),
  r = n.n(i),
  s = n(735630);
async function o(e) {
  let t;
  let n = s.createFile(!1),
    i = new Promise(e => {
      n.onReady = e
    }),
    o = await e.arrayBuffer();
  for (let e of (o.fileStart = 0, n.appendBuffer(o), n.flush(), await i, r()(null != n.boxes, "mp4boxInputFile.boxes should not be null after parsing"), n.boxes)) "uuid" === e.type && (t = e.start);
  let a = e.slice(0, t, e.type),
    l = e.slice(t + 4, t + 8 + 16, e.type);
  return new Blob([a, new Uint8Array([0, 0, 0, 24]), l], {
    type: e.type
  })
}