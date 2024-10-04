n.d(t, {
    N: function () {
        return p;
    }
});
var i = n(735250);
n(470079);
var a = n(704215),
    s = n(740111),
    r = n(481060),
    l = n(963249),
    o = n(703656),
    c = n(626135),
    d = n(63063),
    u = n(823188),
    _ = n(474936),
    E = n(981631),
    h = n(689938),
    m = n(566851),
    I = n(74316);
function p(e) {
    var t, n;
    let { content: p, renderModalProps: g, analyticsLocations: T, analyticsLocation: f, isLightTheme: S } = e,
        C = 'AnnouncementModalVariant1_'.concat(a.z[Number(p.dismissKey)]),
        { onClose: N } = g,
        A = null != p.button && '' !== p.button.copy ? p.button.copy : h.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN,
        v = (null === (t = p.button) || void 0 === t ? void 0 : t.buttonAction) === s.Wc.OPEN_MARKETING_PAGE ? 'jump_to_mkt_button' : 'get_nitro_button',
        Z =
            (null === (n = p.button) || void 0 === n ? void 0 : n.buttonAction) === s.Wc.OPEN_MARKETING_PAGE
                ? () => {
                      (0, o.uL)(E.Z5c.APPLICATION_STORE), N();
                  }
                : () =>
                      (0, l.Z)({
                          subscriptionTier: _.Si.TIER_2,
                          analyticsLocations: T,
                          analyticsObject: {
                              ...f,
                              object: E.qAy.BUTTON_CTA,
                              objectType: E.Qqv.TIER_2
                          },
                          onClose: (e) => {
                              e && N();
                          }
                      }),
        L =
            '' !== p.helpArticleId
                ? () =>
                      (0, i.jsx)(r.Anchor, {
                          className: m.termsApplyAnchor,
                          href: d.Z.getArticleURL(p.helpArticleId),
                          children: h.Z.Messages.BOGO_TERMS_APPLY
                      })
                : void 0,
        R = {
            type: 'video',
            src: S ? p.heroArtVideoLinkLightTheme : p.videoLink
        };
    null != p.heroArtVideoSubtitles &&
        (R.subtitles = p.heroArtVideoSubtitles.map((e) => ({
            locale: e.locale,
            src: e.link,
            isDefault: !1
        }))),
        ('' !== p.heroArtImageLinkDarkTheme || '' !== p.heroArtImageLinkLightTheme) &&
            (R = {
                type: 'image',
                src: S ? p.heroArtImageLinkLightTheme : p.heroArtImageLinkDarkTheme
            });
    let O = S ? u.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL : u.VE.PREMIUM_TIER_2_WHITE_FILL,
        x =
            '' !== p.modalTopPill
                ? () =>
                      (0, i.jsx)(u.Cy, {
                          text: p.modalTopPill,
                          className: m.modalTopPill,
                          colorOptions: O
                      })
                : void 0;
    return {
        renderModalProps: g,
        header: p.header,
        modalTopExtra: x,
        subHeader: p.subheader,
        subHeaderExtra: L,
        body: p.body,
        heroArt: R,
        featureCards: p.featureCards.map((e) => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: S ? e.imageLinkLightTheme : e.imageLink,
            tagText: '' !== e.pill ? e.pill : void 0
        })),
        changeLogId: C,
        button: () => {
            let e = Date.now();
            return (0, i.jsxs)(r.ShinyButton, {
                className: m.buttonWide,
                innerClassName: m.innerButton,
                wrapperClassName: m.tier2Gradient,
                size: r.Button.Sizes.SMALL,
                onClick: () => {
                    c.default.track(E.rMx.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: C,
                        cta_type: v,
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        target: C
                    }),
                        Z();
                },
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: m.nitroIconSubHeader,
                        src: I
                    }),
                    A
                ]
            });
        },
        modalDismissibleContent: '' !== p.dismissKey ? Number(p.dismissKey) : void 0
    };
}
