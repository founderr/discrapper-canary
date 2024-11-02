t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(668781),
    a = t(829883),
    o = t(976853),
    s = t(626135),
    u = t(358085),
    d = t(960048),
    c = t(591759),
    g = t(998502),
    m = t(36998),
    f = t(981631),
    h = t(388032);
let v = 'https://media.discordapp.net',
    I = /^.*\.discordapp\.net$/,
    E = 'cdn.discordapp.com',
    p = ''.concat(v, '/stickers'),
    M = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff', 'bmp']),
    Z = new Set(['jpg', 'jpeg', 'png']),
    x = (e) => {
        var n, t, i, l;
        return null === (l = c.Z.toURLSafe(e)) || void 0 === l ? void 0 : null === (i = l.pathname) || void 0 === i ? void 0 : null === (t = i.split('.')) || void 0 === t ? void 0 : null === (n = t.pop()) || void 0 === n ? void 0 : n.toLowerCase();
    };
function S(e, n) {
    r.Z.show({
        title: h.intl.string(h.t.j2d6Ki),
        body: e
    }),
        d.Z.captureException(n);
}
function j(e, n, t) {
    if (
        (0, o.Z)(null == n ? void 0 : n.getChannelId()) ||
        (null == t ? void 0 : t.shouldHideMediaOptions) === !0 ||
        !u.isPlatformEmbedded ||
        null == e ||
        !(function (e) {
            let n = c.Z.toURLSafe(e);
            if (null == n) return !1;
            let t = x(e);
            return (I.test(n.hostname) || n.host === E) && !e.startsWith(p) && !(0, a.zt)(e) && null != t && M.has(t);
        })(e)
    )
        return null;
    let r = (function (e) {
            let n = c.Z.toURLSafe(e);
            return null == n || n.host === E ? e : n.origin === v ? ((n.host = E), n.searchParams.delete('size'), n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.delete('quality'), n.searchParams.delete('format'), n.toString()) : (n.searchParams.delete('width'), n.searchParams.delete('height'), n.searchParams.set('quality', 'lossless'), n.toString());
        })(e),
        d = async () => {
            try {
                await g.ZP.saveImage(r), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVED, { ...(0, m.v)() });
            } catch (e) {
                s.default.track(f.rMx.CONTEXT_MENU_IMAGE_SAVE_FAILED, { ...(0, m.v)() }), S(h.intl.string(h.t['8Ve/S0']), e);
            }
        },
        j = async () => {
            try {
                await g.ZP.copyImage(r), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPIED, { ...(0, m.v)() });
            } catch (e) {
                S(h.intl.string(h.t.PTPbj4), e), s.default.track(f.rMx.CONTEXT_MENU_IMAGE_COPY_FAILED, { ...(0, m.v)() });
            }
        };
    return [
        g.ZP.canCopyImage() &&
        (function (e) {
            let n = x(e);
            return null != n && Z.has(n);
        })(e)
            ? (0, i.jsx)(
                  l.MenuItem,
                  {
                      id: 'copy-image',
                      label: h.intl.string(h.t.tvUqWl),
                      action: j
                  },
                  'copy-image'
              )
            : null,
        (0, i.jsx)(
            l.MenuItem,
            {
                id: 'save-image',
                label: h.intl.string(h.t.PeXhgI),
                action: d
            },
            'save-image'
        )
    ];
}
