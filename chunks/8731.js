"use strict";
n.r(e), n.d(e, {
  cropGIF: function() {
    return s
  },
  cropStaticImage: function() {
    return l
  },
  getBoundedCoordinates: function() {
    return u
  },
  adjustImageDimensionsForAspectRatio: function() {
    return c
  },
  calculateDragBoundaries: function() {
    return d
  },
  calculateOverlaySize: function() {
    return f
  },
  downsizeImage: function() {
    return _
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("917351"),
  r = n("75015");

function a(t, e, n, i) {
  let r = t.naturalWidth / t.width,
    a = e.width / 2,
    s = e.height / 2,
    l = (t.width / 2 - a - n.x) * r,
    u = (t.height / 2 - s - n.y) * r,
    o = e.width * r,
    c = e.height * r,
    d = Math.min(o, i.width),
    f = Math.min(c, i.height);
  return {
    x: l,
    y: u,
    scaledCropWidth: o,
    scaledCropHeight: c,
    canvasWidth: d,
    canvasHeight: f
  }
}
async function s(t, e, i, s, l) {
  let {
    x: u,
    y: o,
    scaledCropWidth: c,
    scaledCropHeight: d
  } = a(e, i, s, l), f = await t.arrayBuffer(), _ = new Worker(new URL(n.p + n.u("39703"), n.b)), h = new Promise((t, e) => {
    _.onmessage = n => {
      let {
        data: i
      } = n;
      if (i.type === r.MessageTypes.CROP_GIF_COMPLETE) {
        var a;
        t((a = new Blob([i.result]), new Promise(t => {
          let e = new FileReader;
          e.onload = e => {
            var n;
            let i = null === (n = e.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof i ? t(i) : t("")
          }, e.readAsDataURL(a)
        }))), _.terminate()
      } else i.type === r.MessageTypes.CROP_GIF_ERROR && (e(Error("Error cropping GIF")), _.terminate())
    }
  });
  return _.postMessage({
    type: r.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(f),
    x: 0 | u,
    y: 0 | o,
    width: 0 | c,
    height: 0 | d
  }), {
    result: h,
    cancelFn: () => _.terminate()
  }
}

function l(t, e, n, i) {
  let {
    x: r,
    y: s,
    scaledCropWidth: l,
    scaledCropHeight: u,
    canvasWidth: o,
    canvasHeight: c
  } = a(t, e, n, i), d = document.createElement("canvas");
  d.width = o, d.height = c;
  let f = d.getContext("2d");
  return null != f && f.drawImage(t, r, s, l, u, 0, 0, d.width, d.height), d.toDataURL("image/png")
}

function u(t, e, n) {
  return {
    x: (0, i.clamp)(t, n.left, n.right),
    y: (0, i.clamp)(e, n.bottom, n.top)
  }
}

function o(t, e, n, i) {
  let a = n,
    s = i;
  n > r.EDITING_CONTAINER_WIDTH && (a = r.EDITING_CONTAINER_WIDTH, s = i * (r.EDITING_CONTAINER_WIDTH / n));
  if (n / i < t) return {
    width: a,
    height: s
  };
  let l = e / s,
    u = a * l;
  return {
    width: u,
    height: e
  }
}

function c(t, e, n) {
  switch (t) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      return {
        width: e, height: n
      };
    case r.UploadTypes.BANNER:
      return o(r.BANNER_ASPECT_RATIO, r.MAX_BANNER_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.GUILD_BANNER:
      return o(r.GUILD_BANNER_ASPECT_RATIO, r.MAX_GUILD_BANNER_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.VIDEO_BACKGROUND:
      return o(r.VIDEO_BACKGROUND_ASPECT_RATIO, r.MAX_VIDEO_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return o(r.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, r.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, e, n);
    case r.UploadTypes.HOME_HEADER:
      return o(r.HOME_HEADER_ASPECT_RATIO, r.MAX_HOME_HEADER_OVERLAY_HEIGHT, e, n)
  }
}

function d(t, e, n) {
  let i = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    r = t - n.width,
    a = e - n.height;
  return 0 !== r && (i.left = -Math.abs(r / 2), i.right = r / 2), 0 !== a && (i.bottom = -Math.abs(a / 2), i.top = a / 2), i
}

function f(t, e, n, i) {
  switch (t) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      let a = Math.min(e, n);
      return {
        width: a, height: a
      };
    case r.UploadTypes.BANNER:
      let s = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: s * (1 / r.BANNER_ASPECT_RATIO)
      };
    case r.UploadTypes.GUILD_BANNER:
      let l = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: l, height: Math.min(l * (9 / 16), i)
      };
    case r.UploadTypes.VIDEO_BACKGROUND:
      let u = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: u * (9 / 16)
      };
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let o = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: .4 * o
      };
    case r.UploadTypes.HOME_HEADER:
      let c = Math.min(e, r.EDITING_CONTAINER_WIDTH);
      return {
        width: c, height: c * (1 / r.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function _(t, e, n) {
  let i = t.naturalWidth / t.naturalHeight,
    r = e,
    a = n;
  t.naturalWidth > t.naturalHeight ? r /= i : a *= i;
  let s = {
    height: r,
    width: a
  };
  return l(t, {
    width: t.width,
    height: t.height
  }, {
    x: 0,
    y: 0
  }, s)
}