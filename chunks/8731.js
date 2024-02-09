"use strict";
s.r(t), s.d(t, {
  cropGIF: function() {
    return i
  },
  cropStaticImage: function() {
    return r
  },
  getBoundedCoordinates: function() {
    return o
  },
  adjustImageDimensionsForAspectRatio: function() {
    return u
  },
  calculateDragBoundaries: function() {
    return c
  },
  calculateOverlaySize: function() {
    return E
  },
  downsizeImage: function() {
    return _
  }
}), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007"), s("70102"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341");
var a = s("917351"),
  l = s("75015");

function n(e, t, s, a) {
  let l = e.naturalWidth / e.width,
    n = t.width / 2,
    i = t.height / 2,
    r = (e.width / 2 - n - s.x) * l,
    o = (e.height / 2 - i - s.y) * l,
    d = t.width * l,
    u = t.height * l,
    c = Math.min(d, a.width),
    E = Math.min(u, a.height);
  return {
    x: r,
    y: o,
    scaledCropWidth: d,
    scaledCropHeight: u,
    canvasWidth: c,
    canvasHeight: E
  }
}
async function i(e, t, a, i, r) {
  let {
    x: o,
    y: d,
    scaledCropWidth: u,
    scaledCropHeight: c
  } = n(t, a, i, r), E = await e.arrayBuffer(), _ = new Worker(new URL(s.p + s.u("39703"), s.b)), I = new Promise((e, t) => {
    _.onmessage = s => {
      let {
        data: a
      } = s;
      if (a.type === l.MessageTypes.CROP_GIF_COMPLETE) {
        var n;
        e((n = new Blob([a.result]), new Promise(e => {
          let t = new FileReader;
          t.onload = t => {
            var s;
            let a = null === (s = t.target) || void 0 === s ? void 0 : s.result;
            "string" == typeof a ? e(a) : e("")
          }, t.readAsDataURL(n)
        }))), _.terminate()
      } else a.type === l.MessageTypes.CROP_GIF_ERROR && (t(Error("Error cropping GIF")), _.terminate())
    }
  });
  return _.postMessage({
    type: l.MessageTypes.CROP_GIF_START,
    gif: new Uint8Array(E),
    x: 0 | o,
    y: 0 | d,
    width: 0 | u,
    height: 0 | c
  }), {
    result: I,
    cancelFn: () => _.terminate()
  }
}

function r(e, t, s, a) {
  let {
    x: l,
    y: i,
    scaledCropWidth: r,
    scaledCropHeight: o,
    canvasWidth: d,
    canvasHeight: u
  } = n(e, t, s, a), c = document.createElement("canvas");
  c.width = d, c.height = u;
  let E = c.getContext("2d");
  return null != E && E.drawImage(e, l, i, r, o, 0, 0, c.width, c.height), c.toDataURL("image/png")
}

function o(e, t, s) {
  return {
    x: (0, a.clamp)(e, s.left, s.right),
    y: (0, a.clamp)(t, s.bottom, s.top)
  }
}

function d(e, t, s, a) {
  let n = s,
    i = a;
  s > l.EDITING_CONTAINER_WIDTH && (n = l.EDITING_CONTAINER_WIDTH, i = a * (l.EDITING_CONTAINER_WIDTH / s));
  if (s / a < e) return {
    width: n,
    height: i
  };
  let r = t / i,
    o = n * r;
  return {
    width: o,
    height: t
  }
}

function u(e, t, s) {
  switch (e) {
    case l.UploadTypes.AVATAR:
    case l.UploadTypes.AVATAR_DECORATION:
      return {
        width: t, height: s
      };
    case l.UploadTypes.BANNER:
      return d(l.BANNER_ASPECT_RATIO, l.MAX_BANNER_OVERLAY_HEIGHT, t, s);
    case l.UploadTypes.GUILD_BANNER:
      return d(l.GUILD_BANNER_ASPECT_RATIO, l.MAX_GUILD_BANNER_OVERLAY_HEIGHT, t, s);
    case l.UploadTypes.VIDEO_BACKGROUND:
      return d(l.VIDEO_BACKGROUND_ASPECT_RATIO, l.MAX_VIDEO_OVERLAY_HEIGHT, t, s);
    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
      return d(l.SCHEDULED_EVENT_IMAGE_ASPECT_RATIO, l.MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT, t, s);
    case l.UploadTypes.HOME_HEADER:
      return d(l.HOME_HEADER_ASPECT_RATIO, l.MAX_HOME_HEADER_OVERLAY_HEIGHT, t, s)
  }
}

function c(e, t, s) {
  let a = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    l = e - s.width,
    n = t - s.height;
  return 0 !== l && (a.left = -Math.abs(l / 2), a.right = l / 2), 0 !== n && (a.bottom = -Math.abs(n / 2), a.top = n / 2), a
}

function E(e, t, s, a) {
  switch (e) {
    case l.UploadTypes.AVATAR:
    case l.UploadTypes.AVATAR_DECORATION:
      let n = Math.min(t, s);
      return {
        width: n, height: n
      };
    case l.UploadTypes.BANNER:
      let i = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: i, height: i * (1 / l.BANNER_ASPECT_RATIO)
      };
    case l.UploadTypes.GUILD_BANNER:
      let r = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: r, height: Math.min(r * (9 / 16), a)
      };
    case l.UploadTypes.VIDEO_BACKGROUND:
      let o = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: o, height: o * (9 / 16)
      };
    case l.UploadTypes.SCHEDULED_EVENT_IMAGE:
      let d = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: d, height: .4 * d
      };
    case l.UploadTypes.HOME_HEADER:
      let u = Math.min(t, l.EDITING_CONTAINER_WIDTH);
      return {
        width: u, height: u * (1 / l.HOME_HEADER_ASPECT_RATIO)
      }
  }
}

function _(e, t, s) {
  let a = e.naturalWidth / e.naturalHeight,
    l = t,
    n = s;
  e.naturalWidth > e.naturalHeight ? l /= a : n *= a;
  let i = {
    height: l,
    width: n
  };
  return r(e, {
    width: e.width,
    height: e.height
  }, {
    x: 0,
    y: 0
  }, i)
}