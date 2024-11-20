e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, I, b, T, S, y, A, N;
    (n = e.state), (r = e.next_in), (A = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (N = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (f = n.window), (_ = n.hold), (p = n.bits), (h = n.lencode), (m = n.distcode), (g = (1 << n.lenbits) - 1), (E = (1 << n.distbits) - 1);
    n: do
        for (p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = h[_ & g]; ; ) {
            if (((_ >>>= I = v >>> 24), (p -= I), 0 == (I = (v >>> 16) & 255))) N[a++] = 65535 & v;
            else if (16 & I)
                for (b = 65535 & v, (I &= 15) && (p < I && ((_ += A[r++] << p), (p += 8)), (b += _ & ((1 << I) - 1)), (_ >>>= I), (p -= I)), p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = m[_ & E]; ; ) {
                    if (((_ >>>= I = v >>> 24), (p -= I), 16 & (I = (v >>> 16) & 255))) {
                        if (((T = 65535 & v), p < (I &= 15) && ((_ += A[r++] << p), (p += 8) < I && ((_ += A[r++] << p), (p += 8))), (T += _ & ((1 << I) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((_ >>>= I), (p -= I), T > (I = a - s))) {
                            if ((I = T - I) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((S = 0), (y = f), 0 === d)) {
                                if (((S += u - I), I < b)) {
                                    b -= I;
                                    do N[a++] = f[S++];
                                    while (--I);
                                    (S = a - T), (y = N);
                                }
                            } else if (d < I) {
                                if (((S += u + d - I), (I -= d) < b)) {
                                    b -= I;
                                    do N[a++] = f[S++];
                                    while (--I);
                                    if (((S = 0), d < b)) {
                                        b -= I = d;
                                        do N[a++] = f[S++];
                                        while (--I);
                                        (S = a - T), (y = N);
                                    }
                                }
                            } else if (((S += d - I), I < b)) {
                                b -= I;
                                do N[a++] = f[S++];
                                while (--I);
                                (S = a - T), (y = N);
                            }
                            for (; b > 2; ) (N[a++] = y[S++]), (N[a++] = y[S++]), (N[a++] = y[S++]), (b -= 3);
                            b && ((N[a++] = y[S++]), b > 1 && (N[a++] = y[S++]));
                        } else {
                            S = a - T;
                            do (N[a++] = N[S++]), (N[a++] = N[S++]), (N[a++] = N[S++]), (b -= 3);
                            while (b > 2);
                            b && ((N[a++] = N[S++]), b > 1 && (N[a++] = N[S++]));
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
                v = h[(65535 & v) + (_ & ((1 << I) - 1))];
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
    (r -= b = p >> 3), (p -= b << 3), (_ &= (1 << p) - 1), (e.next_in = r), (e.next_out = a), (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)), (e.avail_out = a < o ? 257 + (o - a) : 257 - (a - o)), (n.hold = _), (n.bits = p);
};
