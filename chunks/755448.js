var n = 30,
    r = 12;
e.exports = function (e, i) {
    var a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, I, T, b, y, S, A, N, C, R, O;
    (a = e.state), (s = e.next_in), (R = e.input), (o = s + (e.avail_in - 5)), (l = e.next_out), (O = e.output), (u = l - (i - e.avail_out)), (c = l + (e.avail_out - 257)), (d = a.dmax), (f = a.wsize), (_ = a.whave), (h = a.wnext), (p = a.window), (m = a.hold), (g = a.bits), (E = a.lencode), (v = a.distcode), (I = (1 << a.lenbits) - 1), (T = (1 << a.distbits) - 1);
    n: do
        for (g < 15 && ((m += R[s++] << g), (g += 8), (m += R[s++] << g), (g += 8)), b = E[m & I]; ; ) {
            if (((m >>>= y = b >>> 24), (g -= y), 0 == (y = (b >>> 16) & 255))) O[l++] = 65535 & b;
            else if (16 & y)
                for (S = 65535 & b, (y &= 15) && (g < y && ((m += R[s++] << g), (g += 8)), (S += m & ((1 << y) - 1)), (m >>>= y), (g -= y)), g < 15 && ((m += R[s++] << g), (g += 8), (m += R[s++] << g), (g += 8)), b = v[m & T]; ; ) {
                    if (((m >>>= y = b >>> 24), (g -= y), 16 & (y = (b >>> 16) & 255))) {
                        if (((A = 65535 & b), g < (y &= 15) && ((m += R[s++] << g), (g += 8) < y && ((m += R[s++] << g), (g += 8))), (A += m & ((1 << y) - 1)) > d)) {
                            (e.msg = 'invalid distance too far back'), (a.mode = n);
                            break n;
                        }
                        if (((m >>>= y), (g -= y), A > (y = l - u))) {
                            if ((y = A - y) > _ && a.sane) {
                                (e.msg = 'invalid distance too far back'), (a.mode = n);
                                break n;
                            }
                            if (((N = 0), (C = p), 0 === h)) {
                                if (((N += f - y), y < S)) {
                                    S -= y;
                                    do O[l++] = p[N++];
                                    while (--y);
                                    (N = l - A), (C = O);
                                }
                            } else if (h < y) {
                                if (((N += f + h - y), (y -= h) < S)) {
                                    S -= y;
                                    do O[l++] = p[N++];
                                    while (--y);
                                    if (((N = 0), h < S)) {
                                        S -= y = h;
                                        do O[l++] = p[N++];
                                        while (--y);
                                        (N = l - A), (C = O);
                                    }
                                }
                            } else if (((N += h - y), y < S)) {
                                S -= y;
                                do O[l++] = p[N++];
                                while (--y);
                                (N = l - A), (C = O);
                            }
                            for (; S > 2; ) (O[l++] = C[N++]), (O[l++] = C[N++]), (O[l++] = C[N++]), (S -= 3);
                            S && ((O[l++] = C[N++]), S > 1 && (O[l++] = C[N++]));
                        } else {
                            N = l - A;
                            do (O[l++] = O[N++]), (O[l++] = O[N++]), (O[l++] = O[N++]), (S -= 3);
                            while (S > 2);
                            S && ((O[l++] = O[N++]), S > 1 && (O[l++] = O[N++]));
                        }
                    } else if ((64 & y) == 0) {
                        b = v[(65535 & b) + (m & ((1 << y) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (a.mode = n);
                        break n;
                    }
                    break;
                }
            else if ((64 & y) == 0) {
                b = E[(65535 & b) + (m & ((1 << y) - 1))];
                continue;
            } else if (32 & y) {
                a.mode = r;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (a.mode = n);
                break n;
            }
            break;
        }
    while (s < o && l < c);
    (s -= S = g >> 3), (g -= S << 3), (m &= (1 << g) - 1), (e.next_in = s), (e.next_out = l), (e.avail_in = s < o ? 5 + (o - s) : 5 - (s - o)), (e.avail_out = l < c ? 257 + (c - l) : 257 - (l - c)), (a.hold = m), (a.bits = g);
};
