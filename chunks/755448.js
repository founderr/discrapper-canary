e.exports = function (e, t) {
    var n, r, i, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, I, b, S, T, y, A, N;
    (n = e.state), (r = e.next_in), (A = e.input), (i = r + (e.avail_in - 5)), (a = e.next_out), (N = e.output), (s = a - (t - e.avail_out)), (o = a + (e.avail_out - 257)), (l = n.dmax), (u = n.wsize), (c = n.whave), (d = n.wnext), (f = n.window), (_ = n.hold), (p = n.bits), (h = n.lencode), (m = n.distcode), (g = (1 << n.lenbits) - 1), (E = (1 << n.distbits) - 1);
    n: do
        for (p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = h[_ & g]; ; ) {
            if (((_ >>>= I = v >>> 24), (p -= I), 0 == (I = (v >>> 16) & 255))) N[a++] = 65535 & v;
            else if (16 & I)
                for (b = 65535 & v, (I &= 15) && (p < I && ((_ += A[r++] << p), (p += 8)), (b += _ & ((1 << I) - 1)), (_ >>>= I), (p -= I)), p < 15 && ((_ += A[r++] << p), (p += 8), (_ += A[r++] << p), (p += 8)), v = m[_ & E]; ; ) {
                    if (((_ >>>= I = v >>> 24), (p -= I), 16 & (I = (v >>> 16) & 255))) {
                        if (((S = 65535 & v), p < (I &= 15) && ((_ += A[r++] << p), (p += 8) < I && ((_ += A[r++] << p), (p += 8))), (S += _ & ((1 << I) - 1)) > l)) {
                            (e.msg = 'invalid distance too far back'), (n.mode = 30);
                            break n;
                        }
                        if (((_ >>>= I), (p -= I), S > (I = a - s))) {
                            if ((I = S - I) > c && n.sane) {
                                (e.msg = 'invalid distance too far back'), (n.mode = 30);
                                break n;
                            }
                            if (((T = 0), (y = f), 0 === d)) {
                                if (((T += u - I), I < b)) {
                                    b -= I;
                                    do N[a++] = f[T++];
                                    while (--I);
                                    (T = a - S), (y = N);
                                }
                            } else if (d < I) {
                                if (((T += u + d - I), (I -= d) < b)) {
                                    b -= I;
                                    do N[a++] = f[T++];
                                    while (--I);
                                    if (((T = 0), d < b)) {
                                        b -= I = d;
                                        do N[a++] = f[T++];
                                        while (--I);
                                        (T = a - S), (y = N);
                                    }
                                }
                            } else if (((T += d - I), I < b)) {
                                b -= I;
                                do N[a++] = f[T++];
                                while (--I);
                                (T = a - S), (y = N);
                            }
                            for (; b > 2; ) (N[a++] = y[T++]), (N[a++] = y[T++]), (N[a++] = y[T++]), (b -= 3);
                            b && ((N[a++] = y[T++]), b > 1 && (N[a++] = y[T++]));
                        } else {
                            T = a - S;
                            do (N[a++] = N[T++]), (N[a++] = N[T++]), (N[a++] = N[T++]), (b -= 3);
                            while (b > 2);
                            b && ((N[a++] = N[T++]), b > 1 && (N[a++] = N[T++]));
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
