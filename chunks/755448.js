e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, _, E, f, h, p, I, m, T, S, g, A, N, O, R, v;
    (n = e.state), (r = e.next_in), (R = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (v = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (_ = n.window), (E = n.hold), (f = n.bits), (h = n.lencode), (p = n.distcode), (I = (1 << n.lenbits) - 1), (m = (1 << n.distbits) - 1);
    n: do
        for (f < 15 && ((E += R[r++] << f), (f += 8), (E += R[r++] << f), (f += 8)), T = h[E & I]; ; ) {
            if (((E >>>= S = T >>> 24), (f -= S), 0 == (S = (T >>> 16) & 255))) v[a++] = 65535 & T;
            else if (16 & S)
                for (g = 65535 & T, (S &= 15) && (f < S && ((E += R[r++] << f), (f += 8)), (g += E & ((1 << S) - 1)), (E >>>= S), (f -= S)), f < 15 && ((E += R[r++] << f), (f += 8), (E += R[r++] << f), (f += 8)), T = p[E & m]; ; ) {
                    if (((E >>>= S = T >>> 24), (f -= S), 16 & (S = (T >>> 16) & 255))) {
                        if (((A = 65535 & T), f < (S &= 15) && ((E += R[r++] << f), (f += 8) < S && ((E += R[r++] << f), (f += 8))), (A += E & ((1 << S) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((E >>>= S), (f -= S), A > (S = a - s))) {
                            if ((S = A - S) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((N = 0), (O = _), 0 === d)) {
                                if (((N += u - S), S < g)) {
                                    g -= S;
                                    do v[a++] = _[N++];
                                    while (--S);
                                    (N = a - A), (O = v);
                                }
                            } else if (d < S) {
                                if (((N += u + d - S), (S -= d) < g)) {
                                    g -= S;
                                    do v[a++] = _[N++];
                                    while (--S);
                                    if (((N = 0), d < g)) {
                                        g -= S = d;
                                        do v[a++] = _[N++];
                                        while (--S);
                                        (N = a - A), (O = v);
                                    }
                                }
                            } else if (((N += d - S), S < g)) {
                                g -= S;
                                do v[a++] = _[N++];
                                while (--S);
                                (N = a - A), (O = v);
                            }
                            for (; g > 2; ) (v[a++] = O[N++]), (v[a++] = O[N++]), (v[a++] = O[N++]), (g -= 3);
                            g && ((v[a++] = O[N++]), g > 1 && (v[a++] = O[N++]));
                        } else {
                            N = a - A;
                            do (v[a++] = v[N++]), (v[a++] = v[N++]), (v[a++] = v[N++]), (g -= 3);
                            while (g > 2);
                            g && ((v[a++] = v[N++]), g > 1 && (v[a++] = v[N++]));
                        }
                    } else if ((64 & S) == 0) {
                        T = p[(65535 & T) + (E & ((1 << S) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (n.mode = 30);
                        break n;
                    }
                    break;
                }
            else if ((64 & S) == 0) {
                T = h[(65535 & T) + (E & ((1 << S) - 1))];
                continue;
            } else if (32 & S) {
                n.mode = 12;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (n.mode = 30);
                break n;
            }
            break;
        }
    while (r < i && a < o);
    (r -= g = f >> 3), (f -= g << 3), (E &= (1 << f) - 1), (e.next_in = r), (e.next_out = a), (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)), (e.avail_out = a < o ? 257 + (o - a) : 257 - (a - o)), (n.hold = E), (n.bits = f);
};
