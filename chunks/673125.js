n(653041), n(47120);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(633302),
    u = n(594174),
    d = n(176354),
    h = n(292793),
    m = n(88315),
    p = n(813900);
let _ = {},
    f = {},
    E = {},
    g = !0,
    C = null;
function I(e) {
    if (null == f[e]) {
        let t = u.default.getUser(e);
        if (null == t) return;
        let n = t.getAvatarURL(null, p.Ks),
            i = new Image();
        (i.src = n), (f[e] = i);
    }
}
class T extends (i = r.ZP.Store) {
    get visibleOverlayCanvas() {
        return g;
    }
    getDrawables(e) {
        return null != _[e] ? _[e] : [];
    }
    getAvatarImage(e) {
        return f[e];
    }
    getEmojiImage(e) {
        return E[e];
    }
    getDrawMode() {
        return C;
    }
}
(l = 'SharedCanvasStore'),
    (a = 'displayName') in (s = T)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l);
let x = new T(o.Z, {
    SHARED_CANVAS_UPDATE_LINE_POINTS: function (e) {
        let { lineId: t, newPoints: n, userId: i, streamerId: s } = e,
            a = _[s];
        if (null == a)
            _[s] = [
                {
                    type: h.W.LINE,
                    id: t,
                    userId: i,
                    points: n
                }
            ];
        else {
            let e = a.find((e) => e.id === t);
            null == e
                ? a.push({
                      type: h.W.LINE,
                      id: t,
                      userId: i,
                      points: n
                  })
                : (0, m.P7)(e) && e.points.push(...n);
        }
        I(i);
    },
    SHARED_CANVAS_UPDATE_EMOJI_HOSE: function (e) {
        var t, n, i;
        let { emojiHose: s, streamerId: a, userId: l } = e,
            r = {
                ...s,
                type: h.W.EMOJI_HOSE
            };
        if (null == _[a]) _[a] = [r];
        else {
            let e = _[a].findIndex((e) => e.id === s.id);
            e >= 0
                ? (_[a][e] = {
                      ..._[a][e],
                      ...r
                  })
                : _[a].push(r);
        }
        let o = null !== (n = null !== (t = s.emojiId) && void 0 !== t ? t : s.emojiName) && void 0 !== n ? n : '';
        if (null == E[o]) {
            let e = null != s.emojiName ? c.ZP.convertNameToSurrogate(s.emojiName) : null;
            (E[o] = new Image()),
                (E[o].src = (0, d.qc)(
                    {
                        id: s.emojiId,
                        name: null !== (i = null != e ? e : s.emojiName) && void 0 !== i ? i : '',
                        animated: !1
                    },
                    p.qh
                ));
        }
        I(l);
    },
    SHARED_CANVAS_CLEAR_DRAWABLES: function (e) {
        let { drawables: t, streamerId: n } = e;
        if (null != _[n]) {
            let e = new Set();
            t.forEach((t) => e.add(t.id)), (_[n] = _[n].filter((t) => !e.has(t.id)));
        }
    },
    SHARED_CANVAS_SET_DRAW_MODE: function (e) {
        let { drawMode: t } = e;
        C = t;
    },
    TOGGLE_OVERLAY_CANVAS: function (e) {
        let {} = e;
        g = !g;
    }
});
t.Z = x;
