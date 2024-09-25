(e = n.nmd(e)),
    function () {
        var r = {
                function: !0,
                object: !0
            },
            i = (r[typeof window] && window) || this,
            a = i,
            o = r[typeof t] && t,
            s = r.object && e && !e.nodeType && e,
            l = o && s && 'object' == typeof n.g && n.g;
        l && (l.global === l || l.window === l || l.self === l) && (i = l);
        var u = 9007199254740991,
            c = /\bOpera/,
            d = this,
            _ = Object.prototype,
            E = _.hasOwnProperty,
            f = _.toString;
        function h(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function p(e, t, n) {
            var r = {
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
            };
            return (
                t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = 'Windows ' + r),
                (e = String(e)),
                t && n && (e = e.replace(RegExp(t, 'i'), n)),
                (e = I(
                    e
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
                ))
            );
        }
        function m(e, t) {
            var n = -1,
                r = e ? e.length : 0;
            if ('number' == typeof r && r > -1 && r <= u) for (; ++n < r; ) t(e[n], n, e);
            else T(e, t);
        }
        function I(e) {
            return (e = N(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : h(e);
        }
        function T(e, t) {
            for (var n in e) E.call(e, n) && t(e[n], n, e);
        }
        function g(e) {
            return null == e ? h(e) : f.call(e).slice(8, -1);
        }
        function S(e, t) {
            var n = null != e ? typeof e[t] : 'number';
            return !/^(?:boolean|number|string|undefined)$/.test(n) && ('object' != n || !!e[t]);
        }
        function A(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
        }
        function v(e, t) {
            var n = null;
            return (
                m(e, function (r, i) {
                    n = t(n, r, i, e);
                }),
                n
            );
        }
        function N(e) {
            return String(e).replace(/^ +| +$/g, '');
        }
        function O(e) {
            var t,
                n,
                r = i,
                a = e && 'object' == typeof e && 'String' != g(e);
            a && ((r = e), (e = null));
            var o = r.navigator || {},
                s = o.userAgent || '';
            e || (e = s);
            var l = a ? !!o.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(f.toString()),
                u = 'Object',
                d = a ? u : 'ScriptBridgingProxyObject',
                _ = a ? u : 'Environment',
                E = a && r.java ? 'JavaPackage' : g(r.java),
                h = a ? u : 'RuntimeObject',
                m = /\bJava/.test(E) && r.java,
                R = m && g(r.environment) == _,
                C = m ? 'a' : 'α',
                y = m ? 'b' : 'β',
                b = r.document || {},
                L = r.operamini || r.opera,
                D = c.test((D = a && L ? L['[[Class]]'] : g(L))) ? D : (L = null),
                M = e,
                P = [],
                U = null,
                w = e == s,
                x = w && L && 'function' == typeof L.version && L.version(),
                G = V([
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
                k = Y([
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
                B = W([
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
                F = H({
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
                Z = j([
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
            function V(t) {
                return v(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || A(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function H(t) {
                return v(t, function (t, n, r) {
                    return t || ((n[B] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(B)] || RegExp('\\b' + A(r) + '(?:\\b|\\w*\\d)', 'i').exec(e)) && r);
                });
            }
            function Y(t) {
                return v(t, function (t, n) {
                    return t || (RegExp('\\b' + (n.pattern || A(n)) + '\\b', 'i').exec(e) && (n.label || n));
                });
            }
            function j(t) {
                return v(t, function (t, n) {
                    var r = n.pattern || A(n);
                    return !t && (t = RegExp('\\b' + r + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(e)) && (t = p(t, r, n.label || n)), t;
                });
            }
            function W(t) {
                return v(t, function (t, n) {
                    var r = n.pattern || A(n);
                    return (
                        !t &&
                            (t = RegExp('\\b' + r + ' *\\d+[.\\w_]*', 'i').exec(e) || RegExp('\\b' + r + ' *\\w+-[\\w]*', 'i').exec(e) || RegExp('\\b' + r + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(e)) &&
                            ((t = String(n.label && !RegExp(r, 'i').test(n.label) ? n.label : t).split('/'))[1] && !/[\d.]+/.test(t[0]) && (t[0] += ' ' + t[1]),
                            (n = n.label || n),
                            (t = I(
                                t[0]
                                    .replace(RegExp(r, 'i'), n)
                                    .replace(RegExp('; *(?:' + n + '[_-])?', 'i'), ' ')
                                    .replace(RegExp('(' + n + ')[-_.]?(\\w)', 'i'), '$1 $2')
                            ))),
                        t
                    );
                });
            }
            function K(t) {
                return v(t, function (t, n) {
                    return t || (RegExp(n + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(e) || 0)[1] || null;
                });
            }
            function z() {
                return this.description || '';
            }
            if ((G && (G = [G]), F && !B && (B = W([F])), (t = /\bGoogle TV\b/.exec(B)) && (B = t[0]), /\bSimulator\b/i.test(e) && (B = (B ? B + ' ' : '') + 'Simulator'), 'Opera Mini' == k && /\bOPiOS\b/.test(e) && P.push('running in Turbo/Uncompressed mode'), 'IE' == k && /\blike iPhone OS\b/.test(e) ? ((F = (t = O(e.replace(/like iPhone OS/, ''))).manufacturer), (B = t.product)) : /^iP/.test(B) ? (k || (k = 'Safari'), (Z = 'iOS' + ((t = / OS ([\d_]+)/i.exec(e)) ? ' ' + t[1].replace(/_/g, '.') : ''))) : 'Konqueror' != k || /buntu/i.test(Z) ? ((F && 'Google' != F && ((/Chrome/.test(k) && !/\bMobile Safari\b/i.test(e)) || /\bVita\b/.test(B))) || (/\bAndroid\b/.test(Z) && /^Chrome/.test(k) && /\bVersion\//i.test(e)) ? ((k = 'Android Browser'), (Z = /\bAndroid\b/.test(Z) ? Z : 'Android')) : 'Silk' == k ? (!/\bMobi/i.test(e) && ((Z = 'Android'), P.unshift('desktop mode')), /Accelerated *= *true/i.test(e) && P.unshift('accelerated')) : 'PaleMoon' == k && (t = /\bFirefox\/([\d.]+)\b/.exec(e)) ? P.push('identifying as Firefox ' + t[1]) : 'Firefox' == k && (t = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (Z || (Z = 'Firefox OS'), B || (B = t[1])) : !k || (t = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(k)) ? (k && !B && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(t + '/') + 8)) && (k = null), (t = B || F || Z) && (B || F || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z)) && (k = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z) ? Z : t) + ' Browser')) : 'Electron' == k && (t = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && P.push('Chromium ' + t)) : (Z = 'Kubuntu'), !x && (x = K(['(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))', 'Version', A(k), '(?:Firefox|Minefield|NetFront)'])), (t = ('iCab' == G && parseFloat(x) > 3 && 'WebKit') || (/\bOpera\b/.test(k) && (/\bOPR\b/.test(e) ? 'Blink' : 'Presto')) || (/\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(G) && 'WebKit') || (!G && /\bMSIE\b/i.test(e) && ('Mac OS' == Z ? 'Tasman' : 'Trident')) || ('WebKit' == G && /\bPlayStation\b(?! Vita\b)/i.test(k) && 'NetFront')) && (G = [t]), 'IE' == k && (t = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? ((k += ' Mobile'), (Z = 'Windows Phone ' + (/\+$/.test(t) ? t : t + '.x')), P.unshift('desktop mode')) : /\bWPDesktop\b/i.test(e) ? ((k = 'IE Mobile'), (Z = 'Windows Phone 8.x'), P.unshift('desktop mode'), x || (x = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : 'IE' != k && 'Trident' == G && (t = /\brv:([\d.]+)/.exec(e)) && (k && P.push('identifying as ' + k + (x ? ' ' + x : '')), (k = 'IE'), (x = t[1])), w)) {
                if (S(r, 'global')) {
                    if ((m && ((M = (t = m.lang.System).getProperty('os.arch')), (Z = Z || t.getProperty('os.name') + ' ' + t.getProperty('os.version'))), R)) {
                        try {
                            (x = r.require('ringo/engine').version.join('.')), (k = 'RingoJS');
                        } catch (e) {
                            (t = r.system) && t.global.system == r.system && ((k = 'Narwhal'), Z || (Z = t[0].os || null));
                        }
                        !k && (k = 'Rhino');
                    } else 'object' == typeof r.process && !r.process.browser && (t = r.process) && ('object' == typeof t.versions && ('string' == typeof t.versions.electron ? (P.push('Node ' + t.versions.node), (k = 'Electron'), (x = t.versions.electron)) : 'string' == typeof t.versions.nw && (P.push('Chromium ' + x, 'Node ' + t.versions.node), (k = 'NW.js'), (x = t.versions.nw))), !k && ((k = 'Node.js'), (M = t.arch), (Z = t.platform), (x = (x = /[\d.]+/.exec(t.version)) ? x[0] : null)));
                } else g((t = r.runtime)) == d ? ((k = 'Adobe AIR'), (Z = t.flash.system.Capabilities.os)) : g((t = r.phantom)) == h ? ((k = 'PhantomJS'), (x = (t = t.version || null) && t.major + '.' + t.minor + '.' + t.patch)) : 'number' == typeof b.documentMode && (t = /\bTrident\/(\d+)/i.exec(e)) ? ((x = [x, b.documentMode]), (t = +t[1] + 4) != x[1] && (P.push('IE ' + x[1] + ' mode'), G && (G[1] = ''), (x[1] = t)), (x = 'IE' == k ? String(x[1].toFixed(1)) : x[0])) : 'number' == typeof b.documentMode && /^(?:Chrome|Firefox)\b/.test(k) && (P.push('masking as ' + k + ' ' + x), (k = 'IE'), (x = '11.0'), (G = ['Trident']), (Z = 'Windows'));
                Z = Z && I(Z);
            }
            if ((x && (t = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(x) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ';' + (w && o.appMinorVersion)) || (/\bMinefield\b/i.test(e) && 'a')) && ((U = /b/i.test(t) ? 'beta' : 'alpha'), (x = x.replace(RegExp(t + '\\+?$'), '') + ('beta' == U ? y : C) + (/\d+\+?/.exec(t) || ''))), 'Fennec' == k || ('Firefox' == k && /\b(?:Android|Firefox OS)\b/.test(Z)))) k = 'Firefox Mobile';
            else if ('Maxthon' == k && x) x = x.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(B)) 'Xbox 360' == B && (Z = null), 'Xbox 360' == B && /\bIEMobile\b/.test(e) && P.unshift('mobile mode');
            else if ((/^(?:Chrome|IE|Opera)$/.test(k) || (k && !B && !/Browser|Mobi/.test(k))) && ('Windows CE' == Z || /Mobi/i.test(e))) k += ' Mobile';
            else if ('IE' == k && w)
                try {
                    null === r.external && P.unshift('platform preview');
                } catch (e) {
                    P.unshift('embedded');
                }
            else (/\bBlackBerry\b/.test(B) || /\bBB10\b/.test(e)) && (t = (RegExp(B.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(e) || 0)[1] || x) ? ((Z = ((t = [t, /BB10/.test(e)])[1] ? ((B = null), (F = 'BlackBerry')) : 'Device Software') + ' ' + t[0]), (x = null)) : this != T && 'Wii' != B && ((w && L) || (/Opera/.test(k) && /\b(?:MSIE|Firefox)\b/i.test(e)) || ('Firefox' == k && /\bOS X (?:\d+\.){2,}/.test(Z)) || ('IE' == k && ((Z && !/^Win/.test(Z) && x > 5.5) || (/\bWindows XP\b/.test(Z) && x > 8) || (8 == x && !/\bTrident\b/.test(e))))) && !c.test((t = O.call(T, e.replace(c, '') + ';'))) && t.name && ((t = 'ing as ' + t.name + ((t = t.version) ? ' ' + t : '')), c.test(k) ? (/\bIE\b/.test(t) && 'Mac OS' == Z && (Z = null), (t = 'identify' + t)) : ((t = 'mask' + t), (k = D ? I(D.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'), /\bIE\b/.test(t) && (Z = null), !w && (x = null)), (G = ['Presto']), P.push(t));
            (t = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && ((t = [parseFloat(t.replace(/\.(\d)$/, '.0$1')), t]), 'Safari' == k && '+' == t[1].slice(-1) ? ((k = 'WebKit Nightly'), (U = 'alpha'), (x = t[1].slice(0, -1))) : (x == t[1] || x == (t[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (x = null), (t[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1]), 537.36 == t[0] && 537.36 == t[2] && parseFloat(t[1]) >= 28 && 'WebKit' == G && (G = ['Blink']), w && (l || t[1]) ? (G && (G[1] = 'like Chrome'), (t = t[1] || ((t = t[0]) < 530 ? 1 : t < 532 ? 2 : t < 532.05 ? 3 : t < 533 ? 4 : t < 534.03 ? 5 : t < 534.07 ? 6 : t < 534.1 ? 7 : t < 534.13 ? 8 : t < 534.16 ? 9 : t < 534.24 ? 10 : t < 534.3 ? 11 : t < 535.01 ? 12 : t < 535.02 ? '13+' : t < 535.07 ? 15 : t < 535.11 ? 16 : t < 535.19 ? 17 : t < 536.05 ? 18 : t < 536.1 ? 19 : t < 537.01 ? 20 : t < 537.11 ? '21+' : t < 537.13 ? 23 : t < 537.18 ? 24 : t < 537.24 ? 25 : t < 537.36 ? 26 : 'Blink' != G ? '27' : '28'))) : (G && (G[1] = 'like Safari'), (t = (t = t[0]) < 400 ? 1 : t < 500 ? 2 : t < 526 ? 3 : t < 533 ? 4 : t < 534 ? '4+' : t < 535 ? 5 : t < 537 ? 6 : t < 538 ? 7 : t < 601 ? 8 : '8')), G && (G[1] += ' ' + (t += 'number' == typeof t ? '.x' : /[.+]/.test(t) ? '' : '+')), 'Safari' == k && (!x || parseInt(x) > 45) && (x = t)),
                'Opera' == k && (t = /\bzbov|zvav$/.exec(Z)) ? ((k += ' '), P.unshift('desktop mode'), 'zvav' == t ? ((k += 'Mini'), (x = null)) : (k += 'Mobile'), (Z = Z.replace(RegExp(' *' + t + '$'), ''))) : 'Safari' == k && /\bChrome\b/.exec(G && G[1]) && (P.unshift('desktop mode'), (k = 'Chrome Mobile'), (x = null), /\bOS X\b/.test(Z) ? ((F = 'Apple'), (Z = 'iOS 4.3+')) : (Z = null)),
                x && 0 == x.indexOf((t = /[\d.]+$/.exec(Z))) && e.indexOf('/' + t + '-') > -1 && (Z = N(Z.replace(t, ''))),
                G && !/\b(?:Avant|Nook)\b/.test(k) && (/Browser|Lunascape|Maxthon/.test(k) || ('Safari' != k && /^iOS/.test(Z) && /\bSafari\b/.test(G[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(k) && G[1])) && (t = G[G.length - 1]) && P.push(t),
                P.length && (P = ['(' + P.join('; ') + ')']),
                F && B && 0 > B.indexOf(F) && P.push('on ' + F),
                B && P.push((/^on /.test(P[P.length - 1]) ? '' : 'on ') + B),
                Z &&
                    ((n = (t = / ([\d.+]+)$/.exec(Z)) && '/' == Z.charAt(Z.length - t[0].length - 1)),
                    (Z = {
                        architecture: 32,
                        family: t && !n ? Z.replace(t[0], '') : Z,
                        version: t ? t[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !n ? ' ' + e : '') + (64 == this.architecture ? ' 64-bit' : '');
                        }
                    })),
                (t = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(M)) && !/\bi686\b/i.test(M) ? (Z && ((Z.architecture = 64), (Z.family = Z.family.replace(RegExp(' *' + t), ''))), k && (/\bWOW64\b/i.test(e) || (w && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(e))) && P.unshift('32-bit')) : Z && /^OS X/.test(Z.family) && 'Chrome' == k && parseFloat(x) >= 39 && (Z.architecture = 64),
                e || (e = null);
            var q = {};
            return (
                (q.description = e),
                (q.layout = G && G[0]),
                (q.manufacturer = F),
                (q.name = k),
                (q.prerelease = U),
                (q.product = B),
                (q.ua = e),
                (q.version = k && x),
                (q.os = Z || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return 'null';
                    }
                }),
                (q.parse = O),
                (q.toString = z),
                q.version && P.unshift(x),
                q.name && P.unshift(k),
                Z && k && !(Z == String(Z).split(' ')[0] && (Z == k.split(' ')[0] || B)) && P.push(B ? '(' + Z + ')' : 'on ' + Z),
                P.length && (q.description = P.join(' ')),
                q
            );
        }
        var R = O();
        'function' == typeof define && 'object' == typeof define.amd && define.amd
            ? ((i.platform = R),
              define(function () {
                  return R;
              }))
            : o && s
              ? T(R, function (e, t) {
                    o[t] = e;
                })
              : (i.platform = R);
    }.call(this);
