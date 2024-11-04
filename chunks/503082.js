n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    r = n(129508),
    o = n(921608),
    a = n(693824);
function s(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
class u extends r.Z {
    getCanvasForExport() {
        return this.canvas;
    }
    setContextProperties() {
        null != this.context && ((this.context.fillStyle = this.color), (this.context.strokeStyle = this.color), (this.context.font = ''.concat(this.font.style, ' ').concat(this.font.weight, ' ').concat(this.font.size, 'px ').concat(this.font.family.join(', '))));
    }
    setSize(t, e) {
        let { w: n, h: i } = t;
        null != this.context && null != e ? ((this.canvas.width = n * e), (this.canvas.height = i * e), this.context.scale(e, e)) : ((this.canvas.width = n), (this.canvas.height = i));
    }
    clearRect(t) {
        if (null == this.context) return;
        let { x: e, y: n, w: i, h: l } = t;
        this.context.clearRect(e, n, i, l);
    }
    restoreContext() {
        null != this.context && this.context.restore();
    }
    drawRect(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == this.context) return;
        let { x: i, y: l, w: r, h: o } = t;
        n && this.setContextProperties(), e ? this.context.fillRect(i, l, r, o) : this.context.strokeRect(i, l, r, o);
    }
    drawRoundedRect(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: l, y: r, w: o, h: a } = t;
        i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(l, r, o, a, e), n ? this.context.fill() : this.context.stroke();
    }
    drawText(t, e, n) {
        var i, r;
        if (null == this.context) return;
        this.setContextProperties();
        let s = null !== (i = e.w) && void 0 !== i ? i : this.canvas.width - e.x,
            u = this.context.measureText(t),
            c = !1,
            d = this.font.size,
            h = (t, e) => {
                null != this.context && (n ? this.context.fillText(t, e.x, e.y) : this.context.strokeText(t, e.x, e.y));
            },
            f = (t) => {
                if (null == this.context || u.width <= o.F) return '';
                let e = ''.concat(t);
                for (; u.width + o.F > s; ) (e = e.slice(0, -4)), (u = this.context.measureText(e)), (c = !0);
                return c && (e += '...'), e;
            };
        if ((this.font.truncate === a.GX.None && h(t, e), this.font.truncate === a.GX.Truncate && h((t = f(t)), e), this.font.truncate === a.GX.Wrap)) {
            let n = t.split(' '),
                i = 1 / 0,
                o = '',
                a = 0;
            for (null != e.h && ((i = e.h / d), l()(i > 0, 'DiscordCavas: boundingBox.h of '.concat(e.h, ' results in 0 visible lines with font size of ').concat(d))); n.length > 0; )
                if ((u = this.context.measureText(o + ' ' + n[0])).width > s) {
                    let t = !1;
                    if (
                        (a + 1 >= i && n.length > 0 && (t = !0),
                        '' !== o
                            ? (h(t ? f(o + '...') : o, {
                                  x: e.x,
                                  y: e.y + d * a
                              }),
                              (o = ''))
                            : h(f(null !== (r = n.shift()) && void 0 !== r ? r : ''), {
                                  x: e.x,
                                  y: e.y + d * a
                              }),
                        t)
                    )
                        break;
                    a += 1;
                } else
                    (o += ' '.concat(n.shift())),
                        0 === n.length &&
                            h(o, {
                                x: e.x,
                                y: e.y + d * a
                            });
        }
        return {
            x: e.x,
            y: e.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
        };
    }
    drawFormattedMessage(t, e, n) {
        this.font.truncate === a.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
        let i = this.font.weight,
            l = (t, e, n) => {
                let l;
                if ('strong' === t.type) this.setFont({ weight: 700 });
                return Array.isArray(t.content) ? (l = r(t.content, e, n)) : (l = this.drawText(t.content, e, n)), this.setFont({ weight: i }), l;
            },
            r = (t, e, n) => {
                let i = 0;
                return (
                    t.forEach((t) => {
                        let { x: r, y: o, w: a, h: s } = e,
                            u = null != a ? a - i : void 0,
                            c = l(
                                t,
                                {
                                    x: r + i,
                                    y: o,
                                    w: u,
                                    h: s
                                },
                                n
                            );
                        null != c && (i += c.w);
                    }),
                    {
                        x: e.x + i,
                        y: e.y,
                        w: i,
                        h: this.font.size
                    }
                );
            };
        Array.isArray(t) ? r(t, e, n) : l(t, e, n);
    }
    drawImage(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: a.JU.Stretch };
        l()(null != this.assetMap, 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.');
        let { fillMode: r } = i;
        if (null == this.context) return a.vP.Failure;
        let o = this.assetMap.get(t);
        if (null == o) return a.vP.ImageNotLoaded;
        if (null != n) {
            if (r === a.JU.Contain) {
                let i;
                let l = {
                        w: o.width,
                        h: o.height
                    },
                    r = +(l.w / l.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > r) {
                    let t = n.h * r;
                    i = {
                        x: e.x + (n.w - t) / 2,
                        y: e.y,
                        w: t,
                        h: n.h
                    };
                } else {
                    let t = n.w / r;
                    i = {
                        x: e.x,
                        y: e.y + (n.h - t) / 2,
                        w: n.w,
                        h: t
                    };
                }
                return (
                    this.drawCroppedImage(
                        t,
                        {
                            x: 0,
                            y: 0,
                            w: l.w,
                            h: l.h
                        },
                        {
                            x: i.x,
                            y: i.y,
                            w: i.w,
                            h: i.h
                        }
                    ),
                    a.vP.Success
                );
            }
            if (r === a.JU.Cover) {
                var s, u, c, d;
                let l;
                let r = {
                        w: o.width,
                        h: o.height
                    },
                    h = +(r.w / r.h).toFixed(1),
                    f = +(n.w / n.h).toFixed(1);
                if (f > h) {
                    let t = r.w / f;
                    l = {
                        x: 0,
                        y: (r.h - t) * (null !== (u = null == i ? void 0 : null === (s = i.focus) || void 0 === s ? void 0 : s.y) && void 0 !== u ? u : 0.5),
                        w: o.width,
                        h: t
                    };
                } else {
                    let t = r.h * f;
                    l = {
                        x: (o.width - t) * (null !== (d = null == i ? void 0 : null === (c = i.focus) || void 0 === c ? void 0 : c.x) && void 0 !== d ? d : 0.5),
                        y: 0,
                        w: t,
                        h: o.height
                    };
                }
                return (
                    this.drawCroppedImage(t, l, {
                        x: e.x,
                        y: e.y,
                        w: n.w,
                        h: n.h
                    }),
                    a.vP.Success
                );
            }
            this.context.drawImage(o, e.x, e.y, n.w, n.h);
        } else this.context.drawImage(o, e.x, e.y);
        return a.vP.Success;
    }
    drawRoundedImage(t, e, n, i, l) {
        if (null == this.context) return a.vP.Failure;
        let { x: r, y: o } = e,
            { w: s, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(r, o, s, u, i), this.context.clip(c);
        let d = this.drawImage(t, e, n, l);
        return this.restoreContext(), d;
    }
    drawCroppedImage(t, e, n) {
        var i;
        if (null == this.context) return a.vP.Failure;
        let l = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(t);
        if (null == l) return a.vP.ImageNotLoaded;
        let { x: r, y: o, w: s, h: u } = e,
            { x: c, y: d, w: h, h: f } = n;
        return this.context.drawImage(l, r, o, s, u, c, d, h, f), a.vP.Success;
    }
    drawPath(t, e) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return a.vP.Failure;
        this.setContextProperties(), this.context.save();
        let l = new Path2D(t);
        return this.context.translate(e.x, e.y), this.context.scale(i, i), n ? this.context.fill(l, 'evenodd') : this.context.stroke(l), this.restoreContext(), a.vP.Success;
    }
    setGradientFillStyle(t, e, n) {
        if (null == this.context) return;
        let i = this.context.createLinearGradient(e.x, e.y, n.x, n.y);
        for (let { color: e, stop: n } of t) i.addColorStop(n, e);
        this.context.fillStyle = i;
    }
    drawGradientRect(t, e, n, i) {
        return null == this.context ? a.vP.Failure : (this.setGradientFillStyle(t, e, n), this.drawRect(i, !0, !1), a.vP.Success);
    }
    drawRoundedGradientRect(t, e, n, i, l) {
        return null == this.context ? a.vP.Failure : (this.setGradientFillStyle(t, e, n), this.drawRoundedRect(i, l, !0, !1), a.vP.Success);
    }
    clip(t, e) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i } = t,
            l = new Path2D(e);
        this.context.translate(n, i), this.context.clip(l);
    }
    clipRect(t, e) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i, w: l, h: r } = t;
        if (e) {
            let t = new Path2D();
            t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.rect(n, i, l, r), this.context.clip(t, 'evenodd');
        } else {
            let t = new Path2D();
            t.rect(n, i, l, r), this.context.clip(t);
        }
    }
    clipRoundedRect(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: i, y: l, w: r, h: o } = t;
        if (n) {
            let t = new Path2D();
            t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.roundRect(i, l, r, o, e), this.context.clip(t, 'evenodd');
        } else {
            let t = new Path2D();
            t.roundRect(i, l, r, o, e), this.context.clip(t);
        }
    }
    constructor(t, e) {
        super(t, e), s(this, 'canvas', void 0), s(this, 'context', void 0), (this.canvas = t), (this.context = this.canvas.getContext('2d')), null != this.context && (this.context.imageSmoothingQuality = 'high');
    }
}
