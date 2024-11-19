e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, b, I, T, S, y, A, N;
    (n = e.state), (r = e.next_in), (A = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (N = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (f = n.window), (_ = n.hold), (p = n.bits), (h = n.lencode), (m = n.distcode), (g = (1 << n.lenbits) - 1), (E = (1 << n.distbits) - 1);
    n: do
        for (p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = h[_ & g]; ; ) {
            if (((_ >>>= b = v >>> 24), (p -= b), 0 == (b = (v >>> 16) & 255))) N[a++] = 65535 & v;
            else if (16 & b)
                for (I = 65535 & v, (b &= 15) && (p < b && ((_ += A[r++] << p), (p += 8)), (I += _ & ((1 << b) - 1)), (_ >>>= b), (p -= b)), p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = m[_ & E]; ; ) {
                    if (((_ >>>= b = v >>> 24), (p -= b), 16 & (b = (v >>> 16) & 255))) {
                        if (((T = 65535 & v), p < (b &= 15) && ((_ += A[r++] << p), (p += 8) < b && ((_ += A[r++] << p), (p += 8))), (T += _ & ((1 << b) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((_ >>>= b), (p -= b), T > (b = a - s))) {
                            if ((b = T - b) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((S = 0), (y = f), 0 === d)) {
                                if (((S += u - b), b < I)) {
                                    I -= b;
                                    do N[a++] = f[S++];
                                    while (--b);
                                    (S = a - T), (y = N);
                                }
                            } else if (d < b) {
                                if (((S += u + d - b), (b -= d) < I)) {
                                    I -= b;
                                    do N[a++] = f[S++];
                                    while (--b);
                                    if (((S = 0), d < I)) {
                                        I -= b = d;
                                        do N[a++] = f[S++];
                                        while (--b);
                                        (S = a - T), (y = N);
                                    }
                                }
                            } else if (((S += d - b), b < I)) {
                                I -= b;
                                do N[a++] = f[S++];
                                while (--b);
                                (S = a - T), (y = N);
                            }
                            for (; I > 2; ) (N[a++] = y[S++]), (N[a++] = y[S++]), (N[a++] = y[S++]), (I -= 3);
                            I && ((N[a++] = y[S++]), I > 1 && (N[a++] = y[S++]));
                        } else {
                            S = a - T;
                            do (N[a++] = N[S++]), (N[a++] = N[S++]), (N[a++] = N[S++]), (I -= 3);
                            while (I > 2);
                            I && ((N[a++] = N[S++]), I > 1 && (N[a++] = N[S++]));
                        }
                    } else if ((64 & b) == 0) {
                        v = m[(65535 & v) + (_ & ((1 << b) - 1))];
                        continue;
                    } else {
                        (e.msg = 'invalid distance code'), (n.mode = 30);
                        break n;
                    }
                    break;
                }
            else if ((64 & b) == 0) {
                v = h[(65535 & v) + (_ & ((1 << b) - 1))];
                continue;
            } else if (32 & b) {
                n.mode = 12;
                break n;
            } else {
                (e.msg = 'invalid literal/length code'), (n.mode = 30);
                break n;
            }
            break;
        }
    while (r < i && a < o);
    (r -= I = p >> 3), (p -= I << 3), (_ &= (1 << p) - 1), (e.next_in = r), (e.next_out = a), (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)), (e.avail_out = a < o ? 257 + (o - a) : 257 - (a - o)), (n.hold = _), (n.bits = p);
};
