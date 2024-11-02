r.d(t, {
    i: function () {
        return i;
    }
});
var n = r(573736),
    a = r(886115),
    _ = r(151122);
function o(e) {
    return {
        ...e,
        path: 'path' in e && Array.isArray(e.path) ? e.path.join('.') : void 0,
        keys: 'keys' in e ? JSON.stringify(e.keys) : void 0,
        unionErrors: 'unionErrors' in e ? JSON.stringify(e.unionErrors) : void 0
    };
}
let i = (0, _._I)((e = {}) => {
    let t = e.limit || 10;
    return {
        name: 'ZodErrors',
        processEvent(e, r) {
            var _, i, E, c;
            return (
                (_ = t),
                (i = e),
                (E = r),
                i.exception && i.exception.values && E && E.originalException && ((c = E.originalException), (0, n.VZ)(c) && 'ZodError' === c.name && Array.isArray(c.errors)) && 0 !== E.originalException.issues.length
                    ? {
                          ...i,
                          exception: {
                              ...i.exception,
                              values: [
                                  {
                                      ...i.exception.values[0],
                                      value: (function (e) {
                                          let t = new Set();
                                          for (let r of e.issues) r.path && r.path[0] && t.add(r.path[0]);
                                          let r = Array.from(t);
                                          return `Failed to validate keys: ${(0, a.$G)(r.join(', '), 100)}`;
                                      })(E.originalException)
                                  },
                                  ...i.exception.values.slice(1)
                              ]
                          },
                          extra: {
                              ...i.extra,
                              'zoderror.issues': E.originalException.errors.slice(0, _).map(o)
                          }
                      }
                    : i
            );
        }
    };
});
