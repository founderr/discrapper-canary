(e = n.nmd(e)),
    function () {
        var r = {
                function: !0,
                object: !0
            },
            i = (r[typeof window] && window) || this,
            a = r[typeof t] && t,
            s = r.object && e && !e.nodeType && e,
            o = a && s && 'object' == typeof n.g && n.g;
        o && (o.global === o || o.window === o || o.self === o) && (i = o);
        var l = 9007199254740991,
            u = /\bOpera/,
            c = Object.prototype,
            d = c.hasOwnProperty,
            f = c.toString;
        function _(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e) {
            return (e = v(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : _(e);
        }
        function h(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e);
        }
        function m(e) {
            return null == e ? _(e) : f.call(e).slice(8, -1);
        }
        function g(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
        }
        function E(e, t) {
            var n = null;
            return (
                !(function (e, t) {
                    var n = -1,
                        r = e ? e.length : 0;
                    if ('number' == typeof r && r > -1 && r <= l) for (; ++n < r; ) t(e[n], n, e);
                    else h(e, t);
                })(e, function (r, i) {
                    n = t(n, r, i, e);
                }),
                n
            );
        }
        function v(e) {
            return String(e).replace(/^ +| +$/g, '');
        }
        var b = (function e(t) {
            var n,
                r,
                a,
                s,
                o,
                l = i,
                c = t && 'object' == typeof t && 'String' != m(t);
            c && ((l = t), (t = null));
            var d = l.navigator || {},
                _ = d.userAgent || '';
            t || (t = _);
            var b = c ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(f.toString()),
                I = 'Object',
                T = c ? I : 'ScriptBridgingProxyObject',
                S = c ? I : 'Environment',
                y = c && l.java ? 'JavaPackage' : m(l.java),
                A = c ? I : 'RuntimeObject',
                N = /\bJava/.test(y) && l.java,
                C = N && m(l.environment) == S,
                R = N ? 'a' : 'α',
                O = N ? 'b' : 'β',
                D = l.document || {},
                L = l.operamini || l.opera,
                x = u.test((x = c && L ? L['[[Class]]'] : m(L))) ? x : (L = null),
                w = t,
                M = [],
                P = null,
                k = t == _,
                U = k && L && 'function' == typeof L.version && L.version(),
                B = (function (e) {
                    return E(e, function (e, n) {
                        return e || (RegExp('\\b' + (n.pattern || g(n)) + '\\b', 'i').exec(t) && (n.label || n));
                    });
                })([
                    {
                        label: 'EdgeHTML',
                        pattern: 'Edge'
                    },
                    'Trident',
                    {
                        label: 'WebKit',
                        pattern: 'AppleWebKit'
                    },
                    'iCab',
                    'Presto',
                    'NetFront',
                    'Tasman',
                    'KHTML',
                    'Gecko'
                ]),
                G = (function (e) {
                    return E(e, function (e, n) {
                        return e || (RegExp('\\b' + (n.pattern || g(n)) + '\\b', 'i').exec(t) && (n.label || n));
                    });
                })([
                    'Adobe AIR',
                    'Arora',
                    'Avant Browser',
                    'Breach',
                    'Camino',
                    'Electron',
                    'Epiphany',
                    'Fennec',
                    'Flock',
                    'Galeon',
                    'GreenBrowser',
                    'iCab',
                    'Iceweasel',
                    'K-Meleon',
                    'Konqueror',
                    'Lunascape',
                    'Maxthon',
                    {
                        label: 'Microsoft Edge',
                        pattern: 'Edge'
                    },
                    'Midori',
                    'Nook Browser',
                    'PaleMoon',
                    'PhantomJS',
                    'Raven',
                    'Rekonq',
                    'RockMelt',
                    {
                        label: 'Samsung Internet',
                        pattern: 'SamsungBrowser'
                    },
                    'SeaMonkey',
                    {
                        label: 'Silk',
                        pattern: '(?:Cloud9|Silk-Accelerated)'
                    },
                    'Sleipnir',
                    'SlimBrowser',
                    {
                        label: 'SRWare Iron',
                        pattern: 'Iron'
                    },
                    'Sunrise',
                    'Swiftfox',
                    'Waterfox',
                    'WebPositive',
                    'Opera Mini',
                    {
                        label: 'Opera Mini',
                        pattern: 'OPiOS'
                    },
                    'Opera',
                    {
                        label: 'Opera',
                        pattern: 'OPR'
                    },
                    'Chrome',
                    {
                        label: 'Chrome Mobile',
                        pattern: '(?:CriOS|CrMo)'
                    },
                    {
                        label: 'Firefox',
                        pattern: '(?:Firefox|Minefield)'
                    },
                    {
                        label: 'Firefox for iOS',
                        pattern: 'FxiOS'
                    },
                    {
                        label: 'IE',
                        pattern: 'IEMobile'
                    },
                    {
                        label: 'IE',
                        pattern: 'MSIE'
                    },
                    'Safari'
                ]),
                Z = j([
                    {
                        label: 'BlackBerry',
                        pattern: 'BB10'
                    },
                    'BlackBerry',
                    {
                        label: 'Galaxy S',
                        pattern: 'GT-I9000'
                    },
                    {
                        label: 'Galaxy S2',
                        pattern: 'GT-I9100'
                    },
                    {
                        label: 'Galaxy S3',
                        pattern: 'GT-I9300'
                    },
                    {
                        label: 'Galaxy S4',
                        pattern: 'GT-I9500'
                    },
                    {
                        label: 'Galaxy S5',
                        pattern: 'SM-G900'
                    },
                    {
                        label: 'Galaxy S6',
                        pattern: 'SM-G920'
                    },
                    {
                        label: 'Galaxy S6 Edge',
                        pattern: 'SM-G925'
                    },
                    {
                        label: 'Galaxy S7',
                        pattern: 'SM-G930'
                    },
                    {
                        label: 'Galaxy S7 Edge',
                        pattern: 'SM-G935'
                    },
                    'Google TV',
                    'Lumia',
                    'iPad',
                    'iPod',
                    'iPhone',
                    'Kindle',
                    {
                        label: 'Kindle Fire',
                        pattern: '(?:Cloud9|Silk-Accelerated)'
                    },
                    'Nexus',
                    'Nook',
                    'PlayBook',
                    'PlayStation Vita',
                    'PlayStation',
                    'TouchPad',
                    'Transformer',
                    {
                        label: 'Wii U',
                        pattern: 'WiiU'
                    },
                    'Wii',
                    'Xbox One',
                    {
                        label: 'Xbox 360',
                        pattern: 'Xbox'
                    },
                    'Xoom'
                ]),
                F = (function (e) {
                    return E(e, function (e, n, r) {
                        return e || ((n[Z] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(Z)] || RegExp('\\b' + g(r) + '(?:\\b|\\w*\\d)', 'i').exec(t)) && r);
                    });
                })({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        'Kindle Fire': 1
                    },
                    Asus: { Transformer: 1 },
                    'Barnes & Noble': { Nook: 1 },
                    BlackBerry: { PlayBook: 1 },
                    Google: {
                        'Google TV': 1,
                        Nexus: 1
                    },
                    HP: { TouchPad: 1 },
                    HTC: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        'Xbox One': 1
                    },
                    Motorola: { Xoom: 1 },
                    Nintendo: {
                        'Wii U': 1,
                        Wii: 1
                    },
                    Nokia: { Lumia: 1 },
                    Samsung: {
                        'Galaxy S': 1,
                        'Galaxy S2': 1,
                        'Galaxy S3': 1,
                        'Galaxy S4': 1
                    },
                    Sony: {
                        PlayStation: 1,
                        'PlayStation Vita': 1
                    }
                }),
                V = (function (e) {
                    return E(e, function (e, n) {
                        var r,
                            i,
                            a,
                            s,
                            o = n.pattern || g(n);
                        if (!e && (e = RegExp('\\b' + o + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(t))) {
                            (r = e),
                                (i = o),
                                (a = n.label || n),
                                (s = {
                                    '10.0': '10',
                                    6.4: '10 Technical Preview',
                                    6.3: '8.1',
                                    6.2: '8',
                                    6.1: 'Server 2008 R2 / 7',
                                    '6.0': 'Server 2008 / Vista',
                                    5.2: 'Server 2003 / XP 64-bit',
                                    5.1: 'XP',
                                    5.01: '2000 SP1',
                                    '5.0': '2000',
                                    '4.0': 'NT',
                                    '4.90': 'ME'
                                }),
                                i && a && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (s = s[/[\d.]+$/.exec(r)]) && (r = 'Windows ' + s),
                                (r = String(r)),
                                i && a && (r = r.replace(RegExp(i, 'i'), a)),
                                (e = r =
                                    p(
                                        r
                                            .replace(/ ce$/i, ' CE')
                                            .replace(/\bhpw/i, 'web')
                                            .replace(/\bMacintosh\b/, 'Mac OS')
                                            .replace(/_PowerPC\b/i, ' OS')
                                            .replace(/\b(OS X) [^ \d]+/i, '$1')
                                            .replace(/\bMac (OS X)\b/, '$1')
                                            .replace(/\/(\d)/, ' $1')
                                            .replace(/_/g, '.')
                                            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                                            .replace(/\bx86\.64\b/gi, 'x86_64')
                                            .replace(/\b(Windows Phone) OS\b/, '$1')
                                            .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                                            .split(' on ')[0]
                                    ));
                        }
                        return e;
                    });
                })([
                    'Windows Phone',
                    'Android',
                    'CentOS',
                    {
                        label: 'Chrome OS',
                        pattern: 'CrOS'
                    },
                    'Debian',
                    'Fedora',
                    'FreeBSD',
                    'Gentoo',
                    'Haiku',
                    'Kubuntu',
                    'Linux Mint',
                    'OpenBSD',
                    'Red Hat',
                    'SuSE',
                    'Ubuntu',
                    'Xubuntu',
                    'Cygwin',
                    'Symbian OS',
                    'hpwOS',
                    'webOS ',
                    'webOS',
                    'Tablet OS',
                    'Tizen',
                    'Linux',
                    'Mac OS X',
                    'Macintosh',
                    'Mac',
                    'Windows 98;',
                    'Windows '
                ]);
            function j(e) {
                return E(e, function (e, n) {
                    var r = n.pattern || g(n);
                    return (
                        !e &&
                            (e = RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(t) || RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(t) || RegExp('\\b' + r + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(t)) &&
                            ((e = String(n.label && !RegExp(r, 'i').test(n.label) ? n.label : e).split('/'))[1] && !/[\d.]+/.test(e[0]) && (e[0] += ' ' + e[1]),
                            (n = n.label || n),
                            (e = p(
                                e[0]
                                    .replace(RegExp(r, 'i'), n)
                                    .replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ')
                                    .replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                        e
                    );
                });
            }
            if ((B && (B = [B]), F && !Z && (Z = j([F])), (s = /\bGoogle TV\b/.exec(Z)) && (Z = s[0]), /\bSimulator\b/i.test(t) && (Z = (Z ? Z + ' ' : '') + 'Simulator'), 'Opera Mini' == G && /\bOPiOS\b/.test(t) && M.push('running in Turbo/Uncompressed mode'), 'IE' == G && /\blike iPhone OS\b/.test(t) ? ((F = (s = e(t.replace(/like iPhone OS/, ''))).manufacturer), (Z = s.product)) : /^iP/.test(Z) ? (G || (G = 'Safari'), (V = 'iOS' + ((s = / OS ([\d_]+)/i.exec(t)) ? ' ' + s[1].replace(/_/g, '.') : ''))) : 'Konqueror' != G || /buntu/i.test(V) ? ((F && 'Google' != F && ((/Chrome/.test(G) && !/\bMobile Safari\b/i.test(t)) || /\bVita\b/.test(Z))) || (/\bAndroid\b/.test(V) && /^Chrome/.test(G) && /\bVersion\//i.test(t)) ? ((G = 'Android Browser'), (V = /\bAndroid\b/.test(V) ? V : 'Android')) : 'Silk' == G ? (!/\bMobi/i.test(t) && ((V = 'Android'), M.unshift('desktop mode')), /Accelerated *= *true/i.test(t) && M.unshift('accelerated')) : 'PaleMoon' == G && (s = /\bFirefox\/([\d.]+)\b/.exec(t)) ? M.push('identifying as Firefox ' + s[1]) : 'Firefox' == G && (s = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (V || (V = 'Firefox OS'), Z || (Z = s[1])) : !G || (s = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(G)) ? (G && !Z && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s + '/') + 8)) && (G = null), (s = Z || F || V) && (Z || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) && (G = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : s) + ' Browser')) : 'Electron' == G && (s = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && M.push('Chromium ' + s)) : (V = 'Kubuntu'), !U))
                U = E(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', g(G), '(?:Firefox|Minefield|NetFront)'], function (e, n) {
                    return e || (RegExp(n + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(t) || 0)[1] || null;
                });
            if (((s = ('iCab' == B && parseFloat(U) > 3 && 'WebKit') || (/\bOpera\b/.test(G) && (/\bOPR\b/.test(t) ? 'Blink' : 'Presto')) || (/\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(B) && 'WebKit') || (!B && /\bMSIE\b/i.test(t) && ('Mac OS' == V ? 'Tasman' : 'Trident')) || ('WebKit' == B && /\bPlayStation\b(?! Vita\b)/i.test(G) && 'NetFront')) && (B = [s]), 'IE' == G && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? ((G += ' Mobile'), (V = 'Windows Phone ' + (/\+$/.test(s) ? s : s + '.x')), M.unshift('desktop mode')) : /\bWPDesktop\b/i.test(t) ? ((G = 'IE Mobile'), (V = 'Windows Phone 8.x'), M.unshift('desktop mode'), U || (U = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : 'IE' != G && 'Trident' == B && (s = /\brv:([\d.]+)/.exec(t)) && (G && M.push('identifying as ' + G + (U ? ' ' + U : '')), (G = 'IE'), (U = s[1])), k)) {
                if (((r = 'global'), (a = null != (n = l) ? typeof n[r] : 'number'), /^(?:boolean|number|string|undefined)$/.test(a) || ('object' == a && !n[r]))) m((s = l.runtime)) == T ? ((G = 'Adobe AIR'), (V = s.flash.system.Capabilities.os)) : m((s = l.phantom)) == A ? ((G = 'PhantomJS'), (U = (s = s.version || null) && s.major + '.' + s.minor + '.' + s.patch)) : 'number' == typeof D.documentMode && (s = /\bTrident\/(\d+)/i.exec(t)) ? ((U = [U, D.documentMode]), (s = +s[1] + 4) != U[1] && (M.push('IE ' + U[1] + ' mode'), B && (B[1] = ''), (U[1] = s)), (U = 'IE' == G ? String(U[1].toFixed(1)) : U[0])) : 'number' == typeof D.documentMode && /^(?:Chrome|Firefox)\b/.test(G) && (M.push('masking as ' + G + ' ' + U), (G = 'IE'), (U = '11.0'), (B = ['Trident']), (V = 'Windows'));
                else if ((N && ((w = (s = N.lang.System).getProperty('os.arch')), (V = V || s.getProperty('os.name') + ' ' + s.getProperty('os.version'))), C)) {
                    try {
                        (U = l.require('ringo/engine').version.join('.')), (G = 'RingoJS');
                    } catch (e) {
                        (s = l.system) && s.global.system == l.system && ((G = 'Narwhal'), V || (V = s[0].os || null));
                    }
                    !G && (G = 'Rhino');
                } else 'object' == typeof l.process && !l.process.browser && (s = l.process) && ('object' == typeof s.versions && ('string' == typeof s.versions.electron ? (M.push('Node ' + s.versions.node), (G = 'Electron'), (U = s.versions.electron)) : 'string' == typeof s.versions.nw && (M.push('Chromium ' + U, 'Node ' + s.versions.node), (G = 'NW.js'), (U = s.versions.nw))), !G && ((G = 'Node.js'), (w = s.arch), (V = s.platform), (U = (U = /[\d.]+/.exec(s.version)) ? U[0] : null)));
                V = V && p(V);
            }
            if ((U && (s = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(U) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ';' + (k && d.appMinorVersion)) || (/\bMinefield\b/i.test(t) && 'a')) && ((P = /b/i.test(s) ? 'beta' : 'alpha'), (U = U.replace(RegExp(s + '\\+?$'), '') + ('beta' == P ? O : R) + (/\d+\+?/.exec(s) || ''))), 'Fennec' == G || ('Firefox' == G && /\b(?:Android|Firefox OS)\b/.test(V)))) G = 'Firefox Mobile';
            else if ('Maxthon' == G && U) U = U.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(Z)) 'Xbox 360' == Z && (V = null), 'Xbox 360' == Z && /\bIEMobile\b/.test(t) && M.unshift('mobile mode');
            else if ((/^(?:Chrome|IE|Opera)$/.test(G) || (G && !Z && !/Browser|Mobi/.test(G))) && ('Windows CE' == V || /Mobi/i.test(t))) G += ' Mobile';
            else if ('IE' == G && k)
                try {
                    null === l.external && M.unshift('platform preview');
                } catch (e) {
                    M.unshift('embedded');
                }
            else (/\bBlackBerry\b/.test(Z) || /\bBB10\b/.test(t)) && (s = (RegExp(Z.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(t) || 0)[1] || U) ? ((V = ((s = [s, /BB10/.test(t)])[1] ? ((Z = null), (F = 'BlackBerry')) : 'Device Software') + ' ' + s[0]), (U = null)) : this != h && 'Wii' != Z && ((k && L) || (/Opera/.test(G) && /\b(?:MSIE|Firefox)\b/i.test(t)) || ('Firefox' == G && /\bOS X (?:\d+\.){2,}/.test(V)) || ('IE' == G && ((V && !/^Win/.test(V) && U > 5.5) || (/\bWindows XP\b/.test(V) && U > 8) || (8 == U && !/\bTrident\b/.test(t))))) && !u.test((s = e.call(h, t.replace(u, '') + ';'))) && s.name && ((s = 'ing as ' + s.name + ((s = s.version) ? ' ' + s : '')), u.test(G) ? (/\bIE\b/.test(s) && 'Mac OS' == V && (V = null), (s = 'identify' + s)) : ((s = 'mask' + s), (G = x ? p(x.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'), /\bIE\b/.test(s) && (V = null), !k && (U = null)), (B = ['Presto']), M.push(s));
            (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && ((s = [parseFloat(s.replace(/\.(\d)$/, '.0$1')), s]), 'Safari' == G && '+' == s[1].slice(-1) ? ((G = 'WebKit Nightly'), (P = 'alpha'), (U = s[1].slice(0, -1))) : (U == s[1] || U == (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (U = null), (s[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1]), 537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && 'WebKit' == B && (B = ['Blink']), k && (b || s[1]) ? (B && (B[1] = 'like Chrome'), (s = s[1] || ((s = s[0]) < 530 ? 1 : s < 532 ? 2 : s < 532.05 ? 3 : s < 533 ? 4 : s < 534.03 ? 5 : s < 534.07 ? 6 : s < 534.1 ? 7 : s < 534.13 ? 8 : s < 534.16 ? 9 : s < 534.24 ? 10 : s < 534.3 ? 11 : s < 535.01 ? 12 : s < 535.02 ? '13+' : s < 535.07 ? 15 : s < 535.11 ? 16 : s < 535.19 ? 17 : s < 536.05 ? 18 : s < 536.1 ? 19 : s < 537.01 ? 20 : s < 537.11 ? '21+' : s < 537.13 ? 23 : s < 537.18 ? 24 : s < 537.24 ? 25 : s < 537.36 ? 26 : 'Blink' != B ? '27' : '28'))) : (B && (B[1] = 'like Safari'), (s = (s = s[0]) < 400 ? 1 : s < 500 ? 2 : s < 526 ? 3 : s < 533 ? 4 : s < 534 ? '4+' : s < 535 ? 5 : s < 537 ? 6 : s < 538 ? 7 : s < 601 ? 8 : '8')), B && (B[1] += ' ' + (s += 'number' == typeof s ? '.x' : /[.+]/.test(s) ? '' : '+')), 'Safari' == G && (!U || parseInt(U) > 45) && (U = s)),
                'Opera' == G && (s = /\bzbov|zvav$/.exec(V)) ? ((G += ' '), M.unshift('desktop mode'), 'zvav' == s ? ((G += 'Mini'), (U = null)) : (G += 'Mobile'), (V = V.replace(RegExp(' *' + s + '$'), ''))) : 'Safari' == G && /\bChrome\b/.exec(B && B[1]) && (M.unshift('desktop mode'), (G = 'Chrome Mobile'), (U = null), /\bOS X\b/.test(V) ? ((F = 'Apple'), (V = 'iOS 4.3+')) : (V = null)),
                U && 0 == U.indexOf((s = /[\d.]+$/.exec(V))) && t.indexOf('/' + s + '-') > -1 && (V = v(V.replace(s, ''))),
                B && !/\b(?:Avant|Nook)\b/.test(G) && (/Browser|Lunascape|Maxthon/.test(G) || ('Safari' != G && /^iOS/.test(V) && /\bSafari\b/.test(B[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(G) && B[1])) && (s = B[B.length - 1]) && M.push(s),
                M.length && (M = ['(' + M.join('; ') + ')']),
                F && Z && 0 > Z.indexOf(F) && M.push('on ' + F),
                Z && M.push((/^on /.test(M[M.length - 1]) ? '' : 'on ') + Z),
                V &&
                    ((o = (s = / ([\d.+]+)$/.exec(V)) && '/' == V.charAt(V.length - s[0].length - 1)),
                    (V = {
                        architecture: 32,
                        family: s && !o ? V.replace(s[0], '') : V,
                        version: s ? s[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !o ? ' ' + e : '') + (64 == this.architecture ? ' 64-bit' : '');
                        }
                    })),
                (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w)) && !/\bi686\b/i.test(w) ? (V && ((V.architecture = 64), (V.family = V.family.replace(RegExp(' *' + s), ''))), G && (/\bWOW64\b/i.test(t) || (k && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t))) && M.unshift('32-bit')) : V && /^OS X/.test(V.family) && 'Chrome' == G && parseFloat(U) >= 39 && (V.architecture = 64),
                t || (t = null);
            var H = {};
            return (
                (H.description = t),
                (H.layout = B && B[0]),
                (H.manufacturer = F),
                (H.name = G),
                (H.prerelease = P),
                (H.product = Z),
                (H.ua = t),
                (H.version = G && U),
                (H.os = V || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return 'null';
                    }
                }),
                (H.parse = e),
                (H.toString = function () {
                    return this.description || '';
                }),
                H.version && M.unshift(U),
                H.name && M.unshift(G),
                V && G && !(V == String(V).split(' ')[0] && (V == G.split(' ')[0] || Z)) && M.push(Z ? '(' + V + ')' : 'on ' + V),
                M.length && (H.description = M.join(' ')),
                H
            );
        })();
        'function' == typeof define && 'object' == typeof define.amd && define.amd
            ? ((i.platform = b),
              define(function () {
                  return b;
              }))
            : a && s
              ? h(b, function (e, t) {
                    a[t] = e;
                })
              : (i.platform = b);
    }.call(this);
