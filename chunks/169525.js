n.d(t, {
    As: function () {
        return N;
    },
    BP: function () {
        return S;
    },
    MC: function () {
        return R;
    },
    dn: function () {
        return g;
    },
    hL: function () {
        return O;
    },
    lK: function () {
        return A;
    },
    wk: function () {
        return r;
    }
});
var r,
    i = n(789020);
var a = n(627341);
var o = n(278074),
    s = n(399606),
    l = n(432877),
    u = n(163268),
    c = n(25610),
    d = n(368844),
    _ = n(768494),
    E = n(695346),
    f = n(375954),
    h = n(496675),
    p = n(630388),
    m = n(255269),
    I = n(981631),
    T = n(689938);
!(function (e) {
    (e.SPOILER = 'spoiler'), (e.EXPLICIT_CONTENT = 'explicit_content'), (e.POTENTIAL_EXPLICIT_CONTENT = 'potential_explicit_content');
})(r || (r = {}));
let g = (e, t) => {
        let { spoiler: n, flags: r = 0, content_scan_version: i } = e;
        if (t) {
            if ((0, u.Sv)(i)) return 'potential_explicit_content';
            if ((0, p.yE)(r, I.J0y.CONTAINS_EXPLICIT_MEDIA) || l.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n || (0, p.yE)(r, I.J0y.IS_SPOILER) ? 'spoiler' : null;
    },
    S = (e, t, n, r, i) => {
        let { flags: a = 0, contentScanVersion: o } = e,
            s = f.Z.getMessage(t, n);
        if (null == s) return null;
        if (i) {
            if (!s.author.bot && (0, u.Sv)(o)) return 'potential_explicit_content';
            if ((0, p.yE)(a, I.xPJ.CONTAINS_EXPLICIT_MEDIA) || l.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return r ? 'spoiler' : null;
    },
    A = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            { contentScanMetadata: r } = e;
        if (t) {
            if ((0, u.oh)(r)) return 'potential_explicit_content';
            let { contentScanFlags: e } = r;
            if ((0, p.yE)(e, _.Cb.EXPLICIT) || l.ZP.get('obscure_blur_effect_enabled')) return 'explicit_content';
        }
        return n ? 'spoiler' : null;
    };
function v(e) {
    switch (e) {
        case d.Ah.EMBED:
            return u.lJ.Embed;
        case d.Ah.ATTACHMENT:
            return u.lJ.Attachment;
        default:
            return;
    }
}
function N(e, t, n) {
    if (null == e) return [!1, void 0];
    if (n && (0, u.Sv)(e.contentScanVersion)) return [!0, 'potential_explicit_content'];
    let r = v(e.type);
    return null != r &&
        (0, u.KP)(
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
function O(e) {
    let { channel: t, media: n } = e,
        r = (0, s.e7)([h.Z], () => null != t && h.Z.can(I.Plq.MANAGE_MESSAGES, t)),
        i = E.cC.useSetting(),
        a = (0, c.m)();
    return N(n, !(0, m.Z)(i, r), a);
}
let R = (e) =>
    (0, o.EQ)(e)
        .with('explicit_content', () => T.Z.Messages.EXPLICIT_CONTENT_ALT)
        .with('spoiler', () => T.Z.Messages.SPOILER_HIDDEN_A11Y_LABEL)
        .otherwise(() => void 0);
