"use strict";
n.r(t), n.d(t, {
  cropGIF: function() {
    return l
  },
  cropStaticImage: function() {
    return s
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
    return _
  },
  downsizeImage: function() {
    return E
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("917351"),
  r = n("75015");

function a(e, t, n, i) {
  let r = e.naturalWidth / e.width,
    a = t.width / 2,
    l = t.height / 2,
    s = (e.width / 2 - a - n.x) * r,
    u = (e.height / 2 - l - n.y) * r,
    o = t.width * r,
    c = t.height * r,
    d = Math.min(o, i.width),
    _ = Math.min(c, i.height);
  return {
    x: s,
    y: u,
    scaledCropWidth: o,
    scaledCropHeight: c,
    canvasWidth: d,
    canvasHeight: _
  }
}
async function l(e, t, i, l, s) {
  let {
    x: u,
    y: o,
    scaledCropWidth: c,
    scaledCropHeight: d
  } = a(t, i, l, s), _ = await e.arrayBuffer(), E = new Worker(new URL(n.p + n.u("39703"), n.b)), f = new Promise((e, t) => {
    E.onmessage = n => {
      let {
        data: i
      } = n;
      if (i.type === r.MessageTypes.CROP_GIF_COMPLETE) {
        var a;
        e((a = new Blob([i.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var n;
            let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof i ? e(i) : e("")
          }, t.readAsDataURL(a)
        }))), E.terminate()
      } else i.type === r.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
    }
  });
  return E.postMessage({
    type: r.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(_),
    x: 0 | u,
    y: 0 | o,
    width: 0 | c,
    height: 0 | d
  }), {
    result: f,
    cancelFn: () => E.terminate()
  }
}

function s(e, t, n, i) {
  let {
    x: r,
    y: l,
    scaledCropWidth: s,
    scaledCropHeight: u,
    canvasWidth: o,
    canvasHeight: c
  } = a(e, t, n, i), d = document.createElement("canvas");
  d.width = o, d.height = c;
  let _ = d.getContext("2d");
  return null != _ && _.drawImage(e, r, l, s, u, 0, 0, d.width, d.height), d.toDataURL("image/png")
}

function u(e, t, n) {
  return {
    x: (0, i.clamp)(e, n.left, n.right),
    y: (0, i.clamp)(t, n.bottom, n.top)
  }
}

function o(e, t, n, i) {
  let a = n,
    l = i;
  n > r.EDITING_CONTAINER_WIDTH && (a = r.EDITING_CONTAINER_WIDTH, l = i * (r.EDITING_CONTAINER_WIDTH / n));
  if (n / i < e) return {
    width: a,
    height: l
  };
  let s = t / l,
    u = a * s;
  return {
    width: u,
    height: t
  }
}

function c(e, t, n) {
  switch (e) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: n
      };
    case r.UploadTypes.BANNER:
      return o(r.BANNER_ASPECT_RATIO, r.MAX_BANNER_OVERLAY_HEIGHT, t, n);
    case r.UploadTypes.GUILD_BANNER:
      return o(r.GUILD_BANNER_ASPECT_RATIO, r.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
    case r.UploadTypes.VIDEO_BACKGROUND:
      return o(r.VIDEO_BACKGROUND_ASPECT_RATIO, r.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return o(r.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, r.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
    case r.UploadTypes.HOME_HEADER:
      return o(r.HOME_HEADER_ASPECT_RATIO, r.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
  }
}

function d(e, t, n) {
  let i = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    r = e - n.width,
    a = t - n.height;
  return 0 !== r && (i.left = -Math.abs(r / 2), i.right = r / 2), 0 !== a && (i.bottom = -Math.abs(a / 2), i.top = a / 2), i
}

function _(e, t, n, i) {
  switch (e) {
    case r.UploadTypes.AVATAR:
    case r.UploadTypes.AVATAR_DECORATION:
      let a = Math.min(t, n);
      return {
        width: a, height: a
      };
    case r.UploadTypes.BANNER:
      let l = Math.min(t, r.EDITING_CONTAINER_WIDTH);
      return {
        width: l, height: l * (1 / r.BANNER_ASPECT_RATIO)
      };
    case r.UploadTypes.GUILD_BANNER:
      let s = Math.min(t, r.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: Math.min(s * (9 / 16), i)
      };
    case r.UploadTypes.VIDEO_BACKGROUND:
      let u = Math.min(t, r.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: u * (9 / 16)
      };
    case r.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let o = Math.min(t, r.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: .4 * o
      };
    case r.UploadTypes.HOME_HEADER:
      let c = Math.min(t, r.EDITING_CONTAINER_WIDTH);
      return {
        width: c, height: c * (1 / r.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function E(e, t, n) {
  let i = e.naturalWidth / e.naturalHeight,
    r = t,
    a = n;
  e.naturalWidth > e.naturalHeight ? r /= i : a *= i;
  let l = {
    height: r,
    width: a
  };
  return s(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, l)
}