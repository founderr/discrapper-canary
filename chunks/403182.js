n.d(t, {
    Ng: function () {
        return v;
    },
    OC: function () {
        return y;
    },
    dg: function () {
        return N;
    },
    dp: function () {
        return T;
    },
    f3: function () {
        return S;
    },
    nA: function () {
        return O;
    },
    qF: function () {
        return I;
    },
    uV: function () {
        return A;
    },
    vY: function () {
        return C;
    }
});
var r = n(47120);
var i = n(112456),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(206744),
    u = n(948350),
    c = n(430824),
    d = n(594174),
    _ = n(380684),
    E = n(74538),
    f = n(981631),
    h = n(474936);
let p = 524288000,
    m = 524288000;
function I(e, t) {
    return e instanceof File ? e : T(e.data, e.filename, t);
}
function T(e, t, r) {
    let i = n(643907);
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
function S(e) {
    return A(e.name, e.type);
}
function A(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = s().find(g, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function v(e) {
    return a().filesize(e);
}
function N(e) {
    let t = d.default.getCurrentUser();
    l.Z.trackExposure({ location: 'de18ec_1' }), u.Z.trackExposure({ location: 'de18ec_2' });
    let n = E.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = c.Z.getGuild(e),
        i = null != r ? h.HO[r.premiumTier].limits.fileSize : f.mBz;
    return (0, _.XS)() && null != r && r.premiumTier < 2 && n < i ? n : Math.max(i, n);
}
function O(e, t) {
    let n = N(t);
    return Array.from(e).some((e) => e.size > n);
}
function R(e) {
    let t = 0;
    for (let n of e) t += n.size;
    return t;
}
function C(e) {
    return R(e) > y();
}
function y() {
    let e = d.default.getCurrentUser();
    return null != e && e.isStaff() ? m : p;
}
