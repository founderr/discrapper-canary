n.d(t, {
    Ng: function () {
        return E;
    },
    OC: function () {
        return b;
    },
    dg: function () {
        return v;
    },
    dp: function () {
        return p;
    },
    f3: function () {
        return m;
    },
    nA: function () {
        return I;
    },
    qF: function () {
        return _;
    },
    uV: function () {
        return g;
    },
    vY: function () {
        return T;
    }
}),
    n(47120);
var r = n(112456),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(430824),
    l = n(594174),
    u = n(380684),
    c = n(74538),
    d = n(981631),
    f = n(474936);
function _(e, t) {
    return e instanceof File ? e : p(e.data, e.filename, t);
}
function p(e, t, r) {
    let i = n(230318);
    if (null == t && ((t = 'unknown'), 'type' in e)) {
        let n = i.extension(e.type);
        n && (t += '.'.concat(n));
    }
    return null == r && ('type' in e && (r = e.type), (r = null != r ? r : i.lookup(t))), new File([e], t, { type: r });
}
let h = [
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
function m(e) {
    return g(e.name, e.type);
}
function g(e, t) {
    var n;
    e = null !== (n = null == e ? void 0 : e.toLowerCase()) && void 0 !== n ? n : '';
    let r = s().find(h, (n) => (null != n.reType && null != t ? n.reType.test(t) : null != n.reName && '' !== e && n.reName.test(e)));
    return null != r ? r.klass : 'unknown';
}
function E(e) {
    return i().filesize(e);
}
function v(e) {
    let t = l.default.getCurrentUser(),
        n = c.ZP.getUserMaxFileSize(t);
    if (null == e) return n;
    let r = o.Z.getGuild(e),
        i = null != r ? f.HO[r.premiumTier].limits.fileSize : d.mBz;
    return (0, u.XS)() && null != r && r.premiumTier < 2 && n < i ? n : Math.max(i, n);
}
function I(e, t) {
    let n = v(t);
    return Array.from(e).some((e) => e.size > n);
}
function T(e) {
    return (
        (function (e) {
            let t = 0;
            for (let n of e) t += n.size;
            return t;
        })(e) > b()
    );
}
function b() {
    let e = l.default.getCurrentUser();
    return null != e && e.isStaff() ? 524288000 : 524288000;
}
