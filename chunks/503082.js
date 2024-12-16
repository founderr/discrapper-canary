n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    o = n(129508),
    r = n(921608),
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
class u extends o.Z {
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
        let { x: i, y: l, w: o, h: r } = t;
        n && this.setContextProperties(), e ? this.context.fillRect(i, l, o, r) : this.context.strokeRect(i, l, o, r);
    }
    drawRoundedRect(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: l, y: o, w: r, h: a } = t;
        i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(l, o, r, a, e), n ? this.context.fill() : this.context.stroke();
    }
    drawText(t, e, n) {
        var i, o;
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
                if (null == this.context || u.width <= r.F) return '';
                let e = ''.concat(t);
                for (; u.width + r.F > s; ) (e = e.slice(0, -4)), (u = this.context.measureText(e)), (c = !0);
                return c && (e += '...'), e;
            };
        if ((this.font.truncate === a.GX.None && h(t, e), this.font.truncate === a.GX.Truncate && h((t = f(t)), e), this.font.truncate === a.GX.Wrap)) {
            let n = t.split(' '),
                i = 1 / 0,
                r = '',
                a = 0;
            for (null != e.h && ((i = e.h / d), l()(i > 0, 'DiscordCavas: boundingBox.h of '.concat(e.h, ' results in 0 visible lines with font size of ').concat(d))); n.length > 0; )
                if ((u = this.context.measureText(r + ' ' + n[0])).width > s) {
                    let t = !1;
                    if (
                        (a + 1 >= i && n.length > 0 && (t = !0),
                        '' !== r
                            ? (h(t ? f(r + '...') : r, {
                                  x: e.x,
                                  y: e.y + d * a
                              }),
                              (r = ''))
                            : h(f(null !== (o = n.shift()) && void 0 !== o ? o : ''), {
                                  x: e.x,
                                  y: e.y + d * a
                              }),
                        t)
                    )
                        break;
                    a += 1;
                } else
                    (r += ' '.concat(n.shift())),
                        0 === n.length &&
                            h(r, {
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
                return Array.isArray(t.content) ? (l = o(t.content, e, n)) : (l = this.drawText(t.content, e, n)), this.setFont({ weight: i }), l;
            },
            o = (t, e, n) => {
                let i = 0;
                return (
                    t.forEach((t) => {
                        let { x: o, y: r, w: a, h: s } = e,
                            u = null != a ? a - i : void 0,
                            c = l(
                                t,
                                {
                                    x: o + i,
                                    y: r,
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
        Array.isArray(t) ? o(t, e, n) : l(t, e, n);
    }
    drawImage(t, e, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: a.JU.Stretch };
        l()(null != this.assetMap, 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.');
        let { fillMode: o } = i;
        if (null == this.context) return a.vP.Failure;
        let r = this.assetMap.get(t);
        if (null == r) return a.vP.ImageNotLoaded;
        if (null != n) {
            if (o === a.JU.Contain) {
                let i;
                let l = {
                        w: r.width,
                        h: r.height
                    },
                    o = +(l.w / l.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > o) {
                    let t = n.h * o;
                    i = {
                        x: e.x + (n.w - t) / 2,
                        y: e.y,
                        w: t,
                        h: n.h
                    };
                } else {
                    let t = n.w / o;
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
            if (o === a.JU.Cover) {
                var s, u, c, d;
                let l;
                let o = {
                        w: r.width,
                        h: r.height
                    },
                    h = +(o.w / o.h).toFixed(1),
                    f = +(n.w / n.h).toFixed(1);
                if (f > h) {
                    let t = o.w / f;
                    l = {
                        x: 0,
                        y: (o.h - t) * (null !== (u = null == i ? void 0 : null === (s = i.focus) || void 0 === s ? void 0 : s.y) && void 0 !== u ? u : 0.5),
                        w: r.width,
                        h: t
                    };
                } else {
                    let t = o.h * f;
                    l = {
                        x: (r.width - t) * (null !== (d = null == i ? void 0 : null === (c = i.focus) || void 0 === c ? void 0 : c.x) && void 0 !== d ? d : 0.5),
                        y: 0,
                        w: t,
                        h: r.height
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
            this.context.drawImage(r, e.x, e.y, n.w, n.h);
        } else this.context.drawImage(r, e.x, e.y);
        return a.vP.Success;
    }
    drawRoundedImage(t, e, n, i, l) {
        if (null == this.context) return a.vP.Failure;
        let { x: o, y: r } = e,
            { w: s, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(o, r, s, u, i), this.context.clip(c);
        let d = this.drawImage(t, e, n, l);
        return this.restoreContext(), d;
    }
    drawCroppedImage(t, e, n) {
        var i;
        if (null == this.context) return a.vP.Failure;
        let l = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(t);
        if (null == l) return a.vP.ImageNotLoaded;
        let { x: o, y: r, w: s, h: u } = e,
            { x: c, y: d, w: h, h: f } = n;
        return this.context.drawImage(l, o, r, s, u, c, d, h, f), a.vP.Success;
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
        let { x: n, y: i, w: l, h: o } = t;
        if (e) {
            let t = new Path2D();
            t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.rect(n, i, l, o), this.context.clip(t, 'evenodd');
        } else {
            let t = new Path2D();
            t.rect(n, i, l, o), this.context.clip(t);
        }
    }
    clipRoundedRect(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: i, y: l, w: o, h: r } = t;
        if (n) {
            let t = new Path2D();
            t.moveTo(0, 0), t.lineTo(this.canvas.width, 0), t.lineTo(this.canvas.width, this.canvas.height), t.lineTo(0, this.canvas.height), t.lineTo(0, 0), t.closePath(), t.roundRect(i, l, o, r, e), this.context.clip(t, 'evenodd');
        } else {
            let t = new Path2D();
            t.roundRect(i, l, o, r, e), this.context.clip(t);
        }
    }
    constructor(t, e) {
        super(t, e), s(this, 'canvas', void 0), s(this, 'context', void 0), (this.canvas = t), (this.context = this.canvas.getContext('2d')), null != this.context && (this.context.imageSmoothingQuality = 'high');
    }
}
