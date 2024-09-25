var t = 30,
    n = 12;
e.exports = function (e, r) {
    var i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, v, N, O, R, C, y;
    (i = e.state), (a = e.next_in), (C = e.input), (o = a + (e.avail_in - 5)), (s = e.next_out), (y = e.output), (l = s - (r - e.avail_out)), (u = s + (e.avail_out - 257)), (c = i.dmax), (d = i.wsize), (_ = i.whave), (E = i.wnext), (f = i.window), (h = i.hold), (p = i.bits), (m = i.lencode), (I = i.distcode), (T = (1 << i.lenbits) - 1), (g = (1 << i.distbits) - 1);
    n: do
        for (p < 15 && ((h += C[a++] << p), (p += 8), (h += C[a++] << p), (p += 8)), S = m[h & T]; ; ) {
            if (((h >>>= A = S >>> 24), (p -= A), 0 == (A = (S >>> 16) & 255))) y[s++] = 65535 & S;
            else if (16 & A)
                for (v = 65535 & S, (A &= 15) && (p < A && ((h += C[a++] << p), (p += 8)), (v += h & ((1 << A) - 1)), (h >>>= A), (p -= A)), p < 15 && ((h += C[a++] << p), (p += 8), (h += C[a++] << p), (p += 8)), S = I[h & g]; ; ) {
                    if (((h >>>= A = S >>> 24), (p -= A), 16 & (A = (S >>> 16) & 255))) {
                        if (((N = 65535 & S), p < (A &= 15) && ((h += C[a++] << p), (p += 8) < A && ((h += C[a++] << p), (p += 8))), (N += h & ((1 << A) - 1)) > c)) {
                            (e.msg = 'invalid distance too far back'), (i.mode = t);
                            break n;
                        }
                        if (((h >>>= A), (p -= A), N > (A = s - l))) {
                            if ((A = N - A) > _ && i.sane) {
                                (e.msg = 'invalid distance too far back'), (i.mode = t);
                                break n;
                            }
                            if (((O = 0), (R = f), 0 === E)) {
                                if (((O += d - A), A < v)) {
                                    v -= A;
                                    do y[s++] = f[O++];
                                    while (--A);
                                    (O = s - N), (R = y);
                                }
                            } else if (E < A) {
                                if (((O += d + E - A), (A -= E) < v)) {
                                    v -= A;
                                    do y[s++] = f[O++];
                                    while (--A);
                                    if (((O = 0), E < v)) {
                                        v -= A = E;
                                        do y[s++] = f[O++];
                                        while (--A);
                                        (O = s - N), (R = y);
                                    }
                                }
                            } else if (((O += E - A), A < v)) {
                                v -= A;
                                do y[s++] = f[O++];
                                while (--A);
                                (O = s - N), (R = y);
                            }
                            for (; v > 2; ) (y[s++] = R[O++]), (y[s++] = R[O++]), (y[s++] = R[O++]), (v -= 3);
                            v && ((y[s++] = R[O++]), v > 1 && (y[s++] = R[O++]));
                        } else {
                            O = s - N;
                            do (y[s++] = y[O++]), (y[s++] = y[O++]), (y[s++] = y[O++]), (v -= 3);
                            while (v > 2);
                            v && ((y[s++] = y[O++]), v > 1 && (y[s++] = y[O++]));
                        }
                    } else if ((64 & A) == 0) {
                        S = I[(65535 & S) + (h & ((1 << A) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (i.mode = t);
                        break n;
                    }
                    break;
                }
            else if ((64 & A) == 0) {
                S = m[(65535 & S) + (h & ((1 << A) - 1))];
                continue;
            } else if (32 & A) {
                i.mode = n;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (i.mode = t);
                break n;
            }
            break;
        }
    while (a < o && s < u);
    (a -= v = p >> 3), (p -= v << 3), (h &= (1 << p) - 1), (e.next_in = a), (e.next_out = s), (e.avail_in = a < o ? 5 + (o - a) : 5 - (a - o)), (e.avail_out = s < u ? 257 + (u - s) : 257 - (s - u)), (i.hold = h), (i.bits = p);
};
