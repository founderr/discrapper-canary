    "use strict";
    r.exports = function(r, t, e, n, i, o, u, c) {
      if (!r) {
        var s;
        if (void 0 === t) s = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var a = [e, n, i, o, u, c],
            f = 0;
          (s = Error(t.replace(/%s/g, function() {
            return a[f++]
          }))).name = "Invariant Violation"
        }
        throw s.framesToPop = 1, s
      }
    }