n.d(t, {
    Ng: function () {
        return b;
    },
    OC: function () {
        return y;
    },
    dg: function () {
        return I;
    },
    dp: function () {
        return m;
    },
    f3: function () {
        return E;
    },
    nA: function () {
        return T;
    },
    qF: function () {
        return h;
    },
    uV: function () {
        return v;
    },
    vY: function () {
        return S;
    }
}),
    n(47120);
var r = n(112456),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(206744),
    l = n(948350),
    u = n(430824),
    c = n(594174),
    d = n(380684),
    f = n(74538),
    _ = n(981631),
    p = n(474936);
function h(e, t) {
    return e instanceof File ? e : m(e.data, e.filename, t);
}
function m(e, t, r) {
    let i = n(230318);
    if (null == t && ((t = 'unknown'), 'type' in e)) {
        let n = i.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == r && ('type' in e && (r = e.type), (r = null != r ? r : i.lookup(t))), new File([e], t, { type: r });
}
let g = [
    {
        reType: /^image\/vnd.adobe.photoshop/,
        klass: 'photoshop'
    },
    {
        reType: /^image\/svg\+xml/,
        klass: 'webcode'
    },
    {
        reType: /^image\//,
        klass: 'image'
    },
    {
        reType: /^video\//,
        klass: 'video'
    },
    {
        reName: /\.pdf$/,
        klass: 'acrobat'
    },
    {
        reName: /\.ae/,
        klass: 'ae'
    },
    {
        reName: /\.sketch$/,
        klass: 'sketch'
    },
    {
        reName: /\.ai$/,
        klass: 'ai'
    },
    {
        reName: /\.(?:rar|zip|7z|tar|tar\.gz)$/,
        klass: 'archive'
    },
    {
        reName: /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/,
        klass: 'code'
    },
    {
        reName: /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/,
        klass: 'document'
    },
    {
        reName: /\.(?:xls|xlsx|numbers|csv)$/,
        klass: 'spreadsheet'
    },
    {
        reName: /\.(?:html|xhtml|htm|js|xml|xls|xsd|css|styl)$/,
        klass: 'webcode'
    },
    {
        reName: /\.(?:mp3|ogg|opus|wav|aiff|flac)$/,
        klass: 'audio'
    }
];
function E(e) {
    return v(e.name, e.type);
}
function v(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = s().find(g, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function b(e) {
    return i().filesize(e);
}
function I(e) {
    let t = c.default.getCurrentUser();
    o.Z.trackExposure({ location: 'de18ec_1' }), l.Z.trackExposure({ location: 'de18ec_2' });
    let n = f.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = u.Z.getGuild(e),
        i = null != r ? p.HO[r.premiumTier].limits.fileSize : _.mBz;
    return (0, d.XS)() && null != r && r.premiumTier < 2 && n < i ? n : Math.max(i, n);
}
function T(e, t) {
    let n = I(t);
    return Array.from(e).some((e) => e.size > n);
}
function S(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > y()
    );
}
function y() {
    let e = c.default.getCurrentUser();
    return null != e && e.isStaff() ? 524288000 : 524288000;
}
