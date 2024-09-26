var r = n(863714),
    i = n(635535),
    a,
    o = {},
    s = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, 'a', {}), 'a' in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !s && !Object.prototype.__defineGetter__,
    u = Object.prototype.hasOwnProperty,
    c = s
        ? Object.defineProperty
        : function (e, t, n) {
              'get' in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!u.call(e, t) || 'value' in n) && (e[t] = n.value);
          },
    d =
        Array.prototype.indexOf ||
        function (e) {
            var t = this;
            if (!t.length) return -1;
            for (var n = arguments[1] || 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
        },
    _ =
        Object.create ||
        function (e, t) {
            var n;
            function r() {}
            for (var i in ((r.prototype = e), (n = new r()), t)) u.call(t, i) && c(n, i, t[i]);
            return n;
        },
    E = Array.prototype.slice,
    f = Array.prototype.concat,
    h = Array.prototype.push,
    p = Array.prototype.join,
    m = Array.prototype.shift,
    I =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = E.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, f.call(n, E.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, f.call(n, E.call(arguments)));
                      };
            }),
    T = _(null),
    g = Math.random(),
    S = _(null, {
        narrow: {},
        short: {},
        long: {}
    }),
    A = !1,
    v = !1,
    N = /^[A-Z]{3}$/,
    O = /-u(?:-[0-9a-z]{2,8})+/gi,
    R = {
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
function y(e) {
    return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e)) && !0;
}
function L(e) {
    var t, n;
    n = (e = e.toLowerCase()).split('-');
    for (var i = 1, a = n.length; i < a; i++)
        if (2 === n[i].length) n[i] = n[i].toUpperCase();
        else if (4 === n[i].length) n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
        else if (1 === n[i].length && 'x' !== n[i]) break;
    (t = (e = p.call(n, '-')).match(r.expExtSequences)) && t.length > 1 && (t.sort(), (e = e.replace(RegExp('(?:' + r.expExtSequences.source + ')+', 'i'), p.call(t, '')))), u.call(R.tags, e) && (e = R.tags[e]), (n = e.split('-'));
    for (var i = 1, a = n.length; i < a; i++) u.call(R.subtags, n[i]) ? (n[i] = R.subtags[n[i]]) : u.call(R.extLang, n[i]) && ((n[i] = R.extLang[n[i]][0]), 1 === i && R.extLang[n[1]][1] === n[0] && ((n = E.call(n, i++)), (a -= 1)));
    return p.call(n, '-');
}
function b() {
    return a;
}
function D(e) {
    var t = eh(String(e));
    return !1 !== N.test(t) && !0;
}
function M(e) {
    if (void 0 === e) return new eE();
    for (var t = new eE(), e = 'string' == typeof e ? [e] : e, n = ep(e), r = n.length, i = 0; i < r; ) {
        var a = String(i);
        if (a in n) {
            var o = n[a];
            if (null == o || ('string' != typeof o && 'object' != typeof o)) throw TypeError('String or Object type expected');
            var s = String(o);
            if (!y(s)) throw RangeError("'" + s + "' is not a structurally valid language tag");
            (s = L(s)), -1 === d.call(t, s) && h.call(t, s);
        }
        i++;
    }
    return t;
}
function P(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var r = n.lastIndexOf('-');
        if (r < 0) return;
        r >= 2 && '-' === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function U(e, t) {
    for (var n, r = 0, i = t.length; r < i && !n; ) {
        var a = t[r],
            o = String(a).replace(O, ''),
            n = P(e, o);
        r++;
    }
    var s = new e_();
    if (void 0 !== n) {
        if (((s['[[locale]]'] = n), String(a) !== String(o))) {
            var l = a.match(O)[0],
                u = a.indexOf('-u-');
            (s['[[extension]]'] = l), (s['[[extensionIndex]]'] = u);
        }
    } else s['[[locale]]'] = b();
    return s;
}
function w(e, t) {
    return U(e, t);
}
function x(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError('No locale data has been provided for this object yet.');
    if ('lookup' === n['[[localeMatcher]]']) var a = U(e, t);
    else var a = w(e, t);
    var o = a['[[locale]]'];
    if (u.call(a, '[[extension]]'))
        var s = a['[[extension]]'],
            l = a['[[extensionIndex]]'],
            c = String.prototype.split,
            _ = c.call(s, '-'),
            E = _.length;
    var f = new e_();
    f['[[dataLocale]]'] = o;
    for (var h = '-u', p = 0, m = r.length; p < m; ) {
        var I = r[p],
            T = i[o][I],
            g = T['0'],
            S = '',
            A = d;
        if (void 0 !== _) {
            var v = A.call(_, I);
            if (-1 !== v) {
                if (v + 1 < E && _[v + 1].length > 2) {
                    var N = _[v + 1],
                        O = A.call(T, N);
                    if (-1 !== O)
                        var g = N,
                            S = '-' + I + '-' + g;
                } else {
                    var O = A(T, 'true');
                    if (-1 !== O) var g = 'true';
                }
            }
        }
        if (u.call(n, '[[' + I + ']]')) {
            var R = n['[[' + I + ']]'];
            -1 !== A.call(T, R) && R !== g && ((g = R), (S = ''));
        }
        (f['[[' + I + ']]'] = g), (h += S), p++;
    }
    if (h.length > 2) var o = o.substring(0, l) + h + o.substring(l);
    return (f['[[locale]]'] = o), f;
}
function G(e, t) {
    for (var n = t.length, r = new eE(), i = 0; i < n; ) {
        var a = t[i];
        void 0 !== P(e, String(a).replace(O, '')) && h.call(r, a), i++;
    }
    return E.call(r);
}
function k(e, t) {
    return G(e, t);
}
function B(e, t, n) {
    if (void 0 !== n) {
        var n = new e_(ep(n)),
            r = n.localeMatcher;
        if (void 0 !== r && 'lookup' !== (r = String(r)) && 'best fit' !== r) throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === r || 'best fit' === r) var i = k(e, t);
    else var i = G(e, t);
    for (var a in i)
        u.call(i, a) &&
            c(i, a, {
                writable: !1,
                configurable: !1,
                value: i[a]
            });
    return c(i, 'length', { writable: !1 }), i;
}
function F(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (((a = 'boolean' === n ? !!a : 'string' === n ? String(a) : a), void 0 !== r && -1 === d.call(r, a))) throw RangeError("'" + a + "' is not an allowed value for `" + t + '`');
        return a;
    }
    return i;
}
function Z(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (isNaN((a = Number(a))) || a < n || a > r) throw RangeError('Value is not a number or outside accepted range');
        return Math.floor(a);
    }
    return i;
}
function V() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== o ? H(ep(this), e, t) : new o.NumberFormat(e, t);
}
function H(e, t, n) {
    var r = em(e),
        i = ef();
    if (!0 === r['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === g) return r;
        }
    }),
        (r['[[initializedIntlObject]]'] = !0);
    var a = M(t);
    n = void 0 === n ? {} : ep(n);
    var o = new e_(),
        s = F(n, 'localeMatcher', 'string', new eE('lookup', 'best fit'), 'best fit');
    o['[[localeMatcher]]'] = s;
    var u = T.NumberFormat['[[localeData]]'],
        d = x(T.NumberFormat['[[availableLocales]]'], a, o, T.NumberFormat['[[relevantExtensionKeys]]'], u);
    (r['[[locale]]'] = d['[[locale]]']), (r['[[numberingSystem]]'] = d['[[nu]]']), (r['[[dataLocale]]'] = d['[[dataLocale]]']);
    var _ = d['[[dataLocale]]'],
        E = F(n, 'style', 'string', new eE('decimal', 'percent', 'currency'), 'decimal');
    r['[[style]]'] = E;
    var f = F(n, 'currency', 'string');
    if (void 0 !== f && !D(f)) throw RangeError("'" + f + "' is not a valid currency code");
    if ('currency' === E && void 0 === f) throw TypeError('Currency code is required when style is currency');
    if ('currency' === E) {
        (f = f.toUpperCase()), (r['[[currency]]'] = f);
        var h = Y(f);
    }
    var p = F(n, 'currencyDisplay', 'string', new eE('code', 'symbol', 'name'), 'symbol');
    'currency' === E && (r['[[currencyDisplay]]'] = p);
    var m = Z(n, 'minimumIntegerDigits', 1, 21, 1);
    r['[[minimumIntegerDigits]]'] = m;
    var I = Z(n, 'minimumFractionDigits', 0, 20, 'currency' === E ? h : 0);
    r['[[minimumFractionDigits]]'] = I;
    var S = 'currency' === E ? Math.max(I, h) : 'percent' === E ? Math.max(I, 0) : Math.max(I, 3),
        A = Z(n, 'maximumFractionDigits', I, 20, S);
    r['[[maximumFractionDigits]]'] = A;
    var v = n.minimumSignificantDigits,
        N = n.maximumSignificantDigits;
    (void 0 !== v || void 0 !== N) && ((v = Z(n, 'minimumSignificantDigits', 1, 21, 1)), (N = Z(n, 'maximumSignificantDigits', v, 21, 21)), (r['[[minimumSignificantDigits]]'] = v), (r['[[maximumSignificantDigits]]'] = N));
    var O = F(n, 'useGrouping', 'boolean', void 0, !0);
    r['[[useGrouping]]'] = O;
    var R = u[_].patterns[E];
    return (r['[[positivePattern]]'] = R.positivePattern), (r['[[negativePattern]]'] = R.negativePattern), (r['[[boundFormat]]'] = void 0), (r['[[initializedNumberFormat]]'] = !0), l && (e.format = j.call(e)), i.exp.test(i.input), e;
}
function Y(e) {
    return void 0 !== C[e] ? C[e] : 2;
}
function j() {
    var e = this != null && 'object' == typeof this && em(this);
    if (!e || !e['[[initializedNumberFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function (e) {
                return W(this, Number(e));
            },
            n = I.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function W(e, t) {
    var n,
        r = ef(),
        i = em(e),
        a = i['[[dataLocale]]'],
        o = i['[[numberingSystem]]'],
        s = T.NumberFormat['[[localeData]]'][a],
        l = s.symbols[o] || s.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if ((t < 0 && ((c = !0), (t = -t)), 'percent' === i['[[style]]'] && (t *= 100), (n = u.call(i, '[[minimumSignificantDigits]]') && u.call(i, '[[maximumSignificantDigits]]') ? K(t, i['[[minimumSignificantDigits]]'], i['[[maximumSignificantDigits]]']) : z(t, i['[[minimumIntegerDigits]]'], i['[[minimumFractionDigits]]'], i['[[maximumFractionDigits]]'])), q[o])) {
            var d = q[i['[[numberingSystem]]']];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i['[[useGrouping]]'])) {
            var _ = n.split(l.decimal),
                E = _[0],
                f = s.patterns.primaryGroupSize || 3,
                m = s.patterns.secondaryGroupSize || f;
            if (E.length > f) {
                var I = new eE(),
                    g = E.length - f,
                    S = g % m,
                    A = E.slice(0, S);
                for (A.length && h.call(I, A); S < g; ) h.call(I, E.slice(S, S + m)), (S += m);
                h.call(I, E.slice(g)), (_[0] = p.call(I, l.group));
            }
            n = p.call(_, l.decimal);
        }
    }
    var v = i[!0 === c ? '[[negativePattern]]' : '[[positivePattern]]'];
    if (((v = v.replace('{number}', n)), 'currency' === i['[[style]]'])) {
        var N,
            O = i['[[currency]]'],
            R = s.currencies[O];
        if ('symbol' === i['[[currencyDisplay]]']) N = R || O;
        else N = O;
        v = v.replace('{currency}', N);
    }
    return r.exp.test(r.input), v;
}
function K(e, t, n) {
    var r = n;
    if (0 === e)
        var i = p.call(Array(r + 1), '0'),
            a = 0;
    else
        var a = eu(Math.abs(e)),
            o = Math.round(Math.exp(Math.abs(a - r + 1) * Math.LN10)),
            i = String(Math.round(a - r + 1 < 0 ? e * o : e / o));
    if (a >= r) return i + p.call(Array(a - r + 1 + 1), '0');
    if (a === r - 1) return i;
    a >= 0 ? (i = i.slice(0, a + 1) + '.' + i.slice(a + 1)) : a < 0 && (i = '0.' + p.call(Array(-(a + 1) + 1), '0') + i);
    if (i.indexOf('.') >= 0 && n > t) {
        for (var s = n - t; s > 0 && '0' === i.charAt(i.length - 1); ) (i = i.slice(0, -1)), s--;
        '.' === i.charAt(i.length - 1) && (i = i.slice(0, -1));
    }
    return i;
}
function z(e, t, n, r) {
    var i,
        a = Number.prototype.toFixed.call(e, r),
        o = a.split('.')[0].length,
        s = r - n,
        l = (i = a.indexOf('e')) > -1 ? a.slice(i + 1) : 0;
    for (l && ((a = a.slice(0, i).replace('.', '')), (a += p.call(Array(l - (a.length - 1) + 1), '0') + '.' + p.call(Array(r + 1), '0')), (o = a.length)); s > 0 && '0' === a.slice(-1); ) (a = a.slice(0, -1)), s--;
    if (('.' === a.slice(-1) && (a = a.slice(0, -1)), o < t)) var u = p.call(Array(t - o + 1), '0');
    return (u || '') + a;
}
c(o, 'NumberFormat', {
    configurable: !0,
    writable: !0,
    value: V
}),
    c(o.NumberFormat, 'prototype', { writable: !1 }),
    (T.NumberFormat = {
        '[[availableLocales]]': [],
        '[[relevantExtensionKeys]]': ['nu'],
        '[[localeData]]': {}
    }),
    c(o.NumberFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: I.call(ec, T.NumberFormat)
    }),
    c(o.NumberFormat.prototype, 'format', {
        configurable: !0,
        get: j
    });
var q = {
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
function Q() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== o ? X(ep(this), e, t) : new o.DateTimeFormat(e, t);
}
function X(e, t, n) {
    var r = em(e),
        i = ef();
    if (!0 === r['[[initializedIntlObject]]']) throw TypeError('`this` object has already been initialized as an Intl object');
    c(e, '__getInternalProperties', {
        value: function () {
            if (arguments[0] === g) return r;
        }
    }),
        (r['[[initializedIntlObject]]'] = !0);
    var a = M(t),
        n = ee(n, 'any', 'date'),
        o = new e_();
    (A = F(n, 'localeMatcher', 'string', new eE('lookup', 'best fit'), 'best fit')), (o['[[localeMatcher]]'] = A);
    var s = T.DateTimeFormat,
        d = s['[[localeData]]'],
        _ = x(s['[[availableLocales]]'], a, o, s['[[relevantExtensionKeys]]'], d);
    (r['[[locale]]'] = _['[[locale]]']), (r['[[calendar]]'] = _['[[ca]]']), (r['[[numberingSystem]]'] = _['[[nu]]']), (r['[[dataLocale]]'] = _['[[dataLocale]]']);
    var E = _['[[dataLocale]]'],
        f = n.timeZone;
    if (void 0 !== f && 'UTC' !== (f = eh(f))) throw RangeError('timeZone is not supported.');
    for (var h in ((r['[[timeZone]]'] = f), (o = new e_()), $))
        if (u.call($, h)) {
            var p = F(n, h, 'string', $[h]);
            o['[[' + h + ']]'] = p;
        }
    var m,
        I = d[E],
        S = J(I.formats),
        A = F(n, 'formatMatcher', 'string', new eE('basic', 'best fit'), 'best fit');
    for (var h in ((I.formats = S), (m = 'basic' === A ? et(o, S) : er(o, S)), $))
        if (u.call($, h) && u.call(m, h)) {
            var v = m[h];
            r['[[' + h + ']]'] = v;
        }
    var N,
        O = F(n, 'hour12', 'boolean');
    if (r['[[hour]]']) {
        if (((O = void 0 === O ? I.hour12 : O), (r['[[hour12]]'] = O), !0 === O)) {
            var R = I.hourNo0;
            (r['[[hourNo0]]'] = R), (N = m.pattern12);
        } else N = m.pattern;
    } else N = m.pattern;
    return (r['[[pattern]]'] = N), (r['[[boundFormat]]'] = void 0), (r['[[initializedDateTimeFormat]]'] = !0), l && (e.format = ei.call(e)), i.exp.test(i.input), e;
}
c(o.NumberFormat.prototype, 'resolvedOptions', {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new e_(),
            n = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
            r = this != null && 'object' == typeof this && em(this);
        if (!r || !r['[[initializedNumberFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
        for (var i = 0, a = n.length; i < a; i++)
            u.call(r, (e = '[[' + n[i] + ']]')) &&
                (t[n[i]] = {
                    value: r[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
        return _({}, t);
    }
}),
    c(o, 'DateTimeFormat', {
        configurable: !0,
        writable: !0,
        value: Q
    }),
    c(Q, 'prototype', { writable: !1 });
var $ = {
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
function J(e) {
    return '[object Array]' === Object.prototype.toString.call(e) ? e : i.createDateTimeFormats(e);
}
function ee(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var r = ep(e);
        for (var i in ((e = new e_()), r)) e[i] = r[i];
    }
    var e = _(e),
        a = !0;
    return ('date' === t || 'any' === t) && (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) && (a = !1), ('time' === t || 'any' === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (a = !1), a && ('date' === n || 'all' === n) && (e.year = e.month = e.day = 'numeric'), a && ('time' === n || 'all' === n) && (e.hour = e.minute = e.second = 'numeric'), e;
}
function et(e, t) {
    return en(e, t);
}
function en(e, t, n) {
    for (var r, i = 8, a = 120, o = 20, s = 8, l = 6, c = 6, _ = 3, E = -1 / 0, f = 0, h = t.length; f < h; ) {
        var p = t[f],
            m = 0;
        for (var I in $)
            if (u.call($, I)) {
                var T = e['[[' + I + ']]'],
                    g = u.call(p, I) ? p[I] : void 0;
                if (void 0 === T && void 0 !== g) m -= o;
                else if (void 0 !== T && void 0 === g) m -= a;
                else {
                    var S = ['2-digit', 'numeric', 'narrow', 'short', 'long'],
                        A = d.call(S, T),
                        v = Math.max(Math.min(d.call(S, g) - A, 2), -2);
                    n && ((('numeric' === T || '2-digit' === T) && 'numeric' !== g && '2-digit' !== g) || ('numeric' !== T && '2-digit' !== T && ('2-digit' === g || 'numeric' === g))) && (m -= i), 2 === v ? (m -= l) : 1 === v ? (m -= _) : -1 === v ? (m -= c) : -2 === v && (m -= s);
                }
            }
        m > E && ((E = m), (r = p)), f++;
    }
    return r;
}
function er(e, t) {
    return en(e, t, !0);
}
function ei() {
    var e = this != null && 'object' == typeof this && em(this);
    if (!e || !e['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');
    if (void 0 === e['[[boundFormat]]']) {
        var t = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return ea(this, e);
            },
            n = I.call(t, this);
        e['[[boundFormat]]'] = n;
    }
    return e['[[boundFormat]]'];
}
function ea(e, t) {
    if (!isFinite(t)) throw RangeError('Invalid valid date passed to format');
    var n = e.__getInternalProperties(g),
        r = ef(),
        i = n['[[locale]]'],
        a = new o.NumberFormat([i], { useGrouping: !1 }),
        s = new o.NumberFormat([i], {
            minimumIntegerDigits: 2,
            useGrouping: !1
        }),
        l = eo(t, n['[[calendar]]'], n['[[timeZone]]']),
        c = n['[[pattern]]'],
        d = n['[[dataLocale]]'],
        _ = T.DateTimeFormat['[[localeData]]'][d].calendars,
        E = n['[[calendar]]'];
    for (var f in $)
        if (u.call(n, '[[' + f + ']]')) {
            var h,
                p,
                m = n['[[' + f + ']]'],
                I = l['[[' + f + ']]'];
            if (('year' === f && I <= 0 ? (I = 1 - I) : 'month' === f ? I++ : 'hour' === f && !0 === n['[[hour12]]'] && ((I %= 12), (h = I !== l['[[' + f + ']]']), 0 === I && !0 === n['[[hourNo0]]'] && (I = 12)), 'numeric' === m)) p = W(a, I);
            else if ('2-digit' === m) (p = W(s, I)).length > 2 && (p = p.slice(-2));
            else if (m in S)
                switch (f) {
                    case 'month':
                        p = ed(_, E, 'months', m, l['[[' + f + ']]']);
                        break;
                    case 'weekday':
                        try {
                            p = ed(_, E, 'days', m, l['[[' + f + ']]']);
                        } catch (e) {
                            throw Error('Could not find weekday data for locale ' + i);
                        }
                        break;
                    case 'timeZoneName':
                        p = '';
                        break;
                    default:
                        p = l['[[' + f + ']]'];
                }
            c = c.replace('{' + f + '}', p);
        }
    return !0 === n['[[hour12]]'] && ((p = ed(_, E, 'dayPeriods', h ? 'pm' : 'am')), (c = c.replace('{ampm}', p))), r.exp.test(r.input), c;
}
function eo(e, t, n) {
    var r = new Date(e),
        i = 'get' + (n || '');
    return new e_({
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
}
(T.DateTimeFormat = {
    '[[availableLocales]]': [],
    '[[relevantExtensionKeys]]': ['ca', 'nu'],
    '[[localeData]]': {}
}),
    c(o.DateTimeFormat, 'supportedLocalesOf', {
        configurable: !0,
        writable: !0,
        value: I.call(ec, T.DateTimeFormat)
    }),
    c(o.DateTimeFormat.prototype, 'format', {
        configurable: !0,
        get: ei
    }),
    c(o.DateTimeFormat.prototype, 'resolvedOptions', {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new e_(),
                n = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
                r = this != null && 'object' == typeof this && em(this);
            if (!r || !r['[[initializedDateTimeFormat]]']) throw TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
            for (var i = 0, a = n.length; i < a; i++)
                u.call(r, (e = '[[' + n[i] + ']]')) &&
                    (t[n[i]] = {
                        value: r[e],
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
            return _({}, t);
        }
    });
var es = (o.__localeSensitiveProtos = {
    Number: {},
    Date: {}
});
function el(e, t) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var n,
        r = [t],
        i = t.split('-');
    for (i.length > 2 && 4 === i[1].length && h.call(r, i[0] + '-' + i[2]); (n = m.call(r)); ) h.call(T.NumberFormat['[[availableLocales]]'], n), (T.NumberFormat['[[localeData]]'][n] = e.number), e.date && ((e.date.nu = e.number.nu), h.call(T.DateTimeFormat['[[availableLocales]]'], n), (T.DateTimeFormat['[[localeData]]'][n] = e.date));
    void 0 === a && (a = t), !A && (H(o.NumberFormat.prototype), (A = !0)), e.date && !v && (X(o.DateTimeFormat.prototype), (v = !0));
}
function eu(e) {
    if ('function' == typeof Math.log10) return Math.floor(Math.log10(e));
    var t = Math.round(Math.log(e) * Math.LOG10E);
    return t - (Number('1e' + t) > e);
}
function ec(e) {
    if (!u.call(this, '[[availableLocales]]')) throw TypeError('supportedLocalesOf() is not a constructor');
    var t = ef(),
        n = arguments[1],
        r = this['[[availableLocales]]'],
        i = M(e);
    return t.exp.test(t.input), B(r, i, n);
}
function ed(e, t, n, r, i) {
    var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        o = {
            narrow: ['short', 'long'],
            short: ['long', 'narrow'],
            long: ['short', 'narrow']
        },
        s = u.call(a, r) ? a[r] : u.call(a, o[r][0]) ? a[o[r][0]] : a[o[r][1]];
    return null != i ? s[i] : s;
}
function e_(e) {
    for (var t in e)
        (e instanceof e_ || u.call(e, t)) &&
            c(this, t, {
                value: e[t],
                enumerable: !0,
                writable: !0,
                configurable: !0
            });
}
function eE() {
    c(this, 'length', {
        writable: !0,
        value: 0
    }),
        arguments.length && h.apply(this, E.call(arguments));
}
function ef() {
    for (var e = /[.?*+^$[\]\\(){}|-]/g, t = RegExp.lastMatch || '', n = RegExp.multiline ? 'm' : '', r = { input: RegExp.input }, i = new eE(), a = !1, o = {}, s = 1; s <= 9; s++) a = (o['$' + s] = RegExp['$' + s]) || a;
    if (((t = t.replace(e, '\\$&')), a))
        for (var s = 1; s <= 9; s++) {
            var l = o['$' + s];
            l ? ((l = l.replace(e, '\\$&')), (t = t.replace(l, '(' + l + ')'))) : (t = '()' + t), h.call(i, t.slice(0, t.indexOf('(') + 1)), (t = t.slice(t.indexOf('(') + 1));
        }
    return (r.exp = new RegExp(p.call(i, '') + t, n)), r;
}
function eh(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= 'a' && n <= 'z' && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function ep(e) {
    if (null == e) throw TypeError('Cannot convert null or undefined to object');
    return Object(e);
}
function em(e) {
    return u.call(e, '__getInternalProperties') ? e.__getInternalProperties(g) : _(null);
}
(es.Number.toLocaleString = function () {
    if ('[object Number]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a number for Number.prototype.toLocaleString()');
    return W(new V(arguments[0], arguments[1]), this);
}),
    (es.Date.toLocaleString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'any', 'all');
        return ea(new Q(t, n), e);
    }),
    (es.Date.toLocaleDateString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'date', 'date');
        return ea(new Q(t, n), e);
    }),
    (es.Date.toLocaleTimeString = function () {
        if ('[object Date]' !== Object.prototype.toString.call(this)) throw TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');
        var e = +this;
        if (isNaN(e)) return 'Invalid Date';
        var t = arguments[0],
            n = arguments[1],
            n = ee(n, 'time', 'time');
        return ea(new Q(t, n), e);
    }),
    c(o, '__applyLocaleSensitivePrototypes', {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: es.Number.toLocaleString
            }),
            c(Date.prototype, 'toLocaleString', {
                writable: !0,
                configurable: !0,
                value: es.Date.toLocaleString
            }),
            es.Date))
                u.call(es.Date, e) &&
                    c(Date.prototype, e, {
                        writable: !0,
                        configurable: !0,
                        value: es.Date[e]
                    });
        }
    }),
    c(o, '__addLocaleData', {
        value: function (e) {
            if (!y(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            el(e, e.locale);
        }
    }),
    (e_.prototype = _(null)),
    (eE.prototype = _(null)),
    (t.default = o);
