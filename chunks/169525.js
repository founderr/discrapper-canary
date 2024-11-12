n.d(t, {
    As: function () {
        return S;
    },
    BP: function () {
        return I;
    },
    MC: function () {
        return y;
    },
    dn: function () {
        return v;
    },
    hL: function () {
        return T;
    },
    lK: function () {
        return b;
    },
    wk: function () {
        return r;
    }
}),
    n(789020),
    n(627341);
var r,
    i,
    a = n(278074),
    s = n(399606),
    o = n(432877),
    l = n(247206),
    u = n(25610),
    c = n(368844),
    d = n(768494),
    f = n(695346),
    _ = n(375954),
    p = n(496675),
    h = n(630388),
    m = n(255269),
    g = n(981631),
    E = n(388032);
((i = r || (r = {})).SPOILER = 'spoiler'), (i.EXPLICIT_CONTENT = 'explicit_content'), (i.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content');
let v = (e, t) => {
        let { spoiler: n, flags: r = 0, content_scan_version: i } = e;
        if (t) {
            if ((0, l.Sv)(i)) return 'potential_explicit_content';
            if ((0, h.yE)(r, g.J0y.CONTAINS_EXPLICIT_MEDIA) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, h.yE)(r, g.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    I = (e, t, n, r, i) => {
        let { flags: a = 0, contentScanVersion: s } = e,
            u = _.Z.getMessage(t, n);
        if (null == u) return null;
        if (i) {
            if (!u.author.bot && (0, l.Sv)(s)) return 'potential_explicit_content';
            if ((0, h.yE)(a, g.xPJ.CONTAINS_EXPLICIT_MEDIA) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    },
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { contentScanMetadata: r } = e;
        if (t) {
            if ((0, l.oh)(r)) return 'potential_explicit_content';
            let { flags: e } = r;
            if ((0, h.yE)(e, d.Cb.EXPLICIT) || o.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function S(e, t, n) {
    if (null == e) return [!1, void 0];
    if (n && (0, l.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let r = (function (e) {
        switch (e) {
            case c.Ah.EMBED:
                return l.lJ.Embed;
            case c.Ah.ATTACHMENT:
                return l.lJ.Attachment;
            default:
                return;
        }
    })(e.type);
    return null != r &&
        (0, l.KP)(
            {
                type: r,
                media: e
            },
            n
        )
        ? [!0, 'explicit_content']
        : e.spoiler
          ? [t, 'spoiler']
          : [!1, void 0];
}
function T(e) {
    let { channel: t, media: n } = e,
        r = (0, s.e7)([p.Z], () => null != t && p.Z.can(g.Plq.MANAGE_MESSAGES, t)),
        i = f.cC.useSetting(),
        a = (0, u.m)();
    return S(n, !(0, m.Z)(i, r), a);
}
let y = (e) =>
    (0, a.EQ)(e)
        .with('explicit_content', () => E.intl.string(E.t.SEgHFh))
        .with('spoiler', () => E.intl.string(E.t.XpfDHx))
        .otherwise(() => void 0);
