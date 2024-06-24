"use strict";
n(653041), n(47120);
var i = n(147913),
  r = n(579806),
  s = n(818083),
  o = n(998502);
let a = [0, 0];

function l(e) {
  let t = e.toString(16);
  for (; t.length < 4;) t = "0" + t;
  return t
}

function u(e, t, n, i) {
  let r = [],
    o = n.map(e => e.map(l).join(":")).join(", ");
  for (let e = 0; e < i.length; e++) {
    let t = {};
    t[i[e]] = "1", r.push({
      id: e + 1,
      label: i[e],
      config: t
    })
  }
  return {
    gpus: n,
    experiment: (0, s.B)({
      kind: "user",
      id: e,
      label: "GPU Workarounds: ".concat(t, " (").concat(o, ")"),
      defaultConfig: {},
      treatments: r
    })
  }
}

function _(e) {
  return [4318, e]
}
let c = [u("2024-06_hardware_hevc_nv_gtx_970", "NVIDIA hardware HEVC decode on GTX 970", [_(5058)], ["disable_accelerated_hevc_decode"]), u("2024-06_hardware_hevc_nv_maxwell", "NVIDIA hardware HEVC decode on Maxwell (except 970)", [_(4928), _(4929), _(4932), _(4934), _(4935), _(4936), _(4937), _(4939), _(4941), _(4942), _(4943), _(4986), _(4987), _(4992), _(4993), _(4994), _(5008), _(5009), _(5010), _(5011), _(5016), _(5017), _(5018), _(5019), _(5020), _(5021), _(5040), _(5041), _(5042), _(5043), _(5044), _(5046), _(5049), _(5050), _(5051), _(5052), _(5056), _(5079), _(5080), _(5081), _(5082), _(5104), _(5105), _(5106), _(5107), _(5112), _(5113), _(5114), _(5115), _(5121), _(5126), _(5127), _(5159), _(5655), _(5656), _(5657), _(5658), _(5735), _(5965), _(5966), _(6044), _(6082), _(6088), _(6128), _(6129), _(6141)], ["disable_accelerated_hevc_decode"])];

function d(e) {
  for (let t of e)
    if (t[0] === a[0] && t[1] === a[1]) return !0;
  return !1
}
let E = !1;

function I() {
  let e = {};
  for (let t of c)
    if (d(t.gpus)) {
      let n = t.experiment.getCurrentConfig({
        location: "updateFlags"
      });
      e = {
        ...e,
        ...n
      }
    } o.ZP.setChromiumSwitches(e)
}
class T extends i.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: async () => {
        try {
          var e, t, n, i;
          if (E || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
          let s = await r.Z.processUtils.getSystemInfo();
          for (let e of null !== (i = null === (n = s.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== i ? i : []) !0 === e.active && (a = [e.vendorId, e.deviceId]);
          for (let e of (E = !0, c)) d(e.gpus) && e.experiment.subscribe({
            location: "GPU experiment subscription"
          }, I);
          I()
        } catch (e) {}
      }
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new T