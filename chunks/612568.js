n.d(e, {
  q: function() {
    return s
  }
});
var r = n(703498),
  i = n(876122),
  a = n(643487);
class s {
  constructor() {
    s.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "HttpContext"
  }
  __init() {
    this.name = s.id
  }
  setupOnce() {
    (0, r.c)(t => {
      if ((0, i.Gd)().getIntegration(s)) {
        if (!a.m9.navigator && !a.m9.location && !a.m9.document) return t;
        let e = t.request && t.request.url || a.m9.location && a.m9.location.href,
          {
            referrer: n
          } = a.m9.document || {},
          {
            userAgent: r
          } = a.m9.navigator || {},
          i = {
            ...t.request && t.request.headers,
            ...n && {
              Referer: n
            },
            ...r && {
              "User-Agent": r
            }
          },
          s = {
            ...t.request,
            ...e && {
              url: e
            },
            headers: i
          };
        return {
          ...t,
          request: s
        }
      }
      return t
    })
  }
}
s.__initStatic()