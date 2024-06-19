n.d(e, {
  $p: function() {
    return h
  },
  AK: function() {
    return p
  },
  Ae: function() {
    return d
  },
  Es: function() {
    return l
  },
  PT: function() {
    return u
  },
  U$: function() {
    return c
  },
  kH: function() {
    return s
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(392711),
  i = n(486324);

function a(t, e, n, r) {
  let i = t.naturalWidth / t.width,
    a = e.width / 2,
    h = e.height / 2,
    u = (t.width / 2 - a - n.x) * i,
    c = (t.height / 2 - h - n.y) * i,
    o = e.width * i,
    l = e.height * i,
    s = Math.min(o, r.width),
    p = Math.min(l, r.height);
  return {
    x: u,
    y: c,
    scaledCropWidth: o,
    scaledCropHeight: l,
    canvasWidth: s,
    canvasHeight: p
  }
}
async function h(t, e, r, h, u) {
  let {
    x: c,
    y: o,
    scaledCropWidth: l,
    scaledCropHeight: s
  } = a(e, r, h, u), p = await t.arrayBuffer(), d = new Worker(new URL(n.p + n.u("86047"), n.b)), f = new Promise((t, e) => {
    d.onmessage = n => {
      let {
        data: r
      } = n;
      if (r.type === i.u.CROP_GIF_COMPLETE) {
        var a;
        t((a = new Blob([r.result]), new Promise(t => {
          let e = new FileReader;
          e.onload = e => {
            var n;
            let r = null === (n = e.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof r ? t(r) : t("")
          }, e.readAsDataURL(a)
        }))), d.terminate()
      } else r.type === i.u.CROP_GIF_ERROR && (e(Error("Error cropping GIF")), d.terminate())
    }
  });
  return d.postMessage({
    type: i.u.CROP_GIF_START,
    gif: new Uint8Array(p),
    x: 0 | c,
    y: 0 | o,
    width: 0 | l,
    height: 0 | s
  }), {
    result: f,
    cancelFn: () => d.terminate()
  }
}

function u(t, e, n, r) {
  let {
    x: i,
    y: h,
    scaledCropWidth: u,
    scaledCropHeight: c,
    canvasWidth: o,
    canvasHeight: l
  } = a(t, e, n, r), s = document.createElement("canvas");
  s.width = o, s.height = l;
  let p = s.getContext("2d");
  return null != p && p.drawImage(t, i, h, u, c, 0, 0, s.width, s.height), s.toDataURL("image/png")
}

function c(t, e, n) {
  return {
    x: (0, r.clamp)(t, n.left, n.right),
    y: (0, r.clamp)(e, n.bottom, n.top)
  }
}

function o(t, e, n, r) {
  let a = n,
    h = r;
  return (n > i.vJ && (a = i.vJ, h = r * (i.vJ / n)), n / r < t) ? {
    width: a,
    height: h
  } : {
    width: e / h * a,
    height: e
  }
}

function l(t, e, n) {
  switch (t) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
      return {
        width: e, height: n
      };
    case i.pC.BANNER:
      return o(i.MY, i.qj, e, n);
    case i.pC.GUILD_BANNER:
      return o(i.Ij, i.C5, e, n);
    case i.pC.VIDEO_BACKGROUND:
      return o(i.Ff, i.PB, e, n);
    case i.pC.SCHEDULED_EVENT_IMAGE:
      return o(i.ut, i.WV, e, n);
    case i.pC.HOME_HEADER:
      return o(i.sX, i.SW, e, n)
  }
}

function s(t, e, n) {
  let r = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = t - n.width,
    a = e - n.height;
  return 0 !== i && (r.left = -Math.abs(i / 2), r.right = i / 2), 0 !== a && (r.bottom = -Math.abs(a / 2), r.top = a / 2), r
}

function p(t, e, n, r) {
  switch (t) {
    case i.pC.AVATAR:
    case i.pC.AVATAR_DECORATION:
      let a = Math.min(e, n);
      return {
        width: a, height: a
      };
    case i.pC.BANNER:
      let h = Math.min(e, i.vJ);
      return {
        width: h, height: h * (1 / i.MY)
      };
    case i.pC.GUILD_BANNER:
      let u = Math.min(e, i.vJ);
      return {
        width: u, height: Math.min(9 / 16 * u, r)
      };
    case i.pC.VIDEO_BACKGROUND:
      let c = Math.min(e, i.vJ);
      return {
        width: c, height: 9 / 16 * c
      };
    case i.pC.SCHEDULED_EVENT_IMAGE:
      let o = Math.min(e, i.vJ);
      return {
        width: o, height: .4 * o
      };
    case i.pC.HOME_HEADER:
      let l = Math.min(e, i.vJ);
      return {
        width: l, height: l * (1 / i.sX)
      }
  }
}

function d(t, e, n) {
  let r = t.naturalWidth / t.naturalHeight,
    i = e,
    a = n;
  t.naturalWidth > t.naturalHeight ? i /= r : a *= r;
  let h = {
    height: i,
    width: a
  };
  return u(t, {
    width: t.width,
    height: t.height
  }, {
    x: 0,
    y: 0
  }, h)
}