n.d(t, {
    $z: function () {
        return y;
    },
    D0: function () {
        return m;
    },
    JC: function () {
        return O;
    },
    Om: function () {
        return N;
    },
    Sf: function () {
        return f;
    },
    U4: function () {
        return R;
    },
    Vg: function () {
        return p;
    },
    Xc: function () {
        return v;
    },
    ZP: function () {
        return d;
    },
    dm: function () {
        return _;
    },
    fv: function () {
        return h;
    },
    jc: function () {
        return I;
    },
    kX: function () {
        return S;
    },
    o_: function () {
        return g;
    },
    qo: function () {
        return E;
    },
    sn: function () {
        return T;
    },
    u_: function () {
        return C;
    },
    z: function () {
        return A;
    }
});
var r = n(789020);
var i = n(411104);
var a = n(81825),
    o = n(770555),
    s = n(630388),
    l = n(823379),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class d extends a.Z {
    static createFromServer(e) {
        var t;
        let n = null !== (t = e.billing_address) && void 0 !== t ? t : {},
            r = {
                id: e.id,
                type: e.type,
                paymentGateway: e.payment_gateway,
                invalid: e.invalid,
                isDefault: e.default,
                billingAddress: {
                    name: n.name,
                    line1: n.line_1,
                    line2: n.line_2,
                    city: n.city,
                    postalCode: n.postal_code,
                    state: n.state,
                    country: n.country
                },
                country: e.country,
                flags: e.flags
            };
        switch (e.type) {
            case u.HeQ.CARD:
                return new _({
                    ...r,
                    brand: e.brand,
                    last4: e.last_4,
                    expiresMonth: e.expires_month,
                    expiresYear: e.expires_year
                });
            case u.HeQ.PAYPAL:
                return new E({
                    ...r,
                    email: e.email
                });
            case u.HeQ.VENMO:
                return new v({
                    ...r,
                    username: e.username
                });
            case u.HeQ.SEPA_DEBIT:
            case u.HeQ.SOFORT:
                return new f({
                    ...r,
                    email: e.email
                });
            case u.HeQ.GIROPAY:
                return new h({ ...r });
            case u.HeQ.PRZELEWY24:
                return new p({
                    ...r,
                    email: e.email,
                    bank: e.bank
                });
            case u.HeQ.EPS:
                return new m({
                    ...r,
                    bank: e.bank
                });
            case u.HeQ.PAYSAFE_CARD:
                return new T({ ...r });
            case u.HeQ.GCASH:
                return new g({ ...r });
            case u.HeQ.GRABPAY_MY:
                return new S({ ...r });
            case u.HeQ.MOMO_WALLET:
                return new A({ ...r });
            case u.HeQ.KAKAOPAY:
                return new N({ ...r });
            case u.HeQ.GOPAY_WALLET:
                return new O({ ...r });
            case u.HeQ.BANCONTACT:
                return new R({ ...r });
            case u.HeQ.IDEAL:
                return new I({
                    ...r,
                    bank: e.bank
                });
            case u.HeQ.CASH_APP:
                return new C({
                    ...r,
                    username: e.username
                });
            default:
                (0, l.vE)(e);
        }
    }
    static createFromSerialized(e) {
        let t = e.type;
        switch (t) {
            case u.HeQ.CARD:
                return new _(e);
            case u.HeQ.PAYPAL:
                return new E(e);
            case u.HeQ.SOFORT:
            case u.HeQ.SEPA_DEBIT:
                return new f(e);
            case u.HeQ.GIROPAY:
                return new h(e);
            case u.HeQ.PRZELEWY24:
                return new p(e);
            case u.HeQ.PAYSAFE_CARD:
                return new T(e);
            case u.HeQ.GCASH:
                return new g(e);
            case u.HeQ.GRABPAY_MY:
                return new S(e);
            case u.HeQ.MOMO_WALLET:
                return new A(e);
            case u.HeQ.VENMO:
                return new v(e);
            case u.HeQ.KAKAOPAY:
                return new N(e);
            case u.HeQ.GOPAY_WALLET:
                return new O(e);
            case u.HeQ.BANCONTACT:
                return new R(e);
            case u.HeQ.EPS:
                return new m(e);
            case u.HeQ.IDEAL:
                return new I(e);
            case u.HeQ.CASH_APP:
                return new C(e);
            default:
                (0, l.vE)(t);
        }
    }
    hasFlag(e) {
        return (0, s.yE)(this.flags, e);
    }
    get paymentMethodCountry() {
        return null != this.country && '' !== this.country ? this.country : this.billingAddress.country;
    }
    canRedeemTrial() {
        let { enabled: e } = o.Z.getCurrentConfig({ location: '3a6d55_1' });
        return this.paymentGateway === u.gg$.ADYEN && this.type === u.HeQ.CASH_APP ? e : !u.H0J.has(this.type);
    }
    constructor(e) {
        var t, n, r, i;
        if ((super(), c(this, 'id', void 0), c(this, 'type', void 0), c(this, 'paymentGateway', void 0), c(this, 'billingAddress', void 0), c(this, 'country', void 0), c(this, 'invalid', void 0), c(this, 'isDefault', void 0), c(this, 'flags', void 0), c(this, 'email', void 0), c(this, 'brand', void 0), c(this, 'bank', void 0), c(this, 'username', void 0), !Object.values(u.HeQ).includes(e.type))) throw Error('Unrecognized payment source type '.concat(e.type));
        (this.id = e.id), (this.type = e.type), (this.paymentGateway = e.paymentGateway), (this.invalid = null !== (t = e.invalid) && void 0 !== t && t), (this.billingAddress = null !== (n = e.billingAddress) && void 0 !== n ? n : {}), (this.isDefault = e.isDefault), (this.flags = null !== (r = e.flags) && void 0 !== r ? r : 0), (this.country = null !== (i = e.country) && void 0 !== i ? i : '');
    }
}
class _ extends d {
    constructor(e) {
        var t, n, r, i;
        if ((super(e), c(this, 'brand', void 0), c(this, 'last4', void 0), c(this, 'expiresMonth', void 0), c(this, 'expiresYear', void 0), e.type !== u.HeQ.CARD)) throw Error('Cannot instantiate CreditCardSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.CARD));
        (this.brand = null !== (t = e.brand) && void 0 !== t ? t : ''), (this.last4 = null !== (n = e.last4) && void 0 !== n ? n : ''), (this.expiresMonth = null !== (r = e.expiresMonth) && void 0 !== r ? r : 0), (this.expiresYear = null !== (i = e.expiresYear) && void 0 !== i ? i : 0);
    }
}
class E extends d {
    constructor(e) {
        if ((super(e), c(this, 'email', void 0), e.type !== u.HeQ.PAYPAL)) throw Error('Cannot instantiate PaypalSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.PAYPAL));
        this.email = e.email || '';
    }
}
class f extends d {
    constructor(e) {
        if ((super(e), c(this, 'email', void 0), e.type !== u.HeQ.SOFORT && e.type !== u.HeQ.SEPA_DEBIT)) throw Error('Cannot instantiate SofortSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.SOFORT, ' or ') + u.HeQ.SEPA_DEBIT);
        this.email = e.email || '';
    }
}
class h extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.GIROPAY)) throw Error('Cannot instantiate GiropaySourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.GIROPAY));
    }
}
class p extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.PRZELEWY24)) throw Error('Cannot instantiate Przelewy24SourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.PRZELEWY24));
        (this.email = e.email || ''), (this.bank = e.bank);
    }
}
class m extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.EPS)) throw Error('Cannot instantiate EPSSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.EPS));
        this.bank = e.bank;
    }
}
class I extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.IDEAL)) throw Error('Cannot instantiate IdealSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.IDEAL));
        this.bank = e.bank;
    }
}
class T extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.PAYSAFE_CARD)) throw Error('Cannot instantiate PaysafeSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.PAYSAFE_CARD));
    }
}
class g extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.GCASH)) throw Error('Cannot instantiate GcashSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.GCASH));
    }
}
class S extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.GRABPAY_MY)) throw Error('Cannot instantiate GrabPayMySourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.GRABPAY_MY));
    }
}
class A extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.MOMO_WALLET)) throw Error('Cannot instantiate MomoWalletSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.MOMO_WALLET));
    }
}
class v extends d {
    constructor(e) {
        if ((super(e), c(this, 'username', void 0), e.type !== u.HeQ.VENMO)) throw Error('Cannot instantiate VenmoSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.VENMO));
        this.username = e.username || '';
    }
}
class N extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.KAKAOPAY)) throw Error('Cannot instantiate KaKaoPaySourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.KAKAOPAY));
    }
}
class O extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.GOPAY_WALLET)) throw Error('Cannot instantiate GoPayWalletSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.GOPAY_WALLET));
    }
}
class R extends d {
    constructor(e) {
        if ((super(e), e.type !== u.HeQ.BANCONTACT)) throw Error('Cannot instantiate BancontactSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.BANCONTACT));
    }
}
class C extends d {
    constructor(e) {
        if ((super(e), c(this, 'username', void 0), e.type !== u.HeQ.CASH_APP)) throw Error('Cannot instantiate Cashapp with type: '.concat(e.type, ', must be ').concat(u.HeQ.CASH_APP));
        this.username = e.username || '';
    }
}
class y extends d {
    constructor(e) {
        if (((e.id = ''), (e.paymentGateway = u.gg$.APPLE_PARTNER), (e.type = u.HeQ.APPLE), (e.billingAddress = {}), (e.country = ''), (e.invalid = !1), (e.isDefault = !1), (e.flags = 0), super(e), e.type !== u.HeQ.APPLE)) throw Error('Cannot instantiate AppleSourceRecord with type: '.concat(e.type, ', must be ').concat(u.HeQ.APPLE));
    }
}
