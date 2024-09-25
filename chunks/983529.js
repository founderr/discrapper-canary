var r = n(47120);
var i = n(735250);
n(470079);
var a = n(704215),
    o = n(481060),
    s = n(147913),
    l = n(605236),
    u = n(944486),
    c = n(914010),
    d = n(626135),
    _ = n(150340),
    E = n(981631),
    f = n(921944);
function h(e, t, n) {
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
let p = 'GUILD_ONBOARDING_UPSELL_MODAL',
    m = (e, t) => {
        if (__OVERLAY__ || null == e || null == t || !(0, _.S)(e, a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2)) return;
        (0, l.kk)(a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
        let r = function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.L.DISMISS;
            d.default.track(E.rMx.UPSELL_CLICKED, {
                type: a.z[a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                action: 'dismiss'
            }),
                (0, _.G)(e, a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2),
                (0, l.EW)(a.z.GUILD_ONBOARDING_UPSELL_MODAL_V2, { dismissAction: t });
        };
        (0, o.openModalLazy)(
            async () => {
                let { default: t } = await n.e('93776').then(n.bind(n, 563288));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: e,
                        onClose: (e) => {
                            r(e), n.onClose();
                        }
                    });
            },
            {
                modalKey: p,
                onCloseRequest: () => {
                    r(), (0, o.closeModal)(p);
                }
            }
        );
    };
class I extends s.Z {
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        m(t, n);
    }
    handlePostConnectionOpen() {
        let e = u.Z.getCurrentlySelectedChannelId();
        m(c.Z.getGuildId(), e);
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                CHANNEL_SELECT: this.handleChannelSelect,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            });
    }
}
t.Z = new I();
