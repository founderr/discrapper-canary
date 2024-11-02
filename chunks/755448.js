e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, I, S, T, b, y, A, N;
    (n = e.state), (r = e.next_in), (A = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (N = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (f = n.window), (_ = n.hold), (h = n.bits), (p = n.lencode), (m = n.distcode), (g = (1 << n.lenbits) - 1), (E = (1 << n.distbits) - 1);
    n: do
        for (h < 15 && ((_ += A[r++] << h), (h += 8), (_ += A[r++] << h), (h += 8)), v = p[_ & g]; ; ) {
            if (((_ >>>= I = v >>> 24), (h -= I), 0 == (I = (v >>> 16) & 255))) N[a++] = 65535 & v;
            else if (16 & I)
                for (S = 65535 & v, (I &= 15) && (h < I && ((_ += A[r++] << h), (h += 8)), (S += _ & ((1 << I) - 1)), (_ >>>= I), (h -= I)), h < 15 && ((_ += A[r++] << h), (h += 8), (_ += A[r++] << h), (h += 8)), v = m[_ & E]; ; ) {
                    if (((_ >>>= I = v >>> 24), (h -= I), 16 & (I = (v >>> 16) & 255))) {
                        if (((T = 65535 & v), h < (I &= 15) && ((_ += A[r++] << h), (h += 8) < I && ((_ += A[r++] << h), (h += 8))), (T += _ & ((1 << I) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((_ >>>= I), (h -= I), T > (I = a - s))) {
                            if ((I = T - I) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((b = 0), (y = f), 0 === d)) {
                                if (((b += u - I), I < S)) {
                                    S -= I;
                                    do N[a++] = f[b++];
                                    while (--I);
                                    (b = a - T), (y = N);
                                }
                            } else if (d < I) {
                                if (((b += u + d - I), (I -= d) < S)) {
                                    S -= I;
                                    do N[a++] = f[b++];
                                    while (--I);
                                    if (((b = 0), d < S)) {
                                        S -= I = d;
                                        do N[a++] = f[b++];
                                        while (--I);
                                        (b = a - T), (y = N);
                                    }
                                }
                            } else if (((b += d - I), I < S)) {
                                S -= I;
                                do N[a++] = f[b++];
                                while (--I);
                                (b = a - T), (y = N);
                            }
                            for (; S > 2; ) (N[a++] = y[b++]), (N[a++] = y[b++]), (N[a++] = y[b++]), (S -= 3);
                            S && ((N[a++] = y[b++]), S > 1 && (N[a++] = y[b++]));
                        } else {
                            b = a - T;
                            do (N[a++] = N[b++]), (N[a++] = N[b++]), (N[a++] = N[b++]), (S -= 3);
                            while (S > 2);
                            S && ((N[a++] = N[b++]), S > 1 && (N[a++] = N[b++]));
                        }
                    } else if ((64 & I) == 0) {
                        v = m[(65535 & v) + (_ & ((1 << I) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (n.mode = 30);
                        break n;
                    }
                    break;
                }
            else if ((64 & I) == 0) {
                v = p[(65535 & v) + (_ & ((1 << I) - 1))];
                continue;
            } else if (32 & I) {
                n.mode = 12;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (n.mode = 30);
                break n;
            }
            break;
        }
    while (r < i && a < o);
    (r -= S = h >> 3), (h -= S << 3), (_ &= (1 << h) - 1), (e.next_in = r), (e.next_out = a), (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)), (e.avail_out = a < o ? 257 + (o - a) : 257 - (a - o)), (n.hold = _), (n.bits = h);
};
