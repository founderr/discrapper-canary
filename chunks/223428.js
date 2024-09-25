var r = n(585559),
    i = n(771378),
    a = n(778247),
    o = n(780177),
    s = n(585754),
    l = n(957578).Buffer;
function u(e) {
    'object' == typeof e && !l.isBuffer(e) && ((t = e.passphrase), (e = e.key)), 'string' == typeof e && (e = l.from(e));
    var t,
        n,
        i,
        o = a(e, t),
        s = o.tag,
        u = o.data;
    switch (s) {
        case 'CERTIFICATE':
            i = r.certificate.decode(u, 'der').tbsCertificate.subjectPublicKeyInfo;
        case 'PUBLIC KEY':
            switch ((!i && (i = r.PublicKey.decode(u, 'der')), (n = i.algorithm.algorithm.join('.')))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPublicKey.decode(i.subjectPublicKey.data, 'der');
                case '1.2.840.10045.2.1':
                    return (
                        (i.subjectPrivateKey = i.subjectPublicKey),
                        {
                            type: 'ec',
                            data: i
                        }
                    );
                case '1.2.840.10040.4.1':
                    return (
                        (i.algorithm.params.pub_key = r.DSAparam.decode(i.subjectPublicKey.data, 'der')),
                        {
                            type: 'dsa',
                            data: i.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'ENCRYPTED PRIVATE KEY':
            u = c((u = r.EncryptedPrivateKey.decode(u, 'der')), t);
        case 'PRIVATE KEY':
            switch ((n = (i = r.PrivateKey.decode(u, 'der')).algorithm.algorithm.join('.'))) {
                case '1.2.840.113549.1.1.1':
                    return r.RSAPrivateKey.decode(i.subjectPrivateKey, 'der');
                case '1.2.840.10045.2.1':
                    return {
                        curve: i.algorithm.curve,
                        privateKey: r.ECPrivateKey.decode(i.subjectPrivateKey, 'der').privateKey
                    };
                case '1.2.840.10040.4.1':
                    return (
                        (i.algorithm.params.priv_key = r.DSAparam.decode(i.subjectPrivateKey, 'der')),
                        {
                            type: 'dsa',
                            params: i.algorithm.params
                        }
                    );
                default:
                    throw Error('unknown key id ' + n);
            }
        case 'RSA PUBLIC KEY':
            return r.RSAPublicKey.decode(u, 'der');
        case 'RSA PRIVATE KEY':
            return r.RSAPrivateKey.decode(u, 'der');
        case 'DSA PRIVATE KEY':
            return {
                type: 'dsa',
                params: r.DSAPrivateKey.decode(u, 'der')
            };
        case 'EC PRIVATE KEY':
            return {
                curve: (u = r.ECPrivateKey.decode(u, 'der')).parameters.value,
                privateKey: u.privateKey
            };
        default:
            throw Error('unknown key type ' + s);
    }
}
function c(e, t) {
    var n = e.algorithm.decrypt.kde.kdeparams.salt,
        r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
        a = i[e.algorithm.decrypt.cipher.algo.join('.')],
        u = e.algorithm.decrypt.cipher.iv,
        c = e.subjectPrivateKey,
        d = parseInt(a.split('-')[1], 10) / 8,
        _ = s.pbkdf2Sync(t, n, r, d, 'sha1'),
        E = o.createDecipheriv(a, _, u),
        f = [];
    return f.push(E.update(c)), f.push(E.final()), l.concat(f);
}
(e.exports = u), (u.signature = r.signature);
