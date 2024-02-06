"use strict";
a.r(t), a.d(t, {
  cropGIF: function() {
    return s
  },
  cropStaticImage: function() {
    return r
  },
  getBoundedCoordinates: function() {
    return o
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
    return E
  }
}), a("511434"), a("313619"), a("654714"), a("287168"), a("956660"), a("222007"), a("70102"), a("311790"), a("477657"), a("811875"), a("90301"), a("652153"), a("28797"), a("817884"), a("597349"), a("667536"), a("690341");
var l = a("917351"),
  i = a("75015");

function n(e, t, a, l) {
  let i = e.naturalWidth / e.width,
    n = t.width / 2,
    s = t.height / 2,
    r = (e.width / 2 - n - a.x) * i,
    o = (e.height / 2 - s - a.y) * i,
    u = t.width * i,
    d = t.height * i,
    c = Math.min(u, l.width),
    _ = Math.min(d, l.height);
  return {
    x: r,
    y: o,
    scaledCropWidth: u,
    scaledCropHeight: d,
    canvasWidth: c,
    canvasHeight: _
  }
}
async function s(e, t, l, s, r) {
  let {
    x: o,
    y: u,
    scaledCropWidth: d,
    scaledCropHeight: c
  } = n(t, l, s, r), _ = await e.arrayBuffer(), E = new Worker(new URL(a.p + a.u("39703"), a.b)), I = new Promise((e, t) => {
    E.onmessage = a => {
      let {
        data: l
      } = a;
      if (l.type === i.MessageTypes.CROP_GIF_COMPLETE) {
        var n;
        e((n = new Blob([l.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var a;
            let l = null === (a = t.target) || void 0 === a ? void 0 : a.result;
            "string" == typeof l ? e(l) : e("")
          }, t.readAsDataURL(n)
        }))), E.terminate()
      } else l.type === i.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), E.terminate())
    }
  });
  return E.postMessage({
    type: i.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(_),
    x: 0 | o,
    y: 0 | u,
    width: 0 | d,
    height: 0 | c
  }), {
    result: I,
    cancelFn: () => E.terminate()
  }
}

function r(e, t, a, l) {
  let {
    x: i,
    y: s,
    scaledCropWidth: r,
    scaledCropHeight: o,
    canvasWidth: u,
    canvasHeight: d
  } = n(e, t, a, l), c = document.createElement("canvas");
  c.width = u, c.height = d;
  let _ = c.getContext("2d");
  return null != _ && _.drawImage(e, i, s, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
}

function o(e, t, a) {
  return {
    x: (0, l.clamp)(e, a.left, a.right),
    y: (0, l.clamp)(t, a.bottom, a.top)
  }
}

function u(e, t, a, l) {
  let n = a,
    s = l;
  a > i.EDITING_CONTAINER_WIDTH && (n = i.EDITING_CONTAINER_WIDTH, s = l * (i.EDITING_CONTAINER_WIDTH / a));
  if (a / l < e) return {
    width: n,
    height: s
  };
  let r = t / s,
    o = n * r;
  return {
    width: o,
    height: t
  }
}

function d(e, t, a) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: a
      };
    case i.UploadTypes.BANNER:
      return u(i.BANNER_ASPECT_RATIO, i.MAX_BANNER_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.GUILD_BANNER:
      return u(i.GUILD_BANNER_ASPECT_RATIO, i.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.VIDEO_BACKGROUND:
      return u(i.VIDEO_BACKGROUND_ASPECT_RATIO, i.MAX_VIDEO_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return u(i.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, i.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, a);
    case i.UploadTypes.HOME_HEADER:
      return u(i.HOME_HEADER_ASPECT_RATIO, i.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, a)
  }
}

function c(e, t, a) {
  let l = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    i = e - a.width,
    n = t - a.height;
  return 0 !== i && (l.left = -Math.abs(i / 2), l.right = i / 2), 0 !== n && (l.bottom = -Math.abs(n / 2), l.top = n / 2), l
}

function _(e, t, a, l) {
  switch (e) {
    case i.UploadTypes.AVATAR:
    case i.UploadTypes.AVATAR_DECORATION:
      let n = Math.min(t, a);
      return {
        width: n, height: n
      };
    case i.UploadTypes.BANNER:
      let s = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: s, height: s * (1 / i.BANNER_ASPECT_RATIO)
      };
    case i.UploadTypes.GUILD_BANNER:
      let r = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: r, height: Math.min(r * (9 / 16), l)
      };
    case i.UploadTypes.VIDEO_BACKGROUND:
      let o = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: o * (9 / 16)
      };
    case i.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let u = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: .4 * u
      };
    case i.UploadTypes.HOME_HEADER:
      let d = Math.min(t, i.EDITING_CONTAINER_WIDTH);
      return {
        width: d, height: d * (1 / i.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function E(e, t, a) {
  let l = e.naturalWidth / e.naturalHeight,
    i = t,
    n = a;
  e.naturalWidth > e.naturalHeight ? i /= l : n *= l;
  let s = {
    height: i,
    width: n
  };
  return r(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, s)
}