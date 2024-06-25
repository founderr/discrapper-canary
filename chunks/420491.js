"use strict";
let i;
var r, s, o, a, l = n(259443),
  u = n(442837),
  _ = n(570140),
  c = n(818083),
  d = n(353926),
  E = n(988348),
  I = n(987338);
let T = (0, c.B)({
    id: "2024-03_gateway_zstd",
    label: "Gateway Zstd compression",
    kind: "user",
    defaultConfig: {
      useZstd: !1,
      doVerification: !1
    },
    treatments: [{
      id: I.NZ.CONTROL,
      label: "Control (verification)",
      config: {
        useZstd: !1,
        doVerification: !0
      }
    }, {
      id: 1,
      label: "Use Zstd",
      config: {
        useZstd: !0,
        doVerification: !1
      }
    }, {
      id: 2,
      label: "No Zstd, no verification",
      config: {
        useZstd: !1,
        doVerification: !1
      }
    }, {
      id: 3,
      label: "Use Zstd (2)",
      config: {
        useZstd: !0,
        doVerification: !1
      }
    }]
  }),
  h = (0, c.B)({
    id: "2024-04_gateway_zstd_verification",
    label: "Gateway Zstd Verification",
    kind: "user",
    defaultConfig: {
      useZstd: !1
    },
    treatments: [{
      id: 1,
      label: "Use Zstd",
      config: {
        useZstd: !0
      }
    }]
  }),
  f = new l.Y("GatewayZstdStore");
let S = !1,
  A = 0,
  N = !0;

function m() {
  return null == i && (i = (0, E.NF)() && (0, E.MF)()), i
}

function O() {
  if (S) {
    f.info("Ignoring zstd experiment config because we fell back to zlib");
    return
  }
  let e = T.getCurrentConfig({
      location: "GatewayZstdStore"
    }),
    t = e.useZstd;
  e.doVerification && (t = h.getCurrentConfig({
    location: "GatewayZstdStore"
  }).useZstd), p(t), A = 0
}

function p(e) {
  if (e && !(0, E.NF)()) {
    f.warn("Attempting to enable zstd but it is not supported");
    return
  }(0, E.CG)(e), e !== i && f.info("Setting Zstd to ".concat(e)), i = e
}
class R extends(a = u.ZP.Store) {
  initialize() {
    this.waitFor(d.Z)
  }
  shouldUseZstd() {
    return m()
  }
  enableFailureTracking() {
    N = !0
  }
  disableFailureTracking() {
    N = !1
  }
}
o = "GatewayZstdStore", (s = "displayName") in(r = R) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new R(_.Z, {
  CONNECTION_OPEN: O,
  CONNECTION_INTERRUPTED: function(e) {
    let {
      code: t
    } = e;
    if (!!m() && !!N && 1e3 !== t)(A += 1) > 3 && (f.error("Disabling zstd due to consecutive errors"), p(!1), S = !0)
  },
  CONNECTION_RESUMED: O
})