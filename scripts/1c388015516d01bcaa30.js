"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [1162], {
        437763: (e, n, t) => {
            t.d(n, {
                z: () => c
            });
            var r = t(667294),
                a = t(83471),
                o = t(632826);

            function i(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function s(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e) {
                var n = e.purchaseState,
                    t = e.currentStep,
                    i = e.initialScene,
                    c = e.purchaseScene,
                    u = e.errorScene,
                    l = e.successScene,
                    f = s((0, r.useState)(i), 2),
                    p = f[0],
                    d = f[1];
                (0, r.useEffect)((function() {
                    n === o.A.PURCHASING ? d(c) : n === o.A.FAIL && d(u)
                }), [n, c, u]);
                (0, r.useEffect)((function() {
                    t === a.h8.CONFIRM && d(l)
                }), [t, l]);
                return [p, d]
            }
        },
        301162: (e, n, t) => {
            t.d(n, {
                Z: () => H
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                o = t.n(a),
                i = t(202351),
                s = t(304548),
                c = t(316878),
                u = t(83471),
                l = t(644144),
                f = t(69427),
                p = t(107364),
                d = t(318586),
                S = t(874414),
                E = t(633878);

            function h(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function L(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function m(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }

            function y(e) {
                var n = e.width,
                    t = void 0 === n ? 143 : n,
                    a = e.height,
                    o = void 0 === a ? 41 : a,
                    i = e.color,
                    s = void 0 === i ? "currentColor" : i,
                    c = e.foreground,
                    u = m(e, ["width", "height", "color", "foreground"]);
                return (0, r.jsxs)("svg", L(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            h(e, n, t[n])
                        }))
                    }
                    return e
                }({}, (0, E.Z)(u)), {
                    width: t,
                    height: o,
                    viewBox: "0 0 143 41",
                    children: [(0, r.jsx)("title", {
                        children: "Nitro Classic"
                    }), (0, r.jsx)("g", {
                        fill: s,
                        className: c,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: (0, r.jsx)("path", {
                            d: "M98.4808161 8.67851957L97.2236004 17.1425324C96.9366613 19.1428254 94.6742302 20.0716236 92.5917164 20.0716236 90.6527882 20.0716236 88.7494953 19.1428254 89.0007991 17.3214804L90.2578987 8.67851957C90.5449539 6.7854799 92.807385 5.82123843 94.8897827 5.82123843 96.9722965 5.82123843 98.7678712 6.7854799 98.4808161 8.67851957M95.8844352.00380986213L95.8851317 0 82.3544217 0C82.0087483 0 81.715309.252259053 81.6652804.592375835L81.0074795 5.06376857C80.9459594 5.48181435 81.2717838 5.85668169 81.6965047 5.85668169L84.1674077 5.85668169C84.4160419 5.85668169 84.5858606 6.10882529 84.4882409 6.33626252 84.1799439 7.05517195 83.9553375 7.83561644 83.8305561 8.67851957L82.5733404 17.3214804C81.7473459 23.1071601 86.5954788 26 91.8735561 26 97.4035177 26 102.825761 23.1071601 103.651756 17.3214804L104.908275 8.67851957C105.717903 3.00713572 101.040981.115796719 95.8844352.00380986213M15.296869 11.3489531L15.3645208 15.4968998C15.3658783 15.5821668 15.3090871 15.6571606 15.2271809 15.6781634L15.2270678 15.6781634 13.8302517 10.6749217C13.8282154 10.6672739 13.8256134 10.6598544 13.8224457 10.6525491L9.48877489.415833402C9.38198017.163685177 9.13637494 0 8.86452355 0L3.95343718 0C3.6148391 0 3.32805455.251805788 3.28121873.590019998L.00667092325 24.2202696C-.050459726 24.632222.26664366 25 .678889375 25L5.57119616 25C5.91024677 25 6.19737071 24.7475093 6.24364088 24.4086103L7.52608254 15.0207974C7.52732697 15.0116657 7.52789262 15.0023057 7.52777949 14.9930599L7.45775202 10.1692555 7.5975807 10.1340986 9.06465052 15.1374545C9.06679999 15.1445315 9.06928885 15.1516085 9.07223023 15.1584573L13.1252256 24.587591C13.2328122 24.8379129 13.4775124 25 13.7478931 25L19.045884 25C19.3844821 25 19.6712667 24.7481942 19.7181025 24.40998L22.9933291.779730433C23.0504597.367777991 22.7333563 0 22.3211106 0L17.4621772 0C17.1236922 0 16.8369077.251577496 16.7899587.589791707L15.298566 11.3204166C15.2973215 11.3298907 15.2967559 11.3393648 15.296869 11.3489531M24.7126791 25L29.8497922 25C30.205243 25 30.5063014 24.7483072 30.5554684 24.4099773L33.9929971.779733993C34.0529712.36777967 33.7200849 0 33.2873209 0L28.1502078 0C27.7948757 0 27.4938173.251692791 27.4445316.590022692L24.0070029 24.220266C23.9470288 24.6322203 24.2799151 25 24.7126791 25M37.6698384.584862647L37.0075033 4.99943007C36.9456869 5.41217371 37.2736994 5.78240055 37.7012724 5.78240055L42.9904877 5.78240055C43.4157236 5.78240055 43.7430349 6.14863787 43.6850747 6.55955773L41.1933721 24.2228428C41.1354119 24.6337627 41.4627233 25 41.8879592 25L47.0155637 25C47.3658955 25 47.6624739 24.7477488 47.7101508 24.4093241L50.2545552 6.37307648C50.3022321 6.03453779 50.5988105 5.78240055 50.9491423 5.78240055L56.6358988 5.78240055C56.9838934 5.78240055 57.2791864 5.53345492 57.3296679 5.1975379L57.9924704.782970478C58.0544036.370226832 57.7263911 0 57.2987013 0L38.3636075 0C38.0156128 0 37.7202029.248945629 37.6698384.584862647M73.4002223 8.72158326C73.2199776 10.1691878 72.0692022 11.6169065 70.0902313 11.6169065L67.1170073 11.6169065C66.6926763 11.6169065 66.3664914 11.2480995 66.4261466 10.8356886L67.0554915 6.48511303C67.104332 6.147468 67.3988868 5.89657424 67.7463521 5.89657424L70.9177291 5.89657424C72.8244858 5.89657424 73.5797693 7.20309382 73.4002223 8.72158326M71.6373126 0L62.0638753 0C61.7158285 0 61.4210412.251692791 61.3727821.590022692L58.0068571 24.220266C57.9481322 24.6322203 58.2740844 25 58.697834 25L63.7988762 25C64.1473881 25 64.4425243 24.7475082 64.4900856 24.4086076L65.4806177 17.3505938C65.5044565 17.1812005 65.6519083 17.0549546 65.8262224 17.0549546L66.4819644 17.0549546C66.6009259 17.0549546 66.7117473 17.1144249 66.7758214 17.2128191L71.6474295 24.6843852C71.775694 24.8810595 71.9971043 25 72.2350273 25L78.5355692 25C79.0999096 25 79.4307459 24.3765324 79.1072357 23.9225722L73.9950299 16.7493848C73.8724635 16.5773661 73.935491 16.3380012 74.1277133 16.245885 77.3914221 14.6802531 79.2866664 13.0763822 79.911476 8.61554126 80.6303618 2.75412411 76.8897603 0 71.6373126 0M5.93350799 37.6155526L7.71275643 38.4952518C7.80947956 38.5430729 7.84912249 38.6602491 7.80130141 38.7569722 7.79608029 38.7675325 7.78991472 38.7775989 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 6.5023978 40.5070853 5.02480222 41 3.72982215 41 1.63490599 41-.294225433 39.7760989.0373440313 37.3434066L.549769566 33.6565934C.88133903 31.239011 3.1721826 30 5.31231277 30 6.56433391 30 7.99499405 30.5097346 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515L8.63332448 32.2132515C8.68451961 32.3498763 8.61597686 32.5022247 8.4797766 32.5545387L6.63222277 33.2642011C6.50733795 33.312169 6.36596186 33.2651964 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.00467959 32.6921544 5.44749743 32.4931319 4.89031528 32.4931319 4.12167697 32.5082418 3.35303867 32.9313187 3.2475393 33.6565934L2.73511376 37.3434066C2.62961439 38.0384615 3.29275331 38.4766484 4.04632028 38.4766484 4.60310978 38.4766484 5.22108254 38.2435573 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958L5.60253663 37.6999958C5.67690475 37.5940233 5.81746419 37.5581537 5.93351807 37.6155322zM59.2832028 37.6155526L61.0624512 38.4952518C61.1591744 38.5430729 61.1988173 38.6602491 61.1509962 38.7569722 61.1457751 38.7675325 61.1396095 38.7775989 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 59.8520926 40.5070853 58.374497 41 57.079517 41 54.9846008 41 53.0554694 39.7760989 53.3870388 37.3434066L53.8994644 33.6565934C54.2310338 31.239011 56.5218774 30 58.6620076 30 59.9140287 30 61.3446889 30.5097346 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515L61.9830193 32.2132515C62.0342144 32.3498763 61.9656717 32.5022247 61.8294714 32.5545387L59.9819176 33.2642011C59.8570328 33.312169 59.7156567 33.2651964 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.3543744 32.6921544 58.7971922 32.4931319 58.2400101 32.4931319 57.4713718 32.5082418 56.7027335 32.9313187 56.5972341 33.6565934L56.0848086 37.3434066C55.9793092 38.0384615 56.6424481 38.4766484 57.3960151 38.4766484 57.9528046 38.4766484 58.5707773 38.2435573 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958L58.9522314 37.6999958C59.0265995 37.5940233 59.167159 37.5581537 59.2832129 37.6155322zM9.55137248 40.2798328L10.9039613 30.5820306C10.9384202 30.3349668 11.1497126 30.1510989 11.3991679 30.1510989L13.1015272 30.1510989C13.3776695 30.1510989 13.6015272 30.3749565 13.6015272 30.6510989 13.6015272 30.6744353 13.5998934 30.6977431 13.5966378 30.7208514L12.6268238 37.6046981C12.5883006 37.8781402 12.7787399 38.131038 13.052182 38.1695612 13.0752902 38.1728168 13.0985981 38.1744505 13.1219345 38.1744505L16.3149254 38.1744505C16.5910678 38.1744505 16.8149254 38.3983082 16.8149254 38.6744505 16.8149254 38.6968642 16.8134183 38.7192526 16.8104143 38.7414641L16.5839494 40.4159146C16.55041 40.6639006 16.3387043 40.8489011 16.0884606 40.8489011L10.0465791 40.8489011C9.7704367 40.8489011 9.54657907 40.6250435 9.54657907 40.3489011 9.54657907 40.3257952 9.54818071 40.3027171 9.55137248 40.2798328zM25.2618169 30.5450857L27.365844 40.2428879C27.4243935 40.5127519 27.2530892 40.7789836 26.9832252 40.8375331 26.9483937 40.8450901 26.9128539 40.8489011 26.877212 40.8489011L25.017712 40.8489011C24.7774965 40.8489011 24.5712291 40.6780766 24.5264688 40.4420682L24.273859 39.1101296C24.2290987 38.8741212 24.0228313 38.7032967 23.7826158 38.7032967L21.6737234 38.7032967C21.475839 38.7032967 21.2965724 38.8200012 21.2164933 39.0009587L20.5304477 40.5512391C20.4503686 40.7321966 20.2711021 40.8489011 20.0732176 40.8489011L18.3049929 40.8489011C18.0288505 40.8489011 17.8049929 40.6250435 17.8049929 40.3489011 17.8049929 40.2729821 17.8222812 40.1980599 17.8555465 40.1298168L22.5827762 30.4320146C22.6665559 30.2601425 22.8410184 30.1510989 23.0322226 30.1510989L24.773185 30.1510989C25.0084749 30.1510989 25.2119293 30.3151453 25.2618169 30.5450857zM22.2977121 36.3008242L23.895274 36.3008242 23.5787759 33.1730769 23.4732765 33.1730769 22.2977121 36.3008242zM28.4615085 38.7933304L29.6600776 37.7982307C29.867419 37.6260869 30.1698805 37.6329436 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.8626279 38.2632556 31.5697924 38.4917582 32.2174996 38.4917582 32.9409239 38.4917582 33.5739201 38.2348901 33.6794195 37.6758242 33.7999902 37.010989 32.8655672 36.7239011 32.0065008 36.603022 30.3335822 36.331044 28.8264482 34.9862637 29.2032317 32.9615385 29.6101579 30.7706044 31.5392893 30 33.4985634 30 34.6675402 30 35.7629615 30.294974 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989L36.6410928 31.3393989C36.7911777 31.5179057 36.7681372 31.784282 36.5896304 31.9343669 36.5796762 31.9427362 36.5693406 31.9506412 36.5586568 31.9580566L35.2852973 32.8418354C35.1082978 32.964687 34.8717504 32.9572254 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.2644214 32.476257 33.6924031 32.3091824 33.1820653 32.2967033 32.503855 32.2815934 31.9311441 32.5384615 31.8708588 33.0824176 31.7955021 33.7019231 32.3380703 33.9739011 33.1519226 34.1552198 35.0056973 34.5027473 36.8142581 35.2129121 36.3169039 37.8722527 35.925049 39.9574176 34.1164883 41 31.8105734 41 30.6586546 41 29.2630198 40.4746703 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963L28.4016401 39.4349963C28.2411035 39.2412306 28.2678891 38.9540435 28.4614898 38.7933078zM38.3784498 38.7933304L39.5770189 37.7982307C39.7843603 37.6260869 40.0868217 37.6329436 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.7795691 38.2632556 41.4867336 38.4917582 42.1344408 38.4917582 42.8578651 38.4917582 43.4908613 38.2348901 43.5963607 37.6758242 43.7169314 37.010989 42.7825084 36.7239011 41.9234421 36.603022 40.2505234 36.331044 38.7433895 34.9862637 39.120173 32.9615385 39.5270991 30.7706044 41.4562305 30 43.4155046 30 44.5844814 30 45.6799028 30.294974 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989L46.558034 31.3393989C46.708119 31.5179057 46.6850785 31.784282 46.5065716 31.9343669 46.4966174 31.9427362 46.4862819 31.9506412 46.4755981 31.9580566L45.2022385 32.8418354C45.025239 32.964687 44.7886916 32.9572254 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.1813626 32.476257 43.6093444 32.3091824 43.0990065 32.2967033 42.4207963 32.2815934 41.8480854 32.5384615 41.7878 33.0824176 41.7124433 33.7019231 42.2550115 33.9739011 43.0688638 34.1552198 44.9226386 34.5027473 46.7311993 35.2129121 46.2338451 37.8722527 45.8419903 39.9574176 44.0334296 41 41.7275147 41 40.5755958 41 39.179961 40.4746703 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963L38.3185814 39.4349963C38.1580447 39.2412306 38.1848304 38.9540435 38.378431 38.7933078zM51.984237 30.7201672L50.6316481 40.4179694C50.5971892 40.6650332 50.3858968 40.8489011 50.1364415 40.8489011L48.4483514 40.8489011C48.1722091 40.8489011 47.9483514 40.6250435 47.9483514 40.3489011 47.9483514 40.3257952 47.9499531 40.3027171 47.9531448 40.2798328L49.3057337 30.5820306C49.3401926 30.3349668 49.551485 30.1510989 49.8009403 30.1510989L51.4890304 30.1510989C51.7651728 30.1510989 51.9890304 30.3749565 51.9890304 30.6510989 51.9890304 30.6742048 51.9874287 30.6972829 51.984237 30.7201672z"
                        })
                    })]
                }))
            }

            function O(e) {
                var n = e.className;
                return (0, r.jsxs)("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    children: [(0, r.jsx)("path", {
                        d: "M2.17332 27.8901L6.92419 26.1319C7.02527 26.044 7.02527 25.9561 6.92419 25.9561L2.17332 24.1099L0.050529 20.0659C0.050529 19.978 -0.0505667 19.978 -0.15165 20.0659L-2.17332 24.1099H-2.27438L-6.92419 25.9561C-7.02527 25.9561 -7.02527 26.044 -6.92419 26.1319L-2.27438 27.8901H-2.17332L-0.15165 31.9341C-0.0505667 32.022 0.050529 32.022 0.050529 31.9341L2.17332 27.8901Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M6.7581 18.6026L4.04332 17.5769C3.98556 17.5256 3.98556 17.4744 4.04332 17.4744L6.7581 16.3974L7.97113 14.0385C7.97113 13.9872 8.0289 13.9872 8.08666 14.0385L9.2419 16.3974H9.29964L11.9567 17.4744C12.0144 17.4744 12.0144 17.5256 11.9567 17.5769L9.29964 18.6026H9.2419L8.08666 20.9615C8.0289 21.0128 7.97113 21.0128 7.97113 20.9615L6.7581 18.6026Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M129.758 12.6026L127.043 11.5769C126.986 11.5256 126.986 11.4744 127.043 11.4744L129.758 10.3974L130.971 8.03846C130.971 7.98718 131.029 7.98718 131.087 8.03846L132.242 10.3974H132.3L134.957 11.4744C135.014 11.4744 135.014 11.5256 134.957 11.5769L132.3 12.6026H132.242L131.087 14.9615C131.029 15.0128 130.971 15.0128 130.971 14.9615L129.758 12.6026Z",
                        fill: "#F2F3F5"
                    }), (0, r.jsx)("path", {
                        d: "M116.482 7.2326L112.07 5.62087C111.977 5.54029 111.977 5.45972 112.07 5.45972L116.482 3.7674L118.453 0.0604396C118.453 -0.0201465 118.547 -0.0201465 118.641 0.0604396L120.518 3.7674H120.612L124.93 5.45972C125.023 5.45972 125.023 5.54029 124.93 5.62087L120.612 7.2326H120.518L118.641 10.9396C118.547 11.0201 118.453 11.0201 118.453 10.9396L116.482 7.2326Z",
                        fill: "#F2F3F5"
                    })]
                })
            }
            var N = t(507965),
                T = t(694329),
                C = t(249052),
                I = t(203600),
                g = t(473708),
                A = t(187205),
                D = t.n(A);

            function _(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function b(e, n) {
                var t = T.ZP.getDefaultPrice(e),
                    r = T.ZP.getInterval(e).intervalType,
                    a = (0, C.T4)(t.amount, t.currency);
                if (n) return a;
                switch (r) {
                    case I.rV.MONTH:
                        return g.Z.Messages.BILLING_PRICE_PER_MONTH.format({
                            price: a
                        });
                    case I.rV.YEAR:
                        return g.Z.Messages.BILLING_PRICE_PER_YEAR.format({
                            price: a
                        })
                }
            }
            var R = function(e) {
                var n = e.isTier0;
                return (0, r.jsx)("div", {
                    className: D().trialBadgeContainer,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-xs/bold",
                        className: o()(D().trialOfferText, _({}, D().tier0TrialOffer, n)),
                        children: g.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            const v = function(e) {
                var n, t = e.hideCloseButton,
                    a = void 0 !== t && t,
                    u = e.hideCloseOnFullScreen,
                    l = e.shouldShowPrice,
                    E = e.plan,
                    h = e.renderAnimation,
                    L = e.onClose,
                    m = e.isGift,
                    T = e.upgradeToPremiumType,
                    C = e.headerTheme,
                    g = void 0 === C ? f.nL.DEFAULT : C,
                    A = e.className,
                    v = e.showTrialBadge,
                    P = void 0 !== v && v,
                    x = T === I.p9.TIER_2;
                n = T === I.p9.TIER_0 ? S.Z : T === I.p9.TIER_1 ? y : d.Z;
                var j, w = (0, i.e7)([c.Z], (function() {
                    return c.Z.useReducedMotion
                }));
                return (0, r.jsxs)("div", {
                    "aria-hidden": !0,
                    className: o()((j = {}, _(j, D().headerBackground, !x), _(j, g === f.nL.WINTER ? D().tier2HeaderBackgroundWinterTheme : D().tier2HeaderBackground, x), j), A),
                    children: [w || g !== f.nL.WINTER ? null : (0, r.jsx)(N.Z, {
                        className: D().snow,
                        wind: 5
                    }), P && (0, r.jsx)(O, {
                        className: D().trialBadgeSparkles
                    }), h(), (0, r.jsxs)(p.Z, {
                        align: p.Z.Align.START,
                        justify: p.Z.Justify.BETWEEN,
                        className: D().headerTop,
                        children: [(0, r.jsxs)("div", {
                            children: [(0, r.jsx)(n, {
                                className: o()(D().headerIcon, _({}, D().nonTier2, !x))
                            }), P && (0, r.jsx)(R, {
                                isTier0: T === I.p9.TIER_0
                            })]
                        }), !a && (0, r.jsx)(s.ModalCloseButton, {
                            hideOnFullscreen: u,
                            onClick: L,
                            className: D().closeButton
                        })]
                    }), l && null != E ? (0, r.jsx)("div", {
                        className: D().price,
                        children: b(E, m)
                    }) : null]
                })
            };
            var P = t(630689),
                x = t(437763);

            function j(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function w(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e) {
                var n = e.currentStep,
                    t = e.purchaseState,
                    a = e.className,
                    o = e.pause,
                    i = w((0, x.z)({
                        purchaseState: t,
                        currentStep: n,
                        initialScene: P.NQ.Scenes.NORMAL,
                        purchaseScene: P.NQ.Scenes.SPEED_START,
                        errorScene: P.NQ.Scenes.NORMAL,
                        successScene: P.NQ.Scenes.FINISH
                    }), 2),
                    s = i[0],
                    c = i[1];
                return (0, r.jsx)(P.NQ, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(P.NQ.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }

            function M(e) {
                var n = e.currentStep,
                    t = e.purchaseState,
                    a = e.className,
                    o = e.pause,
                    i = w((0, x.z)({
                        purchaseState: t,
                        currentStep: n,
                        initialScene: P.HC.Scenes.NORMAL,
                        purchaseScene: P.HC.Scenes.SPEED_START,
                        errorScene: P.HC.Scenes.NORMAL,
                        successScene: P.HC.Scenes.FINISH
                    }), 2),
                    s = i[0],
                    c = i[1];
                return (0, r.jsx)(P.HC, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(P.HC.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }

            function Z(e) {
                var n = e.currentStep,
                    t = e.purchaseState,
                    a = e.className,
                    o = e.pause,
                    i = w((0, x.z)({
                        purchaseState: t,
                        currentStep: n,
                        initialScene: P.Db.Scenes.IDLE_ENTRY,
                        purchaseScene: P.Db.Scenes.BOOST_START,
                        errorScene: P.Db.Scenes.ERROR,
                        successScene: P.Db.Scenes.BOOST_END
                    }), 2),
                    s = i[0],
                    c = i[1];
                return (0, r.jsx)(P.Db, {
                    className: a,
                    nextScene: s,
                    onScenePlay: function(e) {
                        return c(P.Db.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: o
                })
            }
            var F = t(950452),
                G = t.n(F);

            function H(e) {
                var n = e.currentStep,
                    t = e.className,
                    a = e.purchaseState,
                    p = e.premiumType,
                    d = e.useWinterTheme,
                    S = void 0 !== d && d,
                    E = e.onClose,
                    h = e.hideCloseButton,
                    L = e.showTrialBadge,
                    m = e.giftRecipient,
                    y = (0, i.e7)([c.Z], (function() {
                        return c.Z.useReducedMotion
                    })),
                    O = S ? f.nL.WINTER : f.nL.DEFAULT;
                return (0, l.a8)(m) && n !== u.h8.CONFIRM ? (0, r.jsxs)(s.ModalHeader, {
                    className: G().modalHeaderCustomGift,
                    separator: !1,
                    children: [(0, r.jsx)("div", {
                        className: G().giftNitroInfo,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: function() {
                                switch (n) {
                                    case u.h8.PLAN_SELECT:
                                        return g.Z.Messages.GIFT_NITRO_ACTION;
                                    case u.h8.ADD_PAYMENT_STEPS:
                                        return g.Z.Messages.PAYMENT_METHOD_SELECTION;
                                    case u.h8.REVIEW:
                                        return g.Z.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return g.Z.Messages.GIFT_NITRO_ACTION
                                }
                            }()
                        })
                    }), (0, r.jsx)(s.ModalCloseButton, {
                        onClick: E,
                        className: G().closeButton
                    })]
                }) : (0, r.jsx)(s.ModalHeader, {
                    className: o()(G().modalHeader, t),
                    separator: !1,
                    children: (0, r.jsx)(v, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: h,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: p,
                        renderAnimation: function() {
                            return p === I.p9.TIER_0 ? (0, r.jsx)(B, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: y
                            }) : p === I.p9.TIER_1 ? (0, r.jsx)(M, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: y
                            }) : (0, r.jsx)(Z, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: y
                            })
                        },
                        plan: null,
                        isGift: !1,
                        className: G().header,
                        onClose: E,
                        headerTheme: O,
                        showTrialBadge: L
                    })
                })
            }
        },
        630689: (e, n, t) => {
            t.d(n, {
                NQ: () => b,
                HC: () => x,
                Db: () => G,
                fe: () => W
            });
            var r = t(785893),
                a = t(667294),
                o = t(294184),
                i = t.n(o),
                s = t(248088),
                c = t(853158),
                u = t(311865),
                l = t(369689),
                f = t.n(l);

            function p(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function d(e, n, t, r, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(c) : Promise.resolve(c).then(r, a)
            }

            function S(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function L(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                n && y(e, n)
            }

            function m(e, n) {
                return !n || "object" !== N(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function y(e, n) {
                y = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return y(e, n)
            }

            function O(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, r = h(e);
                    if (n) {
                        var a = h(this).constructor;
                        t = Reflect.construct(r, arguments, a)
                    } else t = r.apply(this, arguments);
                    return m(this, t)
                }
            }
            var C, I, g = function(e, n) {
                var t, r, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(C || (C = {}));
            var A, D, _ = (E(I = {}, C.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), E(I, C.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), E(I, C.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), E(I, C.FINISH, {
                    BEG: 669,
                    END: 870
                }), E(I, C.IDLE, {
                    BEG: 871,
                    END: 878
                }), I),
                b = function(e) {
                    L(a, e);
                    var n = T(a);

                    function a() {
                        S(this, a);
                        return n.apply(this, arguments)
                    }
                    var o = a.prototype;
                    o.importDefault = function() {
                        return t.e(27608).then(t.t.bind(t, 445191, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.onScenePlay,
                            o = e.onSceneComplete,
                            s = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(u.Z, {
                            className: i()(f().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: s ? C.IDLE : t,
                            sceneSegments: _,
                            onScenePlay: a,
                            onSceneComplete: o,
                            pauseWhileUnfocused: c,
                            pause: s
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.SPEED_START:
                                return a.Scenes.SPEED_LOOP;
                            case a.Scenes.FINISH:
                                return a.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            b.Scenes = C;
            ! function(e) {
                e.NORMAL = "normal";
                e.SPEED_START = "speed_start";
                e.SPEED_LOOP = "speed_loop";
                e.FINISH = "finish";
                e.IDLE = "idle"
            }(A || (A = {}));
            var R, v, P = (E(D = {}, A.NORMAL, {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                }), E(D, A.SPEED_START, {
                    BEG: 601,
                    END: 636
                }), E(D, A.SPEED_LOOP, {
                    BEG: 637,
                    END: 668
                }), E(D, A.FINISH, {
                    BEG: 669,
                    END: 870
                }), E(D, A.IDLE, {
                    BEG: 871,
                    END: 878
                }), D),
                x = function(e) {
                    L(a, e);
                    var n = T(a);

                    function a() {
                        S(this, a);
                        return n.apply(this, arguments)
                    }
                    var o = a.prototype;
                    o.importDefault = function() {
                        return t.e(64849).then(t.t.bind(t, 909412, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.onScenePlay,
                            o = e.onSceneComplete,
                            s = e.pause,
                            c = e.pauseWhileUnfocused;
                        return (0, r.jsx)(u.Z, {
                            className: i()(f().sequencedAnimation, n),
                            importData: this.importDefault,
                            nextScene: s ? A.IDLE : t,
                            sceneSegments: P,
                            onScenePlay: a,
                            onSceneComplete: o,
                            pauseWhileUnfocused: c,
                            pause: s
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.SPEED_START:
                                return a.Scenes.SPEED_LOOP;
                            case a.Scenes.FINISH:
                                return a.Scenes.IDLE;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            x.Scenes = A;
            ! function(e) {
                e.IDLE_ENTRY = "idle_entry";
                e.IDLE_LOOP = "idle_loop";
                e.BOOST_START = "boost_start";
                e.BOOST_LOOP = "boost_loop";
                e.BOOST_END = "boost_end";
                e.VICTORY = "victory";
                e.ERROR = "error"
            }(R || (R = {}));
            var j, w, B = (E(v = {}, R.IDLE_ENTRY, {
                    BEG: 0,
                    END: 50
                }), E(v, R.IDLE_LOOP, {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                }), E(v, R.BOOST_START, {
                    BEG: 230,
                    END: 275
                }), E(v, R.BOOST_LOOP, {
                    BEG: 275,
                    END: 290
                }), E(v, R.BOOST_END, {
                    BEG: 386,
                    END: 455
                }), E(v, R.VICTORY, {
                    BEG: 470,
                    END: 525
                }), E(v, R.ERROR, {
                    BEG: 290,
                    END: 375
                }), v),
                M = function(e) {
                    L(t, e);
                    var n = T(t);

                    function t() {
                        S(this, t);
                        return n.apply(this, arguments)
                    }
                    var a = t.prototype;
                    a.getStyle = function(e) {
                        var n = this.props.animation;
                        return {
                            transform: [{
                                translateX: n.x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                                })
                            }, {
                                translateY: n.y.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["100%", "0%"]
                                })
                            }]
                        }
                    };
                    a.render = function() {
                        var e = this.props.className;
                        return (0, r.jsxs)("div", {
                            className: f().panningAnimation,
                            children: [(0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!1)
                            }), (0, r.jsx)(c.Z.div, {
                                className: e,
                                style: this.getStyle(!0)
                            })]
                        })
                    };
                    return t
                }(a.PureComponent),
                Z = Object.freeze({
                    IDLE_ENTRY: {
                        toValue: 1,
                        duration: 1500
                    },
                    IDLE_LOOP: {
                        toValue: 1,
                        duration: 6e3,
                        easing: c.Z.Easing.linear
                    },
                    BOOST_START: {
                        toValue: 0,
                        duration: 2e3,
                        delay: 500
                    },
                    ERROR: {
                        toValue: 1,
                        duration: 1500,
                        delay: 1e3
                    }
                }),
                F = 1.2,
                G = function(e) {
                    L(a, e);
                    var n = T(a);

                    function a() {
                        S(this, a);
                        var e;
                        (e = n.apply(this, arguments)).backgroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.foregroundAnimation = new c.Z.ValueXY({
                            x: 0,
                            y: 0
                        });
                        e.didUnmount = !1;
                        e.animateIdleLoopBackground = function() {
                            if (!e.didUnmount) {
                                e.backgroundAnimation.x.setValue(0);
                                c.Z.timing(e.backgroundAnimation.x, {
                                    toValue: Z.IDLE_LOOP.toValue,
                                    duration: Z.IDLE_LOOP.duration * F,
                                    easing: c.Z.Easing.linear
                                }).start(e.animateIdleLoopBackground)
                            }
                        };
                        e.animateIdleLoopForeground = function() {
                            if (!e.didUnmount) {
                                e.foregroundAnimation.x.setValue(0);
                                c.Z.timing(e.foregroundAnimation.x, {
                                    toValue: Z.IDLE_LOOP.toValue,
                                    duration: Z.IDLE_LOOP.duration,
                                    easing: Z.IDLE_LOOP.easing
                                }).start(e.animateIdleLoopForeground)
                            }
                        };
                        e.handleScenePlay = function(n) {
                            switch (n) {
                                case R.IDLE_ENTRY:
                                    e.animateIdleEntry();
                                    e.animateIdleLoop();
                                    break;
                                case R.ERROR:
                                    e.animateError();
                                    break;
                                case R.BOOST_START:
                                    e.animateBoostStart()
                            }
                            var t = e.props.onScenePlay;
                            null != t && t(n)
                        };
                        return e
                    }
                    var o = a.prototype;
                    o.componentWillUnmount = function() {
                        this.didUnmount = !0
                    };
                    o.importData = function() {
                        return t.e(56576).then(t.t.bind(t, 219177, 19)).then((function(e) {
                            return e.default
                        }))
                    };
                    o.animateEntry = function(e) {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration,
                            delay: e.delay || 0
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: e.toValue,
                            duration: e.duration * F,
                            delay: e.delay || 0
                        })]).start()
                    };
                    o.animateIdleEntry = function() {
                        this.animateEntry(Z.IDLE_ENTRY)
                    };
                    o.animateError = function() {
                        this.animateEntry(Z.ERROR)
                    };
                    o.animateIdleLoop = function() {
                        this.animateIdleLoopBackground();
                        this.animateIdleLoopForeground()
                    };
                    o.animateBoostStart = function() {
                        c.Z.parallel([c.Z.timing(this.foregroundAnimation.y, {
                            toValue: Z.BOOST_START.toValue,
                            duration: Z.BOOST_START.duration,
                            delay: Z.BOOST_START.delay
                        }), c.Z.timing(this.backgroundAnimation.y, {
                            toValue: Z.BOOST_START.toValue,
                            duration: Z.BOOST_START.duration * F,
                            delay: Z.BOOST_START.delay
                        })]).start()
                    };
                    o.render = function() {
                        var e = this.props,
                            n = e.className,
                            t = e.nextScene,
                            a = e.pause,
                            o = e.onSceneComplete;
                        return (0, r.jsxs)("div", {
                            className: i()(f().tier2Animation, n),
                            children: [a ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsxs)("div", {
                                    className: f().panningAnimation,
                                    children: [(0, r.jsx)("div", {
                                        className: f().tier2Background
                                    }), (0, r.jsx)("div", {
                                        className: f().tier2Foreground
                                    })]
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(M, {
                                    className: f().tier2Background,
                                    animation: this.backgroundAnimation
                                }), (0, r.jsx)(M, {
                                    className: f().tier2Foreground,
                                    animation: this.foregroundAnimation
                                })]
                            }), (0, r.jsx)(u.Z, {
                                className: f().sequencedAnimation,
                                importData: this.importData,
                                nextScene: a ? R.IDLE_LOOP : t,
                                sceneSegments: B,
                                onScenePlay: this.handleScenePlay,
                                onSceneComplete: o,
                                pauseWhileUnfocused: !1,
                                pause: a
                            })]
                        })
                    };
                    a.getNextScene = function(e) {
                        switch (e) {
                            case a.Scenes.IDLE_ENTRY:
                                return a.Scenes.IDLE_LOOP;
                            case a.Scenes.BOOST_START:
                                return a.Scenes.BOOST_LOOP;
                            case a.Scenes.BOOST_END:
                                return a.Scenes.VICTORY;
                            case a.Scenes.VICTORY:
                                return a.Scenes.IDLE_ENTRY;
                            case a.Scenes.ERROR:
                                return a.Scenes.IDLE_LOOP;
                            default:
                                return e
                        }
                    };
                    return a
                }(a.PureComponent);
            G.Scenes = R;
            ! function(e) {
                e.ENTRY = "entry";
                e.IDLE = "idle";
                e.STARS = "stars";
                e.ERROR = "error";
                e.SUCCESS = "success"
            }(j || (j = {}));
            var H = (E(w = {}, j.ENTRY, {
                    BEG: 0,
                    END: 180
                }), E(w, j.IDLE, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(w, j.STARS, {
                    BEG: 180,
                    END: 360,
                    shouldForcePlayAfter: !0
                }), E(w, j.ERROR, {
                    BEG: 360,
                    END: 540
                }), E(w, j.SUCCESS, {
                    BEG: 540,
                    END: 778
                }), w),
                k = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                U = [{
                    left: 29,
                    top: 100,
                    color: k.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: k.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: k.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: k.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: k.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: k.PINK
                }],
                Y = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: c.Z.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: c.Z.Easing.bezier(0, -.01, .99, 0)
                });

            function V(e) {
                var n = e.animate,
                    t = O(a.useState(0), 2),
                    o = t[0],
                    i = t[1],
                    c = (0, s.useSprings)(U.length, U.map((function(e, t) {
                        var r, a, s = t > 0 ? Y.DELAY_STAGGER * t + Math.random() * (Y.DELAY_MAX - Y.DELAY_MIN) + Y.DELAY_MIN : 0,
                            c = Math.random() * (Y.SIZE_MAX - Y.SIZE_MIN) + Y.SIZE_MIN;
                        return {
                            from: {
                                scale: Y.SCALE_INITIAL,
                                rotate: Y.ROTATE_INITIAL,
                                top: e.top,
                                left: e.left,
                                width: c,
                                height: c
                            },
                            to: (a = (r = function(e) {
                                return g(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return n ? [4, e({
                                                scale: Y.SCALE_MIDDLE,
                                                rotate: Y.ROTATE_MIDDLE,
                                                delay: s,
                                                config: {
                                                    duration: Y.DURATION_MIDDLE,
                                                    easing: Y.EASING_MIDDLE
                                                }
                                            })] : [3, 4];
                                        case 1:
                                            r.sent();
                                            return [4, e({
                                                scale: Y.SCALE_END,
                                                rotate: Y.ROTATE_END,
                                                config: {
                                                    duration: Y.DURATION_END,
                                                    easing: Y.EASING_END
                                                }
                                            })];
                                        case 2:
                                            r.sent();
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL,
                                                immediate: !0
                                            })];
                                        case 3:
                                            r.sent();
                                            t === U.length - 1 && i(o + 1);
                                            return [3, 6];
                                        case 4:
                                            return [4, e({
                                                scale: Y.SCALE_INITIAL,
                                                rotate: Y.ROTATE_INITIAL
                                            })];
                                        case 5:
                                            r.sent();
                                            r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(t, a) {
                                    var o = r.apply(e, n);

                                    function i(e) {
                                        d(o, t, a, i, s, "next", e)
                                    }

                                    function s(e) {
                                        d(o, t, a, i, s, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            }), function(e) {
                                return a.apply(this, arguments)
                            })
                        }
                    })));
                return (0, r.jsx)(r.Fragment, {
                    children: c.map((function(e, n) {
                        var t = U[n];
                        return (0, r.jsx)(s.animated.svg, {
                            style: e,
                            className: f().guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, r.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: t.color
                            })
                        }, n)
                    }))
                })
            }
            var W = function(e) {
                L(a, e);
                var n = T(a);

                function a() {
                    S(this, a);
                    return n.apply(this, arguments)
                }
                var o = a.prototype;
                o.importData = function() {
                    return t.e(85789).then(t.t.bind(t, 632500, 19)).then((function(e) {
                        return e.default
                    }))
                };
                o.render = function() {
                    var e = this.props,
                        n = e.className,
                        t = e.nextScene,
                        a = e.pause,
                        o = e.onScenePlay,
                        s = e.onSceneComplete,
                        c = e.pauseWhileUnfocused;
                    return (0, r.jsxs)("div", {
                        className: i()(f().guildWrapper, n),
                        children: [(0, r.jsx)(u.Z, {
                            className: f().guildBackground,
                            importData: this.importData,
                            nextScene: a ? j.IDLE : t,
                            sceneSegments: H,
                            onScenePlay: o,
                            onSceneComplete: s,
                            pauseWhileUnfocused: c,
                            pause: a
                        }), (0, r.jsx)(V, {
                            animate: !a && t === j.STARS
                        })]
                    })
                };
                a.getNextScene = function(e) {
                    switch (e) {
                        case j.ENTRY:
                        case j.ERROR:
                        case j.SUCCESS:
                            return j.IDLE;
                        default:
                            return e
                    }
                };
                return a
            }(a.PureComponent);
            W.Scenes = j
        }
    }
]);