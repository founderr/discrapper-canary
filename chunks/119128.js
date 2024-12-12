r.d(t, {
    j: function () {
        return i;
    }
});
var a = r(696486),
    n = r(793373),
    _ = r(622916),
    o = r(454463),
    E = r(163162);
function i() {
    E.m9 && E.m9.document
        ? E.m9.document.addEventListener('visibilitychange', () => {
              let e = (0, a.HN)();
              if (!e) return;
              let t = (0, a.Gx)(e);
              if (E.m9.document.hidden && t) {
                  let e = 'cancelled',
                      { op: r, status: E } = (0, a.XU)(t);
                  o.X && _.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${r}`),
                      !E &&
                          t.setStatus({
                              code: n.jt,
                              message: e
                          }),
                      t.setAttribute('sentry.cancellation_reason', 'document.hidden'),
                      t.end();
              }
          })
        : o.X && _.kg.warn('[Tracing] Could not set up background tab detection due to lack of global document');
}
