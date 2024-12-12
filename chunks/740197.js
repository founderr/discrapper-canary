r.d(n, {
    HS: function () {
        return h;
    },
    Hg: function () {
        return _;
    },
    PW: function () {
        return m;
    },
    S5: function () {
        return o;
    },
    ZA: function () {
        return l;
    },
    l0: function () {
        return p;
    }
});
var i = r(177593);
var a = r(653041);
var s = r(65154);
let o = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    l = o && 'setSinkId' in HTMLAudioElement.prototype;
function u(e) {
    return {
        id: s.w5,
        type: e,
        index: 0,
        name: 'Default'
    };
}
function c() {
    return [u(s.h7.AUDIO_INPUT), u(s.h7.AUDIO_OUTPUT), u(s.h7.VIDEO_INPUT)];
}
function d(e, n) {
    return e.filter((e) => e.type === n);
}
function f() {
    return o
        ? navigator.mediaDevices
              .enumerateDevices()
              .then((e) => {
                  let n = 0,
                      r = 0,
                      i = 0;
                  return e
                      .filter((e) => {
                          switch (e.kind) {
                              case s.h7.AUDIO_INPUT:
                              case s.h7.AUDIO_OUTPUT:
                              case s.h7.VIDEO_INPUT:
                                  return !0;
                              default:
                                  return !1;
                          }
                      })
                      .map((e) => {
                          let a;
                          switch (e.kind) {
                              case s.h7.AUDIO_INPUT:
                                  a = n++;
                                  break;
                              case s.h7.AUDIO_OUTPUT:
                                  a = r++;
                                  break;
                              case s.h7.VIDEO_INPUT:
                              default:
                                  a = i++;
                          }
                          return {
                              id: e.deviceId,
                              type: e.kind,
                              index: a,
                              name: null != e.label && '' !== e.label ? e.label : 0 === a ? 'Default' : 'Device '.concat(a)
                          };
                      });
              })
              .then((e) => (!l && (e = e.filter((e) => e.type !== s.h7.AUDIO_OUTPUT)).push(u(s.h7.AUDIO_OUTPUT)), e))
              .catch(c)
        : new Promise((e) => {
              setImmediate(() => e(c()));
          });
}
async function _() {
    return d(await f(), s.h7.AUDIO_INPUT);
}
async function h() {
    return d(await f(), s.h7.AUDIO_OUTPUT);
}
async function p() {
    return d(await f(), s.h7.VIDEO_INPUT);
}
async function m() {
    let e = await f();
    return [d(e, s.h7.AUDIO_INPUT), d(e, s.h7.AUDIO_OUTPUT), d(e, s.h7.VIDEO_INPUT)];
}
