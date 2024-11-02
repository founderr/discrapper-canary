n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(512722),
    l = n.n(i),
    a = n(129508),
    r = n(921608),
    o = n(693824);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends a.Z {
    getCanvasForExport() {
        return this.canvas;
    }
    setContextProperties() {
        null != this.context && ((this.context.fillStyle = this.color), (this.context.strokeStyle = this.color), (this.context.font = ''.concat(this.font.style, ' ').concat(this.font.weight, ' ').concat(this.font.size, 'px ').concat(this.font.family.join(', '))));
    }
    setSize(e, t) {
        let { w: n, h: i } = e;
        null != this.context && null != t ? ((this.canvas.width = n * t), (this.canvas.height = i * t), this.context.scale(t, t)) : ((this.canvas.width = n), (this.canvas.height = i));
    }
    clearRect(e) {
        if (null == this.context) return;
        let { x: t, y: n, w: i, h: l } = e;
        this.context.clearRect(t, n, i, l);
    }
    restoreContext() {
        null != this.context && this.context.restore();
    }
    drawRect(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == this.context) return;
        let { x: i, y: l, w: a, h: r } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(i, l, a, r) : this.context.strokeRect(i, l, a, r);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: l, y: a, w: r, h: o } = e;
        i && this.setContextProperties(), this.context.beginPath(), this.context.roundRect(l, a, r, o, t), n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        var i, a;
        if (null == this.context) return;
        this.setContextProperties();
        let s = null !== (i = t.w) && void 0 !== i ? i : this.canvas.width - t.x,
            u = this.context.measureText(e),
            c = !1,
            d = this.font.size,
            h = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            m = (e) => {
                if (null == this.context || u.width <= r.F) return '';
                let t = ''.concat(e);
                for (; u.width + r.F > s; ) (t = t.slice(0, -4)), (u = this.context.measureText(t)), (c = !0);
                return c && (t += '...'), t;
            };
        if ((this.font.truncate === o.GX.None && h(e, t), this.font.truncate === o.GX.Truncate && h((e = m(e)), t), this.font.truncate === o.GX.Wrap)) {
            let n = e.split(' '),
                i = 1 / 0,
                r = '',
                o = 0;
            for (null != t.h && ((i = t.h / d), l()(i > 0, 'DiscordCavas: boundingBox.h of '.concat(t.h, ' results in 0 visible lines with font size of ').concat(d))); n.length > 0; )
                if ((u = this.context.measureText(r + ' ' + n[0])).width > s) {
                    let e = !1;
                    if (
                        (o + 1 >= i && n.length > 0 && (e = !0),
                        '' !== r
                            ? (h(e ? m(r + '...') : r, {
                                  x: t.x,
                                  y: t.y + d * o
                              }),
                              (r = ''))
                            : h(m(null !== (a = n.shift()) && void 0 !== a ? a : ''), {
                                  x: t.x,
                                  y: t.y + d * o
                              }),
                        e)
                    )
                        break;
                    o += 1;
                } else
                    (r += ' '.concat(n.shift())),
                        0 === n.length &&
                            h(r, {
                                x: t.x,
                                y: t.y + d * o
                            });
        }
        return {
            x: t.x,
            y: t.y,
            w: u.width,
            h: u.actualBoundingBoxAscent + u.actualBoundingBoxDescent
        };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === o.GX.Wrap && console.warn("DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.");
        let i = this.font.weight,
            l = (e, t, n) => {
                let l;
                if ('strong' === e.type) this.setFont({ weight: 700 });
                return Array.isArray(e.content) ? (l = a(e.content, t, n)) : (l = this.drawText(e.content, t, n)), this.setFont({ weight: i }), l;
            },
            a = (e, t, n) => {
                let i = 0;
                return (
                    e.forEach((e) => {
                        let { x: a, y: r, w: o, h: s } = t,
                            u = null != o ? o - i : void 0,
                            c = l(
                                e,
                                {
                                    x: a + i,
                                    y: r,
                                    w: u,
                                    h: s
                                },
                                n
                            );
                        null != c && (i += c.w);
                    }),
                    {
                        x: t.x + i,
                        y: t.y,
                        w: i,
                        h: this.font.size
                    }
                );
            };
        Array.isArray(e) ? a(e, t, n) : l(e, t, n);
    }
    drawImage(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: o.JU.Stretch };
        l()(null != this.assetMap, 'DiscordCavas: `drawImage` requires an AssetMap to be initialized.');
        let { fillMode: a } = i;
        if (null == this.context) return o.vP.Failure;
        let r = this.assetMap.get(e);
        if (null == r) return o.vP.ImageNotLoaded;
        if (null != n) {
            if (a === o.JU.Contain) {
                let i;
                let l = {
                        w: r.width,
                        h: r.height
                    },
                    a = +(l.w / l.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > a) {
                    let e = n.h * a;
                    i = {
                        x: t.x + (n.w - e) / 2,
                        y: t.y,
                        w: e,
                        h: n.h
                    };
                } else {
                    let e = n.w / a;
                    i = {
                        x: t.x,
                        y: t.y + (n.h - e) / 2,
                        w: n.w,
                        h: e
                    };
                }
                return (
                    this.drawCroppedImage(
                        e,
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
                    o.vP.Success
                );
            }
            if (a === o.JU.Cover) {
                var s, u, c, d;
                let l;
                let a = {
                        w: r.width,
                        h: r.height
                    },
                    h = +(a.w / a.h).toFixed(1),
                    m = +(n.w / n.h).toFixed(1);
                if (m > h) {
                    let e = a.w / m;
                    l = {
                        x: 0,
                        y: (a.h - e) * (null !== (u = null == i ? void 0 : null === (s = i.focus) || void 0 === s ? void 0 : s.y) && void 0 !== u ? u : 0.5),
                        w: r.width,
                        h: e
                    };
                } else {
                    let e = a.h * m;
                    l = {
                        x: (r.width - e) * (null !== (d = null == i ? void 0 : null === (c = i.focus) || void 0 === c ? void 0 : c.x) && void 0 !== d ? d : 0.5),
                        y: 0,
                        w: e,
                        h: r.height
                    };
                }
                return (
                    this.drawCroppedImage(e, l, {
                        x: t.x,
                        y: t.y,
                        w: n.w,
                        h: n.h
                    }),
                    o.vP.Success
                );
            }
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
        } else this.context.drawImage(r, t.x, t.y);
        return o.vP.Success;
    }
    drawRoundedImage(e, t, n, i, l) {
        if (null == this.context) return o.vP.Failure;
        let { x: a, y: r } = t,
            { w: s, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(a, r, s, u, i), this.context.clip(c);
        let d = this.drawImage(e, t, n, l);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        var i;
        if (null == this.context) return o.vP.Failure;
        let l = null === (i = this.assetMap) || void 0 === i ? void 0 : i.get(e);
        if (null == l) return o.vP.ImageNotLoaded;
        let { x: a, y: r, w: s, h: u } = t,
            { x: c, y: d, w: h, h: m } = n;
        return this.context.drawImage(l, a, r, s, u, c, d, h, m), o.vP.Success;
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return o.vP.Failure;
        this.setContextProperties(), this.context.save();
        let l = new Path2D(e);
        return this.context.translate(t.x, t.y), this.context.scale(i, i), n ? this.context.fill(l, 'evenodd') : this.context.stroke(l), this.restoreContext(), o.vP.Success;
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context) return;
        let i = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let { color: t, stop: n } of e) i.addColorStop(n, t);
        this.context.fillStyle = i;
    }
    drawGradientRect(e, t, n, i) {
        return null == this.context ? o.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRect(i, !0, !1), o.vP.Success);
    }
    drawRoundedGradientRect(e, t, n, i, l) {
        return null == this.context ? o.vP.Failure : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, l, !0, !1), o.vP.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i } = e,
            l = new Path2D(t);
        this.context.translate(n, i), this.context.clip(l);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i, w: l, h: a } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.rect(n, i, l, a), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.rect(n, i, l, a), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: i, y: l, w: a, h: r } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0), e.lineTo(this.canvas.width, 0), e.lineTo(this.canvas.width, this.canvas.height), e.lineTo(0, this.canvas.height), e.lineTo(0, 0), e.closePath(), e.roundRect(i, l, a, r, t), this.context.clip(e, 'evenodd');
        } else {
            let e = new Path2D();
            e.roundRect(i, l, a, r, t), this.context.clip(e);
        }
    }
    constructor(e, t) {
        super(e, t), s(this, 'canvas', void 0), s(this, 'context', void 0), (this.canvas = e), (this.context = this.canvas.getContext('2d')), null != this.context && (this.context.imageSmoothingQuality = 'high');
    }
}
