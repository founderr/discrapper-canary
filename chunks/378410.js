n(47120);
var s = n(710845),
  i = n(914946),
  l = n(452426),
  a = n(981631);
let r = new s.Z(a.BZL);
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
          message: s
        }
      } = e;
      (0, i.bu)(t.transport);
      let l = t.application.id,
        a = "".concat(l, " - ").concat(s);
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