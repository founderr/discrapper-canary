n(47120);
var i = n(710845),
  s = n(914946),
  l = n(452426),
  a = n(981631);
let r = new i.Z(a.BZL);
t.Z = {
  [a.Etm.CAPTURE_LOG]: {
    validation: e => (0, l.Z)(e).required().keys({
      level: e.string().max(10).required(),
      message: e.string().max(1e3).required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          level: n,
          message: i
        }
      } = e;
      (0, s.bu)(t.transport);
      let l = t.application.id,
        a = "".concat(l, " - ").concat(i);
      switch (n) {
        case "log":
          r.log(a);
          break;
        case "warn":
          r.warn(a);
          break;
        case "debug":
          r.verbose(a);
          break;
        case "info":
          r.info(a);
          break;
        case "error":
          r.error(a)
      }
    }
  }
}