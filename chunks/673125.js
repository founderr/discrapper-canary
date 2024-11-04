n(653041), n(47120);
var i,
    l,
    r,
    s,
    a = n(442837),
    o = n(570140),
    c = n(633302),
    u = n(594174),
    d = n(176354),
    h = n(292793),
    m = n(88315),
    p = n(813900);
let f = {},
    g = {},
    C = {},
    x = !0,
    v = null;
function _(e) {
    if (null == g[e]) {
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
        (i.src = n), (g[e] = i);
    }
}
class I extends (i = a.ZP.Store) {
    get visibleOverlayCanvas() {
        return x;
    }
    getDrawables(e) {
        return null != f[e] ? f[e] : [];
    }
    getAvatarImage(e) {
        return g[e];
    }
    getEmojiImage(e) {
        return C[e];
    }
    getDrawMode() {
        return v;
    }
}
(s = 'SharedCanvasStore'),
    (r = 'displayName') in (l = I)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s);
let E = new I(o.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: l } = e,
            r = f[l];
        if (null == r)
            f[l] = [
                {
                    type: h.W.LINE,
                    id: t,
                    userId: i,
                    points: n
                }
            ];
        else {
            let e = r.find((e) => e.id === t);
            null == e
                ? r.push({
                      type: h.W.LINE,
                      id: t,
                      userId: i,
                      points: n
                  })
                : (0, m.P7)(e) && e.points.push(...n);
        }
        _(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, i;
        let { emojiHose: l, streamerId: r, userId: s } = e,
            a = {
                ...l,
                type: h.W.EMOJI_HOSE
            };
        if (null == f[r]) f[r] = [a];
        else {
            let e = f[r].findIndex((e) => e.id === l.id);
            e >= 0
                ? (f[r][e] = {
                      ...f[r][e],
                      ...a
                  })
                : f[r].push(a);
        }
        let o = null !== (n = null !== (t = l.emojiId) && void 0 !== t ? t : l.emojiName) && void 0 !== n ? n : '';
        if (null == C[o]) {
            let e = null != l.emojiName ? c.ZP.convertNameToSurrogate(l.emojiName) : null;
            (C[o] = new Image()),
                (C[o].src = (0, d.qc)(
                    {
                        id: l.emojiId,
                        name: null !== (i = null != e ? e : l.emojiName) && void 0 !== i ? i : '',
                        animated: !1
                    },
                    p.qh
                ));
        }
        _(s);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != f[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (f[n] = f[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        v = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        x = !x;
    }
});
t.Z = E;
