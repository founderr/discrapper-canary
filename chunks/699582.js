var r = n(863714),
    i = n(635535),
    a,
    s = {},
    o = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, 'a', {}), 'a' in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !o && !Object.prototype.__defineGetter__,
    u = Object.prototype.hasOwnProperty,
    c = o
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!u.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    d =
        Array.prototype.indexOf ||
        function (e) {
            if (!this.length) return -1;
            for (var t = arguments[1] || 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1;
        },
    f =
        Object.create ||
        function (e, t) {
            var n;
            function r() {}
            for (var i in ((r.prototype = e), (n = new r()), t)) u.call(t, i) && c(n, i, t[i]);
            return n;
        },
    _ = Array.prototype.slice,
    p = Array.prototype.concat,
    h = Array.prototype.push,
    m = Array.prototype.join,
    g = Array.prototype.shift,
    E =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = _.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, p.call(n, _.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, p.call(n, _.call(arguments)));
                      };
            }),
    v = f(null),
    I = Math.random(),
    b = f(null, {
        narrow: {},
        short: {},
        long: {}
    }),
    T = !1,
    S = !1,
    y = /^[A-Z]{3}$/,
    A = /-u(?:-[0-9a-z]{2,8})+/gi,
    N = {
        tags: {
            'art-lojban': 'jbo',
            'i-ami': 'ami',
            'i-bnn': 'bnn',
            'i-hak': 'hak',
            'i-klingon': 'tlh',
            'i-lux': 'lb',
            'i-navajo': 'nv',
            'i-pwn': 'pwn',
            'i-tao': 'tao',
            'i-tay': 'tay',
            'i-tsu': 'tsu',
            'no-bok': 'nb',
            'no-nyn': 'nn',
            'sgn-BE-FR': 'sfb',
            'sgn-BE-NL': 'vgt',
            'sgn-CH-DE': 'sgg',
            'zh-guoyu': 'cmn',
            'zh-hakka': 'hak',
            'zh-min-nan': 'nan',
            'zh-xiang': 'hsn',
            'sgn-BR': 'bzs',
            'sgn-CO': 'csn',
            'sgn-DE': 'gsg',
            'sgn-DK': 'dsl',
            'sgn-ES': 'ssp',
            'sgn-FR': 'fsl',
            'sgn-GB': 'bfi',
            'sgn-GR': 'gss',
            'sgn-IE': 'isg',
            'sgn-IT': 'ise',
            'sgn-JP': 'jsl',
            'sgn-MX': 'mfs',
            'sgn-NI': 'ncs',
            'sgn-NL': 'dse',
            'sgn-NO': 'nsl',
            'sgn-PT': 'psr',
            'sgn-SE': 'swl',
            'sgn-US': 'ase',
            'sgn-ZA': 'sfs',
            'zh-cmn': 'cmn',
            'zh-cmn-Hans': 'cmn-Hans',
            'zh-cmn-Hant': 'cmn-Hant',
            'zh-gan': 'gan',
            'zh-wuu': 'wuu',
            'zh-yue': 'yue'
        },
        subtags: {
            BU: 'MM',
            DD: 'DE',
            FX: 'FR',
            TP: 'TL',
            YD: 'YE',
            ZR: 'CD',
            heploc: 'alalc97',
            in: 'id',
            iw: 'he',
            ji: 'yi',
            jw: 'jv',
            mo: 'ro',
            ayx: 'nun',
            bjd: 'drl',
            ccq: 'rki',
            cjr: 'mom',
            cka: 'cmr',
            cmk: 'xch',
            drh: 'khk',
            drw: 'prs',
            gav: 'dev',
            hrr: 'jal',
            ibi: 'opa',
            kgh: 'kml',
            lcq: 'ppr',
            mst: 'mry',
            myt: 'mry',
            sca: 'hle',
            tie: 'ras',
            tkk: 'twm',
            tlw: 'weo',
            tnf: 'prs',
            ybd: 'rki',
            yma: 'lrr'
        },
        extLang: {
            aao: ['aao', 'ar'],
            abh: ['abh', 'ar'],
            abv: ['abv', 'ar'],
            acm: ['acm', 'ar'],
            acq: ['acq', 'ar'],
            acw: ['acw', 'ar'],
            acx: ['acx', 'ar'],
            acy: ['acy', 'ar'],
            adf: ['adf', 'ar'],
            ads: ['ads', 'sgn'],
            aeb: ['aeb', 'ar'],
            aec: ['aec', 'ar'],
            aed: ['aed', 'sgn'],
            aen: ['aen', 'sgn'],
            afb: ['afb', 'ar'],
            afg: ['afg', 'sgn'],
            ajp: ['ajp', 'ar'],
            apc: ['apc', 'ar'],
            apd: ['apd', 'ar'],
            arb: ['arb', 'ar'],
            arq: ['arq', 'ar'],
            ars: ['ars', 'ar'],
            ary: ['ary', 'ar'],
            arz: ['arz', 'ar'],
            ase: ['ase', 'sgn'],
            asf: ['asf', 'sgn'],
            asp: ['asp', 'sgn'],
            asq: ['asq', 'sgn'],
            asw: ['asw', 'sgn'],
            auz: ['auz', 'ar'],
            avl: ['avl', 'ar'],
            ayh: ['ayh', 'ar'],
            ayl: ['ayl', 'ar'],
            ayn: ['ayn', 'ar'],
            ayp: ['ayp', 'ar'],
            bbz: ['bbz', 'ar'],
            bfi: ['bfi', 'sgn'],
            bfk: ['bfk', 'sgn'],
            bjn: ['bjn', 'ms'],
            bog: ['bog', 'sgn'],
            bqn: ['bqn', 'sgn'],
            bqy: ['bqy', 'sgn'],
            btj: ['btj', 'ms'],
            bve: ['bve', 'ms'],
            bvl: ['bvl', 'sgn'],
            bvu: ['bvu', 'ms'],
            bzs: ['bzs', 'sgn'],
            cdo: ['cdo', 'zh'],
            cds: ['cds', 'sgn'],
            cjy: ['cjy', 'zh'],
            cmn: ['cmn', 'zh'],
            coa: ['coa', 'ms'],
            cpx: ['cpx', 'zh'],
            csc: ['csc', 'sgn'],
            csd: ['csd', 'sgn'],
            cse: ['cse', 'sgn'],
            csf: ['csf', 'sgn'],
            csg: ['csg', 'sgn'],
            csl: ['csl', 'sgn'],
            csn: ['csn', 'sgn'],
            csq: ['csq', 'sgn'],
            csr: ['csr', 'sgn'],
            czh: ['czh', 'zh'],
            czo: ['czo', 'zh'],
            doq: ['doq', 'sgn'],
            dse: ['dse', 'sgn'],
            dsl: ['dsl', 'sgn'],
            dup: ['dup', 'ms'],
            ecs: ['ecs', 'sgn'],
            esl: ['esl', 'sgn'],
            esn: ['esn', 'sgn'],
            eso: ['eso', 'sgn'],
            eth: ['eth', 'sgn'],
            fcs: ['fcs', 'sgn'],
            fse: ['fse', 'sgn'],
            fsl: ['fsl', 'sgn'],
            fss: ['fss', 'sgn'],
            gan: ['gan', 'zh'],
            gds: ['gds', 'sgn'],
            gom: ['gom', 'kok'],
            gse: ['gse', 'sgn'],
            gsg: ['gsg', 'sgn'],
            gsm: ['gsm', 'sgn'],
            gss: ['gss', 'sgn'],
            gus: ['gus', 'sgn'],
            hab: ['hab', 'sgn'],
            haf: ['haf', 'sgn'],
            hak: ['hak', 'zh'],
            hds: ['hds', 'sgn'],
            hji: ['hji', 'ms'],
            hks: ['hks', 'sgn'],
            hos: ['hos', 'sgn'],
            hps: ['hps', 'sgn'],
            hsh: ['hsh', 'sgn'],
            hsl: ['hsl', 'sgn'],
            hsn: ['hsn', 'zh'],
            icl: ['icl', 'sgn'],
            ils: ['ils', 'sgn'],
            inl: ['inl', 'sgn'],
            ins: ['ins', 'sgn'],
            ise: ['ise', 'sgn'],
            isg: ['isg', 'sgn'],
            isr: ['isr', 'sgn'],
            jak: ['jak', 'ms'],
            jax: ['jax', 'ms'],
            jcs: ['jcs', 'sgn'],
            jhs: ['jhs', 'sgn'],
            jls: ['jls', 'sgn'],
            jos: ['jos', 'sgn'],
            jsl: ['jsl', 'sgn'],
            jus: ['jus', 'sgn'],
            kgi: ['kgi', 'sgn'],
            knn: ['knn', 'kok'],
            kvb: ['kvb', 'ms'],
            kvk: ['kvk', 'sgn'],
            kvr: ['kvr', 'ms'],
            kxd: ['kxd', 'ms'],
            lbs: ['lbs', 'sgn'],
            lce: ['lce', 'ms'],
            lcf: ['lcf', 'ms'],
            liw: ['liw', 'ms'],
            lls: ['lls', 'sgn'],
            lsg: ['lsg', 'sgn'],
            lsl: ['lsl', 'sgn'],
            lso: ['lso', 'sgn'],
            lsp: ['lsp', 'sgn'],
            lst: ['lst', 'sgn'],
            lsy: ['lsy', 'sgn'],
            ltg: ['ltg', 'lv'],
            lvs: ['lvs', 'lv'],
            lzh: ['lzh', 'zh'],
            max: ['max', 'ms'],
            mdl: ['mdl', 'sgn'],
            meo: ['meo', 'ms'],
            mfa: ['mfa', 'ms'],
            mfb: ['mfb', 'ms'],
            mfs: ['mfs', 'sgn'],
            min: ['min', 'ms'],
            mnp: ['mnp', 'zh'],
            mqg: ['mqg', 'ms'],
            mre: ['mre', 'sgn'],
            msd: ['msd', 'sgn'],
            msi: ['msi', 'ms'],
            msr: ['msr', 'sgn'],
            mui: ['mui', 'ms'],
            mzc: ['mzc', 'sgn'],
            mzg: ['mzg', 'sgn'],
            mzy: ['mzy', 'sgn'],
            nan: ['nan', 'zh'],
            nbs: ['nbs', 'sgn'],
            ncs: ['ncs', 'sgn'],
            nsi: ['nsi', 'sgn'],
            nsl: ['nsl', 'sgn'],
            nsp: ['nsp', 'sgn'],
            nsr: ['nsr', 'sgn'],
            nzs: ['nzs', 'sgn'],
            okl: ['okl', 'sgn'],
            orn: ['orn', 'ms'],
            ors: ['ors', 'ms'],
            pel: ['pel', 'ms'],
            pga: ['pga', 'ar'],
            pks: ['pks', 'sgn'],
            prl: ['prl', 'sgn'],
            prz: ['prz', 'sgn'],
            psc: ['psc', 'sgn'],
            psd: ['psd', 'sgn'],
            pse: ['pse', 'ms'],
            psg: ['psg', 'sgn'],
            psl: ['psl', 'sgn'],
            pso: ['pso', 'sgn'],
            psp: ['psp', 'sgn'],
            psr: ['psr', 'sgn'],
            pys: ['pys', 'sgn'],
            rms: ['rms', 'sgn'],
            rsi: ['rsi', 'sgn'],
            rsl: ['rsl', 'sgn'],
            sdl: ['sdl', 'sgn'],
            sfb: ['sfb', 'sgn'],
            sfs: ['sfs', 'sgn'],
            sgg: ['sgg', 'sgn'],
            sgx: ['sgx', 'sgn'],
            shu: ['shu', 'ar'],
            slf: ['slf', 'sgn'],
            sls: ['sls', 'sgn'],
            sqk: ['sqk', 'sgn'],
            sqs: ['sqs', 'sgn'],
            ssh: ['ssh', 'ar'],
            ssp: ['ssp', 'sgn'],
            ssr: ['ssr', 'sgn'],
            svk: ['svk', 'sgn'],
            swc: ['swc', 'sw'],
            swh: ['swh', 'sw'],
            swl: ['swl', 'sgn'],
            syy: ['syy', 'sgn'],
            tmw: ['tmw', 'ms'],
            tse: ['tse', 'sgn'],
            tsm: ['tsm', 'sgn'],
            tsq: ['tsq', 'sgn'],
            tss: ['tss', 'sgn'],
            tsy: ['tsy', 'sgn'],
            tza: ['tza', 'sgn'],
            ugn: ['ugn', 'sgn'],
            ugy: ['ugy', 'sgn'],
            ukl: ['ukl', 'sgn'],
            uks: ['uks', 'sgn'],
            urk: ['urk', 'ms'],
            uzn: ['uzn', 'uz'],
            uzs: ['uzs', 'uz'],
            vgt: ['vgt', 'sgn'],
            vkk: ['vkk', 'ms'],
            vkt: ['vkt', 'ms'],
            vsi: ['vsi', 'sgn'],
            vsl: ['vsl', 'sgn'],
            vsv: ['vsv', 'sgn'],
            wuu: ['wuu', 'zh'],
            xki: ['xki', 'sgn'],
            xml: ['xml', 'sgn'],
            xmm: ['xmm', 'ms'],
            xms: ['xms', 'sgn'],
            yds: ['yds', 'sgn'],
            ysl: ['ysl', 'sgn'],
            yue: ['yue', 'zh'],
            zib: ['zib', 'sgn'],
            zlm: ['zlm', 'ms'],
            zmi: ['zmi', 'ms'],
            zsl: ['zsl', 'sgn'],
            zsm: ['zsm', 'ms']
        }
    },
    C = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0
    };
function R(e) {
    return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e)) && !0;
}
function O(e) {
    if (void 0 === e) return new J();
    for (var t = new J(), e = 'string' == typeof e ? [e] : e, n = et(e), i = n.length, a = 0; a < i; ) {
        var s = String(a);
        if (s in n) {
            var o = n[s];
            if (null == o || ('string' != typeof o && 'object' != typeof o)) throw TypeError('String or Object type expected');
            var l = String(o);
            if (!R(l)) throw RangeError("'" + l + "' is not a structurally valid language tag");
            (l = (function (e) {
                var t, n;
                n = (e = e.toLowerCase()).split('-');
                for (var i = 1, a = n.length; i < a; i++)
                    if (2 === n[i].length) n[i] = n[i].toUpperCase();
                    else if (4 === n[i].length) n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
                    else if (1 === n[i].length && 'x' !== n[i]) break;
                (t = (e = m.call(n, '-')).match(r.expExtSequences)) && t.length > 1 && (t.sort(), (e = e.replace(RegExp('(?:' + r.expExtSequences.source + ')+', 'i'), m.call(t, '')))), u.call(N.tags, e) && (e = N.tags[e]), (n = e.split('-'));
                for (var i = 1, a = n.length; i < a; i++) u.call(N.subtags, n[i]) ? (n[i] = N.subtags[n[i]]) : u.call(N.extLang, n[i]) && ((n[i] = N.extLang[n[i]][0]), 1 === i && N.extLang[n[1]][1] === n[0] && ((n = _.call(n, i++)), (a -= 1)));
                return m.call(n, '-');
            })(l)),
                -1 === d.call(t, l) && h.call(t, l);
        }
        a++;
    }
    return t;
}
function D(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var r = n.lastIndexOf('-');
        if (r < 0) return;
        r >= 2 && '-' === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function L(e, t) {
    for (var n, r = 0, i = t.length; r < i && !n; ) {
        var s = t[r],
            o = String(s).replace(A, ''),
            n = D(e, o);
        r++;
    }
    var l = new X();
    if (void 0 !== n) {
        if (((l['[[locale]]'] = n), String(s) !== String(o))) {
            var u = s.match(A)[0],
                c = s.indexOf('-u-');
            (l['[[extension]]'] = u), (l['[[extensionIndex]]'] = c);
        }
    } else l['[[locale]]'] = a;
    return l;
}
function x(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError('No locale data has been provided for this object yet.');
    if ('lookup' === n['[[localeMatcher]]']) var a = L(e, t);
    else var a = L(e, t);
    var s = a['[[locale]]'];
    if (u.call(a, '[[extension]]'))
        var o = a['[[extension]]'],
            l = a['[[extensionIndex]]'],
            c = String.prototype.split,
            f = c.call(o, '-'),
            _ = f.length;
    var p = new X();
    p['[[dataLocale]]'] = s;
    for (var h = '-u', m = 0, g = r.length; m < g; ) {
        var E = r[m],
            v = i[s][E],
            I = v['0'],
            b = '';
        if (void 0 !== f) {
            var T = d.call(f, E);
            if (-1 !== T) {
                if (T + 1 < _ && f[T + 1].length > 2) {
                    var S = f[T + 1],
                        y = d.call(v, S);
                    if (-1 !== y)
                        var I = S,
                            b = '-' + E + '-' + I;
                } else {
                    var y = d(v, 'true');
                    if (-1 !== y) var I = 'true';
                }
            }
        }
        if (u.call(n, '[[' + E + ']]')) {
            var A = n['[[' + E + ']]'];
            -1 !== d.call(v, A) && A !== I && ((I = A), (b = ''));
        }
        (p['[[' + E + ']]'] = I), (h += b), m++;
    }
    if (h.length > 2) var s = s.substring(0, l) + h + s.substring(l);
    return (p['[[locale]]'] = s), p;
}
function w(e, t) {
    for (var n = t.length, r = new J(), i = 0; i < n; ) {
        var a = t[i];
        void 0 !== D(e, String(a).replace(A, '')) && h.call(r, a), i++;
    }
    return _.call(r);
}
function M(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (((a = 'boolean' === n ? !!a : 'string' === n ? String(a) : a), void 0 !== r && -1 === d.call(r, a))) throw RangeError("'" + a + "' is not an allowed value for `" + t + '`');
        return a;
    }
    return i;
}
function P(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (isNaN((a = Number(a))) || a < n || a > r) throw RangeError('Value is not a number or outside accepted range');
        return Math.floor(a);
    }
    return i;
}
function k() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? U(et(this), e, t) : new s.NumberFormat(e, t);
}
function U(e, t, n) {
    var r,
        i = en(e),
        a = $();
    if (!0 === i['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === I) return i;
        }
    }),
        (i['[[initializedIntlObject]]'] = !0);
    var s = O(t);
    n = void 0 === n ? {} : et(n);
    var o = new X(),
        u = M(n, 'localeMatcher', 'string', new J('lookup', 'best fit'), 'best fit');
    o['[[localeMatcher]]'] = u;
    var d = v.NumberFormat['[[localeData]]'],
        f = x(v.NumberFormat['[[availableLocales]]'], s, o, v.NumberFormat['[[relevantExtensionKeys]]'], d);
    (i['[[locale]]'] = f['[[locale]]']), (i['[[numberingSystem]]'] = f['[[nu]]']), (i['[[dataLocale]]'] = f['[[dataLocale]]']);
    var _ = f['[[dataLocale]]'],
        p = M(n, 'style', 'string', new J('decimal', 'percent', 'currency'), 'decimal');
    i['[[style]]'] = p;
    var h = M(n, 'currency', 'string');
    if (void 0 !== h && ((r = ee(String(h))), !1 === y.test(r))) throw RangeError("'" + h + "' is not a valid currency code");
    if ('currency' === p && void 0 === h) throw TypeError('Currency code is required when style is currency');
    if ('currency' === p) {
        (h = h.toUpperCase()), (i['[[currency]]'] = h);
        var m = (function (e) {
            return void 0 !== C[e] ? C[e] : 2;
        })(h);
    }
    var g = M(n, 'currencyDisplay', 'string', new J('code', 'symbol', 'name'), 'symbol');
    'currency' === p && (i['[[currencyDisplay]]'] = g);
    var E = P(n, 'minimumIntegerDigits', 1, 21, 1);
    i['[[minimumIntegerDigits]]'] = E;
    var b = P(n, 'minimumFractionDigits', 0, 20, 'currency' === p ? m : 0);
    i['[[minimumFractionDigits]]'] = b;
    var T = 'currency' === p ? Math.max(b, m) : 'percent' === p ? Math.max(b, 0) : Math.max(b, 3),
        S = P(n, 'maximumFractionDigits', b, 20, T);
    i['[[maximumFractionDigits]]'] = S;
    var A = n.minimumSignificantDigits,
        N = n.maximumSignificantDigits;
    (void 0 !== A || void 0 !== N) && ((A = P(n, 'minimumSignificantDigits', 1, 21, 1)), (N = P(n, 'maximumSignificantDigits', A, 21, 21)), (i['[[minimumSignificantDigits]]'] = A), (i['[[maximumSignificantDigits]]'] = N));
    var R = M(n, 'useGrouping', 'boolean', void 0, !0);
    i['[[useGrouping]]'] = R;
    var D = d[_].patterns[p];
    return (i['[[positivePattern]]'] = D.positivePattern), (i['[[negativePattern]]'] = D.negativePattern), (i['[[boundFormat]]'] = void 0), (i['[[initializedNumberFormat]]'] = !0), l && (e.format = B.call(e)), a.exp.test(a.input), e;
}
c(s, 'NumberFormat', {
    configurable: !0,
    writable: !0,
    value: k
}),
    c(s.NumberFormat, 'prototype', { writable: !1 });
function B() {
    var e = this != null && 'object' == typeof this && en(this);
    if (!e || !e['[[initializedNumberFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = E.call(function (e) {
            return G(this, Number(e));
        }, this);
        e['[[boundFormat]]'] = t;
    }
    return e['[[boundFormat]]'];
}
function G(e, t) {
    var n,
        r = $(),
        i = en(e),
        a = i['[[dataLocale]]'],
        s = i['[[numberingSystem]]'],
        o = v.NumberFormat['[[localeData]]'][a],
        l = o.symbols[s] || o.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if (
            (t < 0 && ((c = !0), (t = -t)),
            'percent' === i['[[style]]'] && (t *= 100),
            (n =
                u.call(i, '[[minimumSignificantDigits]]') && u.call(i, '[[maximumSignificantDigits]]')
                    ? (function (e, t, n) {
                          if (0 === e)
                              var r = m.call(Array(n + 1), '0'),
                                  i = 0;
                          else
                              var i = (function (e) {
                                      if ('function' == typeof Math.log10) return Math.floor(Math.log10(e));
                                      var t = Math.round(Math.log(e) * Math.LOG10E);
                                      return t - (Number('1e' + t) > e);
                                  })(Math.abs(e)),
                                  a = Math.round(Math.exp(Math.abs(i - n + 1) * Math.LN10)),
                                  r = String(Math.round(i - n + 1 < 0 ? e * a : e / a));
                          if (i >= n) return r + m.call(Array(i - n + 1 + 1), '0');
                          if (i === n - 1) return r;
                          i >= 0 ? (r = r.slice(0, i + 1) + '.' + r.slice(i + 1)) : i < 0 && (r = '0.' + m.call(Array(-(i + 1) + 1), '0') + r);
                          if (r.indexOf('.') >= 0 && n > t) {
                              for (var s = n - t; s > 0 && '0' === r.charAt(r.length - 1); ) (r = r.slice(0, -1)), s--;
                              '.' === r.charAt(r.length - 1) && (r = r.slice(0, -1));
                          }
                          return r;
                      })(t, i['[[minimumSignificantDigits]]'], i['[[maximumSignificantDigits]]'])
                    : (function (e, t, n, r) {
                          var i,
                              a = Number.prototype.toFixed.call(e, r),
                              s = a.split('.')[0].length,
                              o = r - n,
                              l = (i = a.indexOf('e')) > -1 ? a.slice(i + 1) : 0;
                          for (l && ((a = a.slice(0, i).replace('.', '')), (a += m.call(Array(l - (a.length - 1) + 1), '0') + '.' + m.call(Array(r + 1), '0')), (s = a.length)); o > 0 && '0' === a.slice(-1); ) (a = a.slice(0, -1)), o--;
                          if (('.' === a.slice(-1) && (a = a.slice(0, -1)), s < t)) var u = m.call(Array(t - s + 1), '0');
                          return (u || '') + a;
                      })(t, i['[[minimumIntegerDigits]]'], i['[[minimumFractionDigits]]'], i['[[maximumFractionDigits]]'])),
            Z[s])
        ) {
            var d = Z[i['[[numberingSystem]]']];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i['[[useGrouping]]'])) {
            var f = n.split(l.decimal),
                _ = f[0],
                p = o.patterns.primaryGroupSize || 3,
                g = o.patterns.secondaryGroupSize || p;
            if (_.length > p) {
                var E = new J(),
                    I = _.length - p,
                    b = I % g,
                    T = _.slice(0, b);
                for (T.length && h.call(E, T); b < I; ) h.call(E, _.slice(b, b + g)), (b += g);
                h.call(E, _.slice(I)), (f[0] = m.call(E, l.group));
            }
            n = m.call(f, l.decimal);
        }
    }
    var S = i[!0 === c ? '[[negativePattern]]' : '[[positivePattern]]'];
    if (((S = S.replace('{number}', n)), 'currency' === i['[[style]]'])) {
        var y,
            A = i['[[currency]]'],
            N = o.currencies[A];
        if ('symbol' === i['[[currencyDisplay]]']) y = N || A;
        else y = A;
        S = S.replace('{currency}', y);
    }
    return r.exp.test(r.input), S;
}
(v.NumberFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['nu'],
    '[[localeData]]': {}
}),
    c(s.NumberFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(q, v.NumberFormat)
    }),
    c(s.NumberFormat.prototype, 'format', {
        configurable: !0,
        get: B
    });
var Z = {
    arab: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
    arabext: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    bali: ['᭐', '᭑', '᭒', '᭓', '᭔', '᭕', '᭖', '᭗', '᭘', '᭙'],
    beng: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    deva: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    fullwide: ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９'],
    gujr: ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'],
    guru: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'],
    hanidec: ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
    khmr: ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'],
    knda: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
    laoo: ['໐', '໑', '໒', '໓', '໔', '໕', '໖', '໗', '໘', '໙'],
    latn: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    limb: ['᥆', '᥇', '᥈', '᥉', '᥊', '᥋', '᥌', '᥍', '᥎', '᥏'],
    mlym: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'],
    mong: ['᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙'],
    mymr: ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'],
    orya: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'],
    tamldec: ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
    telu: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
    thai: ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'],
    tibt: ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩']
};
function F() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? V(et(this), e, t) : new s.DateTimeFormat(e, t);
}
function V(e, t, n) {
    var r = en(e),
        a = $();
    if (!0 === r['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === I) return r;
        }
    }),
        (r['[[initializedIntlObject]]'] = !0);
    var s = O(t),
        n = H(n, 'any', 'date'),
        o = new X();
    (S = M(n, 'localeMatcher', 'string', new J('lookup', 'best fit'), 'best fit')), (o['[[localeMatcher]]'] = S);
    var d = v.DateTimeFormat,
        f = d['[[localeData]]'],
        _ = x(d['[[availableLocales]]'], s, o, d['[[relevantExtensionKeys]]'], f);
    (r['[[locale]]'] = _['[[locale]]']), (r['[[calendar]]'] = _['[[ca]]']), (r['[[numberingSystem]]'] = _['[[nu]]']), (r['[[dataLocale]]'] = _['[[dataLocale]]']);
    var p = _['[[dataLocale]]'],
        h = n.timeZone;
    if (void 0 !== h && 'UTC' !== (h = ee(h))) throw RangeError('timeZone is not supported.');
    for (var m in ((r['[[timeZone]]'] = h), (o = new X()), j))
        if (u.call(j, m)) {
            var g = M(n, m, 'string', j[m]);
            o['[[' + m + ']]'] = g;
        }
    var E,
        b = f[p],
        T = (function (e) {
            return '[object Array]' === Object.prototype.toString.call(e) ? e : i.createDateTimeFormats(e);
        })(b.formats),
        S = M(n, 'formatMatcher', 'string', new J('basic', 'best fit'), 'best fit');
    for (var m in ((b.formats = T),
    (E =
        'basic' === S
            ? (function (e, t) {
                  return Y(e, t);
              })(o, T)
            : (function (e, t) {
                  return Y(e, t, !0);
              })(o, T)),
    j))
        if (u.call(j, m) && u.call(E, m)) {
            var y = E[m];
            r['[[' + m + ']]'] = y;
        }
    var A,
        N = M(n, 'hour12', 'boolean');
    if (r['[[hour]]']) {
        if (((N = void 0 === N ? b.hour12 : N), (r['[[hour12]]'] = N), !0 === N)) {
            var C = b.hourNo0;
            (r['[[hourNo0]]'] = C), (A = E.pattern12);
        } else A = E.pattern;
    } else A = E.pattern;
    return (r['[[pattern]]'] = A), (r['[[boundFormat]]'] = void 0), (r['[[initializedDateTimeFormat]]'] = !0), l && (e.format = W.call(e)), a.exp.test(a.input), e;
}
c(s.NumberFormat.prototype, 'resolvedOptions', {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new X(),
            n = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            r = this != null && 'object' == typeof this && en(this);
        if (!r || !r['[[initializedNumberFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
        for (var i = 0, a = n.length; i < a; i++)
            u.call(r, (e = '[[' + n[i] + ']]')) &&
                (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return f({}, t);
    }
}),
    c(s, 'DateTimeFormat', {
        configurable: !0,
        writable: !0,
        value: F
    }),
    c(F, 'prototype', { writable: !1 });
var j = {
    weekday: ['narrow', 'short', 'long'],
    era: ['narrow', 'short', 'long'],
    year: ['2-digit', 'numeric'],
    month: ['2-digit', 'numeric', 'narrow', 'short', 'long'],
    day: ['2-digit', 'numeric'],
    hour: ['2-digit', 'numeric'],
    minute: ['2-digit', 'numeric'],
    second: ['2-digit', 'numeric'],
    timeZoneName: ['short', 'long']
};
function H(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var r = et(e);
        for (var i in ((e = new X()), r)) e[i] = r[i];
    }
    var e = f(e),
        a = !0;
    return ('date' === t || 'any' === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (a = !1), ('time' === t || 'any' === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (a = !1), a && ('date' === n || 'all' === n) && (e.year = e.month = e.day = 'numeric'), a && ('time' === n || 'all' === n) && (e.hour = e.minute = e.second = 'numeric'), e;
}
function Y(e, t, n) {
    for (var r, i = -1 / 0, a = 0, s = t.length; a < s; ) {
        var o = t[a],
            l = 0;
        for (var c in j)
            if (u.call(j, c)) {
                var f = e['[[' + c + ']]'],
                    _ = u.call(o, c) ? o[c] : void 0;
                if (void 0 === f && void 0 !== _) l -= 20;
                else if (void 0 !== f && void 0 === _) l -= 120;
                else {
                    var p = ['2-digit', 'numeric', 'narrow', 'short', 'long'],
                        h = d.call(p, f),
                        m = Math.max(Math.min(d.call(p, _) - h, 2), -2);
                    n && ((('numeric' === f || '2-digit' === f) && 'numeric' !== _ && '2-digit' !== _) || ('numeric' !== f && '2-digit' !== f && ('2-digit' === _ || 'numeric' === _))) && (l -= 8), 2 === m ? (l -= 6) : 1 === m ? (l -= 3) : -1 === m ? (l -= 6) : -2 === m && (l -= 8);
                }
            }
        l > i && ((i = l), (r = o)), a++;
    }
    return r;
}
function W() {
    var e = this != null && 'object' == typeof this && en(this);
    if (!e || !e['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = E.call(function () {
            var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
            return K(this, e);
        }, this);
        e['[[boundFormat]]'] = t;
    }
    return e['[[boundFormat]]'];
}
function K(e, t) {
    if (!isFinite(t)) throw RangeError('Invalid valid date passed to format');
    var n = e.__getInternalProperties(I),
        r = $(),
        i = n['[[locale]]'],
        a = new s.NumberFormat([i], { useGrouping: !1 }),
        o = new s.NumberFormat([i], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }),
        l = (function (e, t, n) {
            var r = new Date(e),
                i = 'get' + (n || '');
            return new X({
                '[[weekday]]': r[i + 'Day'](),
                '[[era]]': +(r[i + 'FullYear']() >= 0),
                '[[year]]': r[i + 'FullYear'](),
                '[[month]]': r[i + 'Month'](),
                '[[day]]': r[i + 'Date'](),
                '[[hour]]': r[i + 'Hours'](),
                '[[minute]]': r[i + 'Minutes'](),
                '[[second]]': r[i + 'Seconds'](),
                '[[inDST]]': !1
            });
        })(t, n['[[calendar]]'], n['[[timeZone]]']),
        c = n['[[pattern]]'],
        d = n['[[dataLocale]]'],
        f = v.DateTimeFormat['[[localeData]]'][d].calendars,
        _ = n['[[calendar]]'];
    for (var p in j)
        if (u.call(n, '[[' + p + ']]')) {
            var h,
                m,
                g = n['[[' + p + ']]'],
                E = l['[[' + p + ']]'];
            if (('year' === p && E <= 0 ? (E = 1 - E) : 'month' === p ? E++ : 'hour' === p && !0 === n['[[hour12]]'] && ((E %= 12), (h = E !== l['[[' + p + ']]']), 0 === E && !0 === n['[[hourNo0]]'] && (E = 12)), 'numeric' === g)) m = G(a, E);
            else if ('2-digit' === g) (m = G(o, E)).length > 2 && (m = m.slice(-2));
            else if (g in b)
                switch (p) {
                    case 'month':
                        m = Q(f, _, 'months', g, l['[[' + p + ']]']);
                        break;
                    case 'weekday':
                        try {
                            m = Q(f, _, 'days', g, l['[[' + p + ']]']);
                        } catch (e) {
                            throw Error('Could not find weekday data for locale ' + i);
                        }
                        break;
                    case 'timeZoneName':
                        m = '';
                        break;
                    default:
                        m = l['[[' + p + ']]'];
                }
            c = c.replace('{' + p + '}', m);
        }
    return !0 === n['[[hour12]]'] && ((m = Q(f, _, 'dayPeriods', h ? 'pm' : 'am')), (c = c.replace('{ampm}', m))), r.exp.test(r.input), c;
}
(v.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
}),
    c(s.DateTimeFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: E.call(q, v.DateTimeFormat)
    }),
    c(s.DateTimeFormat.prototype, 'format', {
        configurable: !0,
        get: W
    });
c(s.DateTimeFormat.prototype, 'resolvedOptions', {
    writable: !0,
    configurable: !0,
    value: function () {
        var e,
            t = new X(),
            n = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
            r = this != null && 'object' == typeof this && en(this);
        if (!r || !r['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
        for (var i = 0, a = n.length; i < a; i++)
            u.call(r, (e = '[[' + n[i] + ']]')) &&
                (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return f({}, t);
    }
});
var z = (s.__localeSensitiveProtos = {
    Number: {},
    Date: {}
});
(z.Number.toLocaleString = function () {
    if ('[object Number]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
    return G(new k(arguments[0], arguments[1]), this);
}),
    (z.Date.toLocaleString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = H(n, 'any', 'all');
        return K(new F(t, n), e);
    }),
    (z.Date.toLocaleDateString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = H(n, 'date', 'date');
        return K(new F(t, n), e);
    }),
    (z.Date.toLocaleTimeString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = H(n, 'time', 'time');
        return K(new F(t, n), e);
    }),
    c(s, '__applyLocaleSensitivePrototypes', {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: z.Number.toLocaleString
            }),
            c(Date.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: z.Date.toLocaleString
            }),
            z.Date))
                u.call(z.Date, e) &&
                    c(Date.prototype, e, {
                        writable: !0,
                        configurable: !0,
                        value: z.Date[e]
                    });
        }
    }),
    c(s, '__addLocaleData', {
        value: function (e) {
            if (!R(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            (function (e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var n,
                    r = [t],
                    i = t.split('-');
                for (i.length > 2 && 4 === i[1].length && h.call(r, i[0] + '-' + i[2]); (n = g.call(r)); ) h.call(v.NumberFormat['[[availableLocales]]'], n), (v.NumberFormat['[[localeData]]'][n] = e.number), e.date && ((e.date.nu = e.number.nu), h.call(v.DateTimeFormat['[[availableLocales]]'], n), (v.DateTimeFormat['[[localeData]]'][n] = e.date));
                void 0 === a && (a = t), !T && (U(s.NumberFormat.prototype), (T = !0)), e.date && !S && (V(s.DateTimeFormat.prototype), (S = !0));
            })(e, e.locale);
        }
    });
function q(e) {
    if (!u.call(this, '[[availableLocales]]')) throw TypeError('supportedLocalesOf() is not a constructor');
    var t = $(),
        n = arguments[1],
        r = this['[[availableLocales]]'],
        i = O(e);
    return (
        t.exp.test(t.input),
        (function (e, t, n) {
            if (void 0 !== n) {
                var n = new X(et(n)),
                    r = n.localeMatcher;
                if (void 0 !== r && 'lookup' !== (r = String(r)) && 'best fit' !== r) throw RangeError('matcher should be "lookup" or "best fit"');
            }
            if (void 0 === r || 'best fit' === r) var i = w(e, t);
            else var i = w(e, t);
            for (var a in i)
                u.call(i, a) &&
                    c(i, a, {
                        writable: !1,
                        configurable: !1,
                        value: i[a]
                    });
            return c(i, 'length', { writable: !1 }), i;
        })(r, i, n)
    );
}
function Q(e, t, n, r, i) {
    var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        s = {
            narrow: ['short', 'long'],
            short: ['long', 'narrow'],
            long: ['short', 'narrow']
        },
        o = u.call(a, r) ? a[r] : u.call(a, s[r][0]) ? a[s[r][0]] : a[s[r][1]];
    return null != i ? o[i] : o;
}
function X(e) {
    for (var t in e)
        (e instanceof X || u.call(e, t)) &&
            c(this, t, {
                value: e[t],
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
}
function J() {
    c(this, 'length', {
        writable: !0,
        value: 0
    }),
        arguments.length && h.apply(this, _.call(arguments));
}
function $() {
    for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || '', n = RegExp.multiline ? 'm' : '', r = { input: RegExp.input }, i = new J(), a = !1, s = {}, o = 1; o <= 9; o++) a = (s['$' + o] = RegExp['$' + o]) || a;
    if (((t = t.replace(e, '\\$&')), a))
        for (var o = 1; o <= 9; o++) {
            var l = s['$' + o];
            l ? ((l = l.replace(e, '\\$&')), (t = t.replace(l, '(' + l + ')'))) : (t = '()' + t), h.call(i, t.slice(0, t.indexOf('(') + 1)), (t = t.slice(t.indexOf('(') + 1));
        }
    return (r.exp = new RegExp(m.call(i, '') + t, n)), r;
}
function ee(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= 'a' && n <= 'z' && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function et(e) {
    if (null == e) throw TypeError('Cannot convert null or undefined to object');
    return Object(e);
}
function en(e) {
    return u.call(e, '__getInternalProperties') ? e.__getInternalProperties(I) : f(null);
}
(X.prototype = f(null)), (J.prototype = f(null)), (t.default = s);
