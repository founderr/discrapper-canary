n.d(t, {
    HS: function () {
        return E;
    },
    Hg: function () {
        return _;
    },
    PW: function () {
        return h;
    },
    S5: function () {
        return o;
    },
    ZA: function () {
        return s;
    },
    l0: function () {
        return f;
    }
});
var r = n(177593);
var i = n(653041);
var a = n(65154);
let o = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    s = o && 'setSinkId' in HTMLAudioElement.prototype;
function l(e) {
    return {
        id: a.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function u() {
    return [l(a.h7.AUDIO_INPUT), l(a.h7.AUDIO_OUTPUT), l(a.h7.VIDEO_INPUT)];
}
function c(e, t) {
    return e.filter((e) => e.type === t);
}
function d() {
    return o
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let t = 0,
                      n = 0,
                      r = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case a.h7.AUDIO_INPUT:
                              case a.h7.AUDIO_OUTPUT:
                              case a.h7.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let i;
                          switch (e.kind) {
                              case a.h7.AUDIO_INPUT:
                                  i = t++;
                                  break;
                              case a.h7.AUDIO_OUTPUT:
                                  i = n++;
                                  break;
                              case a.h7.VIDEO_INPUT:
                              default:
                                  i = r++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: i,
                              name: null != e.label && '' !== e.label ? e.label : 0 === i ? 'Default' : 'Device '.concat(i)
                          };
                      });
              })
              .then((e) => (!s && (e = e.filter((e) => e.type !== a.h7.AUDIO_OUTPUT)).push(l(a.h7.AUDIO_OUTPUT)), e))
              .catch(u)
        : new Promise((e) => {
              setImmediate(() => e(u()));
          });
}
async function _() {
    return c(await d(), a.h7.AUDIO_INPUT);
}
async function E() {
    return c(await d(), a.h7.AUDIO_OUTPUT);
}
async function f() {
    return c(await d(), a.h7.VIDEO_INPUT);
}
async function h() {
    let e = await d();
    return [c(e, a.h7.AUDIO_INPUT), c(e, a.h7.AUDIO_OUTPUT), c(e, a.h7.VIDEO_INPUT)];
}
