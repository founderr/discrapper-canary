n.d(t, {
    AQ: function () {
        return h;
    },
    DY: function () {
        return _;
    },
    yQ: function () {
        return E;
    }
});
var r,
    i,
    a,
    o,
    s = n(653041);
var l = n(733860);
var u = n(65154);
let c = [
    {
        name: 'H265',
        encode: (null === (i = window) || void 0 === i ? void 0 : null === (r = i.DiscordNative) || void 0 === r ? void 0 : r.process.platform) !== 'darwin' || (null === (o = window) || void 0 === o ? void 0 : null === (a = o.DiscordNative) || void 0 === a ? void 0 : a.os.arch) === 'arm64',
        decode: !0
    },
    {
        name: 'H264',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP8',
        encode: !0,
        decode: !0
    },
    {
        name: 'VP9',
        encode: !0,
        decode: !0
    }
];
function d(e, t) {
    let n = t.concat(c),
        r = [];
    return (
        n.forEach((t) => {
            let n = e.find((e) => t.name === e.codec);
            null != n &&
                r.push({
                    name: n.codec,
                    encode: n.encode && t.encode,
                    decode: n.decode && t.decode
                });
        }),
        r
    );
}
function _(e) {
    let t = [];
    return (
        e.has(u.V8.SIGNAL_AV1_DECODE)
            ? t.unshift({
                  name: 'AV1',
                  encode: !1,
                  decode: !0
              })
            : e.has(u.V8.SIGNAL_AV1) &&
              t.unshift({
                  name: 'AV1',
                  encode: !0,
                  decode: !0
              }),
        t
    );
}
function E(e, t) {
    return 'string' == typeof e
        ? d(
              JSON.parse(e).map((e) => ({
                  codec: f(e.codec),
                  encode: e.encode,
                  decode: e.decode
              })),
              t
          )
        : d(
              e.map((e) => ({
                  codec: f(e),
                  encode: !0,
                  decode: !0
              })),
              t
          );
}
function f(e) {
    return 'AV1X' === e ? 'AV1' : e;
}
function h(e) {
    return 'AV1' === e ? 'AV1X' : e;
}
