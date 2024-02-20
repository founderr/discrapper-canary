"use strict";
E.r(_), E.d(_, {
  ActionLogger: function() {
    return r
  }
}), E("424973"), E("222007"), E("70102");
var t = E("44170"),
  o = E("811022"),
  I = E("279295");
let T = new o.default("Flux");
class r extends t.EventEmitter {
  log(e, _) {
    let E = new n(e);
    E.startTime = I.performance.now();
    try {
      _((_, t) => {
        let o;
        let T = {
            name: _,
            time: -1
          },
          r = I.performance.now();
        try {
          o = t()
        } finally {
          T.time = I.performance.now() - r, this.persist && E.traces.push(T), this.emit("trace", e.type, _, T.time)
        }
        return o
      })
    } catch (e) {
      throw E.error = e, e
    } finally {
      E.totalTime = I.performance.now() - E.startTime, this.persist && E.totalTime > 0 && this.logs.push(E), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
    }
    return E
  }
  getSlowestActions(e) {
    var _;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
      o = [];
    for (let _ of this.logs)
      if (null == e || _.name === e)
        for (let e of _.traces) o.push([e.name, _.name, e.time]);
    o.sort((e, _) => _[2] - e[2]), o.length > t && (o.length = t);
    let I = 0,
      r = 0,
      a = o.map(_ => {
        let [E, t, o] = _, T = "".concat(E);
        return null == e && (T += "<".concat(t, ">")), I = Math.max(T.length, I), [T, o]
      }).map(e => {
        let [_, E] = e;
        return r += E, "".concat(_.padEnd(I + 1, " "), " - ").concat(E, "ms")
      }).join("\n");
    return 0 === o.length || o[0][2] < 10 || r < 20 ? o : (T.log("Using Hermes:", void 0 !== (null === (_ = E.g) || void 0 === _ ? void 0 : _.HermesInternal)), T.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(a, "\n")), T.log("Total Time: ".concat(r, "ms")), o)
  }
  getLastActionMetrics(e) {
    var _;
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
      o = {};
    for (let e of this.logs)
      for (let _ of e.traces) o[_.name] = [_.name, e.name, _.time];
    let I = Object.values(o);
    I.sort((e, _) => _[2] - e[2]), I.length > t && (I.length = t);
    let r = 0,
      a = 0,
      n = I.map(e => {
        let [_, E, t] = e;
        return r = Math.max(_.length, r), [_, t]
      }).map(e => {
        let [_, E] = e;
        return a += E, "".concat(_.padEnd(r + 1, " "), " - ").concat(E, "ms")
      }).join("\n");
    return 0 === I.length || a < 8 ? I : (T.log("\nUsing Hermes: ".concat(void 0 !== (null === (_ = E.g) || void 0 === _ ? void 0 : _.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(n), "\nTotal Time: ".concat(a, "ms\n\n")), I)
  }
  constructor({
    persist: e = !1
  } = {}) {
    super(), this.logs = [], this.persist = e
  }
}
let a = 0;
class n {
  get name() {
    return this.action.type
  }
  toJSON() {
    if (null == this.createdAt) throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
    return {
      actionType: this.action.type,
      created_at: this.createdAt,
      totalTime: this.totalTime,
      traces: this.traces
    }
  }
  constructor(e) {
    this.startTime = 0, this.totalTime = 0, this.traces = [], this.id = a++, this.action = e, this.createdAt = new Date
  }
}