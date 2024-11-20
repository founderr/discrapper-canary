a.r(t),
    a.d(t, {
        default: function () {
            return A;
        }
    });
var r = a(200651);
a(192379);
var n = a(442837),
    s = a(704215),
    o = a(481060),
    l = a(2052),
    c = a(100527),
    d = a(906732),
    i = a(963249),
    u = a(706454),
    f = a(594174),
    h = a(626135),
    g = a(63063),
    m = a(74538),
    _ = a(290347),
    p = a(474936),
    x = a(981631),
    b = a(388032),
    C = a(991903),
    N = a(913907),
    E = a(82341),
    y = a(309539),
    T = a(74316);
let v = '2023_summer_bogo',
    j = 'DnkvLW5052Y';
function A(e) {
    let { renderModalProps: t } = e,
        { onClose: a } = t,
        A = (0, n.e7)([u.default], () => u.default.locale),
        w = A.split('-')[0],
        M = 'zh-CN' === A ? 'zh-Hans' : 'zh-TW' === A ? 'zh-Hant' : w,
        H = {
            url: ''
                .concat((0, x.ivE)(j), '?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=')
                .concat('en' === w ? '0' : '1', '&cc_lang_pref=')
                .concat(M),
            width: 498,
            height: 280
        },
        { location: S } = (0, l.O)(),
        { analyticsLocations: L } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        O = (0, n.e7)([f.default], () => f.default.getCurrentUser()),
        G = (0, m.M5)(O, p.p9.TIER_2),
        B = (0, m.I5)(O) && !G;
    return (0, r.jsx)(_.Z, {
        renderModalProps: t,
        heroArt: {
            type: 'embed',
            embed: H,
            thumbnail: {
                url: 'https://i.ytimg.com/vi/'.concat(j, '/maxresdefault.jpg'),
                width: 498,
                height: 280
            },
            href: 'https://youtu.be/'.concat(j)
        },
        modalDismissibleContent: s.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
        header: b.intl.string(b.t.eNfBGh),
        subHeader: b.intl.string(b.t['joqC6+']),
        subHeaderExtra: () =>
            (0, r.jsx)(o.Anchor, {
                className: C.termsApplyAnchor,
                href: g.Z.getArticleURL(x.BhN.SUMMER_2023_BOGO),
                children: (0, r.jsx)(o.Heading, {
                    variant: 'heading-md/normal',
                    className: C.termsApplyBodyText,
                    children: b.intl.string(b.t['sBp+u7'])
                })
            }),
        featureCards: [
            {
                header: b.intl.string(b.t['9h9otr']),
                subHeader: b.intl.format(b.t.OWqqEx, { helpCenterLink: g.Z.getArticleURL(x.BhN.REMIXING) }),
                imageSrc: N,
                tagText: b.intl.string(b.t.EYxi0t)
            },
            {
                header: b.intl.string(b.t.Yft4h4),
                subHeader: b.intl.string(b.t.Q01jYG),
                imageSrc: y
            },
            {
                header: b.intl.string(b.t.bpVW5u),
                subHeader: b.intl.string(b.t.z15nl5),
                imageSrc: E
            }
        ],
        changeLogId: v,
        button: () => {
            let e = B ? 'upgrade_plan_button' : 'get_nitro_button',
                t = Date.now();
            return (0, r.jsxs)(o.ShinyButton, {
                className: C.buttonWide,
                innerClassName: C.innerButton,
                color: o.Button.Colors.GREEN,
                size: o.Button.Sizes.SMALL,
                onClick: () => {
                    h.default.track(x.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: e,
                        seconds_open: Math.round((Date.now() - t) / 1000),
                        target: 'bogo_payment_model'
                    }),
                        (0, i.Z)({
                            subscriptionTier: p.Si.TIER_2,
                            analyticsLocations: L,
                            analyticsObject: {
                                ...S,
                                object: x.qAy.BUTTON_CTA,
                                objectType: x.Qqv.TIER_2
                            },
                            onClose: (e) => {
                                e && a();
                            }
                        });
                },
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: C.nitroIconSubHeader,
                        src: T
                    }),
                    b.intl.string(b.t.J61px8)
                ]
            });
        }
    });
}
