"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, i = n("335609"),
  a = n("695412");
l = class extends i.default {
  getCanvasForExport() {
    return this.canvas
  }
  setContextProperties() {
    null != this.context && (this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.font = "".concat(this.font.style, " ").concat(this.font.weight, " ").concat(this.font.size, "px ").concat(this.font.family))
  }
  setSize(e) {
    let {
      w: t,
      h: n
    } = e;
    this.canvas.width = t, this.canvas.height = n
  }
  clearRect(e) {
    if (null == this.context) return;
    let {
      x: t,
      y: n,
      w: l,
      h: i
    } = e;
    this.context.clearRect(t, n, l, i)
  }
  drawRect(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (null == this.context) return;
    let {
      x: n,
      y: l,
      w: i,
      h: a
    } = e;
    this.setContextProperties(), t ? this.context.fillRect(n, l, i, a) : this.context.strokeRect(n, l, i, a)
  }
  drawRoundedRect(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == this.context) return;
    let {
      x: l,
      y: i,
      w: a,
      h: s
    } = e;
    this.setContextProperties(), this.context.beginPath(), this.context.roundRect(l, i, a, s, t), n ? this.context.fill() : this.context.stroke()
  }
  drawText(e, t, n) {
    null != this.context && (this.setContextProperties(), n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y))
  }
  drawImage(e, t, n) {
    if (null == this.context) return a.DrawResultStatus.Failure;
    let l = this.getLoadedImage(e);
    return null == l ? a.DrawResultStatus.ImageNotLoaded : (null != n ? this.context.drawImage(l, t.x, t.y, n.w, n.h) : this.context.drawImage(l, t.x, t.y), a.DrawResultStatus.Success)
  }
  drawCroppedImage(e, t, n) {
    if (null == this.context) return a.DrawResultStatus.Failure;
    let l = this.getLoadedImage(e);
    if (null == l) return a.DrawResultStatus.ImageNotLoaded;
    let {
      x: i,
      y: s,
      w: r,
      h: o
    } = t, {
      x: u,
      y: d,
      w: c,
      h: f
    } = n;
    return this.context.drawImage(l, i, s, r, o, u, d, c, f), a.DrawResultStatus.Success
  }
  constructor(e, t) {
    super(e, t), this.canvas = e, this.context = this.canvas.getContext("2d")
  }
}