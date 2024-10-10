r.d(t, {
    j: function () {
        return E;
    }
});
var n = r(696486),
    a = r(793373),
    _ = r(622916),
    o = r(454463),
    i = r(163162);
function E() {
    i.m9 && i.m9.document
        ? i.m9.document.addEventListener('visibilitychange', () => {
              let e = (0, n.HN)();
              if (!e) return;
              let t = (0, n.Gx)(e);
              if (i.m9.document.hidden && t) {
                  let e = 'cancelled',
                      { op: r, status: i } = (0, n.XU)(t);
                  o.X && _.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${r}`),
                      !i &&
                          t.setStatus({
                              code: a.jt,
                              message: e
                          }),
                      t.setAttribute('sentry.cancellation_reason', 'document.hidden'),
                      t.end();
              }
          })
        : o.X && _.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}
