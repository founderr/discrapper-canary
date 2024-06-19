n.d(e, {
  _: function() {
    return a
  }
});
var r = n(50074),
  i = n(274484);
class a {
  constructor() {
    a.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "ModuleMetadata"
  }
  __init() {
    this.name = a.id
  }
  setupOnce(t, e) {
    let n = e().getClient();
    if (!n || "function" != typeof n.on) return;
    n.on("beforeEnvelope", t => {
      (0, r.gv)(t, (t, e) => {
        if ("event" === e) {
          let e = Array.isArray(t) ? t[1] : void 0;
          e && ((0, i.CC)(e), t[1] = e)
        }
      })
    });
    let a = n.getOptions().stackParser;
    t(t => ((0, i.GY)(a, t), t))
  }
}
a.__initStatic()