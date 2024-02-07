"use strict";
n.r(t), n.d(t, {
  cropGIF: function() {
    return a
  },
  cropStaticImage: function() {
    return s
  },
  getBoundedCoordinates: function() {
    return u
  },
  adjustImageDimensionsForAspectRatio: function() {
    return d
  },
  calculateDragBoundaries: function() {
    return c
  },
  calculateOverlaySize: function() {
    return _
  },
  downsizeImage: function() {
    return I
  }
}), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("917351"),
  l = n("75015");

function r(e, t, n, i) {
  let l = e.naturalWidth / e.width,
    r = t.width / 2,
    a = t.height / 2,
    s = (e.width / 2 - r - n.x) * l,
    u = (e.height / 2 - a - n.y) * l,
    o = t.width * l,
    d = t.height * l,
    c = Math.min(o, i.width),
    _ = Math.min(d, i.height);
  return {
    x: s,
    y: u,
    scaledCropWidth: o,
    scaledCropHeight: d,
    canvasWidth: c,
    canvasHeight: _
  }
}
async function a(e, t, i, a, s) {
  let {
    x: u,
    y: o,
    scaledCropWidth: d,
    scaledCropHeight: c
  } = r(t, i, a, s), _ = await e.arrayBuffer(), I = new Worker(new URL(n.p + n.u("39703"), n.b)), E = new Promise((e, t) => {
    I.onmessage = n => {
      let {
        data: i
      } = n;
      if (i.type === l.MessageTypes.CROP_GIF_COMPLETE) {
        var r;
        e((r = new Blob([i.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var n;
            let i = null === (n = t.target) || void 0 === n ? void 0 : n.result;
            "string" == typeof i ? e(i) : e("")
          }, t.readAsDataURL(r)
        }))), I.terminate()
      } else i.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), I.terminate())
    }
  });
  return I.postMessage({
    type: l.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(_),
    x: 0 | u,
    y: 0 | o,
    width: 0 | d,
    height: 0 | c
  }), {
    result: E,
    cancelFn: () => I.terminate()
  }
}

function s(e, t, n, i) {
  let {
    x: l,
    y: a,
    scaledCropWidth: s,
    scaledCropHeight: u,
    canvasWidth: o,
    canvasHeight: d
  } = r(e, t, n, i), c = document.createElement("canvas");
  c.width = o, c.height = d;
  let _ = c.getContext("2d");
  return null != _ && _.drawImage(e, l, a, s, u, 0, 0, c.width, c.height), c.toDataURL("image/png")
}

function u(e, t, n) {
  return {
    x: (0, i.clamp)(e, n.left, n.right),
    y: (0, i.clamp)(t, n.bottom, n.top)
  }
}

function o(e, t, n, i) {
  let r = n,
    a = i;
  n > l.EDITING_CONTAINER_WIDTH && (r = l.EDITING_CONTAINER_WIDTH, a = i * (l.EDITING_CONTAINER_WIDTH / n));
  if (n / i < e) return {
    width: r,
    height: a
  };
  let s = t / a,
    u = r * s;
  return {
    width: u,
    height: t
  }
}

function d(e, t, n) {
  switch (e) {
    case l.UploadTypes.AVATAR:
    case l.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: n
      };
    case l.UploadTypes.BANNER:
      return o(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, n);
    case l.UploadTypes.GUILD_BANNER:
      return o(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, n);
    case l.UploadTypes.VIDEO_BACKGROUND:
      return o(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, n);
    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return o(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, n);
    case l.UploadTypes.HOME_HEADER:
      return o(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, n)
  }
}

function c(e, t, n) {
  let i = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    l = e - n.width,
    r = t - n.height;
  return 0 !== l && (i.left = -Math.abs(l / 2), i.right = l / 2), 0 !== r && (i.bottom = -Math.abs(r / 2), i.top = r / 2), i
}

function _(e, t, n, i) {
  switch (e) {
    case l.UploadTypes.AVATAR:
    case l.UploadTypes.AVATAR_DECORATION:
      let r = Math.min(t, n);
      return {
        width: r, height: r
      };
    case l.UploadTypes.BANNER:
      let a = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: a, height: a * (1 / l.BANNER_ASPECT_RATIO)
      };
    case l.UploadTypes.GUILD_BANNER:
      let s = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: Math.min(s * (9 / 16), i)
      };
    case l.UploadTypes.VIDEO_BACKGROUND:
      let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: u * (9 / 16)
      };
    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: .4 * o
      };
    case l.UploadTypes.HOME_HEADER:
      let d = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: d, height: d * (1 / l.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function I(e, t, n) {
  let i = e.naturalWidth / e.naturalHeight,
    l = t,
    r = n;
  e.naturalWidth > e.naturalHeight ? l /= i : r *= i;
  let a = {
    height: l,
    width: r
  };
  return s(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, a)
}